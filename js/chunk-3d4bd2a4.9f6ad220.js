(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d4bd2a4"],{"3a0a":function(t,e,a){"use strict";var r=a("dc05"),n=a.n(r);n.a},"755c":function(t,e,a){},"889b":function(t,e,a){"use strict";var r=a("755c"),n=a.n(r);n.a},b2b7:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"with-pagination"},[t._t("default"),a("div",{staticClass:"pagination-wrap"},[a("Pagination",{staticClass:"pagination",attrs:{"current-page":t.currentPage,"page-size":t.limit,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"current-change":t.onPageChange}})],1)],2)},n=[],s=(a("5ab2"),a("6d57"),a("e10e"),a("ac9f")),c=(a("419a"),a("e980")),i=(a("163d"),a("ed08"));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var g={props:{getData:{type:Function,required:!0},getDataParams:{type:Object,default:function(){return{}}},limit:{type:Number,default:10},scrollTarget:{type:HTMLElement},total:{type:Number,default:0}},created:function(){this.onPageChange()},data:function(){return{currentPage:1}},methods:{onPageChange:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.getData(u({limit:this.limit,offset:Object(i["getPageOffset"])(this.currentPage,this.limit)},this.getDataParams));case 3:e=t.sent,this.$emit("getDataSuccess",e),this.scrollTarget&&Object(i["scrollInto"])(this.scrollTarget),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.$emit("getDataError",t.t0);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},watch:{getDataParams:{deep:!0,handler:function(){this.currentPage=1,this.onPageChange()}}}},l=g,h=(a("3a0a"),a("623f")),d=Object(h["a"])(l,r,n,!1,null,"772dc5dc",null);e["a"]=d.exports},dc05:function(t,e,a){},f15b:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-songs"},[a("WithPagination",{attrs:{getData:t.getSearch,getDataParams:t.searchParams,limit:30,scrollTarget:t.searchRoot.$refs&&t.searchRoot.$refs.header,total:t.songCount},on:{getDataSuccess:t.onGetSearch}},[a("div",{staticClass:"table"},[a("SongTable",{attrs:{highlightText:t.keywords,renderNameDesc:t.renderNameDesc,songs:t.songs,stripe:!0}})],1)])],1)},n=[],s=(a("cc57"),a("365c")),c=a("a110"),i=a("b2b7"),o=a("ed08"),u={inject:["searchRoot"],created:function(){this.getSearch=s["p"]},data:function(){return{songs:[],songCount:0,currentPage:1}},methods:{onGetSearch:function(t){var e=t.result,a=e.songs,r=e.songCount;this.songs=a.map((function(t){var e=t.id,a=t.mvid,r=t.name,n=t.alias,s=t.artists,c=t.duration,i=t.album;return Object(o["createSong"])({id:e,name:r,alias:n,artists:s,duration:c,mvId:a,albumName:i.name,albumId:i.id})})),this.songCount=r,this.searchRoot.onUpdateCount(r)},renderNameDesc:function(t){var e=this,a=this.$createElement,r=t.row.alias;return r.map((function(t){return a("HighlightText",{class:"name-desc",attrs:{text:t,highlightText:e.keywords}})}))}},computed:{keywords:function(){return this.searchRoot.keywords},searchParams:function(){return{keywords:this.keywords}}},components:{SongTable:c["a"],WithPagination:i["a"]}},g=u,l=(a("889b"),a("623f")),h=Object(l["a"])(g,r,n,!1,null,"75c11b4d",null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-3d4bd2a4.9f6ad220.js.map