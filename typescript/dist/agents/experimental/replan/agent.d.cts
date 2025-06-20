import { C as Callback, E as Emitter } from '../../../emitter-D5Mu0EEH.cjs';
import { a as BaseAgent, B as BaseAgentRunOptions } from '../../../base-szR2Izbt.cjs';
import { GetRunContext } from '../../../context.cjs';
import { Message } from '../../../backend/message.cjs';
import { RePlanState } from './prompts.cjs';
import { BaseMemory } from '../../../memory/base.cjs';
import { UnconstrainedMemory } from '../../../memory/unconstrainedMemory.cjs';
import { AnyTool } from '../../../tools/base.cjs';
import { m as ChatModel } from '../../../chat-BPUsAtZg.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../internals/serializable.cjs';
import '../../../errors.cjs';
import '../../../internals/helpers/promise.cjs';
import 'ai';
import 'ajv';
import 'zod';
import '../../../template.cjs';
import 'promise-based-task';
import '../../../cache/base.cjs';
import '../../../internals/helpers/schema.cjs';
import 'zod-to-json-schema';
import '../../../backend/constants.cjs';
import '../../../logger/logger.cjs';
import 'pino';

/**
 * Copyright 2025 © BeeAI a Series of LF Projects, LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

interface RePlanRunInput {
    prompt: string | null;
}
interface RePlanRunOutput {
    message: Message;
    intermediateMemory: BaseMemory;
}
interface RePlanToolCall {
    name: string;
    input: any;
}
interface RePlanEvents {
    update: Callback<{
        state: RePlanState;
    }>;
    tool: Callback<{
        type: "start";
        tool: AnyTool;
        input: any;
        calls: RePlanToolCall[];
    } | {
        type: "success";
        tool: AnyTool;
        input: any;
        output: any;
        calls: RePlanToolCall[];
    } | {
        type: "error";
        tool: AnyTool;
        input: any;
        error: Error;
        calls: RePlanToolCall[];
    }>;
}
interface Input {
    memory: BaseMemory;
    tools: AnyTool[];
    llm: ChatModel;
}
declare class RePlanAgent extends BaseAgent<RePlanRunInput, RePlanRunOutput> {
    protected readonly input: Input;
    emitter: Emitter<RePlanEvents>;
    constructor(input: Input);
    protected _run(input: RePlanRunInput, _options: BaseAgentRunOptions, context: GetRunContext<this>): Promise<RePlanRunOutput>;
    protected createRunner(context: GetRunContext<this>): Promise<{
        memory: UnconstrainedMemory;
        run: () => Promise<RePlanState>;
        tools: (calls: RePlanToolCall[]) => Promise<any[]>;
    }>;
    get memory(): BaseMemory;
    set memory(memory: BaseMemory);
}

export { RePlanAgent, type RePlanEvents, type RePlanRunInput, type RePlanRunOutput, type RePlanToolCall };
