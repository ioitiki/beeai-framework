'use strict';

var xai = require('@ai-sdk/xai');
var client_cjs = require('../../../backend/client.cjs');
var env_cjs = require('../../../internals/env.cjs');
var utils_cjs = require('../../vercel/backend/utils.cjs');

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class XaiClient extends client_cjs.BackendClient {
  static {
    __name(this, "XaiClient");
  }
  create() {
    return xai.createXai({
      ...this.settings,
      baseURL: this.settings.baseURL || env_cjs.getEnv("XAI_API_BASE_URL"),
      apiKey: this.settings.apiKey || env_cjs.getEnv("XAI_API_KEY"),
      fetch: utils_cjs.vercelFetcher(this.settings?.fetch)
    });
  }
}

exports.XaiClient = XaiClient;
//# sourceMappingURL=client.cjs.map
//# sourceMappingURL=client.cjs.map