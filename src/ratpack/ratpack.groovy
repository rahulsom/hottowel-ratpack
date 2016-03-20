import asset.pipeline.ratpack.AssetPipelineHandler
import asset.pipeline.ratpack.AssetPipelineModule
import com.github.rahulsom.htrp.HtrpConfig
import com.github.rahulsom.htrp.MockData
import com.github.rahulsom.rpconfig.ConfigHandler
import com.github.rahulsom.rpconfig.ConfigModule
import ratpack.path.internal.RootPathBinding

import static ratpack.groovy.Groovy.ratpack
import static ratpack.jackson.Jackson.json

ratpack {
    bindings {
        module(AssetPipelineModule) {
            it.url "/" sourcePath "../../../src/assets"
        }
        module new ConfigModule(HtrpConfig, "HTRP_", 'htrp.')
    }
    handlers {
        get 'api/config', ConfigHandler
        get("api/people") {
            render json(MockData.people)
        }
        all AssetPipelineHandler
        all { ctx ->
            ctx.insert single(new RootPathBinding("index.html")), new AssetPipelineHandler()
        }
    }
}
