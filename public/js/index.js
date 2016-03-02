var renderer = new PIXI.autoDetectRenderer(640, 1004, {
    transparent:true
  }
)
var Progress = require('./progress.js')
var graphicsConfig = require('./graphics')
var textureConfig = require('./texture')
var progress = Progress(textureConfig)
document.body.appendChild(renderer.view)
var stage = new PIXI.Container({backgroundColor : 0x1099bb})
stage.addChild(progress)
progress.update(0.5)
animate()
function animate() {
  requestAnimationFrame(animate)
  renderer.render(stage)  
}
