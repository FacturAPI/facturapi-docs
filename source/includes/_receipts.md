## Recibos

Notas de venta facturables.

### Objeto Recibo

```json
{
  "id": "5ebd8e56f5687a013ca0df46",
  "created_at": "2020-05-14T18:30:46.712Z",
  "expires_at": "2020-05-22T05:59:59.999Z",
  "livemode": false,
  "self_invoice_url": "https://factura.space/empresa-demo/r9YqYarL",
  "folio_number": 1234,
  "key": "r9YqYarL",
  "branch": "",
  "status": "open",
  "invoice": null,
  "currency": "MXN",
  "exchange": 1,
  "payment_form": "03",
  "total": 345.6,
  "items": [
    {
      "quantity": 1,
      "discount": 0,
      "product": {
        "description": "Ukelele",
        "product_key": "60131324",
        "unit_key": "H87",
        "unit_name": "Pieza",
        "price": 345.6,
        "tax_included": true,
        "taxes": [
          {
            "rate": 0.16,
            "type": "IVA",
            "withholding": false,
            "factor": "Tasa"
          }
        ],
        "sku": "ABC1234"
      }
    }
  ]
}
```

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id** | string | Identificador del recibo.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**expires_at** | date | Fecha de expiración en formato ISO8601 (UTC String). Es la fecha límite para que el cliente pueda facturar su recibo. Se calcula automáticamente a partir de las configuraciones de recibo "Periodo de facturación" (`invoicing_period`) y "Días de vigencia para facturar" (`duration_days`).
**livemode** | boolean | `true`: fue creado en modo Live, `false`: fue creado en modo Test
**branch** | string | Nombre de la sucursal donde se expidió el recibo.
**payment_form** | string | Código que representa la forma de pago, según el catálogo del SAT.
**items** | array of objects | Lista de conceptos incluidos en el recibo.
**items[].quantity** | decimal | Cantidad de unidades del concepto.
**items[].discount** | decimal | Monto total de descuento aplicado a este concepto.
**items[].product** | object | Información básica sobre el producto. Igual al objeto [Producto](#objeto-producto).
**currency** | string | Código de la moneda usada, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange** | decimal | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.
**total** | decimal | Monto total facturado.
**invoice** | string | ID de la factura asociada, en caso de estar facturado.
**key** | string | Identificador único alfanumérico corto para realizar autofactura desde tu micrositio en factura.space
**status** | string | Identificador único alfanumérico corto para realizar autofactura desde tu micrositio en factura.space
**self_invoice_url** | string | Dirección URL para realizar autofactura. Incluye el `key` del recibo. Puedes usarla para generar botones de facturación para tus clientes, o ponerlos en un QR.

### Crear Recibo

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/receipts
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/receipts \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "folio_number": 1234,
        "payment_form": "03",
        "items": [{
          "quantity": 1,
          "product": {
            "description": "Ukelele",
            "product_key": "60131324",
            "price": 345.60,
            "sku": "ABC1234"
          }
        }]
      }'
