"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[175],{3123:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(4848),o=t(8453);const s={sidebar_position:6,title:"Retentions (Retenciones)"},r="Retention Invoice",a={id:"guides/invoices/retencion",title:"Retentions (Retenciones)",description:"The retention invoiceis a different document from a standard invoice, meaning",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/invoices/retencion.mdx",sourceDirName:"guides/invoices",slug:"/guides/invoices/retencion",permalink:"/en/docs/guides/invoices/retencion",draft:!1,unlisted:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/invoices/retencion.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Retentions (Retenciones)"},sidebar:"tutorialSidebar",previous:{title:"Transfer (Traslado)",permalink:"/en/docs/guides/invoices/traslado"},next:{title:"Complements",permalink:"/en/docs/guides/invoices/complementos"}},c={},d=[{value:"What is it used for?",id:"what-is-it-used-for",level:2},{value:"Examples of Retentions",id:"examples-of-retentions",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"retention-invoice",children:"Retention Invoice"}),"\n",(0,i.jsx)(n.p,{children:"The retention invoiceis a different document from a standard invoice, meaning\nit is not an income, expense, or transfer CFDI and therefore has a different\nstructure. It consists of general data and can have a complement added to it."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-it-used-for",children:"What is it used for?"}),"\n",(0,i.jsx)(n.p,{children:"The retention invoice is used to inform the SAT (Mexican tax authority) about\nthe tax withholdings that have been made to a third party, as well as to report\npayments made to foreign residents. It is also used in transactions such as the\nsale of shares, payment of dividends, royalties for copyright, deductions of\nreal interest for mortgage loans, and lottery prize payments, among others."}),"\n",(0,i.jsx)(n.h2,{id:"examples-of-retentions",children:"Examples of Retentions"}),"\n",(0,i.jsx)(n.p,{children:"Below you will find an example of a simple request to issue a retention invoice:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  "customer": {\n    "legal_name": "John Doe",\n    "tax_id": "XAXX010101000",\n    "tax_system": "601",\n    "email": "john@example.com",\n    "address": {\n      "zip": "83240"\n    }\n  },\n  "cve_retenc": "03",\n  "periodo": {\n    "mes_ini": 3,\n    "mes_fin": 5,\n    "ejerc": 2023\n  },\n  "totales": {\n    "monto_tot_operacion": 1000,\n    "monto_tot_exent": 733.33,\n    "imp_retenidos": [\n      {\n        "monto_ret": 7.41,\n        "tipo_pago_ret": "04",\n        "impuesto": "ISR"\n      },\n      {\n        "monto_ret": 59.26,\n        "tipo_pago_ret": "01",\n        "impuesto": "IVA"\n      }\n    ]\n  }\n}\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["To fully understand all the available options when creating a retention CFDI,\ndetailed descriptions of each field and the most commonly used catalogs,\nplease refer to the ",(0,i.jsx)(n.a,{href:"/api/#operation/createRetention",children:"Create Retention method reference"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);