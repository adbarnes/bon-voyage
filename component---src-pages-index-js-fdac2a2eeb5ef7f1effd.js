(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/MJW":function(e,t,a){e.exports={divider:"contact-module--divider--6o0mo",container:"contact-module--container--1Q2Sx",contactContainer:"contact-module--contact-container--1SAXR",intro:"contact-module--intro--2lk7P",form:"contact-module--form--2rOJ-",section:"contact-module--section--XH_6H"}},"0L2s":function(e,t,a){e.exports={divider:"cards-module--divider--1t_ZR",container:"cards-module--container--2A2GK",cards:"cards-module--cards--1cNsC",card:"cards-module--card--3j0Sr",cardTag:"cards-module--card-tag--Yh9M1"}},"8+s/":function(e,t,a){"use strict";var n,r=a("q1tI"),i=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,a){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function u(){c=e(s.map((function(e){return e.props}))),d.canUseDOM?t(c):a&&(c=a(c))}var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.peek=function(){return c},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){s.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",l),d}}},EJhG:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjkiIGhlaWdodD0iMjciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjc0IDEuNDE1Yy41NTYtMS43MDQgMi45NjYtMS43MDQgMy41MiAwbDEuOTc5IDYuMDlhMS44NSAxLjg1IDAgMDAxLjc1NyAxLjI3N2g2LjQwNWMxLjc5MyAwIDIuNTM2IDIuMjk0IDEuMDg4IDMuMzQ4bC01LjE4IDMuNzYzYTEuODUgMS44NSAwIDAwLS42NzQgMi4wNjlsMS45OCA2LjA5Yy41NTUgMS43MDQtMS4zOTcgMy4xMjItMi44NSAyLjA2OGwtNS4xOC0zLjc2M2ExLjg1IDEuODUgMCAwMC0yLjE3MyAwbC01LjE4IDMuNzYzYy0xLjQ1IDEuMDU0LTMuNC0uMzY0LTIuODQ3LTIuMDY4bDEuOTgtNi4wOWExLjg1IDEuODUgMCAwMC0uNjc0LTIuMDY5bC01LjE3OC0zLjc2Qy4wNjQgMTEuMDc3LjgxIDguNzgyIDIuNjAxIDguNzgyaDYuNDAzYTEuODUgMS44NSAwIDAwMS43NTktMS4yNzZsMS45OC02LjA5LS4wMDItLjAwMnoiIGZpbGw9IiNmZmYiLz48L3N2Zz4="},"PW+i":function(e,t,a){e.exports={divider:"news-module--divider--2NCMX",right:"news-module--right--2jhFK",container:"news-module--container--12iia",newsContainer:"news-module--news-container--2Royh",newsItem:"news-module--news-item--3JoQb",imgWrapper:"news-module--img-wrapper--rBQrj",titleTag:"news-module--title-tag--3z-KV",dateTag:"news-module--date-tag--11qsk"}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return L}));var n=a("q1tI"),r=a.n(n),i=a("Bl7J"),o=a("0L2s"),l=a.n(o),c=a("9eSz"),s=a.n(c),u=a("Wbzz");function d(){var e=Object(u.c)("1089510704");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:l.a.container},r.a.createElement("h2",{"data-sal":"slide-left","data-sal-delay":"100","data-sal-easing":"ease"},"Destinations"),r.a.createElement("p",{"data-sal":"slide-left","data-sal-delay":"100","data-sal-easing":"ease"},"Our trips cater for all budgets. Select your destination below for more information and booking details."),r.a.createElement("div",{className:l.a.divider}),r.a.createElement("div",{className:l.a.cards},e.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement("div",{"data-sal":"slide-up","data-sal-delay":"100","data-sal-easing":"ease",className:l.a.card,key:t.id},r.a.createElement("div",{className:l.a.cardTag}," ",t.frontmatter.title),r.a.createElement(s.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid}))})))))}var m=a("/MJW"),f=a.n(m),p=a("1eu9"),h=a.n(p);var g=function(e){var t=Object(u.c)("2249540016");return r.a.createElement("div",{className:f.a.container},r.a.createElement("h2",{"data-sal":"slide-left","data-sal-delay":"100","data-sal-easing":"ease"},e.heading),r.a.createElement("p",{"data-sal":"slide-left","data-sal-delay":"100","data-sal-easing":"ease"},"Contact us below with any questions or queries you may have about Bon Voyage trips and expeditions."),r.a.createElement("div",{className:f.a.divider}),r.a.createElement("div",{className:f.a.contactContainer},r.a.createElement(h.a,{style:{backgroundSize:"cover"},className:f.a.intro,fluid:t.indexImage.childImageSharp.fluid},r.a.createElement("h3",null,"Have a question?"),r.a.createElement("p",null,"Vivamus tempor nunc vel nisi tristique, id ultrices massa dictum. Proin vel consequat metus. In hac habitasse platea dictumst. Fusce elementum convallis nisi, nec commodo nulla efficitur at morbi euismod diam vel."),r.a.createElement("p",null,"Tortor dignissim mollis. Integer iaculis, sem ac cursus congue, mi orci faucibus arcu, ut tristique ligula tortor sed nulla. Phasellus laoreet tempor justo id elementum. Suspendisse mattis, justo congue suscipit pharetra, felis nibh bibendum nibh, sit amet luctus metus nibh pharetra."),r.a.createElement("p",null,"Note: Vivamus tempor nunc vel nisi tristique, id ultrices massa dictum.")),r.a.createElement("div",{className:f.a.form},r.a.createElement("form",null,r.a.createElement("div",{className:f.a.section},r.a.createElement("label",{htmlFor:"fname"},"First name:"),r.a.createElement("input",{type:"text",id:"fname",placeholder:"John"})),r.a.createElement("div",{className:f.a.section},r.a.createElement("label",{htmlFor:"lname"},"Last name:"),r.a.createElement("input",{type:"text",id:"lname",placeholder:"Smith"})),r.a.createElement("div",{className:f.a.section},r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{id:"message",rows:"4",cols:"50"})),r.a.createElement("div",{className:f.a.section},r.a.createElement("input",{type:"submit",value:"SUBMIT"}))))))},y=a("PW+i"),v=a.n(y);function E(e){var t=Object(u.c)("3428046437");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:v.a.container},r.a.createElement("div",{className:v.a.right},r.a.createElement("h2",{"data-sal":"slide-right","data-sal-delay":"100","data-sal-easing":"ease"},e.heading),r.a.createElement("p",{"data-sal":"slide-right","data-sal-delay":"100","data-sal-easing":"ease"},"Regularly updated news, articles, guides and blogs about Bon Voyage and its services."),r.a.createElement("div",{className:v.a.divider})),r.a.createElement("div",{className:v.a.newsContainer},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.a.createElement("div",{"data-sal":"slide-up","data-sal-delay":"100","data-sal-easing":"ease",className:v.a.newsItem,key:t.id},r.a.createElement("div",{className:v.a.titleTag}," ",t.frontmatter.title),r.a.createElement("div",{className:v.a.dateTag},t.frontmatter.date),r.a.createElement("div",{className:v.a.imgWrapper},r.a.createElement(s.a,{fluid:t.frontmatter.featuredImage.childImageSharp.fluid})))})))))}var b=a("Vepd"),T=a.n(b),w=a("EJhG"),S=a.n(w),N=a("hJ3b"),C=a.n(N);function A(e){var t=Object(u.c)("340488590");return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.container},r.a.createElement("div",{className:C.a.right},r.a.createElement("h2",{"data-sal":"slide-right","data-sal-delay":"100","data-sal-easing":"ease"},"Testimonials"),r.a.createElement("p",{"data-sal":"slide-right","data-sal-delay":"100","data-sal-easing":"ease"},"See the amazing comments our customers have left about Bon Voyage Trips and its 5-star rated trips and expeditions."),r.a.createElement("div",{className:C.a.divider}))),r.a.createElement(h.a,{style:{backgroundSize:"cover"},className:C.a.headerContainer,fluid:t.indexImage.childImageSharp.fluid},r.a.createElement("div",{className:C.a.testimonialsContainer},r.a.createElement("img",{className:C.a.topCurve,src:T.a,alt:"Top Curve"}),r.a.createElement("div",{className:C.a.content},r.a.createElement("div",{"data-sal":"slide-right","data-sal-delay":"100","data-sal-easing":"ease",className:C.a.contentBox},r.a.createElement(s.a,{fixed:t.testImage.childImageSharp.fixed,alt:"Testimonial person face"}),r.a.createElement("p",{className:C.a.testimonialText},"“Bon Voyage have been brilliant from start to finish.  I can't recommend them enough.  The whole process was so simple, we had a superb holiday.\""),r.a.createElement("p",{className:C.a.bold},"Mark, Wimbledon."),r.a.createElement("div",{className:C.a.testimonialReview},r.a.createElement("img",{width:"29",height:"27",src:S.a,alt:"star"}),r.a.createElement("img",{width:"29",height:"27",src:S.a,alt:"star"}),r.a.createElement("img",{width:"29",height:"27",src:S.a,alt:"star"}),r.a.createElement("img",{width:"29",height:"27",src:S.a,alt:"star"}),r.a.createElement("img",{width:"29",height:"27",src:S.a,alt:"star"})))),r.a.createElement("img",{className:C.a.bottomCurve,src:T.a,alt:"Bottom Curve"}))))}var O=a("UNbL"),I=a.n(O);var j=function(e){return r.a.createElement("div",{className:I.a.footerContainer},r.a.createElement("img",{className:I.a.topCurve,src:T.a,alt:"Top Curve"}),r.a.createElement("div",{className:I.a.container+" "+I.a.footer},r.a.createElement("div",null,r.a.createElement("h3",null,"BON VOYAGE TRIPS"),r.a.createElement("div",{className:I.a.divider}),r.a.createElement("p",null,"Incredible experinces to share with your loved ones."),r.a.createElement("p",null,"we create truly memorable experiences that you will cherish forever.")),r.a.createElement("div",null,r.a.createElement("h3",null,"NEWSLETTER"),r.a.createElement("div",{className:I.a.divider}),r.a.createElement("form",null,r.a.createElement("div",{className:I.a.section},r.a.createElement("input",{type:"email",id:"email",name:"email","aria-label":"Newsletter signup",placeholder:"name@email.com"})),r.a.createElement("div",{className:I.a.section},r.a.createElement("input",{type:"submit",value:"SUBMIT"})))),r.a.createElement("div",null,r.a.createElement("h3",null,"SERVICES"),r.a.createElement("div",{className:I.a.divider}),r.a.createElement("ul",null,r.a.createElement("li",null,"Home"),r.a.createElement("li",null,"About"),r.a.createElement("li",null,"Service"),r.a.createElement("li",null,"Book Online"),r.a.createElement("li",null,"News"))),r.a.createElement("div",null,r.a.createElement("h3",null,"SERVICES"),r.a.createElement("div",{className:I.a.divider}),r.a.createElement("ul",{className:I.a.address},r.a.createElement("li",null,"1 Roadtown Street, The Boat Building, British Virgin Islands"),r.a.createElement("li",null,"0800 123456"),r.a.createElement("li",null,"contact@bonvoyagetrips.com")))))},M=a("qhky");function L(e){e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Bon Voyage Trips"),r.a.createElement("meta",{name:"description",content:"Bon Voyage Trips, sailing, boat trips, gatsby"}),r.a.createElement("html",{lang:"en-GB"})),r.a.createElement(i.a,null,r.a.createElement(d,null),r.a.createElement(A,null),r.a.createElement(g,{heading:"CONTACT US"}),r.a.createElement(E,{heading:"NEWS"}),r.a.createElement(j,null)))}},UNbL:function(e,t,a){e.exports={topCurve:"footer-module--top-curve--3t0fx",footerContainer:"footer-module--footer-container--3jDaS",container:"footer-module--container--2WpL3",footer:"footer-module--footer--2KjWj",section:"footer-module--section--2e232",address:"footer-module--address--bVClY",divider:"footer-module--divider--2sAMs"}},ZhWT:function(e,t){var a="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var l,c,s,u;if(Array.isArray(t)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(!e(t[c],o[c]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!e(c.value[1],o.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!o.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((l=t.length)!=o.length)return!1;for(c=l;0!=c--;)if(t[c]!==o[c])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((l=(s=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(o,s[c]))return!1;if(a&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],o[s[c]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},hJ3b:function(e,t,a){e.exports={divider:"testimonials-module--divider--1xZ2m",bold:"testimonials-module--bold--qxVHo",right:"testimonials-module--right--34qYl",container:"testimonials-module--container--2-K3L",topCurve:"testimonials-module--top-curve--2iXZf",bottomCurve:"testimonials-module--bottom-curve--3NxxL",testimonialsContainer:"testimonials-module--testimonials-container--unFVm",content:"testimonials-module--content--2NnQn",contentBox:"testimonials-module--content-box--tpcaP",contentBorder:"testimonials-module--content-border--1bHeG",testimonialMugshot:"testimonials-module--testimonial-mugshot--xLLLK",testimonialText:"testimonials-module--testimonial-text--3XmsW",testimonialReview:"testimonials-module--testimonial-review--3gWIO"}},qhky:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return he}));var n,r,i,o,l=a("17x9"),c=a.n(l),s=a("8+s/"),u=a.n(s),d=a("ZhWT"),m=a.n(d),f=a("q1tI"),p=a.n(f),h=a("YVoz"),g=a.n(h),y="bodyAttributes",v="htmlAttributes",E="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",S="href",N="http-equiv",C="innerHTML",A="itemprop",O="name",I="property",j="rel",M="src",L="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},D="defaultTitle",k="defer",P="encodeSpecialCharacters",B="onChangeClientState",R="titleTemplate",z=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),Y=[b.NOSCRIPT,b.SCRIPT,b.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},W=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},U=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=X(e,b.TITLE),a=X(e,R);if(a&&t)return a.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=X(e,D);return t||n||void 0},Q=function(e){return X(e,B)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var n=Object.keys(a),r=0;r<n.length;r++){var i=n[r].toLowerCase();if(-1!==e.indexOf(i)&&a[i])return t.concat(a)}return t}),[])},K=function(e,t,a){var n={};return a.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var r={};a.filter((function(e){for(var a=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],c=l.toLowerCase();-1===t.indexOf(c)||a===j&&"canonical"===e[a].toLowerCase()||c===j&&"stylesheet"===e[c].toLowerCase()||(a=c),-1===t.indexOf(l)||l!==C&&l!==w&&l!==A||(a=l)}if(!a||!e[a])return!1;var s=e[a].toLowerCase();return n[a]||(n[a]={}),r[a]||(r[a]={}),!n[a][s]&&(r[a][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var l=i[o],c=g()({},n[l],r[l]);n[l]=c}return e}),[]).reverse()},X=function(e,t){for(var a=e.length-1;a>=0;a--){var n=e[a];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var a=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;ce(b.BODY,n),ce(b.HTML,r),le(d,m);var f={baseTag:se(b.BASE,a),linkTags:se(b.LINK,i),metaTags:se(b.META,o),noscriptTags:se(b.NOSCRIPT,l),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},p={},h={};Object.keys(f).forEach((function(e){var t=f[e],a=t.newTags,n=t.oldTags;a.length&&(p[e]=a),n.length&&(h[e]=f[e].oldTags)})),t&&t(),c(e,p,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},le=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ce(b.TITLE,t)},ce=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var n=a.getAttribute("data-react-helmet"),r=n?n.split(","):[],i=[].concat(r),o=Object.keys(t),l=0;l<o.length;l++){var c=o[l],s=t[c]||"";a.getAttribute(c)!==s&&a.setAttribute(c,s),-1===r.indexOf(c)&&r.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)a.removeAttribute(i[d]);r.length===i.length?a.removeAttribute("data-react-helmet"):a.getAttribute("data-react-helmet")!==o.join(",")&&a.setAttribute("data-react-helmet",o.join(","))}},se=function(e,t){var a=document.head||document.querySelector(b.HEAD),n=a.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)a.innerHTML=t.innerHTML;else if(n===w)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[n]?"":t[n];a.setAttribute(n,l)}a.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,a.isEqualNode(e)}))?r.splice(o,1):i.push(a)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return a.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,a){var n=void 0!==e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[x[a]||a]=e[a],t}),t)},me=function(e,t,a){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,a=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,r=de(a,n),[p.a.createElement(b.TITLE,r,e)];var e,a,n,r},toString:function(){return function(e,t,a,n){var r=ue(a),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+_(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case y:case v:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var n,r=((n={key:a})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var a=x[e]||e;if(a===C||a===w){var n=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[a]=t[e]})),p.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,n){var r=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var r=void 0===n[t]?t:t+'="'+_(n[t],a)+'"';return e?e+" "+r:r}),""),i=n.innerHTML||n.cssText||"",o=-1===Y.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,a)}}}},fe=function(e){var t=e.baseTag,a=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:me(b.BASE,t,n),bodyAttributes:me(y,a,n),htmlAttributes:me(v,r,n),link:me(b.LINK,i,n),meta:me(b.META,o,n),noscript:me(b.NOSCRIPT,l,n),script:me(b.SCRIPT,c,n),style:me(b.STYLE,s,n),title:me(b.TITLE,{title:d,titleAttributes:m},n)}},pe=u()((function(e){return{baseTag:J([S,L],e),bodyAttributes:Z(y,e),defer:X(e,k),encode:X(e,P),htmlAttributes:Z(v,e),linkTags:K(b.LINK,[j,S],e),metaTags:K(b.META,[O,T,N,I,A],e),noscriptTags:K(b.NOSCRIPT,[C],e),onChangeClientState:Q(e),scriptTags:K(b.SCRIPT,[M,C],e),styleTags:K(b.STYLE,[w],e),title:G(e),titleAttributes:Z(E,e)}}),(function(e){re&&ae(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),fe)((function(){return null})),he=(r=pe,o=i=function(e){function t(){return H(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,n=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[a.type]=[].concat(n[a.type]||[],[F({},r,this.mapNestedChildrenToProps(a,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,a,n=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case b.TITLE:return F({},r,((t={})[n.type]=o,t.titleAttributes=F({},i),t));case b.BODY:return F({},r,{bodyAttributes:F({},i)});case b.HTML:return F({},r,{htmlAttributes:F({},i)})}return F({},r,((a={})[n.type]=F({},i),a))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=F({},t);return Object.keys(e).forEach((function(t){var n;a=F({},a,((n={})[t]=e[t],n))})),a},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var a=this,n={};return p.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[z[a]||a]=e[a],t}),t)}(U(r,["children"]));switch(a.warnOnInvalidChildren(e,i),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,a=U(e,["children"]),n=F({},a);return t&&(n=this.mapChildrenToProps(t,n)),p.a.createElement(r,n)},W(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(p.a.Component),i.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind}).call(this,a("yLpj"))}}]);
//# sourceMappingURL=component---src-pages-index-js-fdac2a2eeb5ef7f1effd.js.map