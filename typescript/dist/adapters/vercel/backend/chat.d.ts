import { Logger } from '../../../logger/logger.js';
import { m as ChatModel, g as ChatModelEvents, d as ChatModelInput, n as ChatModelOutput, a as ChatModelObjectInput, b as ChatModelObjectOutput, i as ChatModelCache, C as ChatModelParameters, l as ChatModelToolChoiceSupport } from '../../../chat-Dga-Agqu.js';
import { LanguageModelV1, generateText, CoreAssistantMessage, CoreToolMessage } from 'ai';
import { E as Emitter } from '../../../emitter-C3dO-s2P.js';
import { Message } from '../../../backend/message.js';
import { GetRunContext } from '../../../context.js';
import 'pino';
import '../../../errors.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';
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

declare abstract class VercelChatModel<M extends LanguageModelV1 = LanguageModelV1> extends ChatModel {
    private readonly model;
    readonly emitter: Emitter<ChatModelEvents>;
    readonly supportsToolStreaming: boolean;
    constructor(model: M);
    get modelId(): string;
    get providerId(): string;
    protected _create(input: ChatModelInput, run: GetRunContext<this>): Promise<ChatModelOutput>;
    protected _createStructure<T>({ schema, ...input }: ChatModelObjectInput<T>, run: GetRunContext<this>): Promise<ChatModelObjectOutput<T>>;
    _createStream(input: ChatModelInput, run: GetRunContext<this>): AsyncGenerator<ChatModelOutput, void, unknown>;
    protected transformInput(input: ChatModelInput): Promise<Parameters<typeof generateText<Record<string, any>>>[0]>;
    protected transformMessages(messages: (CoreAssistantMessage | CoreToolMessage)[]): Message[];
    createSnapshot(): {
        providerId: string;
        modelId: string;
        supportsToolStreaming: boolean;
        cache: ChatModelCache;
        emitter: Emitter<ChatModelEvents>;
        parameters: ChatModelParameters;
        logger: Logger;
        toolChoiceSupport: ChatModelToolChoiceSupport[];
        toolCallFallbackViaResponseFormat: boolean;
        modelSupportsToolCalling: boolean;
    };
    loadSnapshot({ providerId, modelId, ...snapshot }: ReturnType<typeof this.createSnapshot>): Promise<void>;
}

export { VercelChatModel };
