(this["webpackJsonpspace-y-spa"]=this["webpackJsonpspace-y-spa"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var c=n(0),r="/rockets",s=Object(c.lazy)((()=>n.e(9).then(n.bind(null,44))))},15:function(e,t,n){e.exports={header:"Layout_header__2OTNe",main:"Layout_main__23wl3",footer:"Layout_footer__17tYV"}},18:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var c=n(0),r=n(9),s="".concat(r.b,"/:id"),i=Object(c.lazy)((()=>n.e(4).then(n.bind(null,45))))},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var c=n(0),r=n(10),s="".concat(r.b,"/:id"),i=Object(c.lazy)((()=>n.e(8).then(n.bind(null,46))))},25:function(e,t,n){e.exports={link:"Link_link__hwYIy"}},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(14),s=n.n(r),i=(n(33),n(22)),a=n(11),j=n(27),l=n(0),o=()=>Object(c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 44 44",stroke:"#fff",width:"25vw",height:"25vh",children:Object(c.jsxs)("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2",children:[Object(c.jsxs)("circle",{cx:"22",cy:"22",r:"15.7499",children:[Object(c.jsx)("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]}),Object(c.jsxs)("circle",{cx:"22",cy:"22",r:"19.8559",children:[Object(c.jsx)("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),Object(c.jsx)("animate",{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]})]})}),b=n(15),u=n.n(b),d=n(23),h=n(24),O=n(13),x=n(25),f=n.n(x),p=e=>{var{to:t}=e,n=Object(h.a)(e,["to"]);return Object(c.jsx)(O.c,Object(d.a)({to:t,className:f.a.link,activeStyle:{color:"var(--accent)"}},n))},y="/login",v=Object(l.lazy)((()=>n.e(6).then(n.bind(null,55)))),k="/about",m=Object(l.lazy)((()=>n.e(3).then(n.bind(null,56)))),g=n(9),w=n(10),C="/roadster",_=Object(l.lazy)((()=>n.e(7).then(n.bind(null,57)))),S="/sendToMars",N=Object(l.lazy)((()=>n.e(10).then(n.bind(null,58)))),z=n(8),T=e=>{var{children:t}=e,n=Object(l.useContext)(z.b);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{className:u.a.header,children:[Object(c.jsx)(p,{to:y,children:"Login"}),n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p,{to:k,children:"About"}),Object(c.jsx)(p,{to:g.b,children:"History"}),Object(c.jsx)(p,{to:w.b,children:"Rockets"}),Object(c.jsx)(p,{to:C,children:"Roadster"}),Object(c.jsx)(p,{to:S,children:"Send to Mars"})]}):null]}),Object(c.jsx)("main",{className:u.a.main,children:t}),Object(c.jsx)("footer",{className:u.a.footer,children:"SpaceY"})]})},M=n(3),R=n(18),L=n(19),B=new a.a({defaultConfig:{queries:{suspense:!0,retry:0,refetchOnWindowFocus:!1,refetchOnReconnect:!1}}}),E=e=>{var{children:t}=e,n=Object(l.useContext)(z.a),{data:r}=Object(a.e)(z.k,Object(i.a)((function*(){try{return yield n.getUser()}catch(e){return console.error(e),null}})));return Object(c.jsx)(z.b.Provider,{value:r,children:t})},F=()=>{var e=Object(l.useContext)(z.b);return Object(c.jsxs)(M.c,{children:[Object(c.jsx)(M.a,{path:y,children:Object(c.jsx)(v,{})}),e?Object(c.jsxs)(M.c,{children:[Object(c.jsx)(M.a,{path:k,children:Object(c.jsx)(m,{})}),Object(c.jsx)(M.a,{exact:!0,path:g.b,children:Object(c.jsx)(g.a,{})}),Object(c.jsx)(M.a,{path:R.b,children:Object(c.jsx)(R.a,{})}),Object(c.jsx)(M.a,{exact:!0,path:w.b,children:Object(c.jsx)(w.a,{})}),Object(c.jsx)(M.a,{path:L.b,children:Object(c.jsx)(L.a,{})}),Object(c.jsx)(M.a,{path:C,children:Object(c.jsx)(_,{})}),Object(c.jsx)(M.a,{path:S,children:Object(c.jsx)(N,{})})]}):null,Object(c.jsx)(M.a,{path:"*",children:Object(c.jsx)(Y,{})})]})},Y=()=>Object(c.jsx)("h1",{children:"Sorry, nothing here"}),q=e=>{var{resetErrorBoundary:t,error:n}=e;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Oops, there was an error!"}),Object(c.jsx)("pre",{children:n.message}),Object(c.jsx)("button",{onClick:()=>t(),children:"Try again"})]})},I=e=>{var{client:t}=e;return Object(c.jsx)(z.a.Provider,{value:t,children:Object(c.jsx)(a.b,{queryCache:B,children:Object(c.jsx)(O.a,{children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o,{}),children:Object(c.jsx)(E,{children:Object(c.jsx)(T,{children:Object(c.jsx)(a.c,{children:e=>{var{reset:t}=e;return Object(c.jsx)(j.ErrorBoundary,{onReset:t,fallbackRender:q,children:Object(c.jsx)(l.Suspense,{fallback:Object(c.jsx)(o,{}),children:Object(c.jsx)(F,{})})})}})})})})})})})};import("/client.mjs").then((e=>{var{Client:t}=e;s.a.render(Object(c.jsx)(I,{client:new t}),document.getElementById("root"))}))},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"k",(function(){return i})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return l})),n.d(t,"i",(function(){return o})),n.d(t,"h",(function(){return b})),n.d(t,"g",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"f",(function(){return h}));var c=n(0),r=Object(c.createContext)(null),s=Object(c.createContext)(null),i="user",a="info",j="history",l="historyEvent",o="rockets",b="rocket",u="roadster",d="sentToMarsQuery",h=(e,t,n)=>{console.log(e),n()}},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var c=n(0),r="/history",s=Object(c.lazy)((()=>n.e(5).then(n.bind(null,43))))}},[[42,1,2]]]);
//# sourceMappingURL=main.0252f416.chunk.js.map