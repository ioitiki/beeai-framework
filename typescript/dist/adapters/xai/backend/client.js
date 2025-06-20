import { createXai } from '@ai-sdk/xai';
import { BackendClient } from '../../../backend/client.js';
import { getEnv } from '../../../internals/env.js';
import { vercelFetcher } from '../../vercel/backend/utils.js';

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class XaiClient extends BackendClient {
  static {
    __name(this, "XaiClient");
  }
  create() {
    return createXai({
      ...this.settings,
      baseURL: this.settings.baseURL || getEnv("XAI_API_BASE_URL"),
      apiKey: this.settings.apiKey || getEnv("XAI_API_KEY"),
      fetch: vercelFetcher(this.settings?.fetch)
    });
  }
}

export { XaiClient };
//# sourceMappingURL=client.js.map
//# sourceMappingURL=client.js.map