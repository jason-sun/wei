webpackJsonp([60],{eI3e:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=n("Ty/O"),a={props:{type:{type:String,default:"all"}},data:function(){return{list:null,loading:!1}},created:function(){this.getList()},methods:{del:function(t){var e=this;confirm("确定要删除这个活动？")&&Object(l.b)(t).then(function(t){e.getList()})},getList:function(){var t=this;this.loading=!0,this.$emit("create"),Object(l.d)({}).then(function(e){console.log(e),t.list=e.data.activities,t.loading=!1})}}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{align:"center",label:"ID",width:"65","element-loading-text":"加载中"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"200px",align:"center",label:"活动名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"150px",align:"center",label:"公众号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.public_account.name))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"110px",align:"center",label:"活动描述"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.desc))])]}}])}),t._v(" "),n("el-table-column",{attrs:{width:"120px",label:"专属序列号"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.idx))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"min-width":"180px",label:"创建时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.created_at))])]}}])}),t._v(" "),n("el-table-column",{attrs:{"class-name":"status-col",label:"操作",width:"110"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("router-link",{attrs:{to:"/activity/edit/"+e.row.id}},[t._v("编辑")]),t._v(" "),n("a",{on:{click:function(n){t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)},staticRenderFns:[]},o=n("VU/8")(a,i,!1,null,null,null);e.default=o.exports}});