## Facturas

### Objeto Factura

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-01-01T14:00:08.000Z",
  "livemode": false,
  "status": "valid",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 10944.82,
  "uuid": "39c85a3f-275b-4341-b259-e8971d9f8a94",
  "folio_number": 914,
  "series": "A",
  "payment_form": "06",
  "items": [{
    "quantity": 2,
    "product": {
      "id": "58e93bd8e86eb318b0197454",
      "unit_name": "Piezas",
      "description": "Gafas de sol Ray-Ban"
    }
  }]
}
```

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id** | string | Identificador de la factura.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**livemode** | boolean | `true`: fue creado en modo producción, `false`: fue creado en modo pruebas
**status** | string | Estado actual de la factura. Posibles valores: `"valid"` si la factura fue emitida correctamente; `"canceled"` si fue cancelada.
**customer** | objeto | Información básica del cliente al que se le realiza la factura.
**customer.id** | string | Identificador del cliente.
**customer.legal_name** | string | Nombre Fiscal o Razón Social del cliente.
**customer.tax_id** | string | RFC del cliente.
**total** | decimal | Monto total facturado.
**uuid** | string | Folio fiscal de la factura emitido por el SAT.
**folio_number** | integer | Número de folio autoincremental para control interno y sin validez fiscal.
**series** | string | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**payment_form** | string | Código que representa la forma de pago, según el catálogo del SAT.
**items** | array | Arreglo de conceptos facturados.
**items[].quantity** | integer | Cantidad de unidades del concepto facturado.
**items[].product** | objeto | Información básica del producto del concepto facturado.
**items[].product.id** | string | Identificador del producto.
**items[].product.unit_name** | string | Unidad de medida del producto.
**items[].product.description** | string | Descripción del producto.

### Crear Factura

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
    "customer": "58e93bd8e86eb318b0197456",
    "items": [{
      "quantity": 2,
      "product": "58e93bd8e86eb318b0197454"
    }],
    "payment_form": "06",
    "folio_number": 914,
    "series": "A"
  }'
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.create({
  customer: '58e93bd8e86eb318b0197456',
  items: [{
    quantity: 2,
    product: '58e93bd8e86eb318b0197454'
  }],
  payment_form: facturapi.PaymentForm.DINERO_ELECTRONICO,
  folio_number: 914,
  series: 'A'
})
  .then(invoice => { /* ... */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["customer"] = "58e93bd8e86eb318b0197456",
  ["items"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {
      ["quantity"] = 2,
      ["product"] = "58e93bd8e86eb318b0197454"
    }
  }
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
  ["folio_number"] = 914,
  ["series"] = "A"
});

```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "active",
  "customer": "58e93bd8e86eb318b0197456",
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 2,
      "product": "58e93bd8e86eb318b0197454"
    }
  ]
}
```

Crea una nueva Factura

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**customer**<br><small>requerido</small> | string | none | Identificador del cliente a facturar
**items**<br><small>requerido</small> | array | none | Arreglo de objetoes que representan los productos y las cantidades de éstos a incluir en la factura.
**items[].product**<br><small>requerido</small> | string u objeto | none | En el caso de tener productos fijos ya registrados (como en un marketplace) puedes enviar el Id del producto a facturar. O bien, si tu producto es cambiante (como en un SaaS) puedes enviar un objeto con la información del producto (acepta los mismos elementos detallados en la sección Crear Producto), el cuál sólo se usará para generar la factura y no se guardará en tu catálogo de productos.
**items[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad de unidades del producto.
**payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**payment_method**<br><small>opcional</small> | string | "PUE" (Pago en una sola exhibición) | Código del método de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**use**<br><small>opcional</small> | string | "G01" (Adquisición de mercancías) | Código de Uso CFDI según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**folio_number**<br><small>opcional</small> | string | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización. Si se envía un valor, este nuevo valor se usará para designar el siguiente número de folio de la organización.
**series**<br><small>opcional</small> | string | "" | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.

#### Formas de pago

Código | Descripción
:-----:| -----------
"01" | Efectivo
"02" | Cheque nominativo
"03" | Transferencia electrónica de fondos
"04" | Tarjeta de crédito
"05" | Monedero electrónico
"06" | Dinero electrónico
"08" | Vales de despensa
"12" | Dación en pago
"13" | Pago por subrogación
"14" | Pago por consignación
"15" | Condonación
"17" | Compensación
"23" | Novación
"24" | Confusión
"25" | Remisión de deuda
"26" | Prescripción o caducidad
"27" | A satisfacción del acreedor
"28" | Tarjeta de débito
"29" | Tarjeta de servicios
"30" | Aplicación de anticipos
"31" | Intermediario pagos
"99" | Por definir

#### Métodos de pago

Código | Descripción
:-----:| -----------
"PUE" | Pago en una sola exhibición
"PPD" | Pago en parcialidades o diferido

#### Uso CFDI

Código | Descripción
:-----:| -----------
"G01" |	Adquisición de mercancias.
"G02" |	Devoluciones, descuentos o bonificaciones.
"G03" |	Gastos en general.
"I01" |	Construcciones.
"I02" |	Mobilario y equipo de oficina por inversiones.
"I03" |	Equipo de transporte.
"I04" |	Equipo de computo y accesorios.
"I05" |	Dados, troqueles, moldes, matrices y herramental.
"I06" |	Comunicaciones telefónicas.
"I07" |	Comunicaciones satelitales.
"I08" |	Otra maquinaria y equipo.
"D01" |	Honorarios médicos, dentales y gastos hospitalarios.
"D02" |	Gastos médicos por incapacidad o discapacidad.
"D03" |	Gastos funerales.
"D04" |	Donativos.
"D05" |	Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación).
"D06" |	Aportaciones voluntarias al SAR.
"D07" |	Primas por seguros de gastos médicos.
"D08" |	Gastos de transportación escolar obligatoria.
"D09" |	Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones.
"D10" |	Pagos por servicios educativos (colegiaturas).
"P01" |	Por definir.

### Crear Comprobante de Egreso

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
        "type": "E",
        "customer": "58e93bd8e86eb318b0197456",
        "payment_form": "06",
        "relation": "03",
        "related": ["UUID_de_factura_relacionada"],
        "product": {
          "description": "Devolución de Impresora HP G3700",
          "price": 499.50
        }
      }'
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.create({
  type: facturapi.InvoiceType.EGRESO,
  customer: customer.id,
  payment_form: acturapi.PaymentForm.DINERO_ELECTRONICO,
  relation: facturapi.InvoiceRelation.DEVOLUCION,
  related: ['UUID_de_factura_relacionada'],
  product: {
    description: 'Devolución de Impresora HP G3700',
    price: 499.50
  }
})
  .then(invoice => { /* ... */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["type"] = Facturapi.InvoiceType.EGRESO,
  ["customer"] = customer.Id,
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
  ["relation"] = Facturapi.InvoiceRelation.DEVOLUCION,
  ["related"] = new string[] { "UUID_de_factura_relacionada" },
  ["product"] = new Dictionary<string, object>
  {
    ["description"] = "Devolución de Impresora HP G3700",
    ["price"] = 499.50
  }
});
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "type": "E",
  "livemode": false,
  "status": "active",
  "customer": "58e93bd8e86eb318b0197456",
  "total": 499.50,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 1,
      "description": "Devolución de Impresora HP G3700"
    }
  ],
  "related": ["D26CDE56-F5BB-11E7-8C3F-9A214CF093AE"]
}
```

