import { C as Callback } from '../../../emitter-C3dO-s2P.js';
import '../../../internals/types.js';
import '../../../internals/helpers/guards.js';
import '../../../internals/serializable.js';

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

interface ACPAgentUpdateEvent {
    key: string;
    value: any;
}
interface ACPAgentErrorEvent {
    message: string;
}
interface ACPAgentEvents {
    update?: Callback<ACPAgentUpdateEvent>;
    error?: Callback<ACPAgentErrorEvent>;
}

export type { ACPAgentErrorEvent, ACPAgentEvents, ACPAgentUpdateEvent };
