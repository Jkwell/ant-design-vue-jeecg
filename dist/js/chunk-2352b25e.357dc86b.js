(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2352b25e","chunk-1de2c333"],{"0b38":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:"操作",width:800,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"唯一识别码",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{rules:[]}],expression:"[ 'id', {rules: []} ]"}],attrs:{placeholder:"唯一识别码",disabled:"disabled"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"不起一个名字吗？"}]}],expression:"[ 'name', {rules: [{ required: true, message: '不起一个名字吗？' }] }]"}],attrs:{placeholder:"起一个名字"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态",hasFeedback:""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{rules:[]}],expression:"[ 'status', {rules: []} ]"}]},[a("a-select-option",{attrs:{value:1}},[e._v("正常")]),a("a-select-option",{attrs:{value:2}},[e._v("禁用")])],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述",hasFeedback:""}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["describe",{rules:[]}],expression:"[ 'describe', { rules: [] } ]"}],attrs:{rows:5,placeholder:"..."}})],1),a("a-divider"),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"拥有权限",hasFeedback:""}},e._l(e.permissions,(function(t,n){return a("a-row",{key:n,attrs:{gutter:16}},[a("a-col",{attrs:{span:4}},[e._v("\n            "+e._s(t.name)+"：\n          ")]),a("a-col",{attrs:{span:20}},[t.actionsOptions.length>0?a("a-checkbox",{attrs:{indeterminate:t.indeterminate,checked:t.checkedAll},on:{change:function(a){return e.onChangeCheckAll(a,t)}}},[e._v("\n              全选\n            ")]):e._e(),a("a-checkbox-group",{attrs:{options:t.actionsOptions},on:{change:function(a){return e.onChangeCheck(t)}},model:{value:t.selected,callback:function(a){e.$set(t,"selected",a)},expression:"permission.selected"}})],1)],1)})),1)],1)],1)],1)},r=[],s=(a("ac6a"),a("0fea"));function o(e){try{return JSON.parse(e)}catch(t){}return[]}var i=a("88bc"),l=a.n(i),c={name:"RoleModal",data:function(){return{labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},visible:!1,confirmLoading:!1,mdl:{},form:this.$form.createForm(this),permissions:[]}},created:function(){this.loadPermissions()},methods:{add:function(){this.edit({id:0})},edit:function(e){var t=this;if(this.mdl=Object.assign({},e),this.visible=!0,this.mdl.permissions&&this.permissions){var a={};this.mdl.permissions.forEach((function(e){a[e.permissionId]=e.actionEntitySet.map((function(e){return e.action}))})),this.permissions.forEach((function(e){e.selected=a[e.id]}))}this.$nextTick((function(){t.form.setFieldsValue(l()(t.mdl,"id","name","status","describe"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this;this.form.validateFields((function(t,a){t||(e.confirmLoading=!0,new Promise((function(e){setTimeout((function(){return e()}),2e3)})).then((function(){e.$message.success("保存成功"),e.$emit("ok")})).catch((function(){})).finally((function(){e.confirmLoading=!1,e.close()})))}))},handleCancel:function(){this.close()},onChangeCheck:function(e){e.indeterminate=!!e.selected.length&&e.selected.length<e.actionsOptions.length,e.checkedAll=e.selected.length===e.actionsOptions.length},onChangeCheckAll:function(e,t){Object.assign(t,{selected:e.target.checked?t.actionsOptions.map((function(e){return e.value})):[],indeterminate:!1,checkedAll:e.target.checked})},loadPermissions:function(){var e=this;Object(s["e"])().then((function(t){var a=t.result;e.permissions=a.map((function(e){var t=o(e.actionData);return e.checkedAll=!1,e.selected=[],e.indeterminate=!1,e.actionsOptions=t.map((function(e){return{label:e.describe,value:e.action}})),e}))}))}}},u=c,d=a("2877"),m=Object(d["a"])(u,n,r,!1,null,"98a9c9d0",null);t["default"]=m.exports},4002:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:48}},[a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"角色ID"}},[a("a-input",{attrs:{placeholder:"请输入"}})],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("a-form-item",{attrs:{label:"状态"}},[a("a-select",{attrs:{placeholder:"请选择","default-value":"0"}},[a("a-select-option",{attrs:{value:"0"}},[e._v("全部")]),a("a-select-option",{attrs:{value:"1"}},[e._v("正常")]),a("a-select-option",{attrs:{value:"2"}},[e._v("禁用")])],1)],1)],1),a("a-col",{attrs:{md:8,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons"},[a("a-button",{attrs:{type:"primary"}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("重置")])],1)])],1)],1)],1),a("s-table",{ref:"table",attrs:{size:"default",columns:e.columns,data:e.loadData},scopedSlots:e._u([{key:"expandedRowRender",fn:function(t){return a("div",{staticStyle:{margin:"0"}},[a("a-row",{style:{marginBottom:"12px"},attrs:{gutter:24}},e._l(t.permissions,(function(t,n){return a("a-col",{key:n,style:{marginBottom:"12px"},attrs:{span:12}},[a("a-col",{attrs:{span:4}},[a("span",[e._v(e._s(t.permissionName)+"：")])]),t.actionEntitySet.length>0?a("a-col",{attrs:{span:20}},e._l(t.actionEntitySet,(function(t,n){return a("a-tag",{key:n,attrs:{color:"cyan"}},[e._v(e._s(t.describe))])})),1):a("a-col",{attrs:{span:20}},[e._v("-")])],1)})),1)],1)}},{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.$refs.modal.edit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n          更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("详情")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("禁用")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[e._v("删除")])])],1)],1)],1)}}])}),a("role-modal",{ref:"modal",on:{ok:e.handleOk}})],1)},r=[],s=(a("ac6a"),a("e8c4")),o=a("0b38"),i={name:"TableList",components:{STable:s["a"],RoleModal:o["default"]},data:function(){var e=this;return{description:"列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。",visible:!1,form:null,mdl:{},advanced:!1,queryParam:{},columns:[{title:"唯一识别码",dataIndex:"id"},{title:"角色名称",dataIndex:"name"},{title:"状态",dataIndex:"status"},{title:"创建时间",dataIndex:"createTime",sorter:!0},{title:"操作",width:"150px",dataIndex:"action",scopedSlots:{customRender:"action"}}],loadData:function(t){return e.$http.get("/api/role",{params:Object.assign(t,e.queryParam)}).then((function(e){return e.result}))},selectedRowKeys:[],selectedRows:[]}},methods:{handleEdit:function(e){this.mdl=Object.assign({},e),this.mdl.permissions.forEach((function(e){e.actionsOptions=e.actionEntitySet.map((function(e){return{label:e.describe,value:e.action,defaultCheck:e.defaultCheck}}))})),this.visible=!0},handleOk:function(){this.$refs.table.refresh()},onChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},toggleAdvanced:function(){this.advanced=!this.advanced}},watch:{}},l=i,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);t["default"]=u.exports},"88bc":function(e,t,a){(function(t){var a=1/0,n=9007199254740991,r="[object Arguments]",s="[object Function]",o="[object GeneratorFunction]",i="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=l||c||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,n=e?e.length:0,r=Array(n);while(++a<n)r[a]=t(e[a],a,e);return r}function f(e,t){var a=-1,n=t.length,r=e.length;while(++a<n)e[r+a]=t[a];return e}var p=Object.prototype,h=p.hasOwnProperty,v=p.toString,b=u.Symbol,g=p.propertyIsEnumerable,w=b?b.isConcatSpreadable:void 0,y=Math.max;function k(e,t,a,n,r){var s=-1,o=e.length;a||(a=x),r||(r=[]);while(++s<o){var i=e[s];t>0&&a(i)?t>1?k(i,t-1,a,n,r):f(r,i):n||(r[r.length]=i)}return r}function C(e,t){return e=Object(e),_(e,t,(function(t,a){return a in e}))}function _(e,t,a){var n=-1,r=t.length,s={};while(++n<r){var o=t[n],i=e[o];a(i,o)&&(s[o]=i)}return s}function O(e,t){return t=y(void 0===t?e.length-1:t,0),function(){var a=arguments,n=-1,r=y(a.length-t,0),s=Array(r);while(++n<r)s[n]=a[t+n];n=-1;var o=Array(t+1);while(++n<t)o[n]=a[n];return o[t]=s,d(e,this,o)}}function x(e){return S(e)||A(e)||!!(w&&e&&e[w])}function j(e){if("string"==typeof e||N(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function A(e){return F(e)&&h.call(e,"callee")&&(!g.call(e,"callee")||v.call(e)==r)}var S=Array.isArray;function E(e){return null!=e&&R(e.length)&&!$(e)}function F(e){return L(e)&&E(e)}function $(e){var t=I(e)?v.call(e):"";return t==s||t==o}function R(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}function I(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function N(e){return"symbol"==typeof e||L(e)&&v.call(e)==i}var P=O((function(e,t){return null==e?{}:C(e,m(k(t,1),j))}));e.exports=P}).call(this,a("c8ba"))}}]);