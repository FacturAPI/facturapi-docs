"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[5477],{9681:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=a(4848),t=a(8453);const s={sidebar_position:4},i="Formato de fechas",o={id:"getting-started/dates",title:"Formato de fechas",description:"Aunque nuestra recomendaci\xf3n es enviar un string con la fecha en UTC y en formato",source:"@site/docs/getting-started/dates.mdx",sourceDirName:"getting-started",slug:"/getting-started/dates",permalink:"/docs/getting-started/dates",draft:!1,unlisted:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/getting-started/dates.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Autenticaci\xf3n",permalink:"/docs/getting-started/authenticate"},next:{title:"Registrar y validar clientes",permalink:"/docs/guides/customers"}},c={},d=[];function l(e){const n={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"formato-de-fechas",children:"Formato de fechas"}),"\n",(0,r.jsx)(n.p,{children:"Aunque nuestra recomendaci\xf3n es enviar un string con la fecha en UTC y en formato\nISO8601, sabemos que esto no siempre es lo m\xe1s pr\xe1ctico."}),"\n",(0,r.jsx)(n.p,{children:"Facturapi acepta fechas como string en cualquiera de las variaciones del formato\nISO8601. Si tu fecha incluye informaci\xf3n sobre una zona horaria, \xe9sta se respetar\xe1;\ny en caso contrario, se interpretar\xe1 usando la zona horaria de la organizaci\xf3n\nemisora, que se deduce a partir del c\xf3digo postal que se haya registrado para\nla organizaci\xf3n."}),"\n",(0,r.jsx)(n.p,{children:"La siguiente tabla muestra a manera resumida c\xf3mo Facturapi interpreta las fechas\nenviadas a la API. Los ejemplos consideran que la zona horaria de la organizaci\xf3n\nes GMT-06:00, hora del centro de M\xe9xico."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Input"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{children:"Normalizada con zona horaria"}),(0,r.jsx)(n.th,{children:"Normalizada UTC"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000Z"})}),(0,r.jsx)(n.td,{children:"Fecha y hora en formato ISO8601. La Z al final indica la zona horaria UTC."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2021-12-31T18:00:00.000-06:00"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000Z"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000-06:00"})}),(0,r.jsx)(n.td,{children:"Fecha y hora en formato ISO8601 con la misma zona horaria de la organizaci\xf3n."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000-06:00"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T06:00:00.000Z"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000-08:00"})}),(0,r.jsx)(n.td,{children:"Fecha y hora en formato ISO8601 con una zona horaria diferente a la de la organizaci\xf3n."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T02:00:00.000-06:00"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T08:00:00.000Z"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000"})}),(0,r.jsx)(n.td,{children:"Fecha y hora en formato ISO8601 sin zona horaria."}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000-06:00"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T06:00:00.000Z"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01"})}),(0,r.jsxs)(n.td,{children:["Fecha en formato ",(0,r.jsx)(n.code,{children:"YYYY-MM-DD"})]}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T00:00:00.000-06:00"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2022-01-01T06:00:00.000Z"})})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"En los objetos de respuesta, nuestra API siempre devolver\xe1 la fecha en formato\nISO8601 con zona horaria UTC."}),"\n",(0,r.jsx)(n.p,{children:"En comprobantes, el SAT pide que las fechas se muestren en la zona horaria del emisor,\npor lo que haremos la conversi\xf3n correspondiente y mostraremos la porci\xf3n de la fecha\nque se requiera, pudiendo ser \xe9sta s\xf3lo la fecha o la fecha y la hora."})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var r=a(6540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);