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

var utils  = Tcake.utils;
var Logger = Tcake.Logger;
Tcake.config = Tcake.config.merge(utils.loadConfig());

var pkg = utils.parseJSON('./package.json');

/**********************************供commander使用*****************************************/

/******************************************************************************************/

// 定义命令参数以及参数内容描述
commander
    .version(pkg.version)
    .usage('[options] [value ...]')
    .option('-m, --md5', 'add md5 suffix')
    .option('-l, --length <n>', 'md5 suffix length', parseInt);

module.exports = {

    run: function (args) {
        commander.parse(process.argv);

        // 是否开启MD5后缀, 默认开启
        if (commander.md5) {
            Tcake.config.set('md5', commander.md5);
        }

        // md5后缀长度，默认为7个
        if (commander.length) {
            Tcake.config.set('md5Length', commander.length);
        }
    }

};
