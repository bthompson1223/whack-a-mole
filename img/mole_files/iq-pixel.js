!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).IqPixel={})}(this,(function(e){"use strict";function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var i,n={enableTracking:!0,apiKey:"",apiEndpoint:"https://iq.afterpay-beta.com/us/v1/event",platform:"Web",transport:"AJAX",trackingOptions:{enableUserAgent:!1,enableUTM:!1,enableFbclid:!1,enableGclid:!1},saveEvents:!1,cookieExpiration:365,cookieSecure:!1,cookieSameSite:"Lax",domain:"",cookiePrefix:"apt_pixel",enableAds:!0,position:"bottom-left",duration:"0",templateId:"pixel-banner"},r=function(e,i){return i?function(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(i){t(e,i,n[i])}))}return e}({},e,i):e};!function(e){e.IDENTIFY_EVENT="Identify"}(i||(i={}));var o="AJAX",a="BEACON";function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var c=function(e,t){var i=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){s(e,t,i[t])}))}return e}({},t),n=new Blob([JSON.stringify(i)],{type:"application/json"});return navigator.sendBeacon(e,n)},u=function(e){for(var t="",i=0;i<e.length;i++){var n=e.charCodeAt(i);n<128?t+=String.fromCharCode(n):n>127&&n<2048?(t+=String.fromCharCode(n>>6|192),t+=String.fromCharCode(63&n|128)):(t+=String.fromCharCode(n>>12|224),t+=String.fromCharCode(n>>6&63|128),t+=String.fromCharCode(63&n|128))}return t},l=function(e){for(var t="",i=0,n=0,r=0,o=0;i<e.length;)(n=e.charCodeAt(i))<128?(t+=String.fromCharCode(n),i++):n>191&&n<224?(r=e.charCodeAt(i+1),t+=String.fromCharCode((31&n)<<6|63&r),i+=2):(r=e.charCodeAt(i+1),o=e.charCodeAt(i+2),t+=String.fromCharCode((15&n)<<12|(63&r)<<6|63&o),i+=3);return t},d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",f=function(){return void 0!==window.btoa&&void 0!==window.atob},b=function(e){try{if(f())return window.btoa(unescape(encodeURIComponent(e)))}catch(e){}return function(e){var t,i,n,r,o,a,s,c="",l=0;for(e=u(e);l<e.length;)r=(t=e.charCodeAt(l++))>>2,o=(3&t)<<4|(i=e.charCodeAt(l++))>>4,a=(15&i)<<2|(n=e.charCodeAt(l++))>>6,s=63&n,isNaN(i)?a=s=64:isNaN(n)&&(s=64),c=c+d.charAt(r)+d.charAt(o)+d.charAt(a)+d.charAt(s);return c}(e)},p=function(e){try{if(f())return decodeURIComponent(escape(window.atob(e)))}catch(e){}return function(e){var t,i,n,r,o,a,s="",c=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");c<e.length;)t=d.indexOf(e.charAt(c++))<<2|(r=d.indexOf(e.charAt(c++)))>>4,i=(15&r)<<4|(o=d.indexOf(e.charAt(c++)))>>2,n=(3&o)<<6|(a=d.indexOf(e.charAt(c++))),s+=String.fromCharCode(t),64!==o&&(s+=String.fromCharCode(i)),64!==a&&(s+=String.fromCharCode(n));return l(s)}(e)};var h=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._options={expirationDays:(null==t?void 0:t.expirationDays)||0,domain:(null==t?void 0:t.domain)||"",secure:(null==t?void 0:t.secure)||!1,sameSite:(null==t?void 0:t.sameSite)||""}}var t=e.prototype;return t.get=function(e){try{var t=this.findByKey(e);return t?JSON.parse(p(t)):void 0}catch(e){return}},t.findByKey=function(e){var t=window.document.cookie.split("; ").find((function(t){return 0===t.indexOf(e+"=")}));if(t)return t.substring(e.length+1)},t.set=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this._options,n=null!==t?null==i?void 0:i.expirationDays:-1,r=void 0;if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),r=o}var a="".concat(e,"=").concat(b(JSON.stringify(t)));r&&(a+="; expires=".concat(r.toUTCString())),a+="; path=/",(null==i?void 0:i.domain)&&(a+="; domain=".concat(i.domain)),(null==i?void 0:i.secure)&&(a+="; Secure"),(null==i?void 0:i.sameSite)&&(a+="; SameSite=".concat(i.sameSite)),window.document.cookie=a},t.remove=function(e){this.set(e,null)},t.reset=function(){},e}(),m=function(e,t){localStorage.setItem(e,t)},w=function(e,t,i){if(function(e){var t=document.createElement("script");t.type="text/javascript",t.src="https://hbiq.net/sandbox/".concat(e,".js"),t.type="module",t.async=!0,document.body.appendChild(t)}(e),"pixel-banner"===e){var n=document.createElement(e);t&&(n.apiKey=t),i.message&&(n.message=i.message),i.ctaUrl&&(n.ctaUrl=i.ctaUrl),i.duration&&(n.duration=i.duration),i.position&&(n.position=i.position),document.body.appendChild(n)}if("pixel-promotion"===e){var r=document.createElement(e);t&&(r.apiKey=t),i.duration&&(r.duration=i.duration),i.position&&(r.position=i.position),i.region&&(r.region=i.region),document.body.appendChild(r)}},v=function(e){switch(toString.call(e)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===e?"null":void 0===e?"undefined":e!=e?"nan":void 0===(e=e.valueOf?e.valueOf():Object.prototype.valueOf.apply(e))?"undefined":(t=e)&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t;var t};function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e){return k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},k(e)}function x(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e,t){return O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},O(e,t)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var E=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var i,n=k(e);if(t){var r=k(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return x(this,i)}}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(i,e);var t=_(i);function i(){return y(this,i),t.apply(this,arguments)}return i.prototype.get=function(e){try{var t=this.findByKey(e);if(!t)return;return t.split(".").splice(-1)[0].split("|").reduce((function(e,t){var i=S(t.split("=",2),2),n=i[0],r=i[1],o=void 0===r?"":r;return o?(e[n]=decodeURIComponent(o),e):e}),{})}catch(e){return}},i}(h);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,r,o=[],a=!0,s=!1;try{for(i=i.call(e);!(a=(n=i.next()).done)&&(o.push(n.value),!t||o.length!==t);a=!0);}catch(e){s=!0,r=e}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var I=function(){if("undefined"==typeof window)return{};var e=window.location.href.split("?");return e.length>1?e[1].split("&").filter(Boolean).reduce((function(e,t){var i=j(t.split("=",2),2),n=i[0],r=i[1],o=void 0===r?"":r;return o?(e[decodeURIComponent(n)]=decodeURIComponent(o),e):e}),{}):{}},T=function(){var e=I(),t=(new C).get("__utmz")||{},i=e.utm_source||t.utmcsr,n=e.utm_medium||t.utmcmd,r=e.utm_campaign||t.utmccn,o=e.utm_term||t.utmctr,a=e.utm_content||t.utmcct,s={};return i&&(s.utm_source=i),n&&(s.utm_medium=n),r&&(s.utm_campaign=r),o&&(s.utm_term=o),a&&(s.utm_content=a),s},P=function(){var e=I();return{referrer:e.referrer,referring_domain:e.referring_domain,gclid:e.gclid,fbclid:e.fbclid}};var N=function(e){return e&&"undefined"!=typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},U="function",q="undefined",D="object",R="string",z="model",B="name",M="type",F="vendor",K="version",J="architecture",V="console",H="mobile",W="tablet",G="smarttv",L="wearable",X="embedded",$="Amazon",Z="Apple",Y="ASUS",Q="BlackBerry",ee="Firefox",te="Google",ie="Huawei",ne="LG",re="Microsoft",oe="Motorola",ae="Opera",se="Samsung",ce="Sony",ue="Xiaomi",le="Zebra",de="Facebook",fe=function(e){for(var t={},i=0;i<e.length;i++)t[e[i].toUpperCase()]=e[i];return t},be=function(e,t){return(void 0===e?"undefined":N(e))===R&&-1!==pe(t).indexOf(pe(e))},pe=function(e){return e.toLowerCase()},he=function(e,t){if((void 0===e?"undefined":N(e))===R)return e=e.replace(/^\s\s*/,"").replace(/\s\s*$/,""),(void 0===t?"undefined":N(t))===q?e:e.substring(0,275)},me=function(e,t){for(var i,n,r,o,a,s,c=0;c<t.length&&!a;){var u=t[c],l=t[c+1];for(i=n=0;i<u.length&&!a;)if(a=u[i++].exec(e))for(r=0;r<l.length;r++)s=a[++n],(void 0===(o=l[r])?"undefined":N(o))===D&&o.length>0?2===o.length?N(o[1])==U?this[o[0]]=o[1].call(this,s):this[o[0]]=o[1]:3===o.length?N(o[1])!==U||o[1].exec&&o[1].test?this[o[0]]=s?s.replace(o[1],o[2]):void 0:this[o[0]]=s?o[1].call(this,s,o[2]):void 0:4===o.length&&(this[o[0]]=s?o[3].call(this,s.replace(o[1],o[2])):void 0):this[o]=s||void 0;c+=2}},we=function(e,t){for(var i in t)if(N(t[i])===D&&t[i].length>0){for(var n=0;n<t[i].length;n++)if(be(t[i][n],e))return"?"===i?void 0:i}else if(be(t[i],e))return"?"===i?void 0:i;return e},ve={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},ge={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[K,[B,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[K,[B,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[B,K],[/opios[\/ ]+([\w\.]+)/i],[K,[B,"Opera Mini"]],[/\bopr\/([\w\.]+)/i],[K,[B,ae]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[B,K],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[K,[B,"UCBrowser"]],[/\bqbcore\/([\w\.]+)/i],[K,[B,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[K,[B,"WeChat"]],[/konqueror\/([\w\.]+)/i],[K,[B,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[K,[B,"IE"]],[/yabrowser\/([\w\.]+)/i],[K,[B,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[B,/(.+)/,"$1 Secure Browser"],K],[/\bfocus\/([\w\.]+)/i],[K,[B,"Firefox Focus"]],[/\bopt\/([\w\.]+)/i],[K,[B,"Opera Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[K,[B,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[K,[B,"Dolphin"]],[/coast\/([\w\.]+)/i],[K,[B,"Opera Coast"]],[/miuibrowser\/([\w\.]+)/i],[K,[B,"MIUI Browser"]],[/fxios\/([-\w\.]+)/i],[K,[B,ee]],[/\bqihu|(qi?ho?o?|360)browser/i],[[B,"360 Browser"]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[B,/(.+)/,"$1 Browser"],K],[/(comodo_dragon)\/([\w\.]+)/i],[[B,/_/g," "],K],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[B,K],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[B],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[B,de],K],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[B,K],[/\bgsa\/([\w\.]+) .*safari\//i],[K,[B,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[K,[B,"Chrome Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[B,"Chrome WebView"],K],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[K,[B,"Android Browser"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[B,K],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[K,[B,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[K,B],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[B,[K,we,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[B,K],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[B,"Netscape"],K],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[K,[B,"Firefox Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[B,K]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[J,"amd64"]],[/(ia32(?=;))/i],[[J,pe]],[/((?:i[346]|x)86)[;\)]/i],[[J,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[J,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[J,"armhf"]],[/windows (ce|mobile); ppc;/i],[[J,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[J,/ower/,"",pe]],[/(sun4\w)[;\)]/i],[[J,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[J,pe]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[z,[F,se],[M,W]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[z,[F,se],[M,H]],[/\((ip(?:hone|od)[\w ]*);/i],[z,[F,Z],[M,H]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[z,[F,Z],[M,W]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[z,[F,ie],[M,W]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[z,[F,ie],[M,H]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[z,/_/g," "],[F,ue],[M,H]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[z,/_/g," "],[F,ue],[M,W]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[z,[F,"OPPO"],[M,H]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[z,[F,"Vivo"],[M,H]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[z,[F,"Realme"],[M,H]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[z,[F,oe],[M,H]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[z,[F,oe],[M,W]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[z,[F,ne],[M,W]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[z,[F,ne],[M,H]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[z,[F,"Lenovo"],[M,W]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[z,/_/g," "],[F,"Nokia"],[M,H]],[/(pixel c)\b/i],[z,[F,te],[M,W]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[z,[F,te],[M,H]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[z,[F,ce],[M,H]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[z,"Xperia Tablet"],[F,ce],[M,W]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[z,[F,"OnePlus"],[M,H]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[z,[F,$],[M,W]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[z,/(.+)/g,"Fire Phone $1"],[F,$],[M,H]],[/(playbook);[-\w\),; ]+(rim)/i],[z,F,[M,W]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[z,[F,Q],[M,H]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[z,[F,Y],[M,W]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[z,[F,Y],[M,H]],[/(nexus 9)/i],[z,[F,"HTC"],[M,W]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],[F,[z,/_/g," "],[M,H]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[z,[F,"Acer"],[M,W]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[z,[F,"Meizu"],[M,H]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[z,[F,"Sharp"],[M,H]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[F,z,[M,H]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[F,z,[M,W]],[/(surface duo)/i],[z,[F,re],[M,W]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[z,[F,"Fairphone"],[M,H]],[/(u304aa)/i],[z,[F,"AT&T"],[M,H]],[/\bsie-(\w*)/i],[z,[F,"Siemens"],[M,H]],[/\b(rct\w+) b/i],[z,[F,"RCA"],[M,W]],[/\b(venue[\d ]{2,7}) b/i],[z,[F,"Dell"],[M,W]],[/\b(q(?:mv|ta)\w+) b/i],[z,[F,"Verizon"],[M,W]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[z,[F,"Barnes & Noble"],[M,W]],[/\b(tm\d{3}\w+) b/i],[z,[F,"NuVision"],[M,W]],[/\b(k88) b/i],[z,[F,"ZTE"],[M,W]],[/\b(nx\d{3}j) b/i],[z,[F,"ZTE"],[M,H]],[/\b(gen\d{3}) b.+49h/i],[z,[F,"Swiss"],[M,H]],[/\b(zur\d{3}) b/i],[z,[F,"Swiss"],[M,W]],[/\b((zeki)?tb.*\b) b/i],[z,[F,"Zeki"],[M,W]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[F,"Dragon Touch"],z,[M,W]],[/\b(ns-?\w{0,9}) b/i],[z,[F,"Insignia"],[M,W]],[/\b((nxa|next)-?\w{0,9}) b/i],[z,[F,"NextBook"],[M,W]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[F,"Voice"],z,[M,H]],[/\b(lvtel\-)?(v1[12]) b/i],[[F,"LvTel"],z,[M,H]],[/\b(ph-1) /i],[z,[F,"Essential"],[M,H]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[z,[F,"Envizen"],[M,W]],[/\b(trio[-\w\. ]+) b/i],[z,[F,"MachSpeed"],[M,W]],[/\btu_(1491) b/i],[z,[F,"Rotor"],[M,W]],[/(shield[\w ]+) b/i],[z,[F,"Nvidia"],[M,W]],[/(sprint) (\w+)/i],[F,z,[M,H]],[/(kin\.[onetw]{3})/i],[[z,/\./g," "],[F,re],[M,H]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[z,[F,le],[M,W]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[z,[F,le],[M,H]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[F,z,[M,V]],[/droid.+; (shield) bui/i],[z,[F,"Nvidia"],[M,V]],[/(playstation [345portablevi]+)/i],[z,[F,ce],[M,V]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[z,[F,re],[M,V]],[/smart-tv.+(samsung)/i],[F,[M,G]],[/hbbtv.+maple;(\d+)/i],[[z,/^/,"SmartTV"],[F,se],[M,G]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[F,ne],[M,G]],[/(apple) ?tv/i],[F,[z,"Apple TV"],[M,G]],[/crkey/i],[[z,"Chromecast"],[F,te],[M,G]],[/droid.+aft(\w)( bui|\))/i],[z,[F,$],[M,G]],[/\(dtv[\);].+(aquos)/i],[z,[F,"Sharp"],[M,G]],[/(bravia[\w- ]+) bui/i],[z,[F,ce],[M,G]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[F,he],[z,he],[M,G]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[M,G]],[/((pebble))app/i],[F,z,[M,L]],[/droid.+; (glass) \d/i],[z,[F,te],[M,L]],[/droid.+; (wt63?0{2,3})\)/i],[z,[F,le],[M,L]],[/(quest( 2)?)/i],[z,[F,de],[M,L]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[F,[M,X]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[z,[M,H]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[z,[M,W]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[M,W]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[M,H]],[/(android[-\w\. ]{0,9});.+buil/i],[z,[F,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[K,[B,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[K,[B,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[B,K],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[K,B]],os:[[/microsoft (windows) (vista|xp)/i],[B,K],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[B,[K,we,ve]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[B,"Windows"],[K,we,ve]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[K,/_/g,"."],[B,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[B,"Mac OS"],[K,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[K,B],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[B,K],[/\(bb(10);/i],[K,[B,Q]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[K,[B,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[K,[B,"Firefox OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[K,[B,"webOS"]],[/crkey\/([\d\.]+)/i],[K,[B,"Chromecast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[B,"Chromium OS"],K],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[B,K],[/(sunos) ?([\w\.\d]*)/i],[[B,"Solaris"],K],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[B,K]]},ye=function(e,t){if((void 0===e?"undefined":N(e))===D&&(t=e,e=void 0),i=this,!(null!=(n=ye)&&"undefined"!=typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](i):i instanceof n))return new ye(e,t).getResult();var i,n,r=e||(("undefined"==typeof window?"undefined":N(window))!==q&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:""),o=t?function(e,t){var i={};for(var n in e)t[n]&&t[n].length%2==0?i[n]=t[n].concat(e[n]):i[n]=e[n];return i}(ge,t):ge;return this.getBrowser=function(){var e,t={};return t.name=void 0,t.version=void 0,me.call(t,r,o.browser),t.major=(void 0===(e=t.version)?"undefined":N(e))===R?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0,t},this.getCPU=function(){var e={architecture:void 0};return me.call(e,r,o.cpu),e},this.getDevice=function(){var e={vendor:void 0,model:void 0,type:void 0};return me.call(e,r,o.device),e},this.getEngine=function(){var e={name:void 0,version:void 0};return me.call(e,r,o.engine),e},this.getOS=function(){var e={name:void 0,version:void 0};return me.call(e,r,o.os),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return r},this.setUA=function(e){return r=(void 0===e?"undefined":N(e))===R&&e.length>275?he(e,275):e,this},this.setUA(r),this};ye.VERSION="0.7.31",ye.BROWSER=fe([B,K,"major"]),ye.CPU=fe([J]),ye.DEVICE=fe([z,F,M,V,H,G,W,L,X]),ye.ENGINE=ye.OS=fe([B,K]);var ke=function(e){if(!e)return{};var t=new ye(e).getResult();return{browser_name:t.browser.name||"",browser_version:t.browser.version||"",os_name:t.os.name,os_version:t.os.version,device:t.device.model}},xe=function(e){return!e||0===e.length},Oe=function(e){return void 0!==e&&"boolean"==typeof e},Se=function(e){return e?(e^16*Math.random()>>e/4).toString(16):(String(1e7)+String(-1e3)+String(-4e3)+String(-8e3)+String(-1e11)).replace(/[018]/g,Se)};function Ee(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var _e={"Content-Type":"application/json"},Ce=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.url=t||"",this.data=i||{},this.headers=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){Ee(e,t,i[t])}))}return e}({},_e,n)}var t=e.prototype;return t.setHeaders=function(e,t){for(var i in t)("Cross-Origin-Resource-Policy"!==i||t[i])&&e.setRequestHeader(i,t[i])},t.send=function(e){if("undefined"!=typeof XMLHttpRequest){var t=new XMLHttpRequest;t.open("POST",this.url,!0),t.withCredentials=!0,t.onreadystatechange=function(){4===t.readyState&&(null==e||e(t.status,t.responseText))},this.setHeaders(t,this.headers),t.send(JSON.stringify(this.data))}else{var i;fetch(this.url,{method:"POST",headers:this.headers,body:JSON.stringify(this.data)}).then((function(e){return i=e.status,e.text()})).then((function(t){null==e||e(i,t)}))}},e}();function Ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function je(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Ie(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){je(e,t,i[t])}))}return e}function Te(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})),e}function Pe(e){return function(e){if(Array.isArray(e))return Ae(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return Ae(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(i);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Ae(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ne="apt_unsent_events",Ue=function(){function e(t,i,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isInitialized=!1,this.eventId=0,this.userId=i||"",this.deviceId="",this.apiKey=t,this.options=r(n,o),this.queque=window["Honeybee-data-layer"]||[],this.unsentEvents=[],this.useragent=navigator&&navigator.userAgent,this.ua=this.options.trackingOptions.enableUserAgent?ke(this.useragent):{},this.utm=this.options.trackingOptions.enableUTM?T():{},this.language="undefined"!=typeof navigator&&(navigator.languages&&navigator.languages[0]||navigator.language)||"",this.screen="undefined"==typeof screen?{}:{height:screen.height,width:screen.width,pixel_depth:screen.pixelDepth},this.cookieName=this.options.cookiePrefix+"",this.eventData={},this.cookieStorage=new h({domain:this.options.domain,expirationDays:this.options.cookieExpiration,secure:this.options.cookieSecure,sameSite:this.options.cookieSameSite}),this.initFromStorage(),this.loadAdsTemplate(),this.runQueuedFunctions()}var t=e.prototype;return t.setOptions=function(e){if("object"==typeof e){var t,i;if(!e.transport||("AJAX"!==(t=e.transport)&&"BEACON"!==t||"AJAX"!==t&&!navigator.sendBeacon)||(this.options.transport=e.transport),e.platform&&"Web"===e.platform&&(this.options.platform=e.platform),!e.cookieExpiration||("number"!=typeof(i=e.cookieExpiration)||i>n.cookieExpiration)||(this.options.cookieExpiration=e.cookieExpiration),e.apiKey&&xe(e.apiKey)&&(this.options.apiKey=e.apiKey),e.cookiePrefix&&xe(e.cookiePrefix)&&(this.options.cookiePrefix=e.cookiePrefix),e.trackingOptions){var r=e.trackingOptions,o=r.enableFbclid,a=r.enableGclid,s=r.enableUserAgent,c=r.enableUTM;Oe(o)&&(this.options.trackingOptions.enableFbclid=o),Oe(a)&&(this.options.trackingOptions.enableGclid=a),Oe(s)&&(this.options.trackingOptions.enableUserAgent=s),Oe(c)&&(this.options.trackingOptions.enableUTM=c)}void 0!==e.saveEvents&&Oe(e.saveEvents)&&(this.options.saveEvents=e.saveEvents)}},t.shouldDefer=function(){},t.setUserId=function(e){this.userId=e,null===v(e)&&"string"===v(e)&&this.sendEvent(i.IDENTIFY_EVENT)},t.getCollectedProperties=function(){try{var e=P(),t=e.referrer,i=e.referring_domain,n=P(),r=n.gclid,o=n.fbclid,a=this.options.trackingOptions,s=a.enableUserAgent,c=a.enableUTM,u=a.enableGclid,l=a.enableFbclid;return s?(this.useragent=navigator.userAgent,this.ua=ke(this.useragent)):this.ua={},this.utm=c?T():{},Te(Ie({},this.screen,this.utm,this.ua),{referrer:t,referring_domain:i,location:Intl.DateTimeFormat().resolvedOptions().timeZone,language:this.language,device_id:this.deviceId,user_id:this.userId,platform:"Web",gclid:u?r:void 0,fbclid:l?o:void 0,from:"iq-pixel",version:"0.0.1",url:window.location.href})}catch(e){return null}},t.runQueuedFunctions=function(){var e=this.queque;this.queque=[];for(var t=0;t<e.length;t++){var i=this[e[t][0]];"function"===v(i)&&i.apply(this,e[t].slice(1))}},t.sendEvent=function(e,t){if("undefined"!==v(e)&&(!t||"object"===v(t))){this.eventId+=1;var i=this.getCollectedProperties();if(null!==i)try{this.lastEventTime=(new Date).getTime();var n=Te(Ie({},i),{event_id:this.eventId,event:e,event_properties:t||{},merchant_token:this.apiKey});this.eventData=t||{},this.logEvent(n,!1)}catch(e){}}},t.logEvent=function(e,t){var i=this;try{this.lastEventTime=(new Date).getTime();var n=this.options.saveEvents;if(this.options.transport===o)new Ce(this.options.apiEndpoint,e).send((function(r,o){200===r?t&&i.removeUnsentEvent(e):n&&i.setUnsentEvent(e)}));else if(this.options.transport===a){c(this.options.apiEndpoint,e)?n&&this.removeUnsentEvent(e):n&&this.setUnsentEvent(e)}this.saveCookies()}catch(e){}},t.getDataFromCookies=function(){var e,t,i,n=this.cookieStorage.get(this.cookieName);return"object"===v(n)&&"undefined"!==v(n.deviceId)&&(e=n.deviceId),"object"===v(n)&&"number"===v(n.eventId)&&(t=n.eventId),"object"===v(n)&&"undefined"!==v(n.userId)&&(i=n.userId),{deviceId:e,eventId:t,userId:i}},t.getUnsentEvents=function(){try{var e=function(e){try{return localStorage.getItem(e)}catch(e){return null}}(Ne),t=e&&!xe(e)?JSON.parse(e):[];return"array"===v(t)?t:[]}catch(e){return[]}},t.setUnsentEvent=function(e){if("undefined"!==v(e)){void 0===e.retry&&(e.retry=0);var t=this.unsentEvents.filter((function(t){return t.event_id!==e.event_id&&t.retry<=3})),i=e.retry>=3?Pe(t):Pe(t).concat([Te(Ie({},e),{retry:e.retry+1})]);this.unsentEvents=i,m(Ne,JSON.stringify(i))}},t.removeUnsentEvent=function(e){var t=e.event_id;try{this.unsentEvents=this.unsentEvents.filter((function(e){return e.event_id===t})),m(Ne,JSON.stringify(this.unsentEvents))}catch(e){}},t.initFromStorage=function(){var e=this,t=this.getDataFromCookies(),i=t.deviceId,n=t.eventId,r=t.userId,o=I().device_id;this.deviceId=o||(i||Se()),this.eventId="number"==typeof n?n+1:0,"undefined"!==v(r)&&(this.userId=r),this.options.saveEvents&&(this.unsentEvents=this.getUnsentEvents(),this.unsentEvents.length>0&&this.unsentEvents.forEach((function(t){setTimeout((function(){e.logEvent(t,!0)}),0)}))),this.saveCookies(),this.isInitialized=!0},t.saveCookies=function(){var e={deviceId:this.deviceId,userId:this.userId,eventId:this.eventId,lastEventTime:this.lastEventTime};this.cookieStorage.set(this.cookieName,e)},t.clearStorage=function(){this.cookieStorage.remove(this.cookieName)},t.getProperties=function(){return Te(Ie({},this.getCollectedProperties()),{platform:"Web",event_id:this.eventId,merchant_token:this.apiKey,event_properties:this.eventData})},t.loadAdsTemplate=function(){var e=this.options,t=e.enableAds,i=e.templateId,n=e.message,r=e.duration,o=e.position,a=e.ctaUrl,s=e.region;t&&void 0!==i&&w(i,this.apiKey,{message:n,duration:r,position:o,ctaUrl:a,region:s})},e.init=function(t,i,n){if(window["iq-tracking-instance"])return window["iq-tracking-instance"];var r=new e(t,i,n);return window["iq-tracking-instance"]=r,r},e}();e.DEFAULT_OPTIONS=n,e.default=Ue,e.parseConfig=r,Object.defineProperty(e,"__esModule",{value:!0})}));