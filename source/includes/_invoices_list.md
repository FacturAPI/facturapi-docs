### Lista de Facturas

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
# Todas las facturas de la organización
curl "https://www.facturapi.io/v1/invoices" \
  -G \
  -u "sk_test_API_KEY:"
# Todas las facturas emitidas para cierto cliente
curl "https://www.facturapi.io/v1/invoices" \
  -G \
  -u "sk_test_API_KEY:" \
  -d "customer=58e93bd8e86eb318b0197456"
# Página 3 de los resultados de búsqueda de texto libre
# de facturas emitidas por cierto cliente entre 2017 y 2019
curl "https://www.facturapi.io/v1/invoices" \
  -G \
  -u "sk_test_API_KEY:" \
  -d "q=Aspiradora+Robot&customer=58e93bd8e86eb318b0197456&date[gte]=2017-01-01&date[lt]=2020-01-01&page=3&limit=10"
});
```

```javascript
// Todas las facturas de la organización
const invoiceSearch = await facturapi.invoices.list();
// Todas las facturas emitidas para cierto cliente
const invoiceSearch = await facturapi.invoices.list({
  customer: '590ce6c56d04f840aa8438af'
});
// Página 3 de los resultados de búsqueda de texto libre
// de facturas emitidas por cierto cliente entre 2017 y 2019
const invoiceSearch = await facturapi.invoices.list({
  q: 'Aspiradora Robot',
  customer: '590ce6c56d04f840aa8438af',
  date: {
    gte: new Date('2017-01-01'),
    lt: new Date('2020-01-01')
  },
  page: 3,
  limit: 10,
});
```

```csharp
// Todas las facturas de la organización
var searchResult = await facturapi.Invoice.ListAsync();

// Todas las facturas emitidas para cierto cliente
var searchResult = await facturapi.Invoice.ListAsync(
  new Dictionary<string, object>
  {
    ["customer"] = "590ce6c56d04f840aa8438af"
  }
);
// Página 3 de los resultados de búsqueda de texto libre
// de facturas emitidas por cierto cliente entre 2017 y 2019
var searchResult = await facturapi.Invoice.ListAsync(
  new Dictionary<string, object>
  {
    ["q"] = "Aspiradora Robot",
    ["customer"] = "590ce6c56d04f840aa8438af",  
    ["date"] = new Dictionary<string, object>
      {
        ["gte"] = new DateTime("2017-01-01"),
        ["lt"] = new DateTime("2020-01-01")
      },
    ["page"] = 3,
    ["limit"] = 10,
  }
);
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

