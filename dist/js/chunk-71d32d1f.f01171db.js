(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71d32d1f"],{"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,l="[object Arguments]",i="[object Function]",n="[object GeneratorFunction]",o="[object Symbol]",s="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=s||u||Function("return this")();function d(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function f(e,t){var a=-1,r=e?e.length:0,l=Array(r);while(++a<r)l[a]=t(e[a],a,e);return l}function p(e,t){var a=-1,r=t.length,l=e.length;while(++a<r)e[l+a]=t[a];return e}var h=Object.prototype,m=h.hasOwnProperty,v=h.toString,b=c.Symbol,g=h.propertyIsEnumerable,w=b?b.isConcatSpreadable:void 0,C=Math.max;function y(e,t,a,r,l){var i=-1,n=e.length;a||(a=O),l||(l=[]);while(++i<n){var o=e[i];t>0&&a(o)?t>1?y(o,t-1,a,r,l):p(l,o):r||(l[l.length]=o)}return l}function x(e,t){return e=Object(e),j(e,t,(function(t,a){return a in e}))}function j(e,t,a){var r=-1,l=t.length,i={};while(++r<l){var n=t[r],o=e[n];a(o,n)&&(i[n]=o)}return i}function L(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,l=C(a.length-t,0),i=Array(l);while(++r<l)i[r]=a[t+r];r=-1;var n=Array(t+1);while(++r<t)n[r]=a[r];return n[t]=i,d(e,this,n)}}function O(e){return k(e)||F(e)||!!(w&&e&&e[w])}function R(e){if("string"==typeof e||D(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function F(e){return A(e)&&m.call(e,"callee")&&(!g.call(e,"callee")||v.call(e)==l)}var k=Array.isArray;function P(e){return null!=e&&$(e.length)&&!N(e)}function A(e){return U(e)&&P(e)}function N(e){var t=S(e)?v.call(e):"";return t==i||t==n}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function U(e){return!!e&&"object"==typeof e}function D(e){return"symbol"==typeof e||U(e)&&v.call(e)==o}var q=L((function(e,t){return null==e?{}:x(e,f(y(t,1),R))}));e.exports=q}).call(this,a("c8ba"))},cf74:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-upload",{attrs:{name:"file",multiple:!0,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,returnUrl:e.returnUrl},on:{change:e.handleChange}},[a("a-button",[a("a-icon",{attrs:{type:"upload"}}),e._v(e._s(e.text)+"\n  ")],1)],1)},l=[],i=(a("7f7f"),a("28a5"),a("a481"),a("3b2b"),a("2b0e")),n=a("9fb0"),o=a("0fea"),s="all",u="image",c="file",d=function(){return"-"+parseInt(1e4*Math.random()+1,10)},f=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},p={name:"JUpload",data:function(){return{uploadAction:window._CONFIG["domianURL"]+"/sys/common/upload",urlDownload:window._CONFIG["staticDomainURL"],headers:{},fileList:[],newFileList:[]}},props:{text:{type:String,required:!1,default:"点击上传"},fileType:{type:String,required:!1,default:s},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},triggerChange:{type:Boolean,required:!1,default:!1},returnUrl:{type:Boolean,required:!1,default:!0}},watch:{value:function(e){e instanceof Array?this.returnUrl?this.initFileList(e.join(",")):this.initFileListArr(e):this.initFileList(e)}},created:function(){var e=i["default"].ls.get(n["a"]);this.headers={"X-Access-Token":e}},methods:{initFileListArr:function(e){if(e&&0!=e.length){for(var t=[],a=0;a<e.length;a++)t.push({uid:d(),name:e[a].fileName,status:"done",url:e[a].filePath,response:{status:"history",message:e[a].filePath}});this.fileList=t}else this.fileList=[]},initFileList:function(e){if(e&&0!=e.length){for(var t=[],a=e.split(","),r=0;r<a.length;r++){var l=Object(o["d"])(a[r],this.urlDownload,"http");t.push({uid:d(),name:f(a[r]),status:"done",url:l,response:{status:"history",message:a[r]}})}this.fileList=t}else this.fileList=[]},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");for(var a=[],r=0;r<e.length;r++)a.push(e[r].response.message);a.length>0&&(t=a.join(",")),this.$emit("change",t)},beforeUpload:function(e){var t=e.type;if(t===u){if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1}else if(t===c&&t.indexOf("image")>=0)return this.$message.warning("请上传文件"),!1;return!0},handleChange:function(e){var t=this,a=e.fileList;"done"===e.file.status?e.file.response.success&&(a=a.map((function(e){if(e.response){var a=e.response.message;e.url=Object(o["d"])(a,t.urlDownload,"http")}return e}))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=a,"done"!==e.file.status&&"removed"!==e.file.status||(this.returnUrl?this.handlePathChange():a=a.filter((function(e){return!!e.response&&!0===e.response.success})).map((function(e){var a={fileName:e.name,filePath:e.response.message,fileSize:e.size};t.newFileList.push(a),t.$emit("change",t.newFileList)})))},handleDelete:function(e){}},model:{prop:"value",event:"change"}},h=p,m=a("2877"),v=Object(m["a"])(h,r,l,!1,null,"793ad1c0",null);t["default"]=v.exports},d08d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:e.width,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{label:"主键",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",e.validatorRules.id],expression:"[ 'id', validatorRules.id]"}],attrs:{placeholder:"请输入主键"}})],1),a("a-form-item",{attrs:{label:"用户名",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",e.validatorRules.name],expression:"[ 'name', validatorRules.name]"}],attrs:{placeholder:"请输入用户名"}})],1),a("a-form-item",{attrs:{label:"性别",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",e.validatorRules.sex],expression:"['sex', validatorRules.sex]"}],attrs:{type:"list","trigger-change":!0,dictCode:"sex",placeholder:"请选择性别"}})],1),a("a-form-item",{attrs:{label:"年龄",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["age",e.validatorRules.age],expression:"[ 'age', validatorRules.age]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请输入年龄"}})],1),a("a-form-item",{attrs:{label:"描述",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["descc",e.validatorRules.descc],expression:"['descc', validatorRules.descc]"}],attrs:{rows:"4",placeholder:"请输入描述"}})],1),a("a-form-item",{attrs:{label:"生日",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["birthday",e.validatorRules.birthday],expression:"[ 'birthday', validatorRules.birthday]"}],staticStyle:{width:"100%"},attrs:{placeholder:"请选择生日","trigger-change":!0}})],1),a("a-form-item",{attrs:{label:"用户编码",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["userCode",e.validatorRules.userCode],expression:"[ 'userCode', validatorRules.userCode]"}],attrs:{placeholder:"请输入用户编码"}})],1),a("a-form-item",{attrs:{label:"头像",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["topPic",e.validatorRules.topPic],expression:"['topPic', validatorRules.topPic]"}],attrs:{"trigger-change":!0}})],1),a("a-form-item",{attrs:{label:"附件",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[a("j-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["fileKk",e.validatorRules.fileKk],expression:"['fileKk', validatorRules.fileKk]"}],attrs:{"trigger-change":!0}})],1)],1)],1)],1)},l=[],i=a("0fea"),n=a("88bc"),o=a.n(n),s=(a("ca00"),a("2dab")),u=a("cf74"),c=a("7b16"),d={name:"TestDemoModal",components:{JDate:s["default"],JUpload:u["default"],JDictSelectTag:c["default"]},data:function(){return{form:this.$form.createForm(this),title:"操作",width:800,visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,validatorRules:{name:{rules:[{required:!0,message:"请输入用户名!"}]},sex:{rules:[]},age:{rules:[]},descc:{rules:[]},birthday:{rules:[]},userCode:{rules:[]},topPic:{rules:[]},fileKk:{rules:[]}},url:{add:"/demo/testDemo/add",edit:"/demo/testDemo/edit"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(o()(t.model,"name","sex","age","descc","birthday","userCode","topPic","fileKk"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var l="",n="";e.model.id?(l+=e.url.edit,n="put"):(l+=e.url.add,n="post");var o=Object.assign(e.model,r);Object(i["h"])(l,o,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},popupCallback:function(e){this.form.setFieldsValue(o()(e,"name","sex","age","descc","birthday","userCode","topPic","fileKk"))}}},f=d,p=a("2877"),h=Object(p["a"])(f,r,l,!1,null,null,null);t["default"]=h.exports}}]);