import Vue from 'vue';
import slideShow from '@/components/slide-show/index';
// 挂载元素并返回已渲染的文本的工具函数 
function getRenderedText(Component, propsData) {
    const Ctor = Vue.extend(Component)
    const vm = new Ctor({
        propsData
    }).$mount();
    return vm.$el.textContent;
}

describe('测试轮播图组件', () => {
    let message = '组件加载完毕后，应该有三张图片,且包含小圆点，包含跳转链接';
    it(message, () => {
        expect(getRenderedText(slideShow, {
            config: {
                type: 'slideShow',
                fields: {
                    field1: {
                        title: '轮播图',
                        field: 'slideShow',
                        style: {
                            height: '3.6rem'
                        }
                    }
                }
            },
            bindingData: {
                slideShow: [{
                    src: 'http://i.kaikeba.com/149214167322843086',
                    href: 'http://www.chanpin100.com/article/103549'
                }, {
                    src: 'http://i.kaikeba.com/149300343865353422',
                    href: 'http://www.chanpin100.com/article/103608'
                }, {
                    src: 'http://i.kaikeba.com/147732361405272022',
                    href: 'http://m.kaikeba.com/special/pm/?gxbapp'
                }, {
                    src: 'http://i.kaikeba.com/147732349183741791',
                    href: 'http://m.kaikeba.com/special/uxd/?gxbapp'
                }]
            }
        })).to.equal('Welcome to Your Vue.js App')
    });
});
