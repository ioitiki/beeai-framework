import { GetRunContext, RunContext } from './context.js';
import { b as AgentMeta, a as BaseAgent } from './base-BOCDDBvG.js';
import { AnyTool } from './tools/base.js';
import { BaseMemory } from './memory/base.js';
import { E as Emitter } from './emitter-C3dO-s2P.js';
import { ReActAgentRunOptions, ReActAgentRunIteration, ReActAgentCallbacks, ReActAgentParserInput, ReActAgentMeta, ReActAgentRunInput, ReActAgentIterationToolResult, ReActAgentTemplates, ReActAgentExecutionConfig, ReActAgentRunOutput } from './agents/react/types.js';
import { LinePrefixParser } from './parsers/linePrefix.js';
import { Serializable } from './internals/serializable.js';
import { m as ChatModel } from './chat-Dga-Agqu.js';
import { RetryCounter } from './internals/helpers/counter.js';

interface ReActAgentRunnerLLMInput {
    meta: ReActAgentMeta;
    signal: AbortSignal;
    emitter: Emitter<ReActAgentCallbacks>;
}
interface ReActAgentRunnerToolInput {
    state: ReActAgentIterationToolResult;
    meta: ReActAgentMeta;
    signal: AbortSignal;
    emitter: Emitter<ReActAgentCallbacks>;
}
declare abstract class BaseRunner extends Serializable {
    protected readonly input: ReActAgentInput;
    protected readonly options: ReActAgentRunOptions;
    protected readonly run: GetRunContext<ReActAgent>;
    memory: BaseMemory;
    readonly iterations: ReActAgentRunIteration[];
    protected readonly failedAttemptsCounter: RetryCounter;
    constructor(input: ReActAgentInput, options: ReActAgentRunOptions, run: GetRunContext<ReActAgent>);
    createIteration(): Promise<{
        emitter: Emitter<ReActAgentCallbacks>;
        state: LinePrefixParser.infer<ReActAgentParserInput>;
        meta: ReActAgentMeta;
        signal: AbortSignal;
    }>;
    init(input: ReActAgentRunInput): Promise<void>;
    abstract llm(input: ReActAgentRunnerLLMInput): Promise<ReActAgentRunIteration>;
    abstract tool(input: ReActAgentRunnerToolInput): Promise<{
        output: string;
        success: boolean;
    }>;
    abstract get defaultTemplates(): ReActAgentTemplates;
    get templates(): ReActAgentTemplates;
    protected abstract initMemory(input: ReActAgentRunInput): Promise<BaseMemory>;
    createSnapshot(): {
        input: ReActAgentInput;
        options: ReActAgentRunOptions;
        memory: BaseMemory<unknown>;
        failedAttemptsCounter: RetryCounter;
    };
    loadSnapshot(snapshot: ReturnType<typeof this.createSnapshot>): void;
}

type ReActAgentTemplateFactory<K extends keyof ReActAgentTemplates> = (template: ReActAgentTemplates[K]) => ReActAgentTemplates[K];
interface ReActAgentInput {
    llm: ChatModel;
    tools: AnyTool[];
    memory: BaseMemory;
    meta?: Omit<AgentMeta, "tools">;
    templates?: Partial<{
        [K in keyof ReActAgentTemplates]: ReActAgentTemplates[K] | ReActAgentTemplateFactory<K>;
    }>;
    execution?: ReActAgentExecutionConfig;
    stream?: boolean;
}
declare class ReActAgent extends BaseAgent<ReActAgentRunInput, ReActAgentRunOutput, ReActAgentRunOptions> {
    protected readonly input: ReActAgentInput;
    readonly emitter: Emitter<ReActAgentCallbacks>;
    protected runner: new (...args: ConstructorParameters<typeof BaseRunner>) => BaseRunner;
    constructor(input: ReActAgentInput);
    set memory(memory: BaseMemory);
    get memory(): BaseMemory;
    get meta(): AgentMeta;
    protected _run(input: ReActAgentRunInput, options: ReActAgentRunOptions | undefined, run: GetRunContext<typeof this>): Promise<ReActAgentRunOutput>;
    createSnapshot(): {
        input: ReActAgentInput;
        emitter: Emitter<ReActAgentCallbacks>;
        runner: new (input: ReActAgentInput, options: ReActAgentRunOptions, run: RunContext<ReActAgent, any>) => BaseRunner;
        isRunning: boolean;
    };
}

export { BaseRunner as B, type ReActAgentRunnerLLMInput as R, type ReActAgentRunnerToolInput as a, type ReActAgentInput as b, ReActAgent as c, type ReActAgentTemplateFactory as d };
