<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
export default {
    props: ['config', 'bindingData'],
    data: function() {
        return {
            data: {}
        };
    },
    mounted: function() {
        this.init();
    },
    methods: {

        /**
         * init 初始化底部bar数据
         *
         */
        init: function() {
            var me = this;
            var field1 = this.config.fields.field1;
            var auditionKey = field1.auditionKey;
            setTimeout(function() {
                var bindingData = resolveBD.resolveBindingData(auditionKey, me.bindingData);
                if (bindingData.length <= 0) {
                    me.data = '';
                } else {
                    // 设置模块ID
                    var studyModule = field1.studyModule || '';
                    me.data = bindingData[0][studyModule][0];
                }
            }, 320);
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