Crea una nueva Factura de tipo **comprobante de egreso**, también conocida como **nota de crédito**.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**type**<br><small>requerido</small> | string | none | Tipo de comprobante. Este valor define qué tipo de factura se va a emitir, por lo que debe tener el valor "E", o la constante InvoiceType.EGRESO.
**customer**<br><small>requerido</small> | string | none | Identificador del cliente a facturar.
**payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla antes mostrada, o utilizar las constantes incluídas en nuestras librerías `PaymentForm`.
**related**<br><small>requerido</small> | array of strings | none | Arreglo con uno o más folios fiscales (UUID) de las facturas relacionadas.
**relation**<br><small>opcional</small> | string | "01" (Nota de crédito) | Código de relación entre facturas según el catálogo del SAT. Puedes ver los códigos en la tabla mostrada más abajo, o utilizar las constantes incluidas en nuestras librerías `InvoiceRelation`.
**product**<br><small>requerido</small> | objeto | none | Objeto con detalles del concepto a facturar. Los comprobantes de egreso permiten un sólo concepto.
**product.description**<br><small>requerido</small> | string | none | Resumen de la operación en una sola descripción. Deben mencionarse cada uno de los productos que contempla el descuento, devolución o bonificación aplicada y que contienen las facturas relacionadas. Si el egreso está basado en un pocentaje (como al aplicar un 30% de descuento), dicho porcentaje debe incluirse en la descripción junto al nombre del producto que corresponda.
**product.price**<br><small>requerido</small> | decimal | none | Suma total de la cantidad devuelta, descontada o bonificada.
**product.[...]**<br><small>opcional</small> | various | various | Puedes usar las demás propiedades de [Crear Producto](#crear-producto), con la diferencia de que las no mencionadas en esta sección son opcionales y adquirirán el valor recomendado para el comprobante de Egreso.
**folio_number**<br><small>opcional</small> | string | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización. Si se envía un valor, este nuevo valor se usará para designar el siguiente número de folio de la organización.
**series**<br><small>opcional</small> | string | "" | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.

#### Relación entre facturas

Código | Descripción
:-----:| -----------
"01" | Nota de crédito de los documentos relacionados
"02" | Nota de débito de los documentos relacionados
"03" | Devolución de mercancía sobre facturas o traslados previos
"04" | Sustitución de los CFDI previos
"05" | Traslados de mercancias facturados previamente
"06" | Factura generada por los traslados previos
"07" | CFDI por aplicación de anticipo
"08" | Factura generada por pagos en parcialidades
"09" | Factura generada por pagos diferidos

### Lista de Facturas

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl "https://www.facturapi.io/v1/invoices?customer=58e93bd8e86eb318b0197456&date[gt]=2017-01-01T06:00:00.000Z" \
  -u "sk_test_API_KEY:" \
  -Gg
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.list()
  .then(list => { /* list.data contains the result array */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var searchResult = await facturapi.Invoice.ListAsync();
// searchResult.Data is an Invoice array
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "data": [
    {
      "id": "58e93bd8e86eb318b019743d",
      "created_at": "2017-03-26T01:49:47.372Z",
      "livemode": false,
      "status": "active",
      "customer": "58e93bd8e86eb318b0197456",
      "total": 345.6,
      "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
      "items": [
        {
          "quantity": 2,
          "product": "58e93bd8e86eb318b0197454"
        }
      ]
    }
  ]
}
```

Obtiene la lista de facturas emitidas.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en el nombre fiscal del cliente o su RFC.
**customer**<br><small>opcional</small> | string | "" | Identificador del cliente. Útil para obtener las facturas emitidas a un sólo cliente.
**date**<br><small>opcional</small> | objeto | none | Diccionario con atributos que representan el rango de fechas solicitado.
**date.gt**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es posterior a esta fecha.
**date.gte**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es posterior o igual a esta fecha.
**date.lt**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es anterior a esta fecha.
**date.lte**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es anterior o igual a esta fecha.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

### Obtener una Factura

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/invoices/{INVOICE_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d \
  -u "sk_test_API_KEY:"
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.retrieve('58e93bd8e86eb318b019743d')
  .then(invoice => { /* ... */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var invoice = await facturapi.Invoice.RetrieveAsync("58e93bd8e86eb318b019743d");
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "active",
  "customer": "58e93bd8e86eb318b0197456",
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 2,
      "product": "58e93bd8e86eb318b0197454"
    }
  ]
}
```

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

### Descargar Factura

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/invoices/{INVOICE_ID}/zip
GET https://www.facturapi.io/v1/invoices/{INVOICE_ID}/pdf
GET https://www.facturapi.io/v1/invoices/{INVOICE_ID}/xml
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
## Descargar PDF y XML comprimidos en archivo ZIP
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/zip \
  -u "sk_test_API_KEY:"

## Descargar sólo el PDF
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/pdf \
  -u "sk_test_API_KEY:"

## Descargar sólo el XML
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/xml \
  -u "sk_test_API_KEY:"
```

```javascript
const fs = require('fs');
const facturapi = require('facturapi')('sk_test_API_KEY');

// Descargar PDF y XML comprimidos en archivo ZIP
facturapi.invoices.downloadZip('58e93bd8e86eb318b019743d')
  .then(zipStream => {
    const file = fs.createWriteStream('./factura.zip');
    zipStream.pipe(file);
  });

// Descargar sólo el PDF
facturapi.invoices.downloadPdf('58e93bd8e86eb318b019743d')
  .then(pdfStream => {
    const file = fs.createWriteStream('./factura.pdf');
    pdfStream.pipe(file);
  });

// Descargar sólo el XML
facturapi.invoices.downloadXml('58e93bd8e86eb318b019743d')
  .then(xmlStream => {
    const file = fs.createWriteStream('./factura.xml');
    xmlStream.pipe(file);
  });
```

```csharp
// Descargar PDF y XML comprimidos en archivo ZIP
var zipStream = await facturapi.Invoice.DownloadZipAsync("58e93bd8e86eb318b019743d");
// Descargar sólo el XML
var xmlStream = await facturapi.Invoice.DownloadXmlAsync("58e93bd8e86eb318b019743d");
// Descargar sólo el PDF
var pdfStream = await facturapi.Invoice.DownloadPdfAsync("58e93bd8e86eb318b019743d");

// Para guardar la descarga en un archivo
var file = new System.IO.FileStrem("C:\\route\\to\\save\\invoice.zip", FileMode.Create);
zipStream.CopyTo(file);
file.Close();
```

Descarga tu Factura en PDF, XML o ambas comprimidas en ZIP

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

### Enviar Factura por email

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices/{INVOICE_ID}/email
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \
  -u "sk_test_API_KEY:"
  -X POST
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.sendByEmail('58e93bd8e86eb318b019743d')
  .then(() => { /* invoice has been sent */ })
  .catch(err => { /* handle the error */ })
```

```csharp
await facturapi.Invoice.SendByEmailAsync("58e93bd8e86eb318b019743d");
```

Envía un correo electrónico al email de tu cliente, con los archivos XML y PDF adjuntos al mensaje.

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

### Cancelar Factura

> <h4 class="toc-ignore">Definición</h4>

```text
DELETE https://www.facturapi.io/v1/invoices/{INVOICE_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d \
  -u "sk_test_API_KEY:" \
  -X DELETE
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.cancel('58e93bd8e86eb318b019743d')
  .then(() => { /* invoice.status is now 'canceled' */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var invoice = await facturapi.Invoice.CancelAsync("58e93bd8e86eb318b019743d");
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "canceled",
  "customer": "58e93bd8e86eb318b0197456",
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 2,
      "product": "58e93bd8e86eb318b0197454"
    }
  ]
}
```

Realiza una solicitud de cancelación de factura ante el SAT. La factura ya no tendrá validez, el objeto cambiará su `status` a `"canceled"` y seguirá estando disponible para futuras consultas.

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura a cancelar.
