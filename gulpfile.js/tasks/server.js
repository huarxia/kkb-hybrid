/**
 * @file    本地开发启动
 * @authors 花夏 (bliu@huikedu.com)
 * 
 * @version 1.0.0
 * @date    2017-04-19 19:45:06
 */

var gulp         = require('gulp');
// 保证任务按顺序执行，让gulp任务，可以相互独立，解除任务间的依赖，增强task复用
var gulpSequence = require('gulp-sequence');

gulp.task('server', ['webpack:development'], function (cb) {
    
});
