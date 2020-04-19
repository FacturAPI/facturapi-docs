# Instalación

### Instala el cliente

```shell
# cURL no requiere de instalar un cliente adicional
```

```javascript
$> npm install --save facturapi
```

```csharp
// Simplemente importa el paquete de NuGet: https://www.nuget.org/packages/Facturapi
PM> Install-Package Facturapi
```

```php
$> composer require "facturapi/facturapi-php"
```

Empieza por incluir el cliente de Facturapi en las dependencias de tu proyecto.

### Ambientes y llaves secretas

#### Ambiente Test

Facturapi cuenta con un ambiente de pruebas que puedes usar durante el desarrollo de tu aplicación sin costo alguno. Las facturas generadas en este ambiente no son enviadas al SAT y por lo tanto no tienen validez fiscal.

Para emitir facturas en ambiente Test basta con utilizar la llave secreta `Test` de tu organización, la cual podrás obtener creando una cuenta gratuita en <a href="https://www.facturapi.io/register" target="_blank">https://www.facturapi.io/register</a>.

#### Ambiente Live

Una vez que hayas terminado de configurar tu organización, podrás obtener tu llave secreta `Live` para emitir facturas válidas.

#### Llave de usuario

Existe una tercera llave secreta (User Key) que sirve para registrar nuevas organizaciones y configurarlas por medio de la API. Puedes encontrar esta llave en las [configuraciones de cuenta](https://www.facturapi.io/dashboard/account/userkey) en tu dashboard de Facturapi.

### Autenticación

```shell
# Cada petición deberá incluir tu llave privada en el
# encabezado de autorización, seguida de dos puntos (:).
# Los ejemplos para cURL en esta documentación ya incluyen
# este encabezado.
```

```javascript
// Importa el constructor del cliente
const Facturapi = require('facturapi');
// Crea una instancia del cliente usando tu llave secreta
const facturapi = new Facturapi('sk_test_API_KEY');
```

```csharp
// Crea una instancia del wrapper de Facturapi usando
// tu llave secreta
var facturapi = new FacturapiClient("sk_test_API_KEY");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );
```

Inicializa el cliente de Facturapi con la llave secreta de tu organización, pudiendo ésta a su vez ser Test o Live, según el ambiente que se requiera.

<aside class="notice">
  Asegurate de remplazar nuestra llave de ejemplo <code>sk_test_API_KEY</code>
  con tu propia llave secreta.
</aside>

# Inicio Rápido

### Crea tu factura en una sola llamada

```shell
curl https://www.facturapi.io/v1/invoices \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
    "customer": {
      "legal_name": "John Doe S.A. de C.V.",
      "email": "email@example.com",
      "tax_id": "ABCD111111CBA"
    },
    "items": [{
      "quantity": 2,
      "product": {
        "description": "Ukelele",
        "product_key": "60131324",
        "price": 345.60
      }
    }],
    "payment_form": "06"
  }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  customer: {
    legal_name: 'John Doe',
    email: 'email@example.com',
    tax_id: 'ABCD111111CBA'
  },
  items: [{
    product: {
      description: 'Ukelele',
      product_key: '60131324',
      price: 345.60
    }
  }],
  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO
});
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["customer"] = new Dictionary<string, object>
  {
    ["legal_name"] = "John Doe",
    ["email"] = "email@example.com",
    ["tax_id"] = "ABCD111111CBA"
  },
  ["items"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {
      ["product"] = new Dictionary<string, object>
      {
        ["description"] = "Ukelele",
        ["product_key"] = "60131324",
        ["price"] = 345.60
      }
    }
  }
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO
});
```

```php
<?php
$invoice = $facturapi->Invoices->create(array(
  "customer" => array(
    "legal_name" => "John Doe",
    "email" => "email@example.com",
    "tax_id" => "ABCD111111CBA"
  ),
  "items" => array(
    array(
      "product" => array(
        "description" => "Ukelele",
        "product_key" => "60131324",
        "price" => 345.60
      )
    ),
  ),
    "payment_form" => \Facturapi\PaymentForm::EFECTIVO
));
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "valid",
  "verification_url": "https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=45BEC0CA-5F1E-491E-9417-698EA48C382A&re=AAA010101AAA&rr=ABCD111111CBA&tt=345.600000&fe=bWApPw==",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "John Doe",
    "tax_id": "ABCD111111CBA"
  },
  "payment_form": "06",
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "folio_number": 1,
  "series": "A",
  "currency": "MXN",
  "exchange": 1,
  "items": [
    {
      "quantity": 2,
      "discount": 0,
      "product": {
        "description": "Ukelele",
        "product_key": "60131324",
        "price": 345.6,
        "tax_included": true,
        "unit_key": "H87",
        "unit_name": "Pieza",
        "taxes": [{
          "type": "IVA",
          "rate": 0.16,
          "factor": "Tasa"
        }]
      }
    }
  ]
}
```

Este ejemplo muestra los campos mínimos requeridos para crear una factura en una sola llamada.

Para conocer más a fondo las opciones disponibles al crear una factura, consulta la
[referencia del método Crear Factura](#crear-factura-de-ingreso).

<aside class="notice">
  Por default se considera que el precio del producto tiene impuestos incluídos. Facturapi se encarga de desglosar los impuestos del producto (siendo IVA 16% el default) y calcular el precio unitario. Si en lugar de eso requieres que el atributo `price` sea el precio unitario, debes enviar el parámetro `tax_included` con el valor `false`.
</aside>

### Envíala por correo

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \
  -u "sk_test_API_KEY:"
  -X POST
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_API_KEY');
await facturapi.invoices.sendByEmail(invoice.id)
// invoice has been sent
```

```csharp
await facturapi.Invoice.SendByEmailAsync(invoice.Id);
```

```php
<?php
$facturapi->Invoices->send_by_email("INVOICE_ID");
```

Utilizando el `id` de la factura que acabamos de crear, podemos realizar operaciones como enviar
los archivos de la factura al correo electrónico del cliente a quien se le emitió.

### Descarga la factura

```shell
## Descargar PDF y XML comprimidos en archivo ZIP
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/zip \
  -u "sk_test_API_KEY:"
```

```javascript
const fs = require('fs');

// Descarga PDF y XML comprimidos en archivo ZIP
const zipStream = await facturapi.invoices.downloadZip(invoice.id);
// Guarda la descarga en un archivo
const file = fs.createWriteStream('./factura.zip');
zipStream.pipe(file);
// O envíalo como respuesta a tu cliente (en ExpressJS)
zipStream.pipe(res);
```

```csharp
// Descarga PDF y XML comprimidos en archivo ZIP
var zipStream = await facturapi.Invoice.DownloadZipAsync(invoice.Id);

// Guarda la descarga en un archivo
var file = new System.IO.FileStrem("C:\\route\\to\\save\\invoice.zip", FileMode.Create);
zipStream.CopyTo(file);
file.Close();
```

```php
<?php
$facturapi->Invoices->download_zip("INVOICE_ID") // stream containing the PDF and XML as a ZIP file or

$facturapi->Invoices->download_pdf("INVOICE_ID") // stream containing the PDF file or

$facturapi->Invoices->download_xml("INVOICE_ID") // stream containing the XML file or
```

Si lo necesitas, también puedes descargar los archivos de la factura en tu servidor.

### Registra a tu cliente (opcional)

```shell
curl https://www.facturapi.io/v1/customers \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
      "legal_name": "John Doe",
      "email": "email@example.com",
      "tax_id": "ABCD111111CBA",
      "address": {
        "zip": "44940",
        "street": "Sunset Blvd"
      }
    }'
```

```javascript
const customer = await facturapi.customers.create({
  legal_name: 'John Doe', // Razón social
  email: 'email@example.com',
  tax_id: 'ABCD101010XYZ', // RFC
  address: {
    zip: '44940',
    street: 'Sunset Blvd'
  }
});
// save the customer.id in your database
```

```csharp
var customer = await facturapi.Customer.CreateAsync(new Dictionary<string, object>
{
  ["legal_name"] = "John Doe",
  ["email"] = "email@example.com",
  ["tax_id"] = "ABCD101010XYZ",
  ["address"] = new Dictionary<string, object>
  {
    ["zip"] = "44940",
    ["street"] = "Sunset Blvd"
  }
});
// Guarda el customer.Id para facturar a tu cliente
```

```php
<?php
$customer = array(
  "email" => "walterwhite@gmail.com", //Optional but useful to send invoice by email
  "legal_name" => "Walter White", // Razón social
  "tax_id" => "WIWA761018", //RFC
  "address" => array(
    "zip" => "06800",
    "street" => "Av. de los Rosales"
  )
);

// Remember to store the customer.id in your records.
// You will need it to create an invoice for this customer.
$new_customer = $facturapi->Customers->create($customer);
```

Si quieres evitar tener que enviar los datos fiscales de tu cliente repetidamente en cada factura, también tienes la opción de registrarlo de manera separada.

El objeto de respuesta contiene un campo `id` que deberás utilizar al momento de crear facturas para el mismo cliente sin tener que volver a introducir sus datos fiscales.

Para conocer qué otros datos puedes incluir, consulta la [referencia del método Crear Cliente](#crear-cliente).

### Registra tus productos (opcional)

```shell
curl https://www.facturapi.io/v1/products \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
        "description": "Ukelele",
        "product_key": "60131324",
        "price": 345.60,
        "sku": "ABC1234"
    }'
