"use strict";(self.webpackChunkfacturapi_docs=self.webpackChunkfacturapi_docs||[]).push([[812],{5492:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/en/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Quickstart","href":"/en/docs/quickstart","docId":"quickstart","unlisted":false},{"type":"category","label":"Getting started","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"API Concepts","href":"/en/docs/getting-started/concepts","docId":"getting-started/concepts","unlisted":false},{"type":"link","label":"SDK Installation","href":"/en/docs/getting-started/install","docId":"getting-started/install","unlisted":false},{"type":"link","label":"Authentication","href":"/en/docs/getting-started/authenticate","docId":"getting-started/authenticate","unlisted":false},{"type":"link","label":"Date formatting","href":"/en/docs/getting-started/dates","docId":"getting-started/dates","unlisted":false}]},{"type":"category","label":"Guides","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Registering and validating customers","href":"/en/docs/guides/customers","docId":"guides/customers","unlisted":false},{"type":"link","label":"Products","href":"/en/docs/guides/products","docId":"guides/products","unlisted":false},{"type":"category","label":"Invoices / CFDI","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Income (Ingreso)","href":"/en/docs/guides/invoices/ingreso","docId":"guides/invoices/ingreso","unlisted":false},{"type":"link","label":"Payment (Pago)","href":"/en/docs/guides/invoices/pago","docId":"guides/invoices/pago","unlisted":false},{"type":"link","label":"Egress (Egreso)","href":"/en/docs/guides/invoices/egreso","docId":"guides/invoices/egreso","unlisted":false},{"type":"link","label":"Payroll (N\xf3mina)","href":"/en/docs/guides/invoices/nomina","docId":"guides/invoices/nomina","unlisted":false},{"type":"link","label":"Transfer (Traslado)","href":"/en/docs/guides/invoices/traslado","docId":"guides/invoices/traslado","unlisted":false},{"type":"link","label":"Retentions (Retenciones)","href":"/en/docs/guides/invoices/retencion","docId":"guides/invoices/retencion","unlisted":false},{"type":"link","label":"Complements","href":"/en/docs/guides/invoices/complementos","docId":"guides/invoices/complementos","unlisted":false},{"type":"link","label":"Relationships","href":"/en/docs/guides/invoices/relacionados","docId":"guides/invoices/relacionados","unlisted":false}],"href":"/en/docs/guides/invoices/"},{"type":"link","label":"Organizations (Multi-RFC)","href":"/en/docs/guides/organizations","docId":"guides/organizations","unlisted":false},{"type":"link","label":"E-Receipts","href":"/en/docs/guides/receipts","docId":"guides/receipts","unlisted":false},{"type":"link","label":"Self-Invoicing","href":"/en/docs/guides/self-invoice","docId":"guides/self-invoice","unlisted":false},{"type":"link","label":"Invoice drafts","href":"/en/docs/guides/drafts","docId":"guides/drafts","unlisted":false}]}]},"docs":{"getting-started/authenticate":{"id":"getting-started/authenticate","title":"Authentication","description":"In order to call any API method, you will need to identify yourself","sidebar":"tutorialSidebar"},"getting-started/concepts":{"id":"getting-started/concepts","title":"API Concepts","description":"If this is your first time integrating with the Facturapi API, we recommend familiarizing yourself with the following concepts, which will help you better understand the integration flow.","sidebar":"tutorialSidebar"},"getting-started/dates":{"id":"getting-started/dates","title":"Date formatting","description":"While our recommendation is to send a string with the date in UTC and ISO8601 format, we understand that this may not always be the most practical.","sidebar":"tutorialSidebar"},"getting-started/install":{"id":"getting-started/install","title":"SDK Installation","description":"We have official libraries for the following languages:","sidebar":"tutorialSidebar"},"guides/customers":{"id":"guides/customers","title":"Registering and validating customers","description":"Registering your customers in Facturapi allows you to validate their tax information","sidebar":"tutorialSidebar"},"guides/drafts":{"id":"guides/drafts","title":"Invoice drafts","description":"Invoice drafts allow you to save a preliminary or incomplete invoice, so you can send it to your client for review before applying the stamp and sending it to the SAT.","sidebar":"tutorialSidebar"},"guides/invoices/complementos":{"id":"guides/invoices/complementos","title":"Complements","description":"Currently, FacturAPI supports the issuance of all types of CFDI as well as all","sidebar":"tutorialSidebar"},"guides/invoices/egreso":{"id":"guides/invoices/egreso","title":"Egress (Egreso)","description":"The fiscal document of type Egreso, or Credit Note, is used to record","sidebar":"tutorialSidebar"},"guides/invoices/index":{"id":"guides/invoices/index","title":"Facturas / CFDI","description":"Un Comprobante Fiscal Digital por Internet (CFDI) es un documento electr\xf3nico","sidebar":"tutorialSidebar"},"guides/invoices/ingreso":{"id":"guides/invoices/ingreso","title":"Income (Ingreso)","description":"The Income invoice, also known simply as an invoice, is a document used","sidebar":"tutorialSidebar"},"guides/invoices/nomina":{"id":"guides/invoices/nomina","title":"Payroll (N\xf3mina)","description":"A Payroll Invoice, also known as a payroll receipt, is used to provide evidence of payment under labor legislation.","sidebar":"tutorialSidebar"},"guides/invoices/pago":{"id":"guides/invoices/pago","title":"Payment (Pago)","description":"The Payment Invoice, also known as Electronic Payment Receipt (EPR) or simply payment complement, is used to provide fiscal proof that the organization has received a payment for goods or services delivered in the past.","sidebar":"tutorialSidebar"},"guides/invoices/relacionados":{"id":"guides/invoices/relacionados","title":"Relationships","description":"In addition to the different types of invoices, there is a concept known as \\"Related CFDI\\" used when additional information about a transaction needs to be issued.","sidebar":"tutorialSidebar"},"guides/invoices/retencion":{"id":"guides/invoices/retencion","title":"Retentions (Retenciones)","description":"The retention invoiceis a different document from a standard invoice, meaning","sidebar":"tutorialSidebar"},"guides/invoices/traslado":{"id":"guides/invoices/traslado","title":"Transfer (Traslado)","description":"A Transfer Invoice (also known as Transportation Letter) is a type of","sidebar":"tutorialSidebar"},"guides/organizations":{"id":"guides/organizations","title":"Organizations (Multi-RFC)","description":"Register multiple issuing organizations","sidebar":"tutorialSidebar"},"guides/products":{"id":"guides/products","title":"Products","description":"Registering your product or service catalog in Facturapi allows you to store","sidebar":"tutorialSidebar"},"guides/receipts":{"id":"guides/receipts","title":"E-Receipts","description":"An e-receipt is the digital version of a ticket or sales receipt. It is a payment","sidebar":"tutorialSidebar"},"guides/self-invoice":{"id":"guides/self-invoice","title":"Self-Invoicing","description":"Facturapi allows you to have a microsite with your company\'s logo and colors,","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Facturapi\'s web service allows you to interact with digital tax receipts (CFDI) in a secure, simple, and low maintainance way.","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Quickstart","description":"1. Install the package","sidebar":"tutorialSidebar"}}}}')}}]);