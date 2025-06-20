import { BaseCache } from '../../cache/base.cjs';
import * as promise_based_task from 'promise-based-task';
import { BaseToolOptions, Tool, ToolEmitter, ToolInput, BaseToolRunOptions } from '../base.cjs';
import { z } from 'zod';
import { PromptTemplate } from '../../template.cjs';
import { PythonStorage, PythonFile } from './storage.cjs';
import { PythonToolOutput } from './output.cjs';
import { ConnectionOptions } from 'node:tls';
import { RunContext } from '../../context.cjs';
import { E as Emitter } from '../../emitter-D5Mu0EEH.cjs';
import { m as ChatModel } from '../../chat-BPUsAtZg.cjs';
import '../../internals/serializable.cjs';
import '../../internals/types.cjs';
import '../../internals/helpers/guards.cjs';
import 'ajv';
import '../../errors.cjs';
import '../../internals/helpers/schema.cjs';
import 'zod-to-json-schema';
import '../../internals/helpers/promise.cjs';
import 'fs';
import '../../backend/message.cjs';
import 'ai';
import '../../backend/constants.cjs';
import '../../logger/logger.cjs';
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
