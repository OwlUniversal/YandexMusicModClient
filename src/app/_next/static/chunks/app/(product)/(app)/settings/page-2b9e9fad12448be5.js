(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3555],{19946:function(e,t,n){Promise.resolve().then(n.bind(n,78765))},36822:function(e,t,n){"use strict";n.d(t,{e:function(){return j},X:function(){return _}});var i=n(8759),o=n(35338),s=n(33423),a=n(65244),l=n(15527),r=n(14581),c=n(1918),d=n(44285),m=n(5674);let _=()=>{let e=(0,m.uK)(),{location:t}=(0,m.oR)(),{language:n}=(0,m.ZS)(),{theme:i}=(0,m.Fg)(),o=e.get(m.U5),s=(0,m.yy)(o.oldWebHost);return"https://".concat(s,"/wizard/?callback_url=").concat(encodeURIComponent(t.href),"&forceTheme=").concat(i,"&lang=").concat(n)};var p=n(85326),u=n.n(p),x=n(45656),h=n(96437);let v=e=>{let{active:t,coverUri:n}=e,s=n?(0,i.jsx)(x.Image,{src:n,size:100,fit:"contain",withAvatarReplace:!0}):(0,i.jsx)(r.J,{size:"m",variant:t?"liked":"like",className:(0,o.W)(u().honeycombCellIcon,{[u().honeycombCellIcon_active]:t})});return(0,i.jsx)(h.Paper,{radius:"round",className:(0,o.W)([u().honeycombCell,{[u().honeycombCell_active]:t}]),children:s})},g=e=>{let{position:t,coverUri:n}=e;return(0,i.jsxs)("div",{className:(0,o.W)(u().honeycombLine,u()["honeycomb_".concat(t)]),children:[(0,i.jsx)(v,{}),(0,i.jsx)(v,{}),"middle"===t&&(0,i.jsx)(v,{coverUri:n,active:!0}),(0,i.jsx)(v,{}),(0,i.jsx)(v,{})]})},b=(0,s.Pi)(e=>{let{className:t,coverUri:n}=e;return(0,i.jsxs)("div",{className:(0,o.W)(u().honeycomb,t),children:[(0,i.jsx)(g,{position:"top"}),(0,i.jsx)(g,{position:"middle",coverUri:n}),(0,i.jsx)(g,{position:"bottom"})]})}),j=(0,s.Pi)(e=>{let{className:t}=e,{formatMessage:n}=(0,a.Z)(),s=_();return(0,i.jsxs)("div",{className:(0,o.W)(u().root,t),children:[(0,i.jsx)(b,{className:u().honeycomb_margin}),(0,i.jsx)(c.Heading,{variant:"h3",size:"xs",className:u().title,children:n({id:"wizard.title"})}),(0,i.jsx)(c.Caption,{variant:"div",type:"text",size:"l",className:u().description,children:n({id:"wizard.description"})}),(0,i.jsx)(d.rU,{className:u().coverLink,href:s,"aria-label":n({id:"wizard.buttonText"}),target:"_self",children:(0,i.jsx)(l.z,{className:u().button,icon:(0,i.jsx)(r.J,{variant:"link",size:"xxs",className:u().buttonIcon}),color:"secondary",size:"m",iconPosition:"right",radius:"xxxl",children:n({id:"wizard.buttonText"})})})]})})},13236:function(e,t,n){"use strict";n.d(t,{I7:function(){return x},b4:function(){return l},at:function(){return v},zU:function(){return h}});var i=n(8759),o=n(99616),s=n.t(o,2),a=n(44285);let l=e=>{let{children:t,title:n,className:s}=e,{setTitleElement:l,setTitle:r}=(0,o.useContext)(a.pI),c=(0,o.useRef)(null);return(0,o.useEffect)(()=>{(null==c?void 0:c.current)&&l(c),n&&r(n)},[c,n,l,r]),(0,o.useEffect)(()=>()=>{r("")},[r]),(0,i.jsx)("div",{ref:c,className:s,children:t})};var r=n(33423),c={810:e=>{e.exports=s}},d={},m={};(()=>{Object.defineProperty(m,"__esModule",{value:!0}),m.useScroll=void 0;let e=function e(t){var n=d[t];if(void 0!==n)return n.exports;var i=d[t]={exports:{}};return c[t](i,i.exports,e),i.exports}(810);m.useScroll=t=>{(0,e.useEffect)(()=>(window.addEventListener("scroll",t,{capture:!0,passive:!0}),()=>{window.removeEventListener("scroll",t)}),[t])}})(),m.__esModule;var _=m.useScroll,p=n(5674);let u=e=>{let{element:t,scrollTop:n,isMobile:i}=e,o=.4*t.clientHeight;return n+(i?56:72)>=t.offsetTop+o},x=(0,r.Pi)(e=>{let{children:t,scrollElement:n,outerTitle:s="",headerElement:l,headerThreshold:r}=e,[c,d]=(0,o.useState)(s),[m,x]=(0,o.useState)(null),[h,v]=(0,o.useState)(!1),[g,b]=(0,o.useState)(!1),{settings:j}=(0,p.oR)(),C=j.layout===p.t8.Mobile;(0,o.useLayoutEffect)(()=>{d(s)},[s]);let f=(0,o.useCallback)(()=>{if(!n)return;let e=null!=r?r:10,t=l?Number(l.offsetTop)-e:e;t<0&&(t=0),b(n.scrollTop>t),(null==m?void 0:m.current)&&v(u({element:null==m?void 0:m.current,scrollTop:n.scrollTop,isMobile:C}))},[n,r,l,m,C]);(0,o.useEffect)(()=>{(null==n?void 0:n.scrollTop)===0&&b(!1)},[null==n?void 0:n.scrollTop]),_(f);let N=(0,o.useMemo)(()=>({title:c,setTitle:d,titleElement:m,scrollElement:n,setTitleElement:x,isScrolledTitle:h,isScrolling:g}),[c,h,m,n,g]);return(0,i.jsx)(a.pI.Provider,{value:N,children:t})});n(41197);let h=()=>{let[e,t]=(0,o.useState)(null),n=(0,o.useCallback)(n=>{e!==n&&t(n)},[e]);return[e,n]},v=(e,t)=>{let n=(0,p.uK)();n.get(p.Xt);let i=(0,o.useMemo)(()=>{if(void 0!==t){let n=t-17;return{"--average-color-background":e,transform:"translateY(".concat(t>=17?0:n,"px)"),opacity:1}}return{}},[t,!1,e]),s=(0,o.useMemo)(()=>({"--average-color-background":e}),[e]);return[i,s]}},78765:function(e,t,n){"use strict";n.r(t),n.d(t,{SettingsPage:function(){return U}});var i=n(8759),o=n(33423),s=n(11769),a=n(65244),l=n(2814),r=n(71716),c=n(1918),d=n(99616),m=n(36822),_=n(5674);let p=()=>{let e=(0,_.uK)(),t=e.get(_.U5),n=(0,_.yy)(t.oldWebHost),{language:i}=(0,_.ZS)();return"https://".concat(n,"/newimport?lang=").concat(i)};var u=n(31476),x=n(44285),h=n(61412),v=n.n(h);let g=(0,o.Pi)(()=>{let{formatMessage:e}=(0,a.Z)(),{location:t,modals:{aboutAppModal:n}}=(0,_.oR)(),o=(0,_.bo)(),s=(0,_.aM)(),{language:r}=(0,_.ZS)();return(0,i.jsxs)(u.u,{className:v().root,headerClassName:v().modalHeader,contentClassName:v().modalContent,title:e({id:"settings.about-app"}),open:n.isOpened,onOpenChange:n.onOpenChange,onClose:n.close,size:"fitContent",placement:"center",labelClose:e({id:"interface-actions.close"}),children:[(0,i.jsxs)("ul",{className:v().list,children:[(0,i.jsx)("li",{className:v().item,children:(0,i.jsx)(x.rU,{className:v().link,target:"_blank",href:"https://yandex.".concat(t.tld,"/support/music/performers-and-copyright-holders.html?lang=").concat(r),children:(0,i.jsx)(c.Caption,{type:"controls",variant:"span",size:"l",weight:"medium",children:(0,i.jsx)(l.Z,{id:"footer.links-copyright-holders"})})})}),(0,i.jsx)("li",{className:v().item,children:(0,i.jsx)(x.rU,{className:v().link,target:"_blank",href:"https://yandex.".concat(t.tld,"/legal/music_mobile_agreement?lang=").concat(r),children:(0,i.jsx)(c.Caption,{type:"controls",variant:"span",size:"l",weight:"medium",children:(0,i.jsx)(l.Z,{id:"footer.links-terms"})})})}),(0,i.jsx)("li",{className:v().item,children:(0,i.jsx)(x.rU,{className:v().link,target:"_blank",href:"https://music.yandex.".concat(t.tld,"/legal/recommendations/ru/#music?lang=").concat(r),children:(0,i.jsx)(c.Caption,{type:"controls",variant:"span",size:"l",weight:"medium",children:(0,i.jsx)(l.Z,{id:"footer.links-recommendation-rules"})})})}),(0,i.jsx)("li",{className:v().item,children:(0,i.jsx)(x.rU,{className:v().link,target:"_blank",href:"https://yandex.".concat(t.tld,"/support/music/index.html?lang=").concat(r),children:(0,i.jsx)(c.Caption,{type:"controls",variant:"span",size:"l",weight:"medium",children:(0,i.jsx)(l.Z,{id:"footer.links-help"})})})})]}),(0,i.jsx)(c.Caption,{className:v().explicitText,type:"controls",variant:"div",size:"xs",weight:"medium",dangerouslySetInnerHTML:{__html:e({id:"about-app.explicit-content"})}}),(0,i.jsx)(c.Caption,{className:v().companyText,type:"controls",variant:"div",size:"xs",children:(0,i.jsx)(l.Z,{id:"about-app.app-name"})}),(0,i.jsx)(c.Caption,{className:v().versionText,type:"controls",variant:"div",size:"xs",children:e({id:"desktop.app-version-short"},{version:o})}),(0,i.jsx)(c.Caption,{className:v().versionText,type:"controls",variant:"div",size:"xs",children:e({id:"desktop.app-revision"},{revision:s})})]})});var b=n(35338),j=n(15527),C=n(14581),f=n(23346),N=n.n(f);let y=e=>{let{title:t,description:n,onClick:o}=e;return(0,i.jsx)(j.z,{className:(0,b.W)(N().root,N().important),iconContainerClassName:N().iconContainer,icon:(0,i.jsx)(C.J,{className:N().icon,size:"xs",variant:"arrowRight"}),iconPosition:"right",onClick:o,isBlock:!0,withRipple:!1,withHover:!1,variant:"text",size:"xs",children:(0,i.jsxs)("div",{className:N().content,children:[(0,i.jsx)(c.Caption,{className:N().title,variant:"div",size:"l",weight:"bold",lineClamp:1,children:t}),n&&(0,i.jsx)(c.Caption,{variant:"div",type:"text",size:"xs",weight:"medium",className:N().description,children:n})]})})};var z=n(42151),k=n.n(z);let S=e=>{let{link:t,title:n,description:o}=e;return(0,i.jsxs)(x.rU,{className:k().root,containerClassName:k().container,textClassName:k().linkText,icon:(0,i.jsx)(C.J,{className:k().icon,size:"xs",variant:"arrowRight"}),iconPosition:"right",href:t,children:[(0,i.jsx)(c.Caption,{className:k().title,variant:"div",size:"l",weight:"bold",lineClamp:1,children:n}),o&&(0,i.jsx)(c.Caption,{variant:"div",type:"text",size:"xs",weight:"medium",className:k().description,children:o})]})};var w=n(42361),I=n.n(w);let L=(0,o.Pi)(()=>{let{modals:{shortcutsModal:e}}=(0,_.oR)(),{formatMessage:t}=(0,a.Z)(),n=(0,d.useMemo)(()=>{let e=(0,i.jsx)(c.Caption,{className:I().text,variant:"div",type:"text",size:"xs",weight:"normal",children:(0,i.jsx)(l.Z,{id:"shortcuts.or"})});return _.ed.map(t=>{let{shortcutsAction:n,formattedMessage:o}=t,s=_.ft[n].map((e,t)=>(0,i.jsx)("div",{className:I().button,children:(0,i.jsx)(c.Caption,{variant:"div",type:"text",size:"xs",weight:"normal",children:e})},t));return s.length>1&&s.splice(1,0,e),(0,i.jsx)("li",{children:(0,i.jsxs)("div",{className:I().content,children:[(0,i.jsx)(c.Caption,{className:I().text,variant:"div",type:"text",size:"xs",weight:"normal",children:o}),(0,i.jsx)("div",{className:I().buttons,children:s})]})},n)})},[]);return(0,i.jsx)(u.u,{className:I().root,headerClassName:I().modalHeader,contentClassName:I().modalContent,title:t({id:"settings.shortcuts"}),open:e.isOpened,onOpenChange:e.onOpenChange,onClose:e.close,size:"fitContent",placement:"center",labelClose:t({id:"interface-actions.close"}),children:(0,i.jsx)("ul",{className:I().list,children:n})})});var M=n(9930),T=n.n(M);let P=(0,o.Pi)(()=>{let{modals:{shortcutsModal:e,aboutAppModal:t}}=(0,_.oR)(),{formatMessage:n}=(0,a.Z)(),o=(0,m.X)(),s=p(),l=(0,_.bo)(),r=(0,d.useMemo)(()=>n({id:"desktop.app-version-short"},{version:l}),[n,l]);return(0,i.jsxs)("ul",{className:T().root,children:[(0,i.jsx)("li",{className:T().item,children:(0,i.jsx)(S,{title:n({id:"settings.preferences"}),description:n({id:"settings.preferences-description"}),link:o})}),(0,i.jsx)("li",{className:T().item,children:(0,i.jsx)(S,{title:n({id:"settings.import-media"}),description:n({id:"settings.import-media-description"}),link:s})}),(0,i.jsxs)("li",{className:T().item,children:[(0,i.jsx)(y,{title:n({id:"settings.shortcuts"}),onClick:e.open}),(0,i.jsx)(L,{})]}),r&&(0,i.jsxs)("li",{className:T().item,children:[(0,i.jsx)(y,{title:n({id:"settings.about-app"}),description:r,onClick:t.open}),(0,i.jsx)(g,{})]})]})});var W=n(13236),A=n(31386),H=n.n(A);let U=(0,o.Pi)(()=>{let{formatMessage:e}=(0,a.Z)(),{experiments:t}=(0,_.oR)(),[n,o]=(0,W.zU)(),d=(0,_.k6)();return t.checkExperiment(_.pe.WebNextSettingsPage,"on")||(0,s.notFound)(),(0,i.jsxs)(W.I7,{scrollElement:n,outerTitle:e({id:"page.settings"}),children:[(0,i.jsx)(x.h4,{variant:"text",withForwardControl:!1,withBackwardControl:d.canBack,children:(0,i.jsx)(c.Heading,{variant:"h2",weight:"bold",size:"xl",lineClamp:1,children:(0,i.jsx)(l.Z,{id:"page.settings"})})}),(0,i.jsx)(r.t,{ref:o,className:H().root,containerClassName:H().scrollableContainer,children:(0,i.jsxs)("div",{className:H().container,children:[(0,i.jsx)("div",{className:H().content,children:(0,i.jsx)(P,{})}),(0,i.jsx)(x.$_,{className:H().footer})]})})]})})},85326:function(e){e.exports={root:"Wizard_root__tdJUC",honeycomb:"Wizard_honeycomb__V5R2T",honeycomb_top:"Wizard_honeycomb_top__GrCzL",honeycomb_bottom:"Wizard_honeycomb_bottom___68Sv",honeycomb_margin:"Wizard_honeycomb_margin__WBS_f",title:"Wizard_title__nmtSz",description:"Wizard_description__MffSk",button:"Wizard_button__dFQio",buttonIcon:"Wizard_buttonIcon__M2FxQ",honeycombLine:"Wizard_honeycombLine__LANJL",honeycombCell:"Wizard_honeycombCell__noC5n",honeycombCell_active:"Wizard_honeycombCell_active__fm4i0",honeycombCellIcon:"Wizard_honeycombCellIcon__oegQy",honeycombCellIcon_active:"Wizard_honeycombCellIcon_active__Cbka4"}},31386:function(e){e.exports={root:"SettingsPage_root__BB4lC",scrollableContainer:"SettingsPage_scrollableContainer__qD32i",container:"SettingsPage_container__bIwea",content:"SettingsPage_content__cR6Ra",footer:"SettingsPage_footer__QIqyx"}},61412:function(e){e.exports={root:"AboutAppModal_root__yBvgU",modalHeader:"AboutAppModal_modalHeader__q1NPj",modalContent:"AboutAppModal_modalContent__SHO_X",list:"AboutAppModal_list__HfB82",link:"AboutAppModal_link__i3P3P",explicitText:"AboutAppModal_explicitText__29HUD",companyText:"AboutAppModal_companyText__yroW0",versionText:"AboutAppModal_versionText__iFb8L"}},9930:function(e){e.exports={root:"Settings_root__FVVrn",item:"Settings_item__Ksa9h"}},23346:function(e){e.exports={icon:"SettingsListButtonItem_icon__WULZ1",root:"SettingsListButtonItem_root__3dtV2",important:"SettingsListButtonItem_important__AcEon",iconContainer:"SettingsListButtonItem_iconContainer__KECtv",content:"SettingsListButtonItem_content___Opuo",title:"SettingsListButtonItem_title__npCza",description:"SettingsListButtonItem_description__g8_Ba"}},42151:function(e){e.exports={icon:"SettingsListLinkItem_icon__p4P_V",root:"SettingsListLinkItem_root__rTPC9",container:"SettingsListLinkItem_container__k7bhS",linkText:"SettingsListLinkItem_linkText__0PHlQ",title:"SettingsListLinkItem_title__duJnL",description:"SettingsListLinkItem_description__xWeAD"}},42361:function(e){e.exports={root:"ShortcutsModal_root__ro7m4",modalHeader:"ShortcutsModal_modalHeader__IYJ9m",modalContent:"ShortcutsModal_modalContent__SCpYX",list:"ShortcutsModal_list__eS4ox",text:"ShortcutsModal_text__5JJ0j",content:"ShortcutsModal_content__Li9Ip",buttons:"ShortcutsModal_buttons__o_xlC",button:"ShortcutsModal_button__cTIee"}}},function(e){e.O(0,[2498,7873,5455,8628,2008,6217,1716,1476,4025,4164,1744],function(){return e(e.s=19946)}),_N_E=e.O()}]);