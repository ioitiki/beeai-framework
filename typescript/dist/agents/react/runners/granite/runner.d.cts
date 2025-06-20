import { LinePrefixParser } from '../../../../parsers/linePrefix.cjs';
import { PromptTemplate } from '../../../../template.cjs';
import * as zod from 'zod';
import { AnyTool } from '../../../../tools/base.cjs';
import { DefaultRunner } from '../default/runner.cjs';
import { ReActAgentRunOptions, ReActAgentParserInput } from '../../types.cjs';
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
import 'ajv';
import 'promise-based-task';
import '../../../../cache/base.cjs';
import '../../../../internals/helpers/schema.cjs';
import 'zod-to-json-schema';
import '../../../../internals/helpers/promise.cjs';
import '../../../../backend/message.cjs';
import 'ai';
import '../../../../memory/base.cjs';
import '../../../../base-szR2Izbt.cjs';
import '../../../../chat-BPUsAtZg.cjs';
import '../../../../backend/constants.cjs';
import '../../../../logger/logger.cjs';
import 'pino';
import '../../../../internals/helpers/counter.cjs';
import '../../prompts.cjs';

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
