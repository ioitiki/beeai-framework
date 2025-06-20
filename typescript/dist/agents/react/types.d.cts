import { BaseMemory } from '../../memory/base.cjs';
import { Message } from '../../backend/message.cjs';
import { C as Callback } from '../../emitter-D5Mu0EEH.cjs';
import { AnyTool, BaseToolRunOptions, ToolOutput, ToolError } from '../../tools/base.cjs';
import { ReActAgentSystemPrompt, ReActAgentAssistantPrompt, ReActAgentUserPrompt, ReActAgentUserEmptyPrompt, ReActAgentToolErrorPrompt, ReActAgentToolInputErrorPrompt, ReActAgentToolNoResultsPrompt, ReActAgentToolNotFoundPrompt, ReActAgentSchemaErrorPrompt } from './prompts.cjs';
import { LinePrefixParser } from '../../parsers/linePrefix.cjs';
import { ZodParserField, JSONParserField } from '../../parsers/field.cjs';
import { NonUndefined } from '../../internals/types.cjs';
import { n as ChatModelOutput } from '../../chat-BPUsAtZg.cjs';
import '../../errors.cjs';
import '../../internals/helpers/guards.cjs';
import '../../internals/serializable.cjs';
import 'ai';
import 'ajv';
import '../../context.cjs';
import '../../internals/helpers/promise.cjs';
import 'promise-based-task';
import '../../cache/base.cjs';
import '../../internals/helpers/schema.cjs';
import 'zod';
import 'zod-to-json-schema';
import '../../template.cjs';
import '../../parsers/errors.cjs';
import '@streamparser/json';
import 'jsonrepair/stream';
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

interface ReActAgentRunInput {
    prompt: string | null;
}
interface ReActAgentRunOutput {
    result: Message;
    iterations: ReActAgentRunIteration[];
    memory: BaseMemory;
}
interface ReActAgentRunIteration {
    raw: ChatModelOutput;
    state: ReActIterationResult;
}
interface ReActAgentExecutionConfig {
    totalMaxRetries?: number;
    maxRetriesPerStep?: number;
    maxIterations?: number;
}
interface ReActAgentRunOptions {
    signal?: AbortSignal;
    execution?: ReActAgentExecutionConfig;
}
interface ReActAgentMeta {
    iteration: number;
}
interface ReActAgentUpdateMeta extends ReActAgentMeta {
    success: boolean;
}
interface ReActAgentCallbacks {
    start?: Callback<{
        meta: ReActAgentMeta;
        tools: AnyTool[];
        memory: BaseMemory;
    }>;
    error?: Callback<{
        error: Error;
        meta: ReActAgentMeta;
    }>;
    retry?: Callback<{
        meta: ReActAgentMeta;
    }>;
    success?: Callback<{
        data: Message;
        iterations: ReActAgentRunIteration[];
        memory: BaseMemory;
        meta: ReActAgentMeta;
    }>;
    update?: Callback<{
        data: ReActIterationResult;
        update: {
            key: keyof ReActIterationResult;
            value: string;
            parsedValue: unknown;
        };
        meta: ReActAgentUpdateMeta;
        memory: BaseMemory;
    }>;
    partialUpdate?: Callback<{
        data: ReActAgentIterationResultPartial;
        update: {
            key: keyof ReActIterationResult;
            value: string;
            parsedValue: unknown;
        };
        meta: ReActAgentUpdateMeta;
    }>;
    toolStart?: Callback<{
        data: {
            tool: AnyTool;
            input: unknown;
            options: BaseToolRunOptions;
            iteration: ReActAgentIterationToolResult;
        };
        meta: ReActAgentMeta;
    }>;
    toolSuccess?: Callback<{
        data: {
            tool: AnyTool;
            input: unknown;
            options: BaseToolRunOptions;
            result: ToolOutput;
            iteration: ReActAgentIterationToolResult;
        };
        meta: ReActAgentMeta;
    }>;
    toolError?: Callback<{
        data: {
            tool: AnyTool;
            input: unknown;
            options: BaseToolRunOptions;
            error: ToolError;
            iteration: ReActAgentIterationToolResult;
        };
        meta: ReActAgentMeta;
    }>;
}
interface ReActAgentTemplates {
    system: typeof ReActAgentSystemPrompt;
    assistant: typeof ReActAgentAssistantPrompt;
    user: typeof ReActAgentUserPrompt;
    userEmpty: typeof ReActAgentUserEmptyPrompt;
    toolError: typeof ReActAgentToolErrorPrompt;
    toolInputError: typeof ReActAgentToolInputErrorPrompt;
    toolNoResultError: typeof ReActAgentToolNoResultsPrompt;
    toolNotFoundError: typeof ReActAgentToolNotFoundPrompt;
    schemaError: typeof ReActAgentSchemaErrorPrompt;
}
type ReActAgentParserInput = LinePrefixParser.define<{
    thought: ZodParserField<string>;
    tool_name: ZodParserField<string>;
    tool_input: JSONParserField<Record<string, any>>;
    tool_output: ZodParserField<string>;
    final_answer: ZodParserField<string>;
}>;
type ReActAgentParser = LinePrefixParser<ReActAgentParserInput>;
type ReActIterationResult = LinePrefixParser.inferOutput<ReActAgentParser>;
type ReActAgentIterationResultPartial = LinePrefixParser.inferPartialOutput<ReActAgentParser>;
type ReActAgentIterationToolResult = NonUndefined<ReActIterationResult, "tool_input" | "tool_name">;

export type { ReActAgentCallbacks, ReActAgentExecutionConfig, ReActAgentIterationResultPartial, ReActAgentIterationToolResult, ReActAgentMeta, ReActAgentParserInput, ReActAgentRunInput, ReActAgentRunIteration, ReActAgentRunOptions, ReActAgentRunOutput, ReActAgentTemplates, ReActAgentUpdateMeta, ReActIterationResult };
