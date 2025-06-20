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
declare const BackendProviders: {
    readonly OpenAI: {
        readonly name: "OpenAI";
        readonly module: "openai";
        readonly aliases: string[];
    };
    readonly Azure: {
        readonly name: "Azure";
        readonly module: "azure";
        readonly aliases: string[];
    };
    readonly Watsonx: {
        readonly name: "Watsonx";
        readonly module: "watsonx";
        readonly aliases: string[];
    };
    readonly Ollama: {
        readonly name: "Ollama";
        readonly module: "ollama";
        readonly aliases: string[];
    };
    readonly GoogleVertex: {
        readonly name: "GoogleVertex";
        readonly module: "google-vertex";
        readonly aliases: string[];
    };
    readonly Bedrock: {
        readonly name: "Bedrock";
        readonly module: "amazon-bedrock";
        readonly aliases: string[];
    };
    readonly Groq: {
        readonly name: "Groq";
        readonly module: "groq";
        readonly aliases: string[];
    };
    readonly Xai: {
        readonly name: "XAI";
        readonly module: "xai";
        readonly aliases: string[];
    };
    readonly Dummy: {
        readonly name: "Dummy";
        readonly module: "dummy";
        readonly aliases: string[];
    };
    readonly Anthropic: {
        readonly name: "Anthropic";
        readonly module: "anthropic";
        readonly aliases: string[];
    };
};
type ProviderName = (typeof BackendProviders)[keyof typeof BackendProviders]["module"];
type ProviderHumanName = (typeof BackendProviders)[keyof typeof BackendProviders]["name"];
type ProviderDef = (typeof BackendProviders)[keyof typeof BackendProviders];

export { BackendProviders, type ProviderDef, type ProviderHumanName, type ProviderName };
