import { VercelChatModel } from '../../vercel/backend/chat.js';
import { XaiClient } from './client.js';
import { getEnv } from '../../../internals/env.js';

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class XAIChatModel extends VercelChatModel {
  static {
    __name(this, "XAIChatModel");
  }
  constructor(modelId = getEnv("XAI_CHAT_MODEL", "grok-3-mini"), settings = {}, client) {
    const model = XaiClient.ensure(client).instance.languageModel(modelId, settings);
    super(model);
  }
  static {
    XAIChatModel.register();
  }
}

export { XAIChatModel };
//# sourceMappingURL=chat.js.map
//# sourceMappingURL=chat.js.map