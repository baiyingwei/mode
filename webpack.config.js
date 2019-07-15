const devConfig = require('./build/webpack.config.dev');
const prodConfig = require('./build/webpack.config.prod');
switch(process.env.NODE_ENV){
    case 'production':
        module.exports = prodConfig;
    break;
  default:
    module.exports = devConfig;
}