/**
 * @file:      路由配置
 * @author:    花夏(liubiao@itoxs.com)
 * @version:   V0.0.1
 * @date:      2017-03-21 19:34:17
 */

// import demo from '../demo/';
import index from '@/app/pages/index/';
import courseDetail from '@/app/pages/course-detail/';
import section from '@/app/pages/section/';
import signup from '@/app/pages/signup/';
import checkout from '@/app/pages/order/checkout/';
import pay from '@/app/pages/order/pay/';
export default [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/course/:courseId',
        name: 'courseDetail',
        component: courseDetail
    },
    {
        path: '/section/:courseId/:subId',
        name: 'section',
        component: section
    },
    {
        path: '/signup/:courseId',
        name: 'signup',
        component: signup
    },
    {
        path: '/order/checkout/:courseId',
        name: 'checkout',
        component: checkout
    },
    {
        path: '/order/pay/:courseId',
        name: 'pay',
        component: pay
    }
];
