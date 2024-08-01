// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",c=r()?function(e){var r,n,o;if(null==e)return t.call(e);n=e[a],r=i(e,a);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},u=Array.isArray?Array.isArray:function(e){return"[object Array]"===c(e)},s=/./,l="function"==typeof Object.defineProperty?Object.defineProperty:null,f=Object.defineProperty;function p(e){return"number"==typeof e}function g(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function d(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+g(i):g(i)+e,n&&(e="-"+e)),e}var b=String.prototype.toLowerCase,y=String.prototype.toUpperCase;function h(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!p(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=d(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=d(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===y.call(e.specifier)?y.call(t):b.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var v=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,j=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,S=/^(\d+)$/,O=/^(\d+)e/,x=/\.0$/,k=/\.0*e/,T=/(\..*[^0])0*e/;function A(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!p(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":v(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=j.call(t,T,"$1e"),t=j.call(t,k,"e"),t=j.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=j.call(t,_,"e+0$1"),t=j.call(t,E,"e-0$1"),e.alternate&&(t=j.call(t,S,"$1."),t=j.call(t,O,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===m.call(e.specifier)?m.call(t):w.call(t)}function P(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var V=String.fromCharCode,F=Array.isArray;function $(e){return e!=e}function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function I(e){var r,t,n,i,o,a,c,u,s,l,f,p,g;if(!F(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",c=1,u=0;u<e.length;u++)if("string"==typeof(n=e[u]))a+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,$(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,$(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=h(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!$(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=$(o)?String(n.arg):V(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=A(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=d(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-l.length)<0?l:l=p?l+P(g):P(g)+l)),a+=n.arg||"",c+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function L(e){var r,t,n,i;for(t=[],i=0,n=B.exec(e);n;)(r=e.slice(i,B.lastIndex-n[0].length)).length&&t.push(r),t.push(R(n)),i=B.lastIndex,n=B.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function G(e){var r,t;if("string"!=typeof e)throw new TypeError(G("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[L(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return I.apply(null,r)}var Z,W=Object.prototype,M=W.toString,U=W.__defineGetter__,X=W.__defineSetter__,z=W.__lookupGetter__,N=W.__lookupSetter__;Z=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?f:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===M.call(e))throw new TypeError(G("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===M.call(t))throw new TypeError(G("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(z.call(e,r)||N.call(e,r)?(n=e.__proto__,e.__proto__=W,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&U&&U.call(e,r,t.get),a&&X&&X.call(e,r,t.set),e};var q=Z;function D(e,r,t){q(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(e){return"boolean"==typeof e}var J=Boolean,K=Boolean.prototype.toString,Q=r();function Y(e){return"object"==typeof e&&(e instanceof J||(Q?function(e){try{return K.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===c(e)))}function ee(e){return H(e)||Y(e)}D(ee,"isPrimitive",H),D(ee,"isObject",Y);var re="object"==typeof self?self:null,te="object"==typeof window?window:null,ne="object"==typeof globalThis?globalThis:null,ie=function(e){if(arguments.length){if(!H(e))throw new TypeError(G("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ne)return ne;if(re)return re;if(te)return te;throw new Error("unexpected error. Unable to resolve global object.")}(),oe=ie.document&&ie.document.childNodes,ae=Int8Array;function ce(){return/^\s*function\s*([^(]*)/i}var ue=/^\s*function\s*([^(]*)/i;function se(e){return null!==e&&"object"==typeof e}function le(e){var r,t,n,i;if(("Object"===(t=c(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ue.exec(n.toString()))return r[1]}return se(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}D(ce,"REGEXP",ue),D(se,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(G("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!u(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(se));var fe="function"==typeof s||"object"==typeof ae||"function"==typeof oe?function(e){return le(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?le(e).toLowerCase():r};function pe(e){return"function"===fe(e)}var ge,de=Object,be=Object.getPrototypeOf;ge=pe(Object.getPrototypeOf)?be:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===c(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var ye=ge,he=Object.prototype;return function(e){var r;return!!function(e){return"object"==typeof e&&null!==e&&!u(e)}(e)&&(!(r=function(e){return null==e?null:(e=de(e),ye(e))}(e))||!i(e,"constructor")&&i(r,"constructor")&&pe(r.constructor)&&"[object Function]"===c(r.constructor)&&i(r,"isPrototypeOf")&&pe(r.isPrototypeOf)&&(r===he||function(e){var r;for(r in e)if(!i(e,r))return!1;return!0}(e)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isPlainObject=r();
//# sourceMappingURL=browser.js.map