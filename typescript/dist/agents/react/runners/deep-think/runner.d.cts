import { LinePrefixParser } from '../../../../parsers/linePrefix.cjs';
import { ReActAgentRunOptions, ReActAgentParserInput } from '../../types.cjs';
import { PromptTemplate } from '../../../../template.cjs';
import { AnyTool } from '../../../../tools/base.cjs';
import { DefaultRunner } from '../default/runner.cjs';
import { z } from 'zod';
import { b as ReActAgentInput, c as ReActAgent } from '../../../../agent-BN8FTisL.cjs';
import { GetRunContext } from '../../../../context.cjs';
import '../../../../emitter-D5Mu0EEH.cjs';
import '../../../../internals/types.cjs';
import '../../../../internals/helpers/guards.cjs';
import '../../../../internals/serializable.cjs';
import '../../../../parsers/field.cjs';
import '@streamparser/json';
import 'jsonrepair/stream';
import '../../../../parsers/errors.cjs';
import '../../../../errors.cjs';
import '../../../../memory/base.cjs';
import '../../../../backend/message.cjs';
import 'ai';
import '../../prompts.cjs';
import 'ajv';
import '../../../../chat-BPUsAtZg.cjs';
import 'promise-based-task';
import '../../../../cache/base.cjs';
import '../../../../backend/constants.cjs';
import '../../../../logger/logger.cjs';
import 'pino';
import '../../../../internals/helpers/promise.cjs';
import '../../../../internals/helpers/schema.cjs';
import 'zod-to-json-schema';
import '../../../../base-szR2Izbt.cjs';
import '../../../../internals/helpers/counter.cjs';

declare class DeepThinkRunner extends DefaultRunner {
    get defaultTemplates(): {
        system: PromptTemplate<z.ZodObject<{
            instructions: z.ZodDefault<z.ZodString>;
            tools: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                description: z.ZodString;
                schema: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
                description: z.ZodString;
                schema: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
                description: z.ZodString;
                schema: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>, "many">;
            createdAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            tools: z.objectOutputType<{
                name: z.ZodString;
                description: z.ZodString;
                schema: z.ZodString;
            }, z.ZodTypeAny, "passthrough">[];
            instructions: string;
            createdAt?: string | null | undefined;
        }, {
            tools: z.objectInputType<{
                name: z.ZodString;
                description: z.ZodString;
                schema: z.ZodString;
            }, z.ZodTypeAny, "passthrough">[];
            instructions?: string | undefined;
            createdAt?: string | null | undefined;
        }>>;
        assistant: PromptTemplate<z.ZodObject<{
            thought: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            toolName: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            toolInput: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            toolOutput: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            finalAnswer: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
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
        user: PromptTemplate<z.ZodObject<{
            input: z.ZodString;
            meta: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            input: z.ZodString;
            meta: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            input: z.ZodString;
            meta: z.ZodOptional<z.ZodObject<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                createdAt: z.ZodOptional<z.ZodString>;
            }, z.ZodTypeAny, "passthrough">>>;
        }, z.ZodTypeAny, "passthrough">>>;
        schemaError: PromptTemplate<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
        toolNotFoundError: PromptTemplate<z.ZodObject<{
            tools: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>, "many">;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            tools: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>, "many">;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            tools: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
            }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
                name: z.ZodString;
            }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
                name: z.ZodString;
            }, z.ZodTypeAny, "passthrough">>, "many">;
        }, z.ZodTypeAny, "passthrough">>>;
        toolError: PromptTemplate<z.ZodObject<{
            reason: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            reason: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            reason: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>>;
        toolInputError: PromptTemplate<z.ZodObject<{
            reason: z.ZodString;
        }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
            reason: z.ZodString;
        }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
            reason: z.ZodString;
        }, z.ZodTypeAny, "passthrough">>>;
        userEmpty: PromptTemplate<z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>>;
        toolNoResultError: PromptTemplate<z.ZodRecord<z.ZodString, z.ZodAny>>;
    };
    constructor(input: ReActAgentInput, options: ReActAgentRunOptions, run: GetRunContext<ReActAgent>);
    protected createParser(tools: AnyTool[]): {
        readonly parser: LinePrefixParser<ReActAgentParserInput>;
    };
}

export { DeepThinkRunner };
