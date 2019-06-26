### Lista de Organizaciones

> <h4 class="toc-ignore">Definición</h4>
> `GET /v1/organizations`

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations \
  -u "sk_user_vnpJkayXw4bxoMVQMO3r2B7QEP8LmOWM:" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organizationResults = await facturapi.organizations.list();
```

```csharp
var searchResult = await facturapi.Organization.ListAsync();
// searchResult.Data is an array of Organization
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$organizations = $facturapi->Organizations->all()
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "data": [{
    "id": "5a2a307be93a2f00129ea035",
    "created_at": "2017-05-05T20:55:33.468Z",
    "is_production_ready": true,
    "pending_steps": [],
    "legal": {
      "name": "Skynet",
      "legal_name": "Skynet S.A. de C.V.",
      "tax_id": "SKY850208W40",
      "tax_system": "601",
      "website": "www.sky.net",
      "phone": "555-555-5555",
      "address": {
        "street":"Siempreviva",
        "exterior": "1414",
        "interior": "12",
        "zip": "44940",
        "neighborhood": "Villa Toscana",
        "city": "Guadalajara",
        "municipality": "Guadalajara",
        "state": "Jalisco",
        "country": "México"
      }
    },
    "customization": {
      "has_logo": true,
      "color": "#BADA55",
      "pdf_extra": {
        "codes": false,
        "product_key": true
      }
    },
    "cert": {
      "expires_at": "2019-04-14T00:00:00.000Z",
      "updated_at": "2018-02-08T21:12:45.369Z",
      "has_cert": true
    }
  }]
}
```

Obtiene la lista de organizaciones registradas bajo tu usuario

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en `name` (nombre comercial), `legal_name` (razón social) y en `tax_id` (RFC).
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**date**<br><small>opcional</small> | object | none | Diccionario con parámetros que representan el rango de fechas solicitado.
**date.gt**<br><small>opcional</small> | string | none | Regresa organizaciones cuya fecha de creación es posterior a esta fecha.
**date.gte**<br><small>opcional</small> | string | none | Regresa organizaciones cuya fecha de creación es posterior o igual a esta fecha.
**date.lt**<br><small>opcional</small> | string | none | Regresa organizaciones cuya fecha de creación es anterior a esta fecha.
**date.lte**<br><small>opcional</small> | string | none | Regresa organizaciones cuya fecha de creación es anterior o igual a esta fecha.
