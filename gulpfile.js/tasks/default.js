/**
 * @file    gulp默认任务
 * @authors 花夏 (bliu@huikedu.com)
 * 
 * @version 1.0.0
 * @date    2017-04-24 14:08:40
 */

var gulp         = require('gulp');
// 保证任务按顺序执行，让gulp任务，可以相互独立，解除任务间的依赖，增强task复用
var gulpSequence = require('gulp-sequence');

gulp.task('default', ['server'], function (cb) {
    gulpSequence('webpack:development', cb);
});

