(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3818f4d8","chunk-7aab803c","chunk-2d0df843"],{"88bc":function(e,t,r){(function(t){var r=1/0,a=9007199254740991,n="[object Arguments]",l="[object Function]",o="[object GeneratorFunction]",i="[object Symbol]",c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,u=c||s||Function("return this")();function d(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function f(e,t){var r=-1,a=e?e.length:0,n=Array(a);while(++r<a)n[r]=t(e[r],r,e);return n}function b(e,t){var r=-1,a=t.length,n=e.length;while(++r<a)e[n+r]=t[r];return e}var p=Object.prototype,h=p.hasOwnProperty,m=p.toString,v=u.Symbol,y=p.propertyIsEnumerable,g=v?v.isConcatSpreadable:void 0,w=Math.max;function O(e,t,r,a,n){var l=-1,o=e.length;r||(r=S),n||(n=[]);while(++l<o){var i=e[l];t>0&&r(i)?t>1?O(i,t-1,r,a,n):b(n,i):a||(n[n.length]=i)}return n}function j(e,t){return e=Object(e),C(e,t,(function(t,r){return r in e}))}function C(e,t,r){var a=-1,n=t.length,l={};while(++a<n){var o=t[a],i=e[o];r(i,o)&&(l[o]=i)}return l}function k(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var r=arguments,a=-1,n=w(r.length-t,0),l=Array(n);while(++a<n)l[a]=r[t+a];a=-1;var o=Array(t+1);while(++a<t)o[a]=r[a];return o[t]=l,d(e,this,o)}}function S(e){return D(e)||T(e)||!!(g&&e&&e[g])}function x(e){if("string"==typeof e||V(e))return e;var t=e+"";return"0"==t&&1/e==-r?"-0":t}function T(e){return A(e)&&h.call(e,"callee")&&(!y.call(e,"callee")||m.call(e)==n)}var D=Array.isArray;function $(e){return null!=e&&L(e.length)&&!M(e)}function A(e){return q(e)&&$(e)}function M(e){var t=F(e)?m.call(e):"";return t==l||t==o}function L(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=a}function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){return!!e&&"object"==typeof e}function V(e){return"symbol"==typeof e||q(e)&&m.call(e)==i}var E=k((function(e,t){return null==e?{}:j(e,f(O(t,1),x))}));e.exports=E}).call(this,r("c8ba"))},"89f2":function(e,t,r){"use strict";r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("7f7f"),r("96cf"),r("ac6a"),r("28a5"),r("6b54");var a=r("3b8d"),n=r("4ec3");r("0fea");function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=o(e))){var t=0,r=function(){};return{s:r,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,n,l=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,n=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw n}}}}function o(e,t){if(e){if("string"===typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function c(e){return s.apply(this,arguments)}function s(){return s=Object(a["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","字典Code不能为空!");case 2:return e.next=4,Object(n["f"])(t);case 4:return r=e.sent,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function u(e,t){if(e instanceof Array){var r,a=l(e);try{for(a.s();!(r=a.n()).done;){var n=r.value;if(t===n.value)return n.text}}catch(o){a.e(o)}finally{a.f()}}return t}function d(e,t){if(0===t||"0"===t){var r,a=l(e);try{for(a.s();!(r=a.n()).done;){var n=r.value;if(t==n.value)return n.text}}catch(c){a.e(c)}finally{a.f()}}if(!t||!e||0==e.length)return"";var o="";t=t.toString();var i=t.split(",");return e.forEach((function(e){for(var t=0;t<i.length;t++)if(i[t]===e.value){o+=e.text+",";break}})),""==o?t:o.substring(0,o.length-1)}},b8ad3:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,maskClosable:!1,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-row",{staticClass:"form-row",attrs:{gutter:0}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请选择订单类型"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],staticStyle:{width:"100%"},attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),r("a-row",{staticClass:"form-row",attrs:{gutter:0}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入订单金额"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1)],1),r("a-tabs",{on:{change:e.handleChangeTabs},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[r("a-tab-pane",{key:"1",attrs:{tab:"客户信息",forceRender:!0}},[r("j-editable-table",{ref:"editableTable1",attrs:{loading:e.table1.loading,columns:e.table1.columns,dataSource:e.table1.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1),r("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:!0}},[r("j-editable-table",{ref:"editableTable2",attrs:{loading:e.table2.loading,columns:e.table2.columns,dataSource:e.table2.dataSource,maxHeight:300,rowNumber:!0,rowSelection:!0,actionButton:!0}})],1)],1)],1)],1)},n=[],l=(r("8e6e"),r("456d"),r("bd86")),o=(r("6b54"),r("ac6a"),r("5df3"),r("7550")),i=r("e2e0"),c=r("0fea"),s=r("2dab"),u=r("88bc"),d=r.n(u),f=r("c1df"),b=r.n(f);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(l["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={name:"JeecgOrderModalForJEditableTable",components:{JDate:s["default"],JEditableTable:o["default"]},data:function(){return{title:"操作",visible:!1,form:this.$form.createForm(this),confirmLoading:!1,model:{},labelCol:{xs:{span:24},sm:{span:6}},wrapperCol:{xs:{span:24},sm:{span:18}},activeKey:"1",table1:{loading:!1,dataSource:[],columns:[{title:"客户名",key:"name",width:"24%",type:i["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"性别",key:"sex",width:"18%",type:i["a"].select,options:[{title:"男",value:"1"},{title:"女",value:"2"}],defaultValue:"",placeholder:"请选择${title}"},{title:"身份证号",key:"idcard",width:"24%",type:i["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"${title}格式不正确"}]},{title:"手机号",key:"telphone",width:"24%",type:i["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"${title}格式不正确"}]}]},table2:{loading:!1,dataSource:[],columns:[{title:"航班号",key:"ticketCode",width:"40%",type:i["a"].input,defaultValue:"",placeholder:"请输入${title}",validateRules:[{required:!0,message:"${title}不能为空"}]},{title:"航班时间",key:"tickectDate",width:"30%",type:i["a"].date,placeholder:"请选择${title}",defaultValue:""}]},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{getAllTable:function(){return Promise.all([Object(i["c"])(this,"editableTable1"),Object(i["c"])(this,"editableTable2")])},add:function(){this.getAllTable().then((function(e){e[0].add(),e[1].add()})),this.edit({})},edit:function(e){var t=this;if(this.visible=!0,this.activeKey="1",this.form.resetFields(),this.model=Object.assign({},e),this.$nextTick((function(){t.form.setFieldsValue(d()(t.model,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.model.orderDate?b()(t.model.orderDate):null})})),this.model.id){var r={id:this.model.id};this.requestTableData(this.url.orderCustomerList,r,this.table1),this.requestTableData(this.url.orderTicketList,r,this.table2)}},close:function(){this.visible=!1,this.getAllTable().then((function(e){e[0].initialize(),e[1].initialize()})),this.$emit("close")},requestTableData:function(e,t,r){r.loading=!0,Object(c["c"])(e,t).then((function(e){r.dataSource=e.result||[]})).finally((function(){r.loading=!1}))},handleOk:function(){this.validateFields()},handleCancel:function(){this.close()},handleChangeTabs:function(e){Object(i["c"])(this,"editableTable".concat(e)).then((function(e){e.resetScrollTop()}))},validateFields:function(){var e=this;this.getAllTable().then((function(t){return Object(i["d"])(e.form,t)})).then((function(t){var r=e.classifyIntoFormData(t);return e.requestAddOrEdit(r)})).catch((function(t){t.error===i["b"]&&(e.activeKey=null==t.index?e.activeKey:(t.index+1).toString())}))},classifyIntoFormData:function(e){var t=Object.assign(this.model,e.formValue);return t.orderDate=t.orderDate?t.orderDate.format("YYYY-MM-DD HH:mm:ss"):null,h({},t,{jeecgOrderCustomerList:e.tablesValue[0].values,jeecgOrderTicketList:e.tablesValue[1].values})},requestAddOrEdit:function(e){var t=this,r=this.url.add,a="post";this.model.id&&(r=this.url.edit,a="put"),this.confirmLoading=!0,Object(c["h"])(r,e,a).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok"),t.close()):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1}))}}},v=m,y=r("2877"),g=Object(y["a"])(v,a,n,!1,null,"69b37a74",null);t["default"]=g.exports}}]);