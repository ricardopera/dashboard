(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{180:function(e,t,r){},181:function(e,t,r){"use strict";r.r(t);var a=r(0),c=r(32),n=r.n(c),s=(r(89),r(10)),l=r(31),i=r(1);var o=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Page 1"}),Object(i.jsx)("p",{children:"I bring the sauce."})]})},d=r(4),u=r.n(d),b=r(6),h=r(12),j=r(34),f=r(82),p=r(18),O=r(184),x="light",g=null,m=new f.a({baseUrl:"https://charts.mongodb.com/charts-saude-ualvx"}),v=m.createChart({chartId:"147fe4a4-cd35-462c-aa79-8925840b30d4",height:"600px",theme:x,background:"transparent"}),k=m.createChart({chartId:"3420c4f9-1974-4df4-9912-750879601b97",height:"600px",theme:x,background:"transparent"}),w=m.createChart({chartId:"e01702d3-d246-4df9-821e-091cab268832",height:"500px",theme:x,background:"transparent"}),y=m.createChart({chartId:"c9396b9b-be3e-488f-a07e-7ca6a82b24d6",height:"150px",theme:x,background:"transparent"}),C=m.createChart({chartId:"b3ac1dea-df55-4d59-8474-f4f7a2bbe7d3",height:"150px",theme:x,background:"transparent"}),S=m.createChart({chartId:"ec432340-d756-4992-b0c4-742c3a24b437",height:"300px",theme:x,background:"transparent"}),N=m.createChart({chartId:"70a55ce1-46bc-4005-8fd2-8eb2d61132c0",height:"300px",theme:x,background:"transparent"}),T=m.createChart({chartId:"f11f894d-9040-4c20-aa30-487323217dc2",height:"400px",theme:x,background:"transparent"}),F=m.createChart({chartId:"bb264786-e2df-4c17-b6e3-ff1e40b5df4a",height:"400px",theme:x,background:"transparent"}),I=m.createChart({chartId:"ec1cffd7-508c-48cd-828a-7ad4066f377b",height:"600px",theme:x,background:"transparent"}),M=m.createChart({chartId:"2cc73c91-fd2b-4353-9d00-479da43c1f8b",height:"600px",theme:x,background:"transparent"}),E=m.createChart({chartId:"62db981e-481b-47f2-947e-8318afcd6b33",height:"600px",theme:x,background:"transparent"}),D=m.createChart({chartId:"63ae3627-ff4f-44e5-83cd-d755b48b436a",height:"500px",theme:x,background:"transparent"}),R=m.createChart({chartId:"f39c46f7-16e2-4994-8141-c9111f680475",height:"500px",theme:x,background:"transparent"}),L=m.createChart({chartId:"c08bc76a-f635-42ce-8b8a-be6f418d9837",height:"500px",theme:x,background:"transparent"});function P(e){var t=e.scroll,r=e.dark,c=e.handleToggleSidebar,n=(e.handleDefaultf,e.handleScroll,e.options_filters,Object(O.a)()),l=Object(a.useRef)(null),o=Object(a.useRef)(null),d=Object(a.useRef)(null),f=Object(a.useRef)(null),x=Object(a.useRef)(null),m=Object(a.useRef)(null),P=Object(a.useRef)(null),$=Object(a.useRef)(null),A=Object(a.useRef)(null),J=Object(a.useRef)(null),B=Object(a.useRef)(null),_=Object(a.useRef)(null),z=Object(a.useRef)(null),W=Object(a.useRef)(null),Z=Object(a.useRef)(null),V=Object(a.useState)(r),U=Object(s.a)(V,2),G=U[0],H=U[1],Q=[{value:"",label:"Todos"},{value:"2007",label:"2007"},{value:"2008",label:"2008"},{value:"2009",label:"2009"},{value:"2010",label:"2010"},{value:"2011",label:"2011"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2013",label:"2013"},{value:"2014",label:"2014"},{value:"2015",label:"2015"},{value:"2016",label:"2016"},{value:"2017",label:"2017"},{value:"2018",label:"2018"},{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"}],q=[{value:"TJSC",label:"TJSC"},{value:"JFSC",label:"JFSC"}];Object(a.useEffect)((function(){r!==G&&(H(r),console.log(r),console.log(G),console.log("dark"),v.setTheme(r?"dark":"light"),k.setTheme(r?"dark":"light"),w.setTheme(r?"dark":"light"),y.setTheme(r?"dark":"light"),C.setTheme(r?"dark":"light"),S.setTheme(r?"dark":"light"),N.setTheme(r?"dark":"light"),I.setTheme(r?"dark":"light"),M.setTheme(r?"dark":"light"),E.setTheme(r?"dark":"light"),D.setTheme(r?"dark":"light"),R.setTheme(r?"dark":"light"),L.setTheme(r?"dark":"light"),T.setTheme(r?"dark":"light"),F.setTheme(r?"dark":"light"))})),window.onload=function(e){var t=document.getElementsByClassName("faixa-ano")[0].offsetTop,r=document.getElementsByClassName("faixa-ano")[0],a=document.getElementsByClassName("divOne")[0];document.addEventListener("wheel",(function(){console.log(r.getBoundingClientRect().top),a.getBoundingClientRect().top<25-t?(r.style.position="fixed",r.style.paddingLeft="100px"):(r.style.position="initial",r.style.paddingLeft="initial")}))};var K=function(e){var t=document.getElementById("filtro-ano").value,r=Object(h.a)(Object(h.a)({},g),e.selectionFilter);!r.data_distribuicao&&t&&(r=Object(h.a)(Object(h.a)({},r),{data_distribuicao:{$gte:new Date("".concat(t,"-01-01T00:00:00.000Z")),$lte:new Date("".concat(t,"-12-31T00:00:00.000Z"))}})),console.log(r);var a="";w.setFilter(r),a=t?"processos com o CID-10 ".concat(JSON.stringify(e.selectionFilter["cid.codigo"]),": ").concat(JSON.stringify(e.selectionFilter["cid.doenca"])," de ").concat(t):"processos com o CID-10 ".concat(JSON.stringify(e.selectionFilter["cid.codigo"]),": ").concat(JSON.stringify(e.selectionFilter["cid.doenca"])),console.log(g),document.getElementById("filterMessage").innerText=a},X=function(e){F.setFilter(e.selectionFilter),console.log(JSON.stringify(e)),document.getElementById("filterANO").innerText="processos apenas de ".concat(e.data.cell.value)},Y=function(e){R.setFilter(e.selectionFilter),console.log(JSON.stringify(e)),document.getElementById("filterANO").innerText="processos apenas de ".concat(e.data.cell.value)},ee=function(e){var t=document.getElementById("filtro-ano").value;g=t?Object(h.a)(Object(h.a)({},e.selectionFilter),{data_distribuicao:{$gte:new Date("".concat(t,"-01-01T00:00:00.000Z")),$lte:new Date("".concat(t,"-12-31T00:00:00.000Z"))}}):e.selectionFilter,console.log(g),v.setFilter(g),w.setFilter(g),console.log(JSON.stringify(e))},te={includes:[{types:["text"]}]},re={includes:[{roles:["mark"]}]},ae={includes:[{types:["text"]},{roles:["mark"]}]},ce=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.render(t);case 3:return e.next=5,v.addEventListener("click",K,te);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),ne=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),se=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),le=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),ie=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),oe=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.render(t);case 3:return e.next=5,S.addEventListener("click",ee,ae);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),de=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.render(t);case 3:return e.next=5,N.addEventListener("click",ee,ae);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),ue=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),be=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),he=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),je=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),fe=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),pe=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.render(t);case 3:return e.next=5,D.addEventListener("click",Y,re);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Oe=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.render(t);case 3:return e.next=5,R.addEventListener("click",X,te);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),xe=Object(a.useCallback)(function(){var e=Object(b.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),ge=Object(a.useCallback)((function(e){e&&ce(e),l.current=e}),[ce]),me=Object(a.useCallback)((function(e){e&&ne(e),o.current=e}),[ne]),ve=Object(a.useCallback)((function(e){e&&se(e),d.current=e}),[se]),ke=Object(a.useCallback)((function(e){e&&le(e),f.current=e}),[le]),we=Object(a.useCallback)((function(e){e&&ie(e),x.current=e}),[ie]),ye=Object(a.useCallback)((function(e){e&&oe(e),m.current=e}),[oe]),Ce=Object(a.useCallback)((function(e){e&&de(e),P.current=e}),[de]),Se=Object(a.useCallback)((function(e){e&&ue(e),$.current=e}),[ue]),Ne=Object(a.useCallback)((function(e){e&&be(e),A.current=e}),[be]),Te=Object(a.useCallback)((function(e){e&&he(e),J.current=e}),[he]),Fe=Object(a.useCallback)((function(e){e&&je(e),B.current=e}),[je]),Ie=Object(a.useCallback)((function(e){e&&fe(e),_.current=e}),[fe]),Me=Object(a.useCallback)((function(e){e&&pe(e),z.current=e}),[pe]),Ee=Object(a.useCallback)((function(e){e&&Oe(e),W.current=e}),[Oe]),De=Object(a.useCallback)((function(e){e&&xe(e),Z.current=e}),[xe]),Re=function(e){},Le=function(e){var t=[];e.forEach((function(e){var r=e.value;e.index,e.array;console.log(r.value),console.log(r),t.push({data_distribuicao:{$gte:new Date("".concat(r,"-01-01T00:00:00.000Z")),$lte:new Date("".concat(r,"-12-31T00:00:00.000Z"))}})})),console.log(t),g={},t.length>0?v.setFilter({$or:t}):v.setFilter({}),t.length>0?k.setFilter({$or:t}):k.setFilter({}),t.length>0?w.setFilter({$or:t}):w.setFilter({}),t.length>0?y.setFilter({$or:t}):y.setFilter({}),t.length>0?C.setFilter({$or:t}):C.setFilter({}),t.length>0?S.setFilter({$or:t}):S.setFilter({}),t.length>0?N.setFilter({$or:t}):N.setFilter({}),t.length>0?I.setFilter({$or:t}):S.setFilter({}),t.length>0?N.setFilter({$or:t}):N.setFilter({}),t.length>0?D.setFilter({$or:t}):D.setFilter({}),t.length>0?R.setFilter({$or:t}):R.setFilter({}),t.length>0?T.setFilter({$or:t}):T.setFilter({}),t.length>0?F.setFilter({$or:t}):F.setFilter({})};return Object(i.jsxs)("div",{className:"divOne",children:[Object(i.jsx)("div",{className:"btn-toggle",onClick:function(){return c(!0)},children:Object(i.jsx)(p.a,{style:r?{color:"white"}:{color:"#353535"}})}),Object(i.jsxs)("header",{children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)(p.d,{style:{width:"50px",color:"#00b193"}}),n.formatMessage({id:"title"})]}),Object(i.jsx)("h4",{children:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed"})]}),Object(i.jsx)("div",{className:"body-content2",children:Object(i.jsxs)("header",{className:"faixa-ano",id:"faixa-ano",style:t?{position:"fixed"}:{position:""},children:[Object(i.jsxs)("div",{style:{display:"flex","border-top":"5px solid rgba(255,255,255,.0)"},children:[Object(i.jsxs)("div",{style:{display:"block",width:"100%","border-left":"5px solid rgba(255,255,255,.0)","border-right":"5px solid rgba(255,255,255,.0)"},children:[Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Ano de distribui\xe7\xe3o"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(j.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o ano",options:Q,onChange:Le,style:{"border-left":""}})})]}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Tribunal"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(j.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o tribunal",options:q,onChange:Re})})]})]}),Object(i.jsxs)("div",{style:{display:"block",width:"100%","border-left":"5px solid rgba(255,255,255,.0)","border-right":"5px solid rgba(255,255,255,.0)"},children:[Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Tipo de solicita\xe7\xe3o"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(j.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o ano",options:Q,onChange:Le})})]}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Procurador"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(j.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o tribunal",options:q,onChange:Re})})]})]})]}),Object(i.jsxs)("h4",{children:["Mostrando ",Object(i.jsx)("span",{id:"filterMessage",children:"todos os processos"})]})]})}),Object(i.jsx)("div",{className:"body-content"}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chart1",ref:ge}),Object(i.jsx)("div",{className:"chart",id:"chartMed",ref:me})]}),Object(i.jsx)("div",{className:"body-content",children:Object(i.jsx)("div",{className:"chart",id:"chart2",ref:ve})}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"QUANTIDADE E VALOR DOS PROCESSOS"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chartQuantidade",ref:ke}),Object(i.jsx)("div",{className:"chart",id:"chartValor",ref:we})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"COMPET\xcaNCIA"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chart3",ref:ye}),Object(i.jsx)("div",{className:"chart",id:"chart4",ref:Ce})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"TIPOS DE SOLICITA\xc7\xd5ES"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chart8",ref:Se}),Object(i.jsx)("div",{className:"chart",id:"chart7",ref:Ne})]}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chartTabelaCID",ref:Te}),Object(i.jsx)("div",{className:"chart",id:"chartTabelaTipos",ref:Fe}),Object(i.jsx)("div",{className:"chart",id:"chartTabelaAno",ref:Ie})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"PROCESSOS DE MEDICAMENTOS"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chartPizzaMedicamentos",ref:Me}),Object(i.jsx)("div",{className:"chart",id:"chartPizzaDoencas",ref:Ee})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"PROCESSOS DE CIRURGIA"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"body-content",children:Object(i.jsx)("div",{className:"chart",id:"chartPizzaDoencasCirurgia",ref:De})}),Object(i.jsxs)("footer",{children:[Object(i.jsxs)("small",{children:["\xa9 2021 made by -"," ",Object(i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://azouaoui.netlify.com",children:"Ricardo Pereira"})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"social-bagdes",children:[Object(i.jsx)("a",{href:"https://github.com/ricardopera",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{alt:"GitHub followers",src:"https://img.shields.io/github/followers/ricardopera?label=github&style=social"})}),Object(i.jsx)("a",{href:"https://twitter.com/ricardoru",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{alt:"Twitter Follow",src:"https://img.shields.io/twitter/follow/ricardoru?label=twitter&style=social"})})]})]})]})}var $=r(20),A=r.p+"static/media/bg1.6eea880b.jpg",J=function(e){var t=e.dark,r=e.image,a=e.collapsed,c=e.toggled,n=e.handleToggleSidebar,s=e.handleOnMouseEnter,o=e.handleOnMouseLeave,d=e.handleImageChange,u=e.handleDarkMode,b=Object(O.a)();return Object(i.jsxs)($.c,{image:!!r&&A,collapsed:a,toggled:c,breakPoint:"md",onToggle:n,onMouseEnter:s,onMouseLeave:o,styles:{position:"sticky"},children:[Object(i.jsx)($.f,{children:Object(i.jsx)("div",{style:{padding:"24px",textTransform:"uppercase",fontWeight:"bold",fontSize:14,letterSpacing:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:b.formatMessage({id:"sidebarTitle"})})}),Object(i.jsxs)($.d,{children:[Object(i.jsxs)($.a,{iconShape:"circle",style:{fontWeight:"bold",letterSpacing:"0.5px"},children:[Object(i.jsx)($.b,{icon:Object(i.jsx)(p.d,{}),suffix:Object(i.jsx)("span",{className:"badge red",children:b.formatMessage({id:"new"})}),children:Object(i.jsx)(l.b,{to:"/dashboard",children:b.formatMessage({id:"health"})})}),Object(i.jsx)($.b,{icon:Object(i.jsx)(p.b,{}),suffix:Object(i.jsx)("span",{className:"badge red",children:b.formatMessage({id:"new"})}),children:Object(i.jsx)(l.b,{to:"/page-1",children:"Creche"})}),Object(i.jsx)($.b,{icon:Object(i.jsx)(p.e,{}),suffix:Object(i.jsx)("span",{className:"badge red",children:b.formatMessage({id:"new"})}),children:"Usucapi\xe3o"})]}),Object(i.jsxs)($.a,{iconShape:"circle",children:[Object(i.jsx)($.b,{icon:t?Object(i.jsx)(p.g,{}):Object(i.jsx)(p.i,{}),onClick:u,children:b.formatMessage(t?{id:"dark"}:{id:"light"})}),Object(i.jsx)($.b,{icon:r?Object(i.jsx)(p.f,{}):Object(i.jsx)(p.h,{}),onClick:d,children:b.formatMessage({id:"image"})})]})]}),Object(i.jsx)($.e,{style:{textAlign:"center"},children:Object(i.jsx)("div",{className:"sidebar-btn-wrapper",style:{padding:"20px 24px"},children:Object(i.jsxs)("a",{href:"https://github.com/ricardopera/dashboard",target:"_blank",className:"sidebar-btn",rel:"noopener noreferrer",children:[Object(i.jsx)(p.c,{}),Object(i.jsxs)("span",{children:[" ",b.formatMessage({id:"viewSource"})]})]})})})]})};var B=r(8);var _=function(e){var t=Object(a.useState)(!1),r=Object(s.a)(t,2),c=(r[0],r[1],Object(a.useState)(!1)),n=Object(s.a)(c,2),l=n[0],d=n[1],u=Object(a.useState)(!0),b=Object(s.a)(u,2),j=b[0],f=b[1],p=Object(a.useState)(!1),O=Object(s.a)(p,2),x=O[0],g=O[1],m=Object(a.useState)(!1),v=Object(s.a)(m,2),k=v[0],w=v[1],y=Object(a.useState)(!1),C=Object(s.a)(y,2);return C[0],C[1],Object(i.jsxs)("div",{className:"app ".concat(x?"toggled":""),children:[Object(i.jsx)(J,{dark:k,image:j,collapsed:l,toggled:x,handleToggleSidebar:function(e){g(e)},handleOnMouseEnter:function(){console.log("mouse enter"),d(!1)},handleOnMouseLeave:function(){console.log("mouse leave"),d(!0)},handleImageChange:function(){f(!j)},handleDarkMode:function(){w(!k),k?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")}}),Object(i.jsx)("main",{children:Object(i.jsxs)(B.c,{children:[Object(i.jsx)(B.a,{path:"/dashboard",render:function(e){return Object(i.jsx)(P,Object(h.a)(Object(h.a)({},e),{},{dark:k}))}}),Object(i.jsx)(B.a,{path:"/page-1",render:function(e){return Object(i.jsx)(o,Object(h.a)(Object(h.a)({},e),{},{dark:k}))}})]})})]})},z=r(185),W={ar:{title:"\u0631\u064a\u0627\u0643\u062a \u067e\u0631\u0648 \u0633\u0627\u064a\u062f \u0628\u0627\u0631",sidebarTitle:"\u067e\u0631\u0648 \u0633\u0627\u064a\u062f \u0628\u0627\u0631",description:"\u0634\u0631\u064a\u0637 \u062c\u0627\u0646\u0628\u064a \u0645\u0639 \u0642\u0648\u0627\u0626\u0645 \u0645\u0646\u0633\u062f\u0644\u0629 \u0648\u0639\u062f\u062f \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0641\u0631\u0639\u064a\u0629 \u0627\u0644\u0645\u062a\u062f\u0627\u062e\u0644\u0629",dashboard:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",components:"\u0645\u0643\u0648\u0646\u0627\u062a",dropdown:"\u0627\u0633\u0642\u0627\u0637",submenu:"\u0642\u0627\u0626\u0645\u0629 \u0641\u0631\u0639\u064a\u0629",multiLevel:"\u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a",collapsed:"\u0627\u0646\u0637\u0648\u0649",rtl:"\u0631 \u062a \u0644",image:"\u0635\u0648\u0631\u0629 \u0627\u0644\u062e\u0644\u0641\u064a\u0629",new:"\u062c\u062f\u064a\u062f",withPrefix:"\u0645\u0639 \u0627\u0644\u0628\u0627\u062f\u0626\u0629",withSuffix:"\u0645\u0639 \u0627\u0644\u0644\u0627\u062d\u0642\u0629",viewSource:"\u0639\u0631\u0636 \u0627\u0644\u0643\u0648\u062f"},en:{title:"Dashboar dos processos de sa\xfade em tr\xe2mite",sidebarTitle:"Sa\xfade",description:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed",dashboard:"Dashboard",components:"Components",dropdown:"Dropdown",submenu:"Submenu",multiLevel:"Multi Level",collapsed:"Collapsed",rtl:"RTL",image:"Background image",new:"NEW",withPrefix:"With Prefix",withSuffix:"With Suffix",viewSource:"View Source",dark:"Dark mode",light:"Light mode",health:"Health"},pt:{title:"Dashboard dos processos de sa\xfade em tr\xe2mite",sidebarTitle:"Dashboads",description:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed",dashboard:"Dashboard",components:"Components",dropdown:"Dropdown",submenu:"Submenu",multiLevel:"Multi Level",collapsed:"Collapsed",rtl:"RTL",image:"Imagem de fundo",new:"NOVO",withPrefix:"With Prefix",withSuffix:"With Suffix",viewSource:"View Source",dark:"Modo escuro",light:"Mode claro",health:"Sa\xfade"}};r(180);var Z=function(){var e=Object(a.useState)("pt"),t=Object(s.a)(e,2),r=t[0];return t[1],Object(i.jsx)(z.a,{locale:r,messages:W[r],children:Object(i.jsx)(l.a,{forceRefresh:!0,children:Object(i.jsx)(_,{})})})};n.a.render(Object(i.jsx)(Z,{}),document.getElementById("root"))},89:function(e,t,r){}},[[181,1,2]]]);
//# sourceMappingURL=main.14d327ec.chunk.js.map