"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{30789:function(t,e,a){a.d(e,{i$:function(){return i.PlaylistPage},nb:function(){return E}});var i=a(49773);a(46924);var l=a(93043),r=a(96555),n=a(96431),d=a(20210),s=a(95539),o=a(5674);let u=(t,e)=>e.map(e=>{let a=t.find(t=>String(t.id)===e);return(null==a?void 0:a.albumId)?"".concat(e,":").concat(a.albumId):e}),c=(t,e)=>e.map(e=>{let a=t[e];return(null==a?void 0:a.albumId)?"".concat(a.id,":").concat(a.albumId):String(null==a?void 0:a.id)}),g=(t,e)=>{let{startIndex:a,endIndex:i}=e,l=[];for(let e=a;e<=i;e++){var r,n;((null===(r=t[e])||void 0===r?void 0:r.loadingState)===o.Gu.IDLE||(null===(n=t[e])||void 0===n?void 0:n.loadingState)===o.Gu.REJECT)&&l.push(e)}return l};var m=a(82436);let v=t=>t.map(t=>(0,m.RN)(t.id,t.albumId||void 0)),I=r.V5.model("PlaylistItem",{id:r.V5.union(r.V5.string,r.V5.number),albumId:r.V5.maybeNull(r.V5.union(r.V5.string,r.V5.number)),key:r.V5.string,data:r.V5.maybeNull(s.le),loadingState:r.V5.enumeration(Object.values(o.Gu))}),y=r.V5.model("PlaylistSearchItems",{playlistTrackIds:r.V5.maybeNull(r.V5.array(r.V5.string)),suggestedTrackIds:r.V5.maybeNull(r.V5.array(r.V5.string)),additionTrackInProggress:r.V5.maybeNull(r.V5.string),tracks:r.V5.maybeNull(r.V5.array(s.le))}).views(t=>({get suggestedTracks(){var e;return null===(e=t.suggestedTrackIds)||void 0===e?void 0:e.map(e=>{var a;return(null===(a=t.tracks)||void 0===a?void 0:a.find(t=>t.id===e))||null})},get playlistTracks(){let e=[...t.playlistTrackIds||[]];return t.additionTrackInProggress&&e.unshift(t.additionTrackInProggress),null==e?void 0:e.map(e=>{var a;return(null===(a=t.tracks)||void 0===a?void 0:a.find(t=>{var a;let i=(null===(a=t.mainAlbum)||void 0===a?void 0:a.id)&&e.includes(":")?"".concat(t.id,":").concat(t.mainAlbum.id):t.id;return i===e}))||null})}})).actions(t=>({setAdditionTrackAnimation(e){t.additionTrackInProggress=e},replaceAdditionTrackInProggress(){if(t.additionTrackInProggress){var e,a;null===(e=t.playlistTrackIds)||void 0===e||e.unshift(t.additionTrackInProggress),t.suggestedTrackIds=(0,r.pj)(null===(a=t.suggestedTrackIds)||void 0===a?void 0:a.filter(e=>e!==t.additionTrackInProggress)),t.additionTrackInProggress=null}},resetAdditionTrackAnimation(){t.additionTrackInProggress=null}})),E=r.V5.model("PlaylistPage",{meta:r.V5.maybeNull(d.Nn),items:r.V5.array(I),errorStatusCode:r.V5.maybeNull(r.V5.number),loadingState:r.V5.enumeration(Object.values(o.Gu)),similarPlaylists:r.V5.array(d.d2),searchLoadingState:r.V5.enumeration(Object.values(o.Gu)),searchItems:y}).views(t=>({get isNotFound(){return t.loadingState===o.Gu.REJECT&&t.errorStatusCode===n.CN.NOT_FOUND},get isLoading(){return t.loadingState===o.Gu.PENDING||t.loadingState===o.Gu.IDLE},get isSearchLoading(){return t.searchLoadingState===o.Gu.PENDING||t.searchLoadingState===o.Gu.IDLE},get isDisabled(){var e;return t.loadingState===o.Gu.RESOLVE&&(0===t.items.length||!(null===(e=t.meta)||void 0===e?void 0:e.isAvailable))},get isRejected(){return t.loadingState===o.Gu.REJECT},get hasSimilarPlaylists(){return t.loadingState===o.Gu.IDLE||t.loadingState===o.Gu.PENDING||t.similarPlaylists.length>0},get isEmptyPlaylist(){return 0===t.items.length&&t.loadingState===o.Gu.RESOLVE},get contextMeta(){var a,i,l,d,s,u,c,g,m,v;return{isAvailable:null===(a=t.meta)||void 0===a?void 0:a.isAvailable,id:t.meta.id,uid:null===(i=t.meta)||void 0===i?void 0:i.uid,uuid:t.meta.uuid,kind:null===(l=t.meta)||void 0===l?void 0:l.kind,title:null===(d=t.meta)||void 0===d?void 0:d.title,coverUri:null===(s=t.meta)||void 0===s?void 0:s.coverUri,likesCount:null===(u=t.meta)||void 0===u?void 0:u.likesCount,averageColor:null===(c=t.meta)||void 0===c?void 0:c.averageColor,owner:null===(g=t.meta)||void 0===g?void 0:g.owner,description:null===(m=t.meta)||void 0===m?void 0:m.description,modified:null===(v=t.meta)||void 0===v?void 0:v.modified}},get isDragAndDropEnabled(){var I;if(!(0,r.fh)(t))return!1;let{experiments:e}=(0,r.yj)(t);return!!((null===(I=t.meta)||void 0===I?void 0:I.canUserChange)&&t.items.length>1&&e.checkExperiment(o.pe.WebNextPlaylistDnD,"on"))},get itemsKeys(){return t.items.map(t=>t.key)}})).actions(t=>{let e={getTracksByRange:(0,r.ls)(function*(e){var a,i;let{startIndex:l,endIndex:n}=e,{tracksResource:d,modelActionsLogger:u}=(0,r.dU)(t);if(!(null===(a=t.meta)||void 0===a?void 0:a.uid)||!(null===(i=t.meta)||void 0===i?void 0:i.kind))return null;l=Math.max(0,l),n=Math.min(n,t.items.length);let m=g(t.items,{startIndex:l,endIndex:n});try{let e=c(t.items,m);if(!e.length)return null;m.forEach(e=>{let a=t.items[e];a&&(a.loadingState=o.Gu.PENDING)});let a=yield d.getTracksMeta({trackIds:e,withProgress:!0});m.forEach((e,i)=>{var l,r;let n=null==a?void 0:a[i];t.items[e]&&n&&(t.items[e]={id:n.id,albumId:(null===(r=n.albums)||void 0===r?void 0:null===(l=r[0])||void 0===l?void 0:l.id)||null,key:"".concat(n.id,"-").concat(e),data:(0,s.Vt)(n),loadingState:o.Gu.RESOLVE})})}catch(e){u.error(e),m.forEach(e=>{let a=t.items[e];a&&(a.loadingState=o.Gu.REJECT)})}return null}),getSearchTracksMeta:(0,r.ls)(function*(){let{tracksResource:e,modelActionsLogger:a}=(0,r.dU)(t),i=[...t.searchItems.playlistTrackIds||[]].concat(t.searchItems.suggestedTrackIds||[]);try{let a=yield e.getTracksMeta({trackIds:i,removeDuplicates:!0});t.searchItems.tracks=(0,r.pj)(null==a?void 0:a.map(t=>(0,s.Vt)(t))),t.searchLoadingState!==o.Gu.IDLE&&(t.searchLoadingState=o.Gu.RESOLVE)}catch(t){a.error(t)}return null}),updateData:(0,r.ls)(function*(a){var i;if((null==a?void 0:a.error)==="not-found")return t.errorStatusCode=n.CN.NOT_FOUND,t.loadingState=o.Gu.REJECT,null;t.similarPlaylists=(0,r.pj)(null===(i=a.similarPlaylists)||void 0===i?void 0:i.map(d.VB)),t.meta=(0,d.Q9)(a),t.items=(0,r.pj)(a.tracks.map((t,e)=>({id:String(t.id),albumId:t.albumId||null,key:"".concat(t.id,"-").concat(e),loadingState:o.Gu.IDLE})));let{sonataState:l}=(0,r.yj)(t);return l.setUnloadedEntitiesData(v(t.items)),yield e.getTracksByRange({startIndex:0,endIndex:10})}),getPlaylistByUserIdAndKind:(0,r.ls)(function*(a){let{userId:i,playlistKind:l,resumeStream:d=!1,trackMetaType:s}=a,{usersResource:u,modelActionsLogger:c}=(0,r.dU)(t);if(t.loadingState!==o.Gu.PENDING)try{t.loadingState=o.Gu.PENDING;let a=yield u.getPlaylistWithTracksIds({userId:i,playlistKind:l,resumeStream:d,trackMetaType:s});if("string"!=typeof a.playlistUuid){t.errorStatusCode=n.CN.NOT_FOUND,t.loadingState=o.Gu.REJECT;return}yield e.updateData(a),t.loadingState=o.Gu.RESOLVE}catch(e){c.error(e),e instanceof n.du&&(e.statusCode===n.CN.NOT_FOUND||e.statusCode===n.CN.BAD_REQUEST)&&(t.errorStatusCode=n.CN.NOT_FOUND),t.loadingState=o.Gu.REJECT}}),getSearchTracks:(0,r.ls)(function*(a){let{uid:i,kind:l,part:d=""}=a,{searchPlaylistResource:s,modelActionsLogger:c}=(0,r.dU)(t);if(t.searchLoadingState!==o.Gu.PENDING&&d.length)try{t.searchLoadingState=o.Gu.PENDING;let{playlistTrackIds:a=[],suggestedTrackIds:n=[]}=yield s.getTrackIds({uid:i,kind:l,part:d}),c=u(t.items,a);t.searchItems.playlistTrackIds=(0,r.pj)(c),t.searchItems.suggestedTrackIds=(0,r.pj)(n),e.getSearchTracksMeta()}catch(e){c.error(e),e instanceof n.du&&(e.statusCode===n.CN.NOT_FOUND||e.statusCode===n.CN.BAD_REQUEST)&&(t.errorStatusCode=n.CN.NOT_FOUND),t.searchLoadingState!==o.Gu.IDLE&&(t.searchLoadingState=o.Gu.REJECT)}}),getPlaylistByUuid:(0,r.ls)(function*(a){let{playlistUuid:i,richTracks:l=!1,resumeStream:d=!1}=a,{playlistResource:s,modelActionsLogger:u}=(0,r.dU)(t);if(t.loadingState!==o.Gu.PENDING)try{t.loadingState=o.Gu.PENDING;let a=yield s.getPlaylist({playlistUuid:i,resumeStream:d,richTracks:l});yield e.updateData(a),t.loadingState!==o.Gu.IDLE&&(t.loadingState=o.Gu.RESOLVE)}catch(e){u.error(e),e instanceof n.du&&(e.statusCode===n.CN.NOT_FOUND||e.statusCode===n.CN.BAD_REQUEST)&&(t.errorStatusCode=n.CN.NOT_FOUND),t.loadingState!==o.Gu.IDLE&&(t.loadingState=o.Gu.REJECT)}}),moveTrack(e,a){let i=(0,l.ZN)(t.items[e]);if(!(e<0)&&!(a<0)&&!(e>=t.items.length)&&!(a>=t.items.length)&&i&&(t.items.splice(e,1),t.items.splice(a,0,i),(0,r.fh)(t))){let{sonataState:e}=(0,r.yj)(t);e.setUnloadedEntitiesData(v(t.items))}},removeTracksFromItems(e,a){t.items.splice(e,a)},resetSearch(){t.searchItems.playlistTrackIds=null,t.searchItems.suggestedTrackIds=null,t.searchItems.additionTrackInProggress=null,t.searchItems.tracks=null,t.searchLoadingState=o.Gu.IDLE},reset(){let{sonataState:a}=(0,r.yj)(t);a.resetUnloadedEntitiesData(),t.meta=null,t.loadingState=o.Gu.IDLE,t.items=(0,r.pj)([]),t.similarPlaylists=(0,r.pj)([]),t.errorStatusCode=null,e.resetSearch()},refresh(){var a,i;(null===(a=t.meta)||void 0===a?void 0:a.uuid)&&e.getPlaylistByUuid({playlistUuid:null===(i=t.meta)||void 0===i?void 0:i.uuid,resumeStream:!1})}};return e})}}]);