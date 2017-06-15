// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;

// 自定义title指令
// 使用方法
// 在组件页面的根div上 v-title data-title="首页 | 开课吧"

Vue.directive('title', {
    inserted: function(el, binding) {
        document.title = el.dataset.title;
    }
});

new Vue({
    router,
    template: '<App/>',
    components: {
        App
    }
}).$mount('#app');