```

```javascript
const product = await facturapi.products.create({
  description: 'Ukelele',
  product_key: '60131324',
  price: 345.60,
  sku: 'ABC1234'
});
// save the product.id in your database
```

```csharp
var product = await facturapi.Product.CreateAsync(new Dictionary<string, object>
{
  ["description"] = "Ukelele",
  ["product_key"] = "60131324",
  ["price"] = 345.60,
  ["sku"] = "ABC1234"
});
```

```php
<?php
$product = array(
  "description" => "Ukelele",
  "product_key" => "4319150114",
  "price" => 345.60,
  "sku" => "ABC1234"
);

$new_product = $facturapi->Products->create( $product );
```

También puedes registrar tu inventario de productos en Facturapi para no enviar los mismos datos cada vez.

Para conocer los datos que puedes incluir en el producto, consulta la [referencia del método Crear Producto](#crear-producto).

# Otros comprobantes

Los ejemplos anteriores muestran cómo emitir el tipo de factura más común: el **comprobante de ingresos**. Actualmente, FacturAPI soporta la emisión de los 3 comprobantes más utilizados, de los 5 tipos que existen. Puedes ver en la sección de referencia cómo cear los diferentes tipos de comprobantes que soportamos:

- [Crear Factura de Ingreso](#crear-factura-de-ingreso)
- [Crear Factura de Egreso](#crear-factura-de-egreso)
- [Crear Factura de Recepción de Pagos](#crear-factura-de-recepci-n-de-pagos)
- [Crear Factura de Nómina](#crear-factura-de-n-mina)
