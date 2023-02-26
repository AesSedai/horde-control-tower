import{c as Z,a as wt,b as It,p as Pt,d as _t,e as Ft,s as Ot,f as Dt,F as Tt,R as Mt,P as Wt,g as Lt,h as Ut,i as Gt,j as Je,u as C,k as e,l as b,m as At,n as Et,r as k,o as r,D as he,q as E,t as se,v as ke,L as me,w as q,x as $e,y as B,z as K,B as v,T as M,I as L,A as $t,M as Rt,C as N,E as le,G as Kt,H as m,J as qt,K as Ce,N as Ye,O as Se,Q as p,S as ye,U as Bt,V as Nt,W as g,X as w,Y as Ht,Z as jt,_ as Xe,$ as te,a0 as Y,a1 as ge,a2 as we,a3 as be,a4 as et,a5 as fe,a6 as zt,a7 as xe,a8 as X,a9 as tt,aa as nt,ab as Vt,ac as Qt,ad as Zt,ae as rt,af as j,ag as Ge,ah as at,ai as st,aj as Jt,ak as Yt,al as W,am as Xt,an as en,ao as Re,ap as Ke,aq as tn,ar as nn,as as rn,at as an,au as Q,av as sn,aw as ln,ax as on,ay as dn,az as cn,aA as lt,aB as un,aC as hn,aD as pn,aE as mn,aF as V,aG as O,aH as qe,aI as gn,aJ as fn,aK as xn,aL as Ie,aM as Be,aN as Ne,aO as Pe,aP as yn,aQ as bn,aR as ne,aS as re,aT as vn,aU as kn,aV as Cn,aW as Sn,aX as wn,aY as In,aZ as Pn,a_ as _n,a$ as Fn,b0 as On,b1 as Dn,b2 as Tn,b3 as Mn}from"./vendor.f31834cc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const Wn={reload:!1,selectedModel:null,selectedWorkers:[],genForm:{prompt:"",params:{sampler_name:"k_euler",toggles:[1,4],cfg_scale:7,seed:"",height:512,width:512,seed_variation:1,post_processing:[],karras:!0,tiling:!1,hires_fix:!1,clip_skip:1,steps:20,n:1},nsfw:!0,trusted_workers:!1,censor_nsfw:!1,workers:[],models:[],r2:!0,shared:!0}},_e=Z({name:"comparatorPanel",initialState:Wn,reducers:{setSelectedModel:(n,t)=>{n.selectedModel=t.payload},setSelectedWorkers:(n,t)=>{n.selectedWorkers=t.payload},setGenForm:(n,t)=>{n.genForm=structuredClone(t.payload)},setReload:(n,t)=>{n.reload=t.payload}}}),{setSelectedModel:He,setSelectedWorkers:de,setGenForm:it,setReload:ot}=_e.actions,Ln={sidebarOpen:!1},Fe=Z({name:"localState",initialState:Ln,reducers:{setSidebarOpen:(n,t)=>{n.sidebarOpen=t.payload}}}),{setSidebarOpen:dt}=Fe.actions,Oe={apikey:"",selectedTab:"1",genFavorites:[],imageGens:[]},ie=Z({name:"persist",initialState:Oe,reducers:{setKey:(n,t)=>{n.apikey=t.payload},setSelectedTab:(n,t)=>{n.selectedTab=t.payload},resetImageGens:n=>{n.imageGens=[]},addImageGen:(n,t)=>{n.imageGens.find(c=>c.id===t.payload.id)||n.imageGens.push(t.payload)},updateImageGen:(n,t)=>{const s=n.imageGens.findIndex(c=>c.id===t.payload.id);s!=null&&(n.imageGens[s]=t.payload)},addGenFavorite:(n,t)=>{n.genFavorites.push(t.payload)},updateGenFavorite:(n,t)=>{n.genFavorites[t.payload.idx]={name:n.genFavorites[t.payload.idx].name,form:t.payload.form}},deleteGenFavorite:(n,t)=>{n.genFavorites.splice(t.payload)},resetExceptApiKey:n=>(n={...Oe,apikey:n.apikey},n)}}),{setKey:Un,setSelectedTab:Gn,resetImageGens:je,addImageGen:An,updateImageGen:pe,addGenFavorite:En,resetExceptApiKey:Zr,updateGenFavorite:$n,deleteGenFavorite:Rn}=ie.actions,Kn={showPassword:!1},De=Z({name:"settingsPanel",initialState:Kn,reducers:{setShowPassword:(n,t)=>{n.showPassword=t.payload}}}),{setShowPassword:Te}=De.actions,qn={},Me=Z({name:"userPanel",initialState:qn,reducers:{setUser:(n,t)=>{n.selectedUser=t.payload}}}),{setUser:ze}=Me.actions,Bn={prompt:"",ipAddr:""},We=Z({name:"utilityPanel",initialState:Bn,reducers:{setPrompt:(n,t)=>{n.prompt=t.payload},setIpAddr:(n,t)=>{n.ipAddr=t.payload}}}),{setPrompt:Nn,setIpAddr:Hn}=We.actions,jn={sortKey:"name",order:"asc"},Le=Z({name:"workerPanel",initialState:jn,reducers:{setWorkerFilter:(n,t)=>{n.workerFilter=t.payload},setSortKey:(n,t)=>{n.sortKey=t.payload},setOrder:(n,t)=>{n.order=t.payload}}}),{setWorkerFilter:zn,setSortKey:Vn,setOrder:Qn}=Le.actions,Zn=wt((n,t)=>n,(n,t)=>Object.assign({},Oe,n),{whitelist:[ie.name]}),Jn={key:"root",storage:Dt,whitelist:[ie.name],transforms:[Zn]},Yn=It({[ie.name]:ie.reducer,[Fe.name]:Fe.reducer,[De.name]:De.reducer,[Me.name]:Me.reducer,[We.name]:We.reducer,[Le.name]:Le.reducer,[_e.name]:_e.reducer}),Xn=Pt(Jn,Yn),ve=_t({reducer:Xn,middleware:n=>n({serializableCheck:{ignoredActions:[Tt,Mt,Wt,Lt,Ut,Gt]}}),devTools:!1}),er=Ft(ve);Ot(ve.dispatch);const P=Je.create({baseURL:"https://stablehorde.net/api/v2/"});P.interceptors.request.use(function(n){const t=ve.getState().persist.apikey;return n.headers!=null&&t!=null&&(n.headers.apikey=t),n},function(n){return Promise.reject(n)});const tr=Je.create({baseURL:"/horde-control-tower/"}),nr=n=>P.get("find_user",{headers:{apikey:n}}).then(t=>t.data),ct=()=>P.get("status/modes").then(n=>n.data),ut=()=>P.get("status/performance").then(n=>n.data),ht=()=>tr.get("users.json").then(n=>n.data),Ae=n=>P.get(`users/${n}`).then(t=>t.data),Ee=()=>P.get("workers").then(n=>n.data),rr=n=>P.get(`workers/${n}`).then(t=>t.data),pt=()=>P.get("status/models").then(n=>n.data),mt=(n,t)=>P.put(`users/${n}`,t).then(s=>s.data),ar=(n,t)=>P.put(`workers/${n}`,t).then(s=>s.data),sr=n=>P.post("filters",n).then(t=>t.data),lr=n=>P.post("generate/async",n).then(t=>t.data),ir=n=>P.get(`generate/check/${n}`).then(t=>t.data),or=n=>P.get(`generate/status/${n}`).then(t=>t.data),dr=n=>P.delete(`generate/status/${n}`).then(t=>t.data),cr=n=>P.delete("operations/ipaddr",{data:n}).then(t=>t.data),U={all:["users"],lists:()=>[...U.all,"list"],list:n=>[...U.lists(),{filters:n}],details:()=>[...U.all,"detail"],detail:n=>[...U.details(),n]},$={all:["workers"],lists:()=>[...$.all,"list"],list:n=>[...$.lists(),{filters:n}],details:()=>[...$.all,"detail"],detail:n=>[...$.details(),n]},ur=()=>(C(U.all,ht,{staleTime:1e3*30,refetchInterval:1e3*30}),C(["performance"],ut,{staleTime:1e3*30,refetchInterval:1e3*30}),C(["mode"],ct,{staleTime:1e3*30,refetchInterval:1e3*30}),C(["models"],pt,{staleTime:1e3*30,refetchInterval:1e3*30}),e(b,{})),D=()=>Et(),y=At,hr=()=>{const n=D(),t=y(I=>I.comparatorPanel.genForm),s=y(I=>I.persist.genFavorites),[c,a]=k.exports.useState(!1),[o,l]=k.exports.useState(-1),[h,i]=k.exports.useState(!1),[u,f]=k.exports.useState(-1),[_,S]=k.exports.useState(!1),[G,H]=k.exports.useState(""),[z,d]=k.exports.useState(null),x=Boolean(z),F=I=>{d(I.currentTarget)},A=()=>{d(null)},oe=()=>{S(!1)},J=()=>{n(En({name:G,form:t})),H(""),S(!1)},ee=()=>{l(-1),a(!1)},xt=()=>{n($n({idx:o,form:t})),l(-1),a(!1)},yt=()=>{f(-1),i(!1)},bt=()=>{n(Rn(u)),f(-1),i(!1)},vt=I=>{n(it(I)),n(ot(!0)),d(null)},kt=()=>{S(!0),d(null)},Ct=()=>{a(!0),d(null)},St=()=>{i(!0),d(null)};return r(b,{children:[r(he,{open:h,onClose:ee,children:[e(E,{children:"Delete Preset"}),r(se,{children:[e(ke,{children:"Select a preset to delete."}),e(me,{children:s.map((I,R)=>e(q,{disablePadding:!0,sx:{backgroundColor:u===R?"error.dark":""},onClick:()=>{f(R)},children:e($e,{children:e(B,{primary:I.name})})},R))})]}),r(K,{children:[e(v,{onClick:yt,children:"Cancel"}),e(v,{disabled:u===-1,onClick:bt,children:"Select"})]})]}),r(he,{open:c,onClose:ee,children:[e(E,{children:"Overwrite Preset"}),r(se,{children:[e(ke,{children:"Select a preset to overwrite."}),e(me,{children:s.map((I,R)=>e(q,{disablePadding:!0,sx:{backgroundColor:o===R?"success.dark":""},onClick:()=>{l(R)},children:e($e,{children:e(B,{primary:I.name})})},R))})]}),r(K,{children:[e(v,{onClick:ee,children:"Cancel"}),e(v,{disabled:o===-1,onClick:xt,children:"Select"})]})]}),r(he,{open:_,onClose:oe,children:[e(E,{children:"Add New Preset"}),r(se,{children:[e(ke,{children:"Enter a friendly name for this new preset."}),e(M,{autoFocus:!0,margin:"dense",label:"Name",fullWidth:!0,variant:"standard",value:G,onChange:I=>{H(I.target.value)}})]}),r(K,{children:[e(v,{onClick:oe,children:"Cancel"}),e(v,{onClick:J,children:"Create"})]})]}),e(L,{onClick:F,children:e($t,{})}),r(Rt,{anchorEl:z,open:x,onClose:A,children:[s.map((I,R)=>e(N,{onClick:()=>{vt(I.form)},children:I.name},R)),s.length>0?e(le,{}):null,s.length>0?e(N,{onClick:St,children:"Delete Preset"}):null,s.length>0?e(le,{}):null,s.length>0?e(N,{onClick:Ct,children:"Overwrite Preset"}):null,s.length>0?e(le,{}):null,e(N,{onClick:kt,children:"Add New Preset"})]})]})},pr=()=>{const n=y(a=>a.persist.imageGens),{data:t}=C($.all,()=>Ee(),{refetchInterval:1e3*30,select:a=>Kt(a.map(o=>[o.id,o.name]))}),s=a=>{var l,h,i;const o=a.status!=null?a.status:a.check;return a.state!=="complete"&&o!=null?r(Ce,{sx:{paddingTop:"100%",border:"1px solid black"},children:[e(Ye,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),e(Se,{title:t==null?"":t[(l=a.payload.workers[0])!=null?l:""],subtitle:`Position: ${o.queue_position}, wait time: ${o.wait_time}`})]},a.id):a.state==="complete"?c(a).length===0?r(Ce,{sx:{paddingTop:"100%",border:"1px solid black"},children:[e(p,{variant:"h3",sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:"Canceled"}),e(Se,{title:t==null?"":t[(h=a.payload.workers[0])!=null?h:""]})]},a.id):r(Ce,{sx:{paddingTop:c(a).length>0?"0%":"100%",border:"1px solid black"},children:[e("img",{src:c(a)}),e(Se,{title:t==null?"":t[(i=a.payload.workers[0])!=null?i:""]})]},a.id):e(b,{})},c=a=>a.status!=null&&a.status.generations.length>0?a.status.generations[0].img:"";return e(m,{children:e(qt,{sx:{width:"100%",height:"100%"},cols:4,children:n.map(a=>s(a))})})},mr=["GFPGAN","RealESRGAN_x4plus","CodeFormers"],gr=["k_lms","k_heun","k_euler","k_euler_a","k_dpm_2","k_dpm_2_a","k_dpm_fast","k_dpm_adaptive","k_dpmpp_2m","k_dpmpp_2s_a","k_dpmpp_sde"],T="175px",fr=()=>{const n=D(),t=y(d=>d.comparatorPanel.selectedWorkers),s=y(d=>d.comparatorPanel.selectedModel),c=y(d=>d.comparatorPanel.genForm),a=y(d=>d.persist.imageGens),o=y(d=>d.persist.imageGens.length>0),l=y(d=>d.comparatorPanel.reload),h=y(d=>d.persist.imageGens.some(x=>["pending","check"].includes(x.state))),{mutate:i}=ye({mutationFn:lr,onSuccess:(d,x,F)=>{n(An({id:d.id,payload:x,state:"check",check:null,status:null}))}}),{handleSubmit:u,control:f,formState:{errors:_},watch:S,setValue:G,reset:H}=Bt({defaultValues:c}),z=d=>{s!=null&&t.length>0&&(n(je()),t.forEach(x=>{const F={...d,workers:[x.id],models:[s.name]};i(F)}))};return k.exports.useEffect(()=>{const d=S(Nt((x,{name:F,type:A})=>{n(it(x))},300));return()=>d.unsubscribe()},[S]),k.exports.useEffect(()=>{l&&(n(ot(!1)),H(c))},[l]),e(m,{children:r("form",{onSubmit:u(z),children:[r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Prompt"}),e(g,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"prompt",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(M,{fullWidth:!0,required:!0,multiline:!0,placeholder:"Enter prompt here",...d})})})})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Seed"}),r(g,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.seed",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(M,{fullWidth:!0,placeholder:"Seed",...d})})}),e(g,{item:!0,children:e(L,{"aria-label":"randomize seed",onClick:()=>{G("params.seed",Ht(1e8,999999999).toString())},children:e(jt,{})})})]})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Sampler"}),e(g,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.sampler_name",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(Xe,{...d,fullWidth:!0,children:gr.map(x=>e(N,{value:x,children:x},x))})})})})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Steps"}),r(g,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.steps",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(te,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:100,...d})})}),e(w,{name:"params.steps",control:f,render:({field:d})=>e(g,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:100,type:"number"},...d,onChange:x=>{d.onChange(parseInt(x.target.value))}})})})]})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Width"}),r(g,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.width",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(te,{valueLabelDisplay:"auto",marks:!0,step:64,min:64,max:1024,...d})})}),e(w,{name:"params.width",control:f,render:({field:d})=>e(g,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:64,min:64,max:1024,type:"number"},...d,onChange:x=>{d.onChange(parseInt(x.target.value))}})})})]})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Height"}),r(g,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.height",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(te,{valueLabelDisplay:"auto",marks:!0,step:64,min:64,max:1024,...d})})}),e(w,{name:"params.height",control:f,render:({field:d})=>e(g,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:64,min:64,max:1024,type:"number"},...d,onChange:x=>{d.onChange(parseInt(x.target.value))}})})})]})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"CFG"}),r(g,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.cfg_scale",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(te,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:24,...d})})}),e(w,{name:"params.cfg_scale",control:f,render:({field:d})=>e(g,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:24,type:"number"},...d,onChange:x=>{d.onChange(parseInt(x.target.value))}})})})]})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Clip Skip"}),r(g,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.clip_skip",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(te,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:12,...d})})}),e(w,{name:"params.clip_skip",control:f,render:({field:d})=>e(g,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:12,type:"number"},...d,onChange:x=>{d.onChange(parseInt(x.target.value))}})})})]})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Post-Processors"}),e(g,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.post_processing",control:f,render:({field:{onChange:d,onBlur:x,value:F,name:A,ref:oe}})=>e(g,{item:!0,xs:!0,children:e(ge,{fullWidth:!0,multiple:!0,onBlur:x,ref:oe,value:F,onChange:(J,ee)=>{d(ee)},options:mr,getOptionLabel:J=>J,renderInput:J=>e(M,{...J})})})})})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"High Res Fix"}),e(g,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.hires_fix",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(we,{...d,checked:d.value})})})})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Karras"}),e(g,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.karras",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(we,{...d,checked:d.value})})})})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:T},children:"Tiling"}),e(g,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.tiling",control:f,render:({field:d})=>e(g,{item:!0,xs:!0,children:e(we,{...d,checked:d.value})})})})]}),e(be,{type:"submit",loading:h,variant:"contained",children:"Submit"}),h?e(v,{sx:{ml:2},color:"error",variant:"contained",onClick:()=>{a.filter(d=>["pending","check"].includes(d.state)).forEach(d=>{n(pe({...d,state:"delete"}))})},children:"Cancel"}):null,o?e(v,{sx:{ml:2},variant:"contained",onClick:()=>{n(je())},children:"Clear Output"}):null]})})},xr=n=>n!=null&&"name"in n,yr=n=>n!=null&&et(n)&&"name"in n[0]&&"id"in n[0],Ve="175px",br=()=>{const n=D(),t=y(i=>i.comparatorPanel.selectedWorkers),s=y(i=>i.comparatorPanel.selectedModel),c=(i,u)=>{et(u)&&u.length===0?n(de([])):yr(u)&&n(de(u))},a=(i,u)=>{u==null?n(He(null)):xr(u)&&n(He(u))},{data:o}=C($.all,()=>Ee(),{refetchInterval:1e3*30,select:i=>fe(i,[u=>u.name.toLowerCase()],["asc"])}),{data:l}=C(["models"],pt,{staleTime:1e3*30,refetchInterval:1e3*30,select:i=>fe(i,[u=>u.name.toLowerCase()],["asc"])});k.exports.useEffect(()=>{if(s!=null&&t.length>0){const i=t.map(_=>_.id),u=t.filter(_=>{var S;return(S=_==null?void 0:_.models)==null?void 0:S.includes(s.name)}),f=u.map(_=>_.id);zt(i,f)||n(de(u))}else s==null&&t.length>0&&n(de([]))},[o,l,t,s]);const h=(o!=null?o:[]).filter(i=>{var u;return s==null?!0:(u=i==null?void 0:i.models)==null?void 0:u.includes(s.name)});return r(m,{children:[r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:Ve},children:"Model"}),e(ge,{fullWidth:!0,disablePortal:!0,options:l!=null?l:[],blurOnSelect:!0,value:s,autoHighlight:!0,getOptionLabel:i=>xe(i)?i:i.name,isOptionEqualToValue:(i,u)=>i.name===u.name,filterSelectedOptions:!0,renderInput:i=>e(M,{...i,label:"Selected Model"}),onChange:a})]}),r(m,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:Ve},children:"Workers"}),e(ge,{fullWidth:!0,multiple:!0,disablePortal:!0,options:h,value:t,getOptionLabel:i=>i.name,isOptionEqualToValue:(i,u)=>i.id===u.id,filterSelectedOptions:!0,renderInput:i=>e(M,{...i,label:"Selected Workers"}),onChange:c})]})]})},vr=()=>r(g,{container:!0,spacing:2,children:[e(g,{item:!0,xs:12,xl:4,children:r(X,{sx:{p:2},children:[r(m,{sx:{position:"relative"},children:[e(p,{align:"center",variant:"h4",sx:{pb:1},children:"Generation Settings"}),e(m,{sx:{position:"absolute",top:0,right:0},children:e(hr,{})})]}),e(br,{}),e(fr,{})]})}),e(g,{item:!0,xs:12,xl:8,children:r(X,{sx:{p:2,height:"100%"},children:[e(p,{align:"center",variant:"h4",sx:{pb:1},children:"Output"}),e(pr,{})]})})]}),gt=()=>{const n=D(),t=y(a=>a.persist.apikey),s=y(a=>a.settingsPanel.showPassword);return r(tt,{sx:{m:1,width:"35ch"},variant:"standard",children:[e(nt,{children:"API Key"}),e(Y,{defaultValue:t,onBlur:a=>{n(Un(a.target.value)),n(Te(!1))},type:s?"text":"password",endAdornment:e(Vt,{position:"end",children:e(L,{onClick:()=>n(Te(!s)),children:s?e(Qt,{}):e(Zt,{})})})})]})},kr=()=>e(g,{container:!0,spacing:2,children:e(g,{item:!0,md:12,lg:6,xl:4,children:e(X,{children:e(gt,{})})})}),Ue="#0583B0",ae="#FF6962",Cr="#7c0500",Sr="#ef9b0f",wr=n=>rt(n)||!j(n)&&!isNaN(parseFloat(n)),ft=n=>{var z,d;const{worker:t}=n,s=Ge(),[c,a]=k.exports.useState(!1),[o,l]=k.exports.useState(!1),[h,i]=k.exports.useState("setFlagged"),[u,f]=k.exports.useState(""),_=x=>parseFloat(x.performance)>3?Sr:x.maintenance_mode||x.paused||x.flagged?Cr:"background.paper",S=ye(x=>ar(x.id,x.data),{onSuccess:(x,F)=>{a(!0),s.invalidateQueries({queryKey:$.detail(F.id)}),s.invalidateQueries({queryKey:$.all})}}),G=(x,F)=>{F!=="clickaway"&&a(!1)};return r(b,{children:[e(he,{open:o,onClose:()=>l(!1),children:(x=>{var F;switch(x){case"setFlagged":return r(b,{children:[r(E,{children:['Set "',t.name,'" as Flagged']}),r(K,{children:[e(v,{onClick:()=>{l(!1)},children:"Cancel"}),e(v,{onClick:()=>{l(!1)},children:"Confirm"})]})]});case"unsetFlagged":return r(b,{children:[r(E,{children:['Unset "',t.name,'" as Flagged']}),r(K,{children:[e(v,{onClick:()=>l(!1),children:"Cancel"}),e(v,{onClick:()=>{l(!1)},children:"Confirm"})]})]});case"setMaintenance":return r(b,{children:[r(E,{children:['Set "',t.name,'" Maintenance Mode']}),e(se,{children:e(M,{value:u,onChange:A=>{f(A.target.value)},multiline:!0,autoFocus:!0,margin:"dense",id:"name",label:"Maintenance Reason (optional)",fullWidth:!0,variant:"standard"})}),r(K,{children:[e(v,{onClick:()=>l(!1),children:"Cancel"}),e(v,{onClick:()=>{const A={maintenance:!0};j(u)||(A.maintenance_msg=u),S.mutate({id:t.id,data:A}),l(!1)},children:"Confirm"})]})]});case"unsetMaintenance":return r(b,{children:[r(E,{children:['Unset "',t.name,'" Maintenance Mode']}),r(K,{children:[e(v,{onClick:()=>l(!1),children:"Cancel"}),e(v,{onClick:()=>{S.mutate({id:t.id,data:{maintenance:!1,maintenance_msg:""}}),l(!1)},children:"Confirm"})]})]});case"setPaused":return r(b,{children:[r(E,{children:['Set "',t.name,'" Paused Mode']}),r(K,{children:[e(v,{onClick:()=>l(!1),children:"Cancel"}),e(v,{onClick:()=>{S.mutate({id:t.id,data:{paused:!0}}),l(!1)},children:"Confirm"})]})]});case"unsetPaused":return r(b,{children:[r(E,{children:['Unset "',t.name,'" Paused Mode']}),r(K,{children:[e(v,{onClick:()=>l(!1),children:"Cancel"}),e(v,{onClick:()=>{S.mutate({id:t.id,data:{paused:!1}}),l(!1)},children:"Confirm"})]})]});case"listModels":return r(b,{children:[r(E,{children:['"',t.name,'" Models']}),e(se,{children:e(p,{variant:"body1",children:fe((F=t==null?void 0:t.models)!=null?F:[],[A=>A.toLowerCase()]).join(", ")})})]})}})(h)}),e(at,{open:c,autoHideDuration:6e3,onClose:G,anchorOrigin:{vertical:"top",horizontal:"right"},children:e(st,{onClose:G,severity:"success",sx:{width:"100%",border:"2px solid #a3a3a3"},children:"Changes successfully saved!"})}),e(g,{item:!0,xs:12,lg:6,xl:3,children:r(Jt,{sx:{backgroundColor:_(t)},children:[e(Yt,{avatar:t.online&&!t.paused&&!t.maintenance_mode&&!t.flagged?e(W,{title:"Worker Online",children:e(Xt,{sx:{color:Ue}})}):e(W,{title:"Worker Issue",children:e(en,{sx:{color:ae}})}),action:r(m,{children:[t.paused?e(W,{title:"Worker Paused",children:e(Re,{sx:{color:ae,mt:.5,mr:1}})}):null,t.maintenance_mode?e(W,{title:"Worker Maintenance",children:e(Ke,{sx:{color:ae,mt:.5,mr:1}})}):null,t.flagged?e(W,{title:"User Flagged",children:e(tn,{sx:{color:ae,mt:.5,mr:1}})}):null,t.trusted?e(W,{title:"Trusted Worker",children:e(nn,{sx:{color:Ue,mt:.5,mr:1}})}):null]}),title:e(p,{variant:"h5",children:rn(t.name,{length:30})}),subheader:t.id}),r(an,{children:[r(p,{variant:"body2",children:["Full Name: ",t.name]}),r(p,{variant:"body2",children:["Owner: ",t.owner]}),r(p,{variant:"body2",children:["Uptime: ",Q.fromObject({seconds:t.uptime}).toHuman()]}),r(p,{variant:"body2",children:["Models Loaded: ",(d=(z=t==null?void 0:t.models)==null?void 0:z.length)!=null?d:"None"]}),r(p,{variant:"body2",children:["MPS Generated: ",t.megapixelsteps_generated]}),r(p,{variant:"body2",children:["Speed: ",t.performance," ",wr(t.performance)?"MPS":null]}),r(p,{variant:"body2",children:["Threads: ",t.threads]}),r(p,{variant:"body2",children:["Requests Fulfilled: ",t.requests_fulfilled]}),r(p,{variant:"body2",children:["NSFW: ",t.nsfw?"true":"false"]})]}),r(sn,{disableSpacing:!0,children:[e(W,{title:"Show Worker Models",children:e(L,{onClick:()=>{i("listModels"),l(!0)},children:e(ln,{})})}),t.maintenance_mode?e(W,{title:"Unset Worker Maintenance",children:e(L,{onClick:()=>{i("unsetMaintenance"),l(!0)},children:e(on,{})})}):e(W,{title:"Set Worker Maintenance",children:e(L,{onClick:()=>{i("setMaintenance"),l(!0)},children:e(Ke,{})})}),t.paused?e(W,{title:"Unset Worker Pause",children:e(L,{onClick:()=>{i("unsetPaused"),l(!0)},children:e(dn,{})})}):e(W,{title:"Set Worker Pause",children:e(L,{onClick:()=>{i("setPaused"),l(!0)},children:e(Re,{})})})]})]})},t.id)]})},Ir=n=>{const{workerId:t}=n,{data:s}=C($.detail(t),()=>rr(t),{staleTime:1e3*61,select:c=>({...c,performance:c.performance.replace(" megapixelsteps per second","")})});return s==null?e(b,{}):e(ft,{worker:s})},Pr=n=>{const{userId:t}=n,{data:s}=C(U.detail(t),()=>Ae(t));return s==null?e(b,{}):s.worker_ids.length===0?e(g,{item:!0,md:12,lg:6,xl:4,children:e(p,{variant:"body1",children:"This user has no workers."})}):e(b,{children:s.worker_ids.map(c=>e(Ir,{workerId:c},c))})},[_r,Fr,Or]=cn(),Dr=n=>n!=null&&"username"in n&&"id"in n,Tr=()=>{const n=D(),[t,s]=k.exports.useState(-1),[c]=lt(t,400),{data:a}=C(U.all,ht),{data:o,refetch:l}=C(U.detail(c),()=>Ae(c),{enabled:!1});if(k.exports.useEffect(()=>{rt(c)&&c>=4770&&l()},[c]),a==null)return e(b,{});const h=(i,u)=>{xe(u)?n(ze(parseInt(u))):Dr(u)&&n(ze(u.id))};return e(ge,{disablePortal:!0,options:[...o!=null?[o]:[],...a!=null?a:[]],sx:{width:300},blurOnSelect:!0,autoHighlight:!0,freeSolo:!0,loading:a==null,loadingText:"Loading users...",getOptionLabel:i=>xe(i)?i:i.username,isOptionEqualToValue:(i,u)=>i.id===u.id,renderInput:i=>e(M,{...i,variant:"standard",label:"User Lookup",size:"small"}),onChange:h,onInputChange:(i,u)=>{s(un(u))}})},Mr=()=>{const n=y(l=>{var h;return(h=l.userPanel.selectedUser)!=null?h:-1}),t=Ge(),{data:s,isInitialLoading:c}=C(U.detail(n),()=>Ae(n),{refetchInterval:1e3*15}),a=ye(l=>mt(l.id,l.data),{onSuccess:(l,h)=>{t.invalidateQueries({queryKey:U.detail(h.id)})}}),o=Fr();return k.exports.useEffect(()=>{if(s!=null){const l={trusted:s.trusted,flagged:s.flagged,worker_invite:s.worker_invited.toString()};o.setValues(l),o.resetDirty(l)}},[c]),s==null?e(b,{}):e(hn,{component:m,children:e(pn,{size:"small",children:r(mn,{children:[r(V,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Username"})}),e(O,{align:"right",children:r(p,{variant:"body1",children:[s.username," ",s.moderator?"(moderator)":""]})})]}),r(V,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Trusted"})}),e(O,{align:"right",children:e(qe,{...o.getInputProps("trusted",{type:"checkbox"}),size:"small"})})]}),r(V,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Flagged"})}),e(O,{align:"right",children:e(qe,{...o.getInputProps("flagged",{type:"checkbox"}),size:"small"})})]}),r(V,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Worker Invites"})}),e(O,{align:"right",children:e(M,{variant:"standard",type:"number",...o.getInputProps("worker_invite"),sx:{maxWidth:"100px"},InputProps:{inputProps:{min:0},sx:{"& input":{p:"0",textAlign:"right"}}}})})]}),r(V,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Worker Count"})}),e(O,{align:"right",children:e(p,{variant:"body1",children:s.worker_count})})]}),r(V,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Kudos"})}),e(O,{align:"right",children:e(p,{variant:"body1",children:s.kudos})})]}),r(V,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Suspicious"})}),r(O,{sx:{display:"flex",flex:"1 1 0",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"},children:[s.suspicious>0?e(be,{onClick:async()=>{const l={reset_suspicion:!0};a.mutate({id:n,data:l})},loading:a.isLoading,variant:"contained",color:"error",sx:{order:0,mr:4},children:"Reset"}):null,e(p,{sx:{order:1},variant:"body1",children:s.suspicious})]})]})]})})})},Wr=()=>{const n=Ge(),t=y(h=>h.userPanel.selectedUser),[s,c]=k.exports.useState(!1),a=Or({initialValues:{trusted:!1,flagged:!1,worker_invite:"0"}}),o=ye(h=>mt(h.id,h.data),{onSuccess:(h,i)=>{var f,_,S,G;n.setQueryData(U.detail(i.id),H=>H!=null?{...H,...h}:h);const u={trusted:(f=h.trusted)!=null?f:!1,flagged:(_=h.flagged)!=null?_:!1,worker_invite:(G=(S=h.worker_invite)==null?void 0:S.toString())!=null?G:"0"};j(u)||(a.setValues(u),a.resetDirty(u)),c(!0)}}),l=(h,i)=>{i!=="clickaway"&&c(!1)};return r(X,{elevation:1,sx:{p:2,height:"100%"},children:[e(at,{open:s,autoHideDuration:6e3,onClose:l,anchorOrigin:{vertical:"top",horizontal:"right"},children:e(st,{onClose:l,severity:"success",sx:{width:"100%",border:"2px solid #a3a3a3"},children:"Changes successfully saved!"})}),r("form",{onSubmit:a.onSubmit((h,i)=>{if(t!=null){const u={trusted:h.trusted,flagged:h.flagged,worker_invite:parseInt(h.worker_invite)};o.mutate({id:t,data:u})}}),children:[r(m,{display:"flex",justifyContent:"space-between",children:[e(Tr,{}),t!=null?r(m,{display:"flex",alignItems:"center",children:[a.isDirty()?e(v,{sx:{mr:2},variant:"contained",type:"submit",children:"Save"}):null,e(gn,{})]}):null]}),e(_r,{form:a,children:e(m,{display:"flex",children:t!=null&&t!=-1?e(Mr,{}):null})})]})]})},Lr=()=>{const n=y(t=>t.userPanel.selectedUser);return r(g,{container:!0,spacing:2,children:[e(g,{item:!0,md:12,lg:6,xl:4,children:e(Wr,{})}),n!=null?e(Pr,{userId:n}):null]})},Ur=()=>{const n=D(),t=y(l=>l.utilityPanel.ipAddr),{data:s,refetch:c,isFetching:a}=C(["deleteIpAddr",t],()=>cr({ipaddr:t}),{enabled:!1,cacheTime:0});return e(X,{elevation:1,sx:{p:2,height:"100%"},children:r(m,{children:[r(m,{display:"flex",justifyContent:"space-between",children:[e(p,{variant:"h4",children:"Clear IP Timeout"}),e(be,{onClick:()=>{j(t)||c()},loading:a,variant:"contained",children:"Submit"})]}),e(M,{sx:{my:2},variant:"standard",multiline:!0,fullWidth:!0,value:t,onChange:l=>{n(Hn(l.target.value))},placeholder:"Enter IP"}),s!=null?e(m,{pt:2,children:r(p,{variant:"body1",children:["Response: ",s.message]})}):null]})})},Gr=()=>{const n=D(),t=y(l=>l.utilityPanel.prompt),{data:s,refetch:c,isFetching:a}=C(["promptCheck",t],()=>sr({filter_type:0,prompt:t}),{enabled:!1});return e(X,{elevation:1,sx:{p:2,height:"100%"},children:r(m,{children:[r(m,{display:"flex",justifyContent:"space-between",children:[e(p,{variant:"h4",children:"Prompt Checker"}),e(be,{onClick:()=>{j(t)||c()},loading:a,variant:"contained",children:"Submit"})]}),e(M,{sx:{my:2},variant:"standard",multiline:!0,fullWidth:!0,value:t,onChange:l=>{n(Nn(l.target.value))},placeholder:"Enter prompt"}),s!=null?r(m,{pt:2,children:[r(p,{variant:"body1",children:["Suspicion: ",s.suspicion]}),s.suspicion>0?r(p,{variant:"body1",children:["Matches: ",JSON.stringify(s.matches)]}):null]}):null]})})},Ar=()=>r(g,{container:!0,spacing:2,children:[e(g,{item:!0,md:12,lg:6,xl:4,children:e(Gr,{})}),e(g,{item:!0,md:12,lg:6,xl:4,children:e(Ur,{})})]}),Er=()=>{const n=y(o=>o.workerPanel.workerFilter),[t,s]=k.exports.useState(n!=null?n:""),[c]=lt(t,400),a=D();return k.exports.useEffect(()=>{a(zn(c))},[c]),e(M,{sx:{mr:2},label:"Search & Filter",variant:"outlined",value:t,onChange:o=>{s(o.target.value)}})},$r=()=>{const n=D(),t=y(h=>h.workerPanel.sortKey),s=y(h=>h.workerPanel.order),c=y(h=>h.workerPanel.workerFilter),{data:a}=C($.all,()=>Ee(),{refetchInterval:1e3*30,select:h=>{const i=c==null?void 0:c.toLowerCase();return fe(h.filter(u=>{var f;return u.performance.includes("per form")||u.performance.includes("tokens")?!1:i==null?!0:u.name.toLowerCase().includes(i)||((f=u.owner)!=null?f:"").toLowerCase().includes(i)||u.id.toLowerCase().includes(i)}).map(u=>({...u,performance:u.performance.replace(" megapixelsteps per second","")})),[u=>{const f=u[t];return xe(f)?f.toLowerCase():f}],[s])}}),o=h=>{n(Vn(h.target.value))},l=h=>{n(Qn(h))};return a==null?e(b,{}):r(b,{children:[r(m,{display:"flex",justifyContent:"space-between",pb:2,children:[r(m,{display:"flex",alignItems:"center",children:[e(p,{variant:"h5",sx:{mr:{xs:1,md:2}},children:"Worker List"}),e(Er,{})]}),r(m,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:[r(tt,{sx:{mr:1},children:[e(nt,{children:"Sort Key"}),r(Xe,{value:t,label:"Sort Key",onChange:o,sx:{".MuiSelect-select":{py:1}},children:[e(N,{value:"name",children:"Name"}),e(N,{value:"performance",children:"Performance"}),e(N,{value:"uptime",children:"Uptime"}),e(N,{value:"megapixelsteps_generated",children:"MPS Generated"})]})]}),s==="asc"?e(L,{onClick:()=>l("desc"),children:e(fn,{})}):e(L,{onClick:()=>l("asc"),children:e(xn,{})})]})]}),e(g,{container:!0,spacing:2,children:a.map(h=>e(ft,{worker:h},h.id))})]})},Qe=()=>{const{data:n,isLoading:t,error:s}=C(["mode"],ct);if(t)return e(p,{variant:"h6",children:"Loading Horde status ..."});if(n==null||s)return console.log("HordeStatus error",s),e(p,{variant:"h6",children:"Error loading Horde status"});const c=a=>a?e(Be,{sx:{color:ae,ml:1}}):e(Be,{sx:{color:Ue,ml:1}});return r(me,{children:[r(q,{children:[e(Ie,{children:c(n.maintenance_mode)}),e(B,{primary:"Maintenance"})]}),r(q,{children:[e(Ie,{children:c(n.invite_only_mode)}),e(B,{primary:"Invite Only"})]}),n.raid_mode!=null?r(q,{children:[e(Ie,{children:c(n.raid_mode)}),e(B,{primary:"Raid"})]}):null]})},Ze=()=>{const{data:n,isLoading:t,error:s}=C(["performance"],ut);return t?e(p,{variant:"h6",children:"Loading Horde status ..."}):n==null||s?e(p,{variant:"h6",children:"Error loading Horde status"}):r(me,{children:[e(q,{children:e(B,{primary:`Queued Requests: ${n.queued_requests}`})}),e(q,{children:e(B,{primary:`Queued MPS: ${n.queued_megapixelsteps}`})}),e(q,{children:e(B,{primary:`Past Minute MPS: ${n.past_minute_megapixelsteps}`})}),e(q,{children:e(B,{primary:`Workers: ${n.worker_count}`})})]})},ce=240,Rr=()=>{const n=D(),t=y(c=>c.localState.sidebarOpen);return r(b,{children:[r(Ne,{variant:"temporary",open:t,onClose:()=>{n(dt(!t))},ModalProps:{keepMounted:!0},sx:{display:{xs:"block",md:"none"},width:ce,flexShrink:0,"& .MuiDrawer-paper":{boxSizing:"border-box",width:ce}},children:[e(Pe,{}),r(m,{sx:{overflow:"auto"},children:[e(Ze,{}),e(le,{}),e(Qe,{})]})]}),r(Ne,{variant:"permanent",sx:{display:{xs:"none",md:"block"},width:ce,flexShrink:0,["& .MuiDrawer-paper"]:{width:ce,boxSizing:"border-box"}},children:[e(Pe,{}),r(m,{sx:{overflow:"auto"},children:[e(Ze,{}),e(le,{}),e(Qe,{})]})]})]})},Kr=()=>{const n=D(),t=y(c=>c.persist.selectedTab);return r(m,{display:"flex",children:[e(Rr,{}),e(m,{display:"flex",flexDirection:"column",flex:"1 1 auto",children:r(yn,{value:t,children:[e(m,{sx:{borderBottom:1,borderColor:"divider"},children:r(bn,{onChange:(c,a)=>{a!="4"&&n(Te(!1)),n(Gn(a))},"aria-label":"lab API tabs example",children:[e(ne,{label:"User Lookup",value:"1"}),e(ne,{label:"Workers",value:"2"}),e(ne,{label:"Comparator",value:"3"}),e(ne,{label:"Utilities",value:"4"}),e(ne,{label:"Settings",value:"5"})]})}),e(re,{value:"1",children:e(Lr,{})}),e(re,{value:"2",children:e($r,{})}),e(re,{value:"3",children:e(vr,{})}),e(re,{value:"4",children:e(Ar,{})}),e(re,{value:"5",children:e(kr,{})})]})})]})},ue=()=>{const n=D(),t=y(c=>c.localState.sidebarOpen);return e(vn,{position:"sticky",sx:{zIndex:c=>c.zIndex.drawer+1},children:r(Pe,{children:[e(L,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:()=>{n(dt(!t))},sx:{mr:2,display:{md:"none"}},children:e(kn,{})}),e(p,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:"Horde Control Tower"}),null]})})},qr=async n=>{const t=window.document.createElement("canvas"),s=window.Image,c=(await Promise.allSettled([n].map(async o=>await new Promise((l,h)=>{let i;Cn(o,"src")?i=o:i={src:o};const u=new s;u.onerror=()=>h(new Error("Couldn't load image")),u.onload=()=>l({...i,img:u}),u.src=i.src,u.crossOrigin="anonymous"})))).filter(o=>o.status==="fulfilled").map(o=>o.value),a=t.getContext("2d");if(a==null)throw new Error("Couldn't create canvas context");{const o=l=>Math.max(...c.map(h=>{var i,u;return(u=(i=h==null?void 0:h.img)==null?void 0:i[l])!=null?u:0}));return t.width=o("width"),t.height=o("height"),c.forEach(l=>{var h,i;if(l!=null&&(a.globalAlpha=l.opacity!=null?l.opacity:1,l.img!=null))return a.drawImage(l.img,(h=l.x)!=null?h:0,(i=l.y)!=null?i:0)}),t.toDataURL("image/webp")}},Br=n=>{const{gen:t,...s}=n,c=D();return C(["check",t.id],()=>ir(t.id),{refetchInterval:2e3,enabled:t.state==="check",onSuccess:a=>{if(t.state==="check"){let o=t.state;a.faulted?o="error":a.done&&(o="status"),c(pe({...t,state:o,check:a}))}}}),C(["status",t.id],()=>or(t.id),{refetchInterval:!1,enabled:t.state==="status",onSuccess:async a=>{if(t.state==="status"){let o=t.state;if(a.faulted)o="error";else if(a.done){o="complete";const l=await qr(a.generations[0].img);a.generations[0].img=l}c(pe({...t,state:o,status:a}))}}}),C(["delete",t.id],()=>dr(t.id),{refetchInterval:!1,retry:!1,enabled:t.state==="delete",onSuccess:async a=>{c(pe({...t,state:"complete",status:a}))}}),e(b,{})},Nr=()=>{const n=y(t=>t.persist.imageGens);return j(n)?e(b,{}):e(b,{children:n.map(t=>e(Br,{gen:t},t.id))})},Hr=()=>{const n=y(a=>a.persist.apikey),{data:t,refetch:s,isLoading:c}=C(["findUser"],()=>nr(n),{enabled:!j(n),retry:1});return k.exports.useEffect(()=>{s()},[n]),c?r(m,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ue,{}),e(m,{sx:{display:"flex",flex:"1 1 auto"},justifyContent:"center",alignItems:"center",children:e(Ye,{})})]}):j(n)||t==null?r(m,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ue,{}),r(m,{display:"flex",flex:"1 1 auto",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[e(p,{variant:"h4",children:"Please enter your API key."}),e(gt,{})]})]}):t.moderator?r(m,{sx:{display:"flex",flexDirection:"column"},children:[e(Nr,{}),e(ur,{}),e(ue,{}),e(Kr,{})]}):r(m,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ue,{}),e(m,{sx:{display:"flex",flex:"1 1 auto"},justifyContent:"center",alignItems:"center",children:e(p,{variant:"h4",children:"Sorry, you really need to be a moderator to access these utilities :("})})]})};Q.prototype.__toHuman__=Q.prototype.toHuman;Q.prototype.toHuman=function(n={stripZeroUnits:"all"}){let t=this.normalize(),s=[],c=typeof n.precision=="object"?Q.fromObject(n.precision):Q.fromMillis(0),a=t;const o=["years","months","days","hours","minutes","seconds","milliseconds"];let l,h;n.smallestUnit&&(l=o.indexOf(n.smallestUnit)),n.biggestUnit&&(h=o.indexOf(n.biggestUnit)),(!l||!(l>=0&&l<o.length))&&(l=o.indexOf("seconds")),(!h||!(h<=l&&h<o.length))&&(h=o.indexOf("years"));for(let i of o.slice(h,l+1)){if(a.as(i)>=1){s.push(i);let f={};if(f[i]=Math.floor(a.as(i)),a=a.minus(Q.fromObject(f)).normalize(),a<c)break}if(n.maxUnits&&s.length>=n.maxUnits)break}if(t=t.minus(a).normalize(),t=t.shiftTo(...s),n.stripZeroUnits=="all")s=s.filter(i=>t.values[i]>0);else if(n.stripZeroUnits=="end"){let i=!0;s=s.reverse().filter(u=>i?t.values[u]==0?!1:(i=!1,!0):!0)}return s.length||s.push(o[l]),t.shiftTo(...s).__toHuman__(n)};const jr=Sn({key:"mui",prepend:!0}),zr=wn({palette:{mode:"dark"}}),Vr=new In({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});Pn(document.getElementById("root")).render(e(_n,{value:jr,children:r(Fn,{theme:zr,children:[e(On,{}),r(Dn,{client:Vr,children:[e(Tn,{store:ve,children:e(Mn,{loading:null,persistor:er,children:e(Hr,{})})}),null]})]})}));
