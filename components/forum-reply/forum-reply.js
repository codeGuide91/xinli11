(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/forum-reply/forum-reply"],{2336:function(t,e,n){"use strict";n.r(e);var r=n("45d1"),u=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=u.a},3221:function(t,e,n){"use strict";var r=n("c02c"),u=n.n(r);u.a},"45d1":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=function(){Promise.resolve().then(function(){return resolve(n("9f03"))}.bind(null,n)).catch(n.oe)},u={name:"userReply",components:{userReply:r},props:{digest:{type:Array,default:function(){return{}}}},data:function(){return{newData:{},digestData:[],UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3}}},created:function(){var t=this;this.digest.forEach((function(e,n){console.log(e,n),0===n?t.newData=e:t.digestData.push(e)}))},methods:{format:function(t){var e=this.parse(t),n=Date.now()-e.getTime();if(n<this.UNITS["天"])return this.humanize(n);var r=function(t){return t<10?"0"+t:t};return e.getFullYear()+"-"+r(e.getMonth()+1)+"-"+r(e.getDate())+" "+r(e.getHours())+":"+r(e.getMinutes())},humanize:function(t){var e="";for(var n in this.UNITS)if(t>=this.UNITS[n]){e=Math.floor(t/this.UNITS[n])+n+"前";break}return e||"刚刚"},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])},onReplyTap:function(t){this.$utils.jump("../forum-reply/forum-reply?pid=".concat(t))}}};e.default=u},"79de":function(t,e,n){"use strict";var r,u=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}))},"9f03":function(t,e,n){"use strict";n.r(e);var r=n("79de"),u=n("2336");for(var a in u)"default"!==a&&function(t){n.d(e,t,(function(){return u[t]}))}(a);n("3221");var o,i=n("f0c5"),c=Object(i["a"])(u["default"],r["b"],r["c"],!1,null,"5b7cb734",null,!1,r["a"],o);e["default"]=c.exports},c02c:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/forum-reply/forum-reply-create-component',
    {
        'components/forum-reply/forum-reply-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9f03"))
        })
    },
    [['components/forum-reply/forum-reply-create-component']]
]);
