
var factory = function (height, width, texture) {
  height = height || 20
  width = width || 400
  var progress = new PIXI.Container({backgroundColor:0x1099bb})
  var graphics = new PIXI.Graphics()
  graphics.lineStyle(2, 0xFF00BB, 1);
  graphics.beginFill(0xFF00FF, 0.25);
  graphics.drawRoundedRect((640 - width) / 2, 450, width, height, 5);
  graphics.endFill();
  progress.addChild(graphics)
  progress.update = function(progress) {
    if (progress > 1) {
      progress = 1
    }
    var currentWidth = width * progress
    graphics.clear()
    graphics.lineStyle(2, 0xFF00BB, 1);
    graphics.beginFill(0xFF00FF, 0.25)
    graphics.drawRoundedRect((640 - width) / 2, 450, currentWidth, height, 5)
    graphics.endFill()
  }
  return progress;
}

module.exports = factory;
