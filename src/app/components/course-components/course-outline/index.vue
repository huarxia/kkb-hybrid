<template src="./index.tpl.html"></template>

<script>
import courseSection from '@/app/components/course-components/course-section/';
import restFullLoader from '@/common/loader.js';
import resolveBD from '@/common/binding-data';
import jointUrl from '@/common/joint-url';
export default {
    props: ['config', 'bindingData'],
    components: {
        courseSection
    },
    data: function() {
        var field1 = this.config.fields.field1;
        var field = field1.field;
        this.childComponents = field1.components || [];
        var bindingData = resolveBD.resolveBindingData(field, this.bindingData) || {};
        bindingData['icon'] = field1.icon;
        bindingData['title'] = field1.title;
        return {
            data: bindingData,
            items: []
        };
    },
    mounted: function() {
        this.getData();
    },
    methods: {

        /**
         * initComponents 初始化页面需要的组件
         *
         */
        initComponents: function() {
            var childComponents = this.childComponents;
            for (var i = 0, len = childComponents.length; i < len; i++) {
                this.items[i]['type'] = childComponents[i].type || '';
            }
        },

        /**
         * getData 获取课程阶段数据
         *
         */
        getData: function() {
            var me = this;
            var field1 = this.config.fields.field1;
            var getData = field1.getData;
            var paramsArr = getData.params;
            var paramsObj = this.$route.params;
            var url = getData.url;
            url = jointUrl.url(paramsArr, paramsObj, url);
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        this.data.data = res.data;
                        me.addParamToData();
                    }
                });
        },

        /**
         * addParamToData 合并需要的数据
         *
         */
        addParamToData: function() {
            var bindingData = this.data.data;
            for (var i = 0, len = bindingData.length; i < len; i++) {
                bindingData[i]['section'] = '阶段' + (i + 1);
                this.items.push(bindingData[i]);
            }
            this.setAuditionSection();
            this.initComponents();
        },

        /**
         * setAuditionSection 根据后端传回的课程数据放置到bindingData提供给免费试听使用
         */
        setAuditionSection: function() {
            var field1 = this.config.fields.field1;
            var field = field1.field;
            this.bindingData[field] = this.items;
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
