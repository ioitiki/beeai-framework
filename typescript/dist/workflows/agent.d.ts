import { Run } from '../context.js';
import { Workflow, WorkflowRunOptions, WorkflowRun } from './workflow.js';
import { Message, MessageContentPart } from '../backend/message.js';
import { AnyTool } from '../tools/base.js';
import { ReadOnlyMemory } from '../memory/base.js';
import { z } from 'zod';
import { a as BaseAgent } from '../base-BOCDDBvG.js';
import { m as ChatModel } from '../chat-Dga-Agqu.js';
import { ToolCallingAgentRunInput, ToolCallingAgentRunOutput, ToolCallingAgentRunOptions, ToolCallingAgentExecutionConfig } from '../agents/toolCalling/types.js';
import '../emitter-C3dO-s2P.js';
import '../internals/types.js';
import '../internals/helpers/guards.js';
import '../internals/serializable.js';
import '../internals/helpers/promise.js';
import '../errors.js';
import 'ai';
import 'ajv';
import 'promise-based-task';
import '../cache/base.js';
import '../internals/helpers/schema.js';
import 'zod-to-json-schema';
import '../backend/constants.js';
import '../template.js';
import '../logger/logger.js';
import 'pino';
import '../agents/toolCalling/prompts.js';

type AgentInstance = BaseAgent<ToolCallingAgentRunInput, ToolCallingAgentRunOutput, ToolCallingAgentRunOptions>;
type AgentFactory = (memory: ReadOnlyMemory) => AgentInstance | Promise<AgentInstance>;
interface AgentFactoryInput {
    name?: string;
    role?: string;
    llm: ChatModel;
    instructions?: string;
    tools?: AnyTool[];
    execution?: ToolCallingAgentExecutionConfig;
}
declare class AgentWorkflow {
    protected readonly workflow: Workflow<z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodOptional<z.ZodString>;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        newMessages: Message<MessageContentPart, string>[];
        finalAnswer?: string | undefined;
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer?: string | undefined;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodString;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages: Message<MessageContentPart, string>[];
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, string>;
    readonly schema: z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodOptional<z.ZodString>;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        newMessages: Message<MessageContentPart, string>[];
        finalAnswer?: string | undefined;
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer?: string | undefined;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>;
    constructor(name?: string);
    run(inputs: (ToolCallingAgentRunInput | Message)[], options?: WorkflowRunOptions<string>): Run<WorkflowRun<z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodOptional<z.ZodString>;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        newMessages: Message<MessageContentPart, string>[];
        finalAnswer?: string | undefined;
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer?: string | undefined;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodString;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages: Message<MessageContentPart, string>[];
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, string>, Workflow<z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodOptional<z.ZodString>;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        newMessages: Message<MessageContentPart, string>[];
        finalAnswer?: string | undefined;
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer?: string | undefined;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodString;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages: Message<MessageContentPart, string>[];
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, string>, readonly [{
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer?: string | undefined;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }, WorkflowRunOptions<string>]>;
    addAgent(agent: AgentFactory | AgentFactoryInput): this;
    addAgent(agent: AgentInstance): Promise<this>;
    delAgent(name: string): Workflow<z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodOptional<z.ZodString>;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        newMessages: Message<MessageContentPart, string>[];
        finalAnswer?: string | undefined;
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer?: string | undefined;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, z.ZodObject<{
        inputs: z.ZodArray<z.ZodObject<{
            prompt: z.ZodOptional<z.ZodString>;
            context: z.ZodOptional<z.ZodString>;
            expectedOutput: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodType<z.ZodType<unknown, z.ZodTypeDef, unknown>, z.ZodTypeDef, z.ZodType<unknown, z.ZodTypeDef, unknown>>]>>;
        }, "strip", z.ZodTypeAny, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }, {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }>, "many">;
        finalAnswer: z.ZodString;
        newMessages: z.ZodDefault<z.ZodArray<z.ZodType<Message<MessageContentPart, string>, z.ZodTypeDef, Message<MessageContentPart, string>>, "many">>;
    }, "strip", z.ZodTypeAny, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages: Message<MessageContentPart, string>[];
    }, {
        inputs: {
            context?: string | undefined;
            prompt?: string | undefined;
            expectedOutput?: string | z.ZodType<unknown, z.ZodTypeDef, unknown> | undefined;
        }[];
        finalAnswer: string;
        newMessages?: Message<MessageContentPart, string>[] | undefined;
    }>, never>;
    protected _createFactory(input: AgentFactoryInput): AgentFactory;
    protected _add(name: string, factory: AgentFactory): this;
}

export { AgentWorkflow };
