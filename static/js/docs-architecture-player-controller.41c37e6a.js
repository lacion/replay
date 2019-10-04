(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"./src/replay/docs/architecture/player-controller.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=p(this,s(t).call(this,e))).layout=null,n}var n,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components;i(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"player-controller"}},"Player controller"),o.a.createElement(a.MDXTag,{name:"p",components:t},"This is one specific component, ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<PlayerController/>"),", inserted once near the root of the React player element tree in the Replay player. The same is recommended for custom players. It takes a video streamer as a child component, and excepts a render method prop taking care of the player UI. "),o.a.createElement(a.MDXTag,{name:"p",components:t},"The video streamer child is targeted for observation and manipulation by the player controller. It uses the controller React context for exposing the video streamer state and possible operations to the React element tree rendered in the render prop."),o.a.createElement(a.MDXTag,{name:"p",components:t},o.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"/architecture/background#the-player-controller-and-its-nice-react-fit"}},"More about the considerations behind, and the concerns covered by the player controller"),"."))}}])&&l(n.prototype,r),c&&l(n,c),t}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-architecture-player-controller.f6ff8b5eedfe2cfc187c.js.map