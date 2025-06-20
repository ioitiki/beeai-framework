import { WatsonxClient, WatsonxClientSettings } from './client.js';
import { EmbeddingModel, EmbeddingModelEvents, EmbeddingModelInput, EmbeddingModelOutput } from '../../../backend/embedding.js';
import { EmbeddingParameters } from '@ibm-cloud/watsonx-ai/dist/watsonx-ai-ml/vml_v1.js';
import { E as Emitter } from '../../../emitter-C3dO-s2P.js';
import '@ibm-cloud/watsonx-ai';
import 'ibm-cloud-sdk-core';
import '../../../backend/client.js';
import '../../../internals/serializable.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../context.js';
import '../../../internals/helpers/promise.js';
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

type WatsonxEmbeddingModelParameters = EmbeddingParameters;
declare class WatsonxEmbeddingModel extends EmbeddingModel {
    readonly modelId: string;
    readonly parameters: WatsonxEmbeddingModelParameters;
    protected readonly client: WatsonxClient;
    readonly emitter: Emitter<EmbeddingModelEvents>;
    get providerId(): string;
    constructor(modelId?: string, parameters?: WatsonxEmbeddingModelParameters, client?: WatsonxClient | WatsonxClientSettings);
    protected _create(input: EmbeddingModelInput): Promise<EmbeddingModelOutput>;
    createSnapshot(): {
        modelId: string;
        client: WatsonxClient;
        emitter: Emitter<EmbeddingModelEvents>;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

export { WatsonxEmbeddingModel, type WatsonxEmbeddingModelParameters };
