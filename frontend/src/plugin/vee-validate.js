
// vee-validate 유효성 검사

import Vue from 'vue';
import { ValidationObserver, ValidationProvider, extend, localize } from 'vee-validate';
import ko from 'vee-validate/dist/locale/ko.json'

import {
    email,
    required,
    max,
    min,
    numeric,
    ext
} from 'vee-validate/dist/rules'

localize('ko', ko)
extend('email', {
    ...email,
    message: 'This field is email type'
})// 이메일 
extend("required", {
    ...required,
    message: 'This field is required'
}) 
extend("max", max)
extend("min", min)
extend("numeric", numeric)
extend("ext", ext)

Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);


