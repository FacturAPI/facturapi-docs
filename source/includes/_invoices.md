# Facturas

## Objeto Factura

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
**customer** | hash | Información básica del cliente al que se le realiza la factura.
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
**items[].product** | hash | Información básica del producto del concepto facturado.
**items[].product.id** | string | Identificador del producto.
**items[].product.unit_name** | string | Unidad de medida del producto.
**items[].product.description** | string | Descripción del producto.

## Crear Factura

> <h3 class="toc-ignore">Ejemplo de Petición</h3>

```shell
curl https://www.facturapi.io/v1/invoices \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
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
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
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
var invoice = await Facturapi.Invoice.CreateAsync(new Dictionary<string, object>
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

> <h3 class="toc-ignore">Respuesta JSON</h3>

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

### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**customer**<br><small>requerido</small> | string | none | Identificador del cliente a facturar
**items**<br><small>requerido</small> | array | none | Arreglo de hashes que representan los productos y las cantidades de éstos a incluir en la factura.
**items[].product**<br><small>requerido</small> | string ó hash | none | En el caso de tener productos fijos ya registrados (como en un marketplace) puedes enviar el Id del producto a facturar. O bien, si tu producto es cambiante (como en un SaaS) puedes enviar un hash con la información del producto (acepta los mismos elementos detallados en la sección Crear Producto), el cuál sólo se usará para generar la factura y no se guardará en tu catálogo de productos.
**items[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad de unidades del producto.
**payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**folio_number**<br><small>opcional</small> | string | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización. Si se envía un valor, este nuevo valor se usará para designar el siguiente número de folio de la organización.
**series**<br><small>opcional</small> | string | "" | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.

### Formas de pago

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
"99" | Por definir

## Lista de Facturas

> <h3 class="toc-ignore">Ejemplo de Petición</h3>

```shell
curl "https://www.facturapi.io/v1/invoices?customer=58e93bd8e86eb318b0197456&date[gt]=2017-01-01T06:00:00.000Z" \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -Gg
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.invoices.list()
  .then(list => { /* list.data contains the result array */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var searchResult = await Facturapi.Invoice.ListAsync();
// searchResult.Data is an Invoice array
```

> <h3 class="toc-ignore">Respuesta JSON</h3>

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

### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en el nombre fiscal del cliente o su RFC.
**customer**<br><small>opcional</small> | string | "" | Identificador del cliente. Útil para obtener las facturas emitidas a un sólo cliente.
**date**<br><small>opcional</small> | hash | none | Diccionario con atributos que representan el rango de fechas solicitado.
**date.gt**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es posterior a esta fecha.
**date.gte**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es posterior o igual a esta fecha.
**date.lt**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es anterior a esta fecha.
**date.lte**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es anterior o igual a esta fecha.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

## Obtener una Factura

> <h3 class="toc-ignore">Ejemplo de Petición</h3>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.invoices.retrieve('58e93bd8e86eb318b019743d')
  .then(invoice => { /* ... */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var invoice = await Facturapi.Invoice.RetrieveAsync("58e93bd8e86eb318b019743d");
```

> <h3 class="toc-ignore">Respuesta JSON</h3>

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

### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

## Descargar Factura

> <h3 class="toc-ignore">Ejemplo de Petición</h3>

```shell
# Descargar PDF y XML comprimidos en archivo ZIP
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/zip \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"

# Descargar sólo el PDF
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/pdf \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"

# Descargar sólo el XML
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/xml \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"
```

```javascript
const fs = require('fs');
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');

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
var zipStream = await Facturapi.Invoice.DownloadZipAsync("58e93bd8e86eb318b019743d");
// Descargar sólo el XML
var xmlStream = await Facturapi.Invoice.DownloadXmlAsync("58e93bd8e86eb318b019743d");
// Descargar sólo el PDF
var pdfStream = await Facturapi.Invoice.DownloadPdfAsync("58e93bd8e86eb318b019743d");

// Para guardar la descarga en un archivo
var file = new System.IO.FileStrem("C:\\route\\to\\save\\invoice.zip", FileMode.Create);
zipStream.CopyTo(file);
file.Close();
```

Descarga tu Factura en PDF, XML o ambas comprimidas en ZIP

### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

## Enviar Factura por email

> <h3 class="toc-ignore">Ejemplo de Petición</h3>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"
  -X POST
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.invoices.sendByEmail('58e93bd8e86eb318b019743d')
  .then(() => { /* invoice has been sent */ })
  .catch(err => { /* handle the error */ })
```

```csharp
await Facturapi.Invoice.SendByEmailAsync("58e93bd8e86eb318b019743d");
```

Envía un correo electrónico al email de tu cliente, con los archivos XML y PDF adjuntos al mensaje.

### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

## Cancelar Factura

> <h3 class="toc-ignore">Ejemplo de Petición</h3>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -X DELETE
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.invoices.cancel('58e93bd8e86eb318b019743d')
  .then(() => { /* invoice.status is now 'canceled' */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var invoice = await Facturapi.Invoice.CancelAsync("58e93bd8e86eb318b019743d");
```

> <h3 class="toc-ignore">Respuesta JSON</h3>

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

### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura a cancelar.
