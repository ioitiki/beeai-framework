import { LinePrefixParser } from '../../../../parsers/linePrefix.js';
import { PromptTemplate } from '../../../../template.js';
import * as zod from 'zod';
import { AnyTool } from '../../../../tools/base.js';
import { DefaultRunner } from '../default/runner.js';
import { ReActAgentRunOptions, ReActAgentParserInput } from '../../types.js';
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
import 'ajv';
import 'promise-based-task';
import '../../../../cache/base.js';
import '../../../../internals/helpers/schema.js';
import 'zod-to-json-schema';
import '../../../../internals/helpers/promise.js';
import '../../../../backend/message.js';
import 'ai';
import '../../../../memory/base.js';
import '../../../../base-BOCDDBvG.js';
import '../../../../chat-Dga-Agqu.js';
import '../../../../backend/constants.js';
import '../../../../logger/logger.js';
import 'pino';
import '../../../../internals/helpers/counter.js';
import '../../prompts.js';

declare class GraniteRunner extends DefaultRunner {
    protected useNativeToolCalling: boolean;
    get defaultTemplates(): {
        system: PromptTemplate<zod.ZodObject<{
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
        assistant: PromptTemplate<zod.ZodObject<{
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
        user: PromptTemplate<zod.ZodObject<{
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
        schemaError: PromptTemplate<zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>>;
        toolNotFoundError: PromptTemplate<zod.ZodObject<{
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
        toolError: PromptTemplate<zod.ZodObject<{
            reason: zod.ZodString;
        }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
            reason: zod.ZodString;
        }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
            reason: zod.ZodString;
        }, zod.ZodTypeAny, "passthrough">>>;
        toolInputError: PromptTemplate<zod.ZodObject<{
            reason: zod.ZodString;
        }, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
            reason: zod.ZodString;
        }, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
            reason: zod.ZodString;
        }, zod.ZodTypeAny, "passthrough">>>;
        userEmpty: PromptTemplate<zod.ZodObject<{}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{}, zod.ZodTypeAny, "passthrough">>>;
        toolNoResultError: PromptTemplate<zod.ZodRecord<zod.ZodString, zod.ZodAny>>;
    };
    constructor(input: ReActAgentInput, options: ReActAgentRunOptions, run: GetRunContext<ReActAgent>);
    protected createParser(tools: AnyTool[]): {
        parser: LinePrefixParser<ReActAgentParserInput>;
    };
}

export { GraniteRunner };
