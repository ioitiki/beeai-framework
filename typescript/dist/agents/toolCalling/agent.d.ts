import { b as AgentMeta, a as BaseAgent } from '../../base-BOCDDBvG.js';
import { AnyTool } from '../../tools/base.js';
import { BaseMemory } from '../../memory/base.js';
import { E as Emitter } from '../../emitter-C3dO-s2P.js';
import { ToolCallingAgentTemplates, ToolCallingAgentExecutionConfig, ToolCallingAgentRunInput, ToolCallingAgentRunOutput, ToolCallingAgentRunOptions, ToolCallingAgentCallbacks } from './types.js';
import { GetRunContext } from '../../context.js';
import { m as ChatModel } from '../../chat-Dga-Agqu.js';
import '../../errors.js';
import '../../internals/types.js';
import '../../internals/helpers/guards.js';
import '../../internals/serializable.js';
import 'ajv';
import 'promise-based-task';
import '../../cache/base.js';
import '../../internals/helpers/schema.js';
import 'zod';
import 'zod-to-json-schema';
import '../../internals/helpers/promise.js';
import '../../backend/message.js';
import 'ai';
import './prompts.js';
import '../../template.js';
import '../../backend/constants.js';
import '../../logger/logger.js';
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

type ToolCallingAgentTemplateFactory<K extends keyof ToolCallingAgentTemplates> = (template: ToolCallingAgentTemplates[K]) => ToolCallingAgentTemplates[K];
interface ToolCallingAgentInput {
    llm: ChatModel;
    memory: BaseMemory;
    tools: AnyTool[];
    meta?: Omit<AgentMeta, "tools">;
    templates?: Partial<{
        [K in keyof ToolCallingAgentTemplates]: ToolCallingAgentTemplates[K] | ToolCallingAgentTemplateFactory<K>;
    }>;
    execution?: ToolCallingAgentExecutionConfig;
    saveIntermediateSteps?: boolean;
}
declare class ToolCallingAgent extends BaseAgent<ToolCallingAgentRunInput, ToolCallingAgentRunOutput, ToolCallingAgentRunOptions> {
    readonly input: ToolCallingAgentInput;
    readonly emitter: Emitter<ToolCallingAgentCallbacks>;
    constructor(input: ToolCallingAgentInput);
    protected _run(input: ToolCallingAgentRunInput, options: ToolCallingAgentRunOptions | undefined, run: GetRunContext<typeof this>): Promise<ToolCallingAgentRunOutput>;
    get meta(): AgentMeta;
    protected get templates(): ToolCallingAgentTemplates;
    createSnapshot(): {
        input: ToolCallingAgentInput;
        emitter: Emitter<ToolCallingAgentCallbacks>;
        isRunning: boolean;
    };
    set memory(memory: BaseMemory);
    get memory(): BaseMemory;
}

export { ToolCallingAgent, type ToolCallingAgentInput, type ToolCallingAgentTemplateFactory };
