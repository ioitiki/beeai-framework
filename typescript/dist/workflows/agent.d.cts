import { Run } from '../context.cjs';
import { Workflow, WorkflowRunOptions, WorkflowRun } from './workflow.cjs';
import { Message, MessageContentPart } from '../backend/message.cjs';
import { AnyTool } from '../tools/base.cjs';
import { ReadOnlyMemory } from '../memory/base.cjs';
import { z } from 'zod';
import { a as BaseAgent } from '../base-szR2Izbt.cjs';
import { m as ChatModel } from '../chat-BPUsAtZg.cjs';
import { ToolCallingAgentRunInput, ToolCallingAgentRunOutput, ToolCallingAgentRunOptions, ToolCallingAgentExecutionConfig } from '../agents/toolCalling/types.cjs';
import '../emitter-D5Mu0EEH.cjs';
import '../internals/types.cjs';
import '../internals/helpers/guards.cjs';
import '../internals/serializable.cjs';
import '../internals/helpers/promise.cjs';
import '../errors.cjs';
import 'ai';
import 'ajv';
import 'promise-based-task';
import '../cache/base.cjs';
import '../internals/helpers/schema.cjs';
import 'zod-to-json-schema';
import '../backend/constants.cjs';
import '../template.cjs';
import '../logger/logger.cjs';
import 'pino';
import '../agents/toolCalling/prompts.cjs';

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
