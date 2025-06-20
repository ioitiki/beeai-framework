import { a as BaseAgent, b as AgentMeta, B as BaseAgentRunOptions } from '../../../base-BOCDDBvG.js';
import { GetRunContext } from '../../../context.js';
import { C as Callback, E as Emitter } from '../../../emitter-C3dO-s2P.js';
import { BaseMemory } from '../../../memory/base.js';
import { Message, UserMessage } from '../../../backend/message.js';
import { StreamlitAgentTemplates } from './prompts.js';
import { TokenMemory } from '../../../memory/tokenMemory.js';
import { m as ChatModel, n as ChatModelOutput } from '../../../chat-Dga-Agqu.js';
import '../../../errors.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';
import '../../../tools/base.js';
import 'ajv';
import 'promise-based-task';
import '../../../cache/base.js';
import '../../../internals/helpers/schema.js';
import 'zod';
import 'zod-to-json-schema';
import '../../../internals/helpers/promise.js';
import 'ai';
import '../../../template.js';
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

interface StreamlitAgentInput {
    llm: ChatModel;
    memory: BaseMemory;
    templates?: Partial<StreamlitAgentTemplates>;
}
interface StreamlitRunInput {
    prompt: string | null;
}
interface Block {
    name: "text" | "app";
    content: string;
    start: number;
    end: number;
}
interface Result {
    raw: string;
    blocks: Block[];
}
interface StreamlitRunOutput {
    result: Result;
    message: Message;
    memory: BaseMemory;
}
interface StreamlitEvents {
    newToken: Callback<{
        delta: string;
        state: Readonly<{
            content: string;
        }>;
        chunk: ChatModelOutput;
    }>;
}
declare class StreamlitAgent extends BaseAgent<StreamlitRunInput, StreamlitRunOutput> {
    protected readonly input: StreamlitAgentInput;
    emitter: Emitter<StreamlitEvents>;
    constructor(input: StreamlitAgentInput);
    get meta(): AgentMeta;
    set memory(memory: BaseMemory);
    get memory(): BaseMemory;
    protected _run(input: StreamlitRunInput, _options: BaseAgentRunOptions, run: GetRunContext<typeof this>): Promise<StreamlitRunOutput>;
    protected prepare(input: StreamlitRunInput): Promise<{
        runMemory: TokenMemory;
        userMessage: UserMessage | null;
    }>;
    protected parse(raw: string): Result;
    createSnapshot(): {
        input: StreamlitAgentInput;
        isRunning: boolean;
        emitter: Emitter<unknown>;
    };
}

export { StreamlitAgent, type StreamlitAgentInput, type StreamlitEvents, type StreamlitRunInput, type StreamlitRunOutput };
