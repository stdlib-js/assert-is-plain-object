// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-object@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-native-class@v0.2.0-esm/index.mjs";var i=Object.prototype;function n(n){var c;return!!t(n)&&(!(c=r(n))||!e(n,"constructor")&&e(c,"constructor")&&s(c.constructor)&&"[object Function]"===o(c.constructor)&&e(c,"isPrototypeOf")&&s(c.isPrototypeOf)&&(c===i||function(t){var s;for(s in t)if(!e(t,s))return!1;return!0}(n)))}export{n as default};
//# sourceMappingURL=index.mjs.map
