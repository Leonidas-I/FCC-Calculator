!function(t){function e(e){for(var a,o,u=e[0],i=e[1],s=e[2],p=0,f=[];p<u.length;p++)o=u[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);for(c&&c(e);f.length;)f.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],a=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(a=!1)}a&&(l.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={0:0},l=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var c=i;l.push([5,1]),n()}([,function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var a=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(t){a[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,i=o(t),s=1;s<arguments.length;s++){for(var c in n=Object(arguments[s]))r.call(n,c)&&(i[c]=n[c]);if(a){u=a(n);for(var p=0;p<u.length;p++)l.call(n,u[p])&&(i[u[p]]=n[u[p]])}}return i}},,function(module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_button_jsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4);function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?_assertThisInitialized(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var isOperators=/[+x/\-]/,endByOperators=/[+x/\-]$/,endByMinus=/[+x/]\-$/,Calculator=function(_React$Component){function Calculator(t){var e;return _classCallCheck(this,Calculator),(e=_possibleConstructorReturn(this,_getPrototypeOf(Calculator).call(this,t))).state={currentValue:"0",allInput:"",formula:"0",evaluated:!1},e.handleNumbers=e.handleNumbers.bind(_assertThisInitialized(e)),e.handleDecimal=e.handleDecimal.bind(_assertThisInitialized(e)),e.handleOperators=e.handleOperators.bind(_assertThisInitialized(e)),e.handleEquals=e.handleEquals.bind(_assertThisInitialized(e)),e.handleInit=e.handleInit.bind(_assertThisInitialized(e)),e.handleDel=e.handleDel.bind(_assertThisInitialized(e)),e}return _inherits(Calculator,_React$Component),_createClass(Calculator,[{key:"handleNumbers",value:function(t){this.state.evaluated?this.setState({currentValue:t.target.value,allInput:"0"!==t.target.value?t.target.value:"",evaluated:!1}):this.setState({currentValue:isOperators.test(this.state.currentValue)||"0"===this.state.currentValue?t.target.value:this.state.currentValue+t.target.value,allInput:"0"===this.state.currentValue&&"0"===t.target.value?this.state.allInput:/([^.0-9]0)$/.test(this.state.allInput)?this.state.allInput.slice(0,-1)+t.target.value:this.state.allInput+t.target.value})}},{key:"handleDecimal",value:function(){this.state.evaluated?this.setState({currentValue:"0.",allInput:"0.",evaluated:!1}):endByOperators.test(this.state.allInput)||"0"===this.state.currentValue&&""===this.state.allInput?this.setState({currentValue:"0.",allInput:this.state.allInput+"0."}):this.state.currentValue.includes(".")||/[^.0-9]?\d+\.\d*$/.test(this.state.allInput)?this.setState({currentValue:this.state.currentValue,allInput:this.state.allInput}):this.setState({currentValue:this.state.currentValue+".",allInput:this.state.allInput+"."})}},{key:"handleOperators",value:function(t){this.setState({currentValue:t.target.value,evaluated:!1}),this.state.evaluated?this.setState({allInput:this.state.formula+t.target.value}):endByOperators.test(this.state.allInput)?endByMinus.test(this.state.allInput)?"-"!==t.target.value&&this.setState({allInput:this.state.formula+t.target.value}):this.setState({allInput:endByMinus.test(this.state.allInput+t.target.value)?this.state.allInput+t.target.value:this.state.formula+t.target.value}):this.setState({allInput:this.state.allInput+t.target.value,formula:this.state.allInput})}},{key:"handleEquals",value:function handleEquals(){for(;endByOperators.test(this.state.allInput);)this.state.allInput=this.state.allInput.slice(0,-1);this.state.allInput=this.state.allInput.replace(/x/g,"*");var result=Math.round(1e14*eval(this.state.allInput))/1e14;this.setState({currentValue:result.toString(),allInput:this.state.allInput.replace(/\*/g,"x")+"="+result,formula:result,evaluated:!0})}},{key:"handleInit",value:function(){this.setState({currentValue:"0",allInput:"",formula:"",evaluated:!1})}},{key:"handleDel",value:function(){this.state.evaluated?this.setState({currentValue:this.state.currentValue,allInput:this.state.allInput}):1===this.state.allInput.length||""===this.state.allInput?this.setState({currentValue:"0",allInput:"",formula:"0",evaluated:!1}):this.setState({currentValue:endByOperators.test(this.state.allInput.slice(0,-1))?this.state.allInput.slice(0,-1).match(/.$/):this.state.allInput.slice(0,-1).match(/[.0-9]+$/),allInput:this.state.allInput.slice(0,-1)})}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"calculator"},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"equationScreen"},this.state.allInput),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:"display",className:"calScreen"},this.state.currentValue),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_button_jsx__WEBPACK_IMPORTED_MODULE_1__.a,{numbers:this.handleNumbers,decimal:this.handleDecimal,operators:this.handleOperators,equals:this.handleEquals,init:this.handleInit,del:this.handleDel})),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer",null,"Code by ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://github.com/Leonidas-I",target:"_blank"},"Leonidas-I")," aka Tri Phan"))}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);__webpack_exports__.a=Calculator},function(t,e,n){"use strict";var a=n(0),r=n.n(a);function l(t){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function u(t,e){return!e||"object"!==l(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),u(this,i(e).apply(this,arguments))}var n,a,l;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),n=e,(a=[{key:"render",value:function(){var t={backgroundColor:"grey"};return r.a.createElement("div",null,r.a.createElement("button",{id:"clear",value:"AC",onClick:this.props.init,style:{backgroundColor:"lime"}},"AC"),r.a.createElement("button",{id:"delete",value:"Del",onClick:this.props.del,style:{backgroundColor:"tan",height:"75px",width:"150px"}},"←"),r.a.createElement("button",{id:"divide",value:"/",onClick:this.props.operators,style:t},"/"),r.a.createElement("button",{id:"seven",value:"7",onClick:this.props.numbers},"7"),r.a.createElement("button",{id:"eight",value:"8",onClick:this.props.numbers},"8"),r.a.createElement("button",{id:"nine",value:"9",onClick:this.props.numbers},"9"),r.a.createElement("button",{id:"multiply",value:"x",onClick:this.props.operators,style:t},"x"),r.a.createElement("button",{id:"four",value:"4",onClick:this.props.numbers},"4"),r.a.createElement("button",{id:"five",value:"5",onClick:this.props.numbers},"5"),r.a.createElement("button",{id:"six",value:"6",onClick:this.props.numbers},"6"),r.a.createElement("button",{id:"subtract",value:"-",onClick:this.props.operators,style:t},"-"),r.a.createElement("button",{id:"one",value:"1",onClick:this.props.numbers},"1"),r.a.createElement("button",{id:"two",value:"2",onClick:this.props.numbers},"2"),r.a.createElement("button",{id:"three",value:"3",onClick:this.props.numbers},"3"),r.a.createElement("button",{id:"add",value:"+",onClick:this.props.operators,style:t},"+"),r.a.createElement("button",{id:"zero",value:"0",onClick:this.props.numbers,style:{backgroundColor:"pink",height:"75px",width:"150px"}},"0"),r.a.createElement("button",{id:"decimal",value:".",onClick:this.props.decimal},"."),r.a.createElement("button",{id:"equals",value:"=",onClick:this.props.equals,style:{backgroundColor:"royalblue"}},"="))}}])&&o(n.prototype,a),l&&o(n,l),e}(r.a.Component);e.a=c},function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(2),o=n.n(l),u=(n(10),n(3));o.a.render(r.a.createElement(u.a,null),document.getElementById("project"))},,,function(t,e,n){"use strict";t.exports=n(9)},function(t,e,n){"use strict";
/** @license React v0.17.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a,r,l,o,u;if(Object.defineProperty(e,"__esModule",{value:!0}),"undefined"==typeof window||"function"!=typeof MessageChannel){var i=null,s=null,c=function(){if(null!==i)try{var t=e.unstable_now();i(!0,t),i=null}catch(t){throw setTimeout(c,0),t}},p=Date.now();e.unstable_now=function(){return Date.now()-p},a=function(t){null!==i?setTimeout(a,0,t):(i=t,setTimeout(c,0))},r=function(t,e){s=setTimeout(t,e)},l=function(){clearTimeout(s)},o=function(){return!1},u=e.unstable_forceFrameRate=function(){}}else{var f=window.performance,_=window.Date,h=window.setTimeout,d=window.clearTimeout,b=window.requestAnimationFrame,y=window.cancelAnimationFrame;if("undefined"!=typeof console&&("function"!=typeof b&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")),"object"==typeof f&&"function"==typeof f.now)e.unstable_now=function(){return f.now()};else{var m=_.now();e.unstable_now=function(){return _.now()-m}}var v=!1,O=null,w=-1,I=5,g=0;o=function(){return e.unstable_now()>=g},u=function(){},e.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):I=0<t?Math.floor(1e3/t):33.33};var E=new MessageChannel,C=E.port2;E.port1.onmessage=function(){if(null!==O){var t=e.unstable_now();g=t+I;try{O(!0,t)?C.postMessage(null):(v=!1,O=null)}catch(t){throw C.postMessage(null),t}}else v=!1},a=function(t){O=t,v||(v=!0,C.postMessage(null))},r=function(t,n){w=h((function(){t(e.unstable_now())}),n)},l=function(){d(w),w=-1}}function k(t,e){var n=t.length;t.push(e);t:for(;;){var a=Math.floor((n-1)/2),r=t[a];if(!(void 0!==r&&0<j(r,e)))break t;t[a]=e,t[n]=r,n=a}}function P(t){return void 0===(t=t[0])?null:t}function T(t){var e=t[0];if(void 0!==e){var n=t.pop();if(n!==e){t[0]=n;t:for(var a=0,r=t.length;a<r;){var l=2*(a+1)-1,o=t[l],u=l+1,i=t[u];if(void 0!==o&&0>j(o,n))void 0!==i&&0>j(i,o)?(t[a]=i,t[u]=n,a=u):(t[a]=o,t[l]=n,a=l);else{if(!(void 0!==i&&0>j(i,n)))break t;t[a]=i,t[u]=n,a=u}}}return e}return null}function j(t,e){var n=t.sortIndex-e.sortIndex;return 0!==n?n:t.id-e.id}var M=[],x=[],S=1,D=null,B=3,V=!1,R=!1,A=!1;function L(t){for(var e=P(x);null!==e;){if(null===e.callback)T(x);else{if(!(e.startTime<=t))break;T(x),e.sortIndex=e.expirationTime,k(M,e)}e=P(x)}}function q(t){if(A=!1,L(t),!R)if(null!==P(M))R=!0,a(U);else{var e=P(x);null!==e&&r(q,e.startTime-t)}}function U(t,n){R=!1,A&&(A=!1,l()),V=!0;var a=B;try{for(L(n),D=P(M);null!==D&&(!(D.expirationTime>n)||t&&!o());){var u=D.callback;if(null!==u){D.callback=null,B=D.priorityLevel;var i=u(D.expirationTime<=n);n=e.unstable_now(),"function"==typeof i?D.callback=i:D===P(M)&&T(M),L(n)}else T(M);D=P(M)}if(null!==D)var s=!0;else{var c=P(x);null!==c&&r(q,c.startTime-n),s=!1}return s}finally{D=null,B=a,V=!1}}function W(t){switch(t){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var K=u;e.unstable_ImmediatePriority=1,e.unstable_UserBlockingPriority=2,e.unstable_NormalPriority=3,e.unstable_IdlePriority=5,e.unstable_LowPriority=4,e.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=B;B=t;try{return e()}finally{B=n}},e.unstable_next=function(t){switch(B){case 1:case 2:case 3:var e=3;break;default:e=B}var n=B;B=e;try{return t()}finally{B=n}},e.unstable_scheduleCallback=function(t,n,o){var u=e.unstable_now();if("object"==typeof o&&null!==o){var i=o.delay;i="number"==typeof i&&0<i?u+i:u,o="number"==typeof o.timeout?o.timeout:W(t)}else o=W(t),i=u;return t={id:S++,callback:n,priorityLevel:t,startTime:i,expirationTime:o=i+o,sortIndex:-1},i>u?(t.sortIndex=i,k(x,t),null===P(M)&&t===P(x)&&(A?l():A=!0,r(q,i-u))):(t.sortIndex=o,k(M,t),R||V||(R=!0,a(U))),t},e.unstable_cancelCallback=function(t){t.callback=null},e.unstable_wrapCallback=function(t){var e=B;return function(){var n=B;B=e;try{return t.apply(this,arguments)}finally{B=n}}},e.unstable_getCurrentPriorityLevel=function(){return B},e.unstable_shouldYield=function(){var t=e.unstable_now();L(t);var n=P(M);return n!==D&&null!==D&&null!==n&&null!==n.callback&&n.startTime<=t&&n.expirationTime<D.expirationTime||o()},e.unstable_requestPaint=K,e.unstable_continueExecution=function(){R||V||(R=!0,a(U))},e.unstable_pauseExecution=function(){},e.unstable_getFirstCallbackNode=function(){return P(M)},e.unstable_Profiling=null},function(t,e,n){}]);