import { EmbeddingModel as EmbeddingModel$1, EmbeddingModelEvents, EmbeddingModelInput, EmbeddingModelOutput } from '../../../backend/embedding.cjs';
import { EmbeddingModel } from 'ai';
import { E as Emitter } from '../../../emitter-D5Mu0EEH.cjs';
import { GetRunContext } from '../../../context.cjs';
import '../../../internals/serializable.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../errors.cjs';
import '../../../chat-BPUsAtZg.cjs';
import '../../../backend/message.cjs';
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
import '../../../logger/logger.cjs';
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

type InternalEmbeddingModel = EmbeddingModel<string>;
declare class VercelEmbeddingModel<R extends InternalEmbeddingModel = InternalEmbeddingModel> extends EmbeddingModel$1 {
    readonly model: R;
    readonly emitter: Emitter<EmbeddingModelEvents>;
    constructor(model: R);
    get modelId(): string;
    get providerId(): string;
    protected _create(input: EmbeddingModelInput, run: GetRunContext<this>): Promise<EmbeddingModelOutput>;
    createSnapshot(): {
        providerId: string;
        modelId: R;
        emitter: Emitter<EmbeddingModelEvents>;
    };
    loadSnapshot({ providerId, modelId, ...snapshot }: ReturnType<typeof this.createSnapshot>): Promise<void>;
}

export { VercelEmbeddingModel };
