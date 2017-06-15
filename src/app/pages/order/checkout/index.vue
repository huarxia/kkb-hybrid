<template src="./index.tpl.html"></template>

<script>
import {Toast} from 'mint-ui';
import restFullLoader from 'src/common/loader';
import kkb from 'src/common/kkb';
import jointUrl from '@/common/joint-url';
export default {
    data: function() {
        let courseId = this.$route.params.courseId;
        return {
            courseId: courseId,
            userData: '',
            courseData: '',
            offPrice: 0,
            couponCode: '',
            money: 0
        };
    },
    components: {},
    mounted: function() {
        this.init();
    },
    computed: {
        finalPrice() {
            let finalPrice = Number(this.courseData.occupyPriceSpec) - Number(this.offPrice);
            return (finalPrice <= 0) ? 0.01 : finalPrice;
        }
    },
    methods: {
        init: function() {
            this.getStudentsInfo();
            this.getOrderCourseDetail();
        },

        /**
         * getStudentsInfo 根据uid获取学员信息
         *
         */
        getStudentsInfo: function() {
            let me = this;
            let url = kkb.getPageUrl('getStudentsInfo', 'get');
            let paramsArr = [];
            let paramsObj = this.$route.params;
            for (let item in paramsObj) {
                paramsArr.push(item);
            }
            // uid暂时写死，后面根据cookie获取
            paramsArr.push('uid');
            paramsObj['uid'] = 123;
            url = jointUrl.url(paramsArr, paramsObj, url);
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        let data = res.data;
                        me.userData = data;
                    }
                });
        },

        /**
         * getOrderCourseDetail 获取课程详情
         *
         */
        getOrderCourseDetail: function() {
            let me = this;
            let url = kkb.getPageUrl('getOrderCourseDetail', 'get');
            let paramsArr = [];
            let paramsObj = this.$route.params;
            for (let item in paramsObj) {
                paramsArr.push(item);
            }
            url = jointUrl.url(paramsArr, paramsObj, url);
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        let data = res.data;
                        me.courseData = data;
                    }
                });
        },

        /**
         * checkAccount 根据优惠码设置优惠力度
         *
         * @return {Boolen} 如果不满足优惠条件则返回false
         */
        checkAccount: function() {
            let me = this;
            let couponCode = this.couponCode;
            // 如果优惠码回空则恢复原价
            if (!couponCode) {
                this.courseData.occupyPriceSpec += this.money;
                return false;
            }
            let url = kkb.getPageUrl('checkAccount', 'post');
            let paramsArr = [];
            let paramsObj = this.$route.params;
            for (let item in paramsObj) {
                paramsArr.push(item);
            }
            url = jointUrl.url(paramsArr, paramsObj, url);
            let data = {
                couponcode: couponCode
            };
            restFullLoader.requestPOST(url, data)
                .then((res) => {
                    let data = res.data;
                    if (res.status === 0) {
                        me.money = data.money;
                        me.courseData.occupyPriceSpec -= data.money;
                    } else {
                        console.log(data);
                        Toast({
                            message: res.statusInfo || '服务器出错啦~~',
                            duration: 5000
                        });
                    }
                });
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
