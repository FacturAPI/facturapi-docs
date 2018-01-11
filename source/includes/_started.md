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

Ahora utiliza los `id`s del cliente y el producto que creaste para generar la factura.

Para conocer más a fondo las opciones disponibles al crear una factura, consulta la
[referencia del método Crear Factura](#crear-factura).

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

Si lo necesitas, también puedes descargar los archivos de la factura en tu servidor.

# Otros comprobantes

Los ejemplos anteriores muestran cómo emitir el tipo de factura más común: el **comprobante de
ingresos**, pero existen otros 6 tipos de comprobantes fiscales. Actualmente, FacturAPI soporta
la emisión de 2 tipos: **comprobante de ingreso** y **comprobante de egreso**.

### Comprobante de Egreso

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

También conocido como **nota de crédito**. Para emitir este tipo de factura, debes especificar
el tipo de comprobante en la misma llamada de creación de factura, pero ahora pasando los campos
requeridos para la creación de comprobante de egreso.

Para conocer más a fondo las opciones disponibles al crear un comprobante de egreso, consulta la
[referencia del método Crear comprobante de egreso](#crear-comprobante-de-egreso).