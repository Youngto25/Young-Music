!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,t){if(!w[e]||!_[e])return;for(var n in _[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(g[n]=t[n]);0==--y&&0===$&&b()}(e,n),t&&t(e,n)};var n,i=!0,r="8836d2856ce3d123d7fc",s=1e4,o={},a=[],c=[];function l(e){var t=x[e];if(!t)return j;var i=function(i){return t.hot.active?(x[i]?-1===x[i].parents.indexOf(e)&&x[i].parents.push(e):(a=[e],n=i),-1===t.children.indexOf(i)&&t.children.push(i)):(console.warn("[HMR] unexpected require("+i+") from disposed module "+e),a=[]),j(i)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(t){j[e]=t}}};for(var s in j)Object.prototype.hasOwnProperty.call(j,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(i,s,r(s));return i.e=function(e){return"ready"===h&&u("prepare"),$++,j.e(e).then(t,function(e){throw t(),e});function t(){$--,"prepare"===h&&(v[e]||T(e),0===$&&0===y&&b())}},i.t=function(e,t){return 1&t&&(e=i(e)),j.t(e,-2&t)},i}function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var i=0;i<e.length;i++)t._acceptedDependencies[e[i]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:S,apply:E,status:function(e){if(!e)return h;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:o[e]};return n=void 0,t}var p=[],h="idle";function u(e){h=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var m,g,f,y=0,$=0,v={},_={},w={};function L(e){return+e+""===e?+e:e}function S(e){if("idle"!==h)throw new Error("check() is only allowed in idle status");return i=e,u("check"),(t=s,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var i=new XMLHttpRequest,s=j.p+""+r+".hot-update.json";i.open("GET",s,!0),i.timeout=t,i.send(null)}catch(e){return n(e)}i.onreadystatechange=function(){if(4===i.readyState)if(0===i.status)n(new Error("Manifest request to "+s+" timed out."));else if(404===i.status)e();else if(200!==i.status&&304!==i.status)n(new Error("Manifest request to "+s+" failed."));else{try{var t=JSON.parse(i.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return u("idle"),null;_={},v={},w=e.c,f=e.h,u("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});g={};return T(1),"prepare"===h&&0===$&&0===y&&b(),t});var t}function T(e){w[e]?(_[e]=!0,y++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=j.p+""+e+"."+r+".hot-update.js",document.head.appendChild(t)}(e)):v[e]=!0}function b(){u("ready");var e=m;if(m=null,e)if(i)Promise.resolve().then(function(){return E(i)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in g)Object.prototype.hasOwnProperty.call(g,n)&&t.push(L(n));e.resolve(t)}}function E(t){if("ready"!==h)throw new Error("apply() is only allowed in ready status");var n,i,s,c,l;function d(e){for(var t=[e],n={},i=t.map(function(e){return{chain:[e],id:e}});i.length>0;){var r=i.pop(),s=r.id,o=r.chain;if((c=x[s])&&!c.hot._selfAccepted){if(c.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:s};if(c.hot._main)return{type:"unaccepted",chain:o,moduleId:s};for(var a=0;a<c.parents.length;a++){var l=c.parents[a],d=x[l];if(d){if(d.hot._declinedDependencies[s])return{type:"declined",chain:o.concat([l]),moduleId:s,parentId:l};-1===t.indexOf(l)&&(d.hot._acceptedDependencies[s]?(n[l]||(n[l]=[]),p(n[l],[s])):(delete n[l],t.push(l),i.push({chain:o.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];-1===e.indexOf(i)&&e.push(i)}}t=t||{};var m={},y=[],$={},v=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var _ in g)if(Object.prototype.hasOwnProperty.call(g,_)){var S;l=L(_);var T=!1,b=!1,E=!1,O="";switch((S=g[_]?d(l):{type:"disposed",moduleId:_}).chain&&(O="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(T=new Error("Aborted because of self decline: "+S.moduleId+O));break;case"declined":t.onDeclined&&t.onDeclined(S),t.ignoreDeclined||(T=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+O));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(S),t.ignoreUnaccepted||(T=new Error("Aborted because "+l+" is not accepted"+O));break;case"accepted":t.onAccepted&&t.onAccepted(S),b=!0;break;case"disposed":t.onDisposed&&t.onDisposed(S),E=!0;break;default:throw new Error("Unexception type "+S.type)}if(T)return u("abort"),Promise.reject(T);if(b)for(l in $[l]=g[l],p(y,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,l)&&(m[l]||(m[l]=[]),p(m[l],S.outdatedDependencies[l]));E&&(p(y,[S.moduleId]),$[l]=v)}var I,k=[];for(i=0;i<y.length;i++)l=y[i],x[l]&&x[l].hot._selfAccepted&&$[l]!==v&&k.push({module:l,errorHandler:x[l].hot._selfAccepted});u("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var H,A,P=y.slice();P.length>0;)if(l=P.pop(),c=x[l]){var M={},D=c.hot._disposeHandlers;for(s=0;s<D.length;s++)(n=D[s])(M);for(o[l]=M,c.hot.active=!1,delete x[l],delete m[l],s=0;s<c.children.length;s++){var q=x[c.children[s]];q&&((I=q.parents.indexOf(l))>=0&&q.parents.splice(I,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=x[l]))for(A=m[l],s=0;s<A.length;s++)H=A[s],(I=c.children.indexOf(H))>=0&&c.children.splice(I,1);for(l in u("apply"),r=f,$)Object.prototype.hasOwnProperty.call($,l)&&(e[l]=$[l]);var C=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(c=x[l])){A=m[l];var U=[];for(i=0;i<A.length;i++)if(H=A[i],n=c.hot._acceptedDependencies[H]){if(-1!==U.indexOf(n))continue;U.push(n)}for(i=0;i<U.length;i++){n=U[i];try{n(A)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:A[i],error:e}),t.ignoreErrored||C||(C=e)}}}for(i=0;i<k.length;i++){var X=k[i];l=X.module,a=[l];try{j(l)}catch(e){if("function"==typeof X.errorHandler)try{X.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||C||(C=n),C||(C=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||C||(C=e)}}return C?(u("fail"),Promise.reject(C)):(u("idle"),new Promise(function(e){e(y)}))}var x={};function j(t){if(x[t])return x[t].exports;var n=x[t]={i:t,l:!1,exports:{},hot:d(t),parents:(c=a,a=[],c),children:[]};return e[t].call(n.exports,n,n.exports,l(t)),n.l=!0,n.exports}j.m=e,j.c=x,j.d=function(e,t,n){j.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,t){if(1&t&&(e=j(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(j.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)j.d(n,i,function(t){return e[t]}.bind(null,i));return n},j.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(t,"a",t),t},j.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},j.p="",j.h=function(){return r},l(13)(j.s=13)}([function(e,t){e.exports=function(e){let t=Array.from(e);if("IntersectionObserver"in window){let e=new IntersectionObserver(function(t){t.forEach(t=>{t.intersectionRatio>0&&n(t.target,()=>{e.unobserve(t.target)})})},{threshold:.01});t.forEach(t=>e.observe(t))}else{let e=function(e,t){let n,i;return function r(){let s=Date.now(),o=s-n;!n||o>=t?(e(),n=s):o<t&&(clearTimeout(i),i=setTimeout(r,t-o))}}(function(){if(0===t.length)return window.removeEventListener("scroll",e);(t=t.filter(e=>e.classList.contains("lazyload"))).forEach(e=>{(function(e){let{top:t,left:n,right:i,bottom:r}=e.getBoundingClientRect(),s=document.documentElement.clientHeight;return t>0&&t<s})(e)&&n(e)})},300);window.addEventListener("scroll",e),window.dispatchEvent(new Event("scroll"))}function n(e,t){let n=new Image;n.src=e.dataset.src,n.onload=function(){e.src=n.src,e.classList.remove("lazyload"),t()}}}},,function(e,t){e.exports=class{constructor(e){this.$el=e,this.$input=this.$el.querySelector(".input"),this.$search=this.$el.querySelector(".icon-search"),this.$songs=[],this.$currentSong={},this.$keyword="",this.$page=1,this.$curpage=1,this.$fetching=!1,this.onscroll=this.onScroll.bind(this),this.getValue(),window.addEventListener("scroll",this.onscroll)}onScroll(){document.body.scrollHeight<document.documentElement.clientHeight+pageYOffset+50&&this.search(this.$curpage+1)}getValue(){this.$search.addEventListener("click",this.search.bind(this));let e=e=>{let t=e.target.value.trim();if(!t)return this.reset();this.$keyword=t};e=this.debounce(e,400),this.$input.addEventListener("input",e)}reset(){this.$page=1,this.$keyword="",this.$el.querySelector(".search-list").innerHTML="",this.$el.querySelector(".singer-list").innerHTML=""}search(e){this.$fetching||this.$keyword&&(this.$fetching=!0,fetch(`http://localhost:4000/search?keyword=${this.$keyword}&page=${e||this.$page}`).then(e=>e.json()).then(e=>{1===this.$curpage&&this.createSinger(e.data.zhida),this.createList(e.data.song.list),this.$songs.push(...e.data.song.list),this.$curpage=e.data.song.curpage}).then(()=>this.$fetching=!1).catch(()=>this.$fetching=!1))}createSinger(e){e.singername&&(this.$el.querySelector(".singer-list").innerHTML=`\n    <div class="list">\n      <div class="img">\n        <img src="https://y.gtimg.cn/music/photo_new/T001R68x68M000${e.singermid}.jpg?max_age=2592000" alt="">\n      </div>\n      <div class="detail">\n        <h2>${e.singername}</h2>\n        <p><span>单曲：${e.songnum}</span><span>专辑：${e.albumnum}</span></p>\n      </div>\n    </div>\n    `)}createList(e){let t=e.map(e=>`\n      <div class="list">\n        <div class="img">\n          <img src="./imgs/music.png" alt="">\n        </div>\n        <div class="detail">\n          <h2>${e.songname}</h2>\n          <p>${this.getSinger(e.singer)}</p>\n        </div>\n      </div>\n      `).join("");this.$el.querySelector(".search-list").insertAdjacentHTML("beforeend",t),this.listenerPlay()}listenerPlay(){let e=this.$el.querySelectorAll(".search-list .list");for(let t=0;t<e.length;t++)e[t].addEventListener("click",()=>{this.$currentSong=this.$songs[t]})}getSinger(e){return e.map(e=>`\n        ${e.name}\n      `).join("/")}debounce(e,t){let n=null;return function(){n&&clearTimeout(n),n=setTimeout(()=>e.apply(this,arguments),t)}}}},function(e,t){e.exports=class{constructor(e,t,n){this.$musicid=e||231442948,this.$el=t,this.$audio=n,this.$lines=this.$(".player-lyrics-lines"),this.$node="",this.lyricIndex=-1,this.lyricsArr=[],this.getLyrics(),this.listenAudio()}listenAudio(){this.$audio.addEventListener("timeupdate",()=>{this.locateLyric()})}getLyrics(){fetch(`http://localhost:4000/lyrics?musicid=${this.$musicid}`).then(e=>e.json()).then(e=>e.replace(/jsonp1\((.*)\)/,"$1")).then(e=>JSON.parse(e)).then(e=>e.lyric).then(e=>this.reset(e))}locateLyric(){0===this.$audio.currentTime&&(this.lyricIndex=-1,this.$lines.style.transform="translateY(0px)");let e,t=1e3*this.$audio.currentTime;if(this.lyricsArr.length&&this.lyricsArr.length>this.lyricIndex+1&&(e=this.lyricsArr[this.lyricIndex+1][0]),t>e&&this.lyricIndex<this.lyricsArr.length-1){this.lyricIndex++;let e=this.$(`[data-time="${this.lyricsArr[this.lyricIndex][0]}"]`);e&&this.setLyricToCenter(e),this.$$("p")[0].innerText=this.lyricsArr[this.lyricIndex][1],this.$$("p")[1].innerText=this.lyricsArr[this.lyricIndex+1]?this.lyricsArr[this.lyricIndex+1][1]:""}}setLyrics(e){console.log("setLyrics"),this.lyricIndex=0;let t=document.createDocumentFragment(),n=[];this.lyricsArr=n,e.split(/\n/).filter(e=>e.match(/\[.+?\]/)).forEach(e=>{let t=e.replace(/\[.+?\]/g,"");t&&e.match(/\[.+?\]/g).forEach(e=>{e=e.replace(/[\[\]]/g,"");let i=60*parseInt(e.slice(0,2))*1e3+1e3*parseInt(e.slice(3,5))+parseInt(e.slice(6));n.push([i,t])})}),n.filter(e=>""!==e[1].trim()).sort((e,t)=>e[0]>t[0]?1:-1).forEach(e=>{let n=document.createElement("p");n.setAttribute("data-time",e[0]),n.innerText=e[1],t.appendChild(n)}),this.$lines.innerHTML="",this.$lines.appendChild(t)}setLyricToCenter(e){console.log(e),this.$node=e;let t=e.offsetTop-this.$el.offsetHeight/2;t=t>0?t:0,this.$lines.style.transform=`translateY(-${t}px)`,this.$$("p").forEach(e=>e.classList.remove("current")),e.classList.add("current")}reset(e){if(e){let t=this.text=this.formatText(e)||"";this.setLyrics(t)}}getSeconds(e){return+e.replace(/^\[(\d{2}):(\d{2}).*/,(e,t,n)=>60*+t+ +n)}formatText(e){let t=document.createElement("div");return t.innerHTML=e,t.innerText}$(e){return this.$el.querySelector(e)}$$(e){return this.$el.querySelectorAll(e)}}},function(e,t){e.exports=class{constructor(e,t){this.$el=e,this.$span=t,this.initX=0,this.newX=0,this.clock="",this.judge()}judge(){this.$el.ontouchstart=e=>{this.initX=e.changedTouches[0].pageX},this.$el.ontouchmove=e=>{this.clock&&clearInterval(this.clock),this.clock=setTimeout(()=>{this.newX=e.changedTouches[0].pageX,this.newX-this.initX>0?(this.$el.querySelector(".wrapper").style.transform="translateX(0vw)",this.$span.querySelector(".left").classList.add("active"),this.$span.querySelector(".right").classList.remove("active")):(this.$el.querySelector(".wrapper").style.transform="translateX(-100vw)",this.$span.querySelector(".left").classList.remove("active"),this.$span.querySelector(".right").classList.add("active"))},100)}}}},function(e){e.exports=JSON.parse('{"code":0,"subcode":0,"message":"","default":0,"data":{"topList":[{"id":4,"listenCount":19300000,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_4_300_219004455.jpg","songList":[{"singername":"林俊杰","songname":"雪落下的声音"},{"singername":"Madison Beer","songname":"POP/STARS"},{"singername":"王源","songname":"一样"}],"topTitle":"巅峰榜·流行指数","type":0},{"id":26,"listenCount":19200000,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_26_300_218224537.jpg","songList":[{"singername":"李荣浩","songname":"年少有为"},{"singername":"G.E.M. 邓紫棋","songname":"光年之外"},{"singername":"叶炫清","songname":"归去来兮"}],"topTitle":"巅峰榜·热歌","type":0},{"id":27,"listenCount":13092130,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_27_300_219059543.jpg","songList":[{"singername":"王源","songname":"一样"},{"singername":"王嘉尔","songname":"Different Game(feat. Gucci Mane)"},{"singername":"Madison Beer","songname":"POP/STARS"}],"topTitle":"巅峰榜·新歌","type":0},{"id":58,"listenCount":4550220,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_58_300_218505821.jpg","songList":[{"singername":"吴亦凡","songname":"Coupe"},{"singername":"王嘉尔","songname":"Different Game(feat. Gucci Mane)"},{"singername":"吴亦凡","songname":"天地"}],"topTitle":"说唱榜","type":0},{"id":28,"listenCount":19500000,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_28_300_218246252.jpg","songList":[{"singername":"宋孟君","songname":"地铁等待"},{"singername":"韩安旭","songname":"不在"},{"singername":"林俊呈","songname":"东西"}],"topTitle":"巅峰榜·网络歌曲","type":0},{"id":5,"listenCount":4108500,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_5_300_218831482.jpg","songList":[{"singername":"王源","songname":"Will You"},{"singername":"吴亦凡","songname":"Coupe"},{"singername":"张靓颖","songname":"故长安"}],"topTitle":"巅峰榜·内地","type":0},{"id":6,"listenCount":3112980,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_6_300_218269406.jpg","songList":[{"singername":"G.E.M. 邓紫棋","songname":"那一夜"},{"singername":"G.E.M. 邓紫棋","songname":"倒数"},{"singername":"A-Lin","songname":"恰好"}],"topTitle":"巅峰榜·港台","type":0},{"id":3,"listenCount":9400000,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_3_300_219006430.jpg","songList":[{"singername":"Madison Beer","songname":"POP/STARS"},{"singername":"Troye Sivan","songname":"Somebody To Love"},{"singername":"Steve Aoki","songname":"Waste It On Me"}],"topTitle":"巅峰榜·欧美","type":0},{"id":16,"listenCount":4654800,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_16_300_218828571.jpg","songList":[{"singername":"IZ*ONE","songname":"라비앙로즈"},{"singername":"조이","songname":"나라는 꿈"},{"singername":"TWICE","songname":"YES or YES"}],"topTitle":"巅峰榜·韩国","type":0},{"id":29,"listenCount":2997780,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_29_300_218831590.jpg","songList":[{"singername":"张靓颖","songname":"故长安"},{"singername":"魏晨","songname":"红尘"},{"singername":"贺敬轩","songname":"双世恋人"}],"topTitle":"巅峰榜·影视金曲","type":0},{"id":17,"listenCount":1548750,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_17_300_219059694.jpg","songList":[{"singername":"宇多田ヒカル","songname":"Too Proud"},{"singername":"SILENT SIREN","songname":"Go Way!"},{"singername":"中島美嘉","songname":"僕が死のうと思ったのは"}],"topTitle":"巅峰榜·日本","type":0},{"id":201,"listenCount":353979,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_201_300_1493854.jpg","songList":[{"singername":"Madison Beer","songname":"POP/STARS"},{"singername":"王嘉尔","songname":"Different Game"},{"singername":"张艺兴","songname":"梦不落雨林"}],"topTitle":"巅峰榜·MV","type":0},{"id":52,"listenCount":1354745,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_52_300_218956832.jpg","songList":[{"singername":"MLK麋鹿王国","songname":"捉迷藏"},{"singername":"封茗囧菌","songname":"快来找我啊"},{"singername":"愚青","songname":"没有灰尘的眼睛"}],"topTitle":"巅峰榜·腾讯音乐人原创榜","type":0},{"id":36,"listenCount":6628820,"picUrl":"http://y.gtimg.cn/music/common/upload/iphone_order_channel/1541731179_toplist_36_300_218639169.jpg","songList":[{"singername":"麓七","songname":"可不可以"},{"singername":"陈诚","songname":"沙漠骆驼"},{"singername":"麓七","songname":"东西"}],"topTitle":"巅峰榜·K歌金曲","type":0}]}}')},,function(e,t,n){},function(e){e.exports=JSON.parse("{}")},function(e,t){e.exports=function(){var e=document.querySelectorAll("nav ul li"),t=document.querySelectorAll("main.mark>section");for(let n=0;n<e.length;n++)e[n].addEventListener("click",function(){for(let n=0;n<e.length;n++)e[n].classList.remove("active"),t[n].classList.add("hide");this.classList.add("active"),t[n].classList.remove("hide")})}()},,,,function(e,t,n){"use strict";n.r(t);n(7);var i=n(2),r=n.n(i),s=n(3),o=n.n(s);class a{constructor(e,t){this.$el=e,this.$currentSong=t,this.$iconPlay=this.$(".icon-play"),this.$audio=this.$("#audio"),this.$src="",this.$Lyrics={},this.getSongSrc(),this.setData(),this.setHeader(),this.setIconProgressBar(),this.playSong(),this.pauseSong(),this.$audio.addEventListener("timeupdate",()=>{this.setProgerssBar(),this.$(".wrapper .lyric span").innerText=this.$Lyrics.$node.innerText||"......"})}getSongSrc(){fetch(`https://api.apiopen.top/searchMusic?name=${this.$currentSong.songname}`).then(e=>e.json()).then(e=>e.result[0]).then(e=>this.$src=e.url).then(e=>this.$audio.src=this.$src)}setData(){let e=`http://y.gtimg.cn/music/photo_new/T002R300x300M000${this.$currentSong.albummid}.jpg?max_age=2592000`;this.$(".pic-wrapper .pic img").src=e,this.$(".player-background").style=`background-image: url(${e})`,this.$Lyrics=new o.a(this.$currentSong.songid,this.$(".lyrics-wrapper"),this.$audio),this.$audio.onloadedmetadata=()=>this.$(".total-time").innerText=this.formateTime(this.$audio.duration)}setHeader(){this.$(".song-detail .title h2").innerText=this.$currentSong.songname,this.$(".song-detail .title p span").innerText=this.$currentSong.singer.map(e=>`${e.name}`).join(" ")}setProgerssBar(){0===this.$audio.currentTime&&(this.$(".progress-after").style.transform="translateX(100%)");let e=100*this.$audio.currentTime/this.$audio.duration;this.$(".progress-after").style.transform=`translateX(${e-100}%)`,this.$(".current-time").innerText=this.formateTime(this.$audio.currentTime)}setIconProgressBar(){this.$(".play-icon").classList.remove("hide"),this.$(".pause-icon").classList.add("hide"),this.$(".progress-after").style="transform: translateX(-100%)"}playSong(){this.$(".play-icon").addEventListener("click",()=>{this.addHide(".play-icon"),this.removeHide(".pause-icon"),setTimeout(()=>{this.$audio.play()},0)})}pauseSong(){this.$(".pause-icon").addEventListener("click",()=>{this.addHide(".pause-icon"),this.removeHide(".play-icon"),this.$audio.pause()})}formateTime(e){let t=parseInt(e/60);t=t>=10?""+t:"0"+t;let n=parseInt(e%60);return t+":"+(n=n>=10?""+n:"0"+n)}addHide(e){return this.$(e).classList.add("hide")}removeHide(e){return this.$(e).classList.remove("hide")}$(e){return this.$el.querySelector(e)}$$(e){return this.$iconPlay.querySelectorAll(e)}}var c=n(4),l=n.n(c),d=n(0),p=n.n(d),h=n(5);n(8),n(9);const u=e=>document.querySelector(e);var m;setTimeout(()=>{u("#siteWelcome").classList.remove("active")},100),m=h.data.topList,u(".rank-item").innerHTML=m.map(e=>`\n    <div class="item">\n      <div class="pic">\n        <img class="lazyload" data-src="${e.picUrl}" alt="">\n      </div>\n      <div class="content clearfix">\n        <div class="content-wrapper">\n          <h2>${e.topTitle}</h2>\n          ${function(e){return e.songList.map((e,t)=>`\n    <p>${t+1}<span>${e.songname}</span>- ${e.singername}</p>\n    `).join("")}(e)}\n        </div>\n      </div>\n    </div>\n    `).join(""),p()((e=>document.querySelectorAll(e))(".lazyload"));var g=new r.a(u(".search-view"));e.hot.accept();var f=u(".play-page"),y=u(".header .open-play-page");y.addEventListener("click",function(){let e={songname:"龙的传人",albummid:"002a50FE1JHhpM",songid:7028535,singer:[{name:"王力宏"}]};u("#audio").src||new a(f,e);u(".mark").classList.add("notScroll"),u(".mark").style.height="80vh",f.style="transform: translateY(0);transition: transform 0.5s"}),u(".icon-close-page .icon").addEventListener("click",()=>{u(".mark").classList.remove("notScroll"),u(".mark").style.height="auto",f.style.transform="translateY(-100%)"}),u(".search-view .search-list").addEventListener("click",()=>{new a(f,g.$currentSong),setTimeout(()=>{y.dispatchEvent(new Event("click"))},200)}),new l.a(u(".play-page main"),u(".play-page .icon-exchange"))}]);