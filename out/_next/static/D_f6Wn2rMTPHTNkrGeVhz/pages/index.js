(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{RNiq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("YFqc"),i=n.n(o),s=n("r+l/"),l=(n("lJ4s"),a.a.createElement),c=function(){return l("nav",{className:"navbar navbar-expand-sm"},l(i.a,{href:"/"},l("a",{className:"navbar-brand"},l("img",{src:"/images/chat-logo1.png"}))),l("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar","aria-controls":"navbar","aria-expanded":"false","aria-label":"Toggle navigation"},l("span",null,l("i",{className:"fa fa-bars","aria-hidden":"true"}))),l("div",{className:"collapse navbar-collapse",id:"navbar"},l("div",{className:"navbar-nav ml-auto"},l("li",{className:"nav-item"},l("a",{className:"nav-link",target:"_blank",rel:"noopener noreferrer",href:s.SOCAIL_LINKS.github},"Github")),l("li",{className:"nav-item"},l("a",{className:"nav-link",target:"_blank",rel:"noopener noreferrer",href:s.SOCAIL_LINKS.linkedin},"Linkedin")))))},u=a.a.createElement,f=function(e){return u(a.a.Fragment,null,u(c,null),u("main",null,e.children))},p=(n("URCO"),a.a.createElement);var h=function(){return p(a.a.Fragment,null,p("section",{className:"banner"},p("div",{className:"row justify-content-around align-items-center m-0"},p("div",{className:"col-12 col-sm-6"},p("div",{className:"row flex-column justify-content-start align-items-start ml-5"},p("h2",{className:"mb-3"},s.DESCRIPTION),p(i.a,{href:"/home"},p("a",{className:"btn btn-primary"},"Start Chatting Now")))),p("div",{className:"col-12 col-sm-6"},p("div",{className:"row justify-content-center align-items-center"},p("img",{src:"/images/chat.png",alt:"img"}))))))},v=a.a.createElement;t.default=function(){return v(f,null,v(h,null))}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("i2R6"),o=n("48fX"),i=n("tCBg"),s=n("T0f4");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var a=s(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}var c=n("AroE"),u=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=u(n("q1tI")),h=n("QmWs"),v=n("g/15"),m=c(n("nOHt")),d=n("elyg");function g(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var N=new Map,y=window.IntersectionObserver,b={};function w(){return f||(y?f=new y((function(e){e.forEach((function(e){if(N.has(e.target)){var t=N.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),N.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var E=function(e){o(n,e);var t=l(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:(0,d.addBasePath)(g(e)),as:t?(0,d.addBasePath)(g(t)):t}})),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=a.formatUrls(a.props.href,a.props.as),i=o.href,s=o.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var l=window.location.pathname;i=(0,h.resolve)(l,i),s=s?(0,h.resolve)(l,s):i,e.preventDefault();var c=a.props.scroll;null==c&&(c=s.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](i,s,{shallow:a.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,h.resolve)(e,n);return[a,r?(0,h.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&y&&e&&e.tagName&&(this.cleanUpListeners(),b[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),N.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}N.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();m.default.prefetch(t[0],t[1],e).catch((function(e){0})),b[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),n}(p.Component);t.default=E},"r+l/":function(e,t){e.exports={APP_NAME:"Anomly",DESCRIPTION:"Now chat anonymously with anyone",SOCAIL_LINKS:{github:"https://github.com/msk4862/Anomly",linkedin:"https://www.linkedin.com/in/msk4862/"},SOCKET_EVENTS:{JOIN_ROOM:"joinRoom",CHAT_BOT:"chatbot",CHAT_MESSAGE:"chatMessage",ROOM_USERS:"roomUsers",DISCONNECT:"disconnect"},MIN_USERNAME_LENGTH:6}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,2,1,3]]]);