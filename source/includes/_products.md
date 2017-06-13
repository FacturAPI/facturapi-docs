# Productos

## Objeto Producto

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Licuadora",
  "product_key": 123456,
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "EA",
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
**product_key** | integer | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys">herramienta de búsqueda de claves</a>.
**price** | decimal | Precio por unidad del bien o servicio. Este valor puede representar el precio con IVA incluído o sin él, dependiendo del valor de `tax_included`.
**tax_included** | boolean | `true`: todos los impuestos aplicables están incluídos en el precio (atributo `price`) y se desglosarán automáticamente al emitir la factura. `false`: el atributo `price` no incluye impuestos, por lo que aquellos impuestos a aplicar se sumarán en el precio final.
**taxes** | array | Lista de impuestos que deberán aplicarse a este producto. Si la lista está vacía, se entiende que el producto está excento de impuestos.
**taxes[].rate** | decimal | Tasa del impuesto.
**taxes[].type** | string | Tipo de impuesto.
**taxes[].withholding** | boolean | `true`: el impuesto es una retención. `false`: el impuesto es un traslado (impuesto normal).
**unit_key** | string | Clave de unidad de medida, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys">herramienta de búsqueda de claves</a>.
**unit_name** | string | Nombre de la unidad de medida como aparecerá en la factura.
**sku** | string | Identificador de uso interno designado por la empresa.

## Crear Producto

Crea un nuevo Producto

```shell
curl http://www.facturapi.io/v1/products \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "description": "Licuadora",
        "product_key": 123456,
        "price": 345.60,
        "sku": "ABC1234"
    }'
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.products.create({
  description: 'Licuadora',
  product_key: 123456,
  price: 345.60,
  sku: 'ABC1234'
}).then(product => { /* save the product.id */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var product = await Facturapi.Product.CreateAsync(new Dictionary<string, object>
{
  ["description"] = "Licuadora",
  ["product_key"] = 123456,
  ["price"] = 345.60,
  ["sku"] = "ABC1234"
});
```

> <h3 class="toc-ignore">Respuesta JSON</h3>

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Licuadora",
  "product_key": 123456,
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "EA",
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

### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**description**<br><small>requerido</small> | string | none | Descripción del bien o servicio como aparecerá en la factura.
**product_key**<br><small>requerido</small> | string | none | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys">herramienta de búsqueda de claves</a>.
**price**<br><small>requerido</small> | decimal | none | Precio por unidad del bien o servicio. Este valor representará el precio con IVA incluído o sin él, dependiendo del valor de `tax_included`.
**tax_included**<br><small>opcional</small> | boolean | true | `true`: todos los impuestos aplicables están incluídos en el precio (atributo `price`) y se desglosarán automáticamente al emitir la factura. `false`: el atributo `price` no incluye impuestos, por lo que aquellos impuestos a aplicar se sumarán en el precio final.
**taxes**<br><small>opcional</small> | array | Elemento con IVA trasladado del 16% | Lista de impuestos que deberán aplicarse a este producto. Si el argumento se omite o es nulo, se guardará con un elemento que representa el IVA trasladado del 16%, que es el impuesto más común. En caso de mandar explícitamente un arreglo vacío, se entiende que el producto está excento de impuestos.
**taxes[].rate**<br><small>opcional</small> | decimal | 0.16 | Tasa del impuesto.
**taxes[].type**<br><small>opcional</small> | string | "IVA" | Tipo de impuesto. Puede tener los valores "IVA", "ISR" o "IEPS".
**taxes[].withholding**<br><small>opcional</small> | boolean | false | `true`: el impuesto es una retención. `false`: el impuesto es un traslado (impuesto normal).
**unit_key**<br><small>opcional</small> | string | "EA" | Clave de unidad de medida, del catálogo del SAT. El valor por default `"EA"` (each) es la clave para representar una pieza o unidad de venta (lápiz, cuaderno, televisión, etc). Si la unidad de tu producto es kilogramos, litros, horas u otra unidad, te proporcionamos una manera conveniente de encontrar la clave utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys">herramienta de búsqueda de claves</a>.
**unit_name**<br><small>opcional</small> | string | "Pieza" | Palabra que representa la unidad de medida de tu producto. Debe estar relacionada con la clave de unidad `unit_key`.
**sku**<br><small>opcional</small> | string | "" | Identificador de uso interno designado por la empresa. Puede tener cualquier valor.


## Lista de Productos

Obtiene la lista de productos registrados en tu organización

```shell
curl http://www.facturapi.io/v1/products \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" 
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.products.list()
  .then(list => { /* list.data contains the result array */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var searchResult = await Facturapi.Product.ListAsync();
// searchResult.Data is an array of Products
```

> <h3 class="toc-ignore">Respuesta JSON</h3>

```json
{
  "page": 1,
  "total_pages": 1,
  "data": [
    {
      "id": "590e22c26d04f840aa8438b2",
      "created_at": "2017-05-06T19:23:46.096Z",
      "livemode": false,
      "description": "Licuadora",
      "product_key": 123456,
      "price": 345.6,
      "sku": "ABC1234",
      "unit_name": "Pieza",
      "unit_key": "EA",
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

### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en la descripción del producto o SKU.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

## Obtener un Producto

```shell
curl http://www.facturapi.io/v1/products/590e22c26d04f840aa8438b2 \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.products.retrieve('590e22c26d04f840aa8438b2')
  .then(product => { /* ... */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var product = await Facturapi.Product.RetrieveAsync("590e22c26d04f840aa8438b2");
```

> <h3 class="toc-ignore">Respuesta JSON</h3>

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Licuadora",
  "product_key": 123456,
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "EA",
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

### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del producto

## Eliminar Producto

```shell
curl http://www.facturapi.io/v1/products/590e22c26d04f840aa8438b2 \
  -X DELETE \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const facturapi = require('facturapi')('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
facturapi.products.del('590e22c26d04f840aa8438b2')
  .then(product => { /* ... */ })
  .catch(err => { /* handle the error */ })
```

```csharp
var product = await Facturapi.Product.DeleteAsync("590e22c26d04f840aa8438b2");
```

> <h3 class="toc-ignore">Respuesta JSON</h3>

```json
{
  "id": "590e22c26d04f840aa8438b2",
  "created_at": "2017-05-06T19:23:46.096Z",
  "livemode": false,
  "description": "Licuadora",
  "product_key": 123456,
  "price": 345.6,
  "sku": "ABC1234",
  "unit_name": "Pieza",
  "unit_key": "EA",
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

### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del producto
