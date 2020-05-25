### Actualizar Personalización

> <h4 class="toc-ignore">Definición</h4>
> `PUT /v1/organizations/{ORGANIZATION_ID}/customization`
> <br/>
> <small><strong>`application/json`</strong></small>

<h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/5a2a307be93a2f00129ea035/customization \
  -X PUT \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "color": "#BADA55",
        "pdf_extra": {
          "codes": false,
          "product_key": true
        }
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organization = await facturapi.organizations.updateCustomization(
  '5a2a307be93a2f00129ea035',
  {
    color: '#BADA55',
    pdf_extra: {
      codes: false,
      product_key: true
    }
  }
);
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var organization = await facturapi.Organization.UpdateCustomizationAsync(
  "5a2a307be93a2f00129ea035",
  new Dictionary<string, object>
  {
    ["color"] = "#BADA55",
    ["pdf_extra"] = new Dictionary<string, object>
    {
      ["codes"] = false,
      ["product_key"] = true
    }
  }
);
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->updateCustomization(
  "5a2a307be93a2f00129ea035",
  array(
    "color" => "#BADA55",
    "pdf_extra" => array(
      "codes" => false,
      "product_key" => true
    )
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
    "type": "cert",
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
    "color": "#BADA55",
    "pdf_extra": {
      "codes": false,
      "product_key": false
    }
  },
  "cert": {
    "expires_at": null,
    "updated_at": null,
    "has_cert": false
  },
  "receipts": {
    "invoicing_period": "month",
    "duration_days": 14,
    "next_folio_number": 100
  }
}
```

Actualiza la información relacionada con la identidad de la organización.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
**color**<br><small>opcional</small> | string | none | Color en representación Hexadecimal RGB de 6 caracteres. El caracter de almohadilla (#) al inicio es opcional.
**next_folio_number**<br><small>opcional</small> | string | none | Número de folio que se asignará a la siguiente factura (y que se incrementará automáticamente por cada nueva factura).
**pdf_extra**<br><small>opcional</small> | object | Objeto con opciones activadas | Configura qué campos opcionales se queiren mostrar en el PDF. El SAT no obliga a mostrar estos campos, pero pueden activarse según la preferencia de la organización.
**pdf_extra.codes**<br><small>opcional</small> | boolean | false | Mostrar códigos de catálogos del SAT junto a sus descripciones. Ejemplo: "KGM Kilogramo".
**pdf_extra.product_key**<br><small>opcional</small> | boolean | false | Mostrar la clave de producto-servicio.

### Subir Logotipo

> <h4 class="toc-ignore">Definición</h4>
> `PUT /v1/organizations/{ORGANIZATION_ID}/logo`
> <br/>
> <small><strong>`multipart/form-data`</strong></small>

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/5a2a307be93a2f00129ea035/logo \
  -X PUT \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: mutipart/form-data" \
  -F 'file=@/path/to/your/logo.jpg'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const fs = require('fs');
const file = fs.createReadStream('/path/to/your/logo.jpg');
const organization = await facturapi.organizations.uploadLogo(
  '5a2a307be93a2f00129ea035',
  file
);
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var fileStream = File.OpenRead(@"C:\path\to\your\logo.jpg");
var organization = await facturapi.Organization.UploadLogoAsync(
  "5a2a307be93a2f00129ea035",
  fileStream
);
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi( "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );
$organization = $facturapi->Organizations->uploadLogo("5a2a307be93a2f00129ea035", array(
  "file" => "/path/to/logo.jpg"
));
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5a2a307be93a2f00129ea035",
  "created_at": "2017-05-05T20:55:33.468Z",
  "is_production_ready": false,
  "pending_steps": [{
    "type": "logo",
    "description": "Sube tu logotipo"
  }, {
    "type": "cert",
    "description": "Sube tus Certificados de Sello Digital (CSD)"
  }],
  "legal": {
    "name": "Skynet",
    "legal_name": "Skynet S.A. de C.V.",
    "tax_id": "SKY850208W40",
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
    "expires_at": null,
    "updated_at": null,
    "has_cert": false
  }
}
```

Sube el logotipo de la organización que será colocado en el PDF y en los correos que se envían al cliente con la factura adjunta.

El archivo debe ser una imagen en formato JPG o PNG y tener un tamaño no mayor a 500 KB. Las dimensiones recomendadas son 800x500 px.

Si la organización ya tiene un logotipo, esta llamada reemplaza en logotipo anterior.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
**file**<br><small>requerido</small> | binario o stream | none | Archivo binario o stream (dependiendo del lenguaje en que se implemente) que contiene la imagen que se usará como logotipo.
