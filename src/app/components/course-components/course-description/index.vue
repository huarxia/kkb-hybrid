<template src="./index.tpl.html"></template>

<script>
import courseTag from '@/app/components/tag/';
import resolveBD from '@/common/binding-data';
export default {
    props: ['config', 'bindingData'],
    components: {
        courseTag
    },
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        bindingData['icon'] = field1.icon;
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
