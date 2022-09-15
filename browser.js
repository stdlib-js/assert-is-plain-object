// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isPlainObject=e()}(this,(function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var r=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(t,e){return null!=t&&n.call(t,e)}var u="function"==typeof Symbol?Symbol.toStringTag:"";var i=e()?function(t){var e,n,i;if(null==t)return r.call(t);n=t[u],e=o(t,u);try{t[u]=void 0}catch(e){return r.call(t)}return i=r.call(t),e?t[u]=n:delete t[u],i}:function(t){return r.call(t)};var c=Array.isArray?Array.isArray:function(t){return"[object Array]"===i(t)};var f=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var a,p=Object.defineProperty,y=Object.prototype,s=y.toString,b=y.__defineGetter__,d=y.__defineSetter__,v=y.__lookupGetter__,j=y.__lookupSetter__;a=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?p:function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===s.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(v.call(t,e)||j.call(t,e)?(n=t.__proto__,t.__proto__=y,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&b&&b.call(t,e,r.get),i&&d&&d.call(t,e,r.set),t};var _=a;function g(t,e,r){_(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function m(t){return"boolean"==typeof t}var w=Boolean.prototype.toString;var O=e();function h(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===i(t)))}function S(t){return m(t)||h(t)}function P(){return new Function("return this;")()}g(S,"isPrimitive",m),g(S,"isObject",h);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},B="object"==typeof T?T:null;var x=function(t){if(arguments.length){if(!m(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return P()}if(A)return A;if(E)return E;if(B)return B;throw new Error("unexpected error. Unable to resolve global object.")}(),F=x.document&&x.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;function G(t){return null!==t&&"object"==typeof t}function L(t){var e,r,n,o;if(("Object"===(r=i(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=C.exec(n.toString()))return e[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}g(k,"REGEXP",C),g(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!c(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(G));var M="function"==typeof f||"object"==typeof V||"function"==typeof F?function(t){return L(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?L(t).toLowerCase():e};function I(t){return"function"===M(t)}var N,R=Object.getPrototypeOf;N=I(Object.getPrototypeOf)?R:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===i(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var U=N;var X=Object.prototype;return function(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!c(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),U(t))}(t),!e||!o(t,"constructor")&&o(e,"constructor")&&I(e.constructor)&&"[object Function]"===i(e.constructor)&&o(e,"isPrototypeOf")&&I(e.isPrototypeOf)&&(e===X||function(t){var e;for(e in t)if(!o(t,e))return!1;return!0}(t)))}}));
//# sourceMappingURL=browser.js.map
