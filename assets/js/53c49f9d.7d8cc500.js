"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[9732],{60:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=a(7624),r=a(2172),i=a(1268),o=a(5388);const s={sidebar_position:3,title:"Egreso"},c="Nota de cr\xe9dito",l={id:"guides/invoices/egreso",title:"Egreso",description:"El comprobante fiscal de tipo Egreso, o Nota de cr\xe9dito, se utiliza para",source:"@site/docs/guides/invoices/egreso.mdx",sourceDirName:"guides/invoices",slug:"/guides/invoices/egreso",permalink:"/docs/guides/invoices/egreso",draft:!1,unlisted:!1,editUrl:"https://github.com/facturapi/facturapi-docs/edit/main/website/docs/guides/invoices/egreso.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Egreso"},sidebar:"tutorialSidebar",previous:{title:"Pago",permalink:"/docs/guides/invoices/pago"},next:{title:"N\xf3mina",permalink:"/docs/guides/invoices/nomina"}},d={},u=[{value:"Ejemplos",id:"ejemplos",level:2},{value:"Descuento por una venta ya facturada",id:"descuento-por-una-venta-ya-facturada",level:3},{value:"Devoluci\xf3n de mercanc\xeda",id:"devoluci\xf3n-de-mercanc\xeda",level:3},{value:"Bonificaci\xf3n a una venta futura",id:"bonificaci\xf3n-a-una-venta-futura",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nota-de-cr\xe9dito",children:"Nota de cr\xe9dito"}),"\n",(0,t.jsxs)(n.p,{children:["El comprobante fiscal de tipo ",(0,t.jsx)(n.strong,{children:"Egreso"}),", o ",(0,t.jsx)(n.strong,{children:"Nota de cr\xe9dito"}),", se utiliza para\nregistrar fiscalmente salidas de dinero como devoluciones, descuentos y bonificaciones.\nLa funci\xf3n principal de este tipo de comprobantes es la deductibilidad ya que se utilizan para corregir o restar montos de comprobantes de ingresos emitidos con anterioridad."]}),"\n",(0,t.jsx)(n.p,{children:'La clave de este tipo de CFDI es comprobante tipo "E".'}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{children:(0,t.jsx)(n.strong,{children:"\xbfUn comprobante de Egreso debe relacionarse?"})}),(0,t.jsx)(n.p,{children:"Cuando el descuento aplicado se hace sobre una venta que ya fue facturada, el comprobante debe relacionarse\ncon uno o varios comprobantes de Ingreso utilizando la clave de relaci\xf3n correspondiente y el UUID de la factura\nde Ingreso."}),(0,t.jsx)(n.p,{children:"Es importante mencionar que un comprobante de Egreso no sirve para cancelar un comprobante de Ingreso."})]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,t.jsx)(n.p,{children:"A continuaci\xf3n se listan algunos casos de uso comunes."}),"\n",(0,t.jsxs)(n.p,{children:["Para conocer a fondo todas las opciones disponibles al crear una factura, descripciiones\ndetalladas de cada campo y los cat\xe1logos m\xe1s utilizados consulta la\n",(0,t.jsx)(n.a,{href:"/api/#operation/createInvoice",children:"referencia del m\xe9todo Crear Factura"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"descuento-por-una-venta-ya-facturada",children:"Descuento por una venta ya facturada"}),"\n",(0,t.jsx)(n.p,{children:"En este ejemplo, se recibi\xf3 un pago de $3,600.00 pesos por un producto con el 10% descuento que tiene un valor de 4,000 pesos, los $400.00 pesos descontados se amparan emitiendo un CFDI de egreso."}),"\n",(0,t.jsxs)(i.c,{groupId:"codeExamples",children:[(0,t.jsx)(o.c,{value:"js",label:"Node.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('sk_test_API_KEY');\n\nconst invoice = await facturapi.invoices.create({\n  type: \"E\",\n  customer: {\n    legal_name: 'Dunder Mifflin',\n    email: 'email@example.com',\n    tax_id: 'ABC101010111',\n    tax_system: '601',\n    address: {\n      zip: '85900'\n    }\n  },\n  items: [{\n    product: {\n      description: 'Descuento',\n      price: 400,\n      taxes: [\n        {\n          type: 'IVA',\n          rate: 0.16\n        }\n      ]\n    }\n  }],\n  payment_form: \"28\", // \"Tarjeta de d\xe9bito\"\n  related_documents: [\n    {\n      relationship: \"01\", // \"Nota de cr\xe9dito de los documentos relacionados\"\n      documents: \"UUID_DEL_CFDI_DE_INGRESO\"\n    }\n  ]\n});\n"})})}),(0,t.jsx)(o.c,{value:"cs",label:"C#",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var facturapi = new FacturapiClient("sk_test_API_KEY");\n\nvar invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>\n{\n  ["type"] = "E",\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Dunder Mifflin",\n    ["email"] = "email@example.com",\n    ["tax_id"] = "ABC101010111",\n    ["tax_system"] = "601",\n    ["address"] = new Dictionary<string, object>\n    {\n      ["zip"] = "85900"\n    }\n  },\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["product"] = new Dictionary<string, object>\n      {\n        ["description"] = "Descuento",\n        ["price"] = 400,\n        ["taxes"] = new Dictionary<string, object>[]\n        {\n          new Dictionary<string, object>\n          {\n            ["type"] = "IVA",\n            ["rate"] = 0.16\n          }\n        }\n      }\n    }\n  },\n  ["payment_form"] = "28", // "Tarjeta de d\xe9bito",\n  ["related_documents"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["relationship"] = "01", // "Nota de cr\xe9dito de los documentos relacionados"\n      ["documents"] = "UUID_DEL_CFDI_DE_INGRESO"\n    }\n  }\n\n});\n'})})}),(0,t.jsx)(o.c,{value:"php",label:"PHP",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$facturapi = new Facturapi( "sk_test_API_KEY" );\n\n$invoice = $facturapi->Invoices->create([\n  "type" => "E",\n  "customer" => [\n    "legal_name" => "Dunder Mifflin",\n    "email" => "email@example.com",\n    "tax_id" => "ABC101010111",\n    "tax_system" => "601",\n    "address" => [\n      "zip" => "85900"\n    ]\n  ],\n  "items" => [\n    [\n      "product" => [\n        "description" => "Descuento",\n        "price" => 400,\n        "taxes" => [\n          [\n            "type" => "IVA",\n            "rate" => 0.16\n          ]\n        ]\n      ]\n    ]\n  ],\n  "payment_form" => "28", // "Tarjeta de d\xe9bito",\n  "related_documents" => [\n    [\n      "relationship" => "01", // "Nota de cr\xe9dito de los documentos relacionados"\n      "documents" => "UUID_DEL_CFDI_DE_INGRESO"\n    ]\n  ]\n]);\n'})})}),(0,t.jsx)(o.c,{value:"curl",label:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://www.facturapi.io/v2/invoices \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "type": "E",\n    "customer": {\n      "legal_name": "Dunder Mifflin",\n      "email": "email@example.com",\n      "tax_id": "ABC101010111",\n      "tax_system": "601",\n      "address": {\n        "zip": "85900"\n      }\n    },\n    "items": [\n      {\n        "product": {\n          "description": "Descuento",\n          "price": 400,\n          "taxes": [\n            {\n              "type": "IVA",\n              "rate": 0.16\n            }\n          ]\n        }\n      }\n    ],\n    "payment_form": "28", // "Tarjeta de d\xe9bito"\n    "related_documents": [\n      {\n        "relationship": "01", // "Nota de cr\xe9dito de los documentos relacionados"\n        "documents": "UUID_DEL_CFDI_DE_INGRESO"\n      }\n    ]\n  }\'\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"devoluci\xf3n-de-mercanc\xeda",children:"Devoluci\xf3n de mercanc\xeda"}),"\n",(0,t.jsx)(n.p,{children:"Para este escenario, se emite un comprobante de egreso por $5000.00 pesos para anular el monto total de un CFDI de ingreso previo con el mismo monto."}),"\n",(0,t.jsxs)(i.c,{groupId:"codeExamples",children:[(0,t.jsx)(o.c,{value:"js",label:"Node.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('sk_test_API_KEY');\n\nconst invoice = await facturapi.invoices.create({\n  type: \"E\",\n  customer: {\n    legal_name: 'Dunder Mifflin',\n    email: 'email@example.com',\n    tax_id: 'ABC101010111',\n    tax_system: '601',\n    address: {\n      zip: '85900'\n    }\n  },\n  items: [{\n    product: {\n      description: 'Devoluci\xf3n total de mercanc\xeda',\n      price: 5000,\n      taxes: [\n        {\n          type: 'IVA',\n          rate: 0.16\n        }\n      ]\n    }\n  }],\n  payment_form: \"28\", // \"Tarjeta de d\xe9bito\"\n  related_documents: [\n    {\n      relationship: \"01\", // \"Nota de cr\xe9dito de los documentos relacionados\"\n      documents: \"UUID_DEL_CFDI_DE_INGRESO\"\n    }\n  ]\n});\n"})})}),(0,t.jsx)(o.c,{value:"cs",label:"C#",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var facturapi = new FacturapiClient("sk_test_API_KEY");\n\nvar invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>\n{\n  ["type"] = "E",\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Dunder Mifflin",\n    ["email"] = "email@example.com",\n    ["tax_id"] = "ABC101010111",\n    ["tax_system"] = "601",\n    ["address"] = new Dictionary<string, object>\n    {\n      ["zip"] = "85900"\n    }\n  },\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["product"] = new Dictionary<string, object>\n      {\n        ["description"] = "Devoluci\xf3n total de mercanc\xeda",\n        ["price"] = 5000,\n        ["taxes"] = new Dictionary<string, object>[]\n        {\n          new Dictionary<string, object>\n          {\n            ["type"] = "IVA",\n            ["rate"] = 0.16\n          }\n        }\n      }\n    }\n  },\n  ["payment_form"] = "28", // "Tarjeta de d\xe9bito",\n  ["related_documents"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["relationship"] = "01", // "Nota de cr\xe9dito de los documentos relacionados"\n      ["documents"] = "UUID_DEL_CFDI_DE_INGRESO"\n    }\n  }\n\n});\n'})})}),(0,t.jsx)(o.c,{value:"php",label:"PHP",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$facturapi = new Facturapi( "sk_test_API_KEY" );\n\n$invoice = $facturapi->Invoices->create([\n  "type" => "E",\n  "customer" => [\n    "legal_name" => "Dunder Mifflin",\n    "email" => "email@example.com",\n    "tax_id" => "ABC101010111",\n    "tax_system" => "601",\n    "address" => [\n      "zip" => "85900"\n    ]\n  ],\n  "items" => [\n    [\n      "product" => [\n        "description" => "Devoluci\xf3n total de mercanc\xeda",\n        "price" => 5000,\n        "taxes" => [\n          [\n            "type" => "IVA",\n            "rate" => 0.16\n          ]\n        ]\n      ]\n    ]\n  ],\n  "payment_form" => "28", // "Tarjeta de d\xe9bito",\n  "related_documents" => [\n    [\n      "relationship" => "01", // "Nota de cr\xe9dito de los documentos relacionados"\n      "documents" => "UUID_DEL_CFDI_DE_INGRESO"\n    ]\n  ]\n]);\n'})})}),(0,t.jsx)(o.c,{value:"curl",label:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://www.facturapi.io/v2/invoices \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "type": "E",\n    "customer": {\n      "legal_name": "Dunder Mifflin",\n      "email": "email@example.com",\n      "tax_id": "ABC101010111",\n      "tax_system": "601",\n      "address": {\n        "zip": "85900"\n      }\n    },\n    "items": [\n      {\n        "product": {\n          "description": "Devoluci\xf3n total de mercanc\xeda",\n          "price": 5000,\n          "taxes": [\n            {\n              "type": "IVA",\n              "rate": 0.16\n            }\n          ]\n        }\n      }\n    ],\n    "payment_form": "28", // "Tarjeta de d\xe9bito"\n    "related_documents": [\n      {\n        "relationship": "01", // "Nota de cr\xe9dito de los documentos relacionados"\n        "documents": "UUID_DEL_CFDI_DE_INGRESO"\n      }\n    ]\n  }\'\n'})})})]}),"\n",(0,t.jsx)(n.h3,{id:"bonificaci\xf3n-a-una-venta-futura",children:"Bonificaci\xf3n a una venta futura"}),"\n",(0,t.jsx)(n.p,{children:"Es posible ofrecer bonificaciones a ventas por realizarse de forma anticipada.\nEn este ejemplo se emite un CFDI de egreso por $400.00 pesos para amparar un bono\nque ser\xe1 aplicado a una venta por 2,000.00 pesos."}),"\n",(0,t.jsxs)(i.c,{groupId:"codeExamples",children:[(0,t.jsx)(o.c,{value:"js",label:"Node.js",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const Facturapi = require('facturapi');\nconst facturapi = new Facturapi('sk_test_API_KEY');\n\nconst invoice = await facturapi.invoices.create({\n  type: \"E\",\n  customer: {\n    legal_name: 'Dunder Mifflin',\n    email: 'email@example.com',\n    tax_id: 'ABC101010111',\n    tax_system: '601',\n    address: {\n      zip: '85900'\n    }\n  },\n  items: [{\n    product: {\n      description: 'Bonificaci\xf3n a venta futura',\n      price: 400,\n      taxes: [\n        {\n          type: 'IVA',\n          rate: 0.16\n        }\n      ]\n    }\n  }],\n  payment_form: \"23\" // \"Novaci\xf3n\"\n});\n"})})}),(0,t.jsx)(o.c,{value:"cs",label:"C#",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-csharp",children:'var facturapi = new FacturapiClient("sk_test_API_KEY");\n\nvar invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>\n{\n  ["type"] = "E",\n  ["customer"] = new Dictionary<string, object>\n  {\n    ["legal_name"] = "Dunder Mifflin",\n    ["email"] = "email@example.com",\n    ["tax_id"] = "ABC101010111",\n    ["tax_system"] = "601",\n    ["address"] = new Dictionary<string, object>\n    {\n      ["zip"] = "85900"\n    }\n  },\n  ["items"] = new Dictionary<string, object>[]\n  {\n    new Dictionary<string, object>\n    {\n      ["product"] = new Dictionary<string, object>\n      {\n        ["description"] = "Bonificaci\xf3n a venta futura",\n        ["price"] = 400,\n        ["taxes"] = new Dictionary<string, object>[]\n        {\n          new Dictionary<string, object>\n          {\n            ["type"] = "IVA",\n            ["rate"] = 0.16\n          }\n        }\n      }\n    }\n  },\n  ["payment_form"] = "23" // "Novaci\xf3n"\n});\n'})})}),(0,t.jsx)(o.c,{value:"php",label:"PHP",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-php",children:'$facturapi = new Facturapi( "sk_test_API_KEY" );\n\n$invoice = $facturapi->Invoices->create([\n  "type" => "E",\n  "customer" => [\n    "legal_name" => "Dunder Mifflin",\n    "email" => "email@example.com",\n    "tax_id" => "ABC101010111",\n    "tax_system" => "601",\n    "address" => [\n      "zip" => "85900"\n    ]\n  ],\n  "items" => [\n    [\n      "product" => [\n        "description" => "Bonificaci\xf3n a venta futura",\n        "price" => 400,\n        "taxes" => [\n          [\n            "type" => "IVA",\n            "rate" => 0.16\n          ]\n        ]\n      ]\n    ]\n  ],\n  "payment_form" => "23" // "Novaci\xf3n"\n]);\n'})})}),(0,t.jsx)(o.c,{value:"curl",label:"cURL",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl https://www.facturapi.io/v2/invoices \\\n  -H "Authorization: Bearer sk_test_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{\n    "type": "E",\n    "customer": {\n      "legal_name": "Dunder Mifflin",\n      "email": "email@example.com",\n      "tax_id": "ABC101010111",\n      "tax_system": "601",\n      "address": {\n        "zip": "85900"\n      }\n    },\n    "items": [\n      {\n        "product": {\n          "description": "Descuento",\n          "price": 400,\n          "taxes": [\n            {\n              "type": "IVA",\n              "rate": 0.16\n            }\n          ]\n        }\n      }\n    ],\n    "payment_form": "23" // "Novaci\xf3n"\n  }\'\n'})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},5388:(e,n,a)=>{a.d(n,{c:()=>o});a(1504);var t=a(4064);const r={tabItem:"tabItem_Ymn6"};var i=a(7624);function o(e){let{children:n,hidden:a,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.c)(r.tabItem,o),hidden:a,children:n})}},1268:(e,n,a)=>{a.d(n,{c:()=>y});var t=a(1504),r=a(4064),i=a(3943),o=a(5592),s=a(5288),c=a(632),l=a(7128),d=a(1148);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,l.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const r=(0,o.Uz)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._M)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:r}=e,i=p(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[l,u]=f({queryString:a,groupId:r}),[h,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,d.IN)(a);return[r,(0,t.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=l??h;return m({value:e,tabValues:i})?e:null})();(0,s.c)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=a(3664);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(7624);function x(e){let{className:n,block:a,selectedValue:t,selectValue:o,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.MV)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),r=s[a].value;r!==t&&(l(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.c)("tabs",{"tabs--block":a},n),children:s.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.c)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function _(e){let{lazy:n,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,r.c)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(_,{...e,...n})]})}function y(e){const n=(0,b.c)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(n))}},2172:(e,n,a)=>{a.d(n,{I:()=>s,M:()=>o});var t=a(1504);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);