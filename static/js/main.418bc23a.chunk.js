(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(32),n=a.n(c),s=(a(90),a(7)),l=a(31),i=a(1);var o=function(e){return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Page 1"}),Object(i.jsx)("p",{children:"I bring the sauce."})]})},d=a(4),b=a.n(d),u=a(6),h=a(8),j=a(50),f=a(34),p=a(83),O=a(18),x=a(185),m="light",g=new p.a({baseUrl:"https://charts.mongodb.com/charts-saude-ualvx"}),v=g.createChart({chartId:"147fe4a4-cd35-462c-aa79-8925840b30d4",height:"600px",theme:m,background:"transparent"}),k=g.createChart({chartId:"3420c4f9-1974-4df4-9912-750879601b97",height:"600px",theme:m,background:"transparent"}),w=g.createChart({chartId:"e01702d3-d246-4df9-821e-091cab268832",height:"500px",theme:m,background:"transparent"}),C=g.createChart({chartId:"c9396b9b-be3e-488f-a07e-7ca6a82b24d6",height:"150px",theme:m,background:"transparent"}),y=g.createChart({chartId:"b3ac1dea-df55-4d59-8474-f4f7a2bbe7d3",height:"150px",theme:m,background:"transparent"}),S=g.createChart({chartId:"ec432340-d756-4992-b0c4-742c3a24b437",height:"300px",theme:m,background:"transparent"}),F=g.createChart({chartId:"70a55ce1-46bc-4005-8fd2-8eb2d61132c0",height:"300px",theme:m,background:"transparent"}),N=g.createChart({chartId:"f11f894d-9040-4c20-aa30-487323217dc2",height:"400px",theme:m,background:"transparent"}),T=g.createChart({chartId:"bb264786-e2df-4c17-b6e3-ff1e40b5df4a",height:"400px",theme:m,background:"transparent"}),I=g.createChart({chartId:"ec1cffd7-508c-48cd-828a-7ad4066f377b",height:"600px",theme:m,background:"transparent"}),E=g.createChart({chartId:"2cc73c91-fd2b-4353-9d00-479da43c1f8b",height:"600px",theme:m,background:"transparent"}),M=g.createChart({chartId:"62db981e-481b-47f2-947e-8318afcd6b33",height:"600px",theme:m,background:"transparent"}),R=g.createChart({chartId:"63ae3627-ff4f-44e5-83cd-d755b48b436a",height:"500px",theme:m,background:"transparent"}),D=g.createChart({chartId:"f39c46f7-16e2-4994-8141-c9111f680475",height:"500px",theme:m,background:"transparent"}),L=g.createChart({chartId:"c08bc76a-f635-42ce-8b8a-be6f418d9837",height:"500px",theme:m,background:"transparent"});function P(e){var t=e.scroll,a=e.dark,c=e.handleToggleSidebar,n=(e.handleDefaultf,e.handleScroll,e.options_filters,Object(x.a)()),l=Object(r.useRef)(null),o=Object(r.useRef)(null),d=Object(r.useRef)(null),p=Object(r.useRef)(null),m=Object(r.useRef)(null),g=Object(r.useRef)(null),P=Object(r.useRef)(null),A=Object(r.useRef)(null),$=Object(r.useRef)(null),B=Object(r.useRef)(null),J=Object(r.useRef)(null),z=Object(r.useRef)(null),_=Object(r.useRef)(null),W=Object(r.useRef)(null),V=Object(r.useRef)(null),U=Object(r.useState)(a),Z=Object(s.a)(U,2),G=Z[0],H=Z[1],Q=Object(r.useState)({}),q=Object(s.a)(Q,2),K=q[0],X=(q[1],Object(r.useState)({})),Y=Object(s.a)(X,2),ee=Y[0],te=Y[1],ae=Object(r.useState)({}),re=Object(s.a)(ae,2),ce=re[0],ne=re[1],se=Object(r.useState)({}),le=Object(s.a)(se,2),ie=le[0],oe=le[1],de=Object(r.useState)({}),be=Object(s.a)(de,2),ue=be[0],he=(be[1],Object(r.useState)({})),je=Object(s.a)(he,2),fe=(je[0],je[1]),pe=Object(r.useState)({}),Oe=Object(s.a)(pe,2),xe=(Oe[0],Oe[1],[{value:"TJSC",label:"TJSC"},{value:"JFSC",label:"JFSC"}]);Object(r.useEffect)((function(){a!==G&&(H(a),console.log(a),console.log(G),console.log("dark"),v.setTheme(a?"dark":"light"),k.setTheme(a?"dark":"light"),w.setTheme(a?"dark":"light"),C.setTheme(a?"dark":"light"),y.setTheme(a?"dark":"light"),S.setTheme(a?"dark":"light"),F.setTheme(a?"dark":"light"),I.setTheme(a?"dark":"light"),E.setTheme(a?"dark":"light"),M.setTheme(a?"dark":"light"),R.setTheme(a?"dark":"light"),D.setTheme(a?"dark":"light"),L.setTheme(a?"dark":"light"),N.setTheme(a?"dark":"light"),T.setTheme(a?"dark":"light"))})),window.onload=function(e){var t=document.getElementsByClassName("faixa-ano")[0].offsetTop,a=document.getElementsByClassName("faixa-ano")[0],r=document.getElementsByClassName("divOne")[0];document.addEventListener("wheel",(function(){console.log(a.getBoundingClientRect().top),r.getBoundingClientRect().top<25-t?(a.style.position="fixed",a.style.paddingLeft="100px"):(a.style.position="initial",a.style.paddingLeft="initial")}))};var me=function(e){fe(Object(h.a)({},e.selectionFilter));var t=Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)(Object(h.a)({},e.selectionFilter),ee),ce),ie),ue);console.log(e.selectionFilter),console.log(t);var a="";w.setFilter(t),a="processos com o CID-10 ".concat(JSON.stringify(e.selectionFilter["cid.codigo"]),": ").concat(JSON.stringify(e.selectionFilter["cid.doenca"])),document.getElementById("filterMessage").innerText=a},ge=function(e){T.setFilter(e.selectionFilter),console.log(JSON.stringify(e)),document.getElementById("filterANO").innerText="processos apenas de ".concat(e.data.cell.value)},ve=function(e){D.setFilter(e.selectionFilter),console.log(JSON.stringify(e)),document.getElementById("filterANO").innerText="processos apenas de ".concat(e.data.cell.value)},ke=function(e){var t=document.getElementById("filtro-ano").value;t?(Object(h.a)(Object(h.a)({},e.selectionFilter),{data_distribuicao:{$gte:new Date("".concat(t,"-01-01T00:00:00.000Z")),$lte:new Date("".concat(t,"-12-31T00:00:00.000Z"))}}),Object(j.a)("filter")):(e.selectionFilter,Object(j.a)("filter")),console.log(K),v.setFilter(K),w.setFilter(K),console.log(JSON.stringify(e))},we={includes:[{types:["text"]}]},Ce={includes:[{roles:["mark"]}]},ye={includes:[{types:["text"]},{roles:["mark"]}]},Se=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.render(t);case 3:return e.next=5,v.addEventListener("click",me,we);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Fe=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ne=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Te=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ie=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ee=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.render(t);case 3:return e.next=5,S.addEventListener("click",ke,ye);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Me=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F.render(t);case 3:return e.next=5,F.addEventListener("click",ke,ye);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Re=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),De=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Le=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Pe=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ae=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),$e=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.render(t);case 3:return e.next=5,R.addEventListener("click",ve,Ce);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Be=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.render(t);case 3:return e.next=5,D.addEventListener("click",ge,we);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Je=Object(r.useCallback)(function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),ze=Object(r.useCallback)((function(e){e&&Se(e),l.current=e}),[Se]),_e=Object(r.useCallback)((function(e){e&&Fe(e),o.current=e}),[Fe]),We=Object(r.useCallback)((function(e){e&&Ne(e),d.current=e}),[Ne]),Ve=Object(r.useCallback)((function(e){e&&Te(e),p.current=e}),[Te]),Ue=Object(r.useCallback)((function(e){e&&Ie(e),m.current=e}),[Ie]),Ze=Object(r.useCallback)((function(e){e&&Ee(e),g.current=e}),[Ee]),Ge=Object(r.useCallback)((function(e){e&&Me(e),P.current=e}),[Me]),He=Object(r.useCallback)((function(e){e&&Re(e),A.current=e}),[Re]),Qe=Object(r.useCallback)((function(e){e&&De(e),$.current=e}),[De]),qe=Object(r.useCallback)((function(e){e&&Le(e),B.current=e}),[Le]),Ke=Object(r.useCallback)((function(e){e&&Pe(e),J.current=e}),[Pe]),Xe=Object(r.useCallback)((function(e){e&&Ae(e),z.current=e}),[Ae]),Ye=Object(r.useCallback)((function(e){e&&$e(e),_.current=e}),[$e]),et=Object(r.useCallback)((function(e){e&&Be(e),W.current=e}),[Be]),tt=Object(r.useCallback)((function(e){e&&Je(e),V.current=e}),[Je]);return Object(i.jsxs)("div",{className:"divOne",children:[Object(i.jsx)("div",{className:"btn-toggle",onClick:function(){return c(!0)},children:Object(i.jsx)(O.a,{style:a?{color:"white"}:{color:"#353535"}})}),Object(i.jsxs)("header",{children:[Object(i.jsxs)("h1",{children:[Object(i.jsx)(O.d,{style:{width:"50px",color:"#00b193"}}),n.formatMessage({id:"title"})]}),Object(i.jsx)("h4",{children:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed"})]}),Object(i.jsx)("div",{className:"body-content2",children:Object(i.jsxs)("header",{className:"faixa-ano",id:"faixa-ano",style:t?{position:"fixed"}:{position:""},children:[Object(i.jsxs)("div",{style:{display:"flex","border-top":"5px solid rgba(255,255,255,.0)"},children:[Object(i.jsxs)("div",{style:{display:"block",width:"100%","border-left":"5px solid rgba(255,255,255,.0)","border-right":"5px solid rgba(255,255,255,.0)"},children:[Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Ano de distribui\xe7\xe3o"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(f.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o ano",options:[{value:"",label:"Todos"},{value:"2007",label:"2007"},{value:"2008",label:"2008"},{value:"2009",label:"2009"},{value:"2010",label:"2010"},{value:"2011",label:"2011"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2013",label:"2013"},{value:"2014",label:"2014"},{value:"2015",label:"2015"},{value:"2016",label:"2016"},{value:"2017",label:"2017"},{value:"2018",label:"2018"},{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"}],onChange:function(e){var t=[],a={};console.log("filtro tribunal: ",ce),e.forEach((function(e){var a=e.value;e.index,e.array;console.log(a),t.push({data_distribuicao:{$gte:new Date("".concat(a,"-01-01T00:00:00.000Z")),$lte:new Date("".concat(a,"-12-31T00:00:00.000Z"))}})})),t.length>0?te({$or:t}):te({}),a=t.length>0?{$and:[ce,ie,{$or:t}]}:Object(h.a)(Object(h.a)({},ce),ie),console.log("Filtro: ",a),v.setFilter(a),k.setFilter(a),w.setFilter(a),C.setFilter(a),y.setFilter(a),S.setFilter(a),F.setFilter(a),N.setFilter(a),T.setFilter(a),I.setFilter(a),E.setFilter(a),M.setFilter(a),R.setFilter(a),D.setFilter(a),L.setFilter(a)},style:{"border-left":""}})})]}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Tribunal"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(f.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o tribunal",options:xe,onChange:function(e){var t=[],a={};console.log("filtro ano: ",ee),e.forEach((function(e){var a=e.value;e.index,e.array;console.log(a),t.push({tribunal:a})})),t.length>0?ne({$or:t}):ne({}),a=t.length>0?{$and:[ee,ie,{$or:t}]}:Object(h.a)(Object(h.a)({},ee),ie),console.log("Filtro: ",a),v.setFilter(a),k.setFilter(a),w.setFilter(a),C.setFilter(a),y.setFilter(a),S.setFilter(a),F.setFilter(a),N.setFilter(a),T.setFilter(a),I.setFilter(a),E.setFilter(a),M.setFilter(a),R.setFilter(a),D.setFilter(a),L.setFilter(a)}})})]})]}),Object(i.jsxs)("div",{style:{display:"block",width:"100%","border-left":"5px solid rgba(255,255,255,.0)","border-right":"5px solid rgba(255,255,255,.0)"},children:[Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Tipo de solicita\xe7\xe3o"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(f.a,{className:"Selecione o tipo de solicita\xe7\xe3o",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o ano",options:[{value:"Alimenta\xe7\xe3o especial",label:"Alimenta\xe7\xe3o especial"},{value:"Cirurgia",label:"Cirurgia"},{value:"Classe de medicamentos variados",label:"Classe de medicamentos variados"},{value:"C\xe2mara hiperb\xe1rica",label:"C\xe2mara hiperb\xe1rica"},{value:"Exame",label:"Exame"},{value:"Fisioterapia",label:"Fisioterapia"},{value:"Interna\xe7\xe3o compuls\xf3ria",label:"Interna\xe7\xe3o compuls\xf3ria"},{value:"Medicamento",label:"Medicamento"},{value:"N\xe3o determinado",label:"N\xe3o determinado"}],onChange:function(e){var t=[],a={};console.log("filtros ano: ",ee,ce),e.forEach((function(e){var a=e.value;e.index,e.array;console.log(a),t.push({tipo_pedido:a})})),t.length>0?oe({$or:t}):oe({}),a=t.length>0?{$and:[ce,ee,{$or:t}]}:Object(h.a)(Object(h.a)({},ee),ce),console.log("Filtro: ",a),v.setFilter(a),k.setFilter(a),w.setFilter(a),C.setFilter(a),y.setFilter(a),S.setFilter(a),F.setFilter(a),N.setFilter(a),T.setFilter(a),I.setFilter(a),E.setFilter(a),M.setFilter(a)}})})]}),Object(i.jsxs)("div",{style:{display:"flex"},children:[Object(i.jsxs)("h4",{style:{width:"45%"},children:["Procurador"," "]}),Object(i.jsx)("div",{style:{width:"100%"},children:Object(i.jsx)(f.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o tribunal",options:xe,onChange:function(e){}})})]})]})]}),Object(i.jsxs)("h4",{children:["Mostrando ",Object(i.jsx)("span",{id:"filterMessage",children:"todos os processos"})]})]})}),Object(i.jsx)("div",{className:"body-content"}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chart1",ref:ze}),Object(i.jsx)("div",{className:"chart",id:"chartMed",ref:_e})]}),Object(i.jsx)("div",{className:"body-content",children:Object(i.jsx)("div",{className:"chart",id:"chart2",ref:We})}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"QUANTIDADE E VALOR DOS PROCESSOS"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chartQuantidade",ref:Ve}),Object(i.jsx)("div",{className:"chart",id:"chartValor",ref:Ue})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"COMPET\xcaNCIA"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chart3",ref:Ze}),Object(i.jsx)("div",{className:"chart",id:"chart4",ref:Ge})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"TIPOS DE SOLICITA\xc7\xd5ES"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chart8",ref:He}),Object(i.jsx)("div",{className:"chart",id:"chart7",ref:Qe})]}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chartTabelaCID",ref:qe}),Object(i.jsx)("div",{className:"chart",id:"chartTabelaTipos",ref:Ke}),Object(i.jsx)("div",{className:"chart",id:"chartTabelaAno",ref:Xe})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"PROCESSOS DE MEDICAMENTOS"}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"body-content",children:[Object(i.jsx)("div",{className:"chart",id:"chartPizzaMedicamentos",ref:Ye}),Object(i.jsx)("div",{className:"chart",id:"chartPizzaDoencas",ref:et})]}),Object(i.jsx)("br",{}),Object(i.jsx)("h4",{children:"PROCESSOS DE CIRURGIA"}),Object(i.jsx)("br",{}),Object(i.jsx)("div",{className:"body-content",children:Object(i.jsx)("div",{className:"chart",id:"chartPizzaDoencasCirurgia",ref:tt})}),Object(i.jsxs)("footer",{children:[Object(i.jsxs)("small",{children:["\xa9 2021 made by -"," ",Object(i.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://azouaoui.netlify.com",children:"Ricardo Pereira"})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:"social-bagdes",children:[Object(i.jsx)("a",{href:"https://github.com/ricardopera",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{alt:"GitHub followers",src:"https://img.shields.io/github/followers/ricardopera?label=github&style=social"})}),Object(i.jsx)("a",{href:"https://twitter.com/ricardoru",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{alt:"Twitter Follow",src:"https://img.shields.io/twitter/follow/ricardoru?label=twitter&style=social"})})]})]})]})}var A=a(20),$=a.p+"static/media/bg1.6eea880b.jpg",B=function(e){var t=e.dark,a=e.image,r=e.collapsed,c=e.toggled,n=e.handleToggleSidebar,s=e.handleOnMouseEnter,o=e.handleOnMouseLeave,d=e.handleImageChange,b=e.handleDarkMode,u=Object(x.a)();return Object(i.jsxs)(A.c,{image:!!a&&$,collapsed:r,toggled:c,breakPoint:"md",onToggle:n,onMouseEnter:s,onMouseLeave:o,styles:{position:"sticky"},children:[Object(i.jsx)(A.f,{children:Object(i.jsx)("div",{style:{padding:"24px",textTransform:"uppercase",fontWeight:"bold",fontSize:14,letterSpacing:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:u.formatMessage({id:"sidebarTitle"})})}),Object(i.jsxs)(A.d,{children:[Object(i.jsxs)(A.a,{iconShape:"circle",style:{fontWeight:"bold",letterSpacing:"0.5px"},children:[Object(i.jsx)(A.b,{icon:Object(i.jsx)(O.d,{}),suffix:Object(i.jsx)("span",{className:"badge red",children:u.formatMessage({id:"new"})}),children:Object(i.jsx)(l.b,{to:"/dashboard",children:u.formatMessage({id:"health"})})}),Object(i.jsx)(A.b,{icon:Object(i.jsx)(O.b,{}),suffix:Object(i.jsx)("span",{className:"badge red",children:u.formatMessage({id:"new"})}),children:Object(i.jsx)(l.b,{to:"/page-1",children:"Creche"})}),Object(i.jsx)(A.b,{icon:Object(i.jsx)(O.e,{}),suffix:Object(i.jsx)("span",{className:"badge red",children:u.formatMessage({id:"new"})}),children:"Usucapi\xe3o"})]}),Object(i.jsxs)(A.a,{iconShape:"circle",children:[Object(i.jsx)(A.b,{icon:t?Object(i.jsx)(O.g,{}):Object(i.jsx)(O.i,{}),onClick:b,children:u.formatMessage(t?{id:"dark"}:{id:"light"})}),Object(i.jsx)(A.b,{icon:a?Object(i.jsx)(O.f,{}):Object(i.jsx)(O.h,{}),onClick:d,children:u.formatMessage({id:"image"})})]})]}),Object(i.jsx)(A.e,{style:{textAlign:"center"},children:Object(i.jsx)("div",{className:"sidebar-btn-wrapper",style:{padding:"20px 24px"},children:Object(i.jsxs)("a",{href:"https://github.com/ricardopera/dashboard",target:"_blank",className:"sidebar-btn",rel:"noopener noreferrer",children:[Object(i.jsx)(O.c,{}),Object(i.jsxs)("span",{children:[" ",u.formatMessage({id:"viewSource"})]})]})})})]})};var J=a(10);var z=function(e){var t=Object(r.useState)(!1),a=Object(s.a)(t,2),c=(a[0],a[1],Object(r.useState)(!1)),n=Object(s.a)(c,2),l=n[0],d=n[1],b=Object(r.useState)(!0),u=Object(s.a)(b,2),j=u[0],f=u[1],p=Object(r.useState)(!1),O=Object(s.a)(p,2),x=O[0],m=O[1],g=Object(r.useState)(!1),v=Object(s.a)(g,2),k=v[0],w=v[1],C=Object(r.useState)(!1),y=Object(s.a)(C,2);return y[0],y[1],Object(i.jsxs)("div",{className:"app ".concat(x?"toggled":""),children:[Object(i.jsx)(B,{dark:k,image:j,collapsed:l,toggled:x,handleToggleSidebar:function(e){m(e)},handleOnMouseEnter:function(){console.log("mouse enter"),d(!1)},handleOnMouseLeave:function(){console.log("mouse leave"),d(!0)},handleImageChange:function(){f(!j)},handleDarkMode:function(){w(!k),k?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")}}),Object(i.jsx)("main",{children:Object(i.jsxs)(J.c,{children:[Object(i.jsx)(J.a,{path:"/dashboard",render:function(e){return Object(i.jsx)(P,Object(h.a)(Object(h.a)({},e),{},{dark:k}))}}),Object(i.jsx)(J.a,{path:"/page-1",render:function(e){return Object(i.jsx)(o,Object(h.a)(Object(h.a)({},e),{},{dark:k}))}})]})})]})},_=a(186),W={ar:{title:"\u0631\u064a\u0627\u0643\u062a \u067e\u0631\u0648 \u0633\u0627\u064a\u062f \u0628\u0627\u0631",sidebarTitle:"\u067e\u0631\u0648 \u0633\u0627\u064a\u062f \u0628\u0627\u0631",description:"\u0634\u0631\u064a\u0637 \u062c\u0627\u0646\u0628\u064a \u0645\u0639 \u0642\u0648\u0627\u0626\u0645 \u0645\u0646\u0633\u062f\u0644\u0629 \u0648\u0639\u062f\u062f \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0641\u0631\u0639\u064a\u0629 \u0627\u0644\u0645\u062a\u062f\u0627\u062e\u0644\u0629",dashboard:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",components:"\u0645\u0643\u0648\u0646\u0627\u062a",dropdown:"\u0627\u0633\u0642\u0627\u0637",submenu:"\u0642\u0627\u0626\u0645\u0629 \u0641\u0631\u0639\u064a\u0629",multiLevel:"\u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a",collapsed:"\u0627\u0646\u0637\u0648\u0649",rtl:"\u0631 \u062a \u0644",image:"\u0635\u0648\u0631\u0629 \u0627\u0644\u062e\u0644\u0641\u064a\u0629",new:"\u062c\u062f\u064a\u062f",withPrefix:"\u0645\u0639 \u0627\u0644\u0628\u0627\u062f\u0626\u0629",withSuffix:"\u0645\u0639 \u0627\u0644\u0644\u0627\u062d\u0642\u0629",viewSource:"\u0639\u0631\u0636 \u0627\u0644\u0643\u0648\u062f"},en:{title:"Dashboar dos processos de sa\xfade em tr\xe2mite",sidebarTitle:"Sa\xfade",description:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed",dashboard:"Dashboard",components:"Components",dropdown:"Dropdown",submenu:"Submenu",multiLevel:"Multi Level",collapsed:"Collapsed",rtl:"RTL",image:"Background image",new:"NEW",withPrefix:"With Prefix",withSuffix:"With Suffix",viewSource:"View Source",dark:"Dark mode",light:"Light mode",health:"Health"},pt:{title:"Dashboard dos processos de sa\xfade em tr\xe2mite",sidebarTitle:"Dashboads",description:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed",dashboard:"Dashboard",components:"Components",dropdown:"Dropdown",submenu:"Submenu",multiLevel:"Multi Level",collapsed:"Collapsed",rtl:"RTL",image:"Imagem de fundo",new:"NOVO",withPrefix:"With Prefix",withSuffix:"With Suffix",viewSource:"View Source",dark:"Modo escuro",light:"Mode claro",health:"Sa\xfade"}};a(181);var V=function(){var e=Object(r.useState)("pt"),t=Object(s.a)(e,2),a=t[0];return t[1],Object(i.jsx)(_.a,{locale:a,messages:W[a],children:Object(i.jsx)(l.a,{forceRefresh:!0,children:Object(i.jsx)(z,{})})})};n.a.render(Object(i.jsx)(V,{}),document.getElementById("root"))},90:function(e,t,a){}},[[182,1,2]]]);
//# sourceMappingURL=main.418bc23a.chunk.js.map