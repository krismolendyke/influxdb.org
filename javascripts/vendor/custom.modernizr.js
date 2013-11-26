window.Modernizr=function(t,e,n){function r(t){p.cssText=t}function i(t,e){return typeof t===e}var a,o,u,s="2.6.2",c={},l=!0,f=e.documentElement,h="modernizr",d=e.createElement(h),p=d.style,g={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),v={svg:"http://www.w3.org/2000/svg"},y={},x=[],b=x.slice,w=function(t,n,r,i){var a,o,u,s,c=e.createElement("div"),l=e.body,d=l||e.createElement("body");if(parseInt(r,10))for(;r--;)u=e.createElement("div"),u.id=i?i[r]:h+(r+1),c.appendChild(u);return a=["&#173;",'<style id="s',h,'">',t,"</style>"].join(""),c.id=h,(l?c:d).innerHTML+=a,d.appendChild(c),l||(d.style.background="",d.style.overflow="hidden",s=f.style.overflow,f.style.overflow="hidden",f.appendChild(d)),o=n(c,t),l?c.parentNode.removeChild(c):(d.parentNode.removeChild(d),f.style.overflow=s),!!o},M=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e).matches;var r;return w("@media "+e+" { #"+h+" { position: absolute; } }",function(e){r="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),r},k={}.hasOwnProperty;u=i(k,"undefined")||i(k.call,"undefined")?function(t,e){return e in t&&i(t.constructor.prototype[e],"undefined")}:function(t,e){return k.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=b.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=e.prototype;var a=new i,o=e.apply(a,n.concat(b.call(arguments)));return Object(o)===o?o:a}return e.apply(t,n.concat(b.call(arguments)))};return r}),y.touch=function(){var n;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?n=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){n=9===t.offsetTop}),n},y.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect},y.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==v.svg},y.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(g.call(e.createElementNS(v.svg,"clipPath")))};for(var _ in y)u(y,_)&&(o=_.toLowerCase(),c[o]=y[_](),x.push((c[o]?"":"no-")+o));return c.addTest=function(t,e){if("object"==typeof t)for(var r in t)u(t,r)&&c.addTest(r,t[r]);else{if(t=t.toLowerCase(),c[t]!==n)return c;e="function"==typeof e?e():e,"undefined"!=typeof l&&l&&(f.className+=" "+(e?"":"no-")+t),c[t]=e}return c},r(""),d=a=null,function(t,e){function n(t,e){var n=t.createElement("p"),r=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var t=v.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=m[t[p]];return e||(e={},g++,t[p]=g,m[g]=e),e}function a(t,n,r){if(n||(n=e),l)return n.createElement(t);r||(r=i(n));var a;return a=r.cache[t]?r.cache[t].cloneNode():d.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t),a.canHaveChildren&&!h.test(t)?r.frag.appendChild(a):a}function o(t,n){if(t||(t=e),l)return t.createDocumentFragment();n=n||i(t);for(var a=n.frag.cloneNode(),o=0,u=r(),s=u.length;s>o;o++)a.createElement(u[o]);return a}function u(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return v.shivMethods?a(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(v,e.frag)}function s(t){t||(t=e);var r=i(t);return v.shivCSS&&!c&&!r.hasCSS&&(r.hasCSS=!!n(t,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),l||u(t,r),t}var c,l,f=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",g=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",c="hidden"in t,l=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){c=!0,l=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:l,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:o};t.html5=v,s(e)}(this,e),c._version=s,c._prefixes=m,c.mq=M,c.testStyles=w,f.className=f.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(l?" js "+x.join(" "):""),c}(this,this.document),function(t,e,n){function r(t){return"[object Function]"==m.call(t)}function i(t){return"string"==typeof t}function a(){}function o(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function u(){var t=v.shift();y=1,t?t.t?p(function(){("c"==t.t?h.injectCss:h.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),u()):y=0}function s(t,n,r,i,a,s,c){function l(e){if(!d&&o(f.readyState)&&(x.r=d=1,!y&&u(),f.onload=f.onreadystatechange=null,e)){"img"!=t&&p(function(){w.removeChild(f)},50);for(var r in S[n])S[n].hasOwnProperty(r)&&S[n][r].onload()}}var c=c||h.errorTimeout,f=e.createElement(t),d=0,m=0,x={t:r,s:n,e:a,a:s,x:c};1===S[n]&&(m=1,S[n]=[]),"object"==t?f.data=n:(f.src=n,f.type=t),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,m)},v.splice(i,0,x),"img"!=t&&(m||2===S[n]?(w.insertBefore(f,b?null:g),p(l,c)):S[n].push(f))}function c(t,e,n,r,a){return y=0,e=e||"j",i(t)?s("c"==e?k:M,t,e,this.i++,n,r,a):(v.splice(this.i++,0,t),1==v.length&&u()),this}function l(){var t=h;return t.loader={load:c,i:0},t}var f,h,d=e.documentElement,p=t.setTimeout,g=e.getElementsByTagName("script")[0],m={}.toString,v=[],y=0,x="MozAppearance"in d.style,b=x&&!!e.createRange().compareNode,w=b?d:g.parentNode,d=t.opera&&"[object Opera]"==m.call(t.opera),d=!!e.attachEvent&&!d,M=x?"object":d?"script":"img",k=d?"script":M,_=Array.isArray||function(t){return"[object Array]"==m.call(t)},E=[],S={},C={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};h=function(t){function e(t){var e,n,r,t=t.split("!"),i=E.length,a=t.pop(),o=t.length,a={url:a,origUrl:a,prefixes:t};for(n=0;o>n;n++)r=t[n].split("="),(e=C[r.shift()])&&(a=e(a,r));for(n=0;i>n;n++)a=E[n](a);return a}function o(t,i,a,o,u){var s=e(t),c=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(i&&(i=r(i)?i:i[t]||i[o]||i[t.split("/").pop().split("?")[0]]),s.instead?s.instead(t,i,a,o,u):(S[s.url]?s.noexec=!0:S[s.url]=1,a.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(i)||r(c))&&a.load(function(){l(),i&&i(s.origUrl,u,o),c&&c(s.origUrl,u,o),S[s.url]=2})))}function u(t,e){function n(t,n){if(t){if(i(t))n||(f=function(){var t=[].slice.call(arguments);h.apply(this,t),d()}),o(t,f,e,0,c);else if(Object(t)===t)for(s in u=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(s)&&(!n&&!--u&&(r(f)?f=function(){var t=[].slice.call(arguments);h.apply(this,t),d()}:f[s]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),d()}}(h[s])),o(t[s],f,e,s,c))}else!n&&d()}var u,s,c=!!t.test,l=t.load||t.both,f=t.callback||a,h=f,d=t.complete||a;n(c?t.yep:t.nope,!!l),l&&n(l)}var s,c,f=this.yepnope.loader;if(i(t))o(t,0,f,0);else if(_(t))for(s=0;s<t.length;s++)c=t[s],i(c)?o(c,0,f,0):_(c)?h(c):Object(c)===c&&u(c,f);else Object(t)===t&&u(t,f)},h.addPrefix=function(t,e){C[t]=e},h.addFilter=function(t){E.push(t)},h.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",f=function(){e.removeEventListener("DOMContentLoaded",f,0),e.readyState="complete"},0)),t.yepnope=l(),t.yepnope.executeStack=u,t.yepnope.injectJs=function(t,n,r,i,s,c){var l,f,d=e.createElement("script"),i=i||h.errorTimeout;d.src=t;for(f in r)d.setAttribute(f,r[f]);n=c?u:n||a,d.onreadystatechange=d.onload=function(){!l&&o(d.readyState)&&(l=1,n(),d.onload=d.onreadystatechange=null)},p(function(){l||(l=1,n(1))},i),s?d.onload():g.parentNode.insertBefore(d,g)},t.yepnope.injectCss=function(t,n,r,i,o,s){var c,i=e.createElement("link"),n=s?u:n||a;i.href=t,i.rel="stylesheet",i.type="text/css";for(c in r)i.setAttribute(c,r[c]);o||(g.parentNode.insertBefore(i,g),p(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&7===document.documentMode});