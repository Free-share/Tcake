/*
 * to8to-webframework
 * description: 框架主文件
 * version - v1.0 2015/6/12 0012
 * author carl.wu<carl.wu@corp.to8to.com>
 * http://www.to8to.com/
 * 
 */

var Tcake = module.exports = require('tcake-main');

// 加载依赖包
var commander = require('commander');
var main      = require('tcake-main');

var utils  = main.utils;
var Logger = main.Logger;
var config = main.config;
Tcake.config = config.merge(utils.loadConfig());

var pkg = utils.parseJSON('./package.json');

/**********************************供commander使用*****************************************/



/******************************************************************************************/

// 定义命令参数以及参数内容描述
commander
    .version(pkg.version)
    .usage('[options] [value ...]')
    .option('-m, --md5', 'add md5 suffix')
    .option('-l, --length <n>', 'md5 suffix length', parseInt);

commander.parse(process.argv);

// 是否开启MD5后缀, 默认开启
if (commander.md5) {
    config.set('md5', commander.md5);
}

// md5后缀长度，默认为7个
if (commander.length) {
    config.set('md5Length', commander.length);
}

Logger.trace(Tcake);

module.exports = {

    run: function (args) {
        Logger.trace(config);
    }

};
