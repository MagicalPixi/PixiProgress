
var factory = function (config) {
  config.height = config.height || 20
  config.width = config.width || 400
  var progress = new PIXI.Container()
  var graphics = new PIXI.Graphics()
  graphics.lineStyle(2, config.lineStyle, 1);
  graphics.beginFill(config.fillStyle, 0.25);
  graphics.drawRoundedRect((640 - config.width) / 2, 450, config.width, config.height, 5);
  graphics.endFill();
  progress.addChild(graphics)
  progress.update = function(progress) {
    if (progress > 1) {
      progress = 1
    }
    var currentWidth = config.width * progress
    graphics.clear()
    graphics.lineStyle(2, 0xFF00BB, 1);
    graphics.beginFill(0xFF00FF, 0.25)
    graphics.drawRoundedRect((640 - config.width) / 2, 450, currentWidth, config.height, 5)
    graphics.endFill()
  }
  return progress;
}

module.exports = factory;
