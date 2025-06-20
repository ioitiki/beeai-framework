import { Logger } from '../../../logger/logger.js';
import { m as ChatModel, C as ChatModelParameters, h as ChatModelEmitter, d as ChatModelInput, n as ChatModelOutput, a as ChatModelObjectInput, b as ChatModelObjectOutput, i as ChatModelCache, l as ChatModelToolChoiceSupport } from '../../../chat-Dga-Agqu.js';
import { RunContext } from '../../../context.js';
import { BaseChatModel, BaseChatModelCallOptions } from '@langchain/core/language_models/chat_models';
import { BaseMessageLike, AIMessageChunk } from '@langchain/core/messages';
import 'pino';
import '../../../errors.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';
import '../../../backend/message.js';
import 'ai';
import '../../../emitter-C3dO-s2P.js';
import 'promise-based-task';
import '../../../cache/base.js';
import '../../../backend/constants.js';
import '../../../tools/base.js';
import 'ajv';
import '../../../internals/helpers/schema.js';
import 'zod';
import 'zod-to-json-schema';
import '../../../internals/helpers/promise.js';
import '../../../template.js';

declare class LangChainChatModel extends ChatModel {
    protected readonly lcLLM: BaseChatModel;
    readonly parameters: ChatModelParameters;
    readonly emitter: ChatModelEmitter;
    constructor(lcLLM: BaseChatModel, parameters?: ChatModelParameters);
    get modelId(): string;
    get providerId(): string;
    protected _create(input: ChatModelInput, run: RunContext<this>): Promise<ChatModelOutput>;
    protected _createStream(input: ChatModelInput, run: RunContext<this>): AsyncGenerator<ChatModelOutput>;
    protected prepareInput(input: ChatModelInput, run: RunContext<this>): {
        messages: BaseMessageLike[];
        options: BaseChatModelCallOptions;
    };
    protected prepareOutput(output: AIMessageChunk): ChatModelOutput;
    protected _createStructure<T>(input: ChatModelObjectInput<T>, run: RunContext<this>): Promise<ChatModelObjectOutput<T>>;
    createSnapshot(): {
        emitter: ChatModelEmitter;
        lcLLM: BaseChatModel<BaseChatModelCallOptions, AIMessageChunk>;
        cache: ChatModelCache;
        parameters: ChatModelParameters;
        logger: Logger;
        toolChoiceSupport: ChatModelToolChoiceSupport[];
        toolCallFallbackViaResponseFormat: boolean;
        modelSupportsToolCalling: boolean;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

export { LangChainChatModel };
