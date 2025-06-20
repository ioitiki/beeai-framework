import { BaseToolOptions, BaseToolRunOptions, Tool, StringToolOutput, ToolEmitter, ToolInput } from './base.js';
import { FrameworkError } from '../errors.js';
import { z } from 'zod';
import { CodeInterpreterOptions } from './python/python.js';
import { RunContext } from '../context.js';
import 'ajv';
import '../internals/serializable.js';
import '../internals/types.js';
import '../internals/helpers/guards.js';
import 'promise-based-task';
import '../cache/base.js';
import '../internals/helpers/schema.js';
import 'zod-to-json-schema';
import '../emitter-C3dO-s2P.js';
import '../internals/helpers/promise.js';
import '../template.js';
import './python/storage.js';
import 'fs';
import './python/output.js';
import 'node:tls';
import '../chat-Dga-Agqu.js';
import '../backend/message.js';
import 'ai';
import '../backend/constants.js';
import '../logger/logger.js';
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

declare class CustomToolCreateError extends FrameworkError {
}
declare class CustomToolExecuteError extends FrameworkError {
}
declare const toolOptionsSchema: z.ZodObject<{
    codeInterpreter: z.ZodObject<{
        url: z.ZodString;
        connectionOptions: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        connectionOptions?: any;
    }, {
        url: string;
        connectionOptions?: any;
    }>;
    sourceCode: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    inputSchema: z.ZodAny;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    codeInterpreter: z.ZodObject<{
        url: z.ZodString;
        connectionOptions: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        connectionOptions?: any;
    }, {
        url: string;
        connectionOptions?: any;
    }>;
    sourceCode: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    inputSchema: z.ZodAny;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    codeInterpreter: z.ZodObject<{
        url: z.ZodString;
        connectionOptions: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        connectionOptions?: any;
    }, {
        url: string;
        connectionOptions?: any;
    }>;
    sourceCode: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    inputSchema: z.ZodAny;
}, z.ZodTypeAny, "passthrough">>;
type CustomToolEnv = Record<string, string | boolean | null | undefined | number>;
type CustomToolOptions = z.output<typeof toolOptionsSchema> & BaseToolOptions & {
    env?: CustomToolEnv;
};
type CustomToolRunOptions = Pick<CustomToolOptions, "env"> & BaseToolRunOptions;
declare class CustomTool extends Tool<StringToolOutput, CustomToolOptions, CustomToolRunOptions> {
    name: string;
    description: string;
    readonly emitter: ToolEmitter<ToolInput<this>, StringToolOutput>;
    inputSchema(): any;
    constructor(options: CustomToolOptions);
    protected _run(input: any, options: Partial<CustomToolRunOptions>, run: RunContext<typeof this>): Promise<StringToolOutput>;
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
    static fromSourceCode({ env, ...codeInterpreter }: CodeInterpreterOptions & Pick<CustomToolOptions, "env">, sourceCode: string): Promise<CustomTool>;
}

export { CustomTool, CustomToolCreateError, CustomToolExecuteError, type CustomToolOptions, type CustomToolRunOptions };
