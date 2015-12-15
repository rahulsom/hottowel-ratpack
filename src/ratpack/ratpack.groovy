import asset.pipeline.AssetPipeline
import asset.pipeline.ratpack.AssetPipelineHandler
import asset.pipeline.ratpack.AssetPipelineModule
import static ratpack.jackson.Jackson.json
import ratpack.hottowel.MockData
import ratpack.exec.Blocking

import static ratpack.groovy.Groovy.ratpack

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
    all {
      Blocking.get {
        AssetPipeline.serveAsset("index.html")
      } then {
        response.send ('text/html', it)
      }
    }
  }
}
