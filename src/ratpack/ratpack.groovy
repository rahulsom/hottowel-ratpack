import asset.pipeline.ratpack.AssetPipelineHandler
import asset.pipeline.ratpack.AssetPipelineModule
import com.github.rahulsom.htrp.MockData
import ratpack.path.internal.RootPathBinding

import static ratpack.groovy.Groovy.ratpack
import static ratpack.jackson.Jackson.json

ratpack {
  bindings {
    module(new AssetPipelineModule()) {
      it.url("/")
      it.sourcePath("../../../src/assets")
    }
  }
  handlers {
    get("api/people") {
      render(json(MockData.people))
    }
    all (new AssetPipelineHandler())
    all { ctx ->
      ctx.insert(single(new RootPathBinding("index.html")),new AssetPipelineHandler())
    }
  }
}
