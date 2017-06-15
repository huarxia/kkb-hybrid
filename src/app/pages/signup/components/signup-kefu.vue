<template>
    <a class="kefu" target="_blank"
            :href="data.href">{{data.text}}</a>
</template>

<script>
import resolveBD from '@/common/binding-data';
export default {
    props: ['config', 'bindingData'],
    data: function() {
        let field1 = this.config.fields.field1;
        let field = field1.field;
        let bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        return {
            data: bindingData
        };
    },
    mounted: function() {},
    watch: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
    a.kefu {
        color: #706969;
        font-size: .36rem;
        text-decoration: none;
        -webkit-box-flex: .4;
        -moz-flex: .4;
        -ms-flex: .4;
        flex: .4;
    }
</style>
