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

import { getEnv } from "@/internals/env.js";
import { createOllama, OllamaProvider, OllamaProviderSettings } from "ollama-ai-provider";
import { BackendClient } from "@/backend/client.js";
import { parseHeadersFromEnv, vercelFetcher } from "@/adapters/vercel/backend/utils.js";

export type OllamaClientSettings = OllamaProviderSettings & { apiKey?: string };

export class OllamaClient extends BackendClient<OllamaClientSettings, OllamaProvider> {
  protected create(): OllamaProvider {
    const { apiKey: _apiKey, baseURL, headers, ...settings } = this.settings ?? {};
    const apiKey = _apiKey || getEnv("OLLAMA_API_KEY");

    return createOllama({
      ...settings,
      baseURL: baseURL || getEnv("OLLAMA_BASE_URL"),
      fetch: vercelFetcher(this.settings?.fetch),
      headers: {
        ...parseHeadersFromEnv("OLLAMA_API_HEADERS"),
        ...headers,
        ...(apiKey && { Authorization: `Bearer ${apiKey}` }),
      },
    });
  }
}
