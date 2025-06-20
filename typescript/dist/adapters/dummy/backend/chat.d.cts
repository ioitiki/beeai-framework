import { Logger } from '../../../logger/logger.cjs';
import { m as ChatModel, C as ChatModelParameters, g as ChatModelEvents, d as ChatModelInput, n as ChatModelOutput, i as ChatModelCache, l as ChatModelToolChoiceSupport } from '../../../chat-BPUsAtZg.cjs';
import { GetRunContext } from '../../../context.cjs';
import { E as Emitter } from '../../../emitter-D5Mu0EEH.cjs';
import 'pino';
import '../../../errors.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../internals/serializable.cjs';
import '../../../backend/message.cjs';
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
