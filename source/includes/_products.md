## Productos

### Objeto Producto

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Ukelele",
  "product_key": "60131324",
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "H87",
  "tax_included": true,
  "taxes": [
    {
      "withholding": false,
      "type": "IVA",
      "rate": 0.16
    }
  ]
}
```

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id** | string | Identificador del producto.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**livemode** | boolean | `true`: fue creado en modo producción, `false`: fue creado en modo pruebas
**description** | string | Descripción del bien o servicio como aparecerá en la factura.
**product_key** | string | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**price** | decimal | Precio por unidad del bien o servicio. Este valor puede representar el precio con IVA incluído o sin él, dependiendo del valor de `tax_included`.
**tax_included** | boolean | `true`: todos los impuestos aplicables están incluídos en el precio (atributo `price`) y se desglosarán automáticamente al emitir la factura. `false`: el atributo `price` no incluye impuestos, por lo que aquellos impuestos a aplicar se sumarán en el precio final.
**taxes** | array | Lista de impuestos que deberán aplicarse a este producto. Si la lista está vacía, se entiende que el producto está excento de impuestos.
**taxes[].rate** | decimal | Tasa del impuesto.
**taxes[].type** | string | Tipo de impuesto. Puede tener los valores "IVA", "ISR" o "IEPS".
**taxes[].factor** | string | Tipo factor. Puede tener los valores "Tasa", "Cuota" o "Exento".
**taxes[].withholding** | boolean | `true`: el impuesto es una retención. `false`: el impuesto es un traslado (impuesto normal).
**local_taxes** | array | Arreglo de impuestos locales (estatales o municipales), en caso de haberlos.
**local_taxes[].rate** | decimal | Tasa del impuesto.
**local_taxes[].type** | string | Nombre del impuesto. Texto libre.
**local_taxes[].withholding** | boolean | false | `true`: el impuesto es una retención. `false`: el impuesto es un traslado (impuesto normal).
**unit_key** | string | Clave de unidad de medida, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**unit_name** | string | Nombre de la unidad de medida como aparecerá en la factura.
**sku** | string | Identificador de uso interno designado por la empresa.

### Crear Producto

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/products
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/products \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "description": "Ukelele",
        "product_key": "60131324",
        "price": 345.60,
        "sku": "ABC1234"
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
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
  ["product_key"] = '60131324',
  ["price"] = 345.60,
  ["sku"] = "ABC1234"
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$product = array(
  "description" => "Ukelele",
  "product_key" => "60131324",
  "price" => 345.60,
  "sku" => "ABC1234"
);

$new_product = $facturapi->Products->create( $product );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Ukelele",
  "product_key": "60131324",
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "H87",
  "tax_included": true,
  "taxes": [
    {
      "withholding": false,
      "type": "IVA",
      "rate": 0.16
    }
  ]
}
```

Crea un nuevo Producto

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**description**<br><small>requerido</small> | string | none | Descripción del bien o servicio como aparecerá en la factura.
**product_key**<br><small>requerido</small> | string | none | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**price**<br><small>requerido</small> | decimal | none | Precio por unidad del bien o servicio. Este valor representará el precio con IVA incluído o sin él, dependiendo del valor de `tax_included`.
**tax_included**<br><small>opcional</small> | boolean | true | `true`: todos los impuestos aplicables están incluídos en el precio (atributo `price`) y se desglosarán automáticamente al emitir la factura. `false`: el atributo `price` no incluye impuestos, por lo que aquellos impuestos a aplicar se sumarán en el precio final.
**taxes**<br><small>opcional</small> | array | Elemento con IVA trasladado del 16% | Lista de impuestos que deberán aplicarse a este producto. Si el argumento se omite o es nulo, se guardará con un elemento que representa el IVA trasladado del 16%, que es el impuesto más común. En caso de mandar explícitamente un arreglo vacío, se entiende que el producto está excento de impuestos.
**taxes[].rate**<br><small>opcional</small> | decimal | 0.16 | Tasa del impuesto.
**taxes[].type**<br><small>opcional</small> | string | "IVA" | Tipo de impuesto. Puede tener los valores "IVA", "ISR" o "IEPS".
**taxes[].factor**<br><small>opcional</small> | string | "Tasa" | Tipo factor. Puede tener los valores "Tasa", "Cuota" o "Exento".
**taxes[].withholding**<br><small>opcional</small> | boolean | false | `true`: el impuesto es una retención. `false`: el impuesto es un traslado (impuesto normal).
**local_taxes**<br><small>opcional</small> | array | [] | Arreglo de impuestos locales (estatales o municipales), en caso de haberlos.
**local_taxes[].rate**<br><small>requerido</small> | decimal | none | Tasa del impuesto.
**local_taxes[].type**<br><small>requerido</small> | string | none | Nombre del impuesto. Texto libre.
**local_taxes[].withholding**<br><small>opcional</small> | boolean | false | `true`: el impuesto es una retención. `false`: el impuesto es un traslado (impuesto normal).
**unit_key**<br><small>opcional</small> | string | "H87" | Clave de unidad de medida, del catálogo del SAT. El valor por default `"H87"` (each) es la clave para representar una pieza o unidad de venta (lápiz, cuaderno, televisión, etc). Si la unidad de tu producto es kilogramos, litros, horas u otra unidad, te proporcionamos una manera conveniente de encontrar la clave utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**unit_name**<br><small>opcional</small> | string | "Elemento" | Palabra que representa la unidad de medida de tu producto. Debe estar relacionada con la clave de unidad `unit_key`.
**sku**<br><small>opcional</small> | string | none | Identificador de uso interno designado por la empresa. Puede tener cualquier valor.

