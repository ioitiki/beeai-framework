import { C as Callback, E as Emitter } from '../../../emitter-C3dO-s2P.js';
import { a as BaseAgent, B as BaseAgentRunOptions } from '../../../base-BOCDDBvG.js';
import { GetRunContext } from '../../../context.js';
import { Message } from '../../../backend/message.js';
import { RePlanState } from './prompts.js';
import { BaseMemory } from '../../../memory/base.js';
import { UnconstrainedMemory } from '../../../memory/unconstrainedMemory.js';
import { AnyTool } from '../../../tools/base.js';
import { m as ChatModel } from '../../../chat-Dga-Agqu.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';
import '../../../errors.js';
import '../../../internals/helpers/promise.js';
import 'ai';
import 'ajv';
import 'zod';
import '../../../template.js';
import 'promise-based-task';
import '../../../cache/base.js';
import '../../../internals/helpers/schema.js';
import 'zod-to-json-schema';
import '../../../backend/constants.js';
import '../../../logger/logger.js';
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
