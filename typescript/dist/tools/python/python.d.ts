import { BaseCache } from '../../cache/base.js';
import * as promise_based_task from 'promise-based-task';
import { BaseToolOptions, Tool, ToolEmitter, ToolInput, BaseToolRunOptions } from '../base.js';
import { z } from 'zod';
import { PromptTemplate } from '../../template.js';
import { PythonStorage, PythonFile } from './storage.js';
import { PythonToolOutput } from './output.js';
import { ConnectionOptions } from 'node:tls';
import { RunContext } from '../../context.js';
import { E as Emitter } from '../../emitter-C3dO-s2P.js';
import { m as ChatModel } from '../../chat-Dga-Agqu.js';
import '../../internals/serializable.js';
import '../../internals/types.js';
import '../../internals/helpers/guards.js';
import 'ajv';
import '../../errors.js';
import '../../internals/helpers/schema.js';
import 'zod-to-json-schema';
import '../../internals/helpers/promise.js';
import 'fs';
import '../../backend/message.js';
import 'ai';
import '../../backend/constants.js';
import '../../logger/logger.js';
import 'pino';

interface CodeInterpreterOptions {
    url: string;
    connectionOptions?: ConnectionOptions;
}
interface PythonToolOptions extends BaseToolOptions {
    codeInterpreter: CodeInterpreterOptions;
    preprocess?: {
        llm: ChatModel;
        promptTemplate: PromptTemplate.infer<{
            input: string;
        }>;
    };
    storage: PythonStorage;
}
declare class PythonTool extends Tool<PythonToolOutput, PythonToolOptions> {
    name: string;
    description: string;
    readonly storage: PythonStorage;
    protected files: PythonFile[];
    readonly emitter: ToolEmitter<ToolInput<this>, PythonToolOutput>;
    inputSchema(): Promise<z.ZodObject<{
        inputFiles?: z.ZodArray<z.ZodEnum<[any, ...string[]]>, "many"> | undefined;
        language: z.ZodEnum<["python", "shell"]>;
        code: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        code: string;
        language: "python" | "shell";
        inputFiles?: unknown;
    }, {
        code: string;
        language: "python" | "shell";
        inputFiles?: unknown;
    }>>;
    protected readonly preprocess: {
        llm: ChatModel;
        promptTemplate: PromptTemplate.infer<{
            input: string;
        }>;
    } | undefined;
    constructor(options: PythonToolOptions);
    protected _run(input: ToolInput<this>, _options: Partial<BaseToolRunOptions>, run: RunContext<this>): Promise<PythonToolOutput>;
    createSnapshot(): {
        files: PythonFile[];
        storage: PythonStorage;
        preprocess: {
            llm: ChatModel;
            promptTemplate: PromptTemplate.infer<{
                input: string;
            }>;
        } | undefined;
        name: string;
        description: string;
        options: PythonToolOptions;
        cache: BaseCache<promise_based_task.Task<PythonToolOutput, any>>;
        emitter: Emitter<any>;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}
declare function callCodeInterpreter({ url, body, signal, }: {
    url: string;
    body: unknown;
    signal?: AbortSignal;
}): Promise<Record<string, any>>;

export { type CodeInterpreterOptions, PythonTool, type PythonToolOptions, callCodeInterpreter };
