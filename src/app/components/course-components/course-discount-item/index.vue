<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
export default {
    props: ['config', 'bindingData'],
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        bindingData['color'] = field1.style.color || '#1aa3ee';
        bindingData['kefu'] = field1.kefu || {
            'text': '立即申请',
            'kefuHref':
            'http://kefu8.kuaishang.com.cn/bs/im.htm?cas=30989___418723&fi=35187&ism=1&ref=H5&sText=js_fenqi'
        };
        return {
            data: bindingData
        };
    },
    mounted: function() {},
    methods: {}
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
