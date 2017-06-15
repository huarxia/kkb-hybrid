<template src="./index.tpl.html"></template>

<script>
    export default {
        props: ['data', 'fieldStyle'],
        data: function() {
            if (this.fieldStyle === 'small') {
                this.data['picSrc'] = this.data.pic;
            } else {
                this.data['picSrc'] = this.data.bigPic;
            }
            return {};
        },
        mounted: function() {},
        methods: {

            /**
             * gotoCourseDetail 根据courseId跳转到课程详情页
             *
             * @param  {Number} courseId 课程ID
             *
             */
            gotoCourseDetail: function(courseId) {
                this.$router.push(
                    {
                        name: 'courseDetail',
                        params: {
                            courseId: courseId
                        }
                    }
                );
            }
        }
    };
</script>
<style src="./index.scss" lang="scss" scoped></style>
