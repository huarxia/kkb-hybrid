<template src="./index.tpl.html"></template>

<script>
    import componentsList from './components';
    import methodUtil from '@/common/method';
    import restFullLoader from '@/common/loader';
    import util from '@/common/lib/util';
    export default {
        props: ['config'],
        components: componentsList,
        data: function() {
            var field = this.config.fields.field1;
            return {
                items: [],
                field: field
            };
        },
        mounted: function() {
            var field = this.config.fields.field1;
            var childFields = field.childFields;
            this.initComponents(childFields);
        },
        methods: {

            /**
             * initComponents 初始化页面需要的组件
             *
             * @param  {Object} childFields 子组件Object
             *
             */
            initComponents: function(childFields) {
                var len = childFields.length;
                if (len <= 0) {
                    return;
                }
                for (var i = 0; i < len; i++) {
                    var url = childFields[i].url || '';
                    var method = childFields[i].method || 'get';
                    var param = childFields[i].param || '';
                    if (!!url) {
                        this.ajax(url, method, param, childFields[i]);
                    }
                }
            },

            /**
             * ajax 根据配置获取数据
             *
             * @param  {String} url        请求地址
             * @param  {String} method     请求方法
             * @param  {Object} param      请求参数
             * @param  {Array} childField  需要合并的疏浚
             *
             */
            ajax: function(url, method, param, childField) {
                var me = this;
                var requestName = methodUtil.getMethod(method);
                restFullLoader[requestName](url)
                    .then((res) => {
                        if (res.status === 0) {
                            var data = res.data.courses;
                            me.addParamToData(data, childField);
                        }
                    });
            },

            /**
             * addParamToData 合并需要的数据
             *
             * @param {Object} data       请求返回数据
             * @param {Object} childField 需要合并的数据
             */
            addParamToData: function(data, childField) {
                util.assign();
                for (var i = 0, len = data.length; i < len; i++) {
                    data[i] = Object.assign({
                        'data': data[i]
                    }, childField);
                }
                this.items = this.items.concat(data);
            }
        }
    };
</script>
<style src="./index.scss" lang="scss" scoped></style>
