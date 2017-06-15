<template src="./index.tpl.html"></template>
<script>
import jointUrl from '@/common/joint-url';
import kkb from 'src/common/kkb';
import restFullLoader from 'src/common/loader';
import courseVideo from '@/app/components/course-video/';
export default {
    components: {
        courseVideo
    },
    data: function() {
        return {
            bindingData: {
                data: {},
                playing: {
                    nodeId: '',
                    vid: ''
                }
            }
        };
    },
    mounted: function() {
        this.init();
    },
    methods: {

        /**
         * init 视频播放初始化函数
         *
         */
        init: function() {
            this.getData();
        },

        /**
         * getData 根据配置接口获取页面数据
         *
         */
        getData: function() {
            var me = this;
            var params = this.$route.params;
            var courseId = params.courseId;
            var subId = params.subId;
            var paramsArr = ['courseId', 'subId'];
            var paramsObj = {
                courseId: courseId,
                subId: subId
            };
            var url = kkb.getPageUrl('getSection', 'get');

            url = jointUrl.url(paramsArr, paramsObj, url);
            restFullLoader.requestGET(url)
                .then((res) => {
                    if (res.status === 0) {
                        me.bindingData.data = res.data;
                        me.bindingData['playing']['nodeId'] = me.bindingData.data.nodes[0].nodeid;
                        me.bindingData['playing']['vid'] = me.bindingData.data.nodes[0].vid;
                    }
                });
        },

        /**
         * play 根据vid nodeId播放视频
         *
         * @param  {String} vid    视频ID
         * @param  {String|Number} nodeId 模块节点ID
         *
         */
        play: function(vid, nodeId) {
            this.bindingData.playing.nodeId = nodeId;
            this.bindingData.playing.vid = vid;
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
