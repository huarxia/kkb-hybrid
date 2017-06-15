<template src="./index.tpl.html"></template>

<script>
import resolveBD from '@/common/binding-data';
import courseSignupItem from '@/app/components/course-components/course-signup-item';
export default {
    props: ['config', 'bindingData'],
    components: {
        courseSignupItem
    },
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        var items = field1.components;
        // 处理需要标红的文字
        var description = bindingData.description || '';
        var markedRed = bindingData.markedRed || '';
        if (!!markedRed) {
            var tempDescriptionArr = description.split(markedRed);
            bindingData['descriptionPrev'] = tempDescriptionArr[0];
            bindingData['descriptionNext'] = tempDescriptionArr[1];
        }
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
