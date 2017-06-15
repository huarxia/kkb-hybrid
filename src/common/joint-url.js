/**
 * @file    文件说明
 * @authors 花夏 (bliu@huikedu.com)
 * @date    2017-05-24 11:31:09
 * @version 1.0.0
 */

export default {

    /**
     * url 循环遍历url需要替换的字段并返回组装后的结果
     *
     * @param  {Array} paramsArr 需要替换的参数数组
     * @param  {Object} paramsObj 需要替换的参数json数据
     * @param  {String} url       需要替换的目标url地址
     *
     * @return {String}           返回替换后的url地址
     */
    url: function(paramsArr, paramsObj, url) {
        var param = '';
        for (var i = 0, len = paramsArr.length; i < len; i++) {
            param = paramsObj[paramsArr[i]];
            url = this.jointUrl(paramsArr[i], param, url);
        }
        return url;
    },

    /**
     * jointUrl 根据替换参数以及替换的值、url组装url地址
     *
     * @param  {String} param 需要替换的参数
     * @param  {Sting|Number} val   替换值
     * @param  {String} url   需要替换的目标url地址
     *
     * @return {String}       返回替换后的url地址
     */
    jointUrl: function(param, val, url) {
        var curStr = ':' + param;
        var reg = new RegExp(curStr, 'g');
        url = url.replace(reg, val);
        return url;
    }
};
