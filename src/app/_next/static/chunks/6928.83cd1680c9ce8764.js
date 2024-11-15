"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6928,8230,5279,6663,7120],{28230:function(t,e,n){n.d(e,{config:function(){return c}});var o=n(182),r=n(21535);let a=()=>({rumId:"ru.music.frontend",project:"music.frontend.desktop",service:"frontend-desktop",platform:"desktop"}),i=()=>({project:"music.frontend.desktop",platform:"desktop"}),c=()=>{var t,e;return{client:"YandexMusicWeb/1.0",dev:{panel: window.IS_DEVTOOLS_ENABLED ?? !1,allowOverwriteExperiments: window.IS_DEVTOOLS_ENABLED ?? !1},logger:{uaDisabled:t=!!r.env.SERVER_UNIFIED_AGENT_DISABLED,uaServerAddress:null!==(e=r.env.SERVER_UNIFIED_AGENT_ADDRESS)&&void 0!==e?e:"http://localhost:12344",errorBooster:{...i(),page:"window.location.pathname",version:r.env.APP_VERSION||"",environment:"production",unhandledRejection:!0,uncaughtException:!0,resourceFails:!0}},oauthCredentials:{host:"https://oauth.yandex.".concat(o.M),clientId:"97fe03033fa34407ac9bcf91d5afed5b"},tvm:{tvmtoolAuthToken:r.env.TVMTOOL_LOCAL_AUTHTOKEN,self:"music_test",destinations:["blackbox"],host:"http://localhost:8001",enabled:!1},rumSettings:{...a(),page:"window.location.pathname",heroElement:"body",version:r.env.APP_VERSION||"",environment:"production"},passportCredentials:{host:"https://passport.yandex.".concat(o.M),origin:"music_desktop"},blackbox:{host:"http://blackbox.envoy.localhost:9080",enabled:!1},payment:{environment:"testing"},i18n:{cookieExpirationDays:365},ynisonConnectionConfig:{ynisonHost:"ynison.music.yandex.ru",redirectorPath:"/redirector.YnisonRedirectService/GetRedirectToYnison",hubConnectioPath:"/ynison_state.YnisonStateService/PutYnisonState",reconnectTimeout:2e3,reconnectAttempts:2},player:{configVariablesMainPlayback:{checkForLoadWindowSize:1,loadWindowSize:5,mediaSourceTtlMs:216e5,mediaElementErrorReloadCount:2,windowSize:30,setupQueueWindowSize:80},configVariablesTrailerPlayback:{mediaElementErrorReloadCount:2,windowSize:30,setupQueueWindowSize:80,storePlaysProgressIntervalMs:5e3}}}}},26928:function(t,e,n){n.d(e,{config:function(){return p}});var o=n(82110),r=n(44539),a=n(36343),i=n(54319),c=n(182),s=n(28230),u=n(15279),l=n(9774),f=n(98537),d=n(21535);let p=()=>{let t=d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND?"https://api.music.yandex.ru":"https://api.music.qa.yandex.net",e=d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND?"https://api.music.yandex.".concat(c.M):"https://api.music.qa.yandex.".concat(c.M);return(0,o.Z)((0,s.config)(),{resources:{musicExternalApi:{gateway:{prefixUrl:(0,f.s)(t)},externalGateway:{prefixUrl:(0,f.s)(e)},retryPolicyConfig:u.c,defaultTimeout:a.ys,timeouts:a.mZ}},player:{overembed:!1,secretKey:(0,i.S)(),externalDomain:"localhost.music.yandex.ru",gateway:{prefixUrl:e}},dev:{panel:!0,allowOverwriteExperiments:!0},tvm:{enabled:!0,destinations:["blackbox"],...(0,r.sw)(d.env.USE_QYP_TVM)?{host:"http://local-music-dev.vla.yp-c.yandex.net/tvm"}:{}},passportCredentials:{host:"https://passport.yandex.".concat(c.M),origin:"music_desktop"},blackbox:{host:"http://local-music-dev.vla.yp-c.yandex.net/bbm/blackbox",enabled:!0},oldWebHost:d.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND?"music.yandex.".concat(c.M):"music.qa.yandex.".concat(c.M),afisha:{clientId:(0,l.$)(),host:"https://widget.afisha.yandex.ru"},features:{nonMusic:!0}})}},15279:function(t,e,n){n.d(e,{c:function(){return o}});let o={statusCodes:{408:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},429:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},500:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},502:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},503:{retryPolicy:"constant-backoff",attempts:[1e3,3e3]},504:{retryPolicy:"constant-backoff",attempts:[2e3,5e3]},NON_HTTP_ERROR:{retryPolicy:"constant-backoff",attempts:[1e3,1e3]},TIMEOUT:{retryPolicy:"constant-backoff",attempts:[500]}},totalRequestsLimit:3}},9774:function(t,e,n){n.d(e,{$:function(){return c}});var o=n(11098),r=n(94188),a=n(95730);let i={MACOS:"05c45ae8-b869-4ec1-848c-4b314fbadc17",WINDOWS:"0d8ab1a6-1667-42cb-a98f-2fe7eff4b137",WEB:"b200fd55-5a52-4fa2-b5db-d163e986a61d"},c=()=>{switch((0,r.y)((0,o.X)())){case a.B.MACOS:return i.MACOS;case a.B.WINDOWS:return i.WINDOWS}return i.WEB}},98537:function(t,e,n){n.d(e,{s:function(){return r}});var o=n(21535);let r=t=>{if(o.env.NEXT_PUBLIC_USE_BFF){var e;let t=null!==(e=o.env.NEXT_PUBLIC_BFF_HOST)&&void 0!==e?e:"";return"".concat(t,"/api")}return t}},75550:function(t,e,n){n.d(e,{Z:function(){return o}});var o=function(t,e,n){for(var o=-1,r=Object(t),a=n(t),i=a.length;i--;){var c=a[++o];if(!1===e(r[c],c,r))break}return t}},41049:function(t,e,n){n.d(e,{Z:function(){return d}});var o,r,a=n(60306),i=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},c=Math.max,s=n(86662),u=s.Z?function(t,e){return(0,s.Z)(t,"toString",{configurable:!0,enumerable:!1,value:function(){return e},writable:!0})}:a.Z,l=Date.now,f=(o=0,r=0,function(){var t=l(),e=16-(t-r);if(r=t,e>0){if(++o>=800)return arguments[0]}else o=0;return u.apply(void 0,arguments)}),d=function(t,e){var n,o;return f((n=e,o=a.Z,n=c(void 0===n?t.length-1:n,0),function(){for(var e=arguments,r=-1,a=c(e.length-n,0),s=Array(a);++r<a;)s[r]=e[n+r];r=-1;for(var u=Array(n+1);++r<n;)u[r]=e[r];return u[n]=o(s),i(t,this,u)}),t+"")}},60306:function(t,e){e.Z=function(t){return t}},40255:function(t,e,n){var o=n(63534),r=n(51870);e.Z=function(t){return(0,r.Z)(t)&&(0,o.Z)(t)}},82110:function(t,e,n){n.d(e,{Z:function(){return D}});var o,r=n(76859),a=n(29106),i=n(52899),c=function(t,e,n){(void 0===n||(0,i.Z)(t[e],n))&&(void 0!==n||e in t)||(0,a.Z)(t,e,n)},s=n(75550),u=n(81589),l=n(9459),f=n(74204),d=n(70255),p=n(90517),v=n(99349),y=n(40255),b=n(76929),m=n(2450),h=n(90071),_=n(85354),E=n(85538),Z=n(51870),S=Object.prototype,x=Function.prototype.toString,k=S.hasOwnProperty,P=x.call(Object),g=function(t){if(!(0,Z.Z)(t)||"[object Object]"!=(0,_.Z)(t))return!1;var e=(0,E.Z)(t);if(null===e)return!0;var n=k.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&x.call(n)==P},O=n(71655),w=function(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]},C=n(1706),T=n(98429),N=function(t,e,n,o,r,a,i){var s=w(t,n),_=w(e,n),E=i.get(_);if(E){c(t,n,E);return}var Z=a?a(s,_,n+"",t,e,i):void 0,S=void 0===Z;if(S){var x=(0,v.Z)(_),k=!x&&(0,b.Z)(_),P=!x&&!k&&(0,O.Z)(_);(Z=_,x||k||P)?(0,v.Z)(s)?Z=s:(0,y.Z)(s)?Z=(0,f.Z)(s):k?(S=!1,Z=(0,u.Z)(_,!0)):P?(S=!1,Z=(0,l.Z)(_,!0)):Z=[]:g(_)||(0,p.Z)(_)?(Z=s,(0,p.Z)(s))?Z=(0,C.Z)(s,(0,T.Z)(s)):(!(0,h.Z)(s)||(0,m.Z)(s))&&(Z=(0,d.Z)(_)):S=!1}S&&(i.set(_,Z),r(Z,_,o,a,i),i.delete(_)),c(t,n,Z)},I=function t(e,n,o,a,i){e!==n&&(0,s.Z)(n,function(s,u){if(i||(i=new r.Z),(0,h.Z)(s))N(e,n,u,o,t,a,i);else{var l=a?a(w(e,u),s,u+"",e,n,i):void 0;void 0===l&&(l=s),c(e,u,l)}},T.Z)},A=n(41049),U=n(50050),D=(o=function(t,e,n){I(t,e,n)},(0,A.Z)(function(t,e){var n=-1,r=e.length,a=r>1?e[r-1]:void 0,i=r>2?e[2]:void 0;for(a=o.length>3&&"function"==typeof a?(r--,a):void 0,i&&(0,U.Z)(e[0],e[1],i)&&(a=r<3?void 0:a,r=1),t=Object(t);++n<r;){var c=e[n];c&&o(t,c,n,a)}return t}))}}]);