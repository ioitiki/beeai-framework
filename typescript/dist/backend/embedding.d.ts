import { Run, GetRunContext } from '../context.js';
import { Serializable } from '../internals/serializable.js';
import { C as Callback, E as Emitter } from '../emitter-C3dO-s2P.js';
import { FrameworkError } from '../errors.js';
import { F as FullModelName } from '../chat-Dga-Agqu.js';
import { ProviderName } from './constants.js';
import '../internals/helpers/promise.js';
import '../internals/types.js';
import '../internals/helpers/guards.js';
import './message.js';
import 'ai';
import 'promise-based-task';
import '../cache/base.js';
import '../tools/base.js';
import 'ajv';
import '../internals/helpers/schema.js';
import 'zod';
import 'zod-to-json-schema';
import '../template.js';
import '../logger/logger.js';
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
