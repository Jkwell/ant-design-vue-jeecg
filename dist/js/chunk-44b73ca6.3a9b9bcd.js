(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44b73ca6","chunk-d56e4812","chunk-0568f6a4","chunk-2d0cfe94"],{"1be7":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[this.departId?[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{staticStyle:{height:"500px",overflow:"auto"},attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var r=t.slotTitle,i=t.ruleFlag;return a("span",{},[e._v("\n            "+e._s(r)+"\n            "),i?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,239970838)})],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.handleSubmit}},[e._v("保存")])],1)]:a("div",{staticStyle:{height:"330px"}},[a("h3",[e._v("请先选择一个部门!")])]),a("depart-datarule-modal",{ref:"datarule"})],2)},i=[],o=(a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("75fc")),l=a("4ec3"),s=a("6675");function n(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=c(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}function c(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var u={name:"DepartAuthModal",components:{DepartDataruleModal:s["default"]},data:function(){return{departId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e){this.departId=e,this.loadData()},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(){var e=this;e.departId||this.$message.warning("请点击选择一个部门!");var t=[].concat(Object(o["a"])(e.checkedKeys),Object(o["a"])(e.halfCheckedKeys)),a=t.join(","),r={departId:e.departId,permissionIds:a,lastpermissionIds:e.defaultCheckedKeys.join(",")};e.loading=!0,Object(l["P"])(r).then((function(t){t.success?(e.$message.success(t.message),e.loading=!1,e.loadData()):(e.$message.error(t.message),e.loading=!1)}))},convertTreeListToKeyLeafPairs:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=n(e);try{for(r.s();!(t=r.n()).done;){var i=t.value,o=i.key,l=i.isLeaf,s=i.children;a.push({key:o,isLeaf:l}),s&&s.length>0&&this.convertTreeListToKeyLeafPairs(s,a)}}catch(c){r.e(c)}finally{r.f()}return a},emptyCurrForm:function(){this.form.resetFields()},loadData:function(){var e=this;Object(l["L"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(l["B"])({departId:e.departId}).then((function(t){var r=Object(o["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),i=Object(o["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=Object(o["a"])(r),e.halfCheckedKeys=Object(o["a"])(i),e.defaultCheckedKeys=[].concat(Object(o["a"])(i),Object(o["a"])(r)),e.expandedKeysss=e.allTreeKeys}))}))}}},h=u,p=a("2877"),m=Object(p["a"])(h,r,i,!1,null,"0101ae54",null);t["default"]=m.exports},"4cd6":function(e,t,a){"use strict";var r=a("7b56"),i=a.n(r);i.a},6675:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,r){return a("a-col",{key:"dr"+r,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},i=[],o=(a("28a5"),a("290c")),l=a("da05"),s=a("0fea"),n={name:"DepartDataruleModal",components:{ACol:l["b"],ARow:o["a"]},data:function(){return{functionId:"",departId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartPermission/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(s["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,departId:this.departId,dataRuleIds:this.dataruleChecked.join(",")};Object(s["i"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.departId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.departId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=n,d=a("2877"),u=Object(d["a"])(c,r,i,!1,null,"73771a6a",null);t["default"]=u.exports},"7b56":function(e,t,a){},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,i="[object Arguments]",o="[object Function]",l="[object GeneratorFunction]",s="[object Symbol]",n="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,d=n||c||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function h(e,t){var a=-1,r=e?e.length:0,i=Array(r);while(++a<r)i[a]=t(e[a],a,e);return i}function p(e,t){var a=-1,r=t.length,i=e.length;while(++a<r)e[i+a]=t[a];return e}var m=Object.prototype,f=m.hasOwnProperty,y=m.toString,g=d.Symbol,v=m.propertyIsEnumerable,b=g?g.isConcatSpreadable:void 0,C=Math.max;function k(e,t,a,r,i){var o=-1,l=e.length;a||(a=K),i||(i=[]);while(++o<l){var s=e[o];t>0&&a(s)?t>1?k(s,t-1,a,r,i):p(i,s):r||(i[i.length]=s)}return i}function w(e,t){return e=Object(e),x(e,t,(function(t,a){return a in e}))}function x(e,t,a){var r=-1,i=t.length,o={};while(++r<i){var l=t[r],s=e[l];a(s,l)&&(o[l]=s)}return o}function S(e,t){return t=C(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,i=C(a.length-t,0),o=Array(i);while(++r<i)o[r]=a[t+r];r=-1;var l=Array(t+1);while(++r<t)l[r]=a[r];return l[t]=o,u(e,this,l)}}function K(e){return _(e)||D(e)||!!(b&&e&&e[b])}function T(e){if("string"==typeof e||N(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function D(e){return O(e)&&f.call(e,"callee")&&(!v.call(e,"callee")||y.call(e)==i)}var _=Array.isArray;function I(e){return null!=e&&$(e.length)&&!j(e)}function O(e){return L(e)&&I(e)}function j(e){var t=A(e)?y.call(e):"";return t==o||t==l}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function L(e){return!!e&&"object"==typeof e}function N(e){return"symbol"==typeof e||L(e)&&y.call(e)==s}var F=S((function(e,t){return null==e?{}:w(e,h(k(t,1),T))}));e.exports=F}).call(this,a("c8ba"))},c1af:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,ok:!1,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称",hidden:!1,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",e.validatorRules.departName],expression:"['departName', validatorRules.departName ]"}],attrs:{id:"departName",placeholder:"请输入机构/部门名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,hidden:e.seen,label:"上级部门",hasFeedback:""}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.departTree,placeholder:"请选择上级部门",disabled:e.condition},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.seen?[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n            公司\n          ")])],1)]:[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n              部门\n            ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n              岗位\n            ")])],1)]],2),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"电话"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",e.validatorRules.mobile],expression:"['mobile',validatorRules.mobile]"}],attrs:{placeholder:"请输入电话"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"传真"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["fax",{}],expression:"['fax', {}]"}],attrs:{placeholder:"请输入传真"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{}],expression:"['address', {}]"}],attrs:{placeholder:"请输入地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{initialValue:0}],expression:"[ 'departOrder',{'initialValue':0}]"}]})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{}],expression:"['memo', {}]"}],attrs:{placeholder:"请输入备注"}})],1)],1)],1)],1)},i=[],o=(a("3b2b"),a("6b54"),a("0fea")),l=a("4ec3"),s=a("88bc"),n=a.n(s),c=a("261e"),d={name:"SysDepartModal",components:{ATextarea:c["a"]},data:function(){return{departTree:[],orgTypeData:[],phoneWarning:"",departName:"",title:"操作",seen:!1,visible:!1,condition:!0,disableSubmit:!1,model:{},menuhidden:!1,menuusing:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{departName:{rules:[{required:!0,message:"请输入机构/部门名称!"}]},orgCode:{rules:[{required:!0,message:"请输入机构编码!"}]},mobile:{rules:[{validator:this.validateMobile}]}},url:{add:"/sys/sysDepart/add"},dictDisabled:!0}},created:function(){},methods:{loadTreeData:function(){var e=this;Object(l["E"])().then((function(t){if(t.success){e.departTree=[];for(var a=0;a<t.result.length;a++){var r=t.result[a];e.departTree.push(r)}}}))},add:function(e){e?(this.seen=!1,this.dictDisabled=!1):(this.seen=!0,this.dictDisabled=!0),this.edit(e)},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},{}),this.visible=!0,this.loadTreeData(),this.model.parentId=null!=e?e.toString():null,this.seen?this.model.orgCategory="1":this.model.orgCategory="2",this.$nextTick((function(){t.form.setFieldsValue(n()(t.model,"orgCategory","departName","departNameEn","departNameAbbr","departOrder","description","orgType","orgCode","mobile","fax","address","memo","status","delFlag"))}))},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i=Object.assign(e.model,r);Object(o["h"])(e.url.add,i,"post").then((function(e){e.success?(t.$message.success(e.message),t.loadTreeData(),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")}}},u=d,h=a("2877"),p=Object(h["a"])(u,r,i,!1,null,"01fa5ee3",null);t["default"]=p.exports},c9c2:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:12,sm:24}},[a("a-card",{attrs:{bordered:!1}},[a("a-row",{staticStyle:{"margin-left":"14px"}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd(2)}}},[e._v("添加子部门")]),a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleAdd(1)}}},[e._v("添加一级部门")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("部门信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),a("a-button",{attrs:{title:"删除多条数据",type:"default"},on:{click:e.batchDel}},[e._v("批量删除")])],1),a("div",{staticStyle:{background:"#fff","padding-left":"16px",height:"100%","margin-top":"5px"}},[a("a-alert",{attrs:{type:"info",showIcon:!0}},[a("div",{attrs:{slot:"message"},slot:"message"},[e._v("\n            当前选择："),this.currSelected.title?a("span",[e._v(e._s(e.getCurrSelectedTitle()))]):e._e(),this.currSelected.title?a("a",{staticStyle:{"margin-left":"10px"},on:{click:e.onClearSelected}},[e._v("取消选择")]):e._e()])]),a("a-input-search",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{placeholder:"请输入部门名称"},on:{search:e.onSearch}}),a("a-col",{attrs:{md:10,sm:24}},[[a("a-dropdown",{attrs:{trigger:[this.dropTrigger]},on:{visibleChange:e.dropStatus}},[a("span",{staticStyle:{"user-select":"none"}},[a("a-tree",{attrs:{checkable:"",multiple:"",selectedKeys:e.selectedKeys,checkedKeys:e.checkedKeys,treeData:e.departTree,checkStrictly:e.checkStrictly,expandedKeys:e.iExpandedKeys,autoExpandParent:e.autoExpandParent},on:{select:e.onSelect,check:e.onCheck,rightClick:e.rightHandle,expand:e.onExpand}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.handleAdd(3)}}},[e._v("添加")]),a("a-menu-item",{key:"2",on:{click:e.handleDelete}},[e._v("删除")]),a("a-menu-item",{key:"3",on:{click:e.closeDrop}},[e._v("取消")])],1)],1)]],2)],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1)],1)],1),a("a-col",{attrs:{md:12,sm:24}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"基本信息"}},[a("a-card",{attrs:{bordered:!1}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["departName",e.validatorRules.departName],expression:"['departName', validatorRules.departName ]"}],attrs:{placeholder:"请输入机构/部门名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"上级部门"}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeData,disabled:e.disable,placeholder:"无"},model:{value:e.model.parentId,callback:function(t){e.$set(e.model,"parentId",t)},expression:"model.parentId"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCode",e.validatorRules.orgCode],expression:"['orgCode', validatorRules.orgCode ]"}],attrs:{disabled:"",placeholder:"请输入机构编码"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"机构类型"}},[e.orgCategoryDisabled?[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"1"}},[e._v("\n                    公司\n                  ")])],1)]:[a("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["orgCategory",e.validatorRules.orgCategory],expression:"['orgCategory',validatorRules.orgCategory]"}],attrs:{placeholder:"请选择机构类型"}},[a("a-radio",{attrs:{value:"2"}},[e._v("\n                    部门\n                  ")]),a("a-radio",{attrs:{value:"3"}},[e._v("\n                    岗位\n                  ")])],1)]],2),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["departOrder",{initialValue:0}],expression:"[ 'departOrder',{'initialValue':0}]"}]})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"手机号"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{initialValue:""}],expression:"['mobile', {'initialValue':''}]"}],attrs:{placeholder:"请输入手机号"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"地址"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["address",{initialValue:""}],expression:"['address', {'initialValue':''}]"}],attrs:{placeholder:"请输入地址"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"备注"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:""}],expression:"['memo', {'initialValue':''}]"}],attrs:{placeholder:"请输入备注"}})],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-button",{attrs:{type:"default",htmlType:"button",icon:"sync"},on:{click:e.emptyCurrForm}},[e._v("重置")]),a("a-button",{attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.submitCurrForm}},[e._v("修改并保存")])],1)],1)],1),a("a-tab-pane",{key:"2",attrs:{tab:"部门权限",forceRender:""}},[a("depart-auth-modal",{ref:"departAuth"})],1)],1)],1),a("depart-modal",{ref:"departModal",on:{ok:e.loadTree}})],1)},i=[],o=(a("7f7f"),a("c1af")),l=a("88bc"),s=a.n(l),n=a("4ec3"),c=a("0fea"),d=a("b65a"),u=a("1be7"),h=[{title:"机构名称",dataIndex:"departName"},{title:"机构类型",align:"center",dataIndex:"orgType"},{title:"机构编码",dataIndex:"orgCode"},{title:"手机号",dataIndex:"mobile"},{title:"传真",dataIndex:"fax"},{title:"地址",dataIndex:"address"},{title:"排序",align:"center",dataIndex:"departOrder"},{title:"操作",align:"center",dataIndex:"action",scopedSlots:{customRender:"action"}}],p={name:"DepartList",mixins:[d["a"]],components:{DepartAuthModal:u["default"],DepartModal:o["default"]},data:function(){return{iExpandedKeys:[],loading:!1,autoExpandParent:!0,currFlowId:"",currFlowName:"",disable:!0,treeData:[],visible:!1,departTree:[],rightClickSelectedKey:"",hiding:!0,model:{},dropTrigger:"",depart:{},columns:h,disableSubmit:!1,checkedKeys:[],selectedKeys:[],autoIncr:1,currSelected:{},allTreeKeys:[],checkStrictly:!0,form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},graphDatasource:{nodes:[],edges:[]},validatorRules:{departName:{rules:[{required:!0,message:"请输入机构/部门名称!"}]},orgCode:{rules:[{required:!0,message:"请输入机构编码!"}]},orgCategory:{rules:[{required:!0,message:"请输入机构类型!"}]},mobile:{rules:[{validator:this.validateMobile}]}},url:{delete:"/sys/sysDepart/delete",edit:"/sys/sysDepart/edit",deleteBatch:"/sys/sysDepart/deleteBatch",exportXlsUrl:"sys/sysDepart/exportXls",importExcelUrl:"sys/sysDepart/importExcel"},orgCategoryDisabled:!1}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{loadData:function(){this.refresh()},loadTree:function(){var e=this,t=this;t.treeData=[],t.departTree=[],Object(n["C"])().then((function(a){if(a.success){for(var r=0;r<a.result.length;r++){var i=a.result[r];t.treeData.push(i),t.departTree.push(i),t.setThisExpandedKeys(i),t.getAllKeys(i)}e.loading=!1}}))},setThisExpandedKeys:function(e){if(e.children&&e.children.length>0){this.iExpandedKeys.push(e.key);for(var t=0;t<e.children.length;t++)this.setThisExpandedKeys(e.children[t])}},refresh:function(){this.loading=!0,this.loadTree()},rightHandle:function(e){this.dropTrigger="contextmenu",this.rightClickSelectedKey=e.node.eventKey},onExpand:function(e){this.iExpandedKeys=e,this.autoExpandParent=!1},backFlowList:function(){this.$router.back(-1)},dropStatus:function(e){0==e&&(this.dropTrigger="")},closeDrop:function(){this.dropTrigger=""},addRootNode:function(){this.$refs.nodeModal.add(this.currFlowId,"")},batchDel:function(){if(this.checkedKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.checkedKeys.length;t++)e+=this.checkedKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"确定要删除所选中的 "+this.checkedKeys.length+" 条数据，以及子节点数据吗?",onOk:function(){Object(c["a"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadTree(),a.onClearSelected()):a.$message.warning(e.message)}))}})}},onSearch:function(e){var t=this;e?Object(n["S"])({keyWord:e}).then((function(e){if(e.success){t.departTree=[];for(var a=0;a<e.result.length;a++){var r=e.result[a];t.departTree.push(r)}}else t.$message.warning(e.message)})):t.loadTree()},nodeModalOk:function(){this.loadTree()},nodeModalClose:function(){},hide:function(){this.visible=!1},onCheck:function(e,t){this.hiding=!1,this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},onSelect:function(e,t){this.hiding=!1;var a=t.node.dataRef;this.currSelected=Object.assign({},a),this.model=this.currSelected,this.selectedKeys=[a.key],this.model.parentId=a.parentId,this.setValuesToForm(a),this.$refs.departAuth.show(a.id)},setValuesToForm:function(e){"1"==e.orgCategory?this.orgCategoryDisabled=!0:this.orgCategoryDisabled=!1,this.form.getFieldDecorator("fax",{initialValue:""}),this.form.setFieldsValue(s()(e,"departName","orgCategory","orgCode","departOrder","mobile","fax","address","memo"))},getCurrSelectedTitle:function(){return this.currSelected.title?this.currSelected.title:""},onClearSelected:function(){this.hiding=!0,this.checkedKeys=[],this.currSelected={},this.form.resetFields(),this.selectedKeys=[],this.$refs.departAuth.departId=""},handleNodeTypeChange:function(e){this.currSelected.nodeType=e},notifyTriggerTypeChange:function(e){this.currSelected.notifyTriggerType=e},receiptTriggerTypeChange:function(e){this.currSelected.receiptTriggerType=e},submitCurrForm:function(){var e=this;this.form.validateFields((function(t,a){if(!t){if(!e.currSelected.id)return void e.$message.warning("请点击选择要修改部门!");var r=Object.assign(e.currSelected,a);Object(c["h"])(e.url.edit,r,"put").then((function(t){t.success?(e.$message.success("保存成功!"),e.loadTree()):e.$message.error(t.message)}))}}))},emptyCurrForm:function(){this.form.resetFields()},nodeSettingFormSubmit:function(){this.form.validateFields((function(e,t){}))},openSelect:function(){this.$refs.sysDirectiveModal.show()},handleAdd:function(e){if(1==e)this.$refs.departModal.add(),this.$refs.departModal.title="新增";else if(2==e){var t=this.currSelected.key;if(!t)return this.$message.warning("请先选中一条记录!"),!1;this.$refs.departModal.add(this.selectedKeys),this.$refs.departModal.title="新增"}else this.$refs.departModal.add(this.rightClickSelectedKey),this.$refs.departModal.title="新增"},handleDelete:function(){var e=this;Object(n["j"])({id:this.rightClickSelectedKey}).then((function(t){t.success?(e.$message.success("删除成功!"),e.loadTree()):e.$message.warning("删除失败!")}))},selectDirectiveOk:function(e){this.nodeSettingForm.setFieldsValue({directiveCode:e.directiveCode}),this.currSelected.sysCode=e.sysCode},getFlowGraphData:function(e){if(this.graphDatasource.nodes.push({id:e.id,text:e.flowNodeName}),e.children.length>0)for(var t=0;t<e.children.length;t++){var a=e.children[t];this.graphDatasource.edges.push({source:e.id,target:a.id}),this.getFlowGraphData(a)}},expandAll:function(){this.iExpandedKeys=this.allTreeKeys},closeAll:function(){this.iExpandedKeys=[]},checkALL:function(){this.checkStriccheckStrictlytly=!1,this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},getAllKeys:function(e){if(this.allTreeKeys.push(e.key),e.children&&e.children.length>0)for(var t=0;t<e.children.length;t++)this.getAllKeys(e.children[t])}},created:function(){this.currFlowId=this.$route.params.id,this.currFlowName=this.$route.params.name}},m=p,f=(a("4cd6"),a("2877")),y=Object(f["a"])(m,r,i,!1,null,"d1c5360c",null);t["default"]=y.exports}}]);