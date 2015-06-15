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

var utils  = Tcake.utils;
var Logger = Tcake.Logger;
Tcake.config = Tcake.config.merge(utils.loadConfig());

var pkg = utils.parseJSON('./package.json');

/**********************************��commanderʹ��*****************************************/


/******************************************************************************************/

// ������������Լ�������������
commander
    .version(pkg.version)
    .usage('[options] [value ...]')
    .option('-m, --md5', 'add md5 suffix')
    .option('-l, --length <n>', 'md5 suffix length', parseInt);

module.exports = {

    run: function (args) {
        commander.parse(process.argv);

        // �Ƿ���MD5��׺, Ĭ�Ͽ���
        if (commander.md5) {
            Tcake.config.set('md5', commander.md5);
        }

        // md5��׺���ȣ�Ĭ��Ϊ7��
        if (commander.length) {
            Tcake.config.set('md5Length', commander.length);
        }
    }

};
