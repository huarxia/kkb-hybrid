<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
import components from './components';
export default {
    props: ['config', 'bindingData'],
    components: components,
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        var items = field1.components;
        return {
            data: bindingData,
            style: field1.style,
            items: items
        };
    },
    mounted: function() {},
    methods: {}
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
