(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4860db5c"],{"0923":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rank"},[a("h4",{staticClass:"title"},[t._v(t._s(t.title))]),a("ul",{staticClass:"list",style:{height:t.height?t.height+"px":"auto",overflow:"auto"}},t._l(t.list,(function(e,r){return a("li",{key:r},[a("span",{class:r<3?"active":null},[t._v(t._s(r+1))]),a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.total))])])})),0)])},i=[],n=(a("c5f6"),{name:"RankList",props:{title:{type:String,default:""},list:{type:Array,default:null},height:{type:Number,default:null}}}),l=n,s=(a("cd1e"),a("2877")),o=Object(s["a"])(l,r,i,!1,null,"83c80048",null);e["default"]=o.exports},"1a3d":function(t,e,a){},"1c345":function(t,e,a){},"1cf5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{height:t.height,data:t.data,scale:t.scale,forceFit:!0,padding:["auto","auto","40","50"]}},[a("v-tooltip"),a("v-axis"),a("v-bar",{attrs:{position:"x*y"}})],1)],1)},i=[],n=(a("c5f6"),{name:"Bar",props:{title:{type:String,default:""},x:{type:String,default:"x"},y:{type:String,default:"y"},data:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y}]}},created:function(){},methods:{}}),l=n,s=a("2877"),o=Object(s["a"])(l,r,i,!1,null,null,null);e["default"]=o.exports},"1d43":function(t,e,a){"use strict";a.r(e);for(var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"antv-chart-mini"},[a("div",{staticClass:"chart-wrapper",style:{height:46}},[a("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,padding:[36,0,18,0]}},[a("v-tooltip"),a("v-smooth-area",{attrs:{position:"x*y"}})],1)],1)])},i=[],n=a("5a0c"),l=a.n(n),s=[],o=(new Date).getTime(),c=0;c<10;c++)s.push({x:l()(new Date(o+864e5*c)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var u={name:"MiniArea",props:{dataSource:{type:Array,default:function(){return[]}},x:{type:String,default:"x"},y:{type:String,default:"y"}},data:function(){return{data:[],height:100}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y}]}},created:function(){0===this.dataSource.length?this.data=s:this.data=this.dataSource}},d=u,f=(a("9815"),a("2877")),h=Object(f["a"])(d,r,i,!1,null,"1efcadbe",null);e["default"]=h.exports},"386b":function(t,e,a){var r=a("5ca1"),i=a("79e5"),n=a("be13"),l=/"/g,s=function(t,e,a,r){var i=String(n(t)),s="<"+e;return""!==a&&(s+=" "+a+'="'+String(r).replace(l,"&quot;")+'"'),s+">"+i+"</"+e+">"};t.exports=function(t,e){var a={};a[t]=e(s),r(r.P+r.F*i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",a)}},3981:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.data,padding:[20,20,95,20],scale:t.scale}},[a("v-tooltip"),a("v-axis",{attrs:{dataKey:t.axis1Opts.dataKey,line:t.axis1Opts.line,tickLine:t.axis1Opts.tickLine,grid:t.axis1Opts.grid}}),a("v-axis",{attrs:{dataKey:t.axis2Opts.dataKey,line:t.axis2Opts.line,tickLine:t.axis2Opts.tickLine,grid:t.axis2Opts.grid}}),a("v-legend",{attrs:{dataKey:"user",marker:"circle",offset:30}}),a("v-coord",{attrs:{type:"polar",radius:"0.8"}}),a("v-line",{attrs:{position:"item*score",color:"user",size:2}}),a("v-point",{attrs:{position:"item*score",color:"user",size:4,shape:"circle"}})],1)},i=[],n=(a("c5f6"),{dataKey:"item",line:null,tickLine:null,grid:{lineStyle:{lineDash:null},hideFirstLine:!1}}),l={dataKey:"score",line:null,tickLine:null,grid:{type:"polygon",lineStyle:{lineDash:null}}},s=[{dataKey:"score",min:0,max:100},{dataKey:"user",alias:"类型"}],o=[{item:"示例一",score:40},{item:"示例二",score:20},{item:"示例三",score:67},{item:"示例四",score:43},{item:"示例五",score:90}],c={name:"Radar",props:{height:{type:Number,default:254},dataSource:{type:Array,default:function(){return[]}}},data:function(){return{axis1Opts:n,axis2Opts:l,scale:s,data:o}},watch:{dataSource:function(t){0===t.length?this.data=o:this.data=t}}},u=c,d=a("2877"),f=Object(d["a"])(u,r,i,!1,null,"f48462e2",null);e["default"]=f.exports},"3c24":function(t,e,a){"use strict";var r=a("ab12"),i=a.n(r);i.a},"3dec":function(t,e,a){"use strict";var r=a("66d5"),i=a.n(r);i.a},"4ced":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-chart",{attrs:{forceFit:!0,height:t.height,width:t.width,data:t.data,scale:t.scale,padding:0}},[a("v-tooltip"),a("v-interval",{attrs:{shape:["liquid-fill-gauge"],position:"transfer*value",color:"","v-style":{lineWidth:8,opacity:.75},tooltip:["transfer*value",function(t,e){return{name:t,value:e}}]}}),t._l(t.data,(function(t,e){return a("v-guide",{key:e,attrs:{type:"text",top:!0,position:{gender:t.transfer,value:45},content:t.value+"%","v-style":{fontSize:100,textAlign:"center",opacity:.75}}})}))],2)],1)},i=[],n=(a("c5f6"),[{transfer:"一月",value:813},{transfer:"二月",value:233},{transfer:"三月",value:561}]),l={name:"Liquid",props:{height:{type:Number,default:0},width:{type:Number,default:0}},data:function(){return{data:n,scale:[]}}},s=l,o=a("2877"),c=Object(o["a"])(s,r,i,!1,null,"383ba75c",null);e["default"]=c.exports},"4ec6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{"force-fit":!0,height:t.height,data:t.data,scale:t.scale,onClick:t.handleClick}},[a("v-tooltip"),a("v-axis"),a("v-legend"),a("v-line",{attrs:{position:"type*y",color:"x"}}),a("v-point",{attrs:{position:"type*y",color:"x",size:4,"v-style":t.style,shape:"circle"}})],1)],1)},i=[],n=(a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("ac6a"),a("c5f6"),a("7104")),l=a("c917");function s(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=o(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,n=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return n=t.done,t},e:function(t){l=!0,i=t},f:function(){try{n||null==r.return||r.return()}finally{if(l)throw i}}}}function o(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var u={name:"LineChartMultid",mixins:[l["a"]],props:{title:{type:String,default:""},dataSource:{type:Array,default:function(){return[{type:"Jan",jeecg:7,jeebt:3.9},{type:"Feb",jeecg:6.9,jeebt:4.2},{type:"Mar",jeecg:9.5,jeebt:5.7},{type:"Apr",jeecg:14.5,jeebt:8.5},{type:"May",jeecg:18.4,jeebt:11.9},{type:"Jun",jeecg:21.5,jeebt:15.2},{type:"Jul",jeecg:25.2,jeebt:17},{type:"Aug",jeecg:26.5,jeebt:16.6},{type:"Sep",jeecg:23.3,jeebt:14.2},{type:"Oct",jeecg:18.3,jeebt:10.3},{type:"Nov",jeecg:13.9,jeebt:6.6},{type:"Dec",jeecg:9.6,jeebt:4.8}]}},fields:{type:Array,default:function(){return["jeecg","jeebt"]}},aliases:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{scale:[{dataKey:"x",min:0,max:1}],style:{stroke:"#fff",lineWidth:1}}},computed:{data:function(){var t=this,e=(new n["DataSet"].View).source(this.dataSource);e.transform({type:"fold",fields:this.fields,key:"x",value:"y"});var a=e.rows;return a.forEach((function(e){var a,r=s(t.aliases);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.field===e.x){e.x=i.alias;break}}}catch(n){r.e(n)}finally{r.f()}})),a}}},d=u,f=a("2877"),h=Object(f["a"])(d,r,i,!1,null,"7ba9da5d",null);e["default"]=h.exports},5139:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"柱状图"}},[a("bar",{attrs:{title:"销售额排行",dataSource:t.barData,height:t.height}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"多列柱状图"}},[a("bar-multid",{attrs:{title:"多列柱状图",height:t.height}})],1),a("a-tab-pane",{key:"3",attrs:{tab:"迷你柱状图"}},[a("mini-bar",{attrs:{dataSource:t.barData,width:400,height:200}})],1),a("a-tab-pane",{key:"4",attrs:{tab:"面积图"}},[a("area-chart-ty",{attrs:{title:"销售额排行",dataSource:t.areaData,x:"月份",y:"销售额",height:t.height}})],1),a("a-tab-pane",{key:"5",attrs:{tab:"迷你面积图"}},[a("div",{staticStyle:{"padding-top":"100px",width:"600px",height:"200px"}},[a("mini-area",{attrs:{dataSource:t.areaData,x:"月份",y:"销售额",height:t.height}})],1)]),a("a-tab-pane",{key:"6",attrs:{tab:"多行折线图"}},[a("line-chart-multid",{attrs:{title:"多行折线图",height:t.height}})],1),a("a-tab-pane",{key:"7",attrs:{tab:"饼图"}},[a("pie",{attrs:{title:"饼图",height:t.height}})],1),a("a-tab-pane",{key:"8",attrs:{tab:"雷达图"}},[a("radar",{attrs:{title:"雷达图",height:t.height}})],1),a("a-tab-pane",{key:"9",attrs:{tab:"仪表盘"}},[a("dash-chart-demo",{attrs:{title:"仪表盘",value:9,height:t.height}})],1),a("a-tab-pane",{key:"10",attrs:{tab:"进度条"}},[a("mini-progress",{attrs:{percentage:30,target:40,height:30}}),a("mini-progress",{attrs:{percentage:51,target:60,height:30,color:"#FFA500"}}),a("mini-progress",{attrs:{percentage:66,target:80,height:30,color:"#1E90FF"}}),a("mini-progress",{attrs:{percentage:74,target:70,height:30,color:"#FF4500"}}),a("mini-progress",{attrs:{percentage:92,target:100,height:30,color:"#49CC49"}})],1),a("a-tab-pane",{key:"11",attrs:{tab:"排名列表"}},[a("rank-list",{staticStyle:{width:"600px",margin:"0 auto"},attrs:{title:"门店销售排行榜",list:t.rankList}})],1),a("a-tab-pane",{key:"12",attrs:{tab:"TransferBar"}},[a("transfer-bar",{attrs:{title:"年度消耗流量一览表",data:t.barData,x:"月份",y:"流量(Mb)",height:t.height}})],1),a("a-tab-pane",{key:"13",attrs:{tab:"Trend"}},[a("trend",{attrs:{title:"Trend",term:"Trend：",percentage:30}})],1),a("a-tab-pane",{key:"14",attrs:{tab:"Liquid"}},[a("liquid",{attrs:{height:t.height}})],1),a("a-tab-pane",{key:"15",attrs:{tab:"BarAndLine"}},[a("bar-and-line",{attrs:{height:t.height}})],1)],1)],1)},i=[],n=a("bd86"),l=a("f552"),s=a("edd9"),o=a("8191"),c=a("972f"),u=a("4ec6"),d=a("4ced"),f=a("942d"),h=a("1d43"),p=a("bf13"),y=a("6cb2"),g=a("3981"),v=a("0923"),m=a("1cf5"),b=a("527e"),x=a("e659"),S={name:"ViserChartDemo",components:{Bar:s["default"],MiniBar:f["default"],BarMultid:o["default"],AreaChartTy:l["default"],LineChartMultid:u["default"],Pie:y["default"],Radar:g["default"],DashChartDemo:c["default"],MiniProgress:p["default"],RankList:v["default"],TransferBar:m["default"],Trend:b["default"],Liquid:d["default"],MiniArea:h["default"],BarAndLine:x["default"]},data:function(){return{height:420,rankList:[],barData:[],areaData:[]}},created:function(){var t=this;setTimeout((function(){t.loadBarData(),t.loadAreaData(),t.loadRankListData()}),100)},methods:{loadData:function(t,e,a,r){for(var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"月",s=[],o=0;o<12;o+=1){var c;s.push((c={},Object(n["a"])(c,t,"".concat(i).concat(o+1).concat(l)),Object(n["a"])(c,e,Math.floor(Math.random()*a)+r),c))}return s},loadBarData:function(){this.barData=this.loadData("x","y",1e3,200)},loadAreaData:function(){this.areaData=this.loadData("x","y",500,100)},loadRankListData:function(){this.rankList=this.loadData("name","total",2e3,100,"北京朝阳 "," 号店")}}},k=S,_=a("2877"),j=Object(_["a"])(k,r,i,!1,null,"1fd923d1",null);e["default"]=j.exports},"527e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-trend"},[t._v("\n  "+t._s(t.term)+"\n  "),a("span",[t._v(t._s(t.rate)+"%")]),a("span",{class:["trend-icon",t.trend]},[a("a-icon",{attrs:{type:"caret-"+t.trend}})],1)])},i=[],n=(a("d263"),a("c5f6"),{name:"Trend",props:{term:{type:String,default:"",required:!0},percentage:{type:Number,default:null},type:{type:Boolean,default:null},target:{type:Number,default:0},value:{type:Number,default:0},fixed:{type:Number,default:2}},data:function(){return{trend:this.type?"up":"down",rate:this.percentage}},created:function(){var t=null===this.type?this.value>=this.target:this.type;this.trend=t?"up":"down",this.rate=(null===this.percentage?100*Math.abs(this.value-this.target)/this.target:this.percentage).toFixed(this.fixed)}}),l=n,s=(a("3dec"),a("2877")),o=Object(s["a"])(l,r,i,!1,null,"30501fa8",null);e["default"]=o.exports},"66d5":function(t,e,a){},"6cb2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.data,scale:t.scale,onClick:t.handleClick}},[a("v-tooltip",{attrs:{showTitle:!1,dataKey:"item*percent"}}),a("v-axis"),a("v-legend",{attrs:{dataKey:"item"}}),a("v-pie",{attrs:{position:"percent",color:"item","v-style":t.pieStyle,label:t.labelConfig}}),a("v-coord",{attrs:{type:"theta"}})],1)},i=[],n=(a("c5f6"),a("c917")),l=a("7104"),s={name:"Pie",mixins:[n["a"]],props:{title:{type:String,default:""},height:{type:Number,default:254},dataSource:{type:Array,default:function(){return[{item:"示例一",count:40},{item:"示例二",count:21},{item:"示例三",count:17},{item:"示例四",count:13},{item:"示例五",count:9}]}}},data:function(){return{scale:[{dataKey:"percent",min:0,formatter:".0%"}],pieStyle:{stroke:"#fff",lineWidth:1},labelConfig:["percent",{formatter:function(t,e){return e.point.item+": "+t}}]}},computed:{data:function(){var t=(new l.View).source(this.dataSource);return t.transform({type:"percent",field:"count",dimension:"item",as:"percent"}),t.rows}}},o=s,c=a("2877"),u=Object(c["a"])(o,r,i,!1,null,null,null);e["default"]=u.exports},8191:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{data:t.data,height:t.height,"force-fit":!0,onClick:t.handleClick}},[a("v-tooltip"),a("v-axis"),a("v-legend"),a("v-bar",{attrs:{position:"x*y",color:"type",adjust:t.adjust}})],1)],1)},i=[],n=(a("ac4d"),a("8a81"),a("5df3"),a("1c4c"),a("7f7f"),a("6b54"),a("ac6a"),a("a481"),a("c5f6"),a("7104")),l=a("c917");function s(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=o(t))){var e=0,a=function(){};return{s:a,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,n=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return n=t.done,t},e:function(t){l=!0,i=t},f:function(){try{n||null==r.return||r.return()}finally{if(l)throw i}}}}function o(t,e){if(t){if("string"===typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}var u={name:"BarMultid",mixins:[l["a"]],props:{title:{type:String,default:""},dataSource:{type:Array,default:function(){return[{type:"Jeecg","Jan.":18.9,"Feb.":28.8,"Mar.":39.3,"Apr.":81.4,May:47,"Jun.":20.3,"Jul.":24,"Aug.":35.6},{type:"Jeebt","Jan.":12.4,"Feb.":23.2,"Mar.":34.5,"Apr.":99.7,May:52.6,"Jun.":35.5,"Jul.":37.4,"Aug.":42.4}]}},fields:{type:Array,default:function(){return["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug."]}},aliases:{type:Array,default:function(){return[]}},height:{type:Number,default:254}},data:function(){return{adjust:[{type:"dodge",marginRatio:1/32}]}},computed:{data:function(){var t=this,e=(new n["DataSet"].View).source(this.dataSource);e.transform({type:"fold",fields:this.fields,key:"x",value:"y"});var a=e.rows.map((function(t){return"string"===typeof t.x&&(t.x=t.x.replace(/[-/]/g,"_")),t}));return a.forEach((function(e){var a,r=s(t.aliases);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(i.field===e.type){e.type=i.alias;break}}}catch(n){r.e(n)}finally{r.f()}})),a}}},d=u,f=a("2877"),h=Object(f["a"])(d,r,i,!1,null,"5ef3146c",null);e["default"]=h.exports},"891c":function(t,e,a){},"8d7f":function(t,e,a){"use strict";var r=a("1c345"),i=a.n(r);i.a},"942d":function(t,e,a){"use strict";a.r(e);for(var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{width:null==t.width?"auto":t.width+"px"}},[a("v-chart",{attrs:{forceFit:null==t.width,height:t.height,data:t.data,padding:"0"}},[a("v-tooltip"),a("v-bar",{attrs:{position:"x*y"}})],1)],1)},i=[],n=(a("c5f6"),a("5a0c")),l=a.n(n),s=[],o=(new Date).getTime(),c=0;c<10;c++)s.push({x:l()(new Date(o+864e5*c)).format("YYYY-MM-DD"),y:Math.round(10*Math.random())});var u=["x*y",function(t,e){return{name:t,value:e}}],d=[{dataKey:"x",min:2},{dataKey:"y",title:"时间",min:1,max:30}],f={name:"MiniBar",props:{dataSource:{type:Array,default:function(){return[]}},width:{type:Number,default:null},height:{type:Number,default:200}},created:function(){0===this.dataSource.length?this.data=s:this.data=this.dataSource},data:function(){return{tooltip:u,data:[],scale:d}}},h=f,p=(a("a8f1"),a("2877")),y=Object(p["a"])(h,r,i,!1,null,"ebc8c03c",null);e["default"]=y.exports},"972f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("v-chart",{attrs:{forceFit:!0,height:300,data:t.chartData,scale:t.scale}},[a("v-coord",{attrs:{type:"polar",startAngle:-202.5,endAngle:22.5,radius:.75}}),a("v-axis",{attrs:{dataKey:"value",zIndex:2,line:null,label:t.axisLabel,subTickCount:4,subTickLine:t.axisSubTickLine,tickLine:t.axisTickLine,grid:null}}),a("v-axis",{attrs:{dataKey:"1",show:!1}}),a("v-series",{attrs:{gemo:"point",position:"value*1",shape:"pointer",color:"#1890FF",active:!1}}),a("v-guide",{attrs:{type:"arc",zIndex:0,top:!1,start:t.arcGuide1Start,end:t.arcGuide1End,vStyle:t.arcGuide1Style}}),a("v-guide",{attrs:{type:"arc",zIndex:1,start:t.arcGuide2Start,end:t.getArcGuide2End,vStyle:t.arcGuide2Style}}),a("v-guide",{attrs:{type:"html",position:t.htmlGuidePosition,html:t.getHtmlGuideHtml()}})],1)],1)},i=[],n=(a("c5f6"),a("3654"));Object(n["b"])("point","pointer",{draw:function(t,e){var a=t.points[0];a=this.parsePoint(a);var r=this.parsePoint({x:0,y:0});return e.addShape("line",{attrs:{x1:r.x,y1:r.y,x2:a.x,y2:a.y+15,stroke:t.color,lineWidth:5,lineCap:"round"}}),e.addShape("circle",{attrs:{x:r.x,y:r.y,r:9.75,stroke:t.color,lineWidth:4.5,fill:"#fff"}})}});var l=[{dataKey:"value",min:0,max:9,tickInterval:1,nice:!1}],s=[{value:7}],o={name:"DashChartDemo",props:{datasource:{type:Number,default:7},title:{type:String,default:""}},created:function(){this.datasource?this.chartData=[{value:this.datasource}]:this.chartData=s,this.getChartData()},watch:{datasource:function(t){this.chartData=[{value:t}],this.getChartData()}},methods:{getChartData:function(){this.chartData&&this.chartData.length>0?this.abcd=10*this.chartData[0].value:this.abcd=70},getHtmlGuideHtml:function(){return'<div style="width: 300px;text-align: center;">\n<p style="font-size: 14px;color: #545454;margin: 0;">'+this.title+'</p>\n<p style="font-size: 36px;color: #545454;margin: 0;">'+this.abcd+"%</p>\n</div>"},getArcGuide2End:function(){return[this.chartData[0].value,.945]}},data:function(){return{chartData:[],height:400,scale:l,abcd:70,axisLabel:{offset:-16,textStyle:{fontSize:18,textAlign:"center",textBaseline:"middle"}},axisSubTickLine:{length:-8,stroke:"#fff",strokeOpacity:1},axisTickLine:{length:-17,stroke:"#fff",strokeOpacity:1},arcGuide1Start:[0,.945],arcGuide1End:[9,.945],arcGuide1Style:{stroke:"#CBCBCB",lineWidth:18},arcGuide2Start:[0,.945],arcGuide2Style:{stroke:"#1890FF",lineWidth:18},htmlGuidePosition:["50%","100%"],htmlGuideHtml:'\n      <div style="width: 300px;text-align: center;">\n        <p style="font-size: 14px;color: #545454;margin: 0;">'.concat(this.title,'</p>\n        <p style="font-size: 36px;color: #545454;margin: 0;">').concat(this.abcd,"%</p>\n      </div>\n    ")}}},c=o,u=a("2877"),d=Object(u["a"])(c,r,i,!1,null,null,null);e["default"]=d.exports},9815:function(t,e,a){"use strict";var r=a("1a3d"),i=a.n(r);i.a},a8f1:function(t,e,a){"use strict";var r=a("891c"),i=a.n(r);i.a},ab12:function(t,e,a){},be4e:function(t,e,a){},bf13:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chart-mini-progress"},[a("div",{staticClass:"target",style:{left:t.target+"%"}},[a("span",{style:{backgroundColor:t.color}}),a("span",{style:{backgroundColor:t.color}})]),a("div",{staticClass:"progress-wrapper"},[a("div",{staticClass:"progress",style:{backgroundColor:t.color,width:t.percentage+"%",height:t.height+"px"}})])])},i=[],n=(a("c5f6"),{name:"MiniProgress",props:{target:{type:Number,default:0},height:{type:Number,default:10},color:{type:String,default:"#13C2C2"},percentage:{type:Number,default:0}}}),l=n,s=(a("3c24"),a("2877")),o=Object(s["a"])(l,r,i,!1,null,"bc81620e",null);e["default"]=o.exports},c917:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var r={methods:{handleClick:function(t,e){this.handleEvent("click",t,e)},handleEvent:function(t,e,a){this.$emit(t,e,a)}}}},cd1e:function(t,e,a){"use strict";var r=a("be4e"),i=a.n(r);i.a},d263:function(t,e,a){"use strict";a("386b")("fixed",(function(t){return function(){return t(this,"tt","","")}}))},e659:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 50px 32px 0"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.data,scale:t.scale,padding:t.padding,onClick:t.handleClick}},[a("v-tooltip"),a("v-legend"),a("v-axis"),a("v-bar",{attrs:{position:"type*bar"}}),a("v-line",{attrs:{position:"type*line",color:"#2fc25b",size:3}})],1)],1)},i=[],n=(a("c5f6"),a("c917")),l={name:"BarAndLine",mixins:[n["a"]],props:{title:{type:String,default:""},dataSource:{type:Array,default:function(){return[{type:"10:10",bar:200,line:1e3},{type:"10:15",bar:600,line:1e3},{type:"10:20",bar:200,line:1e3},{type:"10:25",bar:900,line:1e3},{type:"10:30",bar:200,line:1e3},{type:"10:35",bar:200,line:1e3},{type:"10:40",bar:100,line:1e3}]}},height:{type:Number,default:400}},data:function(){return{padding:{top:50,right:50,bottom:100,left:50},scale:[{dataKey:"bar",min:0},{dataKey:"line",min:0}]}},computed:{data:function(){return this.dataSource}}},s=l,o=a("2877"),c=Object(o["a"])(s,r,i,!1,null,null,null);e["default"]=c.exports},edd9:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0 0 32px 32px"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{attrs:{forceFit:!0,height:t.height,data:t.dataSource,scale:t.scale,padding:t.padding}},[a("v-tooltip"),a("v-axis"),a("v-bar",{attrs:{position:"x*y"}})],1)],1)},i=[],n=(a("c5f6"),a("ca00")),l={name:"Bar",props:{dataSource:{type:Array,required:!0},yaxisText:{type:String,default:"y"},title:{type:String,default:""},height:{type:Number,default:254}},data:function(){return{padding:["auto","auto","40","50"]}},computed:{scale:function(){return[{dataKey:"y",alias:this.yaxisText}]}},mounted:function(){Object(n["k"])()}},s=l,o=a("2877"),c=Object(o["a"])(s,r,i,!1,null,null,null);e["default"]=c.exports},f552:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:{padding:"0"}},[a("h4",{style:{marginBottom:"20px"}},[t._v(t._s(t.title))]),a("v-chart",{ref:"chart",attrs:{forceFit:!0,height:t.height,data:t.dataSource,scale:t.scale}},[a("v-tooltip",{attrs:{shared:!1}}),a("v-axis"),a("v-line",{attrs:{position:"x*y",size:t.lineSize,color:t.lineColor}}),a("v-area",{attrs:{position:"x*y",color:t.color}})],1)],1)},i=[],n=(a("c5f6"),a("ca00")),l={name:"AreaChartTy",props:{dataSource:{type:Array,required:!0},title:{type:String,default:""},x:{type:String,default:"x"},y:{type:String,default:"y"},min:{type:Number,default:0},max:{type:Number,default:null},height:{type:Number,default:254},lineSize:{type:Number,default:2},color:{type:String,default:""},lineColor:{type:String,default:""}},computed:{scale:function(){return[{dataKey:"x",title:this.x,alias:this.x},{dataKey:"y",title:this.y,alias:this.y,min:this.min,max:this.max}]}},mounted:function(){Object(n["k"])()}},s=l,o=(a("8d7f"),a("2877")),c=Object(o["a"])(s,r,i,!1,null,"6d58f736",null);e["default"]=c.exports}}]);