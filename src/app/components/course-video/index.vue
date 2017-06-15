<template src="./index.tpl.html"></template>
<script>
import '@/common/lib/polyvplayer';
export default {
    props: ['vid'],
    data: function() {
        return {
            player: null,
            height: 180
        };
    },
    mounted: function() {
        this.init();
    },
    watch: {
        vid: {
            handler: function(val, oldVal) {
                this.play();
            }
        }
    },
    methods: {

        /**
         * init 初始化播放器
         *
         */
        init: function() {
            this.play();
        },

        /**
         * play 播放器播放
         *
         */
        play: function() {
            var me = this;
            let selector = '#course-video';
            let querySelector = document.querySelector(selector);
            this.height = Math.max(querySelector.offsetHeight, this.height, 200);
            // 如果播放器存在了，不需要初始化，直接更改播放ID即可
            if (this.player) {
                this.player.changeVid(this.vid);
            } else if (this.vid) {
                this.player = window.polyvObject(selector)
                        .videoPlayer({
                            height: me.height,
                            vid: me.vid,
                            // 自动播放
                            videoauto: 1,
                            watchStartTime: '00:00',
                            ban_seek_by_limit_time: 'on',
                            ban_history_time: 'on'
                        });
            }
            try {
                this.player.j2s_resumeVideo();
            } catch (e) {
                window.console && console.log(e);
            }
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
