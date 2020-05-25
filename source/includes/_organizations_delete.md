### Eliminar Organización

> <h4 class="toc-ignore">Definición</h4>
> `DELETE /v1/organizations/{ORGANIZATION_ID}`

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/5a2a307be93a2f00129ea035 \
  -X DELETE \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organization = await facturapi.organizations.del(
  '5a2a307be93a2f00129ea035'
);
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var organization = await facturapi.Organization.DeleteAsync(
  "5a2a307be93a2f00129ea035"
);
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->delete("5a2a307be93a2f00129ea035");
```


> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5a2a307be93a2f00129ea035",
  "created_at": "2017-05-05T20:55:33.468Z",
  "domain": null,
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
  },
  "receipts": {
    "invoicing_period": "month",
    "duration_days": 14,
    "next_folio_number": 100
  }
}
```

Obtiene el objeto Organización.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
