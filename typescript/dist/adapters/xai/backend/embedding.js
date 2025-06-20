import { VercelEmbeddingModel } from '../../vercel/backend/embedding.js';
import { getEnv } from '../../../internals/env.js';
import { XaiClient } from './client.js';
import { ValueError } from '../../../errors.js';

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
class XAIEmbeddingModel extends VercelEmbeddingModel {
  static {
    __name(this, "XAIEmbeddingModel");
  }
  constructor(modelId = getEnv("XAI_EMBEDDING_MODEL", ""), _settings = {}, client) {
    if (!modelId) {
      throw new ValueError("Missing modelId!");
    }
    const model = XaiClient.ensure(client).instance.textEmbeddingModel(modelId);
    super(model);
  }
}

export { XAIEmbeddingModel };
//# sourceMappingURL=embedding.js.map
//# sourceMappingURL=embedding.js.map