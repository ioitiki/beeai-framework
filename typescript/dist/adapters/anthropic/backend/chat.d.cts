import { VercelChatModel } from '../../vercel/backend/chat.cjs';
import { AnthropicClientSettings, AnthropicClient } from './client.cjs';
import { AnthropicProvider } from '@ai-sdk/anthropic';
import '../../../logger/logger.cjs';
import 'pino';
import '../../../errors.cjs';
import '../../../internals/types.cjs';
import '../../../internals/helpers/guards.cjs';
import '../../../internals/serializable.cjs';
import '../../../chat-BPUsAtZg.cjs';
import '../../../backend/message.cjs';
import 'ai';
import '../../../context.cjs';
import '../../../emitter-D5Mu0EEH.cjs';
import '../../../internals/helpers/promise.cjs';
import 'promise-based-task';
import '../../../cache/base.cjs';
import '../../../backend/constants.cjs';
import '../../../tools/base.cjs';
import 'ajv';
import '../../../internals/helpers/schema.cjs';
import 'zod';
import 'zod-to-json-schema';
import '../../../template.cjs';
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

type AnthropicParameters = Parameters<AnthropicProvider["languageModel"]>;
type AnthropicChatModelId = NonNullable<AnthropicParameters[0]>;
type AnthropicChatModelSettings = NonNullable<AnthropicParameters[1]>;
declare class AnthropicChatModel extends VercelChatModel {
    constructor(modelId?: AnthropicChatModelId, settings?: AnthropicChatModelSettings, client?: AnthropicClientSettings | AnthropicClient);
}

export { AnthropicChatModel, type AnthropicChatModelId, type AnthropicChatModelSettings };
