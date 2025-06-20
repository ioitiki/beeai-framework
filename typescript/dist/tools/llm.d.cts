import { BaseToolOptions, Tool, StringToolOutput, ToolEmitter, ToolInput, BaseToolRunOptions } from './base.cjs';
import { z } from 'zod';
import { GetRunContext } from '../context.cjs';
import { PromptTemplate } from '../template.cjs';
import { m as ChatModel } from '../chat-BPUsAtZg.cjs';
import 'ajv';
import '../errors.cjs';
import '../internals/types.cjs';
import '../internals/helpers/guards.cjs';
import '../internals/serializable.cjs';
import 'promise-based-task';
import '../cache/base.cjs';
import '../internals/helpers/schema.cjs';
import 'zod-to-json-schema';
import '../emitter-D5Mu0EEH.cjs';
import '../internals/helpers/promise.cjs';
import '../backend/message.cjs';
import 'ai';
import '../backend/constants.cjs';
import '../logger/logger.cjs';
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

interface LLMToolInput extends BaseToolOptions {
    llm: ChatModel;
    name?: string;
    description?: string;
    template?: typeof LLMTool.template;
}
declare class LLMTool extends Tool<StringToolOutput, LLMToolInput> {
    protected readonly input: LLMToolInput;
    name: string;
    description: string;
    readonly emitter: ToolEmitter<ToolInput<this>, StringToolOutput>;
    constructor(input: LLMToolInput);
    inputSchema(): z.ZodObject<{
        task: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        task: string;
    }, {
        task: string;
    }>;
    static readonly template: PromptTemplate<z.ZodObject<{
        task: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        task: string;
    }, {
        task: string;
    }>>;
    protected _run(input: ToolInput<this>, _options: Partial<BaseToolRunOptions>, run: GetRunContext<this>): Promise<StringToolOutput>;
}

export { LLMTool, type LLMToolInput };
