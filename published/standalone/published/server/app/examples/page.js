(()=>{var e={};e.id=668,e.ids=[668],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},4698:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>c,routeModule:()=>h,tree:()=>d}),r(7766),r(1506),r(5866);var n=r(3191),a=r(8716),s=r(7922),l=r.n(s),o=r(5231),i={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>o[e]);r.d(t,i);let d=["",{children:["examples",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7766)),"/Users/gleam/Projects/antd.neo.st/app/examples/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1506)),"/Users/gleam/Projects/antd.neo.st/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/gleam/Projects/antd.neo.st/app/examples/page.tsx"],u="/examples/page",m={require:r,loadChunk:()=>Promise.resolve()},h=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/examples/page",pathname:"/examples",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9469:()=>{},7434:(e,t,r)=>{Promise.resolve().then(r.bind(r,8162)),Promise.resolve().then(r.bind(r,4082))},5568:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8162:(e,t,r)=>{"use strict";r.d(t,{default:()=>z});var n=r(326),a=r(7577),s=r.n(a),l=r(6226),o=r(3692),i=r(5591),d=r(9386),c=r(6359),u=r(2150),m=r(5767),h=r(331),p=r(8358),g=r(7829),x=r(4863),f=r(8577),b=r(1181),v=r(1359),j=r(1739),y=r(3333),_=r(434);let P=["1","2","3","4","5"].map(e=>({key:e,label:`Main menu ${e}`})),k=[u.Z,m.Z,h.Z,p.Z,g.Z,x.Z,f.Z,b.Z,v.Z,j.Z,y.Z].map((e,t)=>{let r=String(t+1);return String(e),{key:`SubMemnu_${r}`,icon:s().createElement(e),label:`Sub Memnu ${r}`,children:[,,,,,].fill(null).map((e,t)=>{let n=`SubMemnu_${r}_${t+1}`;return{key:n,label:`${n}`}})}});k.push({key:`SubMemnu_${k.length+1}`,label:n.jsx(_.default,{href:"/examples",children:"Examples"}),children:[{key:`SubMemnu_${k.length+1}_antd_grid`,label:n.jsx(_.default,{href:"/examples/grid",children:"Grid"})},{key:`SubMemnu_${k.length+1}_antd_upload`,label:n.jsx(_.default,{href:"/examples/upload",children:"Upload"})},{key:`SubMemnu_${k.length+1}_antd_table`,label:n.jsx(_.default,{href:"/examples/table",children:"Table"})}]});let{Header:S,Content:w,Footer:C,Sider:M}=o.default,Z={backgroundColor:"var(--background-nav-bar)"},q={display:"flex",backgroundColor:"var(--background-nav-bar)"},$={overflow:"hide",overflowX:"auto",height:"calc(100vh - 6rem)",scrollbarWidth:"thin",scrollbarColor:"unset",backgroundColor:"var(--background-nav-bar)"},E={padding:".3rem 1rem",color:"#fff",backgroundColor:"var(--background-nav-bar)"},A={margin:".3rem",padding:".3rem",borderRadius:".5rem",height:"100%",overflow:"none",scrollbarWidth:"thin",scrollbarColor:"unset",backgroundColor:"#fff"},U=({children:e,breadcrumbItems:t,props:r})=>{let[s,u]=(0,a.useState)(!1),{token:{colorBgContainer:m}}=i.Z.useToken();return console.log(t),(0,n.jsxs)(o.default,{...r,style:Z,children:[(0,n.jsxs)(S,{style:q,children:[n.jsx("div",{style:{minWidth:200,height:"100%",overflow:"hidden"},children:n.jsx(l.default,{src:"https://placehold.co/153x50/333/eee@3x.png?text=Logo",alt:"Site Logo",className:"dark:invert",style:{display:"inline-block",marginRight:"1rem",borderRadius:"0.5rem"},width:153,height:50,priority:!0})}),n.jsx(d.Z,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:P,style:{flex:1,minWidth:0,backgroundColor:"var(--background-nav-bar)",justifyContent:"flex-end"}})]}),(0,n.jsxs)(o.default,{style:Z,children:[n.jsx(M,{width:"253",style:$,breakpoint:"lg",collapsedWidth:"0",onBreakpoint:e=>{console.log(e)},onCollapse:(e,t)=>{console.log(e,t)},children:n.jsx(d.Z,{theme:"dark",mode:"inline",defaultSelectedKeys:["2"],items:k,style:{flex:1,minWidth:0,backgroundColor:"var(--background-nav-bar)",justifyContent:"flex-end"}})}),(0,n.jsxs)(w,{style:A,children:[n.jsx(c.Z,{style:{margin:"0 1rem"},items:t||[]}),n.jsx("div",{style:{margin:"0",padding:"1rem",height:"calc(100vh - 8.5rem)",overflow:"auto",scrollbarWidth:"thin",scrollbarColor:"unset"},children:e})]})]}),n.jsx(C,{style:E,children:"Footer"})]})};r(4240);let z=({children:e,breadcrumbItems:t,props:r})=>(console.log(t),n.jsx(U,{props:r,breadcrumbItems:t,children:e}))},7766:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>P});var n=r(9510),a=r(1159),s=r.n(a);function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}let o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]},name:"home",theme:"outlined"};var i=r(8570);let d=(0,i.createProxy)(String.raw`/Users/gleam/Projects/antd.neo.st/node_modules/@ant-design/icons/es/components/AntdIcon.js`),{__esModule:c,$$typeof:u}=d;d.default;let m=(0,i.createProxy)(String.raw`/Users/gleam/Projects/antd.neo.st/node_modules/@ant-design/icons/es/components/AntdIcon.js#default`);var h=a.forwardRef(function(e,t){return a.createElement(m,l({},e,{ref:t,icon:o}))});let p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};var g=a.forwardRef(function(e,t){return a.createElement(m,l({},e,{ref:t,icon:p}))});let x=(0,i.createProxy)(String.raw`/Users/gleam/Projects/antd.neo.st/components/layouts/antd.tsx`),{__esModule:f,$$typeof:b}=x;x.default;let v=(0,i.createProxy)(String.raw`/Users/gleam/Projects/antd.neo.st/components/layouts/antd.tsx#default`),j=[{href:"/",title:(0,n.jsxs)(n.Fragment,{children:[n.jsx(h,{}),n.jsx("span",{children:"Home"})]})},{href:"/examples",title:(0,n.jsxs)(n.Fragment,{children:[n.jsx(g,{}),n.jsx("span",{children:"Examples"})]})}],y={},_=[];Array.from({length:300},(e,t)=>t).forEach((e,t)=>{let r="ul_long_content$_li_"+String(t);_.push(n.jsx("li",{children:(0,n.jsxs)(s().Fragment,{children:[t+1,"\xa0",t%20==0?"long contents":"...",n.jsx("br",{})]},t)},r))});let P=()=>(0,n.jsxs)(v,{props:y,breadcrumbItems:j,children:["Examples",n.jsx("ul",{style:{margin:"1rem"},children:_},"ul_long_content")]})},1506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s,metadata:()=>a});var n=r(9510);r(7272);let a={title:"antd.neo.st",description:"This is Ant design examples page using Next.js + Tailwind CSS + Ant Design. You can see the live demo at https://antd.neo.st"};function s({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{children:e})})}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{},4240:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,471,838,990],()=>r(4698));module.exports=n})();