/**
 * @file    根据ajax method 获取ajax方法
 * @authors 花夏 (bliu@huikedu.com)
 *
 * @version 1.0.0
 * @date    2017-04-27 16:24:49
 */

export default {

    /**
     * getMethod 根据ajax method 获取ajax方法
     *
     * @param  {String} method ajax方法名称
     *
     * @return {String}        返回改写后的ajax 方法
     */
    getMethod: function(method) {
        var methodName = 'requestGET';
        method = method.toUpperCase();
        switch (methodName) {
            case 'POST':
                methodName = 'requestPOST';
                break;
            case 'DELETE':
                methodName = 'requestDELETE';
                break;
            case 'PUT':
                methodName = 'requestPUT';
                break;
            default:
                methodName = 'requestGET';
                break;
        }
        return methodName;
    }
};
