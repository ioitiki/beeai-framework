import { Logger } from '../../../logger/logger.cjs';
import { m as ChatModel, h as ChatModelEmitter, l as ChatModelToolChoiceSupport, k as ChatConfig, d as ChatModelInput, n as ChatModelOutput, C as ChatModelParameters, i as ChatModelCache, g as ChatModelEvents } from '../../../chat-BPUsAtZg.cjs';
import { Message, MessageContentPart } from '../../../backend/message.cjs';
import { WatsonxClient, WatsonxClientSettings } from './client.cjs';
import { TextChatResultChoice, TextChatUsage, TextChatParams } from '@ibm-cloud/watsonx-ai/dist/watsonx-ai-ml/vml_v1.js';
import { E as Emitter } from '../../../emitter-D5Mu0EEH.cjs';
import { GetRunContext } from '../../../context.cjs';
import 'pino';
import '../../../errors.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../internals/serializable.cjs';
import 'ai';
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
import '@ibm-cloud/watsonx-ai';
import 'ibm-cloud-sdk-core';
import '../../../backend/client.cjs';

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
