import { VercelChatModel } from '../../vercel/backend/chat.js';
import { OllamaProvider } from 'ollama-ai-provider';
import { OllamaClient, OllamaClientSettings } from './client.js';
import { l as ChatModelToolChoiceSupport } from '../../../chat-Dga-Agqu.js';
import '../../../logger/logger.js';
import 'pino';
import '../../../errors.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';
import 'ai';
import '../../../emitter-C3dO-s2P.js';
import '../../../backend/message.js';
import '../../../context.js';
import '../../../internals/helpers/promise.js';
import 'promise-based-task';
import '../../../cache/base.js';
import '../../../backend/constants.js';
import '../../../tools/base.js';
import 'ajv';
import '../../../internals/helpers/schema.js';
import 'zod';
import 'zod-to-json-schema';
import '../../../template.js';
import '../../../backend/client.js';

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

type OllamaParameters = Parameters<OllamaProvider["languageModel"]>;
type OllamaChatModelId = NonNullable<OllamaParameters[0]>;
type OllamaChatModelSettings = NonNullable<OllamaParameters[1]>;
declare class OllamaChatModel extends VercelChatModel {
    readonly supportsToolStreaming = false;
    readonly toolChoiceSupport: ChatModelToolChoiceSupport[];
    constructor(modelId?: OllamaChatModelId, settings?: OllamaChatModelSettings, client?: OllamaClient | OllamaClientSettings);
}

export { OllamaChatModel, type OllamaChatModelId, type OllamaChatModelSettings };
