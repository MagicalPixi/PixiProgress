var renderer = new PIXI.autoDetectRenderer(640, 1004, {
    transparent:true
  }
)
document.body.appendChild(renderer.view)
var stage = new PIXI.Container()

animate()
function animate() {
  requestAnimationFrame(animate)
  renderer.render(stage)  
}
