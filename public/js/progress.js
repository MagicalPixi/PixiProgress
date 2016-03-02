
var factory = function (config) {
  config.height = config.height || 20
  config.width = config.width || 400
  var progress = new PIXI.Container()
  var progressBar
  if (config.image) {
     progressBar = generateTextureBar(config) 
  } else {
    progressBar = generateGraphicsBar(config)
  }
  progress.addChild(progressBar)
  progress.update = function(progress) {
    if (progress > 1) {
      progress = 1
    }
    if (progressBar.updateWithProgress) {
       progressBar.updateWithProgress(progress)
    }
  }
  return progress;
}

var generateGraphicsBar = function(config) {
  var graphics = new PIXI.Graphics()
  graphics.lineStyle(2, config.lineStyle, 1);
  graphics.beginFill(config.fillStyle, 0.25);
  graphics.drawRoundedRect((640 - config.width) / 2, 450, config.width, config.height, 5);
  graphics.endFill();
  graphics.updateWithProgress = function(progress) {
    var currentWidth = config.width * progress
    graphics.clear()
    graphics.lineStyle(2, 0xFF00BB, 1);
    graphics.beginFill(0xFF00FF, 0.25)
    graphics.drawRoundedRect((640 - config.width) / 2, 450, currentWidth, config.height, 5)
    graphics.endFill()
  } 
  return graphics
}


var generateTextureBar = function(config) {
  var texture = PIXI.Texture.fromImage(config.image)
  var sprite = new PIXI.Sprite(texture)
  sprite.width = config.width
  sprite.height = config.height
  sprite.x = (640 - config.width) / 2
  sprite.y = 450 
  sprite.updateWithProgress = function(progress) {
    var currentWidth = config.width * progress
    sprite.width = currentWidth
  }
  return sprite
}

module.exports = factory;
