import { Logger } from '../../../logger/logger.js';
import { m as ChatModel, h as ChatModelEmitter, l as ChatModelToolChoiceSupport, k as ChatConfig, d as ChatModelInput, n as ChatModelOutput, C as ChatModelParameters, i as ChatModelCache, g as ChatModelEvents } from '../../../chat-Dga-Agqu.js';
import { Message, MessageContentPart } from '../../../backend/message.js';
import { WatsonxClient, WatsonxClientSettings } from './client.js';
import { TextChatResultChoice, TextChatUsage, TextChatParams } from '@ibm-cloud/watsonx-ai/dist/watsonx-ai-ml/vml_v1.js';
import { E as Emitter } from '../../../emitter-C3dO-s2P.js';
import { GetRunContext } from '../../../context.js';
import 'pino';
import '../../../errors.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';
import 'ai';
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
import '@ibm-cloud/watsonx-ai';
import 'ibm-cloud-sdk-core';
import '../../../backend/client.js';

declare class WatsonxChatModel extends ChatModel {
    readonly modelId: string;
    protected readonly client: WatsonxClient;
    readonly emitter: ChatModelEmitter;
    readonly toolChoiceSupport: ChatModelToolChoiceSupport[];
    get providerId(): string;
    constructor(modelId?: string, client?: WatsonxClient | WatsonxClientSettings);
    config(config: ChatConfig): this;
    protected _create(input: ChatModelInput, run: GetRunContext<any>): Promise<ChatModelOutput>;
    _createStream(input: ChatModelInput, run: GetRunContext<this>): AsyncGenerator<ChatModelOutput, void, unknown>;
    protected extractOutput(choices: TextChatResultChoice[], usage?: TextChatUsage): {
        finishReason: ChatModelOutput["finishReason"];
        usage: {
            completionTokens: number;
            promptTokens: number;
            totalTokens: number;
        } | undefined;
        messages: Message<MessageContentPart, string>[];
    };
    protected prepareInput(overrides: ChatModelInput): Promise<TextChatParams>;
    createSnapshot(): {
        modelId: string;
        parameters: ChatModelParameters;
        client: WatsonxClient;
        cache: ChatModelCache;
        emitter: Emitter<ChatModelEvents>;
        logger: Logger;
        toolChoiceSupport: ChatModelToolChoiceSupport[];
        toolCallFallbackViaResponseFormat: boolean;
        modelSupportsToolCalling: boolean;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

export { WatsonxChatModel };