// Todas las facturas de la organización
$invoices = $facturapi->Invoices->all();
// Todas las facturas emitidas para cierto cliente
$invoices = $facturapi->Invoices->all(array(
  customer => "590ce6c56d04f840aa8438af"
));
// Página 3 de los resultados de búsqueda de texto libre
// de facturas emitidas por cierto cliente entre 2017 y 2019
$invoices = $facturapi->Invoices->all(array(
  q => 'Aspiradora Robot',
  customer => "590ce6c56d04f840aa8438af"
  date => array(
    gte => new DateTime("2017-01-01"),
    lt => new DateTime("2020-01-01")
  ),
  page => 3,
  limit => 10,
));
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 7,
  "total_results": 33,
  "data": [
    {
      "id": "58e93bd8e86eb318b019743d",
      "created_at": "2017-03-26T01:49:47.372Z",
      "livemode": false,
      "status": "valid",
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

Obtiene la lista paginada de facturas emitidas por la organización. Puedes usar los argumentos para filtrar.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en el nombre fiscal del cliente o su RFC.
**customer**<br><small>opcional</small> | string | "" | Identificador del cliente. Útil para obtener las facturas emitidas a un sólo cliente.
**date**<br><small>opcional</small> | object | none | Objeto con atributos que representan el rango de fechas solicitado.
**date.gt**<br><small>opcional</small> | string or date | none | Regresa facturas cuya fecha de creación es posterior a esta fecha.
**date.gte**<br><small>opcional</small> | string or date | none | Regresa facturas cuya fecha de creación es posterior o igual a esta fecha.
**date.lt**<br><small>opcional</small> | string or date | none | Regresa facturas cuya fecha de creación es anterior a esta fecha.
**date.lte**<br><small>opcional</small> | string or date | none | Regresa facturas cuya fecha de creación es anterior o igual a esta fecha.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

### Obtener una Factura

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/invoices/{id}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d \
  -u "sk_test_API_KEY:"
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_API_KEY');
const invoice = await facturapi.invoices.retrieve('58e93bd8e86eb318b019743d');
```

```csharp
var invoice = await facturapi.Invoice.RetrieveAsync("58e93bd8e86eb318b019743d");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$invoice = $facturapi->Invoices->retrieve( "59914af9b1bece552fcaaafd" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "valid",
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
GET https://www.facturapi.io/v1/invoices/{id}/zip
GET https://www.facturapi.io/v1/invoices/{id}/pdf
GET https://www.facturapi.io/v1/invoices/{id}/xml
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
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_API_KEY');

// Descargar PDF y XML comprimidos en archivo ZIP
const zipStream = await facturapi.invoices.downloadZip('58e93bd8e86eb318b019743d');
const file = fs.createWriteStream('./factura.zip');
zipStream.pipe(file);

// Descargar sólo el PDF
const pdfStream = await facturapi.invoices.downloadPdf('58e93bd8e86eb318b019743d');
const file = fs.createWriteStream('./factura.pdf');
pdfStream.pipe(file);

// Descargar sólo el XML
const xmlStream = await facturapi.invoices.downloadXml('58e93bd8e86eb318b019743d');
const file = fs.createWriteStream('./factura.xml');
xmlStream.pipe(file);
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
$facturapi = new Facturapi( "sk_test_API_KEY" );

$zip = $facturapi->Invoices->download_zip("58e93bd8e86eb318b019743d") // stream containing the PDF and XML as a ZIP file or

$pdf = $facturapi->Invoices->download_pdf("58e93bd8e86eb318b019743d") // stream containing the PDF file or

$xml = $facturapi->Invoices->download_xml("58e93bd8e86eb318b019743d") // stream containing the XML file or
```

Descarga tu Factura en PDF, XML o ambas comprimidas en ZIP

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

### Enviar Factura por email

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices/{id}/email
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
# Enviar al correo del cliente
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \
  -u "sk_test_API_KEY:"
  -X POST

# Enviar a otro correo
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \
  -u "sk_test_API_KEY:"
  -X POST
  -H "Content-Type: application/json" \
  -d '{
        "email": "another_email@example.com"
      }'

# Enviar a otro correo
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \
  -u "sk_test_API_KEY:"
  -X POST
  -H "Content-Type: application/json" \
  -d '{
        "email": [
          "first@email.com",
          "second@email.com"
        ]
      }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_API_KEY');
// Enviar al correo del cliente
await facturapi.invoices.sendByEmail('58e93bd8e86eb318b019743d');
// Enviar a otro correo
await facturapi.invoices.sendByEmail(
  '58e93bd8e86eb318b019743d',
  { email: 'otro@correo.com' }
);
// Enviar a más de un correo (máx. 10)
await facturapi.invoices.sendByEmail(
  '58e93bd8e86eb318b019743d',
  { 
    email: [
      'primer@correo.com',
      'segundo@correo.com'
    ]
  }
);
```

```csharp
// Enviar al correo del cliente
await facturapi.Invoice.SendByEmailAsync("58e93bd8e86eb318b019743d");
// Enviar a otro correo
await facturapi.Invoice.SendByEmailAsync(
  "58e93bd8e86eb318b019743d",
  new Dictionary<string, object>
  {
    ["email"] = "otro@correo.com"
  }
);
// Enviar a más de un correo
await facturapi.Invoice.SendByEmailAsync(
  "58e93bd8e86eb318b019743d",
  new Dictionary<string, object>
  {
    ["email"] = new String[]
    {
      "primer@correo.com",
      "segundo@correo.com"
    }
  }
);
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );
// Enviar al correo del cliente
$facturapi->Invoices->send_by_email("58e93bd8e86eb318b019743d");
// Enviar a otro correo
$facturapi->Invoices->send_by_email(
  "58e93bd8e86eb318b019743d",
  "otro@correo.com"
);
// Enviar a más de un correo (máx 10)
$facturapi->Invoices->send_by_email(
  "58e93bd8e86eb318b019743d",
  array(
    "primer@correo.com",
    "segundo@correo.com"
  )
);
```

Envía un correo electrónico al email de tu cliente, con los archivos XML y PDF adjuntos al mensaje.

#### Argumentos en la URL

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura.

#### Argumentos en el cuerpo de la llamada
Argumento | Tipo | Descripción
---------:|:----:| -----------
**email**<br><small>opcional</small> | string or array of strings | Dirección de correo electrónico a enviar la factura. Si no se envía este parámetro, la factura será enviada al correo que del cliente tenga registrado. Puede enviarse un sólo string con el correo deseado o un array con una lista de correos (máximo 10).

### Cancelar Factura

> <h4 class="toc-ignore">Definición</h4>

```text
DELETE https://www.facturapi.io/v1/invoices/{id}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d \
  -u "sk_test_API_KEY:" \
  -X DELETE
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_API_KEY');
const invoice = await facturapi.invoices.cancel('58e93bd8e86eb318b019743d');
// invoice.status is now 'canceled'
```

```csharp
var invoice = await facturapi.Invoice.CancelAsync("58e93bd8e86eb318b019743d");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$facturapi->Invoices->cancel("58e93bd8e86eb318b019743d");
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "canceled",
  "cancellation_status": "none",
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

Realiza una solicitud de cancelación de factura ante el SAT, soportando el esquema de cancelación de Noviembre 2018.

Al usar este método pueden ocurrir 3 posibles resultados:

- Que la llamada regrese un error con la explicación de por qué no se pudo cancelar.
- Que la llamada sea satisfactoria y regrese un objeto `invoice` con la propiedad `status: "canceled"`.
- Que la llamada sea satisfactoria, pero que la cancelación requiera de confirmación de parte de tu cliente, en cuyo caso se obtendrá como respuesta el objeto `invoice` con las propiedades `status: "valid"` y `cancellation_status: "pending"`.

En el tercer escenario, el valor de `cancellation_status` será actualizado automáticamente por Facturapi cuando tu cliente acepte, rechace o deje expirar la solicitud, de tal manera que al consultar una factura (usando [Obtener Factura](#obtener-una-factura)), la propiedad `cancellation_status` reflejará el estado más reciente de la soliitud.

Consulta los valores posibles de `cancellation_status` más abajo.

Después de la cancelación la factura ya no tendrá validez, el objeto cambiará su `status` a `"canceled"` y seguirá estando disponible para futuras consultas.

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la factura a cancelar.

#### Estados de cancelación

Posibles valores para `cancellation_status`:

Valor | Descripción
-----:| -----------
`none` | No se ha solicitado cancelación, o no fue necesario hacerlo.
`pending` | La solicitud de cancelación fue enviada a tu cliente y se espera su decisión.
`accepted` | Tu cliente aceptó la solicitud.
`rejected` | Tu cliente rechazó la solicitud.
`expired` | Tu cliente no respondió a la solicitud dentro de 72 horas, lo que permite que se aplique la cancelación.