'use strict';

var chat_cjs = require('../../vercel/backend/chat.cjs');
var client_cjs = require('./client.cjs');
var env_cjs = require('../../../internals/env.cjs');

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class XAIChatModel extends chat_cjs.VercelChatModel {
  static {
    __name(this, "XAIChatModel");
  }
  constructor(modelId = env_cjs.getEnv("XAI_CHAT_MODEL", "grok-3-mini"), settings = {}, client) {
    const model = client_cjs.XaiClient.ensure(client).instance.languageModel(modelId, settings);
    super(model);
  }
  static {
    XAIChatModel.register();
  }
}

exports.XAIChatModel = XAIChatModel;
//# sourceMappingURL=chat.cjs.map
//# sourceMappingURL=chat.cjs.map