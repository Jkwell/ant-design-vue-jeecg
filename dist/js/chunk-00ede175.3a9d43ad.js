(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00ede175","chunk-0568f6a4","chunk-2d0cfe94","chunk-2d0b39b0","chunk-e97d60f6","chunk-2d0b39b0","chunk-2d0b39b0","chunk-2d0b39b0","chunk-2d0b39b0"],{"1be7":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[this.departId?[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{staticStyle:{height:"500px",overflow:"auto"},attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var n=t.slotTitle,s=t.ruleFlag;return a("span",{},[e._v("\n            "+e._s(n)+"\n            "),s?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,239970838)})],1)],1),a("div",{staticClass:"anty-form-btn"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n          树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-button",{staticStyle:{float:"right"},attrs:{type:"primary",htmlType:"button",icon:"form"},on:{click:e.handleSubmit}},[e._v("保存")])],1)]:a("div",{staticStyle:{height:"330px"}},[a("h3",[e._v("请先选择一个部门!")])]),a("depart-datarule-modal",{ref:"datarule"})],2)},s=[],r=(a("ac6a"),a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("75fc")),i=a("4ec3"),c=a("6675");function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=o(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,s,r=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return r=e.done,e},e:function(e){i=!0,s=e},f:function(){try{r||null==n.return||n.return()}finally{if(i)throw s}}}}function o(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var u={name:"DepartAuthModal",components:{DepartDataruleModal:c["default"]},data:function(){return{departId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!1,title:"部门权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId)},onCheck:function(e,t){var a=t.halfCheckedKeys;this.checkedKeys=e,this.halfCheckedKeys=a},show:function(e){this.departId=e,this.loadData()},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(){var e=this;e.departId||this.$message.warning("请点击选择一个部门!");var t=[].concat(Object(r["a"])(e.checkedKeys),Object(r["a"])(e.halfCheckedKeys)),a=t.join(","),n={departId:e.departId,permissionIds:a,lastpermissionIds:e.defaultCheckedKeys.join(",")};e.loading=!0,Object(i["P"])(n).then((function(t){t.success?(e.$message.success(t.message),e.loading=!1,e.loadData()):(e.$message.error(t.message),e.loading=!1)}))},convertTreeListToKeyLeafPairs:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=l(e);try{for(n.s();!(t=n.n()).done;){var s=t.value,r=s.key,i=s.isLeaf,c=s.children;a.push({key:r,isLeaf:i}),c&&c.length>0&&this.convertTreeListToKeyLeafPairs(c,a)}}catch(o){n.e(o)}finally{n.f()}return a},emptyCurrForm:function(){this.form.resetFields()},loadData:function(){var e=this;Object(i["L"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids;var a=e.convertTreeListToKeyLeafPairs(e.treeData);Object(i["B"])({departId:e.departId}).then((function(t){var n=Object(r["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&t.isLeaf})),s=Object(r["a"])(t.result).filter((function(e){var t=a.filter((function(t){return t.key===e}))[0];return t&&!t.isLeaf}));e.checkedKeys=Object(r["a"])(n),e.halfCheckedKeys=Object(r["a"])(s),e.defaultCheckedKeys=[].concat(Object(r["a"])(s),Object(r["a"])(n)),e.expandedKeysss=e.allTreeKeys}))}))}}},h=u,f=a("2877"),y=Object(f["a"])(h,n,s,!1,null,"0101ae54",null);t["default"]=y.exports},"28a5":function(e,t,a){"use strict";var n=a("aae3"),s=a("cb7c"),r=a("ebd6"),i=a("0390"),c=a("9def"),l=a("5f1b"),o=a("520a"),d=a("79e5"),u=Math.min,h=[].push,f="split",y="length",p="lastIndex",v=4294967295,b=!d((function(){RegExp(v,"y")}));a("214f")("split",2,(function(e,t,a,d){var k;return k="c"=="abbc"[f](/(b)*/)[1]||4!="test"[f](/(?:)/,-1)[y]||2!="ab"[f](/(?:ab)*/)[y]||4!="."[f](/(.?)(.?)/)[y]||"."[f](/()()/)[y]>1||""[f](/.?/)[y]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!n(e))return a.call(s,e,t);var r,i,c,l=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f=void 0===t?v:t>>>0,b=new RegExp(e.source,d+"g");while(r=o.call(b,s)){if(i=b[p],i>u&&(l.push(s.slice(u,r.index)),r[y]>1&&r.index<s[y]&&h.apply(l,r.slice(1)),c=r[0][y],u=i,l[y]>=f))break;b[p]===r.index&&b[p]++}return u===s[y]?!c&&b.test("")||l.push(""):l.push(s.slice(u)),l[y]>f?l.slice(0,f):l}:"0"[f](void 0,0)[y]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,n){var s=e(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,s,n):k.call(String(s),a,n)},function(e,t){var n=d(k,e,this,t,k!==a);if(n.done)return n.value;var o=s(e),h=String(this),f=r(o,RegExp),y=o.unicode,p=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(b?"y":"g"),m=new f(b?o:"^(?:"+o.source+")",p),g=void 0===t?v:t>>>0;if(0===g)return[];if(0===h.length)return null===l(m,h)?[h]:[];var K=0,x=0,C=[];while(x<h.length){m.lastIndex=b?x:0;var I,w=l(m,b?h:h.slice(x));if(null===w||(I=u(c(m.lastIndex+(b?0:x)),h.length))===K)x=i(h,x,y);else{if(C.push(h.slice(K,x)),C.length===g)return C;for(var L=1;L<=w.length-1;L++)if(C.push(w[L]),C.length===g)return C;x=K=I}}return C.push(h.slice(K)),C}]}))},6675:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,n){return a("a-col",{key:"dr"+n,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},s=[],r=(a("28a5"),a("290c")),i=a("da05"),c=a("0fea"),l={name:"DepartDataruleModal",components:{ACol:i["b"],ARow:r["a"]},data:function(){return{functionId:"",departId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartPermission/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(c["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,departId:this.departId,dataRuleIds:this.dataruleChecked.join(",")};Object(c["i"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.departId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.departId="",this.dataruleList=[],this.dataruleChecked=[]}}},o=l,d=a("2877"),u=Object(d["a"])(o,n,s,!1,null,"73771a6a",null);t["default"]=u.exports}}]);