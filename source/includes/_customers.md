# API (Referencia)

## Clientes

### Objeto Cliente

```json
{
  "id": "590ce6c56d04f840aa8438af",
  "created_at": "2017-05-05T20:55:33.468Z",
  "livemode": false,
  "legal_name": "John Doe",
  "email": "email@example.com",
  "phone": "email@example.com",
  "tax_id": "ABCD111111ABC",
  "address": {
    "street": "Sunset Blvd",
    "exterior": "123",
    "interior": "4",
    "zip": "44940",
    "neighborhood": "Villa Toscana",
    "city": "Guadalajara",
    "municipality": "Guadalajara",
    "state": "Jalisco",
    "country": "México"
  }
}
```

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id** | string | Identificador del cliente.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**livemode** | boolean | `true`: fue creado en modo producción, `false`: fue creado en modo pruebas
**legal_name** | string | Nombre o Razón Social del cliente.
**tax_id** | string | RFC del cliente.
**email** | string | Dirección de correo electrónico al cual enviar las facturas generadas.
**phone** | string | Teléfono del cliente que aparecerá en la factura impresa (PDF).
**address** | object | Domicilio fiscal.
**address.street** | string | Calle
**address.exterior** | string | Número exterior
**address.interior** | string | Número interior
**address.neighborhood** | string | Colonia
**address.city** | string | Ciudad
**address.municipality** | string | Municipio o Delegación
**address.state** | string | Estado o Provincia
**address.country** | string | País

### Crear Cliente

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/customers
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/customers \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
      "legal_name": "John Doe",
      "email": "email@example.com",
      "tax_id": "ABCD111111ABC"
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const customer = await facturapi.customers.create({
  legal_name: 'John Doe',
  email: 'email@example.com',
  tax_id: 'ABCD101010XYZ'
});
// save the customer.id in your database
```

```csharp
var customer = await facturapi.Customer.CreateAsync(new Dictionary<string, object>
{
  ["legal_name"] = "John Doe",
  ["email"] = "email@example.com",
  ["tax_id"] = "ABCD101010XYZ"
});
// Guarda el customer.Id para facturar a tu cliente
```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$customer = $facturapi->Customers->create(array(
  "email" => "email@example.com",
  "legal_name" => "John Doe",
  "tax_id" => "ABCD101010XYZ"
));
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590ce6c56d04f840aa8438af",
  "created_at": "2017-05-05T20:55:33.468Z",
  "livemode": false,
  "legal_name": "John Doe",
  "email": "email@example.com",
  "tax_id": "ABCD111111ABC",
  "address": {
    "country": "México"
  }
}
```

Crea un nuevo Cliente

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**legal_name**<br><small>requerido</small> | string | none | Nombre Fiscal o Razón Social del cliente.
**tax_id**<br><small>requerido</small> | string | none | RFC del cliente.
**email**<br><small>requerido</small> | string | "" | Dirección de correo electrónico al cual enviar las facturas generadas.
**phone**<br><small>opcional</small> | string | "" | Teléfono del cliente que aparecerá en la factura impresa (PDF).
**address**<br><small>opcional</small> | object | none | Domicilio fiscal.
**address.street**<br><small>opcional</small> | string | "" | Calle
**address.exterior**<br><small>opcional</small> | string | "" | Número exterior
**address.interior**<br><small>opcional</small> | string | "" | Número interior
**address.neighborhood**<br><small>opcional</small> | string | "" | Colonia
**address.zip**<br><small>opcional</small> | string | none | Código postal
**address.city**<br><small>opcional</small> | string | Si se omite, se obtiene del código postal | Ciudad.
**address.municipality**<br><small>opcional</small> | string | Si se omite, se obtiene del código postal | Municipio o Delegación
**address.state**<br><small>opcional</small> | string | Si se omite, se obtiene del código postal | Estado o Provincia
**address.country**<br><small>opcional</small> | string | "México" | País

### Actualizar Cliente

> <h4 class="toc-ignore">Definición</h4>

```text
PUT https://www.facturapi.io/v1/customers/{CUSTOMER_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/customers/590ce6c56d04f840aa8438af \
  -X PUT
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
      "email": "jdoe@example.com",
      "address": {
        "street": "Santa Monica Ave."
      }
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const customer = await facturapi.customers.update(
  '590ce6c56d04f840aa8438af',
  {
    email: 'jdoe@example.com',
    address: {
      street: 'Santa Monica Ave.'
    }
  }
);
```

