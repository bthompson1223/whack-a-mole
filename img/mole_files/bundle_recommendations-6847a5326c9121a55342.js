(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{1647:function(e,t,n){"use strict";var o=n(1);t.a=function(e){Object(o.useEffect)(function(){var t=function(){e()};return window.addEventListener("beforeunload",t),function(){window.removeEventListener("beforeunload",t),e()}},[e])}},2342:function(e,t,n){e.exports={bundleRecommendations:"styles__bundleRecommendations--2fppa",busy:"styles__busy--1lMNK",close:"styles__close--gKylx",desktop:"styles__desktop--1BTEd",mobile:"styles__mobile--SQ5V_",productImage:"styles__productImage--2s15T",description:"styles__description--32MHn",productCard:"styles__productCard--2t5SD",productGrid:"styles__productGrid--24KNu",discountedPrice:"styles__discountedPrice--p70hl"}},2376:function(e,t,n){"use strict";n.r(t);var o,a=n(1),i=n.n(a),r=n(39),s=n.n(r),c=n(454),d=n.n(c),l=n(17),u=n(92),m=n(27),p=n(18),f=n.n(p),y=n(4),v=n(23),g=n(7),b=n(1298),h=n(2),w=n(166),x=n(1368),I=n(196),k=n(2342),B=n.n(k),C=n(351),O=n(0),j=n.n(O),T=n(80),S=n(1534),R=n(1310),M=n(89),P=n(1452),D=n(1696),_=n(1384),N=n(1363),E=n(1372),A=n(1671);function L(e,t,n,a){o||(o="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var i=e&&e.defaultProps,r=arguments.length-3;if(t||0===r||(t={children:void 0}),t&&i)for(var s in i)void 0===t[s]&&(t[s]=i[s]);else t||(t=i||{});if(1===r)t.children=a;else if(r>1){for(var c=new Array(r),d=0;d<r;d++)c[d]=arguments[d+3];t.children=c}return{$$typeof:o,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}var V=L(S.a,{}),q=L(g.a,{type:"caption",muted:!0,marginBottom:"m",marginLeft:"xxs","data-testid":"vat-message"},void 0,L(C.a,{id:"shared.components.BundleRecommendations.761544404",defaultMessage:"incl. VAT","data-react-ds-adoption":!0})),z=L(y.a,{display:"flex"},void 0,L(g.a,{type:"caption",muted:!0,marginBottom:"m",marginLeft:"xxs"},void 0,L(C.a,{id:"shared.components.BundleRecommendations.761544404",defaultMessage:"incl. VAT","data-react-ds-adoption":!0}))),G=L(C.a,{id:"shared.components.BundleRecommendations.3300111594",defaultMessage:"View Cart","data-react-ds-adoption":!0}),$=function(e){var t=e.inventoryItem,n=e.work,o=e.profile,a=e.messages,i=e.showStrikethroughPricing,r=t.price,c=n.title,d=Object(M.c)().userInfo,u=Object(N.a)(t),m=Object(E.b)(t,a),p=i?[u,m].sort(function(e,t){return null==f()(e,"discountPercent")?1:null==f()(t,"discountPercent")?-1:t.discountPercent-e.discountPercent})[0]:m,b=f()(t,"attributes")||[],w=f()(t,"description",null),x=Object(R.i)(b,"defaultText").join(", "),I=f()(d,"country"),k=function(e){var t=e.inventoryItem,n=e.work,o=e.userInfo;if(n.isMatureContent&&!o.showMatureContent)return Object(P.a)(o.locale);var a=f()(t,"previewSet.previews",[]).find(function(e){return"product_close"===e.previewTypeId});return a&&a.url?a.url:null}({inventoryItem:t,work:n,userInfo:d});return L("div",{style:{minWidth:"100%"},"data-testid":"item-summary"},void 0,L(y.a,{display:"flex",alignItems:"center",justifyContent:"space-between"},void 0,L(y.a,{style:{minWidth:0}},void 0,L(y.a,{display:"flex",alignItems:"center",marginRight:"xs",marginBottom:"xs"},void 0,L(y.a,{marginRight:"xs"},void 0,L("div",{className:B.a.productImage,"data-react-ds-adoption":!0},void 0,V,L(T.a,{src:k,roundedCorners:!0}))),L(y.a,{flex:"1",style:{minWidth:0}},void 0,L(g.a,{lineClamp:1,display:"block",type:"display5"},void 0,s()(c,["Text","Box","Button","constants","Image","CheckDiscIcon"])),L(g.a,{lineClamp:1,display:"block",type:"body2"},void 0,s()(w,["Text","Box","Button","constants","Image","CheckDiscIcon"])),L(g.a,{lineClamp:1,display:"block",type:"caption"},void 0,s()(x,["Text","Box","Button","constants","Image","CheckDiscIcon"])),s()(r&&!p&&L(g.a,{type:"display5",display:"block"},void 0,L(l.FormattedNumber,{value:r.amount,style:"currency",currency:r.currency,"data-react-ds-adoption":!0}),s()(Object(D.b)(I)&&q,["Text","Box","Button","constants","Image","CheckDiscIcon"])),["Text","Box","Button","constants","Image","CheckDiscIcon"]),s()(r&&p&&L(g.a,{type:"display5",display:"block"},void 0,L(y.a,{element:"span",className:B.a.discountedPrice},void 0,L(l.FormattedNumber,{value:p.discountedPrice,style:"currency",currency:r.currency,"data-react-ds-adoption":!0})),L(g.a,{type:"caption",muted:!0,marginBottom:"m",marginLeft:"xs"},void 0,L(_.a,{price:t.price.amount,currency:t.price.currency,discountPercent:p.discountPercent,"data-react-ds-adoption":!0})),s()(Object(D.b)(I)&&z,["Text","Box","Button","constants","Image","CheckDiscIcon"])),["Text","Box","Button","constants","Image","CheckDiscIcon"])))),s()(o===h.x?L(v.a,{onClick:function(){window.location.href="/cart"},intent:h.z,size:h.w,"data-testid":"view-cart-btn"},void 0,G):null,["Text","Box","Button","constants","Image","CheckDiscIcon"])))};$.propTypes={inventoryItem:j.a.shape({id:j.a.string.isRequired,description:j.a.string.isRequired,price:j.a.shape({amount:j.a.number.isRequired,currency:j.a.string.isRequired}),productTypeId:j.a.string,productPageUrl:j.a.string.isRequired,gaCode:j.a.string,gaCategory:j.a.string}),work:j.a.shape({id:j.a.string,title:j.a.string,isMatureContent:j.a.bool,artistName:j.a.string}),profile:j.a.string,messages:j.a.arrayOf(j.a.shape({applied:j.a.bool,discount_key:j.a.string,severity:j.a.string,text:j.a.string,type:j.a.string,action_url:j.a.string})),showStrikethroughPricing:j.a.bool},$.defaultProps={inventoryItem:{},work:{},messages:[],profile:h.x,showStrikethroughPricing:!1};var U,W,F,K,J=Object(m.d)(A.a)($),H=n(1578),Q=n(1508),Y=n(1673),X=n(245),Z=n(1511),ee=n(1308),te=n(1510),ne=n(1647),oe=n(1695),ae=n(1535),ie=n(1536),re=n(1364),se=n(1484),ce=n.n(se),de=n(1509),le=n(1674),ue=n(1858),me=n(1513),pe=n(1309),fe=n(42),ye=n(1572),ve=n(1672),ge=n(132),be=n(1329);function he(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){Ie(e,t,n[t])})}return e}function we(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,a=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function xe(e,t,n,o){K||(K="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var r in a)void 0===t[r]&&(t[r]=a[r]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:K,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function Ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ke=Object(l.defineMessages)({similarDesigns:(U={id:"shared.components.BundleRecommendations.similarDesigns"},Ie(U,"id","shared.components.BundleRecommendations.similarDesigns"),Ie(U,"defaultMessage","Similar designs"),U),next:(W={id:"shared.components.BundleRecommendations.next"},Ie(W,"id","shared.components.BundleRecommendations.next"),Ie(W,"defaultMessage","Next"),W),back:(F={id:"shared.components.BundleRecommendations.back"},Ie(F,"id","shared.components.BundleRecommendations.back"),Ie(F,"defaultMessage","Back"),F)}),Be=function(e){var t=e.title,n=e.caption;return xe(y.a,{className:B.a.productCard},void 0,xe(le.a,{title:t,caption:n,"data-react-ds-adoption":!0}))};Be.propTypes={title:j.a.string,caption:j.a.string},Be.defaultProps={title:"",caption:""};var Ce=xe(de.a,{color:"var(--ds-color-border-light)",marginY:"m"}),Oe=function(e){var t=e.inventoryItemId,n=e.intl,o=e.testId,r=e.showMatureContent,c=Object(be.a)(),d=Object(M.c)().userInfo,l=Object(ue.a)({userInfo:d,inventoryItemId:t,ssr:!1}),u=l.similarDesigns,m=l.similarDesignsLoading,p=Object(ye.a)(),v=(Object(a.useContext)(Q.b)||{}).carouselUUID,b=Object(a.useMemo)(function(){if(null===u)return[];var e=u.map(function(e){return f()(e,"inventoryItem")}).filter(Boolean);return Object(me.a)({inventoryItems:e},n,{showArtistName:!0,showWorkTitle:!0,showDescription:!0,previewType:pe.h,useDefaultPreviewType:!1})},[u,n]),h=Object(ve.a)(b),w=we(Object(a.useState)([]),2),I=w[0],k=w[1];Object(a.useEffect)(function(){k(b.map(function(){return!1}))},[b]);if(!Array.isArray(u)||!u.length&&!m)return null;var C=m?new Array(8).fill({}):b;return xe(re.a,{},void 0,function(e){var t=e.inView,a=e.ref;return i.a.createElement(y.a,{ref:a,"data-testid":o},Ce,xe(x.a,{spacing:"m"},void 0,xe(g.a,{id:"similar-designs-title",type:"display3"},void 0,s()(n.formatMessage(ke.similarDesigns),["Box","Divider","Text","Stack"])),xe(y.a,{className:B.a.productGrid},void 0,s()(C.map(function(e,o){var a=f()(e,"href")?Object(fe.n)(e.href,v):void 0;return m?xe(Be,{title:"Loading..","data-react-ds-adoption":!0},"product-swiper-card-".concat(o)):xe(re.a,{onChange:function(e){return n=t,a=e,i=o,k(I.map(function(e,t){return t===i?a:e})),void(!m&&n&&h&&ce()(h,100));var n,a,i},className:B.a.productCard,"data-react-ds-adoption":!0},"slide_".concat(o),xe(le.b,{product:he(he({},e),{},{href:a}),intl:n,showMatureContent:r,showStrikethroughPricing:c,loading:m,onClick:function(){p({product:e,idx:o,url:e.href})}},"product-swiper-card-".concat(o)))}),["Box","Divider","Text","Stack"]))))})};Oe.displayName="ProductRecommendationsGrid",Oe.propTypes={inventoryItemId:j.a.string,intl:ge.b.isRequired,testId:j.a.string,showMatureContent:j.a.bool},Oe.defaultProps={inventoryItemId:null,testId:"",showMatureContent:!1};var je,Te,Se,Re,Me,Pe=Oe;function De(e,t,n,o){Me||(Me="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var a=e&&e.defaultProps,i=arguments.length-3;if(t||0===i||(t={children:void 0}),t&&a)for(var r in a)void 0===t[r]&&(t[r]=a[r]);else t||(t=a||{});if(1===i)t.children=o;else if(i>1){for(var s=new Array(i),c=0;c<i;c++)s[c]=arguments[c+3];t.children=s}return{$$typeof:Me,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function _e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],o=!0,a=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(o=(r=s.next()).done)&&(n.push(r.value),!t||n.length!==t);o=!0);}catch(c){a=!0,i=c}finally{try{o||null==s.return||s.return()}finally{if(a)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"BundleRecommendationsComponent",function(){return Le});var Ee=Object(l.defineMessages)({accessibleTitle:(je={id:"shared.components.BundleRecommendations.accessibleTitle"},Ne(je,"id","shared.components.BundleRecommendations.accessibleTitle"),Ne(je,"defaultMessage","Item summary"),je),title:(Te={id:"shared.components.BundleRecommendations.title"},Ne(Te,"id","shared.components.BundleRecommendations.title"),Ne(Te,"defaultMessage","It's in the cart!"),Te),viewCart:(Se={id:"shared.components.BundleRecommendations.viewCart"},Ne(Se,"id","shared.components.BundleRecommendations.viewCart"),Ne(Se,"defaultMessage","View cart"),Se),keepShopping:(Re={id:"shared.components.BundleRecommendations.keepShopping"},Ne(Re,"id","shared.components.BundleRecommendations.keepShopping"),Ne(Re,"defaultMessage","Keep shopping"),Re)}),Ae=De(w.a,{}),Le=function(e){var t=e.profile,n=e.intl,o=e.inventoryItem,i=e.work,r=Object(Z.b)(),c=r.bundleRecommendationsOpen,l=r.closeBundleRecommendations,u=Object(ee.a)().logEvent,m=Object(I.useSessionContext)().isBot,p=Object(te.b)().sendImpressions,w=Object(ae.a)(),k=w.fetchMessages,C=w.cartMessages,O=_e(Object(a.useState)(!1),2),j=O[0],T=O[1],S=f()(o,"gaCategory");Object(a.useEffect)(function(){c&&k()},[k,c]),Object(a.useEffect)(function(){j||(m||k(),T(!0))},[k,j,m]);var R=t===h.x,M=R?"m":"l",P=R?"xl":"xxxl",D=function(e){var t=e.componentName;u({analytics:X.w.productPageComponentShowed(t)})};Object(ne.a)(function(){p(X.v)});var _=De(J,{inventoryItem:o,work:i,profile:t,messages:C,"data-react-ds-adoption":!0}),N=De(ie.a,{messages:C,category:S,"data-react-ds-adoption":!0});return De(b.a,{accessibleTitle:n.formatMessage(Ee.accessibleTitle),from:R?h.a:h.F,size:R?h.u:h.G,fit:!R,open:c,onCloseRequested:l,allowClicksOutsideWhenActive:!0},void 0,s()(function(e){var t,a=e.close;return De(y.a,{className:d()(B.a.bundleRecommendations,(t={},Ne(t,B.a.desktop,!R),Ne(t,B.a.mobile,R),t)),padding:M,paddingTop:P},void 0,De(y.a,{className:B.a.close,padding:M},void 0,De(v.a,{id:"close-button-item-summary-drawer",strong:!0,size:h.G,circle:!0,iconBefore:Ae,onClick:a})),De(y.a,{paddingBottom:"s"},void 0,De(g.a,{type:"display2"},void 0,s()(n.formatMessage(Ee.title),["Box","Button","Text","Drawer","constants","CloseIcon","Stack"]))),_,s()(!R&&De(x.a,{spacing:"s",paddingTop:"m","data-testid":"navigation-stack"},void 0,De(v.a,{size:h.u,strong:!0,intent:h.z,fluid:!0,href:"/cart",onClick:function(){return u({analytics:X.w.ATCDrawerCartViewed()})}},void 0,s()(n.formatMessage(Ee.viewCart),["Box","Button","Text","Drawer","constants","CloseIcon","Stack"])),De(v.a,{size:h.u,fluid:!0,onClick:a},void 0,s()(n.formatMessage(Ee.keepShopping),["Box","Button","Text","Drawer","constants","CloseIcon","Stack"]))),["Box","Button","Text","Drawer","constants","CloseIcon","Stack"]),N,De(y.a,{className:d()(Ne({},B.a.desktop,!R))},void 0,De(Q.a,{category:X.v,component:X.d,customLabel:X.c,isEnhancedEcommerceEnabled:!0,isCarouselUUIDEnabled:!0,"data-react-ds-adoption":!0},void 0,De(Y.a,{component:X.d},void 0,De(H.a,{onFirstView:D,componentName:X.d},void 0,De(Pe,{intl:n,inventoryItemId:f()(o,"id")}))))))},["Box","Button","Text","Drawer","constants","CloseIcon","Stack"]))};t.default=Object(m.d)(u.c,oe.a)(Le)}}]);
//# sourceMappingURL=bundle_recommendations-c06f8bce8c3502e27cdb.js.map