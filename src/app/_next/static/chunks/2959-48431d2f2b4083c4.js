(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2959],{2959:function(e,r,t){"use strict";t.d(r,{T_:function(){return f},Iw:function(){return H}});var n,a=t(42288),o=t(38527);let i=e=>({loadingState:o.Gui.RESOLVE,uid:e.uid,login:e.login,avatarId:e.avatarId,hasPlus:e.hasPlus,publicId:e.publicId,publicName:e.publicName,isChild:e.isChild}),s=e=>(0,a.pj)({loadingState:o.Gui.RESOLVE,showWizard:!e.wizardIsPassed,userCollectionHue:e.userCollectionHue}),l=a.V5.model("Account",{loadingState:a.V5.enumeration(Object.values(o.Gui)),uid:a.V5.maybe(a.V5.number),hasPlus:a.V5.maybe(a.V5.boolean),login:a.V5.maybe(a.V5.string),avatarId:a.V5.maybe(a.V5.string),isChild:a.V5.maybe(a.V5.boolean),publicId:a.V5.maybe(a.V5.string),publicName:a.V5.maybe(a.V5.string)}),c=a.V5.model("Settings",{loadingState:a.V5.enumeration(Object.values(o.Gui)),showWizard:a.V5.boolean,userCollectionHue:a.V5.maybe(a.V5.number)}),f=a.V5.model("User",{account:l,settings:c,userCollectionHue:a.V5.maybe(a.V5.number)}).views(e=>({get isAuthorized(){return!!e.account.uid},get hasPlus(){return!!e.account.hasPlus},get isChild(){return!!e.account.isChild},get puid(){return e.account.uid},get collectionHue(){return e.userCollectionHue||e.settings.userCollectionHue}})).actions(e=>({getAbout:(0,a.ls)(function*(){let{accountResource:r,modelActionsLogger:t}=(0,a.dU)(e);if(e.account.loadingState!==o.Gui.PENDING)try{e.account.loadingState=o.Gui.PENDING;let t=yield r.about();e.account=i(t),e.account.loadingState=o.Gui.RESOLVE}catch(r){t.error(r),e.account.loadingState=o.Gui.REJECT}}),getSettings:(0,a.ls)(function*(){let{accountResource:r,modelActionsLogger:t}=(0,a.dU)(e);if(e.settings.loadingState!==o.Gui.PENDING)try{e.settings.loadingState=o.Gui.PENDING;let t=yield r.settings();e.settings=s(t)}catch(r){t.error(r),e.settings.showWizard=!1,e.settings.loadingState=o.Gui.REJECT}}),setUnauthorized:()=>{e.account.loadingState=o.Gui.RESOLVE},setUserCollectionHue:r=>{e.userCollectionHue=r}}));var u=t(9753),d=t(72344),p=t(60836),x=t(9544),m=t(98639),g=t.t(m,2),v=t(31014),y=t(45919),k={5881:(e,r,t)=>{function n(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=function e(r){var t,n,a="";if("string"==typeof r||"number"==typeof r)a+=r;else if("object"==typeof r){if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(n=e(r[t]))&&(a&&(a+=" "),a+=n);else for(t in r)r[t]&&(a&&(a+=" "),a+=t)}return a}(e))&&(n&&(n+=" "),n+=r);return n}t.r(r),t.d(r,{clsx:()=>n,default:()=>a});let a=n},5929:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root_size_xxxs:"Rkdd2vKC_3xa1eUdRdHP",root_size_xxs:"l3tE1hAMmBj2aoPPwU08",root_size_xs:"UwnL5AJBMMAp6NwMDdZk",root_size_s:"DzJFnuf7XgdkFh28JAsM",root_size_m:"o_v2ds2BaqtzAsRuCVjw",root_size_l:"YjRa1ZjM_lXFlrfS7jcu",root_size_xl:"Seq0GowcqQmiA9LdLP_g",root_size_xxl:"mfy69_BvBIamD0e22rCQ"}},6806:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root:"mdbxU6IWInQTsVjwnapn",text:"Cl_DNqTqaeGRXa9FZpOO",icon:"WMUZ6rmDKcZuPFMkQwf6"}},390:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root_controls_xxs:"tRaaBpDMg9Qu8v6gKjtn",root_entity_xxs:"M9zvtlcpLUVn6DKdcHhj",root_text_xxs:"ln0PYYwDmFnfYxCDJsFU",root_controls_xs:"n5AeWEsJC3_AYXcbK4Lt",root_entity_xs:"__hrMKGmNbw54T54IUyh",root_text_xs:"SehSa7OyRpC2nzYTVb2Q",root_controls_s:"_oBLf5gprWsKjCw4Ce58",root_entity_s:"mxSPe5xpZnie9gpIqacd",root_text_s:"Ai2iRN9elHpk_u5splD6",root_controls_m:"tk7ahHRDYXJMMB879KUA",root_entity_m:"Z_WIr2W8JU4MPQek3hgR",root_text_m:"g3qWNP6xl__7qxNmtrvd",root_controls_l:"grvxapJE3vGArOKDWf6n",root_entity_l:"Esj5A1UeSi4xV4tZ839D",root_text_l:"V3WU123oO65AxsprotU9",root_weight_normal:"ZYV27jeWd30QDXu4GhaH",root_weight_medium:"_3_Mxw7Si7j2g4kWjlpR",root_weight_bold:"Vi7Rd0SZWqD17F0872TB"}},8544:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root_size_xs:"qJJ288377iHlWN_RXeEE",root_size_s:"_sd8Q9d_Ttn0Ufe4ISWS",root_size_m:"Ctk8dbecq31Qh7isOJPQ",root_size_l:"M_Djh6ppIkCO3A2k_BTA",root_size_xl:"dtxlzGQMPAbM2MEndXWX",root_size_xxl:"IUb9XLplTAoZqne9rNUL",root_size_xxxl:"ZYZamUwql_rfFR4RpI2B",root_size_xxxxl:"ZBZyxow5njdq8z5dnRPY",root_size_xxxxxl:"WdvQQNwdDNCdRSwRkAtT",root_weight_bold:"nSU6fV9y80WrZEfafvww",root_weight_black:"KBeGPPK4DinQzAP41Y_N"}},2524:(e,r,t)=>{t.r(r),t.d(r,{default:()=>n});let n={root:"_MWOVuZRvUQdXKTMcOPx",root_clamp:"LezmJlldtbHWqU7l1950",root_clamp_oneline:"oyQL2RSmoNbNQf3Vc6YI",root_clamp_multiline:"jMyoZB5J9iZbzJmWOrF0"}},6161:(e,r,t)=>{/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(810),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,f=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(f=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:a,type:e,key:c,ref:f,props:o,_owner:s.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},9541:(e,r,t)=>{e.exports=t(6161)},5695:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"add",xlinkHref:"#add"})])})},9800:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"addToPlaylist",xlinkHref:"#addToPlaylist"})])})},2751:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"adult",xlinkHref:"#adult"})])})},383:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"album",xlinkHref:"#album"})])})},758:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"arrowDown",xlinkHref:"#arrowDown"})])})},9466:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"arrowLeft",xlinkHref:"#arrowLeft"})])})},9032:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"arrowRight",xlinkHref:"#arrowRight"})])})},7294:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"artist",xlinkHref:"#artist"})])})},8409:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"attention",xlinkHref:"#attention"})])})},1261:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"bookmateBadge",xlinkHref:"#bookmateBadge"})])})},8557:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"bookmateLogo",xlinkHref:"#bookmateLogo"})])})},1478:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"bucket",xlinkHref:"#bucket"})])})},849:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"cast",xlinkHref:"#cast"})])})},3781:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chain",xlinkHref:"#chain"})])})},5951:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartDown",xlinkHref:"#chartDown"})])})},7203:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartNew",xlinkHref:"#chartNew"})])})},8688:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartSame",xlinkHref:"#chartSame"})])})},4653:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"chartUp",xlinkHref:"#chartUp"})])})},2966:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"check",xlinkHref:"#check"})])})},5849:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"close",xlinkHref:"#close"})])})},5972:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"collections",xlinkHref:"#collections"})])})},6631:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"collections_selected",xlinkHref:"#collections_selected"})])})},2703:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"dislike",xlinkHref:"#dislike"})])})},3514:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"disliked",xlinkHref:"#disliked"})])})},957:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"donation",xlinkHref:"#donation"})])})},3342:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"dragDots",xlinkHref:"#dragDots"})])})},7431:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"explicit",xlinkHref:"#explicit"})])})},2900:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"filter",xlinkHref:"#filter"})])})},7299:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"fullscreen",xlinkHref:"#fullscreen"})])})},2272:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"history",xlinkHref:"#history"})])})},533:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"home",xlinkHref:"#home"})])})},8005:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"home_selected",xlinkHref:"#home_selected"})])})},3687:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"info",xlinkHref:"#info"})])})},7261:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"kids",xlinkHref:"#kids"})])})},2646:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"kinopoiskEn",xlinkHref:"#kinopoiskEn"})])})},3171:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"kinopoiskRu",xlinkHref:"#kinopoiskRu"})])})},5494:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"lightning",xlinkHref:"#lightning"})])})},6334:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"like",xlinkHref:"#like"})])})},4973:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"likeVariant",xlinkHref:"#likeVariant"})])})},9165:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"liked",xlinkHref:"#liked"})])})},1936:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"likedVariant",xlinkHref:"#likedVariant"})])})},5517:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"link",xlinkHref:"#link"})])})},6685:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"lock",xlinkHref:"#lock"})])})},8274:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"lyrics",xlinkHref:"#lyrics"})])})},6094:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"menuArrow",xlinkHref:"#menuArrow"})])})},3974:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"more",xlinkHref:"#more"})])})},2502:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicLogo",xlinkHref:"#musicLogo"})])})},1754:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicLogoCenterEn",xlinkHref:"#musicLogoCenterEn"})])})},6615:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicLogoCenterRu",xlinkHref:"#musicLogoCenterRu"})])})},7942:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicLogoLeftEn",xlinkHref:"#musicLogoLeftEn"})])})},1498:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"musicLogoLeftRu",xlinkHref:"#musicLogoLeftRu"})])})},9473:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"next",xlinkHref:"#next"})])})},5985:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"non_music",xlinkHref:"#non_music"})])})},8749:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"note",xlinkHref:"#note"})])})},4947:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pause",xlinkHref:"#pause"})])})},243:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pauseVibe",xlinkHref:"#pauseVibe"})])})},1687:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pause_filled",xlinkHref:"#pause_filled"})])})},2761:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pencil",xlinkHref:"#pencil"})])})},9817:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pin",xlinkHref:"#pin"})])})},6515:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"pin_filled",xlinkHref:"#pin_filled"})])})},7471:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"play",xlinkHref:"#play"})])})},3133:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"playLast",xlinkHref:"#playLast"})])})},1514:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"playNext",xlinkHref:"#playNext"})])})},5801:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"playQueue",xlinkHref:"#playQueue"})])})},6684:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"playVibe",xlinkHref:"#playVibe"})])})},9319:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"play_filled",xlinkHref:"#play_filled"})])})},8602:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"playlist",xlinkHref:"#playlist"})])})},8861:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"plus",xlinkHref:"#plus"})])})},1179:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"plusOutlined",xlinkHref:"#plusOutlined"})])})},6532:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"podcasts",xlinkHref:"#podcasts"})])})},7918:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"previous",xlinkHref:"#previous"})])})},7692:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"repeat",xlinkHref:"#repeat"})])})},7881:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"repeat_one",xlinkHref:"#repeat_one"})])})},2339:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"reset",xlinkHref:"#reset"})])})},7954:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"search",xlinkHref:"#search"})])})},6178:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"search_selected",xlinkHref:"#search_selected"})])})},200:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"settings",xlinkHref:"#settings"})])})},9109:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"share",xlinkHref:"#share"})])})},4521:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"shuffle",xlinkHref:"#shuffle"})])})},3013:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1_25x",xlinkHref:"#speed_1_25x"})])})},1937:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1_5x",xlinkHref:"#speed_1_5x"})])})},4576:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1_75x",xlinkHref:"#speed_1_75x"})])})},7163:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_1x",xlinkHref:"#speed_1x"})])})},4717:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"speed_2x",xlinkHref:"#speed_2x"})])})},9298:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"syncLyrics",xlinkHref:"#syncLyrics"})])})},6539:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"trailer",xlinkHref:"#trailer"})])})},6029:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"unavailable",xlinkHref:"#unavailable"})])})},5312:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"unpin",xlinkHref:"#unpin"})])})},3993:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"users",xlinkHref:"#users"})])})},5730:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"vibe",xlinkHref:"#vibe"})])})},631:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"volume",xlinkHref:"#volume"})])})},4689:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"volumeOff",xlinkHref:"#volumeOff"})])})},5667:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"yandexPlusEn",xlinkHref:"#yandexPlusEn"})])})},2639:(e,r,t)=>{var n=t(810);e.exports=n.forwardRef(function(e,r){return n.createElement("svg",Object.assign({},e,{ref:r}),[n.createElement("use",{key:"yandexPlusRu",xlinkHref:"#yandexPlusRu"})])})},5189:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Icon=r.IconComponent=void 0;let a=t(9541),o=t(810),i=t(5881),s=t(5151),l=t(4905),c=n(t(5929));r.IconComponent=e=>{let{"aria-label":r,className:t,focusable:n=!1,variant:o,size:f,forwardRef:u,...d}=e,p=s.iconsCollection[o];return(0,a.jsx)(p,{className:(0,i.clsx)(c.default.root,t,c.default["root_size_".concat(f)]),focusable:n,"aria-label":r,...d,"aria-hidden":!r,ref:u,style:{...d.style||{},padding:l.paddings[o]}})},r.Icon=(0,o.forwardRef)((e,t)=>(0,a.jsx)(r.IconComponent,{forwardRef:t,...e}))},5151:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.iconsCollection=void 0;let a=n(t(5695)),o=n(t(9800)),i=n(t(2751)),s=n(t(383)),l=n(t(758)),c=n(t(9466)),f=n(t(9032)),u=n(t(7294)),d=n(t(8409)),p=n(t(1261)),x=n(t(8557)),m=n(t(1478)),g=n(t(849)),v=n(t(3781)),y=n(t(5951)),k=n(t(7203)),_=n(t(8688)),E=n(t(4653)),b=n(t(2966)),w=n(t(5849)),h=n(t(6631)),R=n(t(5972)),j=n(t(2703)),O=n(t(3514)),H=n(t(3342)),P=n(t(957)),C=n(t(7431)),L=n(t(2900)),N=n(t(7299)),V=n(t(3687)),S=n(t(2272)),U=n(t(8005)),D=n(t(533)),z=n(t(7261)),I=n(t(2646)),M=n(t(3171)),T=n(t(5494)),W=n(t(6334)),A=n(t(9165)),B=n(t(1936)),G=n(t(4973)),Q=n(t(5517)),Z=n(t(6685)),J=n(t(8274)),q=n(t(6094)),F=n(t(3974)),X=n(t(2502)),K=n(t(1754)),Y=n(t(6615)),$=n(t(7942)),ee=n(t(1498)),er=n(t(9473)),et=n(t(5985)),en=n(t(8749)),ea=n(t(1687)),eo=n(t(4947)),ei=n(t(243)),es=n(t(2761)),el=n(t(6515)),ec=n(t(9817)),ef=n(t(9319)),eu=n(t(7471)),ed=n(t(3133)),ep=n(t(8602)),ex=n(t(1514)),em=n(t(5801)),eg=n(t(6684)),ev=n(t(8861)),ey=n(t(1179)),ek=n(t(6532)),e_=n(t(7918)),eE=n(t(7881)),eb=n(t(7692)),ew=n(t(2339)),eh=n(t(7954)),eR=n(t(6178)),ej=n(t(200)),eO=n(t(9109)),eH=n(t(4521)),eP=n(t(7163)),eC=n(t(3013)),eL=n(t(1937)),eN=n(t(4576)),eV=n(t(4717)),eS=n(t(9298)),eU=n(t(6539)),eD=n(t(6029)),ez=n(t(5312)),eI=n(t(3993)),eM=n(t(5730)),eT=n(t(631)),eW=n(t(4689)),eA=n(t(5667)),eB=n(t(2639));r.iconsCollection={add:a.default,addToPlaylist:o.default,adult:i.default,album:s.default,arrowDown:l.default,arrowLeft:c.default,arrowRight:f.default,artist:u.default,attention:d.default,bookmateBadge:p.default,bookmateLogo:x.default,bucket:m.default,cast:g.default,chain:v.default,chartDown:y.default,chartNew:k.default,chartSame:_.default,chartUp:E.default,check:b.default,close:w.default,collections_selected:h.default,collections:R.default,dislike:j.default,disliked:O.default,dragDots:H.default,donation:P.default,explicit:C.default,filter:L.default,fullscreen:N.default,history:S.default,home_selected:U.default,home:D.default,info:V.default,kids:z.default,kinopoiskEn:I.default,kinopoiskRu:M.default,lightning:T.default,like:W.default,liked:A.default,likedVariant:B.default,likeVariant:G.default,link:Q.default,lock:Z.default,lyrics:J.default,menuArrow:q.default,more:F.default,musicLogo:X.default,musicLogoCenterEn:K.default,musicLogoCenterRu:Y.default,musicLogoLeftEn:$.default,musicLogoLeftRu:ee.default,next:er.default,non_music:et.default,note:en.default,pause_filled:ea.default,pause:eo.default,pauseVibe:ei.default,pencil:es.default,pin_filled:el.default,pin:ec.default,play_filled:ef.default,play:eu.default,playLast:ed.default,playlist:ep.default,playNext:ex.default,playQueue:em.default,playVibe:eg.default,plus:ev.default,plusOutlined:ey.default,podcasts:ek.default,previous:e_.default,repeat_one:eE.default,repeat:eb.default,reset:ew.default,search:eh.default,search_selected:eR.default,settings:ej.default,share:eO.default,shuffle:eH.default,speed_1x:eP.default,speed_1_25x:eC.default,speed_1_5x:eL.default,speed_1_75x:eN.default,speed_2x:eV.default,syncLyrics:eS.default,trailer:eU.default,unavailable:eD.default,unpin:ez.default,users:eI.default,vibe:eM.default,volume:eT.default,volumeOff:eW.default,yandexPlusEn:eA.default,yandexPlusRu:eB.default}},7066:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Icon=void 0;var n=t(5189);Object.defineProperty(r,"Icon",{enumerable:!0,get:function(){return n.Icon}})},4905:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.paddings=void 0,r.paddings={add:"var(--ym-icon-padding, 2px)",addToPlaylist:"var(--ym-icon-padding, 2px, 2px, 2px, 2px)",adult:"var(--ym-icon-padding)",album:"var(--ym-icon-padding, 1px)",arrowDown:"var(--ym-icon-padding, 8px 4px 5px)",arrowLeft:"var(--ym-icon-padding, 5px 8px 4px 6px)",arrowRight:"var(--ym-icon-padding, 5px 7px 4px 7px)",artist:"var(--ym-icon-padding, 1px 0)",attention:"var(--ym-icon-padding, 2px)",bookmateBadge:"var(--ym-icon-padding)",bookmateLogo:"var(--ym-icon-padding)",bucket:"var(--ym-icon-padding, 1px)",cast:"var(--ym-icon-padding, 3px 1px 2px 1px)",chain:"var(--ym-icon-padding, 2px)",chartDown:"var(--ym-icon-padding, 7px 4px 6px 4px)",chartNew:"var(--ym-icon-padding)",chartSame:"var(--ym-icon-padding, 8px 5px 9px 6px)",chartUp:"var(--ym-icon-padding, 6px 4px 6px 5px)",check:"var(--ym-icon-padding, 4px 0 4px 4px)",close:"var(--ym-icon-padding, 6px)",collections_selected:"var(--ym-icon-padding, 5px 4px 5px 5px)",collections:"var(--ym-icon-padding, 5px 4px 5px 5px)",dislike:"var(--ym-icon-padding, 2px 1px 3px 1px)",disliked:"var(--ym-icon-padding, 2px 1px 3px 1px)",dragDots:"var(--ym-icon-padding)",donation:"var(--ym-icon-padding, 0px 1px 0px 0px)",explicit:"var(--ym-icon-padding)",filter:"var(--ym-icon-padding, 6px 4px 6px 4px)",fullscreen:"var(--ym-icon-padding, 4px)",history:"var(--ym-icon-padding, 2px)",home_selected:"var(--ym-icon-padding, 4px 5px 5px 4px)",home:"var(--ym-icon-padding, 4px 5px 5px 4px)",info:"var(--ym-icon-padding)",kids:"var(--ym-icon-padding, 6px)",kinopoiskEn:"var(--ym-icon-padding)",kinopoiskRu:"var(--ym-icon-padding)",lightning:"var(--ym-icon-padding, 3px 6px 3px 6px)",like:"var(--ym-icon-padding, 3px 2px 3px 2px)",liked:"var(--ym-icon-padding, 2px 1px 2px 2px)",likedVariant:"var(--ym-icon-padding, 5px 6px 6px 0)",likeVariant:"var(--ym-icon-padding, 5px 6px 6px 0)",link:"var(--ym-icon-padding)",lock:"var(--ym-icon-padding, 2px)",lyrics:"var(--ym-icon-padding, 3px 2px)",menuArrow:"var(--ym-icon-padding, 5px 7px 4px 7px)",more:"var(--ym-icon-padding, 8px 2px 8px 1px)",musicLogo:"var(--ym-icon-padding, 0)",musicLogoCenterEn:"var(--ym-icon-padding, 0)",musicLogoCenterRu:"var(--ym-icon-padding, 0)",musicLogoLeftEn:"var(--ym-icon-padding, 0)",musicLogoLeftRu:"var(--ym-icon-padding, 0)",next:"var(--ym-icon-padding, 4px)",non_music:"var(--ym-icon-padding, 4px 5px 5px 4px)",note:"var(--ym-icon-padding, 4px 7px 2px 5px)",pause_filled:"var(--ym-icon-padding)",pause:"var(--ym-icon-padding, 4px 6px)",pauseVibe:"var(--ym-icon-padding, 2px 4px 4px 8px)",pencil:"var(--ym-icon-padding, 4px)",pin_filled:"var(--ym-icon-padding, 2px 3px)",pin:"var(--ym-icon-padding, 2px 3px)",play_filled:"var(--ym-icon-padding)",play:"var(--ym-icon-padding, 3px 2px 3px 7px)",playLast:"var(--ym-icon-padding, 2px 3px 2px 3px)",playlist:"var(--ym-icon-padding, 2px)",playNext:"var(--ym-icon-padding, 2px 3px 2px 3px)",playQueue:"var(--ym-icon-padding, 5px 3px)",playVibe:"var(--ym-icon-padding, 0px 0px 1px 7px)",plus:"var(--ym-icon-padding, 3px)",plusOutlined:"var(--ym-icon-padding, 4px 4px 4px 5px)",podcasts:"var(--ym-icon-padding, 6px)",previous:"var(--ym-icon-padding, 4px)",repeat_one:"var(--ym-icon-padding, 3px 2px 3px 2px)",repeat:"var(--ym-icon-padding, 3px 2px 3px 2px)",reset:"var(--ym-icon-padding, 2px)",search:"var(--ym-icon-padding, 5px)",search_selected:"var(--ym-icon-padding, 5px)",settings:"var(--ym-icon-padding, 2px)",share:"var(--ym-icon-padding, 2px 1px 2px 1px)",shuffle:"var(--ym-icon-padding, 3px 1px 3px 2px)",speed_1x:"var(--ym-icon-padding)",speed_1_25x:"var(--ym-icon-padding)",speed_1_5x:"var(--ym-icon-padding)",speed_1_75x:"var(--ym-icon-padding)",speed_2x:"var(--ym-icon-padding)",syncLyrics:"var(--ym-icon-padding, 3px 2px 4px 2px)",trailer:"var(--ym-icon-padding, 2px 1px)",unavailable:"var(--ym-icon-padding, 2px)",unpin:"var(--ym-icon-padding, 2px 3px)",users:"var(--ym-icon-padding, 0)",vibe:"var(--ym-icon-padding, 1px 1px 2px 1px)",volume:"var(--ym-icon-padding, 4px 2px 3px 2px)",volumeOff:"var(--ym-icon-padding, 2.8px 2px 1.8px 2px)",yandexPlusEn:"var(--ym-icon-padding, 0)",yandexPlusRu:"var(--ym-icon-padding, 0)"}},1093:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.PlusBadge=void 0;let a=t(9541),o=t(5881),i=t(2582),s=t(7066),l=n(t(6806));r.PlusBadge=e=>{let{className:r,children:t}=e;return(0,a.jsxs)("div",{className:(0,o.clsx)(l.default.root,r),children:[(0,a.jsx)(s.Icon,{variant:"plus",size:"xxs",className:l.default.icon}),(0,a.jsx)(i.Caption,{variant:"div",type:"controls",weight:"medium",size:"m",className:l.default.text,children:t})]})}},7743:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Caption=r.CaptionComponent=void 0;let a=t(9541),o=t(5881),i=t(810),s=t(4721),l=n(t(390));function c(e){let{forwardRef:r,variant:t,type:n="text",size:i="s",className:c,children:f,weight:u="medium",...d}=e;return(0,a.jsx)(s.Typography,{variant:t,ref:r,className:(0,o.clsx)(l.default.root,l.default["root_".concat(n,"_").concat(i)],l.default["root_weight_".concat(u)],c),...d,children:f})}r.CaptionComponent=c,r.Caption=(0,i.forwardRef)((e,r)=>(0,a.jsx)(c,{forwardRef:r,...e}))},404:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Heading=r.HeadingComponent=void 0;let a=t(9541),o=t(5881),i=t(810),s=t(4721),l=n(t(8544));r.HeadingComponent=e=>{let{forwardRef:r,variant:t,weight:n="bold",size:i="s",className:c,children:f,...u}=e;return(0,a.jsx)(s.Typography,{variant:t,ref:r,className:(0,o.clsx)(l.default.root,l.default["root_size_".concat(i)],l.default["root_weight_".concat(n)],c),...u,children:f})},r.Heading=(0,i.forwardRef)((e,t)=>(0,a.jsx)(r.HeadingComponent,{forwardRef:t,...e}))},4721:function(e,r,t){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.Typography=r.TypographyComponent=void 0;let a=t(9541),o=t(5881),i=t(810),s=n(t(2524));function l(e){let{forwardRef:r,style:t,className:n,children:i,variant:l,lineClamp:c,...f}=e,u=c&&"string"==typeof i?i:void 0;return(0,a.jsx)(l,{style:{...t,WebkitLineClamp:c},ref:r,title:u,className:(0,o.clsx)(s.default.root,{[s.default.root_clamp]:c&&c>0,[s.default.root_clamp_oneline]:c&&1===c,[s.default.root_clamp_multiline]:c&&c>1},n),...f,children:i})}r.TypographyComponent=l,r.Typography=(0,i.forwardRef)((e,r)=>(0,a.jsx)(l,{forwardRef:r,...e}))},2582:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.Heading=r.Caption=void 0;var n=t(7743);Object.defineProperty(r,"Caption",{enumerable:!0,get:function(){return n.Caption}});var a=t(404);Object.defineProperty(r,"Heading",{enumerable:!0,get:function(){return a.Heading}})},810:e=>{e.exports=g}},_={};function E(e){var r=_[e];if(void 0!==r)return r.exports;var t=_[e]={exports:{}};return k[e].call(t.exports,t,t.exports,E),t.exports}E.d=(e,r)=>{for(var t in r)E.o(r,t)&&!E.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},E.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),E.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var b={};Object.defineProperty(b,"X",{value:!0}),b.R=void 0,n=E(1093),Object.defineProperty(b,"R",{enumerable:!0,get:function(){return n.PlusBadge}});var w=b.R;b.X;var h=t(2570),R=t(3084),j=t(15136),O=t.n(j);let H=(0,x.Pi)(e=>{let{className:r,variant:t="desktop",withMeta:n,metaClassName:a,usernameClassName:i}=e,{user:s,location:l,experiments:c,settings:f}=(0,o.oR4)(),x=(0,o.ozu)(),{theme:g,setTheme:k}=(0,o.FgM)(),_=(0,o.uK4)(),E=_.get(o.V0J),b=_.get(o.U5t),j=_.get(o.xit),{oldWebHost:H,passportCredentials:{origin:P}}=b,C=(0,o.yyu)(H),L=(0,m.useRef)(null),[N,V]=(0,m.useState)(E.get(o.BUb.Theme)),S=(0,o.s0h)("/settings"),{language:U,setLanguage:D,availableLanguages:z}=(0,o.ZSk)(),I=true,M=(c.checkExperiment(o.peG.WebPreferredDesign,"new")||c.checkExperiment(o.peG.WebPreferredDesign,"oldnew"),(0,y.d8)({entrypoint:"web_desktop"})),T=(0,m.useMemo)(()=>{switch(f.platform){case o.t4T.WINDOWS:return"windows_music";case o.t4T.MACOS:return"mac_music";default:return""}},[f.platform]),W=(0,m.useCallback)(e=>{(0,o.kzC)(e),E.set(o.BUb.Theme,e,{expires:180}),e===o.rLu?k(x):k(e),V(E.get(o.BUb.Theme))},[x,k,E]);(0,m.useEffect)(()=>{I||(E.set(o.BUb.EnableChangingLanguage,"off"),E.remove(o.BUb.SavedUserLanguage))},[E,I]);let A=(0,m.useCallback)(e=>{E.set(o.BUb.EnableChangingLanguage,"on"),D(e)},[D,E]),B=(0,m.useCallback)(()=>{},[!0,C]);(0,m.useEffect)(()=>{L.current&&(L.current.className=O().iframe)},[L]);let G=(0,m.useCallback)((e,r,t)=>{"settings"===e&&(null==t||t.onClose(),S())},[S]);return(0,u.jsx)("div",{className:(0,p.W)(O().root,r),children:s.isAuthorized?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.User,{className:O().userId,platform:"desktop"===t?"desktop":"touch",userData:{plus:s.hasPlus,avatarId:s.account.avatarId},theme:N||o.Q2A.Dark,colorScheme:g,onThemeChange:W,onLocaleChange:A,project:"music",queryParams:{"music.locales":I?z.join():"",l10n:U,"music.showSettings":"1","music.chatContext":M,"music.chatUtmSource":T,"music.showBackToOldDesign":"0",target:"_blank",origin:P},env:"prod",avatarSize:"desktop"===t?34:26,dialogClassName:(0,p.W)(O().dialog,O()["dialog_".concat(t)]),retpath:l.href,iframeRef:L,onMenuItemClick:G,rpcHandlers:{setOldDesign:B},preload:!0,tld:l.tld}),n&&(0,u.jsxs)("div",{className:(0,p.W)(O().meta,a),children:[(0,u.jsx)(h.Caption,{variant:"div",type:"controls",size:"m",weight:"medium",className:(0,p.W)(O().userName,i),lineClamp:1,children:s.account.publicName||s.account.login}),s.hasPlus&&(0,u.jsx)(R.rU,{href:"https://plus.yandex.".concat(l.tld,"/"),target:"_blank",className:O().plusLink,children:(0,u.jsx)(w,{children:(0,u.jsx)(v.Z,{id:"sidebar.plus-badge"})})})]})]}):(0,u.jsx)("a",{href:j.authorizationUrl,className:O().login,children:"Login"})})})},15136:function(e){e.exports={root:"UserProfile_root__vFuOj",userId:"UserProfile_userId__Jb6Ix",login:"UserProfile_login__maucB",dialog:"UserProfile_dialog__kQ8sz",dialog_desktop:"UserProfile_dialog_desktop__0p006",iframe:"UserProfile_iframe__nF7OX",meta:"UserProfile_meta___okny",plusLink:"UserProfile_plusLink__NhVsU",userName:"UserProfile_userName__PTRuJ"}}}]);