```csharp
var customer = await facturapi.Customer.UpdateAsync(
  "590ce6c56d04f840aa8438af",
  new Dictionary<string, object>
  {
    ["email"] = "jdoe@example.com",
    ["address"] = new Dictionary<string, object>
    {
      ["street"] = "Santa Monica Ave."
    }
  }
);
```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$customer = $facturapi->Customers->update("590ce6c56d04f840aa8438af", array(
  "email" => "jdoe@example.com",
  "legal_name" => "John Doe",
  "address" => array(
    "street" => "Santa Monica Ave."
  )
));
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590ce6c56d04f840aa8438af",
  "created_at": "2017-05-05T20:55:33.468Z",
  "livemode": false,
  "legal_name": "John Doe",
  "email": "jdoe@example.com",
  "tax_id": "ABCD111111ABC",
  "address": {
    "zip": "44940",
    "street": "Santa Monica Ave.",
    "city": "Guadalajara",
    "municipality": "Guadalajara",
    "state": "Jalisco",
    "country": "México"
  }
}
```

Actualiza la información de un cliente existente, asignando los valores de los parámetros enviados. Los parámetros que no se envíen en la petición no se modificarán.

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del cliente.
**legal_name**<br><small>opcional</small> | string | Nombre Fiscal o Razón Social del cliente.
**tax_id**<br><small>opcional</small> | string | RFC del cliente.
**email**<br><small>opcional</small> | string | Dirección de correo electrónico al cual enviar las facturas generadas.
**phone**<br><small>opcional</small> | string | Teléfono del cliente que aparecerá en la factura impresa (PDF).
**address**<br><small>opcional</small> | object | Domicilio fiscal.
**address.street**<br><small>opcional</small> | string | Calle
**address.exterior**<br><small>opcional</small> | string | Número exterior
**address.interior**<br><small>opcional</small> | string | Número interior
**address.neighborhood**<br><small>opcional</small> | string | Colonia
**address.zip**<br><small>opcional</small> | string | Código postal
**address.city**<br><small>opcional</small> | string | Ciudad.
**address.municipality**<br><small>opcional</small> | string | Municipio o Delegación
**address.state**<br><small>opcional</small> | string | Estado o Provincia
**address.country**<br><small>opcional</small> | string | País

### Lista de Clientes

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/customers
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/customers \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const customerSearch = await facturapi.customers.list();
// customerSearch.data contains the result array
```

```csharp
var searchResult = await facturapi.Customer.ListAsync();
// searchResult.Data is an array of Customer
```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$customers = $facturapi->Customers->all()
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "data": [
    {
      "id": "590ce6c56d04f840aa8438af",
      "created_at": "2017-05-05T20:55:33.468Z",
      "livemode": false,
      "legal_name": "John Doe",
      "email": "email@example.com",
      "tax_id": "ABCD111111ABC",
      "address": {
        "zip": "12345",
        "street": "Sunset Blvd",
        "country": "México"
      }
    }
  ]
}
```

Obtiene la lista de clientes registrados en tu organización

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en `legal_name` (nombre fiscal) o en `tax_id` (RFC).
**date**<br><small>opcional</small> | object | none | Diccionario con parámetros que representan el rango de fechas solicitado.
**date.gt**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es posterior a esta fecha.
**date.gte**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es posterior o igual a esta fecha.
**date.lt**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es anterior a esta fecha.
**date.lte**<br><small>opcional</small> | string | none | Regresa clientes cuya fecha de creación es anterior o igual a esta fecha.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

### Obtener un Cliente

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/customers/{CUSTOMER_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/customers/590ce6c56d04f840aa8438af \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const customer = await facturapi.customers.retrieve('590ce6c56d04f840aa8438af');
```

```csharp
var customer = await facturapi.Customer.RetrieveAsync("590ce6c56d04f840aa8438af");
```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$customer = $facturapi->Customers->retrieve( "5a3ee743f508333611ad6b3c" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590ce6c56d04f840aa8438af",
  "created_at": "2017-05-05T20:55:33.468Z",
  "livemode": false,
  "legal_name": "John Doe",
  "email": "email@example.com",
  "tax_id": "ABCD111111ABC",
  "address": {
    "zip": "12345",
    "street": "Sunset Blvd",
    "country": "México"
  }
}
```

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del cliente

### Eliminar Cliente

```shell
curl https://www.facturapi.io/v1/customers/590ce6c56d04f840aa8438af \
  -X DELETE \
  -u "sk_test_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const removedCustomer = await facturapi.customers.del('590ce6c56d04f840aa8438af');
// remember to handle possible error throwing
```

```csharp
var customer = await facturapi.Customer.DeleteAsync("590ce6c56d04f840aa8438af");
```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$facturapi->Customers->delete( "5a3fefd9f508333611ad6b43" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "590ce6c56d04f840aa8438af",
  "created_at": "2017-05-05T20:55:33.468Z",
  "livemode": false,
  "legal_name": "John Doe",
  "email": "email@example.com",
  "tax_id": "ABCD111111ABC",
  "address": {
    "zip": "12345",
    "street": "Sunset Blvd",
    "country": "México"
  }
}
```

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador del cliente