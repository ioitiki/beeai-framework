import { Message, AssistantMessage, MessageContentPart } from './backend/message.cjs';
import * as ai from 'ai';
import { Run, GetRunContext } from './context.cjs';
import { Serializable } from './internals/serializable.cjs';
import { C as Callback, E as Emitter } from './emitter-D5Mu0EEH.cjs';
import { FrameworkError } from './errors.cjs';
import { Task } from 'promise-based-task';
import { BaseCache } from './cache/base.cjs';
import { ClassConstructor } from './internals/types.cjs';
import { ProviderName, ProviderDef } from './backend/constants.cjs';
import { AnyTool } from './tools/base.cjs';
import { ZodSchema, z, ZodType } from 'zod';
import { SchemaObject } from 'ajv';
import { PromptTemplate } from './template.cjs';
import { Logger } from './logger/logger.cjs';

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

type FullModelName = `${ProviderName}:${string}`;
declare function parseModel(name: string): {
    providerId: "openai" | "azure" | "watsonx" | "ollama" | "google-vertex" | "amazon-bedrock" | "groq" | "xai" | "dummy" | "anthropic";
    modelId: string;
    providerDef: ProviderDef;
};
declare function loadModel<T>(name: ProviderName | FullModelName, type: "embedding" | "chat"): Promise<ClassConstructor<T>>;
declare function generateToolUnionSchema(tools: AnyTool[]): Promise<ZodSchema>;
declare function filterToolsByToolChoice(tools: AnyTool[], value?: ChatModelToolChoice): AnyTool[];

interface ChatModelParameters {
    maxTokens?: number;
    topP?: number;
    frequencyPenalty?: number;
    temperature?: number;
    topK?: number;
    n?: number;
    presencePenalty?: number;
    seed?: number;
    stopSequences?: string[];
}
interface ResponseObjectJson {
    type: "object-json";
    schema?: SchemaObject;
    name?: string;
    description?: string;
}
interface ChatModelObjectInput<T> extends ChatModelParameters {
    schema: z.ZodSchema<T> | ResponseObjectJson;
    systemPromptTemplate?: PromptTemplate<ZodType<{
        schema: string;
    }>>;
    messages: Message[];
    abortSignal?: AbortSignal;
    maxRetries?: number;
}
interface ChatModelObjectOutput<T> {
    object: T;
    output: ChatModelOutput;
}
type ChatModelToolChoice = "auto" | "none" | "required" | AnyTool;
interface ChatModelInput extends ChatModelParameters {
    tools?: AnyTool[];
    abortSignal?: AbortSignal;
    stopSequences?: string[];
    responseFormat?: ZodSchema | ResponseObjectJson;
    toolChoice?: ChatModelToolChoice;
    messages: Message[];
}
type ChatModelFinishReason = "stop" | "length" | "content-filter" | "tool-calls" | "error" | "other" | "unknown";
interface ChatModelUsage {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
}
interface ChatModelEvents {
    newToken?: Callback<{
        value: ChatModelOutput;
        callbacks: {
            abort: () => void;
        };
    }>;
    success?: Callback<{
        value: ChatModelOutput;
    }>;
    start?: Callback<{
        input: ChatModelInput;
    }>;
    error?: Callback<{
        input: ChatModelInput;
        error: FrameworkError;
    }>;
    finish?: Callback<null>;
}
type ChatModelEmitter<A = Record<never, never>> = Emitter<ChatModelEvents & Omit<A, keyof ChatModelEvents>>;
type ChatModelCache = BaseCache<Task<ChatModelOutput[]>>;
type ConfigFn<T> = (value: T) => T;
interface ChatConfig {
    cache?: ChatModelCache | ConfigFn<ChatModelCache>;
    parameters?: ChatModelParameters | ConfigFn<ChatModelParameters>;
}
type ChatModelToolChoiceSupport = "required" | "none" | "single" | "auto";
declare abstract class ChatModel extends Serializable {
    abstract readonly emitter: Emitter<ChatModelEvents>;
    cache: ChatModelCache;
    parameters: ChatModelParameters;
    protected readonly logger: Logger;
    readonly toolChoiceSupport: ChatModelToolChoiceSupport[];
    toolCallFallbackViaResponseFormat: boolean;
    readonly modelSupportsToolCalling: boolean;
    abstract get modelId(): string;
    abstract get providerId(): string;
    create(input: ChatModelInput & {
        stream?: boolean;
    }): Run<ChatModelOutput, this, readonly [ChatModelInput & {
        stream?: boolean;
    }]>;
    createStructure<T>(input: ChatModelObjectInput<T>): Run<ChatModelObjectOutput<T>, this, readonly [ChatModelObjectInput<T>]>;
    config({ cache, parameters }: ChatConfig): void;
    static fromName(name: FullModelName | ProviderName, options?: ChatModelParameters): Promise<ChatModel>;
    protected abstract _create(input: ChatModelInput, run: GetRunContext<typeof this>): Promise<ChatModelOutput>;
    protected abstract _createStream(input: ChatModelInput, run: GetRunContext<typeof this>): AsyncGenerator<ChatModelOutput, void>;
    protected _createStructure<T>(input: ChatModelObjectInput<T>, run: GetRunContext<typeof this>): Promise<ChatModelObjectOutput<T>>;
    createSnapshot(): {
        cache: ChatModelCache;
        emitter: Emitter<ChatModelEvents>;
        parameters: ChatModelParameters;
        logger: Logger;
        toolChoiceSupport: ChatModelToolChoiceSupport[];
        toolCallFallbackViaResponseFormat: boolean;
        modelSupportsToolCalling: boolean;
    };
    destroy(): void;
    protected createCacheAccessor({ abortSignal: _, messages, tools, ...input }: ChatModelInput): Promise<{
        key: string;
        value: ChatModelOutput[] | undefined;
        resolve: <T2 extends ChatModelOutput>(value: T2[]) => void;
        reject: (error: Error) => Promise<void>;
    }>;
    protected shouldForceToolCallViaResponseFormat({ tools, toolChoice, responseFormat, }: ChatModelInput): boolean;
    protected isToolChoiceSupported(choice?: ChatModelToolChoice): boolean;
}
declare class ChatModelOutput extends Serializable {
    readonly messages: Message[];
    usage?: ChatModelUsage | undefined;
    finishReason?: ChatModelFinishReason | undefined;
    constructor(messages: Message[], usage?: ChatModelUsage | undefined, finishReason?: ChatModelFinishReason | undefined);
    static fromChunks(chunks: ChatModelOutput[]): ChatModelOutput;
    merge(other: ChatModelOutput): void;
    getToolCalls(): ai.ToolCallPart[];
    getTextMessages(): AssistantMessage[];
    getTextContent(): string;
    toString(): string;
    createSnapshot(): {
        messages: Message<MessageContentPart, string>[];
        usage: ChatModelUsage | undefined;
        finishReason: ChatModelFinishReason | undefined;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

export { type ChatModelParameters as C, type FullModelName as F, type ChatModelObjectInput as a, type ChatModelObjectOutput as b, type ChatModelToolChoice as c, type ChatModelInput as d, type ChatModelFinishReason as e, type ChatModelUsage as f, type ChatModelEvents as g, type ChatModelEmitter as h, type ChatModelCache as i, type ConfigFn as j, type ChatConfig as k, type ChatModelToolChoiceSupport as l, ChatModel as m, ChatModelOutput as n, loadModel as o, parseModel as p, generateToolUnionSchema as q, filterToolsByToolChoice as r };
