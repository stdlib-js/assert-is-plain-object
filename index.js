// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isPlainObject=r()}(this,(function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(e,r){return null!=e&&n.call(e,r)}var i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";var c=r()?function(e){var r,n,i;if(null==e)return t.call(e);n=e[a],r=o(e,a);try{e[a]=void 0}catch(r){return t.call(e)}return i=t.call(e),r?e[a]=n:delete e[a],i}:function(e){return t.call(e)};var u=Array.isArray?Array.isArray:function(e){return"[object Array]"===c(e)};var s=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function p(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(o):g(o)+e,n&&(e="-"+e)),e}var b=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function h(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===y.call(e.specifier)?y.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var v=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,j=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,O=/^(\d+)$/,S=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,T=/(\..*[^0])0*e/;function A(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!p(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":v(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=j.call(t,T,"$1e"),t=j.call(t,k,"e"),t=j.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=j.call(t,_,"e+0$1"),t=j.call(t,E,"e-0$1"),e.alternate&&(t=j.call(t,O,"$1."),t=j.call(t,S,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):w.call(t)}function P(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var V=String.fromCharCode,F=isNaN,$=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,o,i,a,c,u,s,l,f,p,g;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if(n=e[u],"string"==typeof n)a+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,F(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,F(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!F(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=F(i)?String(n.arg):V(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-l.length)<0?l:l=p?l+P(g):P(g)+l)),a+=n.arg||"",c+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,o;for(t=[],o=0,n=B.exec(e);n;)(r=e.slice(o,B.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),o=B.lastIndex,n=B.exec(e);return(r=e.slice(o)).length&&t.push(r),t}function G(e){var r,t;if("string"!=typeof e)throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[L(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var Z,W=Object.prototype,M=W.toString,N=W.__defineGetter__,U=W.__defineSetter__,X=W.__lookupGetter__,z=W.__lookupSetter__;Z=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?f:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(X.call(e,r)||z.call(e,r)?(n=e.__proto__,e.__proto__=W,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&N&&N.call(e,r,t.get),a&&U&&U.call(e,r,t.set),e};var q=Z;function D(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(e){return"boolean"==typeof e}var J=Boolean,K=Boolean.prototype.toString;var Q=r();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===c(e)))}function ee(e){return H(e)||Y(e)}D(ee,"isPrimitive",H),D(ee,"isObject",Y);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof global?global:null,oe="object"==typeof globalThis?globalThis:null;var ie=function(e){if(arguments.length){if(!H(e))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(oe)return oe;if(re)return re;if(te)return te;if(ne)return ne;throw new Error("unexpected error. Unable to resolve global object.")}(),ae=ie.document&&ie.document.childNodes,ce=Int8Array;function ue(){return/^\s*function\s*([^(]*)/i}var se=/^\s*function\s*([^(]*)/i;function le(e){return null!==e&&"object"==typeof e}function fe(e){var r,t,n,o;if(("Object"===(t=c(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=se.exec(n.toString()))return r[1]}return le(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}D(ue,"REGEXP",se),D(le,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!u(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(le));var pe="function"==typeof s||"object"==typeof ce||"function"==typeof ae?function(e){return fe(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?fe(e).toLowerCase():r};function ge(e){return"function"===pe(e)}var de,be=Object,ye=Object.getPrototypeOf;de=ge(Object.getPrototypeOf)?ye:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===c(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var he=de;var ve=Object.prototype;return function(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!u(e)}(e)&&(!(r=function(e){return null==e?null:(e=be(e),he(e))}(e))||!o(e,"constructor")&&o(r,"constructor")&&ge(r.constructor)&&"[object Function]"===c(r.constructor)&&o(r,"isPrototypeOf")&&ge(r.isPrototypeOf)&&(r===ve||function(e){var r;for(r in e)if(!o(e,r))return!1;return!0}(e)))}}));
//# sourceMappingURL=index.js.map
