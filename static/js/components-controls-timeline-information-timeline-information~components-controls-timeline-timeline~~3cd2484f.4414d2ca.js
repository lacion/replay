(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./src/replay/components/common.js":function(e,n,t){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.d(n,"a",function(){return r}),t.d(n,"k",function(){return o}),t.d(n,"g",function(){return l}),t.d(n,"d",function(){return u}),t.d(n,"f",function(){return s}),t.d(n,"h",function(){return d}),t.d(n,"i",function(){return m}),t.d(n,"j",function(){return f}),t.d(n,"c",function(){return v}),t.d(n,"b",function(){return g}),t.d(n,"e",function(){return y});var r="replay-";function o(e){for(var n=null==e?"":e,t=[],a=0;a<(arguments.length<=1?0:arguments.length-1);a++)(a+1<1||arguments.length<=a+1?void 0:arguments[a+1])&&t.push(n+(a+1<1||arguments.length<=a+1?void 0:arguments[a+1]));return t.join(" ")}var i=function(e){return e};function l(e){var n=e.classes,t=e.selectClasses,r=e.classNames,l=e.classNamePrefix;if(n&&t){var u=t(n);return Array.isArray(u)?u.filter(i).join(" "):u}if(r)return o.apply(void 0,[l].concat(a(r)))}function u(e,n){var t,a=(n||e.currentTarget).getBoundingClientRect();return t=e.touches&&e.touches.length>0?e.touches[0]:e.changedTouches&&e.changedTouches.length>0?e.changedTouches[0]:e,{x:Math.max(0,Math.min(t.pageX-a.left,a.width)),y:Math.max(0,Math.min(t.pageY-a.top,a.height)),width:a.width,height:a.height}}function s(e){return function(n){e.indexOf(n.key)>=0&&(n.preventDefault(),n.stopPropagation())}}var d=function(e,n){return e!==n&&(!(e instanceof Date&&n instanceof Date&&e.getTime()===n.getTime())&&!(Number.isNaN(e)&&Number.isNaN(n)))},c=function(e){return null!=e&&e.constructor==={}.constructor},m=function(e,n){if(e===n)return!0;if(c(e)&&c(n)){var t=Object.keys(e),a=Object.keys(n);return t.length===a.length&&(!(t.filter(function(t){return d(e[t],n[t])}).length>0)&&0===a.filter(function(t){return d(n[t],e[t])}).length)}if(Array.isArray(e)&&Array.isArray(n)&&e.length===n.length){for(var r=e.length;r--;)if(e[r]!==n[r])return!1;return!0}return!1};function p(e){if(null==e)return{};var n={},t=e;return Object.keys(e).forEach(function(e){c(t[e])?n[e]=p(t[e]):n[e]=t[e]}),n}function f(e,n){var t=p(e);if(n){var a=n;Object.getOwnPropertyNames(a).forEach(function(e){c(a[e])?c(t[e])?t[e]=f(t[e],a[e]):t[e]=p(a[e]):t[e]=a[e]})}return t}var h=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return t&&0===e?"":e<10&&a?"0".concat(e).concat(n):"".concat(e).concat(n)},v=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",t=Math.round(e),a="";"number"!==typeof e||isNaN(e)||e===1/0?t=0:t<0&&(t=-t,a=n);var r=Math.floor(t/86400),o=86400*r,i=Math.floor((t-o)/3600),l=o+3600*i,u=Math.floor((t-l)/60),s=t-l-60*u;return a+h(r,".",!0,!1)+h(i,":",0===r)+h(u,":",!1)+h(s)},g=function(e){var n=e instanceof Date&&!isNaN(e.getTime()),t=0,a=0,r=0;return n&&null!=e&&(t=n?e.getHours():0,a=n?e.getMinutes():0,r=n?e.getSeconds():0),h(t,":",!1)+h(a,":",!1)+h(r)},y=function(e,n){var t=null;return{start:function(){t||(t=setInterval(e,1e3*n))},stop:function(){t&&(clearInterval(t),t=null)}}}},"./src/replay/components/generic/Slider/Slider.js":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),r=t("./src/replay/components/common.js");function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c="0%",m=.025,p=function(e){return e.slider},f=function(e){return e.sliderDragging||e.slider},h=function(e){return e.sliderTrack},v=function(e){return e.sliderHandle};function g(e,n){var t=e/n;return n===1/0||e===1/0||0===n||isNaN(t)||0===t?c:"".concat((100*Math.min(1,t)).toFixed(3),"%")}var y=["Left","ArrowLeft","Down","ArrowDown"],b=["Right","ArrowRight","Up","ArrowUp"],E=y.concat(b),w=function(e){function n(e){var t,a,i;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,i=l(n).call(this,e),t=!i||"object"!==o(i)&&"function"!==typeof i?s(a):i,d(s(s(t)),"renderedHandle",void 0),d(s(s(t)),"renderedTrack",void 0),d(s(s(t)),"isTouchSupported",void 0),d(s(s(t)),"updateValueFromCoordinates",function(e,n){if(t.renderedTrack){var a=Object(r.d)(e,t.renderedTrack);if(t.props.isVertical){var o=(a.height-a.y)/a.height;t.updateValue(o,n)}else{var i=a.x/a.width;t.updateValue(i,n)}}}),d(s(s(t)),"updateValue",function(e,n){var a=n.isDragging,r=n.isEnded,o=n.isPreviewing,i=e*t.props.maxValue;o?t.setState({previewValue:i}):(t.state.isDragging&&(t.setState({dragValue:i,previewValue:i}),t.props.onDrag&&t.props.onDrag(i)),t.props.onValueChange&&(r||!t.state.isDragging&&!a)&&t.props.onValueChange(i))}),d(s(s(t)),"handleHandleOrTrackClick",function(e){t.updateValueFromCoordinates(e,{})}),d(s(s(t)),"handleHandleStartDrag",function(e){"touchstart"!==e.type&&e.stopPropagation(),t.state.isDragging||(setTimeout(function(){return t.setState({wasClicked:!1})},1e3),t.setState({isDragging:!0,wasClicked:!0}),t.updateValueFromCoordinates(e,{isDragging:!0}),t.isTouchSupported?(document.addEventListener("touchmove",t.handleHandleDrag),document.addEventListener("touchend",t.handleHandleEndDrag),document.addEventListener("touchcancel",t.handleHandleEndDrag)):(document.addEventListener("mousemove",t.handleHandleDrag),document.addEventListener("mouseup",t.handleHandleEndDrag),document.addEventListener("mouseleave",t.handleHandleEndDrag)))}),d(s(s(t)),"handleHandleDrag",function(e){t.state.isDragging?t.updateValueFromCoordinates(e,{}):t.updateValueFromCoordinates(e,{isPreviewing:!0})}),d(s(s(t)),"handleHandleEndDrag",function(e){t.state.isDragging&&t.updateValueFromCoordinates(e,{isDragging:!0,isEnded:!0}),t.isTouchSupported?(document.removeEventListener("touchmove",t.handleHandleDrag),document.removeEventListener("touchend",t.handleHandleEndDrag),document.removeEventListener("touchcancel",t.handleHandleEndDrag)):(document.removeEventListener("mousemove",t.handleHandleDrag),document.removeEventListener("mouseup",t.handleHandleEndDrag),document.removeEventListener("mouseleave",t.handleHandleEndDrag)),t.setState({isDragging:!1})}),d(s(s(t)),"handleMouseEnter",function(){t.setState({isPointerInside:!0})}),d(s(s(t)),"handleMouseLeave",function(){t.setState({isPointerInside:!1})}),d(s(s(t)),"handleKeyDown",Object(r.f)(E)),d(s(s(t)),"handleKeyUp",function(e){if(!isNaN(t.props.value)&&!isNaN(t.props.maxValue)){var n=t.props.value/t.props.maxValue;y.indexOf(e.key)>=0&&t.updateValue(Math.max(0,n-m),{}),b.indexOf(e.key)>=0&&t.updateValue(Math.min(1,n+m),{})}}),d(s(s(t)),"setRenderedHandle",function(e){t.renderedHandle=e}),d(s(s(t)),"setRenderedTrack",function(e){t.renderedTrack=e}),t.isTouchSupported="ontouchend"in window,t.state={},t}var t,c,w;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,a["Component"]),t=n,(c=[{key:"render",value:function(){var e=this.props,n=e.children,t=e.handleContent,o=e.trackContent,i=e.classNamePrefix,l=e.className,u=e.classes,s=e.handleClassName,c=e.trackClassName,m=e.label,y=e.isVertical,b=e.value,E=e.maxValue,w=e.isUpdateBlocked,D=this.state,T=D.dragValue,M=D.previewValue,k=D.isDragging,H=D.isPointerInside,S=D.wasClicked,N=(k||w)&&null!=T?T:b,C=k?f:p,V=Object(r.g)({classes:u,selectClasses:C,classNamePrefix:i,classNames:["slider",l,k?"dragging":null,S?"clicked":null]}),L=Object(r.g)({classes:u,selectClasses:v,classNamePrefix:i,classNames:["slider-handle",s]}),j=Object(r.g)({classes:u,selectClasses:h,classNamePrefix:i,classNames:["slider-track",c]});return a.createElement("div",{onClick:this.handleHandleOrTrackClick,onMouseDown:this.handleHandleStartDrag,onTouchStart:this.handleHandleStartDrag,onTouchMove:this.handleHandleDrag,onTouchEnd:this.handleHandleEndDrag,onMouseUp:this.handleHandleEndDrag,onMouseMove:this.handleHandleDrag,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,title:m,role:"slider","aria-valuemin":0,"aria-valuemax":E,"aria-valuenow":b,className:V,tabIndex:0},a.createElement("div",{className:j,ref:this.setRenderedTrack},o),a.Children.map(n,function(e){return a.cloneElement(e,{previewValue:M,isDragging:k,isPointerInside:H})}),a.createElement("div",{className:L,style:d({},y?"bottom":"left",g(N,E)),role:"button",tabIndex:-1,ref:this.setRenderedHandle},t))}}])&&i(t.prototype,c),w&&i(t,w),n}();d(w,"defaultProps",{value:0,maxValue:1}),n.a=w,w.__docgenInfo={description:"",methods:[{name:"updateValueFromCoordinates",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}},{name:"conditions",type:{name:"signature",type:"object",raw:"{\n  isDragging?: boolean,\n  isEnded?: boolean,\n  isPreviewing?: boolean\n}",signature:{properties:[{key:"isDragging",value:{name:"boolean",required:!1}},{key:"isEnded",value:{name:"boolean",required:!1}},{key:"isPreviewing",value:{name:"boolean",required:!1}}]},alias:"UpdateConditions"}}],returns:null},{name:"updateValue",docblock:null,modifiers:[],params:[{name:"relativeValue",type:{name:"number"}},{name:"{ isDragging, isEnded, isPreviewing }: UpdateConditions",type:{name:"signature",type:"object",raw:"{\n  isDragging?: boolean,\n  isEnded?: boolean,\n  isPreviewing?: boolean\n}",signature:{properties:[{key:"isDragging",value:{name:"boolean",required:!1}},{key:"isEnded",value:{name:"boolean",required:!1}},{key:"isPreviewing",value:{name:"boolean",required:!1}}]},alias:"UpdateConditions"}}],returns:null},{name:"handleHandleOrTrackClick",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>",alias:"SyntheticMouseEvent"}}],returns:null},{name:"handleHandleStartDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>",alias:"SyntheticMouseEvent"}}],returns:null},{name:"handleHandleDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}}],returns:null},{name:"handleHandleEndDrag",docblock:null,modifiers:[],params:[{name:"evt",type:{name:"union",raw:"SyntheticMouseEvent<HTMLDivElement> | MouseEvent | TouchEvent",elements:[{name:"SyntheticMouseEvent",elements:[{name:"HTMLDivElement"}],raw:"SyntheticMouseEvent<HTMLDivElement>"},{name:"MouseEvent"},{name:"TouchEvent"}]}}],returns:null},{name:"handleMouseEnter",docblock:null,modifiers:[],params:[],returns:null},{name:"handleMouseLeave",docblock:null,modifiers:[],params:[],returns:null},{name:"handleKeyUp",docblock:null,modifiers:[],params:[{name:"keyboardEvent",type:{name:"KeyboardEvent",alias:"KeyboardEvent"}}],returns:null},{name:"setRenderedHandle",docblock:null,modifiers:[],params:[{name:"handle",type:{name:"HTMLDivElement",nullable:!0}}],returns:null},{name:"setRenderedTrack",docblock:null,modifiers:[],params:[{name:"track",type:{name:"HTMLDivElement",nullable:!0}}],returns:null}],displayName:"Slider",props:{value:{defaultValue:{value:"0",computed:!1},required:!1,flowType:{name:"number"},description:""},maxValue:{defaultValue:{value:"1",computed:!1},required:!1,flowType:{name:"number"},description:""},isUpdateBlocked:{required:!1,flowType:{name:"boolean"},description:""},isVertical:{required:!1,flowType:{name:"boolean"},description:""},children:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},handleContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},handleClassName:{required:!1,flowType:{name:"string"},description:""},trackContent:{required:!1,flowType:{name:"ReactNode",raw:"React.Node"},description:""},trackClassName:{required:!1,flowType:{name:"string"},description:""},label:{required:!1,flowType:{name:"string"},description:""},onValueChange:{required:!1,flowType:{name:"signature",type:"function",raw:"number => void",signature:{arguments:[{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""},onDrag:{required:!1,flowType:{name:"signature",type:"function",raw:"number => void",signature:{arguments:[{name:"",type:{name:"number"}}],return:{name:"void"}}},description:""}}}},"./src/replay/replay-default.css":function(e,n,t){}}]);
//# sourceMappingURL=components-controls-timeline-information-timeline-information~components-controls-timeline-timeline~~3cd2484f.f6ff8b5eedfe2cfc187c.js.map