<template src="./index.tpl.html"></template>

<script>
import componentsList from './components';
import restFullLoader from 'src/common/loader';
import kkb from 'src/common/kkb';
export default {
    data: function() {
        return {
            items: [],
            indexConfig: {},
            bindingData: {}
        };
    },
    components: componentsList,
    mounted: function() {
        this.getConfig();
        this.getIndexBingData();
    },
    watch: {
        bindingData: {
            handler: function(val, oldVal) {
                this.initComponents();
            }
        }
    },
    methods: {

        /**
         * initComponents 初始化页面需要的组件
         *
         */
        initComponents: function() {
            var _config = {};
            _config = this.indexConfig.components;
            for (var i = 0, len = _config.length; i < len; i++) {
                let bindingData = this.bindingData || '';
                this.items.push({
                    type: _config[i].type,
                    config: _config[i],
                    bindingData: bindingData
                });
            }
        },

        /**
         * getConfig 獲取首頁組件配置
         *
         */
        getConfig: function() {
            var me = this;
            var url = kkb.getPageUrl('getIndexConfig', 'get');
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        me.indexConfig = res.data;
                    }
                });
        },

        /**
         * getIndexBingData 获取首页bingData
         *
         */
        getIndexBingData: function() {
            var me = this;
            var url = kkb.getPageUrl('getIndexBingData', 'get');
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        me.bindingData = res.data;
                    }
                });
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
