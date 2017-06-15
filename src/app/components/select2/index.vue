<template src="./index.tpl.html"></template>

<script>
// import util from '@/common/lib/util';
import resolveBD from '@/common/binding-data';
import $ from 'jquery';
import 'select2/dist/css/select2.min.css';
require('select2/dist/js/i18n/zh-CN');
import 'select2';
export default {
    props: ['config', 'bindingData'],
    data: function() {
        let field1 = this.config.fields.field1;
        let field = field1.field;
        let data = field1.data;
        let bindingData = resolveBD.resolveBindingData(field, this.bindingData);
        if (bindingData) {
            data = data.concat(bindingData);
        }
        return {
            selectConfig: field1,
            data: data,
            checkedVal: '',
            error: {
                invalid: false,
                message: ''
            }
        };
    },
    mounted: function() {
        this.init();
    },
    methods: {

        /**
         * init 初始化select2
         *
         */
        init: function() {
            let me = this;
            this.multiple();
            let options = {
                language: 'zh-CN',
                placeholder: '请选择',
                minimumResultsForSearch: this.selectConfig.minimumResultsForSearch,
                maximumSelectionLength: this.selectConfig.maximumSelectionLength,
                data: this.data
            };
            $('select', this.$el).select2(options).on('select2:close', function(e) {
                me.setSelectData($(e.target));
            });
            this.setChecked();
        },

        /**
         * multiple 有关multiple的操作
         *
         */
        multiple: function() {
            // 如果支持多选则请选择不能多选进去,否则加进去以提高体验度
            if (this.selectConfig.multiple !== 'multiple') {
                // 添加默认请选择
                this.data.unshift({
                    id: -1,
                    text: '请选择'
                });
            }
        },

        /**
         * setSelectData 根据selec2设置选中值
         *
         * @param {Object} el $对象
         */
        setSelectData: function(el) {
            let val = el.select2('val');
            this.checkedVal = val;
        },

        /**
         * setChecked 设置默认选项
         */
        setChecked: function() {
            // 设置默认选择
            if (this.selectConfig.checked) {
                $('select', this.$el).val(this.selectConfig.checked).trigger('change');
                this.setSelectData($('select', this.$el));
            }
        },

        validate: function() {
            this.error.invalid = false;
            let val = this.checkedVal;
            let field = this.config.fields.field1;
            let validateRules = field.validateRules;
            let required = validateRules.required;
            if (required.rule && (val === -1 || val === '-1' || !val)) {
                this.error.invalid = true;
                this.error.message = required.message;
            }
        },

        /**
         * getData 对外暴露设置的值
         *
         * @return {String | Number | Array} 返回设置的值，单选为number|string 多选为数组
         */
        getData: function() {
            this.validate();
            if (this.error.invalid) {
                return false;
            }
            let data = {
                // 提交的字段
                fieldName: this.selectConfig.field,
                fieldValue: this.checkedVal
            };
            return data;
        }
    }
};
</script>
<style src="./index.scss" lang="scss"></style>
