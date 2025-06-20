import { PromptTemplate } from '../../../../template.cjs';
import * as zod from 'zod';
import '../../../../errors.cjs';
import '../../../../internals/types.cjs';
import '../../../../internals/helpers/guards.cjs';
import '../../../../internals/serializable.cjs';
import 'ajv';

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
declare const GraniteReActAgentAssistantPrompt: PromptTemplate<zod.ZodObject<{
    thought: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
    toolName: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
    toolInput: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
    toolOutput: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
    finalAnswer: zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>;
}, "strip", zod.ZodTypeAny, {
    thought?: string[] | undefined;
    toolName?: string[] | undefined;
    toolInput?: string[] | undefined;
    toolOutput?: string[] | undefined;
    finalAnswer?: string[] | undefined;
}, {
    thought?: string[] | undefined;
    toolName?: string[] | undefined;
    toolInput?: string[] | undefined;
    toolOutput?: string[] | undefined;
    finalAnswer?: string[] | undefined;
}>>;
declare const GraniteReActAgentSystemPrompt: PromptTemplate<zod.ZodObject<{
    instructions: zod.ZodDefault<zod.ZodString>;
    tools: zod.ZodArray<zod.ZodObject<{
        name: zod.ZodString;
        description: zod.ZodString;
        schema: zod.ZodString;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        name: zod.ZodString;
        description: zod.ZodString;
        schema: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        name: zod.ZodString;
        description: zod.ZodString;
        schema: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">>, "many">;
    createdAt: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    tools: zod.objectOutputType<{
        name: zod.ZodString;
        description: zod.ZodString;
        schema: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">[];
    instructions: string;
    createdAt?: string | null | undefined;
}, {
    tools: zod.objectInputType<{
        name: zod.ZodString;
        description: zod.ZodString;
        schema: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">[];
    instructions?: string | undefined;
    createdAt?: string | null | undefined;
}>>;
declare const GraniteReActAgentSchemaErrorPrompt: PromptTemplate<zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>>;
declare const GraniteReActAgentUserPrompt: PromptTemplate<zod.ZodObject<{
    input: zod.ZodString;
    meta: zod.ZodOptional<zod.ZodObject<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>>;
}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
    input: zod.ZodString;
    meta: zod.ZodOptional<zod.ZodObject<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>>;
}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
    input: zod.ZodString;
    meta: zod.ZodOptional<zod.ZodObject<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        createdAt: zod.ZodOptional<zod.ZodString>;
    }, zod.ZodTypeAny, "passthrough">>>;
}, zod.ZodTypeAny, "passthrough">>>;
declare const GraniteReActAgentToolNotFoundPrompt: PromptTemplate<zod.ZodObject<{
    tools: zod.ZodArray<zod.ZodObject<{
        name: zod.ZodString;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        name: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        name: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">>, "many">;
}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
    tools: zod.ZodArray<zod.ZodObject<{
        name: zod.ZodString;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        name: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        name: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">>, "many">;
}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
    tools: zod.ZodArray<zod.ZodObject<{
        name: zod.ZodString;
    }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
        name: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
        name: zod.ZodString;
    }, zod.ZodTypeAny, "passthrough">>, "many">;
}, zod.ZodTypeAny, "passthrough">>>;
declare const GraniteReActAgentToolErrorPrompt: PromptTemplate<zod.ZodObject<{
    reason: zod.ZodString;
}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
    reason: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
    reason: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">>>;
declare const GraniteReActAgentToolInputErrorPrompt: PromptTemplate<zod.ZodObject<{
    reason: zod.ZodString;
}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
    reason: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
    reason: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">>>;

export { GraniteReActAgentAssistantPrompt, GraniteReActAgentSchemaErrorPrompt, GraniteReActAgentSystemPrompt, GraniteReActAgentToolErrorPrompt, GraniteReActAgentToolInputErrorPrompt, GraniteReActAgentToolNotFoundPrompt, GraniteReActAgentUserPrompt };