### Actualizar Producto

> <h4 class="toc-ignore">Definición</h4>

```text
PUT https://www.facturapi.io/v1/products/{PRODUCT_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/products/590e22c26d04f840aa8438b2 \
  -X PUT
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "price": 456.70
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const product = await facturapi.products.update('590e22c26d04f840aa8438b2', {
  price: 456.70
});
```

```csharp
var product = await facturapi.Product.UpdateAsync("590e22c26d04f840aa8438b2", new Dictionary<string, object>
{
  ["price"] = 456.70
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$product = array(
  "price" => 456.70
);

$updated_product = $facturapi->Products->update( "5a3f3e35f508333611ad6b3e", $product );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Ukelele",
  "product_key": "60131324",
  "price": 456.7,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "H87",
  "tax_included": true,
  "taxes": [
    {
      "withholding": false,
      "type": "IVA",
      "rate": 0.16
    }
  ]
}
```

Actualiza la información de un producto existente, asignando los valores de los parámetros enviados. Los parámetros que no se envíen en la petición no se modificarán.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**description**<br><small>requerido</small> | string | none | Descripción del bien o servicio como aparecerá en la factura.
**product_key**<br><small>requerido</small> | string | none | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**price**<br><small>requerido</small> | decimal | none | Precio por unidad del bien o servicio. Este valor representará el precio con IVA incluído o sin él, dependiendo del valor de `tax_included`.
**tax_included**<br><small>opcional</small> | boolean | true | `true`: todos los impuestos aplicables están incluídos en el precio (atributo `price`) y se desglosarán automáticamente al emitir la factura. `false`: el atributo `price` no incluye impuestos, por lo que aquellos impuestos a aplicar se sumarán en el precio final.
**taxes**<br><small>opcional</small> | array | Elemento con IVA trasladado del 16% | Lista de impuestos que deberán aplicarse a este producto. Si el argumento se omite o es nulo, se guardará con un elemento que representa el IVA trasladado del 16%, que es el impuesto más común. En caso de mandar explícitamente un arreglo vacío, se entiende que el producto está excento de impuestos.
**taxes[].rate**<br><small>opcional</small> | decimal | 0.16 | Tasa del impuesto.
**taxes[].type**<br><small>opcional</small> | string | "IVA" | Tipo de impuesto. Puede tener los valores "IVA", "ISR" o "IEPS".
**taxes[].withholding**<br><small>opcional</small> | boolean | false | `true`: el impuesto es una retención. `false`: el impuesto es un traslado (impuesto normal).
**unit_key**<br><small>opcional</small> | string | "H87" | Clave de unidad de medida, del catálogo del SAT. El valor por default `"H87"` (each) es la clave para representar una pieza o unidad de venta (lápiz, cuaderno, televisión, etc). Si la unidad de tu producto es kilogramos, litros, horas u otra unidad, te proporcionamos una manera conveniente de encontrar la clave utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**unit_name**<br><small>opcional</small> | string | "Pieza" | Palabra que representa la unidad de medida de tu producto. Debe estar relacionada con la clave de unidad `unit_key`.
**sku**<br><small>opcional</small> | string | "" | Identificador de uso interno designado por la empresa. Puede tener cualquier valor.

### Lista de Productos

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/products
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/products \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const productSearch = await facturapi.products.list();
// productSearch.data contains the result array
```

```csharp
var searchResult = await facturapi.Product.ListAsync();
// searchResult.Data is an array of Products
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$products = $facturapi->Products->all();
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "total_results": 1,
  "data": [
    {
      "id": "590e22c26d04f840aa8438b2",
      "created_at": "2017-05-06T19:23:46.096Z",
      "livemode": false,
      "description": "Ukelele",
      "product_key": "60131324",
      "price": 345.6,
      "sku": "ABC1234",
      "unit_name": "Pieza",
      "unit_key": "H87",
      "tax_included": true,
      "taxes": [
        {
          "withholding": false,
          "type": "IVA",
          "rate": 0.16
        }
      ]
    }
  ]
}
```

Obtiene la lista de productos registrados en tu organización

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en la descripción del producto o SKU.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

### Obtener un Producto

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/products/{PRODUCT_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/products/590e22c26d04f840aa8438b2 \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const product = await facturapi.products.retrieve('590e22c26d04f840aa8438b2');
```

```csharp
var product = await facturapi.Product.RetrieveAsync("590e22c26d04f840aa8438b2");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$product = $facturapi->Products->retrieve( "5a3ee743f508333611ad6b3c" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Ukelele",
  "product_key": "60131324",
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "H87",
  "tax_included": true,
  "taxes": [
    {
      "withholding": false,
      "type": "IVA",
      "rate": 0.16
    }
  ]
}
```

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del producto

### Eliminar Producto

```shell
curl https://www.facturapi.io/v1/products/590e22c26d04f840aa8438b2 \
  -X DELETE \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const removedProduct = await facturapi.products.del('590e22c26d04f840aa8438b2');
```

```csharp
var product = await facturapi.Product.DeleteAsync("590e22c26d04f840aa8438b2");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$facturapi->Products->delete( "5a3f3e35f508333611ad6b3e" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Ukelele",
  "product_key": "60131324",
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "H87",
  "tax_included": true,
  "taxes": [
    {
      "withholding": false,
      "type": "IVA",
      "rate": 0.16
    }
  ]
}
```

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del producto
