<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
import courseStudyIcon from '@/app/components/course-components/course-study-icon/';
export default {
    props: ['config', 'bindingData'],
    components: {
        courseStudyIcon
    },
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData) || {};
        var childComponents = field1.components;
        return {
            data: bindingData,
            childComponents: childComponents
        };
    },
    mounted: function() {},
    methods: {}
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
