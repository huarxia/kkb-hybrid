/**
 * @file    统一配置需要的请求地址
 * @authors 花夏 (bliu@huikedu.com)
 *
 * @version 1.0.0
 * @date    2017-05-08 11:16:11
 */

// url不以/开头则表明当前是绝对路径
const url = {
    getIndexConfig: {
        get: '/indexMeta'
    },
    getIndexBingData: {
        get: '/indexData'
    },
    getCourseConfig: {
        get: '/courseConfig'
    },
    getCourseBingData: {
        get: '/courseData'
    },
    getSection: {
        get: '/courses/:courseId/node/:subId'
    },
    getSignupConfig: {
        get: '/signupConfig'
    },
    getSignup: {
        get: '/signupData/:courseId'
    },
    postSignUp: {
        post: '/enroll/signUp'
    },
    getStudentsInfo: {
        get: '/students/:uid/signup/:courseId'
    },
    getOrderCourseDetail: {
        get: '/courses/:courseId'
    },
    checkAccount: {
        post: '/accounting/:courseId/check'
    },
    createOrder: {
        post: '/accounting/:courseId/buy'
    }
};

export default {
    getPageUrl: (type = 0, method = 'post') => {
        return (url[type] || {})[method];
    }
};
