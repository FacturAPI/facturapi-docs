# Guía de inicio rápido

### Instalación

```shell
# cURL no requiere de instalar un cliente adicional
```

```javascript
$> npm install --save facturapi
```

```csharp
PM> Install-Package Facturapi
```

```php
$> composer require "facturapi/facturapi-php"
```

Empieza por incluir el cliente de Facturapi en las dependencias de tu proyecto.

### Autenticación

```shell
# Cada petición deberá incluir tu llave privada en el
# encabezado de autorización, seguida de dos puntos (:).
# Los ejemplos para cURL en esta documentación ya incluyen
# este encabezado.
```

```javascript
// Instancia el módulo de Facturapi usando tu llave secreta
const facturapi = require('facturapi')('sk_test_API_KEY');
```

```csharp
// Crea una instancia del wrapper de Facturapi usando
// tu llave secreta
var facturapi = new Facturapi.Wrapper("sk_test_API_KEY");
```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );
```

Inicializa el cliente de Facturapi con la llave secreta de tu organización.

<aside class="notice">
  Asegurate de remplazar nuestra llave de ejemplo <code>sk_test_API_KEY</code>
  con tu propia llave secreta.
</aside>

### Registra a tu cliente

```shell
curl https://www.facturapi.io/v1/customers \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
      "legal_name": "John Doe",
      "email": "email@example.com",
      "tax_id": "ABCD111111ABC",
      "address": {
        "zip": "44940",
        "street": "Sunset Blvd"
      }
    }'
```

```javascript
facturapi.customers.create({
  legal_name: 'John Doe', // Razón social
  email: 'email@example.com',
  tax_id: 'ABCD101010XYZ', // RFC
  address: {
    zip: '44940',
    street: 'Sunset Blvd'
  }
}).then(customer => { /* save the customer.id */ })
  .catch(err => { /* maneja cualquier posible error */ })
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
    "street" => "Av. de los Rosales",
    "exterior" => "123",
    "neighborhood" => "Tepito"
    // city, municipality and state are filled automatically from the zip code
    // but if you want to, you can override their values
    // city: 'México',
    // municipality: 'Cuauhtémoc',
    // state: 'Ciudad de México'
  )
);

// Remember to store the customer.id in your records.
// You will need it to create an invoice for this customer.
$new_customer = $facturapi->Customers->create($customer);
```

Incluye en los parámetros de la llamada los datos fiscales de tu cliente. Para conocer qué otros
datos puedes incluir, consulta la [referencia del método Crear Cliente](#crear-cliente).

El objeto de respuesta contiene un campo `id` que deberás utilizar al momento de crear facturas
para el mismo cliente sin tener que volver a introducir sus datos fiscales.

### Registra tus productos (opcional)

```shell
curl https://www.facturapi.io/v1/products \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
        "description": "Licuadora",
        "product_key": 123456,
        "price": 345.60,
        "sku": "ABC1234"
    }'
```

```javascript
facturapi.products.create({
  description: 'Licuadora',
  product_key: 123456,
  price: 345.60,
  sku: 'ABC1234'
}).then(product => { /* save the product.id */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var product = await facturapi.Product.CreateAsync(new Dictionary<string, object>
{
  ["description"] = "Licuadora",
  ["product_key"] = 123456,
  ["price"] = 345.60,
  ["sku"] = "ABC1234"
});
```

```php
<?php
$product = array(
  "product_key" => "4319150114", // Clave Producto/Servicio from SAT's catalog. Log in to FacturAPI and use our tool to look it up.
  "description" => "Apple iPhone 8",
  "price" => 345.60 // price in MXN.
  // By default, taxes are calculated from the price with IVA 16%
  // But again, you can override that by explicitly providing a taxes array
  // "taxes" => array(
  //   array ( "type" => \Facturapi\TaxType::IVA, "rate" => 0.16 ),
  //   array ( "type" => \Facturapi\TaxType::ISR, "rate" => 0.03666, "withholding" => true )
  // )
);

$new_product = $facturapi->Products->create( $product );
```

Puedes registrar tu inventario de productos en Facturapi para almacenar los datos relevantes como
el precio, los impuestos que aplican, o la ClaveProdServ del SAT (`product_key`), con el objetivo
de usar el `id` del producto al momento de crear una factura que incluya este producto.

Para conocer los datos que puedes incluir en el producto, consulta la [referencia del método Crear Producto](#crear-producto).

### Crea la factura

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
    "payment_form": "06"
  }'
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.create({
  customer: customer.id,
  items: [{
    quantity: 2,
    product: product.id
  }],
  payment_form: facturapi.PaymentForm.DINERO_ELECTRONICO
})
  .then(invoice => { /* ... */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["customer"] = customer.Id,
  ["items"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {
      ["quantity"] = 2,
      ["product"] = product.Id
    }
  }
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO
});
```

```php
<?php
$invoice = array(
  "customer" => "YOUR_CUSTOMER_ID",
  "items" => array(
    array(
      "quantity" => 1, // Optional. Defaults to 1.
      "product" => "YOUR_PRODUCT_ID" // You can also pass a product object instead
    ),
    array(
      "quantity" => 2,
      "product" => array(
        "description" => "Guitarra",
        "product_key" => "01234567",
        "price" => 420.69,
        "sku" => "ABC4567"
      )
    ) // Add as many products as you want to include in your invoice
  ),
  "payment_form" => \Facturapi\PaymentForm::EFECTIVO,
  "folio_number" => "581",
  "series" => "F"
);

$new_invoice = $facturapi->Invoices->create( $invoice );
```

Ahora utiliza los `id`s del cliente y el producto que creaste para generar la factura.

Para conocer más a fondo las opciones disponibles al crear una factura, consulta la
[referencia del método Crear Factura](#crear-factura-de-ingreso).

### Envíala por correo

```shell
curl https://www.facturapi.io/v1/invoices/58e93bd8e86eb318b019743d/email \
  -u "sk_test_API_KEY:"
  -X POST
```

```javascript
const facturapi = require('facturapi')('sk_test_API_KEY');
facturapi.invoices.sendByEmail(invoice.id)
  .then(() => { /* invoice has been sent */ })
  .catch(err => { /* handle the error */ })
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
facturapi.invoices.downloadZip(invoice.id)
  .then(zipStream => {
    // Guarda la descarga en un archivo
    const file = fs.createWriteStream('./factura.zip');
    zipStream.pipe(file);
  });
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

# Otros comprobantes

Los ejemplos anteriores muestran cómo emitir el tipo de factura más común: el **comprobante de ingresos**. Actualmente, FacturAPI soporta la emisión de los 3 comprobantes más utilizados, de los 5 tipos que existen. Puedes ver en la sección de referencia cómo cear los diferentes tipos de comprobantes que soportamos:

- [Crear Factura de Ingreso](#crear-factura-de-ingreso)
- [Crear Factura de Egreso](#crear-factura-de-egreso)
- [Crear Factura de Recepción de Pagos](#crear-factura-de-recepci-n-de-pagos)