### Actualizar Configuración de Recibos

> <h4 class="toc-ignore">Definición</h4>
> `PUT /v1/organizations/{ORGANIZATION_ID}/receipts`
> <br/>
> <small><strong>`application/json`</strong></small>

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/<ORGANIZATION_ID>/receipts \
  -X PUT \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "invoicing_period": "month",
        "duration_days": 14,
        "next_folio_number": 100,
        "ask_address": "hidden"
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organization = await facturapi.organizations.updateReceiptSettings(
  '<ORGANIZATION_ID>',
  {
    invoicing_period: "month",
    duration_days: 14,
    next_folio_number: 100,
    ask_address: 'hidden'
  }
);
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var organization = await facturapi.Organization.UpdateReceiptSettingsAsync(
  "<ORGANIZATION_ID>",
  new Dictionary<string, object>
  {
    ["invoicing_period"] = "month",
    ["duration_days"] = 14,
    ["next_folio_number"] = 100,
    ["ask_address"] = "hidden"
  }
);
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->updateReceiptSettings(
  "<ORGANIZATION_ID>", array(
    "invoicing_period" => "month",
    "duration_days" => 14,
    "next_folio_number" => 100,
    "ask_address" => "hidden"
  )
);
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5a2a307be93a2f00129ea035",
  "created_at": "2017-05-05T20:55:33.468Z",
  "domain": null,
  "is_production_ready": false,
  "pending_steps": [{
    "type": "logo",
    "description": "Sube tu logotipo"
  }, {
    "type": "certificate",
    "description": "Sube tus Certificados de Sello Digital (CSD)"
  }],
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
    "has_logo": false,
    "color": "#818899",
    "pdf_extra": {
      "codes": false,
      "product_key": false
    }
  },
  "certificate": {
    "expires_at": null,
    "updated_at": null,
    "has_certificate": false
  },
  "receipts": {
    "invoicing_period": "month",
    "duration_days": 14,
    "next_folio_number": 100,
    "ask_address": "hidden"
  }
}
```

Actualiza la configuración de recibos de la organización.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
**invoicing_period**<br><small>opcional</small> | string | "month" | Periodicidad con la que la empresa decide realizar una factura global (al público en general) por todos los recibos no facturados. Puede ser `day`, `week`, `month` ó `two_months`.
**duration_days**<br><small>opcional</small> | string | 0 | Días máximos para facturar por medio del portal de autofactura después de emitido el recibo y antes del último día del "Periodo de facturación" (`invoicing_period`). El valor `0` desactiva esta opción, haciendo que los recibos expiren siempre el último día del periodo.
**next_folio_number**<br><small>opcional</small> | integer | 1 | Número de folio que se asignará al siguiente recibo creado en esta organización.
**ask_address**<br><small>opcional</small> | string | "optional" | Opción que define si se le debe pedir el domicilio al usuario en el sitio de autofactura. Puede tener los siguientes valores:<ul><li>`"optional"` (default): El usuario tendrá la opción de agregar su domicilio si así lo desea, pero no será obligatorio.</li><li>`"hidden"`: El usuario no tendrá la opción de agregar su domicilio.</li><li>`"required"`: El usuario deberá llenar la información sobre su domicilio para crear su factura.</li></ul>

### Elegir Dominio para Autofactura

> <h4 class="toc-ignore">Definición</h4>
> `PUT /v1/organizations/{ORGANIZATION_ID}/domain`
> <br/>
> <small><strong>`application/json`</strong></small>

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/5a2a307be93a2f00129ea035/domain \
  -X PUT \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "domain": "empresa-demo"
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organization = await facturapi.organizations.updateDomain(
  '5a2a307be93a2f00129ea035',
  { domain: 'empresa-demo' }
);
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var organization = await facturapi.Organization.UpdateDomainAsync(
  "5a2a307be93a2f00129ea035",
  new Dictionary<string, object>
  {
    ["domain"] = "empresa-demo"
  }
);
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->updateDomain(
  "5a2a307be93a2f00129ea035",
  array( "domain" => "empresa-demo" )
);
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5a2a307be93a2f00129ea035",
  "created_at": "2017-05-05T20:55:33.468Z",
  "domain": "empresa-demo",
  "is_production_ready": false,
  "pending_steps": [{
    "type": "logo",
    "description": "Sube tu logotipo"
  }, {
    "type": "certificate",
    "description": "Sube tus Certificados de Sello Digital (CSD)"
  }],
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
    "has_logo": false,
    "color": "#818899",
    "pdf_extra": {
      "codes": false,
      "product_key": false
    }
  },
  "certificate": {
    "expires_at": null,
    "updated_at": null,
    "has_certificate": false
  },
  "receipts": {
    "invoicing_period": "month",
    "duration_days": 14,
    "next_folio_number": 100
  }
}
```

Elige el dominio que utilizará esta organización en su micrositio de autofactura. Una vez elegido el dominio, deberás ponerte en contacto con nosotros si necesitas cambiarlo.

El dominio que elijas será el que aparecerá en el campo `self_invoice_url` al crear un nuevo recibo, de la siguiente manera:

`https://factura.space/{DOMAIN}/{RECEIPT_KEY}`

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
**domain**<br><small>requerido</small> | string | none | Nombre del dominio. Se permiten de 4 a 50 caracteres alfanuméricos, guión (-) y guión bajo (_). Puede contener mayúsculas, pero todo será transformado a minúsculas. Debe empezar con una letra y terminar en letra o número.

### Revisar disponibilidad de un dominio

> <h4 class="toc-ignore">Definición</h4>
> `GET /v1/organizations/domain-check?domain={DOMAIN}`
> <br/>

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/domain-check?domain=empresa-demo \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organization = await facturapi.organizations.checkDomainIsAvailable({
  domain: 'empresa-demo'
});
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var organization = await facturapi.Organization.CheckDomainIsAvailableAsync(
  new Dictionary<string, object>
  {
    ["domain"] = "empresa-demo"
  }
);
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->checkDomainIsAvailable(
  array( "domain" => "empresa-demo" )
);
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "available": true
}
```

Revisa si un dominio está disponible para elegir.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
**domain**<br><small>requerido</small> | string | none | Nombre del dominio. Se permiten de 4 a 50 caracteres alfanuméricos, guión (-) y guión bajo (_). Puede contener mayúsculas, pero todo será transformado a minúsculas. Debe empezar con una letra y terminar en letra o número.
