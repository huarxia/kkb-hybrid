<template src="./index.tpl.html"></template>

<script>
import Vue from 'vue';
import $ from 'jQuery';
import {Navbar, TabItem, TabContainer, TabContainerItem} from 'mint-ui';
Vue.component(Navbar.name, Navbar, Navbar.fixed);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
import componentsList from './components';
export default {
    props: ['config', 'bindingData'],
    components: componentsList,
    data: function() {
        let field = this.config.fields.field1;
        let tabTbConfig = field.components.tabTb;
        let tabTdConfig = field.components.tabTd;
        let kefuHref = tabTbConfig[2].kefu.kefuHref;
        return {
            selected: tabTbConfig[0].id,
            fixed: false,
            tabTbConfig: tabTbConfig,
            tabTdConfig: tabTdConfig,
            kefuHref: kefuHref
        };
    },
    watch: {
        selected: function(val, oldVal) {
            // 这里就可以通过 val 的值变更来确定
            var kefuId = this.config.fields.field1.components.tabTb[2].id;
            if (val === kefuId) {
                // 让选中的等于点击前的tab避免切换
                this.selected = oldVal;
                this.kefu();
            }
        }
    },
    mounted: function() {
        var configFixed = this.config.fields.field1.fixed || false;
        if (configFixed) {
            var navbarEl = this.$refs['mint-navbar'].$el;
            this.offsetTop = $(navbarEl).offset().top;
            window.addEventListener('scroll', this.handleScroll);
        }
    },
    methods: {

        /**
         * handleScroll 根据配置决定是否fixed tab
         *
         */
        handleScroll: function() {
            this.fixed = window.scrollY > this.offsetTop;
        },

        /**
         * kefu 点击咨询客服
         *
         */
        kefu: function() {
            window.open(this.kefuHref);
        }
    }
};
</script>
<style src="./index.scss" lang="scss"></style>
