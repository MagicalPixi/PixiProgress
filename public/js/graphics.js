var config = require('./config')

var defaultGraphics = config()
defaultGraphics.radius = 4
defaultGraphics.lineStyle = 0xFF00BB
defaultGraphics.fillStyle = 0xFF00FF

module.exports = defaultGraphics;
