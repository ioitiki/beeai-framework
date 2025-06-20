import { GetRunContext, RunContext } from './context.cjs';
import { b as AgentMeta, a as BaseAgent } from './base-szR2Izbt.cjs';
import { AnyTool } from './tools/base.cjs';
import { BaseMemory } from './memory/base.cjs';
import { E as Emitter } from './emitter-D5Mu0EEH.cjs';
import { ReActAgentRunOptions, ReActAgentRunIteration, ReActAgentCallbacks, ReActAgentParserInput, ReActAgentMeta, ReActAgentRunInput, ReActAgentIterationToolResult, ReActAgentTemplates, ReActAgentExecutionConfig, ReActAgentRunOutput } from './agents/react/types.cjs';
import { LinePrefixParser } from './parsers/linePrefix.cjs';
import { Serializable } from './internals/serializable.cjs';
import { m as ChatModel } from './chat-BPUsAtZg.cjs';
import { RetryCounter } from './internals/helpers/counter.cjs';

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
