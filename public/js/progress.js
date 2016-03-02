
var factory = function (config) {
  config.height = config.height || 20
  config.width = config.width || 400
  var progress = new PIXI.Container()
  progress.generateLoding = generateLoding;
  progress.generateProgressBar = config.image ? generateTextureBar : generateGraphicsBar
   if (config.loading) {
    progress.generateLoding(config.loading, config.loadingWidth, config.loadingHeight, progress)
  }
  var progressBar = progress.generateProgressBar(config)
  progress.addChild(progressBar)
  progress.update = function(progress) {
    if (progress > 1) {
      progress = 1
    }
    if (progressBar.updateWithProgress) {
       progressBar.updateWithProgress(progress)
    }
  }

  //reset should be called when define a custom implement of generateLoading and generateProgressBar
  //the progressbar should implament a function called updateWithProgress
  progress.reset = function() {
    this.remove(progressBar)
    if (this.loading) {
      this.remove(this.loading)
    }
    this.generateLoading()
    this.generateProgressBar()
  }
  return progress;
}

var generateLoding = function (loading, width, height, container) {
  PIXI.loader.add(loading).load(function (){
    var frames = [];
    for (var i = 0; i < 30; i++) {
        frames.push(PIXI.Texture.fromFrame( 'fighter' + i + '.png'));
    }
    var movie = new PIXI.extras.MovieClip(frames);
    movie.width = width
    movie.height = height
    movie.x = (640 - width) / 2
    movie.y = 200
    container.addChild(movie)
    container.loading = movie
    movie.play()
  });
}

var generateGraphicsBar = function(config) {
  var graphics = new PIXI.Graphics()
  graphics.lineStyle(2, config.lineStyle, 1);
  graphics.beginFill(config.fillStyle, 0.25);
  graphics.drawRoundedRect((640 - config.width) / 2, 700, config.width, config.height, 5);
  graphics.endFill();
  graphics.updateWithProgress = function(progress) {
    var currentWidth = config.width * progress
    graphics.clear()
    graphics.lineStyle(2, 0xFF00BB, 1);
    graphics.beginFill(0xFF00FF, 0.25)
    graphics.drawRoundedRect((640 - config.width) / 2, 700, currentWidth, config.height, 5)
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
  sprite.y = 700
  sprite.updateWithProgress = function(progress) {
    var currentWidth = config.width * progress
    sprite.width = currentWidth
  }
  return sprite
}

module.exports = factory;
