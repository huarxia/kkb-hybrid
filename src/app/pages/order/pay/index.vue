<template src="./index.tpl.html"></template>

<script>
import restFullLoader from 'src/common/loader';
import kkb from 'src/common/kkb';
import jointUrl from '@/common/joint-url';
import Vue from 'vue';
import {Radio} from 'mint-ui';
Vue.component(Radio.name, Radio);
export default {
    data: function() {
        return {
            orderData: {},
            payValue: '1'
        };
    },
    components: {},
    mounted: function() {
        this.init();
    },
    methods: {

        /**
         * init 初始化
         *
         */
        init: function() {
            this.createOrder();
        },

        /**
         * createOrder 根据课程ID创建订单
         *
         */
        createOrder: function() {
            let me = this;
            let courseId = this.$route.params.courseId;
            let url = kkb.getPageUrl('createOrder', 'post');
            let paramsArr = [courseId];
            let paramsObj = this.$route.params;
            for (let item in paramsObj) {
                paramsArr.push(item);
            }
            url = jointUrl.url(paramsArr, paramsObj, url);
            restFullLoader.requestPOST(url)
                .then((res) => {
                    let data = res.data;
                    if (res.status === 0) {
                        me.orderData = data;
                    }
                });
        },

        /**
         * pay 支付跳转
         *
         */
        pay: function() {
            let payValue = this.payValue;
            console.log(payValue);
            alert('别点啦~~您真有钱~~');
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
