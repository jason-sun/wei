webpackJsonp([20],{"9DYS":function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.json-editor[data-v-5c878a0a]{\n  height: 100%;\n  position: relative;\n}\n.json-editor[data-v-5c878a0a] .CodeMirror {\n  height: auto;\n  min-height: 300px;\n}\n.json-editor[data-v-5c878a0a] .CodeMirror-scroll{\n  min-height: 300px;\n}\n.json-editor[data-v-5c878a0a] .cm-s-rubyblue span.cm-string {\n  color: #F08047;\n}\n",""])},MECs:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.editor-container[data-v-3e084632]{\n  position: relative;\n  height: 100%;\n}\n",""])},lKtc:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("mvHQ"),o=a.n(r),n=a("8U58"),s=a.n(n),i=(a("GUiZ"),a("4/hK"),a("0tbE"),a("uOPQ"),a("ryyk"),{name:"jsonEditor",data:function(){return{jsonEditor:!1}},props:["value"],watch:{value:function(t){t!==this.jsonEditor.getValue()&&this.jsonEditor.setValue(o()(this.value,null,2))}},mounted:function(){var t=this;this.jsonEditor=s.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"ruby",gutters:["CodeMirror-lint-markers"],theme:"darcula",lint:!0}),this.jsonEditor.setValue(o()(this.value,null,2)),this.jsonEditor.on("change",function(e){t.$emit("changed",e.getValue()),t.$emit("input",e.getValue())})},methods:{getValue:function(){return this.jsonEditor.getValue()}}}),l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"json-editor"},[e("textarea",{ref:"textarea"})])},staticRenderFns:[]};var d={name:"jsonEditor-demo",components:{JsonEditor:a("VU/8")(i,l,!1,function(t){a("qY9C")},"data-v-5c878a0a",null).exports},data:function(){return{value:JSON.parse('[{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"CORN"}],"name":""},{"items":[{"market_type":"forexdata","symbol":"XAUUSD"},{"market_type":"forexdata","symbol":"XAGUSD"},{"market_type":"forexdata","symbol":"AUTD"},{"market_type":"forexdata","symbol":"AGTD"}],"name":"贵金属"},{"items":[{"market_type":"forexdata","symbol":"CORN"},{"market_type":"forexdata","symbol":"WHEAT"},{"market_type":"forexdata","symbol":"SOYBEAN"},{"market_type":"forexdata","symbol":"SUGAR"}],"name":"农产品"},{"items":[{"market_type":"forexdata","symbol":"UKOIL"},{"market_type":"forexdata","symbol":"USOIL"},{"market_type":"forexdata","symbol":"NGAS"}],"name":"能源化工"}]')}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"components-container"},[t._m(0),t._v(" "),a("div",{staticClass:"editor-container"},[a("json-editor",{ref:"jsonEditor",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("code",[this._v("JsonEditor is base on  "),e("a",{attrs:{href:"https://github.com/codemirror/CodeMirror",target:"_blank"}},[this._v("CodeMirrorr")]),this._v(" , lint base on json-lint ")])}]};var c=a("VU/8")(d,m,!1,function(t){a("tC+n")},"data-v-3e084632",null);e.default=c.exports},qY9C:function(t,e,a){var r=a("9DYS");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("2c4274be",r,!0)},"tC+n":function(t,e,a){var r=a("MECs");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("5d2f6ec0",r,!0)}});