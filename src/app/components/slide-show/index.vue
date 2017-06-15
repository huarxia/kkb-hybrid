<template src="./index.tpl.html"></template>

<script>
import Vue from 'vue';
import {Swipe, SwipeItem} from 'mint-ui';
import resolveBD from '@/common/binding-data';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
export default {
    props: ['config', 'bindingData'],
    data: function() {
        let field = this.config.fields.field1.field;
        let bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        let styleConfig = {
            slideShowStyle: this.config.fields.field1.style,
            titleStyle: this.config.fields.field1.titleStyle
        };
        // 如果是一张图片则不需要小圆点
        let showIndicators = (bindingData.length > 1);
        return {
            styleConfig: styleConfig,
            showIndicators: showIndicators,
            data: bindingData
        };
    },
    mounted: function() {},
    methods: {}
};
</script>
<style src="./index.scss" lang="scss"></style>
