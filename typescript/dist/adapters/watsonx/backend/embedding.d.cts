import { WatsonxClient, WatsonxClientSettings } from './client.cjs';
import { EmbeddingModel, EmbeddingModelEvents, EmbeddingModelInput, EmbeddingModelOutput } from '../../../backend/embedding.cjs';
import { EmbeddingParameters } from '@ibm-cloud/watsonx-ai/dist/watsonx-ai-ml/vml_v1.js';
import { E as Emitter } from '../../../emitter-D5Mu0EEH.cjs';
import '@ibm-cloud/watsonx-ai';
import 'ibm-cloud-sdk-core';
import '../../../backend/client.cjs';
import '../../../internals/serializable.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../context.cjs';
import '../../../internals/helpers/promise.cjs';
import '../../../errors.cjs';
import '../../../chat-BPUsAtZg.cjs';
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
