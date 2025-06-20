import { Message, MessageContentPart } from '../backend/message.cjs';
import { BaseMemory } from './base.cjs';
import { PromptTemplate } from '../template.cjs';
import { z } from 'zod';
import { m as ChatModel } from '../chat-BPUsAtZg.cjs';
import '../internals/serializable.cjs';
import '../internals/types.cjs';
import '../internals/helpers/guards.cjs';
import 'ai';
import '../errors.cjs';
import 'ajv';
import '../context.cjs';
import '../emitter-D5Mu0EEH.cjs';
import '../internals/helpers/promise.cjs';
import 'promise-based-task';
import '../cache/base.cjs';
import '../backend/constants.cjs';
import '../tools/base.cjs';
import '../internals/helpers/schema.cjs';
import 'zod-to-json-schema';
import '../logger/logger.cjs';
import 'pino';

interface SummarizeMemoryInput {
    llm: ChatModel;
    template?: typeof SummarizeMemoryTemplate;
}
declare const SummarizeMemoryTemplate: PromptTemplate<z.ZodObject<{
    summary: z.ZodString;
}, "strip", z.ZodTypeAny, {
    summary: string;
}, {
    summary: string;
}>>;
declare class SummarizeMemory extends BaseMemory {
    protected summary: string;
    protected template: PromptTemplate<z.ZodObject<{
        summary: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        summary: string;
    }, {
        summary: string;
    }>>;
    protected llm: ChatModel;
    constructor(config: SummarizeMemoryInput);
    get messages(): Message[];
    delete(message: Message): Promise<boolean>;
    add(message: Message, _index?: number): Promise<void>;
    reset(): void;
    createSnapshot(): {
        summary: string;
        template: PromptTemplate<z.ZodObject<{
            summary: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            summary: string;
        }, {
            summary: string;
        }>>;
        llm: ChatModel;
        messages: Message<MessageContentPart, string>[];
    };
    loadSnapshot(state: ReturnType<typeof this.createSnapshot>): void;
}

export { SummarizeMemory, type SummarizeMemoryInput, SummarizeMemoryTemplate };
