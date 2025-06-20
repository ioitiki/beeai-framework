import { Logger } from '../../../logger/logger.js';
import { m as ChatModel, C as ChatModelParameters, g as ChatModelEvents, d as ChatModelInput, n as ChatModelOutput, i as ChatModelCache, l as ChatModelToolChoiceSupport } from '../../../chat-Dga-Agqu.js';
import { GetRunContext } from '../../../context.js';
import { E as Emitter } from '../../../emitter-C3dO-s2P.js';
import 'pino';
import '../../../errors.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';
import '../../../backend/message.js';
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

declare class DummyChatModel extends ChatModel {
    readonly modelId: string;
    readonly parameters: ChatModelParameters;
    readonly emitter: Emitter<ChatModelEvents>;
    constructor(modelId?: string, parameters?: ChatModelParameters);
    get providerId(): string;
    protected _create(_input: ChatModelInput, _run: GetRunContext<this>): Promise<ChatModelOutput>;
    protected _createStream(_input: ChatModelInput, _run: GetRunContext<this>): AsyncGenerator<ChatModelOutput>;
    createSnapshot(): {
        modelId: string;
        cache: ChatModelCache;
        emitter: Emitter<ChatModelEvents>;
        parameters: ChatModelParameters;
        logger: Logger;
        toolChoiceSupport: ChatModelToolChoiceSupport[];
        toolCallFallbackViaResponseFormat: boolean;
        modelSupportsToolCalling: boolean;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

export { DummyChatModel };
