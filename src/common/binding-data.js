/**
 * @file    bindingData解析器
 * @authors 花夏 (bliu@huikedu.com)
 * @date    2017-05-12 11:41:48
 * @version 1.0.0
 */

export default {

    /**
     * resolveBindingData bindingData解析器
     *
     * @param  {String} filed 需要解析的组件type
     *
     * @param  {Object} bindingData 需要解析的bindingData
     *
     * @return {Object}       返回解析的bindingData
     */
    resolveBindingData: function(filed, bindingData) {
        return bindingData[filed] || {};
    }
};
