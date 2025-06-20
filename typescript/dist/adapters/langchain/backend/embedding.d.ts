import { EmbeddingModel, EmbeddingModelEvents, EmbeddingModelInput, EmbeddingModelOutput } from '../../../backend/embedding.js';
import { RunContext } from '../../../context.js';
import { E as Emitter } from '../../../emitter-C3dO-s2P.js';
import { Embeddings } from '@langchain/core/embeddings';
import '../../../internals/serializable.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../errors.js';
import '../../../chat-Dga-Agqu.js';
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
import '../../../logger/logger.js';
import 'pino';

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

declare class LangChainEmbeddingModel extends EmbeddingModel {
    protected readonly lcEmbedding: Embeddings;
    readonly emitter: Emitter<EmbeddingModelEvents>;
    constructor(lcEmbedding: Embeddings);
    get modelId(): string;
    get providerId(): string;
    protected _create(input: EmbeddingModelInput, run: RunContext<this>): Promise<EmbeddingModelOutput>;
    createSnapshot(): {
        lcEmbedding: Embeddings;
        emitter: Emitter<EmbeddingModelEvents>;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

export { LangChainEmbeddingModel };
