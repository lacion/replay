(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"./src/replay/components/player/VideoStreamer/HlsjsVideoStreamer/HlsjsVideoStreamer.js":function(e,t,r){"use strict";r.r(t);var n=r("./src/replay/components/player/VideoStreamer/common/createVideoStreamerComponent.js"),a=r("./node_modules/hls.js/dist/hls.js"),i=r.n(a),o=r("./src/replay/components/player/VideoStreamer/types.js");function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=e.hls;r&&e.subscribers.forEach(function(e){return e(r,t)})}function c(e,t){return new Promise(function(r,n){if(i.a.isSupported()){var a=t&&t.hlsjs&&t.hlsjs.customConfiguration,s=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){l(e,t,r[t])})}return e}({autoStartLoad:!1,debug:t&&"DEBUG"===t.logLevel,enableWorker:!1},a),c=new i.a(s);c.on(i.a.Events.MEDIA_ATTACHED,function(){r(c)}),c.attachMedia(e)}else n(new o.a("STREAM_ERROR_TECHNOLOGY_UNSUPPORTED","hlsjs","Hls.js is not supported in this browser."))})}function u(e){var t=e.hls;return t?(t.stopLoad(),s(e,"off"),Promise.resolve(t.destroy())):Promise.resolve()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=new Date(0),p=100;var m=function(e,t,r){var n,a,o,l=r&&r.liveEdgeMargin||10,s=0,c=!1;function u(){a=null,s=0,c=!1}var m=(d(n={},i.a.Events.MANIFEST_LOADING,function(){return u}),d(n,i.a.Events.LEVEL_LOADED,function(e,t){c=t.details.live,s=t.details.totalduration;var r=t.details&&t.details.fragments&&t.details.fragments[0]&&t.details.fragments[0].programDateTime;r&&(a=new Date(r))}),n);return t.subscribers.push(function(e,t){Object.entries(m).forEach(function(r){var n=f(r,2),a=n[0],i=n[1];e[t](a,i),"on"===t&&(o=e)})}),{adjustForDvrStartOffset:function(){},calculateNewState:function(){var t;t=s?Math.max((e.currentTime||0)-Math.max(e.duration-s,0),0):e.currentTime||0;var r=s||e.duration,n=function(e,t,r){if(t instanceof Date&&!isNaN(t))return{absolutePosition:new Date(t.getTime()+1e3*r),absoluteStartPosition:t};if(e){var n=new Date,a=new Date(n.getTime()-1e3*r);return{absolutePosition:n,absoluteStartPosition:a}}return{absolutePosition:v,absoluteStartPosition:v}}(c,a,t),i=n.absolutePosition,u=n.absoluteStartPosition;return{position:t,duration:r,playMode:function(e,t){return t?e===1/0||0===e||e<p?"live":"livedvr":"ondemand"}(r,c),isAtLiveEdge:o&&function(e,t,r,n){return!!r&&(e.liveSyncPosition?t.currentTime>e.liveSyncPosition-n:e.config&&e.config.liveSyncDuration?t.currentTime>t.duration-(e.config.liveSyncDuration+n):!(!e.config||!e.config.liveSyncDurationCount)&&t.currentTime>t.duration-(10*e.config.liveSyncDurationCount+n))}(o,e,c,l),absolutePosition:i,absoluteStartPosition:u}},setPosition:function(t){isNaN(t)||t===1/0||isNaN(e.duration)||e.duration===1/0||(e.currentTime=s?t+e.duration-s:t)},gotoLive:function(){c&&o&&(o.liveSyncPosition?e.currentTime=o.liveSyncPosition:o.config&&o.config.liveSyncDuration?e.currentTime=e.duration-(o.config.liveSyncDuration+l):o.config&&o.config.liveSyncDurationCount?e.currentTime=e.duration-(10*o.config.liveSyncDurationCount+l):e.currentTime=e.duration-l)}}},E=r("./src/replay/components/player/VideoStreamer/common/sourceNormalizer.js"),g=function(e){return function(t,r){var n=e.videoElement;u(e);var a=Object(E.a)(t.source);return a?c(n,t.configuration).then(function(t){return e.hls=t,s(e,"on"),new Promise(function(e,r){try{t.on(i.a.Events.MANIFEST_PARSED,function n(){t.off(i.a.Events.MANIFEST_PARSED,n);try{a.startPosition?t.startLoad(a.startPosition):t.startLoad(),e()}catch(l){r(new o.a("STREAM_ERROR","hlsjs","Stream load start failed.","FATAL",l))}}),t.loadSource(a.streamUrl)}catch(n){r(new o.a("STREAM_ERROR","hlsjs","Stream load failed.","FATAL",n))}})}):Promise.resolve()}},b=r("./src/replay/components/player/VideoStreamer/common/filteredStreamStateUpdater.js"),T=r("./src/replay/components/player/VideoStreamer/common/propertyApplier.js"),y=r("./src/replay/components/player/VideoStreamer/common/playbackLifeCycleManager.js"),h=r("./src/replay/components/player/VideoStreamer/common/renderers.js"),k=r("./src/replay/components/player/VideoStreamer/common/logger.js");function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=function(e){var t=[];return e?e.filter(function(e){var r="".concat(e.lang||"","!").concat(e.name||""),n=t.indexOf(r)<0;return n&&t.push(r),n}).map(function(e){return{id:e.id,language:e.lang||"unknown",kind:"",label:e.name||"unknown",origin:"in-stream"}}):[]},O=function(e,t){return!e&&!t||e===t},L=function(e,t){return!e||!t||e===t},P=function(e,t){if(e.length===t.length){for(var r=0;r<e.length;r++)if(!O(e[r].id,t[r].id)||!O(e[r].language,t[r].language)||!O(e[r].label,t[r].label))return!0;return!1}return!0},D=function(e,t){var r,n,a=[];function o(){if(n){var e=R(n.audioTracks);P(e,a)&&(a=e)}}function l(){var e=null;if(n){var r=n.audioTracks.filter(function(e){return e.id===n.audioTrack})[0];if(r){var i=r.name,o=r.lang;e=a.filter(function(e){var t=e.label,r=e.language;return t===i&&r===o})[0]}}t({audioTracks:a,currentAudioTrack:e})}function s(){o(),l()}function c(){a=[]}var u=(A(r={},i.a.Events.MANIFEST_LOADING,function(){return c}),A(r,i.a.Events.MANIFEST_PARSED,s),A(r,i.a.Events.AUDIO_TRACK_SWITCHED,function(){o(),l()}),r);return e.subscribers.push(function(e,t){Object.entries(u).forEach(function(r){var a=S(r,2),i=a[0],o=a[1];e[t](i,o),"on"===t&&(n=e)})}),{cleanup:function(){},handleSourceChange:function(){s()},handleSelectedAudioTrackChange:function(e){var t=e;if(n&&n.audioTracks&&t){var r=(n.audioTracks[n.audioTrack]||{}).groupId,a=n.audioTracks.filter(function(e){return L(e.groupId,r)&&L(e.name,t.label)&&L(e.lang,t.language)})[0];a&&(n.audioTrack=a.id)}}}},_=r("./src/replay/components/common.js"),w=["disabled","hidden","showing"];function x(e){var t=e.mode;return"number"===typeof t?w[t]:t}function j(e,t){e.mode="number"===typeof e.mode?w.indexOf(t):t}function C(e,t){return Number.isNaN(e)&&Number.isNaN(t)||null==e&&null==t||e===t}function N(e,t,r){return{id:e,kind:r.kind||"",label:r.label||"",language:r.language||"",origin:t}}var F=function(e,t,r,n){var a=[],i=null,o=y.b,l=0,s=window.VTTCue||window.TextTrackCue;function c(){i=a.filter(function(e){return null!=e.videoElementTrack&&"showing"===x(e.videoElementTrack)}).map(function(e){return e.selectableTrack})[0];var e=a.filter(function(e){return e.selectableTrack}).map(function(e){return e.selectableTrack});Object(_.i)(e,o)?r({currentTextTrack:i,textTracks:o}):(o=e,r({currentTextTrack:i,textTracks:e}))}function u(t){if(Array.isArray(t)){e.textTracks.removeEventListener("addtrack",v),e.textTracks.removeEventListener("removetrack",p);var r=t.filter(function(e){var t=a.filter(function(t){return function(e,t){if(e&&t){if(e.cues&&t.cues){var r=e.cues,n=t.cues;if(r.length===n.length&&r.filter(function(e,t){return e.start===n[t].start&&e.end===n[t].end&&e.content===n[t].content}).length!==r.length)return!1}return C(e.language,t.language)&&C(e.kind,t.kind)&&C(e.label,t.label)&&C(e.src,t.src)}return C(e,t)}(t.sourceTrack,e)&&!t.isBlacklisted});if(0===t.length)return!0;var r=t[0];return r.sourceTrack=e,r.isBlacklisted=!1,r.isLoaded=!0,!1}).map(function(t){var r=++l;if(Array.isArray(t.cues)){var n=t.cues,a=e.addTextTrack("subtitles",t.label,t.language);return n.forEach(function(e){a.addCue(new s(e.start,e.end,e.content))}),{id:r,sourceTrack:t,isBlacklisted:!1,videoElementTrack:a,selectableTrack:N(r,"side-loaded",a),loadPromise:Promise.resolve(a),isLoaded:!0}}var i={src:t.src,srclang:t.language,kind:t.kind||"subtitles",label:t.label},o=new Promise(function(e){i.onRef=function(t){var r=t;if(r){j(r.track,"hidden");var n=function t(){r.removeEventListener("load",t),r.removeEventListener("error",a),e(r.track)},a=function t(a){r.removeEventListener("load",n),r.removeEventListener("error",t),e()};r.addEventListener("load",n),r.addEventListener("error",a)}}}),c={id:r,sourceTrack:t,isBlacklisted:!1,videoElementTrack:void 0,selectableTrack:void 0,trackElementData:i,loadPromise:o,isLoaded:!1};return o.then(function(e){null!=e&&(c.videoElementTrack=e,c.selectableTrack=N(r,"side-loaded",e)),c.isLoaded=!0}),c});return a=a.concat(r),n(a.filter(function(e){return e.trackElementData&&!e.isBlacklisted}).map(function(e){return e.trackElementData})),Promise.all(r.map(function(e){return e.loadPromise})).then(function(){e.textTracks.addEventListener("addtrack",v),e.textTracks.addEventListener("removetrack",p),c()})}return Promise.resolve()}function f(e){if(0!==e.length||0!==a.length){for(var t=[],r=0;r<e.length;r++)t.push(e[r]);var n=a.filter(function(e){return t.indexOf(e.videoElementTrack)>=0});if(t.length>n.length){var i=t.filter(function(e){return("metadata"!==(t=e).kind&&!("inBandMetadataTrackDispatchType"in t)||t.cues&&t.cues.length||t.label||t.language)&&0===n.filter(function(t){return e===t.videoElementTrack}).length;var t}).map(function(e){var t=++l;return{id:t,sourceTrack:null,videoElementTrack:e,isBlacklisted:!1,selectableTrack:N(t,"in-stream",e),isLoaded:!0}});a=n.concat(i)}else a=n}}function d(t){f(e.textTracks),a.forEach(function(e){if((t||null!=e.sourceTrack)&&(e.isBlacklisted=!0),null!=e.videoElementTrack&&t){var r=e.videoElementTrack;if(r.cues)for(;r.cues.length;)r.removeCue(r.cues[0]);j(r,"disabled")}e.selectableTrack=null}),o=y.b,n([])}function v(){f(e.textTracks),c()}function p(){f(e.textTracks),c()}return e.textTracks.addEventListener("addtrack",v),e.textTracks.addEventListener("removetrack",p),{handleSelectedTextTrackChange:function(e){if(a.filter(function(e){return e.videoElementTrack&&"showing"===x(e.videoElementTrack)}).forEach(function(e){return e.videoElementTrack&&j(e.videoElementTrack,"hidden")}),e){t.hls&&(t.hls.subtitleDisplay=!0);var r=a.filter(function(t){return t.selectableTrack===e})[0];r&&r.videoElementTrack&&j(r.videoElementTrack,"showing")}else t.hls&&(t.hls.subtitleDisplay=!1);c()},handleTextTracksPropChange:function(e){d(!1),u(e.source&&Array.isArray(e.textTracks)?e.textTracks:[])},handleSourcePropChange:function(t){f(e.textTracks);var r=t.source&&Array.isArray(t.textTracks)?t.textTracks:[],n=Object(E.a)(t.source);n&&n.textTracks?u(r.concat(n.textTracks)):u(r)},clear:function(){d(!0)},cleanup:function(){e.textTracks.removeEventListener("addtrack",v),e.textTracks.removeEventListener("removetrack",p)}}};function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e){return e&&Math.ceil(e.bitrate/1e3)||0}var V=function(e,t,r,n){var a,o,l=[];function s(e,t){if(o){var a=Array.isArray(o.levels)?o.levels.map(U):[];Object(_.i)(l,a)&&(a=l);var s=e===i.a.Events.LEVEL_SWITCHED?t.level:-1===o.currentLevel?o.startLevel:o.currentLevel;if(-1===s)n&&n("No hls.js level reported currently or selected for start."),r({bitrates:a});else{var c=U(o.levels[s]);r({currentBitrate:c,bitrates:a})}}}var c=(I(a={},i.a.Events.MANIFEST_LOADING,function(){l=[]}),I(a,i.a.Events.MANIFEST_PARSED,s),I(a,i.a.Events.LEVEL_SWITCHED,s),I(a,i.a.Events.LEVEL_UPDATED,s),a);return t.subscribers.push(function(e,t){Object.entries(c).forEach(function(r){var n=M(r,2),a=n[0],i=n[1];e[t](a,i),"on"===t&&(o=e)})}),{fixBitrate:function(e){if(o)if("min"===e)Array.isArray(o.levels)&&o.levels.length>0&&(o.nextLevel=0,r({bitrateFix:U(o.levels[0])}),n&&n("Fixing bitrate to lowest level out of "+o.levels.length));else if("max"===e)Array.isArray(o.levels)&&o.levels.length>0&&(o.nextLevel=o.levels.length-1,r({bitrateFix:U(o.levels[o.levels.length-1])}),n&&n("Fixing bitrate to highest level out of "+o.levels.length));else if(null==e||isNaN(e)||e<0||!e)n&&n("Resetting fixing of bitrate."),o.nextLevel=-1,r({bitrateFix:null});else if("string"===typeof e)n&&n("Unknown string specified for bitrate lock. Please use a value of type number if a bitrate specified by kbps is intended.",e);else if(Array.isArray(o.levels)){for(var t=0;t<o.levels.length;t++)if(U(o.levels[t])===e)return o.nextLevel=t,n&&n("Fixing bitrate to HLS level "+t,o.levels),void r({bitrateFix:e});n&&n("Desired bitrate lock didn't match any bitrates specified in the hls.levels list. Not applied.",o.levels)}else n&&n("Found no HLS levels from where bitrate fixing can be applied.",o.levels)},capBitrate:function(e){if(o)if(isNaN(e)||e===1/0||null==e||e<0)n&&n("Resetting restrictions for bitrate."),o.autoLevelCapping=-1,r({bitrateCap:null});else if(Array.isArray(o.levels)){for(var t=!1,a=0;a<o.levels.length;a++){var i=U(o.levels[a]);if(i===e){o.autoLevelCapping=a,r({bitrateCap:U(o.levels[a])}),n&&n("Desired bitrate cap "+e+" is equal to level on index "+a+" in hls.js.",o.levels),t=!0;break}if(i>e){a>0?(o.autoLevelCapping=a-1,r({bitrateCap:U(o.levels[a-1])}),n&&n("Desired bitrate cap "+e+" is closest to level on index "+(a-1)+" in hls.js.",o.levels)):(o.autoLevelCapping=0,n&&n("Desired bitrate cap "+e+" appears to be lower than the lowest HLS level. Aligning to lowest level.",o.levels),r({bitrateCap:U(o.levels[0])})),t=!0;break}}t||n&&n("Desired bitrate cap appears to be higher than the higher HLS level. Not applicable.",o.levels)}else n&&n("Found no HLS levels from where bitrate capping can be applied.",o.levels)}}},B=r("./src/replay/components/player/VideoStreamer/BasicVideoStreamer/basicVideoEventHandlers.js"),H="hlsjs",G=i.a.ErrorDetails,K=[G.MANIFEST_LOAD_ERROR,G.MANIFEST_LOAD_TIMEOUT,G.LEVEL_LOAD_ERROR,G.LEVEL_LOAD_TIMEOUT,G.AUDIO_TRACK_LOAD_ERROR,G.AUDIO_TRACK_LOAD_TIMEOUT,G.FRAG_LOAD_ERROR,G.FRAG_LOOP_LOADING_ERROR,G.FRAG_LOAD_TIMEOUT,G.KEY_LOAD_ERROR,G.KEY_LOAD_TIMEOUT],W=[G.MANIFEST_PARSING_ERROR,G.MANIFEST_INCOMPATIBLE_CODECS_ERROR,G.FRAG_DECRYPT_ERROR,G.BUFFER_ADD_CODEC_ERROR,G.FRAG_PARSING_ERROR];function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(s){a=!0,i=s}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function J(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var q=function(e){var t,r=e.streamer,n=e.videoElement,a=e.instanceKeeper,l=e.streamRangeHelper,s=e.configuration,c=e.applyProperties,u=e.updateStreamState,f=e.log,d=Object(B.a)({streamer:r,videoElement:n,streamRangeHelper:l,configuration:s,log:f,applyProperties:c,updateStreamState:u}),v=d.videoElementEventHandlers,p=d.pauseStreamRangeUpdater,m={setStage:function(e){},getStage:function(){}};function E(e){f&&f("hlsjs.error");var t,a,i,l=(m.getStage(),a=(t=e).fatal?"FATAL":"WARNING",i=(t&&t.details&&K.indexOf(t.details)>=0?"STREAM_ERROR_DOWNLOAD":W.indexOf(t.details)>=0&&"STREAM_ERROR_DECODE")||"STREAM_ERROR",new o.a(i,H,function(e){var t=(e.type?e.type+"/":"")+(e.details||"");return"string"===typeof e.reason?t+": "+e.reason:t}(t),a,t));r.props.onPlaybackError&&r.props.onPlaybackError(l),n.error&&u({error:n.error}),"FATAL"===l.severity&&(m.setStage("dead"),u({playState:"inactive",isBuffering:!1,isSeeking:!1})),p.stop()}var g=(J(t={},i.a.Events.ERROR,function(e,t){switch(t.details){case i.a.ErrorDetails.BUFFER_STALLED_ERROR:u({isBuffering:!0}),"started"===m.getStage()&&u({playState:"buffering"});break;case i.a.ErrorDetails.BUFFER_SEEK_OVER_HOLE:case i.a.ErrorDetails.BUFFER_NUDGE_ON_STALL:break;case i.a.ErrorDetails.MANIFEST_PARSING_ERROR:t.url&&!t.url.endsWith("undefined")&&E(t);break;default:E(t)}}),J(t,i.a.Events.MANIFEST_LOADING,function(){if(f&&f("hlsjs.loading"),"new"===m.getStage()){if(m.setStage("starting"),r.props.initialPlaybackProps){var e=r.props.initialPlaybackProps,t=e.isMuted,a=e.volume;c({isMuted:t,volume:a})}u({playState:"starting",isBuffering:!0,volume:n.volume,isMuted:n.muted,isPipAvailable:d.isPipAvailable()})}}),J(t,i.a.Events.FRAG_BUFFERED,function(){u({isBuffering:!1})}),J(t,i.a.Events.MANIFEST_PARSED,function(){if(f&&f("hlsjs.parsed"),r.props.initialPlaybackProps){var e=r.props.initialPlaybackProps,t=e.isPaused,a=e.bitrateFix,i=e.bitrateCap;t&&n.pause(),c({bitrateFix:a,bitrateCap:i}),null==a&&u({bitrateFix:null}),null==i&&u({bitrateCap:null})}else u({bitrateFix:null,bitrateCap:null});u(l.calculateNewState())}),t);return a.subscribers.push(function(e,t){Object.entries(g).forEach(function(r){var n=Y(r,2),a=n[0],i=n[1];e[t](a,i)})}),{videoElementEventHandlers:{onCanPlay:v.onCanPlay,onPlaying:v.onPlaying,onPause:v.onPause,onSeeking:v.onSeeking,onSeeked:v.onSeeked,onDurationChange:v.onDurationChange,onTimeUpdate:v.onTimeUpdate,onVolumeChange:v.onVolumeChange,onProgress:v.onProgress,onEnded:v.onEnded,onError:v.onError},pauseStreamRangeUpdater:p,setLifeCycleManager:function(e){m=e,d.setLifeCycleManager(e)}}};var z=Object(n.a)("HlsjsVideoStreamer",function(e,t,r,n){var a={videoElement:r,subscribers:[]},i=m(r,a,t),o=g(a),l=Object(b.a)(e),s=F(r,a,l,n),c=D(a,l),f=V(e,a,l,Object(k.a)(window,"bitrateManager").log),d=Object(T.a)(r,i,s,c,f),v=Object(k.a)(window,"videoEvents").log,p=q({streamer:e,videoElement:r,instanceKeeper:a,streamRangeHelper:i,configuration:t,applyProperties:d,updateStreamState:l,log:v}),E=p.videoElementEventHandlers,S=p.setLifeCycleManager,A=Object(y.a)(l,p.pauseStreamRangeUpdater,Object(k.a)(window,"lifecycle").log);S(A);var R=A.startPlaybackSession,O=A.endPlaybackSession,L=a,P=h.a;return Promise.resolve({cleanup:function(){return s.cleanup(),A.cleanup(),u(a)},render:P,textTrackManager:s,audioTrackManager:c,thirdPartyPlayer:L,applyProperties:d,handleSourceChange:o,startPlaybackSession:R,endPlaybackSession:O,videoElementEventHandlers:E})});t.default=z}}]);
//# sourceMappingURL=48.f6ff8b5eedfe2cfc187c.js.map