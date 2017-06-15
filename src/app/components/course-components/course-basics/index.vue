<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
export default {
    props: ['config', 'bindingData'],
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        bindingData['title'] = field1.title;
        return {
            data: bindingData
        };
    },
    mounted: function() {},
    methods: {}
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
