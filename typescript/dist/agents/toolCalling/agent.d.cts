import { b as AgentMeta, a as BaseAgent } from '../../base-szR2Izbt.cjs';
import { AnyTool } from '../../tools/base.cjs';
import { BaseMemory } from '../../memory/base.cjs';
import { E as Emitter } from '../../emitter-D5Mu0EEH.cjs';
import { ToolCallingAgentTemplates, ToolCallingAgentExecutionConfig, ToolCallingAgentRunInput, ToolCallingAgentRunOutput, ToolCallingAgentRunOptions, ToolCallingAgentCallbacks } from './types.cjs';
import { GetRunContext } from '../../context.cjs';
import { m as ChatModel } from '../../chat-BPUsAtZg.cjs';
import '../../errors.cjs';
import '../../internals/types.cjs';
import '../../internals/helpers/guards.cjs';
import '../../internals/serializable.cjs';
import 'ajv';
import 'promise-based-task';
import '../../cache/base.cjs';
import '../../internals/helpers/schema.cjs';
import 'zod';
import 'zod-to-json-schema';
import '../../internals/helpers/promise.cjs';
import '../../backend/message.cjs';
import 'ai';
import './prompts.cjs';
import '../../template.cjs';
import '../../backend/constants.cjs';
import '../../logger/logger.cjs';
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
