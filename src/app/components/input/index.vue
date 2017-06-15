<template src="./index.tpl.html"></template>

<script>
import util from '@/common/lib/util';
export default {
    props: ['config', 'bindingData'],
    data: function() {
        let field = this.config.fields.field1;
        let inputPaddingLeft = field.icon ? '.8rem' : 0;
        let inputStyle = {
            'padding-left': inputPaddingLeft
        };
        return {
            field: field,
            inputStyle: inputStyle,
            error: {
                invalid: false,
                message: ''
            }
        };
    },
    mounted: function() {},
    methods: {

        /**
         * onInputBlur 失去焦点
         *
         */
        onInputBlur: function() {
            this.validate();
        },

        /**
         * validate 根据配置做校验
         *
         * @return {Boolen} 返回校验是否通过
         */
        validate: function() {
            this.error.invalid = false;
            let field = this.config.fields.field1;
            let validateRules = field.validateRules;
            let inputValue = field.name;
            // 校验是否为空
            let required = validateRules.required;
            if (required.rule && !inputValue) {
                this.error.invalid = true;
                this.error.message = required.message;
                return false;
            }

            // 校验文本类型是否正确
            let valueType = validateRules.valueType;
            let reg = util.getRegExpObject(valueType.rule);
            if (reg && !reg.test(inputValue)) {
                this.error.invalid = true;
                this.error.message = valueType.message;
                return false;
            }

            // 校验最小长度
            let minLength = validateRules.minLength;
            if (minLength && inputValue.length < minLength.rule) {
                this.error.invalid = true;
                this.error.message = minLength.message;
                return false;
            }

            // 校验最大长度
            let maxLength = validateRules.maxLength;
            if (maxLength && inputValue.length > maxLength.rule) {
                this.error.invalid = true;
                this.error.message = maxLength.message;
                return false;
            }

            // 校验最小值
            let minValue = validateRules.minValue;
            if (minValue && inputValue < minValue.rule) {
                this.error.invalid = true;
                this.error.message = minValue.message;
                return false;
            }

            // 校验最大值
            let maxValue = validateRules.maxValue;
            if (maxValue && inputValue > maxValue.rule) {
                this.error.invalid = true;
                this.error.message = maxValue.message;
                return false;
            }
        },

        /**
         * getData 返回输入的值给父页面使用
         *
         * @return {Object} 返回输入的值给父页面使用
         */
        getData: function() {
            this.validate();
            if (this.error.invalid) {
                return false;
            }
            let data = {
                // 提交的字段
                fieldName: this.field.field,
                fieldValue: this.field.name
            };
            return data;
        }
    }
};
</script>
<style src="./index.scss" lang="scss" scoped></style>
