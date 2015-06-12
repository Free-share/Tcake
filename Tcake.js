/*
 * to8to-webframework
 * description: ������ļ�
 * version - v1.0 2015/6/12 0012
 * author carl.wu<carl.wu@corp.to8to.com>
 * http://www.to8to.com/
 * 
 */

var Tcake = module.exports = require('tcake-main');

// ����������
var commander = require('commander');
var main      = require('tcake-main');

var utils  = main.utils;
var Logger = main.Logger;
var config = main.config;
Tcake.config = config.merge(utils.loadConfig());

var pkg = utils.parseJSON('./package.json');

/**********************************��commanderʹ��*****************************************/



/******************************************************************************************/

// ������������Լ�������������
commander
    .version(pkg.version)
    .usage('[options] [value ...]')
    .option('-m, --md5', 'add md5 suffix')
    .option('-l, --length <n>', 'md5 suffix length', parseInt);

commander.parse(process.argv);

// �Ƿ���MD5��׺, Ĭ�Ͽ���
if (commander.md5) {
    config.set('md5', commander.md5);
}

// md5��׺���ȣ�Ĭ��Ϊ7��
if (commander.length) {
    config.set('md5Length', commander.length);
}

Logger.trace(Tcake);

module.exports = {

    run: function (args) {
        Logger.trace(config);
    }

};
