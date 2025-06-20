import { Run, GetRunContext } from '../context.cjs';
import { Serializable } from '../internals/serializable.cjs';
import { C as Callback, E as Emitter } from '../emitter-D5Mu0EEH.cjs';
import { FrameworkError } from '../errors.cjs';
import { F as FullModelName } from '../chat-BPUsAtZg.cjs';
import { ProviderName } from './constants.cjs';
import '../internals/helpers/promise.cjs';
import '../internals/types.cjs';
import '../internals/helpers/guards.cjs';
import './message.cjs';
import 'ai';
import 'promise-based-task';
import '../cache/base.cjs';
import '../tools/base.cjs';
import 'ajv';
import '../internals/helpers/schema.cjs';
import 'zod';
import 'zod-to-json-schema';
import '../template.cjs';
import '../logger/logger.cjs';
import 'pino';

interface EmbeddingModelInput {
    values: string[];
    abortSignal?: AbortSignal;
    maxRetries?: number;
}
interface EmbeddingModelOutput {
    values: string[];
    embeddings: number[][];
    usage: {
        tokens?: number;
    };
}
interface EmbeddingModelEvents {
    success?: Callback<{
        value: EmbeddingModelOutput;
    }>;
    start?: Callback<{
        input: EmbeddingModelInput;
    }>;
    error?: Callback<{
        input: EmbeddingModelInput;
        error: FrameworkError;
    }>;
    finish?: Callback<null>;
}
type EmbeddingModelEmitter<A = Record<never, never>> = Emitter<EmbeddingModelEvents & Omit<A, keyof EmbeddingModelEvents>>;
declare abstract class EmbeddingModel extends Serializable {
    abstract readonly emitter: Emitter<EmbeddingModelEvents>;
    abstract get modelId(): string;
    abstract get providerId(): string;
    create(input: EmbeddingModelInput): Run<EmbeddingModelOutput, this, readonly [EmbeddingModelInput]>;
    static fromName(name: FullModelName | ProviderName): Promise<EmbeddingModel>;
    protected abstract _create(input: EmbeddingModelInput, run: GetRunContext<typeof this>): Promise<EmbeddingModelOutput>;
    createSnapshot(): {
        emitter: Emitter<EmbeddingModelEvents>;
    };
    destroy(): void;
}

export { EmbeddingModel, type EmbeddingModelEmitter, type EmbeddingModelEvents, type EmbeddingModelInput, type EmbeddingModelOutput };
