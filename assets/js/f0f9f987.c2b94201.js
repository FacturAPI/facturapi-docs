"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[396],{7992:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=r(7624),a=r(2172),i=r(1268),c=r(5388);const s={sidebar_position:6},o="Recibos digitales",l={id:"guides/receipts",title:"Recibos digitales",description:"Un e-receipt es la versi\xf3n digital de un ticket o nota de venta. Es un",source:"@site/docs/guides/receipts.mdx",sourceDirName:"guides",slug:"/guides/receipts",permalink:"/docs/guides/receipts",draft:!1,unlisted:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/receipts.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Organizaciones (Multi-RFC)",permalink:"/docs/guides/organizations"},next:{title:"Autofactura",permalink:"/docs/guides/self-invoice"}},u={},d=[{value:"Crear un recibo",id:"crear-un-recibo",level:2},{value:"Autofactura",id:"autofactura",level:2},{value:"Facturar un recibo",id:"facturar-un-recibo",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"recibos-digitales",children:"Recibos digitales"}),"\n",(0,t.jsxs)(n.p,{children:["Un ",(0,t.jsx)(n.strong,{children:"e-receipt"})," es la versi\xf3n digital de un ",(0,t.jsx)(n.em,{children:"ticket"})," o ",(0,t.jsx)(n.em,{children:"nota de venta"}),". Es un\ncomprobante de pago que puedes darle a tu cliente sin solicitarle sus datos fiscales.\nDicho comprobante incluye toda la informaci\xf3n de la venta con el prop\xf3sito de que pueda\nfacturarse si el cliente lo solicita y tambi\xe9n para incluirse dentro de una factura\nglobal."]}),"\n",(0,t.jsxs)(n.p,{children:["Al crear un ",(0,t.jsx)(n.strong,{children:"recibo digital"})," en Facturapi, tus clientes tendr\xe1n acceso a un sitio web a\ndonde podr\xe1n llenar sus datos fiscales y descargar su facuta (autofactura)."]}),"\n",(0,t.jsx)(n.p,{children:"Tambi\xe9n puedes crear una factura global al final del mes que incluya todos aquellos\nrecibos que no fueron facturados."}),"\n",(0,t.jsx)(n.h2,{id:"crear-un-recibo",children:"Crear un recibo"}),"\n",(0,t.jsxs)(n.p,{children:["Para ver las descripciones de todos los par\xe1metros, consulta la referencia completa del\nm\xe9todo ",(0,t.jsx)(n.a,{href:"/api/#operation/createReceipt",children:"Crear Recibo"}),"."]}),"\n",(0,t.jsxs)(i.c,{groupId:"codeExamples",children:[(0,t.jsx)(c.c,{value:"js",label:"Node.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const facturapi = new Facturapi('sk_test_API_KEY');\nconst receipt = await facturapi.receipts.create({\n  folio_number: 1234,\n  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO,\n  items: [{\n    quantity: 1,\n    product: {\n      description: 'Ukelele',\n      product_key: '60131324',\n      price: 345.60,\n      sku: 'ABC1234'\n    }\n  }]\n});\n"})})}),(0,t.jsx)(c.c,{value:"cs",label:"C#",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var facturapi = new FacturapiClient("sk_test_API_KEY");\nvar receipt = await facturapi.Receipt.CreateAsync(new Dictionary<string, object>\n{\n  ["folio_number"] = 1234,\n  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["description"] = "Ukelele",\n      ["product_key"] = "60131324",\n      ["price"] = 345.60,\n      ["sku"] = "ABC1234"\n    }\n  }\n});\n'})})}),(0,t.jsx)(c.c,{value:"php",label:"PHP",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$facturapi = new Facturapi("sk_test_API_KEY");\n\n$receipt = $facturapi->Receipts->create([\n  "folio_number" => 1234,\n  "payment_form" => "03",\n  "items" => [\n    [\n      "description" => "Ukelele",\n      "product_key" => "60131324",\n      "price" => 345.60,\n      "sku" => "ABC1234"\n    ]\n  ]\n]);\n'})})}),(0,t.jsx)(c.c,{value:"curl",label:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://www.facturapi.io/v1/receipts \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "folio_number": 1234,\n        "payment_form": "03",\n        "items": [{\n          "quantity": 1,\n          "product": {\n            "description": "Ukelele",\n            "product_key": "60131324",\n            "price": 345.60,\n            "sku": "ABC1234"\n          }\n        }]\n      }\'\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"autofactura",children:"Autofactura"}),"\n",(0,t.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n consulta el art\xedculo de ",(0,t.jsx)(n.a,{href:"/docs/guides/self-invoice",children:"Autofactura"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"facturar-un-recibo",children:"Facturar un recibo"}),"\n",(0,t.jsxs)(n.p,{children:["Convierte tu recibo en factura si tu cliente te lo solicita. M\xe1s detalles en el m\xe9todo ",(0,t.jsx)(n.a,{href:"/api/#operation/invoiceReceipt",children:"Facturar Recibo"}),"."]}),"\n",(0,t.jsxs)(i.c,{groupId:"codeExamples",children:[(0,t.jsx)(c.c,{value:"js",label:"Node.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const invoice = await facturapi.receipts.invoice(receipt.id, {\n  customer: {\n    legal_name: 'Roger Watters',\n    tax_id: 'ROWA121212A11',\n    email: 'roger@pinkfloyd.com'\n  },\n  folio_number: 914,\n  series: 'F'\n});\n"})})}),(0,t.jsx)(c.c,{value:"cs",label:"C#",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var invoice = await facturapi.Receipt.InvoiceAsync(receipt.Id, new Dictionary<string, object>\n{\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Roger Watters",\n    ["tax_id"] = "ROWA121212A11",\n    ["email"] = "roger@pinkfloyd.com"\n  },\n  ["folio_number"] = 914,\n  ["series"] = "F"\n});\n'})})}),(0,t.jsx)(c.c,{value:"php",label:"PHP",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$invoice = $facturapi->Receipts->invoice($receipt->id, [\n  "customer" => [\n    "legal_name" => "Roger Watters",\n    "tax_id" => "ROWA121212A11",\n    "email" => "roger@pinkfloyd.com"\n  ],\n  "folio_number" => 914,\n  "series" => "F"\n]);\n'})})}),(0,t.jsx)(c.c,{value:"curl",label:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://www.facturapi.io/v1/receipts/5ebd8e56f5687a013ca0df46/invoice \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n        "customer": {\n          "legal_name": "Roger Watters",\n          "tax_id": "ROWA121212A11",\n          "email": "roger@pinkfloyd.com"\n        },\n        "folio_number": 914,\n        "series": "F"\n    }\'\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5388:(e,n,r)=>{r.d(n,{c:()=>c});r(1504);var t=r(4064);const a={tabItem:"tabItem_Ymn6"};var i=r(7624);function c(e){let{children:n,hidden:r,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.c)(a.tabItem,c),hidden:r,children:n})}},1268:(e,n,r)=>{r.d(n,{c:()=>_});var t=r(1504),a=r(4064),i=r(3943),c=r(5592),s=r(5288),o=r(632),l=r(7128),u=r(1148);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,l.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function f(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,c.Uz)(),i=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o._M)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function h(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,i=p(e),[c,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,d]=m({queryString:r,groupId:a}),[h,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.IN)(r);return[a,(0,t.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),g=(()=>{const e=l??h;return f({value:e,tabValues:i})?e:null})();(0,s.c)((()=>{g&&o(g)}),[g]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=r(3664);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(7624);function x(e){let{className:n,block:r,selectedValue:t,selectValue:c,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.MV)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=s[r].value;a!==t&&(l(n),c(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.c)("tabs",{"tabs--block":r},n),children:s.map((e=>{let{value:n,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.c)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:a}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,a.c)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(j,{...e,...n})]})}function _(e){const n=(0,b.c)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},2172:(e,n,r)=>{r.d(n,{I:()=>s,M:()=>c});var t=r(1504);const a={},i=t.createContext(a);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);