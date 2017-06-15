<template src="./index.tpl.html"></template>

<script>
import componentsList from './components';
import restFullLoader from 'src/common/loader';
import kkb from 'src/common/kkb';
export default {
    components: componentsList,
    data: function() {
        return {
            items: [],
            config: '',
            bindingData: ''
        };
    },
    mounted: function() {
        this.getConfig();
        this.getBingData();
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
            var _config = this.config.components;
            for (var i = 0, len = _config.length; i < len; i++) {
                this.items.push({
                    type: _config[i].type,
                    config: _config[i]
                });
            }
        },

        /**
         * getConfig 獲取详情页組件配置
         *
         */
        getConfig: function() {
            var me = this;
            var url = kkb.getPageUrl('getCourseConfig', 'get');
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        me.config = res.data;
                    }
                });
        },

        /**
         * getBingData 获取课程详情页bingData
         *
         */
        getBingData: function() {
            var me = this;
            var url = kkb.getPageUrl('getCourseBingData', 'get');
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        me.bindingData = res.data || {};
                    }
                });
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
