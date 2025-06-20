import { Message, MessageContentPart } from '../backend/message.js';
import { BaseMemory } from './base.js';
import { PromptTemplate } from '../template.js';
import { z } from 'zod';
import { m as ChatModel } from '../chat-Dga-Agqu.js';
import '../internals/serializable.js';
import '../internals/types.js';
import '../internals/helpers/guards.js';
import 'ai';
import '../errors.js';
import 'ajv';
import '../context.js';
import '../emitter-C3dO-s2P.js';
import '../internals/helpers/promise.js';
import 'promise-based-task';
import '../cache/base.js';
import '../backend/constants.js';
import '../tools/base.js';
import '../internals/helpers/schema.js';
import 'zod-to-json-schema';
import '../logger/logger.js';
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
