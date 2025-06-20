import { LinePrefixParser } from '../../../../parsers/linePrefix.js';
import { ReActAgentRunOptions, ReActAgentParserInput } from '../../types.js';
import { PromptTemplate } from '../../../../template.js';
import { AnyTool } from '../../../../tools/base.js';
import { DefaultRunner } from '../default/runner.js';
import { z } from 'zod';
import { b as ReActAgentInput, c as ReActAgent } from '../../../../agent-DPIdLE9Y.js';
import { GetRunContext } from '../../../../context.js';
import '../../../../emitter-C3dO-s2P.js';
import '../../../../internals/types.js';
import '../../../../internals/helpers/guards.js';
import '../../../../internals/serializable.js';
import '../../../../parsers/field.js';
import '@streamparser/json';
import 'jsonrepair/stream';
import '../../../../parsers/errors.js';
import '../../../../errors.js';
import '../../../../memory/base.js';
import '../../../../backend/message.js';
import 'ai';
import '../../prompts.js';
import 'ajv';
import '../../../../chat-Dga-Agqu.js';
import 'promise-based-task';
import '../../../../cache/base.js';
import '../../../../backend/constants.js';
import '../../../../logger/logger.js';
import 'pino';
import '../../../../internals/helpers/promise.js';
import '../../../../internals/helpers/schema.js';
import 'zod-to-json-schema';
import '../../../../base-BOCDDBvG.js';
import '../../../../internals/helpers/counter.js';

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
