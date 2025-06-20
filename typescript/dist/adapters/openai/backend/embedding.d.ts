import { OpenAIClient } from './client.js';
import { OpenAIProvider, OpenAIProviderSettings } from '@ai-sdk/openai';
import { VercelEmbeddingModel } from '../../vercel/backend/embedding.js';
import '../../../backend/client.js';
import '../../../internals/serializable.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../backend/embedding.js';
import '../../../context.js';
import '../../../emitter-C3dO-s2P.js';
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

type OpenAIParameters = Parameters<OpenAIProvider["embedding"]>;
type OpenAIEmbeddingModelId = NonNullable<OpenAIParameters[0]>;
type OpenAIEmbeddingModelSettings = NonNullable<OpenAIParameters[1]>;
declare class OpenAIEmbeddingModel extends VercelEmbeddingModel {
    constructor(modelId?: OpenAIEmbeddingModelId, settings?: OpenAIEmbeddingModelSettings, client?: OpenAIProviderSettings | OpenAIClient);
}

export { OpenAIEmbeddingModel, type OpenAIEmbeddingModelId, type OpenAIEmbeddingModelSettings };
