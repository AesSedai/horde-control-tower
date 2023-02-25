import{c as Z,a as wt,b as It,p as Pt,d as _t,e as Ft,s as Ot,f as Dt,F as Tt,R as Mt,P as Lt,g as Wt,h as Ut,i as Gt,j as Je,u as C,k as e,l as b,m as Et,n as $t,r as v,o as r,D as he,q as $,t as ae,v as ke,L as me,w as q,x as Ae,y as B,z as K,B as k,T as U,I as L,A as At,M as Rt,C as N,E as se,G as Kt,H as g,J as qt,K as ve,N as Ye,O as Ce,Q as p,S as ye,U as Bt,V as Nt,W as m,X as w,Y as Ht,Z as jt,_ as Xe,$ as ee,a0 as Y,a1 as ge,a2 as Se,a3 as Ue,a4 as et,a5 as fe,a6 as zt,a7 as xe,a8 as le,a9 as tt,aa as nt,ab as Vt,ac as Qt,ad as Zt,ae as rt,af as Q,ag as Ge,ah as at,ai as st,aj as Jt,ak as Yt,al as M,am as Xt,an as en,ao as Re,ap as Ke,aq as tn,ar as nn,as as rn,at as an,au as V,av as sn,aw as ln,ax as on,ay as cn,az as dn,aA as lt,aB as un,aC as hn,aD as pn,aE as mn,aF as z,aG as O,aH as qe,aI as gn,aJ as fn,aK as xn,aL as we,aM as Be,aN as Ne,aO as Ie,aP as yn,aQ as bn,aR as te,aS as ne,aT as kn,aU as vn,aV as Cn,aW as Sn,aX as wn,aY as In,aZ as Pn,a_ as _n,a$ as Fn,b0 as On,b1 as Dn,b2 as Tn,b3 as Mn}from"./vendor.f31834cc.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))d(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&d(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const Ln={reload:!1,selectedModel:null,selectedWorkers:[],genForm:{prompt:"",params:{sampler_name:"k_euler",toggles:[1,4],cfg_scale:7,seed:"",height:512,width:512,seed_variation:1,post_processing:[],karras:!0,tiling:!1,hires_fix:!1,clip_skip:1,steps:20,n:1},nsfw:!0,trusted_workers:!1,censor_nsfw:!1,workers:[],models:[],r2:!0,shared:!0}},Pe=Z({name:"comparatorPanel",initialState:Ln,reducers:{setSelectedModel:(n,t)=>{n.selectedModel=t.payload},setSelectedWorkers:(n,t)=>{n.selectedWorkers=t.payload},setGenForm:(n,t)=>{n.genForm=structuredClone(t.payload)},setReload:(n,t)=>{n.reload=t.payload}}}),{setSelectedModel:He,setSelectedWorkers:ce,setGenForm:it,setReload:ot}=Pe.actions,Wn={sidebarOpen:!1},_e=Z({name:"localState",initialState:Wn,reducers:{setSidebarOpen:(n,t)=>{n.sidebarOpen=t.payload}}}),{setSidebarOpen:ct}=_e.actions,Fe={apikey:"",selectedTab:"1",genFavorites:[],imageGens:[]},ie=Z({name:"persist",initialState:Fe,reducers:{setKey:(n,t)=>{n.apikey=t.payload},setSelectedTab:(n,t)=>{n.selectedTab=t.payload},resetImageGens:n=>{n.imageGens=[]},addImageGen:(n,t)=>{n.imageGens.find(d=>d.id===t.payload.id)||n.imageGens.push(t.payload)},updateImageGen:(n,t)=>{const s=n.imageGens.findIndex(d=>d.id===t.payload.id);s!=null&&(n.imageGens[s]=t.payload)},addGenFavorite:(n,t)=>{n.genFavorites.push(t.payload)},updateGenFavorite:(n,t)=>{n.genFavorites[t.payload.idx]={name:n.genFavorites[t.payload.idx].name,form:t.payload.form}},deleteGenFavorite:(n,t)=>{n.genFavorites.splice(t.payload)},resetExceptApiKey:n=>(n={...Fe,apikey:n.apikey},n)}}),{setKey:Un,setSelectedTab:Gn,resetImageGens:je,addImageGen:En,updateImageGen:pe,addGenFavorite:$n,resetExceptApiKey:zr,updateGenFavorite:An,deleteGenFavorite:Rn}=ie.actions,Kn={showPassword:!1},Oe=Z({name:"settingsPanel",initialState:Kn,reducers:{setShowPassword:(n,t)=>{n.showPassword=t.payload}}}),{setShowPassword:De}=Oe.actions,qn={},Te=Z({name:"userPanel",initialState:qn,reducers:{setUser:(n,t)=>{n.selectedUser=t.payload}}}),{setUser:ze}=Te.actions,Bn={prompt:""},Me=Z({name:"utilityPanel",initialState:Bn,reducers:{setPrompt:(n,t)=>{n.prompt=t.payload}}}),{setPrompt:Nn}=Me.actions,Hn={sortKey:"name",order:"asc"},Le=Z({name:"workerPanel",initialState:Hn,reducers:{setWorkerFilter:(n,t)=>{n.workerFilter=t.payload},setSortKey:(n,t)=>{n.sortKey=t.payload},setOrder:(n,t)=>{n.order=t.payload}}}),{setWorkerFilter:jn,setSortKey:zn,setOrder:Vn}=Le.actions,Qn=wt((n,t)=>n,(n,t)=>Object.assign({},Fe,n),{whitelist:[ie.name]}),Zn={key:"root",storage:Dt,whitelist:[ie.name],transforms:[Qn]},Jn=It({[ie.name]:ie.reducer,[_e.name]:_e.reducer,[Oe.name]:Oe.reducer,[Te.name]:Te.reducer,[Me.name]:Me.reducer,[Le.name]:Le.reducer,[Pe.name]:Pe.reducer}),Yn=Pt(Zn,Jn),be=_t({reducer:Yn,middleware:n=>n({serializableCheck:{ignoredActions:[Tt,Mt,Lt,Wt,Ut,Gt]}}),devTools:!1}),Xn=Ft(be);Ot(be.dispatch);const _=Je.create({baseURL:"https://stablehorde.net/api/v2/"});_.interceptors.request.use(function(n){const t=be.getState().persist.apikey;return n.headers!=null&&t!=null&&(n.headers.apikey=t),n},function(n){return Promise.reject(n)});const er=Je.create({baseURL:"/horde-control-tower/"}),tr=n=>_.get("find_user",{headers:{apikey:n}}).then(t=>t.data),dt=()=>_.get("status/modes").then(n=>n.data),ut=()=>_.get("status/performance").then(n=>n.data),ht=()=>er.get("users.json").then(n=>n.data),Ee=n=>_.get(`users/${n}`).then(t=>t.data),$e=()=>_.get("workers").then(n=>n.data),nr=n=>_.get(`workers/${n}`).then(t=>t.data),pt=()=>_.get("status/models").then(n=>n.data),mt=(n,t)=>_.put(`users/${n}`,t).then(s=>s.data),rr=(n,t)=>_.put(`workers/${n}`,t).then(s=>s.data),ar=n=>_.post("filters",n).then(t=>t.data),sr=n=>_.post("generate/async",n).then(t=>t.data),lr=n=>_.get(`generate/check/${n}`).then(t=>t.data),ir=n=>_.get(`generate/status/${n}`).then(t=>t.data),or=n=>_.delete(`generate/status/${n}`).then(t=>t.data),W={all:["users"],lists:()=>[...W.all,"list"],list:n=>[...W.lists(),{filters:n}],details:()=>[...W.all,"detail"],detail:n=>[...W.details(),n]},A={all:["workers"],lists:()=>[...A.all,"list"],list:n=>[...A.lists(),{filters:n}],details:()=>[...A.all,"detail"],detail:n=>[...A.details(),n]},cr=()=>(C(W.all,ht,{staleTime:1e3*30,refetchInterval:1e3*30}),C(["performance"],ut,{staleTime:1e3*30,refetchInterval:1e3*30}),C(["mode"],dt,{staleTime:1e3*30,refetchInterval:1e3*30}),C(["models"],pt,{staleTime:1e3*30,refetchInterval:1e3*30}),e(b,{})),T=()=>$t(),y=Et,dr=()=>{const n=T(),t=y(I=>I.comparatorPanel.genForm),s=y(I=>I.persist.genFavorites),[d,a]=v.exports.useState(!1),[o,i]=v.exports.useState(-1),[h,l]=v.exports.useState(!1),[u,f]=v.exports.useState(-1),[P,S]=v.exports.useState(!1),[G,H]=v.exports.useState(""),[j,c]=v.exports.useState(null),x=Boolean(j),F=I=>{c(I.currentTarget)},E=()=>{c(null)},oe=()=>{S(!1)},J=()=>{n($n({name:G,form:t})),H(""),S(!1)},X=()=>{i(-1),a(!1)},xt=()=>{n(An({idx:o,form:t})),i(-1),a(!1)},yt=()=>{f(-1),l(!1)},bt=()=>{n(Rn(u)),f(-1),l(!1)},kt=I=>{n(it(I)),n(ot(!0)),c(null)},vt=()=>{S(!0),c(null)},Ct=()=>{a(!0),c(null)},St=()=>{l(!0),c(null)};return r(b,{children:[r(he,{open:h,onClose:X,children:[e($,{children:"Delete Preset"}),r(ae,{children:[e(ke,{children:"Select a preset to delete."}),e(me,{children:s.map((I,R)=>e(q,{disablePadding:!0,sx:{backgroundColor:u===R?"error.dark":""},onClick:()=>{f(R)},children:e(Ae,{children:e(B,{primary:I.name})})},R))})]}),r(K,{children:[e(k,{onClick:yt,children:"Cancel"}),e(k,{disabled:u===-1,onClick:bt,children:"Select"})]})]}),r(he,{open:d,onClose:X,children:[e($,{children:"Overwrite Preset"}),r(ae,{children:[e(ke,{children:"Select a preset to overwrite."}),e(me,{children:s.map((I,R)=>e(q,{disablePadding:!0,sx:{backgroundColor:o===R?"success.dark":""},onClick:()=>{i(R)},children:e(Ae,{children:e(B,{primary:I.name})})},R))})]}),r(K,{children:[e(k,{onClick:X,children:"Cancel"}),e(k,{disabled:o===-1,onClick:xt,children:"Select"})]})]}),r(he,{open:P,onClose:oe,children:[e($,{children:"Add New Preset"}),r(ae,{children:[e(ke,{children:"Enter a friendly name for this new preset."}),e(U,{autoFocus:!0,margin:"dense",label:"Name",fullWidth:!0,variant:"standard",value:G,onChange:I=>{H(I.target.value)}})]}),r(K,{children:[e(k,{onClick:oe,children:"Cancel"}),e(k,{onClick:J,children:"Create"})]})]}),e(L,{onClick:F,children:e(At,{})}),r(Rt,{anchorEl:j,open:x,onClose:E,children:[s.map((I,R)=>e(N,{onClick:()=>{kt(I.form)},children:I.name},R)),s.length>0?e(se,{}):null,s.length>0?e(N,{onClick:St,children:"Delete Preset"}):null,s.length>0?e(se,{}):null,s.length>0?e(N,{onClick:Ct,children:"Overwrite Preset"}):null,s.length>0?e(se,{}):null,e(N,{onClick:vt,children:"Add New Preset"})]})]})},ur=()=>{const n=y(a=>a.persist.imageGens),{data:t}=C(A.all,()=>$e(),{refetchInterval:1e3*30,select:a=>Kt(a.map(o=>[o.id,o.name]))}),s=a=>{var i,h,l;const o=a.status!=null?a.status:a.check;return a.state!=="complete"&&o!=null?r(ve,{sx:{paddingTop:"100%",border:"1px solid black"},children:[e(Ye,{sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"}}),e(Ce,{title:t==null?"":t[(i=a.payload.workers[0])!=null?i:""],subtitle:`Position: ${o.queue_position}, wait time: ${o.wait_time}`})]},a.id):a.state==="complete"?d(a).length===0?r(ve,{sx:{paddingTop:"100%",border:"1px solid black"},children:[e(p,{variant:"h3",sx:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:"Canceled"}),e(Ce,{title:t==null?"":t[(h=a.payload.workers[0])!=null?h:""]})]},a.id):r(ve,{sx:{paddingTop:d(a).length>0?"0%":"100%",border:"1px solid black"},children:[e("img",{src:d(a)}),e(Ce,{title:t==null?"":t[(l=a.payload.workers[0])!=null?l:""]})]},a.id):e(b,{})},d=a=>a.status!=null&&a.status.generations.length>0?a.status.generations[0].img:"";return e(g,{children:e(qt,{sx:{width:"100%",height:"100%"},cols:4,children:n.map(a=>s(a))})})},hr=["GFPGAN","RealESRGAN_x4plus","CodeFormers"],pr=["k_lms","k_heun","k_euler","k_euler_a","k_dpm_2","k_dpm_2_a","k_dpm_fast","k_dpm_adaptive","k_dpmpp_2m","k_dpmpp_2s_a","k_dpmpp_sde"],D="175px",mr=()=>{const n=T(),t=y(c=>c.comparatorPanel.selectedWorkers),s=y(c=>c.comparatorPanel.selectedModel),d=y(c=>c.comparatorPanel.genForm),a=y(c=>c.persist.imageGens),o=y(c=>c.persist.imageGens.length>0),i=y(c=>c.comparatorPanel.reload),h=y(c=>c.persist.imageGens.some(x=>["pending","check"].includes(x.state))),{mutate:l}=ye({mutationFn:sr,onSuccess:(c,x,F)=>{n(En({id:c.id,payload:x,state:"check",check:null,status:null}))}}),{handleSubmit:u,control:f,formState:{errors:P},watch:S,setValue:G,reset:H}=Bt({defaultValues:d}),j=c=>{s!=null&&t.length>0&&(n(je()),t.forEach(x=>{const F={...c,workers:[x.id],models:[s.name]};l(F)}))};return v.exports.useEffect(()=>{const c=S(Nt((x,{name:F,type:E})=>{n(it(x))},300));return()=>c.unsubscribe()},[S]),v.exports.useEffect(()=>{i&&(n(ot(!1)),H(d))},[i]),e(g,{children:r("form",{onSubmit:u(j),children:[r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Prompt"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"prompt",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(U,{fullWidth:!0,required:!0,multiline:!0,placeholder:"Enter prompt here",...c})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Seed"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.seed",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(U,{fullWidth:!0,placeholder:"Seed",...c})})}),e(m,{item:!0,children:e(L,{"aria-label":"randomize seed",onClick:()=>{G("params.seed",Ht(1e8,999999999).toString())},children:e(jt,{})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Sampler"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.sampler_name",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(Xe,{...c,fullWidth:!0,children:pr.map(x=>e(N,{value:x,children:x},x))})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Steps"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.steps",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(ee,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:100,...c})})}),e(w,{name:"params.steps",control:f,render:({field:c})=>e(m,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:100,type:"number"},...c,onChange:x=>{c.onChange(parseInt(x.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Width"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.width",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(ee,{valueLabelDisplay:"auto",marks:!0,step:64,min:64,max:1024,...c})})}),e(w,{name:"params.width",control:f,render:({field:c})=>e(m,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:64,min:64,max:1024,type:"number"},...c,onChange:x=>{c.onChange(parseInt(x.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Height"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.height",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(ee,{valueLabelDisplay:"auto",marks:!0,step:64,min:64,max:1024,...c})})}),e(w,{name:"params.height",control:f,render:({field:c})=>e(m,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:64,min:64,max:1024,type:"number"},...c,onChange:x=>{c.onChange(parseInt(x.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"CFG"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.cfg_scale",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(ee,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:24,...c})})}),e(w,{name:"params.cfg_scale",control:f,render:({field:c})=>e(m,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:24,type:"number"},...c,onChange:x=>{c.onChange(parseInt(x.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Clip Skip"}),r(m,{container:!0,spacing:2,alignItems:"center",children:[e(w,{name:"params.clip_skip",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(ee,{valueLabelDisplay:"auto",marks:!0,step:1,min:1,max:12,...c})})}),e(w,{name:"params.clip_skip",control:f,render:({field:c})=>e(m,{item:!0,children:e(Y,{type:"number",sx:{width:"60px",ml:1},inputProps:{step:1,min:1,max:12,type:"number"},...c,onChange:x=>{c.onChange(parseInt(x.target.value))}})})})]})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Post-Processors"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.post_processing",control:f,render:({field:{onChange:c,onBlur:x,value:F,name:E,ref:oe}})=>e(m,{item:!0,xs:!0,children:e(ge,{fullWidth:!0,multiple:!0,onBlur:x,ref:oe,value:F,onChange:(J,X)=>{c(X)},options:hr,getOptionLabel:J=>J,renderInput:J=>e(U,{...J})})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"High Res Fix"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.hires_fix",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(Se,{...c,checked:c.value})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Karras"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.karras",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(Se,{...c,checked:c.value})})})})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:D},children:"Tiling"}),e(m,{container:!0,spacing:2,alignItems:"center",children:e(w,{name:"params.tiling",control:f,render:({field:c})=>e(m,{item:!0,xs:!0,children:e(Se,{...c,checked:c.value})})})})]}),e(Ue,{type:"submit",loading:h,variant:"contained",children:"Submit"}),h?e(k,{sx:{ml:2},color:"error",variant:"contained",onClick:()=>{a.filter(c=>["pending","check"].includes(c.state)).forEach(c=>{n(pe({...c,state:"delete"}))})},children:"Cancel"}):null,o?e(k,{sx:{ml:2},variant:"contained",onClick:()=>{n(je())},children:"Clear Output"}):null]})})},gr=n=>n!=null&&"name"in n,fr=n=>n!=null&&et(n)&&"name"in n[0]&&"id"in n[0],Ve="175px",xr=()=>{const n=T(),t=y(l=>l.comparatorPanel.selectedWorkers),s=y(l=>l.comparatorPanel.selectedModel),d=(l,u)=>{et(u)&&u.length===0?n(ce([])):fr(u)&&n(ce(u))},a=(l,u)=>{u==null?n(He(null)):gr(u)&&n(He(u))},{data:o}=C(A.all,()=>$e(),{refetchInterval:1e3*30,select:l=>fe(l,[u=>u.name.toLowerCase()],["asc"])}),{data:i}=C(["models"],pt,{staleTime:1e3*30,refetchInterval:1e3*30,select:l=>fe(l,[u=>u.name.toLowerCase()],["asc"])});if(v.exports.useEffect(()=>{if(s!=null&&t.length>0){const l=t.map(P=>P.id),u=t.filter(P=>{var S;return(S=P==null?void 0:P.models)==null?void 0:S.includes(s.name)}),f=u.map(P=>P.id);zt(l,f)||n(ce(u))}else s==null&&t.length>0&&n(ce([]))},[o,i,t,s]),o==null||i==null)return e(b,{});const h=o.filter(l=>{var u;return s==null?!0:(u=l==null?void 0:l.models)==null?void 0:u.includes(s.name)});return r(g,{children:[r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:Ve},children:"Model"}),e(ge,{fullWidth:!0,disablePortal:!0,options:i,blurOnSelect:!0,value:s,autoHighlight:!0,getOptionLabel:l=>xe(l)?l:l.name,isOptionEqualToValue:(l,u)=>l.name===u.name,filterSelectedOptions:!0,renderInput:l=>e(U,{...l,label:"Selected Model"}),onChange:a})]}),r(g,{sx:{display:"flex",alignItems:"center",py:1},children:[e(p,{variant:"body1",sx:{width:Ve},children:"Workers"}),e(ge,{fullWidth:!0,multiple:!0,disablePortal:!0,options:h,value:t,getOptionLabel:l=>l.name,isOptionEqualToValue:(l,u)=>l.id===u.id,filterSelectedOptions:!0,renderInput:l=>e(U,{...l,label:"Selected Workers"}),onChange:d})]})]})},yr=()=>r(m,{container:!0,spacing:2,children:[e(m,{item:!0,xs:12,xl:4,children:r(le,{sx:{p:2},children:[r(g,{sx:{position:"relative"},children:[e(p,{align:"center",variant:"h4",sx:{pb:1},children:"Generation Settings"}),e(g,{sx:{position:"absolute",top:0,right:0},children:e(dr,{})})]}),e(xr,{}),e(mr,{})]})}),e(m,{item:!0,xs:12,xl:8,children:r(le,{sx:{p:2,height:"100%"},children:[e(p,{align:"center",variant:"h4",sx:{pb:1},children:"Output"}),e(ur,{})]})})]}),gt=()=>{const n=T(),t=y(a=>a.persist.apikey),s=y(a=>a.settingsPanel.showPassword);return r(tt,{sx:{m:1,width:"35ch"},variant:"standard",children:[e(nt,{children:"API Key"}),e(Y,{defaultValue:t,onBlur:a=>{n(Un(a.target.value)),n(De(!1))},type:s?"text":"password",endAdornment:e(Vt,{position:"end",children:e(L,{onClick:()=>n(De(!s)),children:s?e(Qt,{}):e(Zt,{})})})})]})},br=()=>e(m,{container:!0,spacing:2,children:e(m,{item:!0,md:12,lg:6,xl:4,children:e(le,{children:e(gt,{})})})}),We="#0583B0",re="#FF6962",kr="#7c0500",vr="#ef9b0f",Cr=n=>rt(n)||!Q(n)&&!isNaN(parseFloat(n)),ft=n=>{var j,c;const{worker:t}=n,s=Ge(),[d,a]=v.exports.useState(!1),[o,i]=v.exports.useState(!1),[h,l]=v.exports.useState("setFlagged"),[u,f]=v.exports.useState(""),P=x=>parseFloat(x.performance)>3?vr:x.maintenance_mode||x.paused||x.flagged?kr:"background.paper",S=ye(x=>rr(x.id,x.data),{onSuccess:(x,F)=>{a(!0),s.invalidateQueries({queryKey:A.detail(F.id)}),s.invalidateQueries({queryKey:A.all})}}),G=(x,F)=>{F!=="clickaway"&&a(!1)};return r(b,{children:[e(he,{open:o,onClose:()=>i(!1),children:(x=>{var F;switch(x){case"setFlagged":return r(b,{children:[r($,{children:['Set "',t.name,'" as Flagged']}),r(K,{children:[e(k,{onClick:()=>{i(!1)},children:"Cancel"}),e(k,{onClick:()=>{i(!1)},children:"Confirm"})]})]});case"unsetFlagged":return r(b,{children:[r($,{children:['Unset "',t.name,'" as Flagged']}),r(K,{children:[e(k,{onClick:()=>i(!1),children:"Cancel"}),e(k,{onClick:()=>{i(!1)},children:"Confirm"})]})]});case"setMaintenance":return r(b,{children:[r($,{children:['Set "',t.name,'" Maintenance Mode']}),e(ae,{children:e(U,{value:u,onChange:E=>{f(E.target.value)},multiline:!0,autoFocus:!0,margin:"dense",id:"name",label:"Maintenance Reason (optional)",fullWidth:!0,variant:"standard"})}),r(K,{children:[e(k,{onClick:()=>i(!1),children:"Cancel"}),e(k,{onClick:()=>{const E={maintenance:!0};Q(u)||(E.maintenance_msg=u),S.mutate({id:t.id,data:E}),i(!1)},children:"Confirm"})]})]});case"unsetMaintenance":return r(b,{children:[r($,{children:['Unset "',t.name,'" Maintenance Mode']}),r(K,{children:[e(k,{onClick:()=>i(!1),children:"Cancel"}),e(k,{onClick:()=>{S.mutate({id:t.id,data:{maintenance:!1,maintenance_msg:""}}),i(!1)},children:"Confirm"})]})]});case"setPaused":return r(b,{children:[r($,{children:['Set "',t.name,'" Paused Mode']}),r(K,{children:[e(k,{onClick:()=>i(!1),children:"Cancel"}),e(k,{onClick:()=>{S.mutate({id:t.id,data:{paused:!0}}),i(!1)},children:"Confirm"})]})]});case"unsetPaused":return r(b,{children:[r($,{children:['Unset "',t.name,'" Paused Mode']}),r(K,{children:[e(k,{onClick:()=>i(!1),children:"Cancel"}),e(k,{onClick:()=>{S.mutate({id:t.id,data:{paused:!1}}),i(!1)},children:"Confirm"})]})]});case"listModels":return r(b,{children:[r($,{children:['"',t.name,'" Models']}),e(ae,{children:e(p,{variant:"body1",children:fe((F=t==null?void 0:t.models)!=null?F:[],[E=>E.toLowerCase()]).join(", ")})})]})}})(h)}),e(at,{open:d,autoHideDuration:6e3,onClose:G,anchorOrigin:{vertical:"top",horizontal:"right"},children:e(st,{onClose:G,severity:"success",sx:{width:"100%",border:"2px solid #a3a3a3"},children:"Changes successfully saved!"})}),e(m,{item:!0,xs:12,lg:6,xl:3,children:r(Jt,{sx:{backgroundColor:P(t)},children:[e(Yt,{avatar:t.online&&!t.paused&&!t.maintenance_mode&&!t.flagged?e(M,{title:"Worker Online",children:e(Xt,{sx:{color:We}})}):e(M,{title:"Worker Issue",children:e(en,{sx:{color:re}})}),action:r(g,{children:[t.paused?e(M,{title:"Worker Paused",children:e(Re,{sx:{color:re,mt:.5,mr:1}})}):null,t.maintenance_mode?e(M,{title:"Worker Maintenance",children:e(Ke,{sx:{color:re,mt:.5,mr:1}})}):null,t.flagged?e(M,{title:"User Flagged",children:e(tn,{sx:{color:re,mt:.5,mr:1}})}):null,t.trusted?e(M,{title:"Trusted Worker",children:e(nn,{sx:{color:We,mt:.5,mr:1}})}):null]}),title:e(p,{variant:"h5",children:rn(t.name,{length:30})}),subheader:t.id}),r(an,{children:[r(p,{variant:"body2",children:["Full Name: ",t.name]}),r(p,{variant:"body2",children:["Owner: ",t.owner]}),r(p,{variant:"body2",children:["Uptime: ",V.fromObject({seconds:t.uptime}).toHuman()]}),r(p,{variant:"body2",children:["Models Loaded: ",(c=(j=t==null?void 0:t.models)==null?void 0:j.length)!=null?c:"None"]}),r(p,{variant:"body2",children:["MPS Generated: ",t.megapixelsteps_generated]}),r(p,{variant:"body2",children:["Speed: ",t.performance," ",Cr(t.performance)?"MPS":null]}),r(p,{variant:"body2",children:["Threads: ",t.threads]}),r(p,{variant:"body2",children:["Requests Fulfilled: ",t.requests_fulfilled]}),r(p,{variant:"body2",children:["NSFW: ",t.nsfw?"true":"false"]})]}),r(sn,{disableSpacing:!0,children:[e(M,{title:"Show Worker Models",children:e(L,{onClick:()=>{l("listModels"),i(!0)},children:e(ln,{})})}),t.maintenance_mode?e(M,{title:"Unset Worker Maintenance",children:e(L,{onClick:()=>{l("unsetMaintenance"),i(!0)},children:e(on,{})})}):e(M,{title:"Set Worker Maintenance",children:e(L,{onClick:()=>{l("setMaintenance"),i(!0)},children:e(Ke,{})})}),t.paused?e(M,{title:"Unset Worker Pause",children:e(L,{onClick:()=>{l("unsetPaused"),i(!0)},children:e(cn,{})})}):e(M,{title:"Set Worker Pause",children:e(L,{onClick:()=>{l("setPaused"),i(!0)},children:e(Re,{})})})]})]})},t.id)]})},Sr=n=>{const{workerId:t}=n,{data:s}=C(A.detail(t),()=>nr(t),{staleTime:1e3*61,select:d=>({...d,performance:d.performance.replace(" megapixelsteps per second","")})});return s==null?e(b,{}):e(ft,{worker:s})},wr=n=>{const{userId:t}=n,{data:s}=C(W.detail(t),()=>Ee(t));return s==null?e(b,{}):s.worker_ids.length===0?e(m,{item:!0,md:12,lg:6,xl:4,children:e(p,{variant:"body1",children:"This user has no workers."})}):e(b,{children:s.worker_ids.map(d=>e(Sr,{workerId:d},d))})},[Ir,Pr,_r]=dn(),Fr=n=>n!=null&&"username"in n&&"id"in n,Or=()=>{const n=T(),[t,s]=v.exports.useState(-1),[d]=lt(t,400),{data:a}=C(W.all,ht),{data:o,refetch:i}=C(W.detail(d),()=>Ee(d),{enabled:!1});if(v.exports.useEffect(()=>{rt(d)&&d>=4770&&i()},[d]),a==null)return e(b,{});const h=(l,u)=>{xe(u)?n(ze(parseInt(u))):Fr(u)&&n(ze(u.id))};return e(ge,{disablePortal:!0,options:[...o!=null?[o]:[],...a!=null?a:[]],sx:{width:300},blurOnSelect:!0,autoHighlight:!0,freeSolo:!0,loading:a==null,loadingText:"Loading users...",getOptionLabel:l=>xe(l)?l:l.username,isOptionEqualToValue:(l,u)=>l.id===u.id,renderInput:l=>e(U,{...l,variant:"standard",label:"User Lookup",size:"small"}),onChange:h,onInputChange:(l,u)=>{s(un(u))}})},Dr=()=>{const n=y(i=>{var h;return(h=i.userPanel.selectedUser)!=null?h:-1}),t=Ge(),{data:s,isInitialLoading:d}=C(W.detail(n),()=>Ee(n),{refetchInterval:1e3*15}),a=ye(i=>mt(i.id,i.data),{onSuccess:(i,h)=>{t.invalidateQueries({queryKey:W.detail(h.id)})}}),o=Pr();return v.exports.useEffect(()=>{if(s!=null){const i={trusted:s.trusted,flagged:s.flagged,worker_invite:s.worker_invited.toString()};o.setValues(i),o.resetDirty(i)}},[d]),s==null?e(b,{}):e(hn,{component:g,children:e(pn,{size:"small",children:r(mn,{children:[r(z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Username"})}),e(O,{align:"right",children:r(p,{variant:"body1",children:[s.username," ",s.moderator?"(moderator)":""]})})]}),r(z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Trusted"})}),e(O,{align:"right",children:e(qe,{...o.getInputProps("trusted",{type:"checkbox"}),size:"small"})})]}),r(z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Flagged"})}),e(O,{align:"right",children:e(qe,{...o.getInputProps("flagged",{type:"checkbox"}),size:"small"})})]}),r(z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Worker Invites"})}),e(O,{align:"right",children:e(U,{variant:"standard",type:"number",...o.getInputProps("worker_invite"),sx:{maxWidth:"100px"},InputProps:{inputProps:{min:0},sx:{"& input":{p:"0",textAlign:"right"}}}})})]}),r(z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Worker Count"})}),e(O,{align:"right",children:e(p,{variant:"body1",children:s.worker_count})})]}),r(z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Kudos"})}),e(O,{align:"right",children:e(p,{variant:"body1",children:s.kudos})})]}),r(z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e(O,{component:"th",scope:"row",children:e(p,{variant:"body1",children:"Suspicious"})}),r(O,{sx:{display:"flex",flex:"1 1 0",alignItems:"center",justifyContent:"flex-end",flexDirection:"row"},children:[s.suspicious>0?e(Ue,{onClick:async()=>{const i={reset_suspicion:!0};a.mutate({id:n,data:i})},loading:a.isLoading,variant:"contained",color:"error",sx:{order:0,mr:4},children:"Reset"}):null,e(p,{sx:{order:1},variant:"body1",children:s.suspicious})]})]})]})})})},Tr=()=>{const n=Ge(),t=y(h=>h.userPanel.selectedUser),[s,d]=v.exports.useState(!1),a=_r({initialValues:{trusted:!1,flagged:!1,worker_invite:"0"}}),o=ye(h=>mt(h.id,h.data),{onSuccess:(h,l)=>{var f,P,S,G;n.setQueryData(W.detail(l.id),H=>H!=null?{...H,...h}:h);const u={trusted:(f=h.trusted)!=null?f:!1,flagged:(P=h.flagged)!=null?P:!1,worker_invite:(G=(S=h.worker_invite)==null?void 0:S.toString())!=null?G:"0"};Q(u)||(a.setValues(u),a.resetDirty(u)),d(!0)}}),i=(h,l)=>{l!=="clickaway"&&d(!1)};return r(le,{elevation:1,sx:{p:2,height:"100%"},children:[e(at,{open:s,autoHideDuration:6e3,onClose:i,anchorOrigin:{vertical:"top",horizontal:"right"},children:e(st,{onClose:i,severity:"success",sx:{width:"100%",border:"2px solid #a3a3a3"},children:"Changes successfully saved!"})}),r("form",{onSubmit:a.onSubmit((h,l)=>{if(t!=null){const u={trusted:h.trusted,flagged:h.flagged,worker_invite:parseInt(h.worker_invite)};o.mutate({id:t,data:u})}}),children:[r(g,{display:"flex",justifyContent:"space-between",children:[e(Or,{}),t!=null?r(g,{display:"flex",alignItems:"center",children:[a.isDirty()?e(k,{sx:{mr:2},variant:"contained",type:"submit",children:"Save"}):null,e(gn,{})]}):null]}),e(Ir,{form:a,children:e(g,{display:"flex",children:t!=null&&t!=-1?e(Dr,{}):null})})]})]})},Mr=()=>{const n=y(t=>t.userPanel.selectedUser);return r(m,{container:!0,spacing:2,children:[e(m,{item:!0,md:12,lg:6,xl:4,children:e(Tr,{})}),n!=null?e(wr,{userId:n}):null]})},Lr=()=>{const n=T(),t=y(i=>i.utilityPanel.prompt),{data:s,refetch:d,isFetching:a}=C(["promptCheck",t],()=>ar({filter_type:0,prompt:t}),{enabled:!1});return e(le,{elevation:1,sx:{p:2,height:"100%"},children:r(g,{children:[r(g,{display:"flex",justifyContent:"space-between",children:[e(p,{variant:"h4",children:"Prompt Checker"}),e(Ue,{onClick:()=>{Q(t)||d()},loading:a,variant:"contained",children:"Submit"})]}),e(U,{sx:{my:2},variant:"standard",multiline:!0,fullWidth:!0,value:t,onChange:i=>{n(Nn(i.target.value))},placeholder:"Enter prompt"}),s!=null?r(g,{pt:2,children:[r(p,{variant:"body1",children:["Suspicion: ",s.suspicion]}),s.suspicion>0?r(p,{variant:"body1",children:["Matches: ",JSON.stringify(s.matches)]}):null]}):null]})})},Wr=()=>e(m,{container:!0,spacing:2,children:e(m,{item:!0,md:12,lg:6,xl:4,children:e(Lr,{})})}),Ur=()=>{const n=y(o=>o.workerPanel.workerFilter),[t,s]=v.exports.useState(n!=null?n:""),[d]=lt(t,400),a=T();return v.exports.useEffect(()=>{a(jn(d))},[d]),e(U,{sx:{mr:2},label:"Search & Filter",variant:"outlined",value:t,onChange:o=>{s(o.target.value)}})},Gr=()=>{const n=T(),t=y(h=>h.workerPanel.sortKey),s=y(h=>h.workerPanel.order),d=y(h=>h.workerPanel.workerFilter),{data:a}=C(A.all,()=>$e(),{refetchInterval:1e3*30,select:h=>{const l=d==null?void 0:d.toLowerCase();return fe(h.filter(u=>{var f;return u.performance.includes("per form")||u.performance.includes("tokens")?!1:l==null?!0:u.name.toLowerCase().includes(l)||((f=u.owner)!=null?f:"").toLowerCase().includes(l)||u.id.toLowerCase().includes(l)}).map(u=>({...u,performance:u.performance.replace(" megapixelsteps per second","")})),[u=>{const f=u[t];return xe(f)?f.toLowerCase():f}],[s])}}),o=h=>{n(zn(h.target.value))},i=h=>{n(Vn(h))};return a==null?e(b,{}):r(b,{children:[r(g,{display:"flex",justifyContent:"space-between",pb:2,children:[r(g,{display:"flex",alignItems:"center",children:[e(p,{variant:"h5",sx:{mr:{xs:1,md:2}},children:"Worker List"}),e(Ur,{})]}),r(g,{display:"flex",justifyContent:"flex-end",alignItems:"center",children:[r(tt,{sx:{mr:1},children:[e(nt,{children:"Sort Key"}),r(Xe,{value:t,label:"Sort Key",onChange:o,sx:{".MuiSelect-select":{py:1}},children:[e(N,{value:"name",children:"Name"}),e(N,{value:"performance",children:"Performance"}),e(N,{value:"uptime",children:"Uptime"}),e(N,{value:"megapixelsteps_generated",children:"MPS Generated"})]})]}),s==="asc"?e(L,{onClick:()=>i("desc"),children:e(fn,{})}):e(L,{onClick:()=>i("asc"),children:e(xn,{})})]})]}),e(m,{container:!0,spacing:2,children:a.map(h=>e(ft,{worker:h},h.id))})]})},Qe=()=>{const{data:n,isLoading:t,error:s}=C(["mode"],dt);if(t)return e(p,{variant:"h6",children:"Loading Horde status ..."});if(n==null||s)return console.log("HordeStatus error",s),e(p,{variant:"h6",children:"Error loading Horde status"});const d=a=>a?e(Be,{sx:{color:re,ml:1}}):e(Be,{sx:{color:We,ml:1}});return r(me,{children:[r(q,{children:[e(we,{children:d(n.maintenance_mode)}),e(B,{primary:"Maintenance"})]}),r(q,{children:[e(we,{children:d(n.invite_only_mode)}),e(B,{primary:"Invite Only"})]}),n.raid_mode!=null?r(q,{children:[e(we,{children:d(n.raid_mode)}),e(B,{primary:"Raid"})]}):null]})},Ze=()=>{const{data:n,isLoading:t,error:s}=C(["performance"],ut);return t?e(p,{variant:"h6",children:"Loading Horde status ..."}):n==null||s?e(p,{variant:"h6",children:"Error loading Horde status"}):r(me,{children:[e(q,{children:e(B,{primary:`Queued Requests: ${n.queued_requests}`})}),e(q,{children:e(B,{primary:`Queued MPS: ${n.queued_megapixelsteps}`})}),e(q,{children:e(B,{primary:`Past Minute MPS: ${n.past_minute_megapixelsteps}`})}),e(q,{children:e(B,{primary:`Workers: ${n.worker_count}`})})]})},de=240,Er=()=>{const n=T(),t=y(d=>d.localState.sidebarOpen);return r(b,{children:[r(Ne,{variant:"temporary",open:t,onClose:()=>{n(ct(!t))},ModalProps:{keepMounted:!0},sx:{display:{xs:"block",md:"none"},width:de,flexShrink:0,"& .MuiDrawer-paper":{boxSizing:"border-box",width:de}},children:[e(Ie,{}),r(g,{sx:{overflow:"auto"},children:[e(Ze,{}),e(se,{}),e(Qe,{})]})]}),r(Ne,{variant:"permanent",sx:{display:{xs:"none",md:"block"},width:de,flexShrink:0,["& .MuiDrawer-paper"]:{width:de,boxSizing:"border-box"}},children:[e(Ie,{}),r(g,{sx:{overflow:"auto"},children:[e(Ze,{}),e(se,{}),e(Qe,{})]})]})]})},$r=()=>{const n=T(),t=y(d=>d.persist.selectedTab);return r(g,{display:"flex",children:[e(Er,{}),e(g,{display:"flex",flexDirection:"column",flex:"1 1 auto",children:r(yn,{value:t,children:[e(g,{sx:{borderBottom:1,borderColor:"divider"},children:r(bn,{onChange:(d,a)=>{a!="4"&&n(De(!1)),n(Gn(a))},"aria-label":"lab API tabs example",children:[e(te,{label:"User Lookup",value:"1"}),e(te,{label:"Workers",value:"2"}),e(te,{label:"Comparator",value:"3"}),e(te,{label:"Utilities",value:"4"}),e(te,{label:"Settings",value:"5"})]})}),e(ne,{value:"1",children:e(Mr,{})}),e(ne,{value:"2",children:e(Gr,{})}),e(ne,{value:"3",children:e(yr,{})}),e(ne,{value:"4",children:e(Wr,{})}),e(ne,{value:"5",children:e(br,{})})]})})]})},ue=()=>{const n=T(),t=y(d=>d.localState.sidebarOpen);return e(kn,{position:"sticky",sx:{zIndex:d=>d.zIndex.drawer+1},children:r(Ie,{children:[e(L,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:()=>{n(ct(!t))},sx:{mr:2,display:{md:"none"}},children:e(vn,{})}),e(p,{variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1},children:"Horde Control Tower"}),null]})})},Ar=async n=>{const t=window.document.createElement("canvas"),s=window.Image,d=(await Promise.allSettled([n].map(async o=>await new Promise((i,h)=>{let l;Cn(o,"src")?l=o:l={src:o};const u=new s;u.onerror=()=>h(new Error("Couldn't load image")),u.onload=()=>i({...l,img:u}),u.src=l.src,u.crossOrigin="anonymous"})))).filter(o=>o.status==="fulfilled").map(o=>o.value),a=t.getContext("2d");if(a==null)throw new Error("Couldn't create canvas context");{const o=i=>Math.max(...d.map(h=>{var l,u;return(u=(l=h==null?void 0:h.img)==null?void 0:l[i])!=null?u:0}));return t.width=o("width"),t.height=o("height"),d.forEach(i=>{var h,l;if(i!=null&&(a.globalAlpha=i.opacity!=null?i.opacity:1,i.img!=null))return a.drawImage(i.img,(h=i.x)!=null?h:0,(l=i.y)!=null?l:0)}),t.toDataURL("image/webp")}},Rr=n=>{const{gen:t,...s}=n,d=T();return C(["check",t.id],()=>lr(t.id),{refetchInterval:2e3,enabled:t.state==="check",onSuccess:a=>{if(t.state==="check"){let o=t.state;a.faulted?o="error":a.done&&(o="status"),d(pe({...t,state:o,check:a}))}}}),C(["status",t.id],()=>ir(t.id),{refetchInterval:!1,enabled:t.state==="status",onSuccess:async a=>{if(t.state==="status"){let o=t.state;if(a.faulted)o="error";else if(a.done){o="complete";const i=await Ar(a.generations[0].img);a.generations[0].img=i}d(pe({...t,state:o,status:a}))}}}),C(["delete",t.id],()=>or(t.id),{refetchInterval:!1,retry:!1,enabled:t.state==="delete",onSuccess:async a=>{d(pe({...t,state:"complete",status:a}))}}),e(b,{})},Kr=()=>{const n=y(t=>t.persist.imageGens);return Q(n)?e(b,{}):e(b,{children:n.map(t=>e(Rr,{gen:t},t.id))})},qr=()=>{const n=y(a=>a.persist.apikey),{data:t,refetch:s,isLoading:d}=C(["findUser"],()=>tr(n),{enabled:!Q(n),retry:1});return v.exports.useEffect(()=>{s()},[n]),d?r(g,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ue,{}),e(g,{sx:{display:"flex",flex:"1 1 auto"},justifyContent:"center",alignItems:"center",children:e(Ye,{})})]}):Q(n)||t==null?r(g,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ue,{}),r(g,{display:"flex",flex:"1 1 auto",flexDirection:"column",justifyContent:"center",alignItems:"center",children:[e(p,{variant:"h4",children:"Please enter your API key."}),e(gt,{})]})]}):t.moderator?r(g,{sx:{display:"flex",flexDirection:"column"},children:[e(Kr,{}),e(cr,{}),e(ue,{}),e($r,{})]}):r(g,{display:"flex",flexDirection:"column",sx:{height:"100%"},children:[e(ue,{}),e(g,{sx:{display:"flex",flex:"1 1 auto"},justifyContent:"center",alignItems:"center",children:e(p,{variant:"h4",children:"Sorry, you really need to be a moderator to access these utilities :("})})]})};V.prototype.__toHuman__=V.prototype.toHuman;V.prototype.toHuman=function(n={stripZeroUnits:"all"}){let t=this.normalize(),s=[],d=typeof n.precision=="object"?V.fromObject(n.precision):V.fromMillis(0),a=t;const o=["years","months","days","hours","minutes","seconds","milliseconds"];let i,h;n.smallestUnit&&(i=o.indexOf(n.smallestUnit)),n.biggestUnit&&(h=o.indexOf(n.biggestUnit)),(!i||!(i>=0&&i<o.length))&&(i=o.indexOf("seconds")),(!h||!(h<=i&&h<o.length))&&(h=o.indexOf("years"));for(let l of o.slice(h,i+1)){if(a.as(l)>=1){s.push(l);let f={};if(f[l]=Math.floor(a.as(l)),a=a.minus(V.fromObject(f)).normalize(),a<d)break}if(n.maxUnits&&s.length>=n.maxUnits)break}if(t=t.minus(a).normalize(),t=t.shiftTo(...s),n.stripZeroUnits=="all")s=s.filter(l=>t.values[l]>0);else if(n.stripZeroUnits=="end"){let l=!0;s=s.reverse().filter(u=>l?t.values[u]==0?!1:(l=!1,!0):!0)}return s.length||s.push(o[i]),t.shiftTo(...s).__toHuman__(n)};const Br=Sn({key:"mui",prepend:!0}),Nr=wn({palette:{mode:"dark"}}),Hr=new In({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});Pn(document.getElementById("root")).render(e(_n,{value:Br,children:r(Fn,{theme:Nr,children:[e(On,{}),r(Dn,{client:Hr,children:[e(Tn,{store:be,children:e(Mn,{loading:null,persistor:Xn,children:e(qr,{})})}),null]})]})}));
