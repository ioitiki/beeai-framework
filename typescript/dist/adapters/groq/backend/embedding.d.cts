import { VercelEmbeddingModel } from '../../vercel/backend/embedding.cjs';
import { GroqClientSettings, GroqClient } from './client.cjs';
import { GroqProvider } from '@ai-sdk/groq';
import '../../../backend/embedding.cjs';
import '../../../context.cjs';
import '../../../emitter-D5Mu0EEH.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../internals/serializable.cjs';
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
import '../../../backend/client.cjs';

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

type GroqParameters = Parameters<GroqProvider["textEmbeddingModel"]>;
type GroqEmbeddingModelId = NonNullable<GroqParameters[0]>;
type GroqEmbeddingModelSettings = Record<string, any>;
declare class GroqEmbeddingModel extends VercelEmbeddingModel {
    constructor(modelId?: GroqEmbeddingModelId, _settings?: GroqEmbeddingModelSettings, client?: GroqClientSettings | GroqClient);
}

export { GroqEmbeddingModel, type GroqEmbeddingModelId, type GroqEmbeddingModelSettings };
