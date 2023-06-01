// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return t&&"symbol"==typeof Symbol.toStringTag}var e=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(t,r){return null!=t&&n.call(t,r)}var u="function"==typeof Symbol?Symbol.toStringTag:"";var c=r()?function(t){var r,n,c;if(null==t)return e.call(t);n=t[u],r=o(t,u);try{t[u]=void 0}catch(r){return e.call(t)}return c=e.call(t),r?t[u]=n:delete t[u],c}:function(t){return e.call(t)};var i=Array.isArray?Array.isArray:function(t){return"[object Array]"===c(t)};var f=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var a,p=Object.defineProperty,y=Object.prototype,s=y.toString,b=y.__defineGetter__,v=y.__defineSetter__,d=y.__lookupGetter__,j=y.__lookupSetter__;a=function(){try{return l({},"x",{}),!0}catch(t){return!1}}()?p:function(t,r,e){var n,o,u,c;if("object"!=typeof t||null===t||"[object Array]"===s.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===s.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(d.call(t,r)||j.call(t,r)?(n=t.__proto__,t.__proto__=y,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),u="get"in e,c="set"in e,o&&(u||c))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&b&&b.call(t,r,e.get),c&&v&&v.call(t,r,e.set),t};var _=a;function w(t,r,e){_(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}function g(t){return"boolean"==typeof t}var m=Boolean.prototype.toString;var O=r();function h(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===c(t)))}function S(t){return g(t)||h(t)}function P(){return new Function("return this;")()}w(S,"isPrimitive",g),w(S,"isObject",h);var A="object"==typeof self?self:null,E="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},T="object"==typeof B?B:null;var x=function(t){if(arguments.length){if(!g(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return P()}if(A)return A;if(E)return E;if(T)return T;throw new Error("unexpected error. Unable to resolve global object.")}(),F=x.document&&x.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var C=/^\s*function\s*([^(]*)/i;function G(t){return null!==t&&"object"==typeof t}function L(t){var r,e,n,o;if(("Object"===(e=c(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=C.exec(n.toString()))return r[1]}return G(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}w(k,"REGEXP",C),w(G,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!i(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(G));var M="function"==typeof f||"object"==typeof V||"function"==typeof F?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};function I(t){return"function"===M(t)}var N,R=Object.getPrototypeOf;N=I(Object.getPrototypeOf)?R:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===c(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var U=N;var X=Object.prototype;function q(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!i(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),U(t))}(t),!r||!o(t,"constructor")&&o(r,"constructor")&&I(r.constructor)&&"[object Function]"===c(r.constructor)&&o(r,"isPrototypeOf")&&I(r.isPrototypeOf)&&(r===X||function(t){var r;for(r in t)if(!o(t,r))return!1;return!0}(t)))}export{q as default};
//# sourceMappingURL=mod.js.map