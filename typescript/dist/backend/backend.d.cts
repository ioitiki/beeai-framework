import { Serializable } from '../internals/serializable.cjs';
import { m as ChatModel, F as FullModelName } from '../chat-BPUsAtZg.cjs';
import { EmbeddingModel } from './embedding.cjs';
import { ProviderName } from './constants.cjs';
import { OptionalExcept } from '../internals/types.cjs';
import './message.cjs';
import 'ai';
import '../context.cjs';
import '../emitter-D5Mu0EEH.cjs';
import '../internals/helpers/promise.cjs';
import '../errors.cjs';
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
import '../internals/helpers/guards.cjs';

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

interface BackendModels {
    chat: ChatModel;
    embedding: EmbeddingModel;
}
declare class Backend extends Serializable implements BackendModels {
    chat: ChatModel;
    embedding: EmbeddingModel;
    constructor(models: BackendModels);
    static fromName(input: OptionalExcept<Record<keyof BackendModels, FullModelName | ProviderName>, "chat">): Promise<Backend>;
    static fromProvider(provider: ProviderName): Promise<Backend>;
    createSnapshot(): {
        chat: ChatModel;
        embedding: EmbeddingModel;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

export { Backend };
