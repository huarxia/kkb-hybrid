/**
 * @file    gulp 主任务入口
 * @authors 花夏 (bliu@huikedu.com)
 * 
 * @version 1.0.0
 * @date    2017-04-19 19:38:42
 */

var requireDir = require('require-dir');

requireDir('./tasks', {recurse: true});
