## Catálogos SAT

### Producto/Servicio

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/catalogs/products
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/catalogs/products?q=ukelele \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const searchResult = await facturapi.catalogs.searchProducts({ q: 'ukelele' });
// searchResult.data contains the result array
```

```csharp
var searchResult = await facturapi.Catalog.SearchProducts(
  new Dictionary<string, object>
  {
    ["q"] = "ukelele"
  }
);
// searchResult.Data contains the result array
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );
$result = $facturapi->Catalogs->searchProducts([
  "q" => "ukelele"
]);
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "data": [
    {
      "key": "60131324",
      "description": "Ukelele",
      "score": 1
    }
  ]
}
```

Este endpoint te permite buscar en el catálogo Productos/Servicios del SAT, el cual contiene la clave a incluir en la factura.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>requerido</small> | string | none | Consulta. Texto a buscar en la descripción de la categoría.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

### Unidades de Medida

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/catalogs/units
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/catalogs/units?q=pulgada \
  -u "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const searchResult = await facturapi.catalogs.searchUnits({ q: 'pulgada' });
// searchResult.data contains the result array
```

```csharp
var searchResult = await facturapi.Catalog.SearchUnits(
  new Dictionary<string, object>
  {
    ["q"] = "pulgada"
  }
);
// searchResult.Data contains the result array
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );
$result = $facturapi->Catalogs->searchUnits([
  "q" => "pulgada"
]);
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "data": [
    {
      "key": "INH",
      "description": "Pulgada",
      "score": 1.1
    }
  ]
}
```

Este endpoint te permite buscar en el catálogo de Unidades de Medida del SAT.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>requerido</small> | string | none | Consulta. Texto a buscar en la descripción de la unidad de medida.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.
