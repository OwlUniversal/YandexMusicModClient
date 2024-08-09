(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[796],{84477:function(e,t,i){Promise.resolve().then(i.bind(i,63699))},17295:function(e,t,i){"use strict";i.d(t,{O:function(){return o}});var l,n=i(98639),r={810:e=>{e.exports=l||(l=i.t(n,2))}},s={},a={};(()=>{Object.defineProperty(a,"__esModule",{value:!0}),a.useToggle=void 0;let e=function e(t){var i=s[t];if(void 0!==i)return i.exports;var l=s[t]={exports:{}};return r[t](l,l.exports,e),l.exports}(810);a.useToggle=t=>{let[i,l]=(0,e.useState)(t);return{state:i,toggle:(0,e.useCallback)(()=>{l(e=>!e)},[]),toggleTrue:(0,e.useCallback)(()=>{l(!0)},[]),toggleFalse:(0,e.useCallback)(()=>{l(!1)},[])}}})(),a.__esModule;var o=a.useToggle},63699:function(e,t,i){"use strict";i.r(t);var l=i(9753),n=i(74717),r=i(61533);t.default=()=>{let e=(0,n.useSearchParams)().get("playlistUuid");return e||(0,n.notFound)(),(0,l.jsx)(r.i$,{playlistUuid:e})}},4491:function(e,t,i){"use strict";i.d(t,{IT:function(){return s.ArtistCard},xG:function(){return a.ArtistContextMenu},o9:function(){return r},v2:function(){return o.useArtistDisclaimer}});var l=i(42288),n=i(33589);let r=l.V5.model("ArtistMeta",{artist:n.Go,lastMonthListeners:l.V5.maybe(l.V5.number)});var s=i(99654),a=i(54864),o=i(66975)},66975:function(e,t,i){"use strict";i.d(t,{useArtistDisclaimer:function(){return s}});var l=i(98639),n=i(3429),r=i(44367);let s=e=>{let{artist:t,callback:i,shouldHistoryBack:s}=e,{disclaimer:a,modals:{disclaimerModal:o}}=(0,r.oR)(),u=(0,l.useRef)(String((0,n.Z)())),c=(0,l.useRef)(!1),d=(0,r.uK)().get(r.ce);return(0,l.useEffect)(()=>{a.isUnsafeDisclaimerConfirmed&&a.id===u.current&&!c.current&&(null==i||i(),c.current=!0)},[i,a.id,a.isUnsafeDisclaimerConfirmed]),(0,l.useCallback)(async e=>{let l=d.get(r.BU.ExEx);if((null==t?void 0:t.isUnsafeLegal)&&(null==l?void 0:l.includes("".concat(r.co.ARTIST,"_").concat(t.id)))){null==i||i();return}if((null==t?void 0:t.isLegalRejected)||(null==t?void 0:t.isUnsafeLegal)){null==e||e.preventDefault(),await a.getArtistDisclaimer({artistId:t.id}),t.isUnsafeLegal&&a.setType(r.Gq.UNSAFE),a.setId(u.current),a.setEntityId(t.id),a.setEntityType(r.co.ARTIST),a.setShouldHistoryBack(!!s),c.current=!1,o.open();return}null==e||e.preventDefault(),null==i||i()},[null==t?void 0:t.id,null==t?void 0:t.isLegalRejected,null==t?void 0:t.isUnsafeLegal,i,a,o,d,s])}},99654:function(e,t,i){"use strict";i.d(t,{ArtistCard:function(){return g}});var l=i(9753),n=i(60836),r=i(9544),s=i(98639),a=i(80542),o=i(31014),u=i(52122),c=i(23881),d=i(84338),p=i(39513),v=i(27491),m=i(28852),f=i(12404),k=i(2570),y=i(33589),C=i(44367),x=i(67868),_=i(66975),b=i(54864),h=i(62914),P=i.n(h);let g=(0,r.Pi)(e=>{let{artist:t,className:i,children:r,contentLinesCount:h}=e,{ref:g,intersectionPropertyId:j}=(0,C.Vf)(),A=(0,C.x5)(),{formatMessage:L}=(0,a.Z)(),[B,S]=(0,s.useState)(!1),[T,N]=(0,s.useState)(!1),[E,R]=(0,s.useState)(!1),{sendLikeSearchFeedback:w,sendNavigateSearchFeedback:V,sendPlaySearchFeedback:M}=(0,C.sA)(),I=(0,C.zx)(),U=(0,y.SB)(t),z=(0,y.BV)(t),{id:O,name:F,coverUri:D,isLiked:W}=t,G=(0,C.s0)(t.url),Z=(0,C.s0)(t.url,!0),[q,K]=(0,s.useState)(!1),H=(0,s.useMemo)(()=>{let e=L({id:"entity-names.artist-name"},{artistName:F}),t=W?L({id:"entity-names.has-your-like"}):"";return"".concat(e," ").concat(t)},[F,W,L]),{isPlaying:J,togglePlay:Y}=(0,C.qm)({playContextParams:{contextData:{type:d.Ak.Artist,meta:{id:Number(O)},from:A},loadContextMeta:!0}}),Q=(0,_.useArtistDisclaimer)({artist:t,callback:G}),X=(0,_.useArtistDisclaimer)({artist:t,callback:Z}),$=(0,_.useArtistDisclaimer)({artist:t,callback:Y}),ee=(0,y.ik)(X,Q),et=(0,s.useCallback)(e=>{null==V||V(),I({to:u.qU.ArtistScreen}),ee(e)},[V,I,ee]),ei=(0,s.useCallback)(e=>{et(e)},[et]),el=(0,s.useCallback)(()=>{B||J||(S(!0),null==M||M()),$()},[J,B,M,$]),en=(0,s.useCallback)(()=>{T||W||(N(!0),null==w||w()),U()},[W,U,T,w]),er=(0,s.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),es=(0,s.useCallback)(()=>{R(!E),K(!E)},[E]),ea=(0,s.useMemo)(()=>(0,l.jsx)(b.ArtistContextMenu,{artist:t,onOpenChange:es,open:E,returnFocus:!1,reference:(0,l.jsx)(p.z,{onClick:er,className:(0,n.W)(P().menuButton,P().control),"aria-label":L({id:"interface-actions.context-menu"}),icon:(0,l.jsx)(m.J,{size:"xxs",variant:"more"}),size:"s",radius:"round",...(0,c.BA)(c.bG.artist.ARTIST_CONTEXT_MENU_BUTTON)})}),[t,L,er,es,E]),eo=(0,s.useMemo)(()=>{if(t.isAvailable)return(0,l.jsx)(v.kk,{isVisible:E||q,className:P().controls,radius:"round",playControl:(0,l.jsx)(x.JM,{buttonVariant:"default",withHover:!1,className:(0,n.W)(P().playButton,P().control),iconSize:"xl",variant:"filled",onClick:el,isPlaying:J,disabled:!t.isAvailableForPlaying}),likeControl:(0,l.jsx)(x.dJ,{className:(0,n.W)(P().likeButton,P().control),isLiked:W,onClick:en,variant:"default",size:"s",iconSize:"xxs"}),menuControl:ea,pinControl:(0,l.jsx)(x.RT,{onClick:z,isPinned:t.isPinned,className:(0,n.W)(P().pinButton,P().control),withRipple:!1})})},[t.isAvailable,t.isAvailableForPlaying,ea,en,el,E,q,W,J,t.isPinned,z]),eu=(0,s.useMemo)(()=>(0,l.jsx)(f.Paper,{className:P().cover,radius:"round",withShadow:!0,...(0,c.BA)(c.bG.artist.ARTIST_CARD),children:(0,l.jsxs)("div",{className:P().coverBlock,onClick:ei,children:[(0,l.jsx)(x.BE,{className:P().image,src:D,size:200,fit:"cover",alt:H,withAvatarReplace:!0,isAvailable:t.isAvailable,"aria-hidden":!0}),eo]})}),[ei,D,H,t.isAvailable,eo]);return(0,l.jsx)(v.m7,{ref:g,className:(0,n.W)(P().root,i),textPosition:"center","aria-label":H,title:(0,l.jsx)(k.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,children:(0,l.jsx)(x.rU,{className:P().titleLink,href:t.url,"aria-label":H,onClick:et,...(0,c.BA)(c.bG.artist.ARTIST_TITLE),children:F})}),srTitle:(0,l.jsx)(x.rU,{href:t.url,onClick:et,children:H}),"data-intersection-property-id":j,description:(0,l.jsx)(k.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",...(0,c.BA)(c.bG.artist.ARTIST_SUBTITLE),children:(0,l.jsx)(o.Z,{id:"entity-names.singer"})}),contentLinesCount:h,view:eu,...(0,c.BA)(c.bG.artist.ARTIST_ITEM),children:r})})},54864:function(e,t,i){"use strict";i.d(t,{ArtistContextMenu:function(){return c}});var l=i(9753),n=i(9544),r=i(98639),s=i(385),a=i(33589),o=i(44367),u=i(67868);let c=(0,n.Pi)(e=>{var t,i,n;let{artist:c,lastMonthListeners:d,reference:p,onOpenChange:v,open:m,returnFocus:f}=e,{settings:k,experiments:y,trailer:C}=(0,o.oR)(),x=(0,a.BV)(c),_=(0,a.SB)(c),b="".concat(o.aU.ARTIST,"-").concat(null==c?void 0:c.id),h=k.layout===o.t8.Mobile,P=y.checkExperiment(o.pe.WebNextEntityTrailer,"on")&&true&&(null==c?void 0:null===(t=c.trailer)||void 0===t?void 0:t.isAvailable),{href:g}=(0,o.qK)(null!==(i=null==c?void 0:c.url)&&void 0!==i?i:""),{isPlaying:j,togglePlay:A}=(0,o.Qh)({seeds:null!==(n=null==c?void 0:c.seeds)&&void 0!==n?n:[],pageIdForFrom:o.Rh.RADIO,blockIdForFrom:b}),L=(0,r.useCallback)(()=>{j||A()},[j,A]),B=(0,r.useCallback)(()=>{(null==c?void 0:c.id)&&C.openArtistTrailer(null==c?void 0:c.id)},[null==c?void 0:c.id,C]);return(0,o.ZP)(m),(0,l.jsxs)(s.v2,{reference:p,isMobile:h,title:null==c?void 0:c.name,description:d,offsetOptions:10,open:m,onOpenChange:v,returnFocus:f,children:[!h&&(0,l.jsx)(u.Zd,{onClick:x,isPinned:null==c?void 0:c.isPinned}),(0,l.jsx)(u.xZ,{onClick:_,isLiked:null==c?void 0:c.isLiked,disabled:!(null==c?void 0:c.isAvailable)}),P&&(0,l.jsx)(u.NB,{onClick:B}),(0,l.jsx)(u.GQ,{onClick:L,disabled:!(null==c?void 0:c.isAvailable),variant:"artist"}),(0,l.jsx)(u.zq,{disabled:!c,shareLink:g,entityVariant:"artist",entityTitle:null==c?void 0:c.name})]})})},5293:function(e,t,i){"use strict";i.d(t,{I7:function(){return f},b4:function(){return a},at:function(){return y},zU:function(){return k}});var l=i(9753),n=i(98639),r=i.t(n,2),s=i(67868);let a=e=>{let{children:t,title:i,className:r}=e,{setTitleElement:a,setTitle:o}=(0,n.useContext)(s.pI),u=(0,n.useRef)(null);return(0,n.useEffect)(()=>{(null==u?void 0:u.current)&&a(u),i&&o(i)},[u,i,a,o]),(0,n.useEffect)(()=>()=>{o("")},[o]),(0,l.jsx)("div",{ref:u,className:r,children:t})};var o=i(9544),u={810:e=>{e.exports=r}},c={},d={};(()=>{Object.defineProperty(d,"__esModule",{value:!0}),d.useScroll=void 0;let e=function e(t){var i=c[t];if(void 0!==i)return i.exports;var l=c[t]={exports:{}};return u[t](l,l.exports,e),l.exports}(810);d.useScroll=t=>{(0,e.useEffect)(()=>(window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t)}),[t])}})(),d.__esModule;var p=d.useScroll,v=i(44367);let m=e=>{let{element:t,scrollTop:i,isMobile:l}=e,n=.4*t.clientHeight;return i+(l?56:72)>=t.offsetTop+n},f=(0,o.Pi)(e=>{let{children:t,scrollElement:i,outerTitle:r="",headerElement:a,headerThreshold:o}=e,[u,c]=(0,n.useState)(r),[d,f]=(0,n.useState)(null),[k,y]=(0,n.useState)(!1),[C,x]=(0,n.useState)(!1),{settings:_}=(0,v.oR)(),b=_.layout===v.t8.Mobile;(0,n.useLayoutEffect)(()=>{c(r)},[r]);let h=(0,n.useCallback)(()=>{if(!i)return;let e=null!=o?o:10,t=a?Number(a.offsetTop)-e:e;t<0&&(t=0),x(i.scrollTop>t),(null==d?void 0:d.current)&&y(m({element:null==d?void 0:d.current,scrollTop:i.scrollTop,isMobile:b}))},[i,o,a,d,b]);(0,n.useEffect)(()=>{i&&(null==i?void 0:i.scrollTop)!==0||x(!1)},[i,null==i?void 0:i.scrollTop]),p(h);let P=(0,n.useMemo)(()=>({title:u,setTitle:c,titleElement:d,scrollElement:i,setTitleElement:f,isScrolledTitle:k,isScrolling:C}),[u,k,d,i,C]);return(0,l.jsx)(s.pI.Provider,{value:P,children:t})});i(66414);let k=()=>{let[e,t]=(0,n.useState)(null),i=(0,n.useCallback)(i=>{e!==i&&t(i)},[e]);return[e,i]},y=(e,t)=>((0,v.uK)().get(v.Xt),[(0,n.useMemo)(()=>{if(void 0!==t){let i=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:i,"px)"),opacity:1}}return{}},[t,!1,e]),(0,n.useMemo)(()=>({"--average-color-background":e}),[e])])},55784:function(e,t,i){"use strict";i.d(t,{h:function(){return n.h},n:function(){return l.n}});var l=i(33861),n=i(34906)},31579:function(e,t,i){"use strict";i.d(t,{vY:function(){return r.EmptyPlaylistBlock},ZL:function(){return l.PlaylistCard},Nn:function(){return f},d2:function(){return u},VD:function(){return n.PlaylistsCarousel},RE:function(){return _},Q9:function(){return C},VB:function(){return x}});var l=i(22003),n=i(18921),r=i(6030),s=i(42288),a=i(33589),o=i(12090);let u=o.Cd.props({artists:s.V5.maybe(s.V5.array(a.Go))});var c=i(44367),d=i(13196),p=i(59131);let v=s.V5.model("PlaylistOwner",{uid:s.V5.number,login:s.V5.string,name:s.V5.string,sex:s.V5.enumeration(Object.values(p.oF)),verified:s.V5.boolean}),m=s.V5.model("PlaylistOwner",{userInfo:s.V5.maybeNull(v),caseForms:s.V5.maybeNull(d.S2)}),f=o.Cd.props({owner:s.V5.maybe(v),modified:s.V5.string,description:s.V5.maybe(s.V5.string),madeFor:s.V5.maybeNull(m)}).views(e=>({get seeds(){var t;return["playlist:".concat(null===(t=e.owner)||void 0===t?void 0:t.login,"_").concat(e.kind)]}})).actions(e=>({changeDescription:(0,s.ls)(function*(t){if(!(0,s.fh)(e))return c.SL.ERROR;if(e.description===t)return c.SL.OK;if(t.length>o.Zn)return c.SL.ERROR;let{usersResource:i,modelActionsLogger:l}=(0,s.dU)(e);if(e.canUserChange){let n=e.description;e.description=t;try{let l=yield i.changePlaylistDescription({description:t,userId:e.uid,playlistKind:e.kind});return e.description=l.description,c.SL.OK}catch(t){e.description=n,l.error(t)}}return c.SL.ERROR}),changePlaylistCover:(0,s.ls)(function*(t){if(!(0,s.fh)(e))return c.SL.ERROR;let{usersResource:i,modelActionsLogger:l}=(0,s.dU)(e);try{return yield i.uploadPlaylistCover({userId:e.uid,formData:t,playlistKind:e.kind}),c.SL.OK}catch(e){l.error(e)}return c.SL.ERROR})})),k=e=>({uid:e.uid,login:e.login,name:e.name,sex:e.sex,verified:e.verified}),y=e=>(0,s.pj)({userInfo:e.userInfo?k(e.userInfo):null,caseForms:e.caseForms?(0,c.GA)(e.caseForms):null}),C=e=>(0,s.pj)({...(0,o.PV)(e),owner:e.owner?k(e.owner):void 0,description:e.description,modified:e.modified,madeFor:e.madeFor?y(e.madeFor):null}),x=e=>{var t,i;return(0,s.pj)({...(0,o.PV)(e),artists:null!==(i=null==e?void 0:null===(t=e.artists)||void 0===t?void 0:t.map(a.d))&&void 0!==i?i:[]})},_=e=>{var t,i;let{playlist:l,generatedPlaylistType:n,likesCount:r}=e;return(0,s.pj)({isAvailable:null===(i=l.available)||void 0===i||i,uuid:l.playlistUuid,title:l.title,uid:l.uid,kind:l.kind,coverUri:null===(t=l.cover)||void 0===t?void 0:t.uri,generatedPlaylistType:n,likesCount:r})}},6030:function(e,t,i){"use strict";i.d(t,{EmptyPlaylistBlock:function(){return d}});var l=i(9753),n=i(60836),r=i(98639),s=i(31014),a=i(28852),o=i(2570),u=i(98746),c=i.n(u);let d=e=>{let{className:t,isEmptySearch:i}=e,u=(0,r.useMemo)(()=>i?(0,l.jsx)(s.Z,{id:"search-results.not-found-title"}):(0,l.jsx)(s.Z,{id:"error-messages.empty-collection-playlist-title"}),[i]),d=(0,r.useMemo)(()=>i?(0,l.jsx)(s.Z,{id:"search-results.not-found-description"}):(0,l.jsx)(s.Z,{id:"error-messages.empty-collection-playlist-description"}),[i]);return(0,l.jsxs)("div",{className:(0,n.W)(c().root,t),children:[(0,l.jsx)("div",{className:c().iconBackground,children:(0,l.jsx)(a.J,{variant:"search",size:"l",className:c().icon})}),(0,l.jsx)(o.Heading,{variant:"h3",size:"xs",className:c().title,children:u}),(0,l.jsx)(o.Caption,{variant:"span",size:"l",className:c().subtitle,children:d})]})}},22003:function(e,t,i){"use strict";i.d(t,{PlaylistCard:function(){return j}});var l=i(9753),n=i(60836),r=i(9544),s=i(98639),a=i(80542),o=i(52122),u=i(23881),c=i(84338),d=i(39513),p=i(27491),v=i(28852),m=i(12404),f=i(2570),k=i(33589),y=i(12090),C=i(44367),x=i(67868);let _=e=>{let{formatMessage:t}=(0,a.Z)();return(0,s.useMemo)(()=>{let i="";e.isLiked&&!e.actualLikesCount?i=t({id:"entity-names.has-your-like"}):"number"==typeof e.actualLikesCount&&(i=e.actualLikesCount>0?t({id:"entity-names.likes-counter"},{counter:e.actualLikesCount}):t({id:"entity-names.likes-counter-empty"}));let l=t({id:"entity-names.playlist-name"},{playlistName:e.title});return"".concat(l," ").concat(i)},[t,e])};var b=i(385);let h=(0,r.Pi)(e=>{var t;let{playlist:i,reference:n,onOpenChange:r,open:a,returnFocus:o}=e,{settings:u,experiments:c,trailer:d}=(0,C.oR)(),p=(0,y.SB)(i),v=(0,y.BV)(i),m=u.layout===C.t8.Mobile,f=c.checkExperiment(C.pe.WebNextEntityTrailer,"on")&&true&&(null===(t=i.trailer)||void 0===t?void 0:t.isAvailable);(0,C.ZP)(a);let k=(0,s.useCallback)(()=>{d.openPlaylistTrailer(i.id)},[i.id,d]);return(0,l.jsxs)(b.v2,{title:i.title,onOpenChange:r,open:a,offsetOptions:10,reference:n,isMobile:m,returnFocus:o,children:[!m&&(0,l.jsx)(x.Zd,{onClick:v,isPinned:i.isPinned}),!i.isFavouritePlaylist&&(0,l.jsx)(x.xZ,{onClick:p,isLiked:i.isLiked}),f&&(0,l.jsx)(x.NB,{onClick:k})]})});var P=i(88308),g=i.n(P);let j=(0,r.Pi)(e=>{let{className:t,playlist:i,children:r,contentLinesCount:b,customDescription:P}=e,{ref:j,intersectionPropertyId:A}=(0,C.Vf)(),L=(0,C.x5)(),{formatMessage:B}=(0,a.Z)(),{sendLikeSearchFeedback:S,sendNavigateSearchFeedback:T,sendPlaySearchFeedback:N}=(0,C.sA)(),[E,R]=(0,s.useState)(!1),[w,V]=(0,s.useState)(!1),[M,I]=(0,s.useState)(!1),U=_(i),z=(0,y.SB)(i),O=(0,y.BV)(i),F=(0,C.zx)(),D=(0,C.s0)(i.url),W=(0,C.s0)(i.url,!0),G=(0,k.ik)(W,D),[Z,q]=(0,s.useState)(!1),{isPlaying:K,togglePlay:H}=(0,C.qm)({playContextParams:{contextData:{type:c.Ak.Playlist,meta:{id:i.id,uuid:i.uuid},from:L},loadContextMeta:!0}}),J=(0,s.useCallback)(()=>{F({to:o.qU.PlaylistScreen}),null==T||T()},[F,T]),Y=(0,s.useCallback)(e=>{J(),G(e)},[G,J]),Q=(0,s.useCallback)(()=>{E||K||(R(!0),null==N||N()),H()},[K,E,N,H]),X=(0,s.useCallback)(()=>{w||i.isLiked||(V(!0),null==S||S()),z()},[z,w,i.isLiked,S]),$=(0,s.useCallback)(e=>{e.preventDefault(),e.stopPropagation()},[]),ee=(0,s.useCallback)(()=>{I(!M),q(!M)},[M]),et=(0,s.useMemo)(()=>{var e;return P?(0,l.jsx)(f.Caption,{variant:"span",type:"entity",size:"s",weight:"medium",lineClamp:2,children:P}):(null===(e=i.artists)||void 0===e?void 0:e.length)?(0,l.jsx)(k.jO,{className:g().artists,artists:i.artists,lineClamp:1,linkClassName:g().artistLink,captionSize:"s"}):void 0},[i.artists,P]),ei=(0,s.useMemo)(()=>{if(!i.isFavouritePlaylist)return(0,l.jsx)(x.dJ,{className:(0,n.W)(g().likeButton,g().control),isLiked:i.isLiked,onClick:X,variant:"default",size:"s",iconSize:"xxs"})},[X,i.isFavouritePlaylist,i.isLiked]),el=(0,s.useMemo)(()=>(0,l.jsx)(m.Paper,{className:g().cover,radius:"s",withShadow:!0,...(0,u.BA)(u.bG.playlist.PLAYLIST_CARD),children:(0,l.jsxs)("div",{className:g().coverBlock,onClick:Y,children:[(0,l.jsx)(x.BE,{className:g().image,src:i.coverUri,size:200,fit:"cover",alt:U,withAvatarReplace:!0,"aria-hidden":!0}),(0,l.jsx)(p.kk,{isVisible:M||Z,className:g().controls,playControl:(0,l.jsx)(x.JM,{className:(0,n.W)(g().playButton,g().control),buttonVariant:"default",withHover:!1,iconSize:"xl",variant:"filled",onClick:Q,isPlaying:K,disabled:!i.isAvailable}),likeControl:ei,menuControl:(0,l.jsx)(h,{playlist:i,onOpenChange:ee,open:M,returnFocus:!1,reference:(0,l.jsx)(d.z,{onClick:$,className:(0,n.W)(g().menuButton,g().control),"aria-label":B({id:"interface-actions.context-menu"}),icon:(0,l.jsx)(v.J,{size:"xxs",variant:"more"}),size:"s",radius:"round",...(0,u.BA)(u.bG.playlist.PLAYLIST_CONTEXT_MENU_BUTTON)})}),pinControl:(0,l.jsx)(x.RT,{onClick:O,isPinned:i.isPinned,className:(0,n.W)(g().pinButton,g().control),withRipple:!1})})]})}),[Y,i,U,M,Z,Q,K,ei,ee,$,B,O]),en=!!i.actualLikesCount&&!i.isLikesCountHidden;return(0,l.jsxs)(p.m7,{ref:j,"aria-label":U,className:(0,n.W)(g().root,t),title:(0,l.jsx)(f.Caption,{variant:"div",type:"entity",size:"s",weight:"medium",lineClamp:2,...(0,u.BA)(u.bG.playlist.PLAYLIST_TITLE),children:(0,l.jsx)(x.rU,{className:g().titleLink,href:i.url,onClick:J,children:i.title})}),srTitle:(0,l.jsx)(x.rU,{href:i.url,onClick:J,children:i.title}),"data-intersection-property-id":A,contentLinesCount:b,view:el,description:et,...(0,u.BA)(u.bG.playlist.PLAYLIST_ITEM),children:[en&&(0,l.jsx)(x.DB,{ariaLabel:B({id:"entity-names.likes-counter"},{counter:i.actualLikesCount}),likesCount:i.actualLikesCount,isLiked:i.isLiked,handleLikeClick:z}),r]})})},18921:function(e,t,i){"use strict";i.d(t,{PlaylistsCarousel:function(){return o}});var l=i(9753),n=i(98639),r=i(67868),s=i(22003);let a=e=>{let{forwardRef:t,isShimmerVisible:i,isShimmerActive:n,title:a,description:o,playlists:u,containerClassName:c,className:d,headerClassName:p,viewAllActionLink:v,...m}=e;return(0,l.jsx)(r.HY,{isShimmerVisible:i,isShimmerActive:n,className:d,headerClassName:p,containerClassName:c,ref:t,title:a,description:o,viewAllActionLink:v,...m,children:null==u?void 0:u.map(e=>(0,l.jsx)(s.PlaylistCard,{playlist:e,contentLinesCount:3},e.key))})},o=(0,n.forwardRef)((e,t)=>(0,l.jsx)(a,{forwardRef:t,...e}))},62914:function(e){e.exports={root:"ArtistCard_root__x67BK",controls:"ArtistCard_controls__jsqqI",cover:"ArtistCard_cover__29ShU",coverBlock:"ArtistCard_coverBlock__dBL4x",image:"ArtistCard_image__pONJx",titleLink:"ArtistCard_titleLink__G8Puz",playButton:"ArtistCard_playButton__XZoTr",likeButton:"ArtistCard_likeButton__LU9TL",menuButton:"ArtistCard_menuButton__EynXG",pinButton:"ArtistCard_pinButton__G_VOi",control:"ArtistCard_control___qv5j"}},98746:function(e){e.exports={root:"EmptyPlaylistBlock_root__wpA0j",iconBackground:"EmptyPlaylistBlock_iconBackground__pnUlz",title:"EmptyPlaylistBlock_title__pQQLf",subtitle:"EmptyPlaylistBlock_subtitle__P4Q7x"}},88308:function(e){e.exports={root:"PlaylistCard_root__i3pR4",controls:"PlaylistCard_controls__Ej8Rz",cover:"PlaylistCard_cover__tpK5L",coverBlock:"PlaylistCard_coverBlock__1slsN",image:"PlaylistCard_image__Li6oy",titleLink:"PlaylistCard_titleLink__H8qEc",artists:"PlaylistCard_artists__HtVIF",artistLink:"PlaylistCard_artistLink__jx3KB",playButton:"PlaylistCard_playButton__eaduk",likeButton:"PlaylistCard_likeButton__RYXJz",menuButton:"PlaylistCard_menuButton__jFcWr",pinButton:"PlaylistCard_pinButton__jhWnL",control:"PlaylistCard_control__73YUq"}}},function(e){e.O(0,[5675,7169,5107,8754,3500,5736,560,2498,7873,2330,7403,3621,9448,214,4367,7868,3196,4901,3490,9352,5545,1071,5191,4950,1533,2171,361,1744],function(){return e(e.s=84477)}),_N_E=e.O()}]);