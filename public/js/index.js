var renderer = new PIXI.autoDetectRenderer(640, 1004, {
    transparent:true
  }
)
var Progress = require('./progress.js')
var graphicsConfig = require('./graphics')
var textureConfig = require('./texture')
graphicsConfig.loading = undefined
var progress = Progress(graphicsConfig)
document.body.appendChild(renderer.view)
var stage = new PIXI.Container({backgroundColor : 0x1099bb})
stage.addChild(progress)
progress.update(0.8)
window.updateWithProgress = function (p) {
  progress.update(p)
}
animate()
function animate() {
  requestAnimationFrame(animate)
  renderer.render(stage)
  stage.children.map(function(child) {
    if (child.render) {
      child.render()
    }
  })
}
