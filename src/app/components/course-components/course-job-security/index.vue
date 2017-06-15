<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
import courseConsultBtn from '@/app/components/course-components/course-consult-btn/';
import courseEmploymentPic from '@/app/components/course-components/course-employment-pic/';
export default {
    props: ['config', 'bindingData'],
    components: {
        courseConsultBtn,
        courseEmploymentPic
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
