/**
 * @file    gulp配置
 * @authors 花夏 (bliu@huikedu.com)
 * 
 * @version 1.0.0
 * @date    2017-04-24 14:11:58
 */

var path = require('path');
var config = {};

var base = path.join(__dirname, '../../');

config.basePath = '';
config.distPath = 'dist';
config.publicDirectory = base + config.distPath + '/' + config.basePath;
config.sourceDirectory = base + 'src/app';
config.root = base + 'src';
config.devModulesPath = base + 'node_modules';

module.exports = config;
