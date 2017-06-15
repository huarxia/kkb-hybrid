<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
import courseConsultBtn from '@/app/components/course-components/course-consult-btn/';
export default {
    props: ['config', 'bindingData'],
    components: {
        courseConsultBtn
    },
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bodyStyle = field1.bodyStyle || {};
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        var headerStyle = {
            'background-image': 'url(' + bindingData.headerBg + ')'
        };
        var items = field1.components;
        return {
            data: bindingData,
            bodyStyle: bodyStyle,
            headerStyle: headerStyle,
            items: items
        };
    },
    mounted: function() {},
    methods: {}
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
