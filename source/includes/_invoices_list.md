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

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$invoices = $facturapi->Invoices->all();
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
      "customer": {
        "id": "58e93bd8e86eb318b0197456",
        "legal_name": "Bimbo de México S.A. de C.V.",
        "tax_id": "MESB900314R87"
      },
      "total": 345.6,
      "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
      "items": [
        {
          "quantity": 2,
          "discount": 0,
          "product": {
            "id": "58e93bd8e86eb318b0197454",
            "description": "Guitarra"
          }
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
**date**<br><small>opcional</small> | object | none | Diccionario con atributos que representan el rango de fechas solicitado.
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

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$invoice = $facturapi->Invoices->retrieve( "59914af9b1bece552fcaaafd" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "active",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 2,
      "discount": 0,
      "product": {
        "id": "58e93bd8e86eb318b0197454",
        "description": "Guitarra"
      }
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

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$zip = $facturapi->Invoices->download_zip("INVOICE_ID") // stream containing the PDF and XML as a ZIP file or

$pdf = $facturapi->Invoices->download_pdf("INVOICE_ID") // stream containing the PDF file or

$xml = $facturapi->Invoices->download_xml("INVOICE_ID") // stream containing the XML file or
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

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$facturapi->Invoices->send_by_email("INVOICE_ID");
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

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$facturapi->Invoices->cancel("INVOICE_ID");
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "canceled",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 2,
      "discount": 0,
      "product": {
        "id": "58e93bd8e86eb318b0197454",
        "description": "Guitarra"
      }
    }
  ]
}
```

Realiza una solicitud de cancelación de factura ante el SAT. La factura ya no tendrá validez, el objeto cambiará su `status` a `"canceled"` y seguirá estando disponible para futuras consultas.

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura a cancelar.
