/**
 * @file    首页组件配置文件
 * @authors 花夏 (bliu@huikedu.com)
 *
 * @version 1.0.0
 * @date    2017-04-25 14:37:47
 */

let config = {
    componentsListConfig: {
        kHeader: {},
        slideShow: {
            fields: {
                field1: {
                    title: '轮播图',
                    field: 'indexSlideShow',
                    style: {
                        width: '',
                        height: 3.6
                    },
                    dataSource: {
                        data: [
                            {
                                src: 'http://i.kaikeba.com/149214167322843086',
                                href: 'http://www.chanpin100.com/article/103549'
                            },
                            {
                                src: 'http://i.kaikeba.com/149300343865353422',
                                href: 'http://www.chanpin100.com/article/103608'
                            },
                            {
                                src: 'http://i.kaikeba.com/147732361405272022',
                                href: 'http://m.kaikeba.com/special/pm/?gxbapp'
                            },
                            {
                                src: 'http://i.kaikeba.com/147732349183741791',
                                href: 'http://m.kaikeba.com/special/uxd/?gxbapp'
                            }
                        ]
                    }
                }
            }
        },
        indexIcon: {},
        layoutBox__1: {
            fields: {
                field1: {
                    title: '热门课程',
                    field: 'indexlayoutBox1',
                    isIcon: {
                        rule: false,
                        class: ''
                    },
                    childFields: [
                        {
                            type: 'course',
                            fieldStyle: 'small',
                            url: '/courses/1',
                            method: 'get',
                            param: ''
                        }
                    ]
                }
            }
        },
        layoutBox__2: {
            fields: {
                field1: {
                    title: '热门课程',
                    field: 'indexlayoutBox2',
                    isIcon: {
                        rule: false,
                        class: ''
                    },
                    childFields: [
                        {
                            type: 'course',
                            fieldStyle: 'default',
                            url: '/courses/2',
                            method: 'get',
                            param: ''
                        }
                    ]
                }
            }
        }
    }
};

export default config;
