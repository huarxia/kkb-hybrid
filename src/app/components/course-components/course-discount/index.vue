<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
import courseDiscountItem from '@/app/components/course-components/course-discount-item/';
export default {
    props: ['config', 'bindingData'],
    components: {
        courseDiscountItem
    },
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        var items = field1.components;
        return {
            data: bindingData,
            items: items
        };
    },
    mounted: function() {},
    methods: {}
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
