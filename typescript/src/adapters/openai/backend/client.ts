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

import { createOpenAI, OpenAIProvider, OpenAIProviderSettings } from "@ai-sdk/openai";
import { getEnv } from "@/internals/env.js";
import { BackendClient } from "@/backend/client.js";
import { parseHeadersFromEnv, vercelFetcher } from "@/adapters/vercel/backend/utils.js";

export type OpenAIClientSettings = OpenAIProviderSettings;

export class OpenAIClient extends BackendClient<OpenAIClientSettings, OpenAIProvider> {
  protected create(): OpenAIProvider {
    const extraHeaders = parseHeadersFromEnv("OPENAI_API_HEADERS");

    const baseURL = this.settings?.baseURL || getEnv("OPENAI_API_ENDPOINT");
    let compatibility: string | undefined =
      this.settings?.compatibility || getEnv("OPENAI_COMPATIBILITY_MODE");
    if (baseURL && !compatibility) {
      compatibility = "compatible";
    } else if (!baseURL && !compatibility) {
      compatibility = "strict";
    }

    return createOpenAI({
      ...this.settings,
      compatibility: compatibility as "strict" | "compatible" | undefined,
      apiKey: this.settings?.apiKey || getEnv("OPENAI_API_KEY"),
      baseURL,
      headers: {
        ...extraHeaders,
        ...this.settings?.headers,
      },
      fetch: vercelFetcher(this.settings?.fetch),
    });
  }
}
