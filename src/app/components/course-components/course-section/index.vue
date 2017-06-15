<template src="./index.tpl.html"></template>

<script>
export default {
    props: ['bindingData'],
    data: function() {
        // 获取课程ID
        let courseId = this.$route.params.courseId;
        this.setCourseId(courseId);
        return {};
    },
    mounted: function() {},
    methods: {

        /**
         * play 跳转到播放页面
         *
         * @param  {Number|String} courseId 课程ID
         * @param  {Number|String} subId    模块ID
         *
         */
        play: function(courseId, subId) {
            this.$router.push({
                path: '/section/' + courseId + '/' + subId
            });
        },

        /**
         * setCourseId 给每个模块设置上课程ID方便后续操作
         *
         * @param  {Number|String} courseId 课程ID
         */
        setCourseId: function(courseId) {
            let bindingData = this.bindingData;
            let subs = bindingData.subs;
            subs.map(function(item) {
                item.courseId = courseId;
            });
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
