(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"./src/replay/components/player/VideoStreamer/ShakaVideoStreamer/ShakaVideoStreamer.js":function(e,t,r){"use strict";r.r(t);var a=r("./src/replay/components/player/VideoStreamer/common/createVideoStreamerComponent.js"),n=r("./node_modules/shaka-player/dist/shaka-player.compiled.js"),i=r.n(n);var o=new Date(0),s=100,c=10;var l=function(e,t,r){var a=r&&r.liveEdgeMargin||10;return{adjustForDvrStartOffset:function(){if(e&&e.paused&&t.isLive()){var r=t.seekRange().start||0;r>=e.currentTime&&(e.currentTime=r+c)}},calculateNewState:function(){var r=t.seekRange(),n=t.isLive(),i=n?t.getPresentationStartTimeAsDate():new Date,c=e.currentTime-r.start,l=0!==r.end||0!==r.start?r.end-r.start:e.duration===1/0||isNaN(e.duration)?0:e.duration,u=function(e,t){return t?e===1/0||0===e||e<s?"live":"livedvr":"ondemand"}(l,n),f=n&&c>l-a,d=function(e,t,r,a){if(e){if(isNaN(t)){var n=new Date,i=new Date(n.getTime()-1e3*a);return{absolutePosition:n,absoluteStartPosition:i}}return{absolutePosition:new Date(t.getTime()+1e3*(a+r.start)),absoluteStartPosition:new Date(t.getTime()+1e3*r.start)}}return{absolutePosition:o,absoluteStartPosition:o}}(n,i,r,c);return{position:c,duration:l,playMode:u,isAtLiveEdge:f,absolutePosition:d.absolutePosition,absoluteStartPosition:d.absoluteStartPosition}},setPosition:function(r){isNaN(r)&&r===1/0||(e.currentTime=t.seekRange().start+r)},gotoLive:function(){t.isLive()&&(e.currentTime=t.seekRange().end)}}},u=r("./src/replay/components/player/VideoStreamer/types.js"),f="shaka",d="STREAM_ERROR",g="STREAM_ERROR_DRM_CLIENT_UNAVAILABLE",p="STREAM_ERROR_DRM_OUTPUT_BLOCKED",v={3016:function(e){return e.data&&e.data[0]&&3===e.data[0]?{classification:"STREAM_ERROR_DECODE"}:{classification:d}},4012:{classification:d},6001:{classification:g},6002:{classification:g},6003:{classification:d},6007:{classification:"STREAM_ERROR_DOWNLOAD"},6008:{classification:"STREAM_ERROR_DOWNLOAD"},6013:{classification:d},7000:{classification:""},1:{classification:"STREAM_ERROR_DOWNLOAD"},2:{classification:"STREAM_ERROR_DECODE"},3:{classification:"STREAM_ERROR_DECODE"},4:{classification:"STREAM_ERROR_DECODE"},5:{classification:"STREAM_ERROR_DECODE"},6:{classification:"STREAM_ERROR_DECODE"}},k={classification:d};function b(e,t){return Object.keys(t).filter(function(r){return t[r]===parseInt(e,10)})[0]}function m(e,t){if(1001===t.code&&t.data){if(t.data[0]&&/\.ttml|\.vtt|\.srt|subtitle/.test(t.data[0]))return"WARNING";if(502===t.data[1])return"FATAL"}return 4012===t.code?"WARNING":e&&t.code<2e3||2===t.category?"WARNING":"FATAL"}var h=function(e,t,r,a){var n=function(e){if(e.code){var t=v[e.code]||v[Math.floor(e.code/1e3)];return"function"===typeof t?t(e)||k:t||k}return k}(t).classification;if((t.message||"").indexOf("MediaSource"))return new u.a("STREAM_ERROR_TECHNOLOGY_UNSUPPORTED","shaka","This browser does not support playing MPEG-DASH streams with Shaka Player.","FATAL",t);if(n)return n===g&&function(e,t){return t&&"http:"===t.protocol&&0!==t.hostname.indexOf("localhost")&&e&&e.indexOf("Edge")<0&&e.indexOf("Chrome")>0}(r,a)?new u.a(d,f,"DRM playback is blocked in Chrome. Likely reason: This page is not served with HTTPS.",m(e,t),t):new u.a(n,f,function(e,t){if(1001===e.code&&null!=e.data[1])return"Shaka request failed with status "+e.data[1]+" for URL "+e.data[0];if(1002===e.code)return"Shaka request could not be performed for URL "+e.data[0];if(1003===e.code)return"Shaka request timed out for URL "+e.data[0];if(e.message)return e.message;if(t===g)return"Playback of protected content appears to be disabled in the browser.";if(t===p)return"Playback of protected content appears to be disallowed, perhaps due to a non-secure or HDCP-less screen being connected.";var r=b(e.code,i.a.util.Error.Code),a="Shaka error "+b(e.category,i.a.util.Error.Category)+"/"+r+" reported";return e.data[0]?e.data[0].message?a+": "+e.data[0].message:a+": "+e.data[0]:a+" with no further details."}(t,n),m(e,t),t);return new u.a(d,f,"Unknown error reported from Shaka Player.","WARNING",t)},T=r("./src/replay/components/player/VideoStreamer/common/sourceNormalizer.js");var y=function(e){return function(t,r){var a=t.shakaRequestFilter,n=t.shakaResponseFilter,o=Object(T.a)(t.source);if(o)return function(e,t,r){var a=e.getNetworkingEngine();return a&&(a.clearAllRequestFilters(),a.clearAllResponseFilters(),t&&a.registerRequestFilter(t),r&&a.registerResponseFilter(r)),Promise.resolve()}(e,a,n).then(function(){return function(e,t,r){var a=t.licenseUrl,n=t.licenseAcquisitionDetails&&t.licenseAcquisitionDetails.widevineServiceCertificateUrl||r&&r.licenseAcquisition&&r.licenseAcquisition.widevine&&r.licenseAcquisition.widevine.serviceCertificateUrl,i=function(e,t){return/Android(.*)Chrome/.test(e)?{audioRobustness:"SW_SECURE_CRYPTO",videoRobustness:"SW_SECURE_CRYPTO",serviceCertificate:t,_classification:"Android Chrome 58 and newer"}:{audioRobustness:"SW_SECURE_CRYPTO",videoRobustness:"SW_SECURE_DECODE",serviceCertificate:t,_classification:"Desktop"}}(navigator.userAgent,n);return e.configure({drm:{servers:{"com.widevine.alpha":a,"com.microsoft.playready":a},advanced:{"com.widevine.alpha":{audioRobustness:i.audioRobustness,videoRobustness:i.videoRobustness,serverCertificate:i.serviceCertificate},"com.microsoft.playready":{videoRobustness:"SW_SECURE_DECODE",audioRobustness:"SW_SECURE_CRYPTO"}}}}),Promise.resolve()}(e,o,t.configuration)}).then(function(){return e.load(o.streamUrl,o.startPosition)}).catch(function(e){if(e&&e.code!==i.a.util.Error.Code.LOAD_INTERRUPTED)throw h(!1,e,navigator.userAgent,document.location)});if(r&&r.source){var s=e.getNetworkingEngine();return s.clearAllRequestFilters(),s.clearAllResponseFilters(),e.unload()}return Promise.resolve()}},E=r("./src/replay/components/player/VideoStreamer/common/filteredStreamStateUpdater.js"),R=r("./src/replay/components/player/VideoStreamer/common/propertyApplier.js"),S=r("./src/replay/components/player/VideoStreamer/common/playbackLifeCycleManager.js"),P=r("./src/replay/components/player/VideoStreamer/BasicVideoStreamer/basicVideoEventHandlers.js");function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var A=function(e){var t=e.streamer,r=e.videoElement,a=e.shakaPlayer,n=e.streamRangeHelper,i=e.configuration,o=e.applyProperties,s=e.updateStreamState,c=e.log,l=Object(P.a)({streamer:t,videoElement:r,thirdPartyPlayer:a,streamRangeHelper:n,configuration:i,log:c,applyProperties:o,updateStreamState:s}),u=l.videoElementEventHandlers,f=l.pauseStreamRangeUpdater,d={setStage:function(e){},getStage:function(){}},g={error:function(e){var a=e.detail;c&&c("shaka.error");var n=h("started"===d.getStage(),a,navigator.userAgent,document.location);t.props.onPlaybackError&&t.props.onPlaybackError(n),r.error&&s({error:r.error}),"FATAL"===n.severity&&(d.setStage("dead"),s({playState:"inactive",isBuffering:!1,isSeeking:!1})),f.stop()},loading:function(){if(c&&c("shaka.loading"),"new"===d.getStage()){if(d.setStage("starting"),t.props.initialPlaybackProps){var e=t.props.initialPlaybackProps,a=e.isMuted,n=e.volume;o({isMuted:a,volume:n})}s({playState:"starting",isBuffering:!0,volume:r.volume,isMuted:r.muted,isPipAvailable:l.isPipAvailable()})}},streaming:function(){if(c&&c("shaka.streaming"),t.props.initialPlaybackProps){var e=t.props.initialPlaybackProps,a=e.isPaused,i=e.bitrateFix,l=e.bitrateCap;o({bitrateFix:i,bitrateCap:l}),a&&r.pause(),null==i&&s({bitrateFix:null}),null==l&&s({bitrateCap:null})}else s({bitrateFix:null,bitrateCap:null});s(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.forEach(function(t){w(e,t,r[t])})}return e}({isMuted:r.muted,volume:r.volume},n.calculateNewState()))},buffering:function(e){var t=e.buffering;c&&c("shaka.buffering."+t.toString()),t&&"started"===d.getStage()?s({isBuffering:t,playState:"buffering"}):s({isBuffering:t})}};return Object.entries(g).forEach(function(e){var t=O(e,2),r=t[0],n=t[1];a.addEventListener(r,n)}),{videoElementEventHandlers:{onCanPlay:u.onCanPlay,onPlaying:u.onPlaying,onPause:u.onPause,onSeeking:u.onSeeking,onSeeked:u.onSeeked,onDurationChange:u.onDurationChange,onTimeUpdate:u.onTimeUpdate,onVolumeChange:u.onVolumeChange,onProgress:u.onProgress,onEnded:u.onEnded},pauseStreamRangeUpdater:f,setLifeCycleManager:function(e){d=e,l.setLifeCycleManager(e)},cleanup:function(){l.cleanup(),Object.entries(g).forEach(function(e){var t=O(e,2),r=t[0],n=t[1];a.removeEventListener(r,n)})}}},x=r("./src/replay/components/player/VideoStreamer/common/renderers.js"),C=r("./src/replay/components/player/VideoStreamer/common/logger.js"),L=r("./src/replay/components/common.js");function _(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function D(e){return e&&e.bandwidth||0}function j(e,t){return e-t}function N(e,t){return e.bandwidth-t.bandwidth}function V(e){return e&&Math.ceil(e.bandwidth/1e3)||0}function M(e){return e&&e.active&&"variant"===e.type}function U(e,t,r){return r.indexOf(e)===t}var F={abr:{enabled:!0,restrictions:{maxBandwidth:1/0}}},B=function(e,t,r,a){var n=[];function i(){var e=t.getVariantTracks(),a=V(e.filter(M)[0]),i=e.map(V).filter(U).sort(j),o={};a&&(o.currentBitrate=V(e.filter(M)[0])),Object(L.i)(n,i)||(n=i,o.bitrates=i),Object.keys(o).length>0&&r(o)}var o={loading:function(){n=[]},streaming:i,adaptation:i,trackschanged:i};return Object.entries(o).forEach(function(e){var r=_(e,2),a=r[0],n=r[1];t.addEventListener(a,n)}),{cleanup:function(){Object.entries(o).forEach(function(e){var r=_(e,2),a=r[0],n=r[1];t.removeEventListener(a,n)})},fixBitrate:function(e){if("string"===typeof e)try{var n=t.getVariantTracks().slice(0).sort(N),i="min"===e?n[0]:"max"===e?n[n.length-1]:null;i?(t.configure({abr:{enabled:!1,restrictions:{maxBandwidth:1/0}}}),t.selectVariantTrack(i),r({bitrateFix:V(i)})):(t.configure(F),r({bitrateFix:null}),a&&a("Unknown string specified for bitrate lock. Please use a value of type number if a bitrate specified by kbps is intended.",e))}catch(s){t.configure(F),r({bitrateFix:null}),a&&a("Attempting to set "+e+"imum bitrate, but no tracks found. A bit too early, maybe?",t.getVariantTracks())}else if(isNaN(e)||null==e||e<0||!e)t.configure(F),r({bitrateFix:null}),a&&a("Resetting bitrate locking.");else{var o=t.getVariantTracks().filter(function(t){return V(t)===e})[0];o?(t.configure({abr:{enabled:!1,restrictions:{maxBandwidth:1/0}}}),t.selectVariantTrack(o),r({bitrateFix:V(o)}),a&&a("Locking at bitrate "+e+".",o)):(t.configure(F),r({bitrateFix:null}),a&&a("Could not finding matching track for specified lock bitrate "+e+".",t.getVariantTracks()))}},capBitrate:function(e){if(isNaN(e)||e===1/0||null==e||e<0)a&&a("Resetting restrictions for bitrate."),t.configure(F),r({bitrateCap:null});else{var n=t.getVariantTracks().map(D).sort(j)[0];if(n){var i=Math.max(1e3*e,n),o={maxBandwidth:i};t.configure({abr:{enabled:!0,restrictions:o}}),r({bitrateCap:Math.ceil(i/1e3)}),o.maxBandwidth===n?a&&a("Applying restrictions for bitrate, but aligning to lowest available bitrate.",o):a&&a("Applying restrictions for bitrate.",o)}else a&&a("Bitrate range not found. Not safe to applying restrictions for bitrate.",t.getVariantTracks())}}}};function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var q=["id","language","kind","label"];function H(e,t){return e&&t&&q.filter(function(r){return function(e,t){return e===t||null==e&&null==t||Number.isNaN(e)&&Number.isNaN(t)}(e[r],t[r])}).length===q.length||!e&&!t}function I(e,t,r){return{id:e,kind:"subtitle"===r.kind?"subtitles":r.kind||"",label:r.label||"",language:r.language||"",origin:t}}var G=["text/vtt","application/ttml+xml"];function Y(e){var t=e.contentType;return t&&G.filter(function(e){return 0===t.indexOf(e)}).length>0}var J=function(e,t){var r=[],a=S.b;function n(){return(e.getTextTracks()||[]).filter(function(e){return e.active})[0]}function i(i){var o=null,s=e.isTextTrackVisible()?n():null;if(s){var c=r.filter(function(e){return!e.isBlacklisted&&null!=e.selectableTrack&&H(e.shakaTrack,s)})[0];o=c?c.selectableTrack:null}if(i){var l=r.filter(function(e){return e.selectableTrack}).map(function(e){return e.selectableTrack});Object(L.i)(l,a)?t({textTracks:a,currentTextTrack:o}):(a=l,t({textTracks:l,currentTextTrack:o}))}else t({currentTextTrack:o})}function o(){r.length=0,i(!0)}function s(t){var a=t.filter(Y);e.removeEventListener("trackschanged",l.trackschanged);var n,o,s=a.filter(function(e){var t=r.filter(function(t){return t.sourceTrack&&t.sourceTrack.src===e.src&&t.shakaTrack});if(0===t.length)return!0;var a=t[0];return!!a.shakaTrack&&(a.sourceTrack=e,a.isBlacklisted=!1,a.isLoaded=!0,a.shakaTrack&&(a.selectableTrack=I(a.shakaTrack.id,"side-loaded",a.shakaTrack)),a.error=null,a.loadPromise=Promise.resolve(),!1)});return(n=s.map(function(t){var r=t.contentType,a=r?r.indexOf(";charset"):-1;return a>0&&(r=r&&r.substr(0,a)),{addPromise:e.addTextTrack(t.src,t.language,t.kind,r,null,t.label),sourceTrack:t}}),o=n.map(function(e){var t={id:null,sourceTrack:e.sourceTrack,shakaTrack:null,isBlacklisted:!1,isLoaded:!1,error:null,selectableTrack:null,shakaLoadPromise:e.addPromise.then(function(e){return t.isLoaded=!0,t.shakaTrack=e,t.selectableTrack=I(e.id,"side-loaded",e),e},function(r){return t.error=r||new Error("Shaka rejected adding a track with the URL "+e.sourceTrack.src),t.isBlacklisted=!0,t.isLoaded=!0,null})};return t}),r=r.concat(o),Promise.all(o.map(function(e){return e.shakaLoadPromise}))).then(function(){e.addEventListener("trackschanged",l.trackschanged),i(!0)})}function c(){var t=e.isTextTrackVisible()?n():null;r.filter(function(e){return null!=e.sourceTrack}).forEach(function(r){r.selectableTrack&&(r.selectableTrack=null),t&&r.shakaTrack&&r.shakaTrack.active&&H(t,r.shakaTrack)&&e.setTextTrackVisibility(!1),r.isBlacklisted=!0})}var l={loading:o,trackschanged:function(){var t=e.getTextTracks()||[];if(0===t.length)o();else{var a=r.filter(function(e){return 1===t.filter(function(t){return H(t,e.shakaTrack)}).length}),n=a.length<r.length;if(t.length>a.length){var s=t.filter(function(e){return 0===a.filter(function(t){return H(e,t.shakaTrack)}).length}).map(function(e){return{sourceTrack:null,shakaTrack:e,isBlacklisted:!1,selectableTrack:I(e.id,"in-stream",e),isLoaded:!0,error:null}});r=a.concat(s),i(!0)}else n&&(r=a,i(!0))}},texttrackvisibility:function(){return i(!1)}};return Object.entries(l).forEach(function(t){var r=W(t,2),a=r[0],n=r[1];e.addEventListener(a,n)}),{handleSelectedTextTrackChange:function(t){var a,n=t&&r.filter(function(e){return e.selectableTrack===t})[0];(a=n&&n.shakaTrack)?(e.removeEventListener("texttrackvisibility",l.texttrackvisibility),e.isTextTrackVisible()||e.setTextTrackVisibility(!0),window.setTimeout(function(){var t=(e.getTextTracks()||[]).filter(function(e){return H(e,a)})[0];t?e.selectTextTrack(t):a&&e.selectTextTrack(a),i(!1),e.addEventListener("texttrackvisibility",l.texttrackvisibility)},1)):e.isTextTrackVisible()&&e.setTextTrackVisibility(!1)},handleTextTracksPropChange:function(e){c(),s(Array.isArray(e.textTracks)?e.textTracks:[])},handleSourcePropChange:function(e){var t=Array.isArray(e.textTracks)?e.textTracks:[],r=Object(T.a)(e.source);r&&r.textTracks?s(t.concat(r.textTracks)):s(t)},clear:function(){c()},cleanup:function(){o(),Object.entries(l).forEach(function(t){var r=W(t,2),a=r[0],n=r[1];e.removeEventListener(a,n)})}}};function z(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],a=!0,n=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(a=(o=s.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(c){n=!0,i=c}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var K=function(e,t){var r=e.language,a=e.role;return{selectableTrack:{id:r+a||t,kind:a,label:"",language:r,origin:"in-stream"},language:r,role:a}},Q=function(e,t){var r=t.language,a=t.role;return e.language===r&&(!a||e.roles&&e.roles.indexOf(a)>=0)},X=function(e,t){var r=[];function a(){var a=e.getVariantTracks().filter(function(e){return e.active})[0],n=a&&r.filter(function(e){return Q(a,e)}).map(function(e){return e.selectableTrack})[0];t({currentAudioTrack:n})}function n(){var n=(r=e.getAudioLanguagesAndRoles().map(K)).map(function(e){return e.selectableTrack});t({audioTracks:n}),a()}var i={loading:n,trackschanged:n,adaptation:a};return Object.entries(i).forEach(function(t){var r=z(t,2),a=r[0],n=r[1];e.addEventListener(a,n)}),{cleanup:function(){Object.entries(i).forEach(function(t){var r=z(t,2),a=r[0],n=r[1];e.removeEventListener(a,n)})},handleSourceChange:function(){r.length=0},handleSelectedAudioTrackChange:function(t){var n=r.filter(function(e){return e.selectableTrack===t})[0];n&&(e.selectAudioLanguage(n.language,n.role),a())}}};var Z=Object(a.a)("ShakaVideoStreamer",function(e,t,r){var a;try{a=function(e,t){var r=t&&t.shakaPlayer;r&&r.installPolyfills&&i.a.polyfill.installAll();var a=new i.a.Player(e);return r&&r.customConfiguration&&a.configure(r.customConfiguration),a}(r,t)}catch(w){return Promise.reject(h(!1,w))}var n=l(r,a,t),o=y(a),s=Object(E.a)(e),c=J(a,s),u=X(a,s),f=B(e,a,s,Object(C.a)(window,"bitrateManager").log),d=Object(R.a)(r,n,c,u,f),g=Object(C.a)(window,"videoEvents").log,p=A({streamer:e,videoElement:r,shakaPlayer:a,streamRangeHelper:n,configuration:t,applyProperties:d,updateStreamState:s,log:g}),v=p.videoElementEventHandlers,k=p.setLifeCycleManager,b=Object(S.a)(s,p.pauseStreamRangeUpdater,Object(C.a)(window,"lifecycle").log);k(b);var m=b.startPlaybackSession,T=b.endPlaybackSession,P=a,O=x.a;return Promise.resolve({cleanup:function(){return c.cleanup(),u.cleanup(),b.cleanup(),p.cleanup(),f.cleanup(),function(e){return Promise.resolve(e&&e.destroy())}(a)},render:O,textTrackManager:c,audioTrackManager:u,thirdPartyPlayer:P,applyProperties:d,handleSourceChange:o,startPlaybackSession:m,endPlaybackSession:T,videoElementEventHandlers:v})});t.default=Z}}]);
//# sourceMappingURL=50.53585719bbe7637c8855.js.map