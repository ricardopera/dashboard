(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{104:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(30),l=a.n(c),o=(a(104),a(6)),i=a(21);var s,u,d=function(e){return Object(r.useEffect)((function(){document.title="Creche"})),n.a.createElement("div",null,n.a.createElement("h1",null,"Page 1"),n.a.createElement("p",null,"I bring the sauce."))},b=a(3),m=a.n(b),h=a(5),p=a(10),f=a(53),g=a(31),v=a(45),E=a(8),O=a(44),x=a(56),j=a(57),k=j.a.div(s||(s=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]))),w=j.a.form(u||(u=Object(x.a)(["\n  width: 400px;\n  background: #fff;\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  img {\n    width: 60px;\n    margin: 10px 0 40px;\n  }\n  p {\n    color: #ff3333;\n    margin-bottom: 15px;\n    font-size: 30px;\n    border: 1px solid #ff3333;\n    padding: 0 0px;\n    width: 100%;\n    text-align: center;\n  }\n  input {\n    flex: 1;\n    height: 46px;\n    margin-bottom: 15px;\n    padding: 0 0px;\n    color: #778;\n    font-size: 30px;\n    width: 100%;\n    border: 1px solid #ddd;\n    &::placeholder {\n      color: darkblue;\n    }\n  }\n  button {\n    color: #fff;\n    font-size: 16px;\n    background: darkblue;\n    height: 56px;\n    border: 0;\n    border-radius: 5px;\n    width: 100%;\n  }\n  hr {\n    margin: 20px 0;\n    border: none;\n    border-bottom: 1px solid #cdcdcd;\n    width: 100%;\n  }\n  a {\n    font-size: 16;\n    font-weight: bold;\n    color: #999;\n    text-decoration: none;\n  }\n"]))),C=a(95),y=a.n(C),S=Object(r.createContext)(),F=function(){var e=Object(r.useContext)(S);if(!e)throw new Error("Chame useAuthApp dentro de <AuthAppProvider />");return e},N=function(e){var t=e.appId,a=e.children,c=new O.a.initializeAppClient(t),l=Object(r.useState)(c.auth.user),i=Object(o.a)(l,2),s=i[0],u=i[1];function d(){return(d=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.auth.loginWithCredential(t);case 2:u(c.auth.user);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.logout();case 2:u(c.auth.user);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=Object(p.a)(Object(p.a)({},c),{},{currentUser:s,logIn:function(e){return d.apply(this,arguments)},logOut:function(){return b.apply(this,arguments)}});return n.a.createElement(S.Provider,{value:f},a)};var T=Object(E.f)((function(e){var t=Object(r.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1],s=Object(r.useState)(""),u=Object(o.a)(s,2),d=u[0],b=u[1],p=Object(r.useState)(""),f=Object(o.a)(p,2),g=f[0],v=f[1],E=F();Object(r.useEffect)((function(){document.title="Login"}));var x=function(){var t=Object(h.a)(m.a.mark((function t(a){var r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),c&&d){t.next=5;break}v("Preencha e-mail e senha para continuar!"),t.next=15;break;case 5:return console.log("Email and Password",c,d),t.prev=6,r=new O.b(c,d),t.next=10,E.logIn(r).then((function(){e.history.push("/dashboard"),console.log("LOGOU?"),console.log(E.auth.isLoggedIn)}));case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(6),v("Houve um problema com o login, verifique suas credenciais. T.T");case 15:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}();return n.a.createElement(k,null,n.a.createElement(w,{onSubmit:x},n.a.createElement("img",{src:y.a,alt:"Logo Itaja\xed"}),g&&n.a.createElement("p",null,g),n.a.createElement("input",{type:"email",placeholder:"Endere\xe7o de e-mail",onChange:function(e){return l(e.target.value)}}),n.a.createElement("input",{type:"password",placeholder:"Senha",onChange:function(e){return b(e.target.value)}}),n.a.createElement("button",{type:"submit"},"Entrar"),n.a.createElement("hr",null),n.a.createElement(i.b,{to:"/page-1"},"Page1")))})),I=a(12),M=a(195),D="light";function L(e){var t=e.scroll,a=e.dark,c=e.handleToggleSidebar,l=(e.handleDefaultf,e.handleScroll,e.options_filters,Object(M.a)()),i=Object(r.useRef)(null),s=Object(r.useRef)(null),u=Object(r.useRef)(null),d=Object(r.useRef)(null),b=Object(r.useRef)(null),E=Object(r.useRef)(null),O=Object(r.useRef)(null),x=Object(r.useRef)(null),j=Object(r.useRef)(null),k=Object(r.useRef)(null),w=Object(r.useRef)(null),C=Object(r.useRef)(null),y=Object(r.useRef)(null),S=Object(r.useRef)(null),N=Object(r.useRef)(null),T=Object(r.useState)(a),L=Object(o.a)(T,2),R=L[0],P=L[1],A=Object(r.useState)({}),z=Object(o.a)(A,2),$=z[0],B=(z[1],Object(r.useState)({})),J=Object(o.a)(B,2),_=J[0],W=J[1],U=Object(r.useState)({}),Z=Object(o.a)(U,2),V=Z[0],G=Z[1],H=Object(r.useState)({}),Q=Object(o.a)(H,2),q=Q[0],K=Q[1],X=Object(r.useState)({}),Y=Object(o.a)(X,2),ee=Y[0],te=(Y[1],Object(r.useState)({})),ae=Object(o.a)(te,2),re=(ae[0],ae[1]),ne=Object(r.useState)({}),ce=Object(o.a)(ne,2),le=(ce[0],ce[1],[{value:"TJSC",label:"TJSC"},{value:"JFSC",label:"JFSC"}]),oe=F(),ie=new v.a({baseUrl:"https://charts.mongodb.com/charts-saude-ualvx",getUserToken:function(){return Object(v.b)(oe)}}),se=ie.createChart({chartId:"147fe4a4-cd35-462c-aa79-8925840b30d4",height:"600px",theme:D,background:"transparent"}),ue=ie.createChart({chartId:"3420c4f9-1974-4df4-9912-750879601b97",height:"600px",theme:D,background:"transparent"}),de=ie.createChart({chartId:"e01702d3-d246-4df9-821e-091cab268832",height:"500px",theme:D,background:"transparent"}),be=ie.createChart({chartId:"c9396b9b-be3e-488f-a07e-7ca6a82b24d6",height:"150px",theme:D,background:"transparent"}),me=ie.createChart({chartId:"b3ac1dea-df55-4d59-8474-f4f7a2bbe7d3",height:"150px",theme:D,background:"transparent"}),he=ie.createChart({chartId:"ec432340-d756-4992-b0c4-742c3a24b437",height:"300px",theme:D,background:"transparent"}),pe=ie.createChart({chartId:"70a55ce1-46bc-4005-8fd2-8eb2d61132c0",height:"300px",theme:D,background:"transparent"}),fe=ie.createChart({chartId:"f11f894d-9040-4c20-aa30-487323217dc2",height:"400px",theme:D,background:"transparent"}),ge=ie.createChart({chartId:"bb264786-e2df-4c17-b6e3-ff1e40b5df4a",height:"400px",theme:D,background:"transparent"}),ve=ie.createChart({chartId:"ec1cffd7-508c-48cd-828a-7ad4066f377b",height:"600px",theme:D,background:"transparent"}),Ee=ie.createChart({chartId:"2cc73c91-fd2b-4353-9d00-479da43c1f8b",height:"600px",theme:D,background:"transparent"}),Oe=ie.createChart({chartId:"62db981e-481b-47f2-947e-8318afcd6b33",height:"600px",theme:D,background:"transparent"}),xe=ie.createChart({chartId:"63ae3627-ff4f-44e5-83cd-d755b48b436a",height:"500px",theme:D,background:"transparent"}),je=ie.createChart({chartId:"f39c46f7-16e2-4994-8141-c9111f680475",height:"500px",theme:D,background:"transparent"}),ke=ie.createChart({chartId:"c08bc76a-f635-42ce-8b8a-be6f418d9837",height:"500px",theme:D,background:"transparent"});Object(r.useEffect)((function(){document.title="Dashboard Sa\xfade",a!==R&&(P(a),console.log(a),console.log(R),console.log("dark"),se.setTheme(a?"dark":"light"),ue.setTheme(a?"dark":"light"),de.setTheme(a?"dark":"light"),be.setTheme(a?"dark":"light"),me.setTheme(a?"dark":"light"),he.setTheme(a?"dark":"light"),pe.setTheme(a?"dark":"light"),ve.setTheme(a?"dark":"light"),Ee.setTheme(a?"dark":"light"),Oe.setTheme(a?"dark":"light"),xe.setTheme(a?"dark":"light"),je.setTheme(a?"dark":"light"),ke.setTheme(a?"dark":"light"),fe.setTheme(a?"dark":"light"),ge.setTheme(a?"dark":"light"))})),window.onload=function(e){var t=document.getElementsByClassName("faixa-ano")[0].offsetTop,a=document.getElementsByClassName("faixa-ano")[0],r=document.getElementsByClassName("divOne")[0];document.addEventListener("wheel",(function(){console.log(a.getBoundingClientRect().top),r.getBoundingClientRect().top<25-t?(a.style.position="fixed",a.style.paddingLeft="100px"):(a.style.position="initial",a.style.paddingLeft="initial")}))};var we=function(e){re(Object(p.a)({},e.selectionFilter));var t=Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({},e.selectionFilter),_),V),q),ee);console.log(e.selectionFilter),console.log(t);var a="";de.setFilter(t),a="processos com o CID-10 ".concat(JSON.stringify(e.selectionFilter["cid.codigo"]),": ").concat(JSON.stringify(e.selectionFilter["cid.doenca"])),document.getElementById("filterMessage").innerText=a},Ce=function(e){ge.setFilter(e.selectionFilter),console.log(JSON.stringify(e)),document.getElementById("filterANO").innerText="processos apenas de ".concat(e.data.cell.value)},ye=function(e){je.setFilter(e.selectionFilter),console.log(JSON.stringify(e)),document.getElementById("filterANO").innerText="processos apenas de ".concat(e.data.cell.value)},Se=function(e){var t=document.getElementById("filtro-ano").value;t?(Object(p.a)(Object(p.a)({},e.selectionFilter),{data_distribuicao:{$gte:new Date("".concat(t,"-01-01T00:00:00.000Z")),$lte:new Date("".concat(t,"-12-31T00:00:00.000Z"))}}),Object(f.a)("filter")):(e.selectionFilter,Object(f.a)("filter")),console.log($),se.setFilter($),de.setFilter($),console.log(JSON.stringify(e))},Fe={includes:[{types:["text"]}]},Ne={includes:[{roles:["mark"]}]},Te={includes:[{types:["text"]},{roles:["mark"]}]},Ie=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,se.render(t);case 3:return e.next=5,se.addEventListener("click",we,Fe);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Me=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ue.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),De=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,de.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Le=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,be.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Re=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,me.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Pe=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,he.render(t);case 3:return e.next=5,he.addEventListener("click",Se,Te);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ae=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,pe.render(t);case 3:return e.next=5,pe.addEventListener("click",Se,Te);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),ze=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),$e=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fe.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Be=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ve.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Je=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ee.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),_e=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Oe.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),We=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,xe.render(t);case 3:return e.next=5,xe.addEventListener("click",ye,Ne);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ue=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.render(t);case 3:return e.next=5,je.addEventListener("click",Ce,Fe);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ze=Object(r.useCallback)(function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ke.render(t);case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),[]),Ve=Object(r.useCallback)((function(e){e&&Ie(e),i.current=e}),[Ie]),Ge=Object(r.useCallback)((function(e){e&&Me(e),s.current=e}),[Me]),He=Object(r.useCallback)((function(e){e&&De(e),u.current=e}),[De]),Qe=Object(r.useCallback)((function(e){e&&Le(e),d.current=e}),[Le]),qe=Object(r.useCallback)((function(e){e&&Re(e),b.current=e}),[Re]),Ke=Object(r.useCallback)((function(e){e&&Pe(e),E.current=e}),[Pe]),Xe=Object(r.useCallback)((function(e){e&&Ae(e),O.current=e}),[Ae]),Ye=Object(r.useCallback)((function(e){e&&ze(e),x.current=e}),[ze]),et=Object(r.useCallback)((function(e){e&&$e(e),j.current=e}),[$e]),tt=Object(r.useCallback)((function(e){e&&Be(e),k.current=e}),[Be]),at=Object(r.useCallback)((function(e){e&&Je(e),w.current=e}),[Je]),rt=Object(r.useCallback)((function(e){e&&_e(e),C.current=e}),[_e]),nt=Object(r.useCallback)((function(e){e&&We(e),y.current=e}),[We]),ct=Object(r.useCallback)((function(e){e&&Ue(e),S.current=e}),[Ue]),lt=Object(r.useCallback)((function(e){e&&Ze(e),N.current=e}),[Ze]);return n.a.createElement("div",{className:"divOne"},n.a.createElement("div",{className:"btn-toggle",onClick:function(){return c(!0)}},n.a.createElement(I.a,{style:a?{color:"white"}:{color:"#353535"}})),n.a.createElement("header",null,n.a.createElement("h1",null,n.a.createElement(I.f,{style:{width:"50px",color:"#00b193"}}),l.formatMessage({id:"title"})),n.a.createElement("h4",null,"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed")),n.a.createElement("div",{className:"body-content2"},n.a.createElement("header",{className:"faixa-ano",id:"faixa-ano",style:t?{position:"fixed"}:{position:""}},n.a.createElement("div",{style:{display:"flex","border-top":"5px solid rgba(255,255,255,.0)"}},n.a.createElement("div",{style:{display:"block",width:"100%","border-left":"5px solid rgba(255,255,255,.0)","border-right":"5px solid rgba(255,255,255,.0)"}},n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("h4",{style:{width:"45%"}},"Ano de distribui\xe7\xe3o"," "),n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(g.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o ano",options:[{value:"",label:"Todos"},{value:"2007",label:"2007"},{value:"2008",label:"2008"},{value:"2009",label:"2009"},{value:"2010",label:"2010"},{value:"2011",label:"2011"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2012",label:"2012"},{value:"2013",label:"2013"},{value:"2014",label:"2014"},{value:"2015",label:"2015"},{value:"2016",label:"2016"},{value:"2017",label:"2017"},{value:"2018",label:"2018"},{value:"2019",label:"2019"},{value:"2020",label:"2020"},{value:"2021",label:"2021"},{value:"2022",label:"2022"}],onChange:function(e){var t=[],a={};console.log("filtro tribunal: ",V),e.forEach((function(e){var a=e.value;e.index,e.array;console.log(a),t.push({data_distribuicao:{$gte:new Date("".concat(a,"-01-01T00:00:00.000Z")),$lte:new Date("".concat(a,"-12-31T00:00:00.000Z"))}})})),t.length>0?W({$or:t}):W({}),a=t.length>0?{$and:[V,q,{$or:t}]}:Object(p.a)(Object(p.a)({},V),q),console.log("Filtro: ",a),se.setFilter(a),ue.setFilter(a),de.setFilter(a),be.setFilter(a),me.setFilter(a),he.setFilter(a),pe.setFilter(a),fe.setFilter(a),ge.setFilter(a),ve.setFilter(a),Ee.setFilter(a),Oe.setFilter(a),xe.setFilter(a),je.setFilter(a),ke.setFilter(a)},style:{"border-left":""}}))),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("h4",{style:{width:"45%"}},"Tribunal"," "),n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(g.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o tribunal",options:le,onChange:function(e){var t=[],a={};console.log("filtro ano: ",_),e.forEach((function(e){var a=e.value;e.index,e.array;console.log(a),t.push({tribunal:a})})),t.length>0?G({$or:t}):G({}),a=t.length>0?{$and:[_,q,{$or:t}]}:Object(p.a)(Object(p.a)({},_),q),console.log("Filtro: ",a),se.setFilter(a),ue.setFilter(a),de.setFilter(a),be.setFilter(a),me.setFilter(a),he.setFilter(a),pe.setFilter(a),fe.setFilter(a),ge.setFilter(a),ve.setFilter(a),Ee.setFilter(a),Oe.setFilter(a),xe.setFilter(a),je.setFilter(a),ke.setFilter(a)}})))),n.a.createElement("div",{style:{display:"block",width:"100%","border-left":"5px solid rgba(255,255,255,.0)","border-right":"5px solid rgba(255,255,255,.0)"}},n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("h4",{style:{width:"45%"}},"Tipo de solicita\xe7\xe3o"," "),n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(g.a,{className:"Selecione o tipo de solicita\xe7\xe3o",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o ano",options:[{value:"Alimenta\xe7\xe3o especial",label:"Alimenta\xe7\xe3o especial"},{value:"Cirurgia",label:"Cirurgia"},{value:"Classe de medicamentos variados",label:"Classe de medicamentos variados"},{value:"C\xe2mara hiperb\xe1rica",label:"C\xe2mara hiperb\xe1rica"},{value:"Exame",label:"Exame"},{value:"Fisioterapia",label:"Fisioterapia"},{value:"Interna\xe7\xe3o compuls\xf3ria",label:"Interna\xe7\xe3o compuls\xf3ria"},{value:"Medicamento",label:"Medicamento"},{value:"N\xe3o determinado",label:"N\xe3o determinado"}],onChange:function(e){var t=[],a={};console.log("filtros ano: ",_,V),e.forEach((function(e){var a=e.value;e.index,e.array;console.log(a),t.push({tipo_pedido:a})})),t.length>0?K({$or:t}):K({}),a=t.length>0?{$and:[V,_,{$or:t}]}:Object(p.a)(Object(p.a)({},_),V),console.log("Filtro: ",a),se.setFilter(a),ue.setFilter(a),de.setFilter(a),be.setFilter(a),me.setFilter(a),he.setFilter(a),pe.setFilter(a),fe.setFilter(a),ge.setFilter(a),ve.setFilter(a),Ee.setFilter(a),Oe.setFilter(a)}}))),n.a.createElement("div",{style:{display:"flex"}},n.a.createElement("h4",{style:{width:"45%"}},"Procurador"," "),n.a.createElement("div",{style:{width:"100%"}},n.a.createElement(g.a,{className:"ano",id:"filtro-ano",isMulti:!0,placeholder:"Selecione o tribunal",options:le,onChange:function(e){}}))))),n.a.createElement("h4",null,"Mostrando ",n.a.createElement("span",{id:"filterMessage"},"todos os processos")))),n.a.createElement("div",{className:"body-content"}),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chart1",ref:Ve}),n.a.createElement("div",{className:"chart",id:"chartMed",ref:Ge})),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chart2",ref:He})),n.a.createElement("br",null),n.a.createElement("h4",null,"QUANTIDADE E VALOR DOS PROCESSOS"),n.a.createElement("br",null),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chartQuantidade",ref:Qe}),n.a.createElement("div",{className:"chart",id:"chartValor",ref:qe})),n.a.createElement("br",null),n.a.createElement("h4",null,"COMPET\xcaNCIA"),n.a.createElement("br",null),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chart3",ref:Ke}),n.a.createElement("div",{className:"chart",id:"chart4",ref:Xe})),n.a.createElement("br",null),n.a.createElement("h4",null,"TIPOS DE SOLICITA\xc7\xd5ES"),n.a.createElement("br",null),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chart8",ref:Ye}),n.a.createElement("div",{className:"chart",id:"chart7",ref:et})),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chartTabelaCID",ref:tt}),n.a.createElement("div",{className:"chart",id:"chartTabelaTipos",ref:at}),n.a.createElement("div",{className:"chart",id:"chartTabelaAno",ref:rt})),n.a.createElement("br",null),n.a.createElement("h4",null,"PROCESSOS DE MEDICAMENTOS"),n.a.createElement("br",null),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chartPizzaMedicamentos",ref:nt}),n.a.createElement("div",{className:"chart",id:"chartPizzaDoencas",ref:ct})),n.a.createElement("br",null),n.a.createElement("h4",null,"PROCESSOS DE CIRURGIA"),n.a.createElement("br",null),n.a.createElement("div",{className:"body-content"},n.a.createElement("div",{className:"chart",id:"chartPizzaDoencasCirurgia",ref:lt})),n.a.createElement("footer",null,n.a.createElement("small",null,"\xa9 2021 made by -"," ",n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://azouaoui.netlify.com"},"Ricardo Pereira")),n.a.createElement("br",null),n.a.createElement("div",{className:"social-bagdes"},n.a.createElement("a",{href:"https://github.com/ricardopera",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"GitHub followers",src:"https://img.shields.io/github/followers/ricardopera?label=github&style=social"})),n.a.createElement("a",{href:"https://twitter.com/ricardoru",target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{alt:"Twitter Follow",src:"https://img.shields.io/twitter/follow/ricardoru?label=twitter&style=social"})))))}var R=a(15),P=a(96),A=a.n(P),z=function(e){var t=e.children,a=(e.log,F());return console.log(a.auth.isLoggedIn),a.auth.isLoggedIn?t:n.a.createElement($,null)},$=function(){var e=Object(M.a)();return n.a.createElement(R.b,{icon:n.a.createElement(I.k,null),suffix:n.a.createElement("span",{className:"badge red"},e.formatMessage({id:"new"}))},n.a.createElement(i.b,{to:"/login"},"Login"))},B=function(e){var t=e.dark,a=e.image,r=e.collapsed,c=e.toggled,l=e.handleToggleSidebar,o=e.handleOnMouseEnter,s=e.handleOnMouseLeave,u=e.handleImageChange,d=e.handleDarkMode,b=e.logged,m=Object(M.a)();return n.a.createElement(R.c,{image:!!a&&A.a,collapsed:r,toggled:c,breakPoint:"md",onToggle:l,onMouseEnter:o,onMouseLeave:s,styles:{position:"sticky"}},n.a.createElement(R.f,null,n.a.createElement("div",{style:{padding:"24px  ",textTransform:"uppercase",fontWeight:"bold",fontSize:14,letterSpacing:"1px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}},n.a.createElement(I.b,null)," ",m.formatMessage({id:"sidebarTitle"}))),n.a.createElement(R.d,null,n.a.createElement(R.a,{iconShape:"circle",style:{fontWeight:"bold",letterSpacing:"0.5px"}},n.a.createElement(z,{log:b},n.a.createElement(R.b,{icon:n.a.createElement(I.l,null),onClick:function(){window.localStorage.removeItem("@realm-Token")}},n.a.createElement(i.b,{to:"/login"},"Logout")),n.a.createElement(R.g,{title:"Sa\xfade",icon:n.a.createElement(I.f,null)},n.a.createElement(R.b,{icon:n.a.createElement(I.f,null),suffix:n.a.createElement("span",{className:"badge red"},m.formatMessage({id:"new"}))},n.a.createElement(i.b,{to:"/dashboard"},n.a.createElement(I.c,null)," ","Dashboard")),n.a.createElement(R.b,{icon:n.a.createElement(I.d,null),suffix:n.a.createElement("span",{className:"badge red"},m.formatMessage({id:"new"}))},n.a.createElement(i.b,{to:"/form-saude"},n.a.createElement(I.n,null)," ","Cadastro"))),n.a.createElement(R.b,{icon:n.a.createElement(I.d,null),suffix:n.a.createElement("span",{className:"badge red"},m.formatMessage({id:"new"}))},n.a.createElement(i.b,{to:"/page-1"},"Creche")),n.a.createElement(R.b,{icon:n.a.createElement(I.g,null),suffix:n.a.createElement("span",{className:"badge red"},m.formatMessage({id:"new"}))},"Usucapi\xe3o"))),n.a.createElement(R.a,{iconShape:"circle"},n.a.createElement(R.b,{icon:t?n.a.createElement(I.i,null):n.a.createElement(I.m,null),onClick:d},m.formatMessage(t?{id:"dark"}:{id:"light"})),n.a.createElement(R.b,{icon:a?n.a.createElement(I.h,null):n.a.createElement(I.j,null),onClick:u},m.formatMessage({id:"image"})))),n.a.createElement(R.e,{style:{textAlign:"center"}},n.a.createElement("div",{className:"sidebar-btn-wrapper",style:{padding:"20px 24px"}},n.a.createElement("a",{href:"https://github.com/ricardopera/dashboard",target:"_blank",className:"sidebar-btn",rel:"noopener noreferrer"},n.a.createElement(I.e,null),n.a.createElement("span",null," ",m.formatMessage({id:"viewSource"}))))))};var J=function(e){var t=Object(r.useState)(!1),a=Object(o.a)(t,2),c=(a[0],a[1],Object(r.useState)(!1)),l=Object(o.a)(c,2),i=l[0],s=l[1],u=Object(r.useState)(!0),b=Object(o.a)(u,2),m=b[0],h=b[1],p=Object(r.useState)(!1),f=Object(o.a)(p,2),g=f[0],v=f[1],O=Object(r.useState)(!1),x=Object(o.a)(O,2),j=x[0],k=x[1],w=Object(r.useState)(!1),C=Object(o.a)(w,2);return C[0],C[1],n.a.createElement("div",{className:"app ".concat(g?"toggled":"")},n.a.createElement(B,{dark:j,image:m,collapsed:i,toggled:g,handleToggleSidebar:function(e){v(e)},handleOnMouseEnter:function(){console.log("mouse enter"),s(!1)},handleOnMouseLeave:function(){console.log("mouse leave"),s(!0)},handleImageChange:function(){h(!m)},handleDarkMode:function(){k(!j),j?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark")}}),n.a.createElement("main",null,n.a.createElement(E.c,null,n.a.createElement(E.a,{path:"/",exact:!0,render:function(e){return n.a.createElement(T,Object.assign({},e,{dark:j}))}}),n.a.createElement(E.a,{path:"/login",exact:!0,render:function(e){return n.a.createElement(T,Object.assign({},e,{dark:j}))}}),n.a.createElement(E.a,{path:"/dashboard",exact:!0,render:function(e){return n.a.createElement(L,Object.assign({},e,{dark:j}))}}),n.a.createElement(E.a,{path:"/form-saude",exact:!0,render:function(e){return n.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLScE2Z3sgh76hgmI-2pAu_-RSZuelifuAE2yzhm45jjMsDzjmw/viewform?embedded=true",width:"100%",height:"100%",frameborder:"0",marginheight:"0",marginwidth:"0"},"Carregando\u2026",document.title="Cadastro de Processos de Sa\xfade")}}),n.a.createElement(E.a,{path:"/page-1",exact:!0,render:function(e){return n.a.createElement(d,Object.assign({},e,{dark:j}))}}))))},_=a(196),W={ar:{title:"\u0631\u064a\u0627\u0643\u062a \u067e\u0631\u0648 \u0633\u0627\u064a\u062f \u0628\u0627\u0631",sidebarTitle:"\u067e\u0631\u0648 \u0633\u0627\u064a\u062f \u0628\u0627\u0631",description:"\u0634\u0631\u064a\u0637 \u062c\u0627\u0646\u0628\u064a \u0645\u0639 \u0642\u0648\u0627\u0626\u0645 \u0645\u0646\u0633\u062f\u0644\u0629 \u0648\u0639\u062f\u062f \u063a\u064a\u0631 \u0645\u062d\u062f\u0648\u062f \u0645\u0646 \u0627\u0644\u0642\u0648\u0627\u0626\u0645 \u0627\u0644\u0641\u0631\u0639\u064a\u0629 \u0627\u0644\u0645\u062a\u062f\u0627\u062e\u0644\u0629",dashboard:"\u0644\u0648\u062d\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",components:"\u0645\u0643\u0648\u0646\u0627\u062a",dropdown:"\u0627\u0633\u0642\u0627\u0637",submenu:"\u0642\u0627\u0626\u0645\u0629 \u0641\u0631\u0639\u064a\u0629",multiLevel:"\u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a",collapsed:"\u0627\u0646\u0637\u0648\u0649",rtl:"\u0631 \u062a \u0644",image:"\u0635\u0648\u0631\u0629 \u0627\u0644\u062e\u0644\u0641\u064a\u0629",new:"\u062c\u062f\u064a\u062f",withPrefix:"\u0645\u0639 \u0627\u0644\u0628\u0627\u062f\u0626\u0629",withSuffix:"\u0645\u0639 \u0627\u0644\u0644\u0627\u062d\u0642\u0629",viewSource:"\u0639\u0631\u0636 \u0627\u0644\u0643\u0648\u062f"},en:{title:"Dashboar dos processos de sa\xfade em tr\xe2mite",sidebarTitle:"Sa\xfade",description:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed",dashboard:"Dashboard",components:"Components",dropdown:"Dropdown",submenu:"Submenu",multiLevel:"Multi Level",collapsed:"Collapsed",rtl:"RTL",image:"Background image",new:"NEW",withPrefix:"With Prefix",withSuffix:"With Suffix",viewSource:"View Source",dark:"Dark mode",light:"Light mode",health:"Health"},pt:{title:"Dashboard dos processos de sa\xfade em tr\xe2mite",sidebarTitle:"Dashboards",description:"Processos de sa\xfade em tr\xe2mite na procuradoria judicial do Munic\xedpio de Itaja\xed",dashboard:"Dashboard",components:"Components",dropdown:"Dropdown",submenu:"Submenu",multiLevel:"Multi Level",collapsed:"Collapsed",rtl:"RTL",image:"Imagem de fundo",new:"NOVO",withPrefix:"With Prefix",withSuffix:"With Suffix",viewSource:"View Source",dark:"Modo escuro",light:"Mode claro",health:"Sa\xfade"}};a(191);var U=function(){var e=Object(r.useState)("pt"),t=Object(o.a)(e,2),a=t[0];return t[1],n.a.createElement(_.a,{locale:a,messages:W[a]},n.a.createElement(N,{appId:"saudecharts-eabok"},n.a.createElement(i.a,{forceRefresh:!0},n.a.createElement(J,null))))};l.a.render(n.a.createElement(U,null),document.getElementById("root"))},95:function(e,t,a){e.exports=a.p+"static/media/logo-itajai-2019-cortado.03cd8c44.ico"},96:function(e,t,a){e.exports=a.p+"static/media/bg1.9b714737.jpg"},99:function(e,t,a){e.exports=a(192)}},[[99,1,2]]]);
//# sourceMappingURL=main.209f929f.chunk.js.map