```

```javascript
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const receipt = await facturapi.receipts.create({
  folio_number: 1234,
  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO,
  items: [{
    quantity: 1,
    product: {
      description: 'Ukelele',
      product_key: '60131324',
      price: 345.60,
      sku: 'ABC1234'
    }
  }]
});
// save the receipt.id in your database
```

```csharp
var facturapi = new FacturapiClient("sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var receipt = await facturapi.Receipts.CreateAsync(new Dictionary<string, object>
{
  ["folio_number"] = 1234,
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
  ["items"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object> {
      ["description"] = "Ukelele",
      ["product_key"] = '60131324',
      ["price"] = 345.60,
      ["sku"] = "ABC1234"
    }
  }
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$receiptData = array(
  "folio_number" => 1234,
  "payment_form" => "03",
  "items" => array(
    array(
      "product" => array(
        "description" => "Ukelele",
        "product_key" => "60131324",
        "price" => 345.60,
        "sku" => "ABC1234"
      )
    )
  )
);

$receipt = $facturapi->Receipts->create( $receiptData );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5ebd8e56f5687a013ca0df46",
  "created_at": "2020-05-14T18:30:46.712Z",
  "expires_at": "2020-05-22T05:59:59.999Z",
  "livemode": false,
  "self_invoice_url": "https://factura.space/empresa-demo/r9YqYarL",
  "folio_number": 1234,
  "key": "r9YqYarL",
  "branch": "",
  "status": "open",
  "invoice": null,
  "currency": "MXN",
  "exchange": 1,
  "payment_form": "03",
  "total": 345.6,
  "items": [
    {
      "quantity": 1,
      "discount": 0,
      "product": {
        "description": "Ukelele",
        "product_key": "60131324",
        "unit_key": "H87",
        "unit_name": "Pieza",
        "price": 345.6,
        "tax_included": true,
        "taxes": [
          {
            "rate": 0.16,
            "type": "IVA",
            "withholding": false,
            "factor": "Tasa"
          }
        ],
        "sku": "ABC1234"
      }
    }
  ]
}
```

Crea un nuevo Recibo.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**items**<br><small>requerido</small> | array | none | Arreglo de conceptos a incluir en el recibo.
**items[].product**<br><small>requerido</small> | string or object | none | Producto a facturar. <br/>`string`: Identificador del producto previamente registrado en Facturapi. <br/>`object`: Objeto con la información del producto, el cual sólo se usará para generar el recibo y no se guardará en tu catálogo de productos. Acepta los mismos argumentos detallados en la sección [Crear Producto](#crear-producto)
**items[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad de unidades del producto.
**items[].discount**<br><small>opcional</small> | decimal | 0 | Monto del descuento total a aplicar a este concepto.
**items[].complement**<br><small>opcional</small> | string | none | Código XML con iformación adicioal personalizada acerca del concepto para añadir a la factura. Si tu complemento usa un namespace especial, recuerda añadirlo en el argumento `namespaces`.
**items[].parts**<br><small>opcional</small> | array of objects | empty array | En caso de que el concepto cuente con partes.
**items[].parts[].description**<br><small>requerido</small> | string | none | Descripción del producto o servicio.
**items[].parts[].product_key**<br><small>requerido</small> | string | none | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**items[].parts[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad.
**items[].parts[].sku**<br><small>opcional</small> | string | none | Identificador de uso interno designado por la empresa. Puede tener cualquier valor..
**items[].parts[].unit_price**<br><small>opcional</small> | decimal | none | Precio unitario.
**items[].parts[].unit_name**<br><small>opcional</small> | string | none | Nombre de la unidad de medida que expresa la cantidad.
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio del recibo, asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización definida en la configuración de recibos.
**branch**<br><small>opcional</small> | string | "" | Nombre de la sucursal donde se expidió el recibo.
**currency**<br><small>opcional</small> | string | "MXN" | Código de la moneda, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange**<br><small>opcional</small> | decimal | 1.0 | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.

### Facturar Recibo

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/receipts/{RECEIPT_ID}/invoice
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/receipts/5ebd8e56f5687a013ca0df46/invoice \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "customer": "58e93bd8e86eb318b0197456",
        "folio_number": 914,
        "series": "F"
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const invoice = await facturapi.receipts.invoice('5ebd8e56f5687a013ca0df46', {
  customer: '58e93bd8e86eb318b0197456',
  folio_number: 914,
  series: 'F'
});
```

```csharp
var invoice = await facturapi.Receipt.InvoiceAsync("5ebd8e56f5687a013ca0df46", new Dictionary<string, object>
{
  ["customer"] = "58e93bd8e86eb318b0197456",
  ["folio_number"] = 914,
  ["series"] = "F"
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$data = array(
  "customer" => "58e93bd8e86eb318b0197456",
  "folio_number" => 914,
  "series" => "F"
);

$invoice = $facturapi->Receipts->invoice( "5a3f3e35f508333611ad6b3e", $data );
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
  "payment_form": "06",
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "folio_number": 914,
  "series": "F",
  "related": [], 
  "currency": "MXN",
  "exchange": 1,
  "total": 345.6,
  "items": [
    {
      "quantity": 1,
      "discount": 0,
      "product": {
        "description": "Ukelele",
        "product_key": "60131324",
        "unit_key": "H87",
        "unit_name": "Pieza",
        "price": 345.6,
        "tax_included": true,
        "taxes": [
          {
            "rate": 0.16,
            "type": "IVA",
            "withholding": false,
            "factor": "Tasa"
          }
        ],
        "sku": "ABC1234"
      }
    }
}
```

Crea una factura a partir de la información en el recibo.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**customer**<br><small>requerido</small> | string or object | none | Cliente receptor de la factura. <br/>`string`: Id del cliente previamente registrado en Facturapi. <br/>`object`: Objeto con la información del cliente, el cual se guardará en tu lista de clientes.. Acepta los mismos argumentos detallados en la sección [Crear cliente](#crear-cliente).
**use**<br><small>opcional</small> | string | "G01" (Adquisición de mercancías) | Código de Uso CFDI según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización.
**series**<br><small>opcional</small> | string | none | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**conditions**<br><small>opcional</small> | string | none | Condiciones de pago.
**pdf_custom_section**<br><small>opcional</small> | string | none | En caso de que necesites incluir más información en el PDF, este campo te permite enviar código HTML con tu propio contenido. Por seguridad, el código que puedes enviar está limitado a las siguientes etiquetas: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `p`, `span`, `small`, `br`, `b`, `i`, `ul`, `ol`, `li`, `strong`, `table`, `thead`, `tbody`, `tfoot`, `tr`, `th` y `td`. No se permiten atributos ni estilos.
**addenda**<br><small>opcional</small> | string | none | Código XML con la Addenda que se necesite agregar a la factura.
**namespaces**<br><small>opcional</small> | array of objects | none | Si icluiste uno de los argumentos `addenda` o `items[].complement` y éstos incluyen un namespace especial, debes enviar la información necesaria para incluir estos namespaces en el XML de la factura.
**namespaces[].prefix**<br><small>opcional</small> | string | none | Prefijo o nombre del namespace. Ejemplo: "iedu".
**namespaces[].uri**<br><small>codicional</small> | string | none | Dirección URL asociada al namespace. Ejemplo: "http://www.sat.gob.mx/iedu". Requerido si se incluye `namespaces[].prefix`.
**namespaces[].schema_location**<br><small>opcional</small> | string | none | Dirección URL del esquema de validación XSD. Ejemplo: "http://www.sat.gob.mx/sitio_interet/cfd/iedu/iedu.xsd".

### Crear Factura Global

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/receipts/global-invoice
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/receipts/global-invoice \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "from": "2020-12-01T05:00:00.000Z",
        "to": "2020-12-31T04:59:59.999Z",
        "folio_number": 1234,
        "series": "G"
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const invoice = await facturapi.receipts.createGlobalInvoice({
  from: '2020-12-01T05:00:00.000Z',
  to: '2020-12-31T04:59:59.999Z',
  folio_number: 1234,
  series: 'G'
});
```

```csharp
var invoice = await facturapi.Receipt.CreateGlobalInvoice(new Dictionary<string, object>
{
  ["from"] = "2020-12-01T05:00:00.000Z",
  ["to"] = "2020-12-31T04:59:59.999Z",
  ["folio_number"] = 1234,
  ["series"] = "G"
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$invoice = $facturapi->Receipts->createGlobalInvoice(
  array(
    "from" => "2020-12-01T05:00:00.000Z",
    "to" => "2020-12-31T04:59:59.999Z",
    "folio_number" => 1234,
    "series" => "G"
  )
);
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
   "id":"5fe3a808626dbb49e0d312a6",
   "created_at":"2020-12-01T05:59:59.999Z",
   "livemode":false,
   "verification_url":"https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=6CF6CE33-1BD2-4F88-A443-33013C069169&re=MYRF121212Q12&rr=XAXX010101000&tt=492.000000&fe=Hibcww==",
   "status":"valid",
   "type":"I",
   "cancellation_status":"none",
   "customer":{
      "id":"5fe3a808626dbb49e0d312a5",
      "legal_name":"Público en general",
      "tax_id":"XAXX010101000"
   },
   "total":492,
   "uuid":"6CF6CE33-1BD2-4F88-A443-33013C069169",
   "use":"G03",
   "folio_number":1,
   "payment_form":"06",
   "payment_method":"PUE",
   "currency":"MXN",
   "exchange":1,
   "items":[
      {
         "quantity":1,
         "discount":0,
         "product":{
            "description":"Venta",
            "product_key":"01010101",
            "unit_key":"ACT",
            "unit_name":"Actividad",
            "price":123,
            "tax_included":true,
            "taxes":[
               {
                  "rate":0.16,
                  "type":"IVA",
                  "withholding":false,
                  "factor":"Tasa"
               }
            ],
            "sku":"0"
         }
      },
      {
         "quantity":1,
         "discount":0,
         "product":{
            "description":"Venta",
            "product_key":"01010101",
            "unit_key":"ACT",
            "unit_name":"Actividad",
            "price":123,
            "tax_included":true,
            "taxes":[
               {
                  "rate":0.16,
                  "type":"IVA",
                  "withholding":false,
                  "factor":"Tasa"
               }
            ],
            "sku":"0"
         }
      },
      {
         "quantity":1,
         "discount":0,
         "product":{
            "description":"Venta",
            "product_key":"01010101",
            "unit_key":"ACT",
            "unit_name":"Actividad",
            "price":123,
            "tax_included":true,
            "taxes":[
               {
                  "rate":0.16,
                  "type":"IVA",
                  "withholding":false,
                  "factor":"Tasa"
               }
            ],
            "sku":"0"
         }
      },
      {
         "quantity":1,
         "discount":0,
         "product":{
            "description":"Venta",
            "product_key":"01010101",
            "unit_key":"ACT",
            "unit_name":"Actividad",
            "price":123,
            "tax_included":true,
            "taxes":[
               {
                  "rate":0.16,
                  "type":"IVA",
                  "withholding":false,
                  "factor":"Tasa"
               }
            ],
            "sku":"0"
         }
      }
   ]
}
```

Crea una factura global por los recibos abiertos (con status = "open") de un cierto periodo.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**from**<br><small>opcional</small> | string | Inicio del último periodo | Fecha inicial de los recibos que se incluirán en la factura global. Por default, este valor es el inicio del último periodo (día, semana, mes), según tengas configurado en tu configuración de recibos de tu organización.
**to**<br><small>opcional</small> | string | Fin del último periodo | Fecha final de los recibos que se incluirán en la factura global. Por default, este valor es el fin del último periodo (día, semana, mes), según tengas configurado en tu configuración de recibos de tu organización.
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización.
**series**<br><small>opcional</small> | string | none | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.

### Lista de Recibos

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/receipts
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/receipts \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const searchResult = await facturapi.receipts.list();
// searchResult.data contains the result array
```

```csharp
var searchResult = await facturapi.Receipt.ListAsync();
// searchResult.Data is an array of Receipts
```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$receipts = $facturapi->Receipts->all();
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "total_results": 1,
  "data": [
    {
      {
        "id": "5ebd8e56f5687a013ca0df46",
        "created_at": "2020-05-14T18:30:46.712Z",
        "expires_at": "2020-05-22T05:59:59.999Z",
        "livemode": false,
        "self_invoice_url": "https://factura.space/empresa-demo/r9YqYarL",
        "folio_number": 1234,
        "key": "r9YqYarL",
        "branch": "",
        "status": "open",
        "invoice": null,
        "currency": "MXN",
        "exchange": 1,
        "payment_form": "03",
        "total": 345.6,
        "items": [
          {
            "quantity": 1,
            "discount": 0,
            "product": {
              "description": "Ukelele",
              "product_key": "60131324",
              "unit_key": "H87",
              "unit_name": "Pieza",
              "price": 345.6,
              "tax_included": true,
              "taxes": [
                {
                  "rate": 0.16,
                  "type": "IVA",
                  "withholding": false,
                  "factor": "Tasa"
                }
              ],
              "sku": "ABC1234"
            }
          }
        ]
      }
    }
  ]
}
```

Obtiene la lista de recibos registrados en tu organización

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en la descripción del recibo o SKU.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

### Obtener un Recibo

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/receipts/{RECEIPT_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/receipts/5ebd8e56f5687a013ca0df46 \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const receipt = await facturapi.receipts.retrieve('5ebd8e56f5687a013ca0df46');
```

```csharp
var receipt = await facturapi.Receipt.RetrieveAsync("5ebd8e56f5687a013ca0df46");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$receipt = $facturapi->Receipts->retrieve( "5ebd8e56f5687a013ca0df46" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5ebd8e56f5687a013ca0df46",
  "created_at": "2020-05-14T18:30:46.712Z",
  "expires_at": "2020-05-22T05:59:59.999Z",
  "livemode": false,
  "self_invoice_url": "https://factura.space/empresa-demo/r9YqYarL",
  "folio_number": 1234,
  "key": "r9YqYarL",
  "branch": "",
  "status": "open",
  "invoice": null,
  "currency": "MXN",
  "exchange": 1,
  "payment_form": "03",
  "total": 345.6,
  "items": [
    {
      "quantity": 1,
      "discount": 0,
      "product": {
        "description": "Ukelele",
        "product_key": "60131324",
        "unit_key": "H87",
        "unit_name": "Pieza",
        "price": 345.6,
        "tax_included": true,
        "taxes": [
          {
            "rate": 0.16,
            "type": "IVA",
            "withholding": false,
            "factor": "Tasa"
          }
        ],
        "sku": "ABC1234"
      }
    }
  ]
}
```

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del recibo

### Cancelar Recibo

> <h4 class="toc-ignore">Definición</h4>

```text
DELETE https://www.facturapi.io/v1/receipts/{RECEIPT_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/receipts/5ebd8e56f5687a013ca0df46 \
  -X DELETE \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const removedReceipt = await facturapi.receipts.cancel('5ebd8e56f5687a013ca0df46');
```

```csharp
var receipt = await facturapi.Receipt.CancelAsync("5ebd8e56f5687a013ca0df46");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$facturapi->Receipts->cancel( "5ebd8e56f5687a013ca0df46" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5ebd8e56f5687a013ca0df46",
  "created_at": "2020-05-14T18:30:46.712Z",
  "expires_at": "2020-05-22T05:59:59.999Z",
  "livemode": false,
  "self_invoice_url": "https://factura.space/empresa-demo/r9YqYarL",
  "folio_number": 1234,
  "key": "r9YqYarL",
  "branch": "",
  "status": "canceled",
  "invoice": null,
  "currency": "MXN",
  "exchange": 1,
  "payment_form": "03",
  "total": 345.6,
  "items": [
    {
      "quantity": 1,
      "discount": 0,
      "product": {
        "description": "Ukelele",
        "product_key": "60131324",
        "unit_key": "H87",
        "unit_name": "Pieza",
        "price": 345.6,
        "tax_included": true,
        "taxes": [
          {
            "rate": 0.16,
            "type": "IVA",
            "withholding": false,
            "factor": "Tasa"
          }
        ],
        "sku": "ABC1234"
      }
    }
  ]
}
```

#### Argumentos en URL

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del recibo
