<template>
    <div id="signup-header">
        <div class="is-left"></div>
        <h4>{{data.title}}</h4>
        <component v-for="item in components"
                :is="item.type"
                :key="item.type"
                :config="item"
                :binding-data="bindingData">
        </component>
    </div>
</template>

<script>
import resolveBD from '@/common/binding-data';
import signupKefu from './signup-kefu';
export default {
    props: ['config', 'bindingData'],
    components: {
        signupKefu
    },
    data: function() {
        let field1 = this.config.fields.field1;
        let field = field1.field;
        let components = field1.components;
        let bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        return {
            data: bindingData,
            components: components
        };
    },
    mounted: function() {},
    watch: {},
    methods: {}
};
</script>
<style lang="scss" scoped>
    #signup-header {
        background-color: #fff;
        padding: 0 .1rem;
        line-height: .88rem;
        display: flex;
        align-items: center;
        .is-left {
            -webkit-box-flex: .5;
            -moz-flex: .5;
            -ms-flex: .5;
            flex: .5;
        }
        h4 {
            margin: 0;
            color: #3f3939;
            font-size: .38rem;
            font-weight: 500;
            -webkit-box-flex: 2.2;
            -moz-flex: 2.2;
            -ms-flex: 2.2;
            flex: 2.2;
            vertical-align: middle;
        }
    }
</style>
