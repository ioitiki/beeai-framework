import { Logger } from '../../../logger/logger.cjs';
import { m as ChatModel, C as ChatModelParameters, h as ChatModelEmitter, d as ChatModelInput, n as ChatModelOutput, a as ChatModelObjectInput, b as ChatModelObjectOutput, i as ChatModelCache, l as ChatModelToolChoiceSupport } from '../../../chat-BPUsAtZg.cjs';
import { RunContext } from '../../../context.cjs';
import { BaseChatModel, BaseChatModelCallOptions } from '@langchain/core/language_models/chat_models';
import { BaseMessageLike, AIMessageChunk } from '@langchain/core/messages';
import 'pino';
import '../../../errors.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../internals/serializable.cjs';
import '../../../backend/message.cjs';
import 'ai';
import '../../../emitter-D5Mu0EEH.cjs';
import 'promise-based-task';
import '../../../cache/base.cjs';
import '../../../backend/constants.cjs';
import '../../../tools/base.cjs';
import 'ajv';
import '../../../internals/helpers/schema.cjs';
import 'zod';
import 'zod-to-json-schema';
import '../../../internals/helpers/promise.cjs';
import '../../../template.cjs';

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
