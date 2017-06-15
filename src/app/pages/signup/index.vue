<template src="./index.tpl.html"></template>

<script>
import componentsList from './components';
import restFullLoader from 'src/common/loader';
import kkb from 'src/common/kkb';
import jointUrl from '@/common/joint-url';
export default {
    data: function() {
        return {
            items: [],
            bindingData: {}
        };
    },
    components: componentsList,
    mounted: function() {
        this.init();
    },
    watch: {
        bindingData: {
            handler: function(val, oldVal) {
                this.initComponents();
            }
        }
    },
    methods: {
        init: function() {
            this.getConfig();
            this.getSignupBingData();
        },

        /**
         * initComponents 初始化页面需要的组件
         *
         */
        initComponents: function() {
            var _config = {};
            _config = this.config;
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
         * getConfig 获取课程报名配置
         *
         */
        getConfig: function() {
            var me = this;
            var url = kkb.getPageUrl('getSignupConfig', 'get');
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        me.config = res.data.components;
                    }
                });
        },

        /**
         * getSignupBingData 获取signupbingData
         *
         */
        getSignupBingData: function() {
            var me = this;
            var url = kkb.getPageUrl('getSignup', 'get');
            var paramsArr = ['courseId'];
            var params = this.$route.params;
            var courseId = params.courseId;
            var paramsObj = {
                courseId: courseId
            };
            url = jointUrl.url(paramsArr, paramsObj, url);
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        me.bindingData = res.data;
                    }
                });
        },

        /**
         * commit 提交填写数据
         *
         */
        commit: function() {
            this.getChildData();
        },

        /**
         * getChildData 获取子组件data
         *
         * @return {Object | Boolen} 返回页面组装子组件数据后的数据，或者子组件没有通过校验返回布尔值
         */
        getChildData: function() {
            var postData = {};
            var children = this.$children;
            var childData;
            children.some((child) => {
                // 没有getData函数,则忽略本组件
                if (!child.getData) {
                    return false;
                }
                childData = child.getData();
                // 如果本组件getData返回false,即校验失败，则停止取数据
                // 如果组件校验失败则直接返回true
                if (childData === false) {
                    // some 语法校验失败需返回true
                    return true;
                }
                postData[childData.fieldName] = childData.fieldValue;
            });
            if (childData === false) {
                return false;
            }
            this.postData(postData);
        },

        /**
         * postData 根据填写数据保存至数据库
         *
         * @param  {Object} data 填写的数据
         *
         */
        postData: function(data) {
            let me = this;
            let url = kkb.getPageUrl('postSignUp', 'post');
            let courseId = this.$route.params.courseId;
            data['courseId'] = courseId;
            restFullLoader.requestPOST(url, data)
                .then((res) => {
                    if (res.status === 0) {
                        me.$router.push({
                            name: 'checkout',
                            params: {
                                cid: data.courseId
                            }
                        });
                    }
                });
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
