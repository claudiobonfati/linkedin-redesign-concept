(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"1OyB":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},"1TsT":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=!("undefined"===typeof window||!window.document||!window.document.createElement);var r=void 0;function i(){return void 0===r&&(r=function(){if(!o)return!1;if(!window.addEventListener||!window.removeEventListener||!Object.defineProperty)return!1;var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,t),window.removeEventListener("testPassiveEventSupport",n,t)}catch(r){}return e}()),r}function a(e){e.handlers===e.nextHandlers&&(e.nextHandlers=e.handlers.slice())}function s(e){this.target=e,this.events={}}s.prototype.getEventHandlers=function(e,t){var n,o=String(e)+" "+String((n=t)?!0===n?100:(n.capture<<0)+(n.passive<<1)+(n.once<<2):0);return this.events[o]||(this.events[o]={handlers:[],handleEvent:void 0},this.events[o].nextHandlers=this.events[o].handlers),this.events[o]},s.prototype.handleEvent=function(e,t,n){var o=this.getEventHandlers(e,t);o.handlers=o.nextHandlers,o.handlers.forEach((function(e){e&&e(n)}))},s.prototype.add=function(e,t,n){var o=this,r=this.getEventHandlers(e,n);a(r),0===r.nextHandlers.length&&(r.handleEvent=this.handleEvent.bind(this,e,n),this.target.addEventListener(e,r.handleEvent,n)),r.nextHandlers.push(t);var i=!0;return function(){if(i){i=!1,a(r);var s=r.nextHandlers.indexOf(t);r.nextHandlers.splice(s,1),0===r.nextHandlers.length&&(o.target&&o.target.removeEventListener(e,r.handleEvent,n),r.handleEvent=void 0)}}};var c="__consolidated_events_handlers__";function l(e,t,n,o){e[c]||(e[c]=new s(e));var r=function(e){if(e)return i()?e:!!e.capture}(o);return e[c].add(t,n,r)}},JX7q:function(e,t,n){"use strict";function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return o}))},Ji7U:function(e,t,n){"use strict";function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},KoaD:function(e,t,n){e.exports={wrapper:"ProfileOverview_wrapper__2G9Ev",topInfoWrapper:"ProfileOverview_topInfoWrapper__1oH4G",name:"ProfileOverview_name__1VWxx",position:"ProfileOverview_position__1ywFG",fullImage:"ProfileOverview_fullImage__336_f",photoWrapper:"ProfileOverview_photoWrapper__2RKKB",info:"ProfileOverview_info__3tQ6t",proTag:"ProfileOverview_proTag__1-EKR",infoWrapper:"ProfileOverview_infoWrapper__2sRgC",value:"ProfileOverview_value__24irL",title:"ProfileOverview_title__2d_V1",fullWidth:"ProfileOverview_fullWidth__3jiWy",infoLeft:"ProfileOverview_infoLeft__1wxiQ",infoRight:"ProfileOverview_infoRight__6mDuR",footerAction:"ProfileOverview_footerAction__KO6bK",socialNetworks:"ProfileOverview_socialNetworks__1cCzX",item:"ProfileOverview_item__2Lspy"}},XWzK:function(e,t,n){"use strict";var o=n("nKUr"),r=(n("q1tI"),n("YFqc")),i=n.n(r),a=n("r7OR"),s=n("e6B8"),c=n.n(s),l=n("KoaD"),f=n.n(l),u=n("1cB3"),p=function(e){return Object(o.jsxs)("div",{className:f.a.wrapper,children:[Object(o.jsxs)("div",{className:"\n        ".concat(f.a.topInfoWrapper,"\n        ").concat(e.pro?f.a.fullImage:"","\n        ").concat(e.pro?f.a.proTag:"","\n      "),children:[Object(o.jsx)("div",{className:f.a.photoWrapper,children:Object(o.jsx)(a.a,{src:e.photo,alt:"Profile"})}),Object(o.jsxs)("div",{className:f.a.info,children:[Object(o.jsx)("div",{className:f.a.name,children:e.name}),Object(o.jsx)("div",{className:f.a.position,children:e.position})]})]}),Object(o.jsxs)("div",{className:f.a.infoWrapper,children:[Object(o.jsxs)("div",{className:"\n          ".concat(e.views?"":f.a.fullWidth," \n          ").concat(f.a.infoLeft,"\n        "),children:[Object(o.jsx)("div",{className:f.a.value,children:Object(u.a)(e.connections)}),Object(o.jsx)("span",{className:f.a.title,children:e.views?"Connections":"Followers"})]}),e.views&&Object(o.jsxs)("div",{className:f.a.infoRight,children:[Object(o.jsx)("div",{className:f.a.value,children:Object(u.a)(e.views)}),Object(o.jsx)("span",{className:f.a.title,children:"Views"})]})]}),e.actionMyProfile&&Object(o.jsx)(i.a,{href:"/me/details",scroll:!1,children:Object(o.jsx)("a",{className:f.a.footerAction,title:"View my profile",children:"View my profile"})}),!e.actionMyProfile&&Object(o.jsxs)("div",{className:f.a.socialNetworks,children:[e.email&&Object(o.jsxs)("a",{title:"Send email",href:"mailto:".concat(e.email),className:f.a.item,children:[Object(o.jsx)(c.a,{icon:"mail",size:"16",strokeWidth:"1",fill:"black"}),e.email]}),e.twitter&&Object(o.jsxs)("a",{title:"Open Twitter profile",href:"https://twitter.com",target:"_blank",rel:"noreferrer",className:f.a.item,children:[Object(o.jsx)(c.a,{icon:"twitter",size:"16",strokeWidth:"1",fill:"black"}),e.twitter]}),e.skype&&Object(o.jsxs)("a",{title:"Open Facebook profile",href:"https://facebook.com",target:"_blank",rel:"noreferrer",className:f.a.item,children:[Object(o.jsx)(c.a,{icon:"facebook",size:"16",strokeWidth:"1",fill:"black"}),e.skype]})]})]})};p.defaultProps={pro:!1,actionMyProfile:!1,views:null,email:null,twitter:null,skype:null},t.a=p},foSv:function(e,t,n){"use strict";function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return o}))},md7G:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return i}));var r=n("JX7q");function i(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?Object(r.a)(e):t}},uuth:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return j}));var o=n("1TsT"),r=(n("17x9"),n("q1tI")),i=n.n(r),a=n("TOwV");function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return f(this,n)}}function p(e,t){var n,o=(n=e,!isNaN(parseFloat(n))&&isFinite(n)?parseFloat(n):"px"===n.slice(-2)?parseFloat(n.slice(0,-2)):void 0);if("number"===typeof o)return o;var r=function(e){if("%"===e.slice(-1))return parseFloat(e.slice(0,-1))/100}(e);return"number"===typeof r?r*t:void 0}var v="above",d="inside",h="below",w="invisible";function b(e){return"string"===typeof e.type}var m;var y=[];function _(e){y.push(e),m||(m=setTimeout((function(){var e;for(m=null;e=y.shift();)e()}),0));var t=!0;return function(){if(t){t=!1;var n=y.indexOf(e);-1!==n&&(y.splice(n,1),!y.length&&m&&(clearTimeout(m),m=null))}}}var O={debug:!1,scrollableAncestor:void 0,children:void 0,topOffset:"0px",bottomOffset:"0px",horizontal:!1,onEnter:function(){},onLeave:function(){},onPositionChange:function(){},fireOnRapidScroll:!0},j=function(t){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(m,t);var n,r,c,f=u(m);function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=f.call(this,e)).refElement=function(e){t._ref=e},t}return n=m,(r=[{key:"componentDidMount",value:function(){var e=this;m.getWindow()&&(this.cancelOnNextTick=_((function(){e.cancelOnNextTick=null;var t=e.props,n=t.children;t.debug,function(e,t){if(e&&!b(e)&&!t)throw new Error("<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a DOM element (e.g. <div>) nor does it use the innerRef prop.\n\nSee https://goo.gl/LrBNgw for more info.")}(n,e._ref),e._handleScroll=e._handleScroll.bind(e),e.scrollableAncestor=e._findScrollableAncestor(),e.scrollEventListenerUnsubscribe=Object(o.a)(e.scrollableAncestor,"scroll",e._handleScroll,{passive:!0}),e.resizeEventListenerUnsubscribe=Object(o.a)(window,"resize",e._handleScroll,{passive:!0}),e._handleScroll(null)})))}},{key:"componentDidUpdate",value:function(){var e=this;m.getWindow()&&this.scrollableAncestor&&(this.cancelOnNextTick||(this.cancelOnNextTick=_((function(){e.cancelOnNextTick=null,e._handleScroll(null)}))))}},{key:"componentWillUnmount",value:function(){m.getWindow()&&(this.scrollEventListenerUnsubscribe&&this.scrollEventListenerUnsubscribe(),this.resizeEventListenerUnsubscribe&&this.resizeEventListenerUnsubscribe(),this.cancelOnNextTick&&this.cancelOnNextTick())}},{key:"_findScrollableAncestor",value:function(){var t=this.props,n=t.horizontal,o=t.scrollableAncestor;if(o)return function(t){return"window"===t?e.window:t}(o);for(var r=this._ref;r.parentNode;){if((r=r.parentNode)===document.body)return window;var i=window.getComputedStyle(r),a=(n?i.getPropertyValue("overflow-x"):i.getPropertyValue("overflow-y"))||i.getPropertyValue("overflow");if("auto"===a||"scroll"===a||"overlay"===a)return r}return window}},{key:"_handleScroll",value:function(e){if(this._ref){var t=this._getBounds(),n=function(e){return e.viewportBottom-e.viewportTop===0?w:e.viewportTop<=e.waypointTop&&e.waypointTop<=e.viewportBottom||e.viewportTop<=e.waypointBottom&&e.waypointBottom<=e.viewportBottom||e.waypointTop<=e.viewportTop&&e.viewportBottom<=e.waypointBottom?d:e.viewportBottom<e.waypointTop?h:e.waypointTop<e.viewportTop?v:w}(t),o=this._previousPosition,r=this.props,i=(r.debug,r.onPositionChange),a=r.onEnter,s=r.onLeave,c=r.fireOnRapidScroll;if(this._previousPosition=n,o!==n){var l={currentPosition:n,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom};i.call(this,l),n===d?a.call(this,l):o===d&&s.call(this,l),c&&(o===h&&n===v||o===v&&n===h)&&(a.call(this,{currentPosition:d,previousPosition:o,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}),s.call(this,{currentPosition:n,previousPosition:d,event:e,waypointTop:t.waypointTop,waypointBottom:t.waypointBottom,viewportTop:t.viewportTop,viewportBottom:t.viewportBottom}))}}}},{key:"_getBounds",value:function(){var e,t,n=this.props,o=n.horizontal,r=(n.debug,this._ref.getBoundingClientRect()),i=r.left,a=r.top,s=r.right,c=r.bottom,l=o?i:a,f=o?s:c;this.scrollableAncestor===window?(e=o?window.innerWidth:window.innerHeight,t=0):(e=o?this.scrollableAncestor.offsetWidth:this.scrollableAncestor.offsetHeight,t=o?this.scrollableAncestor.getBoundingClientRect().left:this.scrollableAncestor.getBoundingClientRect().top);var u=this.props,v=u.bottomOffset;return{waypointTop:l,waypointBottom:f,viewportTop:t+p(u.topOffset,e),viewportBottom:t+e-p(v,e)}}},{key:"render",value:function(){var e=this,t=this.props.children;return t?b(t)||Object(a.isForwardRef)(t)?i.a.cloneElement(t,{ref:function(n){e.refElement(n),t.ref&&("function"===typeof t.ref?t.ref(n):t.ref.current=n)}}):i.a.cloneElement(t,{innerRef:this.refElement}):i.a.createElement("span",{ref:this.refElement,style:{fontSize:0}})}}])&&s(n.prototype,r),c&&s(n,c),m}(i.a.PureComponent);j.above=v,j.below=h,j.inside=d,j.invisible=w,j.getWindow=function(){if("undefined"!==typeof window)return window},j.defaultProps=O,j.displayName="Waypoint"}).call(this,n("ntbh"))},vuIU:function(e,t,n){"use strict";function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function r(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}n.d(t,"a",(function(){return r}))}}]);