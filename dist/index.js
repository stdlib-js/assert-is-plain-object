"use strict";var u=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var n=u(function(y,i){
var c=require('@stdlib/assert-is-object/dist'),o=require('@stdlib/assert-is-function/dist'),a=require('@stdlib/utils-get-prototype-of/dist'),e=require('@stdlib/assert-has-own-property/dist'),f=require('@stdlib/utils-native-class/dist'),p=Object.prototype;function v(t){var r;for(r in t)if(!e(t,r))return!1;return!0}function O(t){var r;return c(t)?(r=a(t),r?!e(t,"constructor")&&e(r,"constructor")&&o(r.constructor)&&f(r.constructor)==="[object Function]"&&e(r,"isPrototypeOf")&&o(r.isPrototypeOf)&&(r===p||v(t)):!0):!1}i.exports=O
});var P=n();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
