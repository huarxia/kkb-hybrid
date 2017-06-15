/**
 * @file    课程详情页组件配置文件
 * @authors 花夏 (bliu@huikedu.com)
 *
 * @version 1.0.0
 * @date    2017-04-25 14:37:47
 */

let config = {
    componentsListConfig: {
        slideShow: {
            fields: {
                field1: {
                    title: '详情页头图',
                    field: 'courseHeaderImg',
                    style: {
                        width: '',
                        height: 3.5
                    },
                    dataSource: {
                        data: [
                            {
                                src: 'http://h5.kaikeba.com/public/images/cover/top_cover_5.png',
                                href: ''
                            }
                        ]
                    }
                }
            }
        },
        tabControl: {
            tabTb: [
                {
                    id: '1',
                    text: '课程大纲'
                },
                {
                    id: '2',
                    text: '课程介绍'
                },
                {
                    id: '3',
                    text: '咨询'
                }
            ],
            tabTd: {
                courseBasics: {
                    fields: {
                        field1: {
                            title: 'iOS开发工程师',
                            field: 'courseBasics',
                            dataSource: {
                                data: [
                                    {
                                        title: '学习周期 ：',
                                        description: '32天',
                                        style: {
                                            color: '#e43e3e'
                                        }
                                    },
                                    {
                                        title: '所属行业 ：',
                                        description: '技术学院'
                                    },
                                    {
                                        title: '课程讲师 ：',
                                        description: '薛攀攀 刘伟'
                                    },
                                    {
                                        title: '保就业班 ：',
                                        description: '全款特惠￥8999.00',
                                        descriptionSec: '原价￥10688.00',
                                        style: {
                                            color: '#e43e3e'
                                        },
                                        descriptionSecStyle: {
                                            color: '#b8b1b2',
                                            'text-decoration': 'line-through'
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
                courseDescription: {
                    fields: {
                        field1: {
                            title: '课程描述',
                            icon: 'fa-edit',
                            field: 'courseDescription',
                            dataSource: {
                                data: {
                                    detail: '作为一名专业的iOS开发工程师，你应该深感自豪。iOS系统是这个时代的极致之作，能真正让你用敏捷开发铸造风靡全球的出色产品。来自无限互联的资深高级工程师兼教学大神，将通过上百个iOS经典实战案例，激发你最深处的能量与渴望。',
                                    tag: [
                                        '100+经典案例剖析',
                                        '7+商业项目实战',
                                        '20+专业课题练习'
                                    ]
                                }
                            }
                        }
                    }
                },
                courseOutline: {
                    fields: {
                        field1: {
                            title: '课程大纲',
                            icon: 'fa-list',
                            field: 'courseOutline',
                            dataSource: {
                                data: {
                                    fields: {
                                        field1: {
                                            type: [
                                                'courseSection__1',
                                                'courseSection__2',
                                                'courseSection__3'
                                            ],
                                            getDataUrl: '/courses/:courseId/section'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        consultBar: {}
    }
};

export default config;
