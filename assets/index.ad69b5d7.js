import{c as K,a as lt,b as ot,p as ct,d as dt,e as ut,s as ht,f as pt,F as mt,R as gt,P as ft,g as xt,h as yt,i as bt,j as Ae,u as b,k as e,l as y,m as kt,n as vt,o as St,B as g,I as wt,q as r,r as ce,C as Re,t as de,T as p,v as le,w as Ct,x as _,y as It,G as m,z as v,A as F,D as O,E as Pt,H as _t,S as qe,M as Q,J as z,K as B,L as ae,N as ue,O as Se,Q as w,U as Ke,V as se,W as Tt,X as ie,Y as J,Z as He,_ as Be,$ as Lt,a0 as Wt,a1 as Mt,a2 as we,a3 as Ot,a4 as je,a5 as ze,a6 as Ut,a7 as Ft,a8 as L,a9 as Gt,aa as Dt,ab as Pe,ac as _e,ad as $t,ae as Et,af as At,ag as Rt,ah as A,ai as qt,aj as Kt,ak as Ht,al as Bt,am as $,an as Te,ao as H,ap as j,aq as jt,ar as Ne,as as zt,at as Nt,au as Vt,av as Qt,aw as Zt,ax as E,ay as I,az as Le,aA as Jt,aB as Yt,aC as Xt,aD as Ve,aE as R,aF as he,aG as q,aH as We,aI as Me,aJ as pe,aK as Oe,aL as en,aM as tn,aN as N,aO as V,aP as nn,aQ as rn,aR as an,aS as sn,aT as ln,aU as on,aV as cn,aW as dn,aX as un,aY as hn,aZ as pn,a_ as mn,a$ as gn}from"./vendor.66509f7f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&d(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function d(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();const fn={selectedModel:null,selectedWorkers:[],genForm:{prompt:"",params:{sampler_name:"k_euler",toggles:[1,4],cfg_scale:7,seed:"",height:512,width:512,seed_variation:1,post_processing:[],karras:!0,tiling:!1,hires_fix:!1,clip_skip:1,steps:20,n:1},nsfw:!0,trusted_workers:!1,censor_nsfw:!1,workers:[],models:[],r2:!0,shared:!0}},me=K({name:"comparatorPanel",initialState:fn,reducers:{setSelectedModel:(n,t)=>{n.selectedModel=t.payload},setSelectedWorkers:(n,t)=>{n.selectedWorkers=t.payload},setGenForm:(n,t)=>{n.genForm=structuredClone(t.payload)}}}),{setSelectedModel:Ue,setSelectedWorkers:ee,setGenForm:xn}=me.actions,yn={sidebarOpen:!1},ge=K({name:"localState",initialState:yn,reducers:{setSidebarOpen:(n,t)=>{n.sidebarOpen=t.payload}}}),{setSidebarOpen:Qe}=ge.actions,Ze={apikey:"",selectedTab:"1",favorites:[],imageGens:[]},Y=K({name:"persist",initialState:Ze,reducers:{setKey:(n,t)=>{n.apikey=t.payload},setSelectedTab:(n,t)=>{n.selectedTab=t.payload},resetImageGens:n=>{n.imageGens=[]},addImageGen:(n,t)=>{n.imageGens.find(d=>d.id===t.payload.id)||n.imageGens.push(t.payload)},updateImageGen:(n,t)=>{const s=n.imageGens.findIndex(d=>d.id===t.payload.id);s!=null&&(n.imageGens[s]=t.payload)}}}),{setKey:bn,setSelectedTab:kn,resetImageGens:Fe,addImageGen:vn,updateImageGen:re}=Y.actions,Sn={showPassword:!1},fe=K({name:"settingsPanel",initialState:Sn,reducers:{setShowPassword:(n,t)=>{n.showPassword=t.payload}}}),{setShowPassword:xe}=fe.actions,wn={},ye=K({name:"userPanel",initialState:wn,reducers:{setUser:(n,t)=>{n.selectedUser=t.payload}}}),{setUser:Ge}=ye.actions,Cn={prompt:""},be=K({name:"utilityPanel",initialState:Cn,reducers:{setPrompt:(n,t)=>{n.prompt=t.payload}}}),{setPrompt:In}=be.actions,Pn={sortKey:"name",order:"asc"},ke=K({name:"workerPanel",initialState:Pn,reducers:{setWorkerFilter:(n,t)=>{n.workerFilter=t.payload},setSortKey:(n,t)=>{n.sortKey=t.payload},setOrder:(n,t)=>{n.order=t.payload}}}),{setWorkerFilter:_n,setSortKey:Tn,setOrder:Ln}=ke.actions,Wn=lt((n,t)=>n,(n,t)=>Object.assign({},Ze,n),{whitelist:[Y.name]}),Mn={key:"root",storage:pt,whitelist:[Y.name],transforms:[Wn]},On=ot({[Y.name]:Y.reducer,[ge.name]:ge.reducer,[fe.name]:fe.reducer,[ye.name]:ye.reducer,[be.name]:be.reducer,[ke.name]:ke.reducer,[me.name]:me.reducer}),Un=ct(Mn,On),oe=dt({reducer:Un,middleware:n=>n({serializableCheck:{ignoredActions:[mt,gt,ft,xt,yt,bt]}}),devTools:!1}),Fn=ut(oe);ht(oe.dispatch);const C=Ae.create({baseURL:"https://stablehorde.net/api/v2/"});C.interceptors.request.use(function(n){const t=oe.getState().persist.apikey;return n.headers!=null&&t!=null&&(n.headers.apikey=t),n},function(n){return Promise.reject(n)});const Gn=Ae.create({baseURL:"/horde-control-tower/"}),Dn=n=>C.get("find_user",{headers:{apikey:n}}).then(t=>t.data),Je=()=>C.get("status/modes").then(n=>n.data),Ye=()=>C.get("status/performance").then(n=>n.data),Xe=()=>Gn.get("users.json").then(n=>n.data),Ce=n=>C.get(`users/${n}`).then(t=>t.data),Ie=()=>C.get("workers").then(n=>n.data),$n=n=>C.get(`workers/${n}`).then(t=>t.data),et=()=>C.get("status/models").then(n=>n.data),tt=(n,t)=>C.put(`users/${n}`,t).then(s=>s.data),En=(n,t)=>C.put(`workers/${n}`,t).then(s=>s.data),An=n=>C.post("filters",n).then(t=>t.data),Rn=n=>C.post("generate/async",n).then(t=>t.data),qn=n=>C.get(`generate/check/${n}`).then(t=>t.data),Kn=n=>C.get(`generate/status/${n}`).then(t=>t.data),Hn=n=>C.delete(`generate/status/${n}`).then(t=>t.data),W={all:["users"],lists:()=>[...W.all,"list"],list:n=>[...W.lists(),{filters:n}],details:()=>[...W.all,"detail"],detail:n=>[...W.details(),n]},U={all:["workers"],lists:()=>[...U.all,"list"],list:n=>[...U.lists(),{filters:n}],details:()=>[...U.all,"detail"],detail:n=>[...U.details(),n]},Bn=()=>(b(W.all,Xe,{staleTime:1e3*30,refetchInterval:1e3*30}),b(["performance"],Ye,{staleTime:1e3*30,refetchInterval:1e3*30}),b(["mode"],Je,{staleTime:1e3*30,refetchInterval:1e3*30}),b(["models"],et,{staleTime:1e3*30,refetchInterval:1e3*30}),e(y,{})),M=()=>vt(),x=kt,jn=()=>{const n=x(a=>a.persist.imageGens),{data:t}=b(U.all,()=>Ie(),{refetchInterval:1e3*30,select:a=>St(a.map(c=>[c.id,c.name]))}),s=a=>{var l,h,i;const c=a.status!=null?a.status:a.check;return a.state!=="complete"&&c!=null?r(ce,{sx:{paddingTop:"100%",border:"1px solid black"},children:[e(Re,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),e(de,{title:t==null?"":t[(l=a.payload.workers[0])!=null?l:""],subtitle:`Position: ${c.queue_position}, wait time: ${c.wait_time}`})]},a.id):a.state==="complete"?d(a).length===0?r(ce,{sx:{paddingTop:"100%",border:"1px solid black"},children:[e(p,{variant:"h3",sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:"Canceled"}),e(de,{title:t==null?"":t[(h=a.payload.workers[0])!=null?h:""]})]},a.id):r(ce,{sx:{paddingTop:d(a).length>0?"0%":"100%",border:"1px solid black"},children:[e("img",{src:d(a)}),e(de,{title:t==null?"":t[(i=a.payload.workers[0])!=null?i:""]})]}):e(y,{})},d=a=>a.status!=null&&a.status.generations.length>0?a.status.generations[0].img:"";return e(g,{children:e(wt,{sx:{width:"100%",height:"100%"},cols:4,children:n.map(a=>s(a))})})},zn=["GFPGAN","RealESRGAN_x4plus","CodeFormers"],Nn=["k_lms","k_heun","k_euler","k_euler_a","k_dpm_2","k_dpm_2_a","k_dpm_fast","k_dpm_adaptive","k_dpmpp_2m","k_dpmpp_2s_a","k_dpmpp_sde"],T="175px",Vn=()=>{const n=M(),t=x(u=>u.comparatorPanel.selectedWorkers),s=x(u=>u.comparatorPanel.selectedModel),d=x(u=>u.comparatorPanel.genForm),a=x(u=>u.persist.imageGens),c=x(u=>u.persist.imageGens.length>0),l=x(u=>u.persist.imageGens.some(f=>["pending","check"].includes(f.state))),{mutate:h}=le({mutationFn:Rn,onSuccess:(u,f,S)=>{n(vn({id:u.id,payload:f,state:"check",check:null,status:null}))}}),{handleSubmit:i,control:o,formState:{errors:k},watch:P,setValue:G}=Ct({defaultValues:d}),D=u=>{s!=null&&t.length>0&&(n(Fe()),t.forEach(f=>{const S={...u,workers:[f.id],models:[s.name]};h(S)}))};return _.exports.useEffect(()=>{const u=P(It((f,{name:S,type:at})=>{n(xn(f))},300));return()=>u.unsubscribe()},[P]),e(g,{children:r("form",{onSubmit:i(D),children:[r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Prompt"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(v,{name:"prompt",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(F,{fullWidth:!0,required:!0,multiline:!0,placeholder:"Enter prompt here",...u})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Seed"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(v,{name:"params.seed",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(F,{fullWidth:!0,placeholder:"Seed",...u})})}),e(m,{item:!0,children:e(O,{"aria-label":"randomize seed",onClick:()=>{G("params.seed",Pt(1e8,999999999).toString())},children:e(_t,{})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Sampler"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(v,{name:"params.sampler_name",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(qe,{...u,fullWidth:!0,children:Nn.map(f=>e(Q,{value:f,children:f},f))})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Steps"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(v,{name:"params.steps",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(z,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:100,...u})})}),e(v,{name:"params.steps",control:o,render:({field:u})=>e(m,{item:!0,children:e(B,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:100,type:"number"},...u,onChange:f=>{u.onChange(parseInt(f.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Width"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(v,{name:"params.width",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(z,{valueLabelDisplay:"auto",marks:!0,step:64,min:64,max:1024,...u})})}),e(v,{name:"params.width",control:o,render:({field:u})=>e(m,{item:!0,children:e(B,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:64,min:64,max:1024,type:"number"},...u,onChange:f=>{u.onChange(parseInt(f.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Height"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(v,{name:"params.height",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(z,{valueLabelDisplay:"auto",marks:!0,step:64,min:64,max:1024,...u})})}),e(v,{name:"params.height",control:o,render:({field:u})=>e(m,{item:!0,children:e(B,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:64,min:64,max:1024,type:"number"},...u,onChange:f=>{u.onChange(parseInt(f.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"CFG"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(v,{name:"params.cfg_scale",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(z,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:24,...u})})}),e(v,{name:"params.cfg_scale",control:o,render:({field:u})=>e(m,{item:!0,children:e(B,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:24,type:"number"},...u,onChange:f=>{u.onChange(parseInt(f.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Clip Skip"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(v,{name:"params.clip_skip",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(z,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:12,...u})})}),e(v,{name:"params.clip_skip",control:o,render:({field:u})=>e(m,{item:!0,children:e(B,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:12,type:"number"},...u,onChange:f=>{u.onChange(parseInt(f.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Post-Processors"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(v,{name:"params.post_processing",control:o,render:({field:{onChange:u,onBlur:f,value:S,name:at,ref:st}})=>e(m,{item:!0,xs:!0,children:e(ae,{fullWidth:!0,multiple:!0,onBlur:f,ref:st,value:S,onChange:(X,it)=>{u(it)},options:zn,getOptionLabel:X=>X,renderInput:X=>e(F,{...X})})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"High Res Fix"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(v,{name:"params.hires_fix",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(ue,{...u,checked:u.value})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Karras"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(v,{name:"params.karras",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(ue,{...u,checked:u.value})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Tiling"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(v,{name:"params.tiling",control:o,render:({field:u})=>e(m,{item:!0,xs:!0,children:e(ue,{...u,checked:u.value})})})})]}),e(Se,{type:"submit",loading:l,variant:"contained",children:"Submit"}),l?e(w,{sx:{ml:2},color:"error",variant:"contained",onClick:()=>{a.filter(u=>["pending","check"].includes(u.state)).forEach(u=>{n(re({...u,state:"delete"}))})},children:"Cancel"}):null,c?e(w,{sx:{ml:2},variant:"contained",onClick:()=>{n(Fe())},children:"Clear Output"}):null]})})},Qn=n=>n!=null&&"name"in n,Zn=n=>n!=null&&Ke(n)&&"name"in n[0]&&"id"in n[0],De="175px",Jn=()=>{const n=M(),t=x(i=>i.comparatorPanel.selectedWorkers),s=x(i=>i.comparatorPanel.selectedModel),d=(i,o)=>{Ke(o)&&o.length===0?n(ee([])):Zn(o)&&n(ee(o))},a=(i,o)=>{o==null?n(Ue(null)):Qn(o)&&n(Ue(o))},{data:c}=b(U.all,()=>Ie(),{refetchInterval:1e3*30,select:i=>se(i,[o=>o.name.toLowerCase()],["asc"])}),{data:l}=b(["models"],et,{staleTime:1e3*30,refetchInterval:1e3*30,select:i=>se(i,[o=>o.name.toLowerCase()],["asc"])});if(_.exports.useEffect(()=>{if(s!=null&&t.length>0){const i=t.map(P=>P.id),o=t.filter(P=>P.models.includes(s.name)),k=o.map(P=>P.id);Tt(i,k)||n(ee(o))}else s==null&&t.length>0&&n(ee([]))},[c,l,t,s]),c==null||l==null)return e(y,{});const h=c.filter(i=>s==null?!0:i.models.includes(s.name));return r(g,{children:[r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:De},children:"Model"}),e(ae,{fullWidth:!0,disablePortal:!0,options:l,blurOnSelect:!0,value:s,autoHighlight:!0,getOptionLabel:i=>ie(i)?i:i.name,isOptionEqualToValue:(i,o)=>i.name===o.name,filterSelectedOptions:!0,renderInput:i=>e(F,{...i,label:"Selected Model"}),onChange:a})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:De},children:"Workers"}),e(ae,{fullWidth:!0,multiple:!0,disablePortal:!0,options:h,value:t,getOptionLabel:i=>i.name,isOptionEqualToValue:(i,o)=>i.id===o.id,filterSelectedOptions:!0,renderInput:i=>e(F,{...i,label:"Selected Workers"}),onChange:d})]})]})},Yn=()=>r(m,{container:!0,spacing:2,children:[e(m,{item:!0,xs:12,xl:4,children:r(J,{sx:{p:2},children:[e(p,{align:"center",variant:"h4",sx:{pb:1},children:"Generation Settings"}),e(Jn,{}),e(Vn,{})]})}),e(m,{item:!0,xs:12,xl:8,children:r(J,{sx:{p:2,height:"100%"},children:[e(p,{align:"center",variant:"h4",sx:{pb:1},children:"Output"}),e(jn,{})]})})]}),nt=()=>{const n=M(),t=x(a=>a.persist.apikey),s=x(a=>a.settingsPanel.showPassword);return r(He,{sx:{m:1,width:"35ch"},variant:"standard",children:[e(Be,{children:"API Key"}),e(B,{defaultValue:t,onBlur:a=>{n(bn(a.target.value)),n(xe(!1))},type:s?"text":"password",endAdornment:e(Lt,{position:"end",children:e(O,{onClick:()=>n(xe(!s)),children:s?e(Wt,{}):e(Mt,{})})})})]})},Xn=()=>e(m,{container:!0,spacing:2,children:e(m,{item:!0,md:12,lg:6,xl:4,children:e(J,{children:e(nt,{})})})}),ve="#0583B0",Z="#FF6962",er="#7c0500",tr="#ef9b0f",rt=n=>{const{worker:t}=n,s=we(),[d,a]=_.exports.useState(!1),[c,l]=_.exports.useState(!1),[h,i]=_.exports.useState("setFlagged"),[o,k]=_.exports.useState(""),P=f=>parseFloat(f.performance)>3?tr:f.maintenance_mode||f.paused||f.flagged?er:"background.paper",G=le(f=>En(f.id,f.data),{onSuccess:(f,S)=>{a(!0),s.invalidateQueries({queryKey:U.detail(S.id)}),s.invalidateQueries({queryKey:U.all})}}),D=(f,S)=>{S!=="clickaway"&&a(!1)};return r(y,{children:[e(Ot,{open:c,onClose:()=>l(!1),children:(f=>{switch(f){case"setFlagged":return r(y,{children:[r($,{children:['Set "',t.name,'" as Flagged']}),r(H,{children:[e(w,{onClick:()=>{l(!1)},children:"Cancel"}),e(w,{onClick:()=>{l(!1)},children:"Confirm"})]})]});case"unsetFlagged":return r(y,{children:[r($,{children:['Unset "',t.name,'" as Flagged']}),r(H,{children:[e(w,{onClick:()=>l(!1),children:"Cancel"}),e(w,{onClick:()=>{l(!1)},children:"Confirm"})]})]});case"setMaintenance":return r(y,{children:[r($,{children:['Set "',t.name,'" Maintenance Mode']}),e(Te,{children:e(F,{value:o,onChange:S=>{k(S.target.value)},multiline:!0,autoFocus:!0,margin:"dense",id:"name",label:"Maintenance Reason (optional)",fullWidth:!0,variant:"standard"})}),r(H,{children:[e(w,{onClick:()=>l(!1),children:"Cancel"}),e(w,{onClick:()=>{const S={maintenance:!0};j(o)||(S.maintenance_msg=o),G.mutate({id:t.id,data:S}),l(!1)},children:"Confirm"})]})]});case"unsetMaintenance":return r(y,{children:[r($,{children:['Unset "',t.name,'" Maintenance Mode']}),r(H,{children:[e(w,{onClick:()=>l(!1),children:"Cancel"}),e(w,{onClick:()=>{G.mutate({id:t.id,data:{maintenance:!1,maintenance_msg:""}}),l(!1)},children:"Confirm"})]})]});case"setPaused":return r(y,{children:[r($,{children:['Set "',t.name,'" Paused Mode']}),r(H,{children:[e(w,{onClick:()=>l(!1),children:"Cancel"}),e(w,{onClick:()=>{G.mutate({id:t.id,data:{paused:!0}}),l(!1)},children:"Confirm"})]})]});case"unsetPaused":return r(y,{children:[r($,{children:['Unset "',t.name,'" Paused Mode']}),r(H,{children:[e(w,{onClick:()=>l(!1),children:"Cancel"}),e(w,{onClick:()=>{G.mutate({id:t.id,data:{paused:!1}}),l(!1)},children:"Confirm"})]})]});case"listModels":return r(y,{children:[r($,{children:['"',t.name,'" Models']}),e(Te,{children:e(p,{variant:"body1",children:se(t.models,[S=>S.toLowerCase()]).join(", ")})})]})}})(h)}),e(je,{open:d,autoHideDuration:6e3,onClose:D,anchorOrigin:{vertical:"top",horizontal:"right"},children:e(ze,{onClose:D,severity:"success",sx:{width:"100%",border:"2px solid #a3a3a3"},children:"Changes successfully saved!"})}),e(m,{item:!0,xs:12,lg:6,xl:3,children:r(Ut,{sx:{backgroundColor:P(t)},children:[e(Ft,{avatar:t.online&&!t.paused&&!t.maintenance_mode&&!t.flagged?e(L,{title:"Worker Online",children:e(Gt,{sx:{color:ve}})}):e(L,{title:"Worker Issue",children:e(Dt,{sx:{color:Z}})}),action:r(g,{children:[t.paused?e(L,{title:"Worker Paused",children:e(Pe,{sx:{color:Z,mt:.5,mr:1}})}):null,t.maintenance_mode?e(L,{title:"Worker Maintenance",children:e(_e,{sx:{color:Z,mt:.5,mr:1}})}):null,t.flagged?e(L,{title:"User Flagged",children:e($t,{sx:{color:Z,mt:.5,mr:1}})}):null,t.trusted?e(L,{title:"Trusted Worker",children:e(Et,{sx:{color:ve,mt:.5,mr:1}})}):null]}),title:e(p,{variant:"h5",children:At(t.name,{length:30})}),subheader:t.id}),r(Rt,{children:[r(p,{variant:"body2",children:["Full Name: ",t.name]}),r(p,{variant:"body2",children:["Owner: ",t.owner]}),r(p,{variant:"body2",children:["Uptime: ",A.fromObject({seconds:t.uptime}).toHuman()]}),r(p,{variant:"body2",children:["Models Loaded: ",t.models.length]}),r(p,{variant:"body2",children:["MPS Generated: ",t.megapixelsteps_generated]}),r(p,{variant:"body2",children:["Speed: ",t.performance," MPS"]}),r(p,{variant:"body2",children:["Threads: ",t.threads]}),r(p,{variant:"body2",children:["Requests Fulfilled: ",t.requests_fulfilled]}),r(p,{variant:"body2",children:["NSFW: ",t.nsfw?"true":"false"]})]}),r(qt,{disableSpacing:!0,children:[e(L,{title:"Show Worker Models",children:e(O,{onClick:()=>{i("listModels"),l(!0)},children:e(Kt,{})})}),t.maintenance_mode?e(L,{title:"Unset Worker Maintenance",children:e(O,{onClick:()=>{i("unsetMaintenance"),l(!0)},children:e(Ht,{})})}):e(L,{title:"Set Worker Maintenance",children:e(O,{onClick:()=>{i("setMaintenance"),l(!0)},children:e(_e,{})})}),t.paused?e(L,{title:"Unset Worker Pause",children:e(O,{onClick:()=>{i("unsetPaused"),l(!0)},children:e(Bt,{})})}):e(L,{title:"Set Worker Pause",children:e(O,{onClick:()=>{i("setPaused"),l(!0)},children:e(Pe,{})})})]})]})},t.id)]})},nr=n=>{const{workerId:t}=n,{data:s}=b(U.detail(t),()=>$n(t),{staleTime:1e3*61,select:d=>({...d,performance:d.performance.replace(" megapixelsteps per second","")})});return s==null?e(y,{}):e(rt,{worker:s})},rr=n=>{const{userId:t}=n,{data:s}=b(W.detail(t),()=>Ce(t));return s==null?e(y,{}):s.worker_ids.length===0?e(m,{item:!0,md:12,lg:6,xl:4,children:e(p,{variant:"body1",children:"This user has no workers."})}):e(y,{children:s.worker_ids.map(d=>e(nr,{workerId:d},d))})},[ar,sr,ir]=jt(),lr=n=>n!=null&&"username"in n&&"id"in n,or=()=>{const n=M(),[t,s]=_.exports.useState(-1),[d]=Ne(t,400),{data:a}=b(W.all,Xe),{data:c,refetch:l}=b(W.detail(d),()=>Ce(d),{enabled:!1});if(_.exports.useEffect(()=>{zt(d)&&d>=4770&&l()},[d]),a==null)return e(y,{});const h=(i,o)=>{ie(o)?n(Ge(parseInt(o))):lr(o)&&n(Ge(o.id))};return e(ae,{disablePortal:!0,options:[...c!=null?[c]:[],...a!=null?a:[]],sx:{width:300},blurOnSelect:!0,autoHighlight:!0,freeSolo:!0,loading:a==null,loadingText:"Loading users...",getOptionLabel:i=>ie(i)?i:i.username,isOptionEqualToValue:(i,o)=>i.id===o.id,renderInput:i=>e(F,{...i,variant:"standard",label:"User Lookup",size:"small"}),onChange:h,onInputChange:(i,o)=>{s(Nt(o))}})},cr=()=>{const n=x(l=>{var h;return(h=l.userPanel.selectedUser)!=null?h:-1}),t=we(),{data:s,isInitialLoading:d}=b(W.detail(n),()=>Ce(n),{refetchInterval:1e3*15}),a=le(l=>tt(l.id,l.data),{onSuccess:(l,h)=>{t.invalidateQueries({queryKey:W.detail(h.id)})}}),c=sr();return _.exports.useEffect(()=>{if(s!=null){const l={trusted:s.trusted,flagged:s.flagged,worker_invite:s.worker_invited.toString()};c.setValues(l),c.resetDirty(l)}},[d]),s==null?e(y,{}):e(Vt,{component:g,children:e(Qt,{size:"small",children:r(Zt,{children:[r(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(I,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Username"})}),e(I,{align:"right",children:r(p,{variant:"body1",children:[s.username," ",s.moderator?"(moderator)":""]})})]}),r(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(I,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Trusted"})}),e(I,{align:"right",children:e(Le,{...c.getInputProps("trusted",{type:"checkbox"}),size:"small"})})]}),r(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(I,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Flagged"})}),e(I,{align:"right",children:e(Le,{...c.getInputProps("flagged",{type:"checkbox"}),size:"small"})})]}),r(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(I,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Worker Invites"})}),e(I,{align:"right",children:e(F,{variant:"standard",type:"number",...c.getInputProps("worker_invite"),sx:{maxWidth:"100px"},InputProps:{inputProps:{min:0},sx:{"& input":{p:"0",textAlign:"right"}}}})})]}),r(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(I,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Worker Count"})}),e(I,{align:"right",children:e(p,{variant:"body1",children:s.worker_count})})]}),r(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(I,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Kudos"})}),e(I,{align:"right",children:e(p,{variant:"body1",children:s.kudos})})]}),r(E,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(I,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Suspicious"})}),r(I,{sx:{display:"flex",flex:"1 1 0",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"},children:[s.suspicious>0?e(Se,{onClick:async()=>{const l={reset_suspicion:!0};a.mutate({id:n,data:l})},loading:a.isLoading,variant:"contained",color:"error",sx:{order:0,mr:4},children:"Reset"}):null,e(p,{sx:{order:1},variant:"body1",children:s.suspicious})]})]})]})})})},dr=()=>{const n=we(),t=x(h=>h.userPanel.selectedUser),[s,d]=_.exports.useState(!1),a=ir({initialValues:{trusted:!1,flagged:!1,worker_invite:"0"}}),c=le(h=>tt(h.id,h.data),{onSuccess:(h,i)=>{var k,P,G,D;n.setQueryData(W.detail(i.id),u=>u!=null?{...u,...h}:h);const o={trusted:(k=h.trusted)!=null?k:!1,flagged:(P=h.flagged)!=null?P:!1,worker_invite:(D=(G=h.worker_invite)==null?void 0:G.toString())!=null?D:"0"};j(o)||(a.setValues(o),a.resetDirty(o)),d(!0)}}),l=(h,i)=>{i!=="clickaway"&&d(!1)};return r(J,{elevation:1,sx:{p:2,height:"100%"},children:[e(je,{open:s,autoHideDuration:6e3,onClose:l,anchorOrigin:{vertical:"top",horizontal:"right"},children:e(ze,{onClose:l,severity:"success",sx:{width:"100%",border:"2px solid #a3a3a3"},children:"Changes successfully saved!"})}),r("form",{onSubmit:a.onSubmit((h,i)=>{if(t!=null){const o={trusted:h.trusted,flagged:h.flagged,worker_invite:parseInt(h.worker_invite)};c.mutate({id:t,data:o})}}),children:[r(g,{display:"flex",justifyContent:"space-between",children:[e(or,{}),t!=null?r(g,{display:"flex",alignItems:"center",children:[a.isDirty()?e(w,{sx:{mr:2},variant:"contained",type:"submit",children:"Save"}):null,e(Jt,{})]}):null]}),e(ar,{form:a,children:e(g,{display:"flex",children:t!=null&&t!=-1?e(cr,{}):null})})]})]})},ur=()=>{const n=x(t=>t.userPanel.selectedUser);return r(m,{container:!0,spacing:2,children:[e(m,{item:!0,md:12,lg:6,xl:4,children:e(dr,{})}),n!=null?e(rr,{userId:n}):null]})},hr=()=>{const n=M(),t=x(l=>l.utilityPanel.prompt),{data:s,refetch:d,isFetching:a}=b(["promptCheck",t],()=>An({filter_type:0,prompt:t}),{enabled:!1});return e(J,{elevation:1,sx:{p:2,height:"100%"},children:r(g,{children:[r(g,{display:"flex",justifyContent:"space-between",children:[e(p,{variant:"h4",children:"Prompt Checker"}),e(Se,{onClick:()=>{j(t)||d()},loading:a,variant:"contained",children:"Submit"})]}),e(F,{sx:{my:2},variant:"standard",multiline:!0,fullWidth:!0,value:t,onChange:l=>{n(In(l.target.value))},placeholder:"Enter prompt"}),s!=null?r(g,{pt:2,children:[r(p,{variant:"body1",children:["Suspicion: ",s.suspicion]}),s.suspicion>0?r(p,{variant:"body1",children:["Matches: ",JSON.stringify(s.matches)]}):null]}):null]})})},pr=()=>e(m,{container:!0,spacing:2,children:e(m,{item:!0,md:12,lg:6,xl:4,children:e(hr,{})})}),mr=()=>{const n=x(c=>c.workerPanel.workerFilter),[t,s]=_.exports.useState(n!=null?n:""),[d]=Ne(t,400),a=M();return _.exports.useEffect(()=>{a(_n(d))},[d]),e(F,{sx:{mr:2},label:"Search & Filter",variant:"outlined",value:t,onChange:c=>{s(c.target.value)}})},gr=()=>{const n=M(),t=x(h=>h.workerPanel.sortKey),s=x(h=>h.workerPanel.order),d=x(h=>h.workerPanel.workerFilter),{data:a}=b(U.all,()=>Ie(),{refetchInterval:1e3*30,select:h=>{const i=d==null?void 0:d.toLowerCase();return se(h.filter(o=>{var k;return i==null?!0:o.name.toLowerCase().includes(i)||((k=o.owner)!=null?k:"").toLowerCase().includes(i)||o.id.toLowerCase().includes(i)}).map(o=>({...o,performance:o.performance.replace(" megapixelsteps per second","")})),[o=>{const k=o[t];return ie(k)?k.toLowerCase():k}],[s])}}),c=h=>{n(Tn(h.target.value))},l=h=>{n(Ln(h))};return a==null?e(y,{}):r(y,{children:[r(g,{display:"flex",justifyContent:"space-between",pb:2,children:[r(g,{display:"flex",alignItems:"center",children:[e(p,{variant:"h5",sx:{mr:{xs:1,md:2}},children:"Worker List"}),e(mr,{})]}),r(g,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:[r(He,{sx:{mr:1},children:[e(Be,{children:"Sort Key"}),r(qe,{value:t,label:"Sort Key",onChange:c,sx:{".MuiSelect-select":{py:1}},children:[e(Q,{value:"name",children:"Name"}),e(Q,{value:"performance",children:"Performance"}),e(Q,{value:"uptime",children:"Uptime"}),e(Q,{value:"megapixelsteps_generated",children:"MPS Generated"})]})]}),s==="asc"?e(O,{onClick:()=>l("desc"),children:e(Yt,{})}):e(O,{onClick:()=>l("asc"),children:e(Xt,{})})]})]}),e(m,{container:!0,spacing:2,children:a.map(h=>e(rt,{worker:h},h.id))})]})},$e=()=>{const{data:n,isLoading:t,error:s}=b(["mode"],Je);if(t)return e(p,{variant:"h6",children:"Loading Horde status ..."});if(n==null||s)return console.log("HordeStatus error",s),e(p,{variant:"h6",children:"Error loading Horde status"});const d=a=>a?e(We,{sx:{color:Z,ml:1}}):e(We,{sx:{color:ve,ml:1}});return r(Ve,{children:[r(R,{children:[e(he,{children:d(n.maintenance_mode)}),e(q,{primary:"Maintenance"})]}),r(R,{children:[e(he,{children:d(n.invite_only_mode)}),e(q,{primary:"Invite Only"})]}),n.raid_mode!=null?r(R,{children:[e(he,{children:d(n.raid_mode)}),e(q,{primary:"Raid"})]}):null]})},Ee=()=>{const{data:n,isLoading:t,error:s}=b(["performance"],Ye);return t?e(p,{variant:"h6",children:"Loading Horde status ..."}):n==null||s?e(p,{variant:"h6",children:"Error loading Horde status"}):r(Ve,{children:[e(R,{children:e(q,{primary:`Queued Requests: ${n.queued_requests}`})}),e(R,{children:e(q,{primary:`Queued MPS: ${n.queued_megapixelsteps}`})}),e(R,{children:e(q,{primary:`Past Minute MPS: ${n.past_minute_megapixelsteps}`})}),e(R,{children:e(q,{primary:`Workers: ${n.worker_count}`})})]})},te=240,fr=()=>{const n=M(),t=x(d=>d.localState.sidebarOpen);return r(y,{children:[r(Me,{variant:"temporary",open:t,onClose:()=>{n(Qe(!t))},ModalProps:{keepMounted:!0},sx:{display:{xs:"block",md:"none"},width:te,flexShrink:0,"& .MuiDrawer-paper":{boxSizing:"border-box",width:te}},children:[e(pe,{}),r(g,{sx:{overflow:"auto"},children:[e(Ee,{}),e(Oe,{}),e($e,{})]})]}),r(Me,{variant:"permanent",sx:{display:{xs:"none",md:"block"},width:te,flexShrink:0,["& .MuiDrawer-paper"]:{width:te,boxSizing:"border-box"}},children:[e(pe,{}),r(g,{sx:{overflow:"auto"},children:[e(Ee,{}),e(Oe,{}),e($e,{})]})]})]})},xr=()=>{const n=M(),t=x(d=>d.persist.selectedTab);return r(g,{display:"flex",children:[e(fr,{}),e(g,{display:"flex",flexDirection:"column",flex:"1 1 auto",children:r(en,{value:t,children:[e(g,{sx:{borderBottom:1,borderColor:"divider"},children:r(tn,{onChange:(d,a)=>{a!="4"&&n(xe(!1)),n(kn(a))},"aria-label":"lab API tabs example",children:[e(N,{label:"User Lookup",value:"1"}),e(N,{label:"Workers",value:"2"}),e(N,{label:"Comparator",value:"3"}),e(N,{label:"Utilities",value:"4"}),e(N,{label:"Settings",value:"5"})]})}),e(V,{value:"1",children:e(ur,{})}),e(V,{value:"2",children:e(gr,{})}),e(V,{value:"3",children:e(Yn,{})}),e(V,{value:"4",children:e(pr,{})}),e(V,{value:"5",children:e(Xn,{})})]})})]})},ne=()=>{const n=M(),t=x(d=>d.localState.sidebarOpen);return e(nn,{position:"sticky",sx:{zIndex:d=>d.zIndex.drawer+1},children:r(pe,{children:[e(O,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:()=>{n(Qe(!t))},sx:{mr:2,display:{md:"none"}},children:e(rn,{})}),e(p,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:"Horde Control Tower"})]})})},yr=async n=>{const t=window.document.createElement("canvas"),s=window.Image,d=(await Promise.allSettled([n].map(async c=>await new Promise((l,h)=>{let i;an(c,"src")?i=c:i={src:c};const o=new s;o.onerror=()=>h(new Error("Couldn't load image")),o.onload=()=>l({...i,img:o}),o.src=i.src,o.crossOrigin="anonymous"})))).filter(c=>c.status==="fulfilled").map(c=>c.value),a=t.getContext("2d");if(a==null)throw new Error("Couldn't create canvas context");{const c=l=>Math.max(...d.map(h=>{var i,o;return(o=(i=h==null?void 0:h.img)==null?void 0:i[l])!=null?o:0}));return t.width=c("width"),t.height=c("height"),d.forEach(l=>{var h,i;if(l!=null&&(a.globalAlpha=l.opacity!=null?l.opacity:1,l.img!=null))return a.drawImage(l.img,(h=l.x)!=null?h:0,(i=l.y)!=null?i:0)}),t.toDataURL("image/webp")}},br=n=>{const{gen:t,...s}=n,d=M();return b(["check",t.id],()=>qn(t.id),{refetchInterval:2e3,enabled:t.state==="check",onSuccess:a=>{if(t.state==="check"){let c=t.state;a.faulted?c="error":a.done&&(c="status"),d(re({...t,state:c,check:a}))}}}),b(["status",t.id],()=>Kn(t.id),{refetchInterval:!1,enabled:t.state==="status",onSuccess:async a=>{if(t.state==="status"){let c=t.state;if(a.faulted)c="error";else if(a.done){c="complete";const l=await yr(a.generations[0].img);a.generations[0].img=l}d(re({...t,state:c,status:a}))}}}),b(["delete",t.id],()=>Hn(t.id),{refetchInterval:!1,retry:!1,enabled:t.state==="delete",onSuccess:async a=>{d(re({...t,state:"complete",status:a}))}}),e(y,{})},kr=()=>{const n=x(t=>t.persist.imageGens);return j(n)?e(y,{}):e(y,{children:n.map(t=>e(br,{gen:t},t.id))})},vr=()=>{const n=x(a=>a.persist.apikey),{data:t,refetch:s,isLoading:d}=b(["findUser"],()=>Dn(n),{enabled:!j(n),retry:1});return _.exports.useEffect(()=>{s()},[n]),d?r(g,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ne,{}),e(g,{sx:{display:"flex",flex:"1 1 auto"},justifyContent:"center",alignItems:"center",children:e(Re,{})})]}):j(n)||t==null?r(g,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ne,{}),r(g,{display:"flex",flex:"1 1 auto",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[e(p,{variant:"h4",children:"Please enter your API key."}),e(nt,{})]})]}):t.moderator?r(g,{sx:{display:"flex",flexDirection:"column"},children:[e(kr,{}),e(Bn,{}),e(ne,{}),e(xr,{})]}):r(g,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ne,{}),e(g,{sx:{display:"flex",flex:"1 1 auto"},justifyContent:"center",alignItems:"center",children:e(p,{variant:"h4",children:"Sorry, you really need to be a moderator to access these utilities :("})})]})};A.prototype.__toHuman__=A.prototype.toHuman;A.prototype.toHuman=function(n={stripZeroUnits:"all"}){let t=this.normalize(),s=[],d=typeof n.precision=="object"?A.fromObject(n.precision):A.fromMillis(0),a=t;const c=["years","months","days","hours","minutes","seconds","milliseconds"];let l,h;n.smallestUnit&&(l=c.indexOf(n.smallestUnit)),n.biggestUnit&&(h=c.indexOf(n.biggestUnit)),(!l||!(l>=0&&l<c.length))&&(l=c.indexOf("seconds")),(!h||!(h<=l&&h<c.length))&&(h=c.indexOf("years"));for(let i of c.slice(h,l+1)){if(a.as(i)>=1){s.push(i);let k={};if(k[i]=Math.floor(a.as(i)),a=a.minus(A.fromObject(k)).normalize(),a<d)break}if(n.maxUnits&&s.length>=n.maxUnits)break}if(t=t.minus(a).normalize(),t=t.shiftTo(...s),n.stripZeroUnits=="all")s=s.filter(i=>t.values[i]>0);else if(n.stripZeroUnits=="end"){let i=!0;s=s.reverse().filter(o=>i?t.values[o]==0?!1:(i=!1,!0):!0)}return s.length||s.push(c[l]),t.shiftTo(...s).__toHuman__(n)};const Sr=sn({key:"mui",prepend:!0}),wr=ln({palette:{mode:"dark"}}),Cr=new on({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});cn(document.getElementById("root")).render(e(dn,{value:Sr,children:r(un,{theme:wr,children:[e(hn,{}),r(pn,{client:Cr,children:[e(mn,{store:oe,children:e(gn,{loading:null,persistor:Fn,children:e(vr,{})})}),null]})]})}));
