import asset.pipeline.ratpack.AssetPipelineHandler
import asset.pipeline.ratpack.AssetPipelineModule

import static ratpack.groovy.Groovy.ratpack

ratpack {
  bindings {
    module(new AssetPipelineModule()) {
      it.url("/")
      it.sourcePath("../../../src/assets")
    }
  }
  handlers {
    all (new AssetPipelineHandler())
  }
}
