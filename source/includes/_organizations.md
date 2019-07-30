## Organizaciones

### Objeto Organización

```json
{
  "id": "5a2a307be93a2f00129ea035",
  "created_at": "2017-05-05T20:55:33.468Z",
  "is_production_ready": false,
  "pending_steps": [{
    "type": "logo",
    "description": "Sube tu logotipo"
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
    "has_logo": false,
    "color": "#950C1A",
    "pdf_extra": {
      "codes": false,
      "product_key": false
    }
  },
  "certificate": {
    "expires_at": "2019-04-14T00:00:00.000Z",
    "updated_at": "2018-02-08T21:12:45.369Z",
    "has_certificate": true
  }
}
```

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id** | string | Identificador de la organización.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**is_production_ready** | boolean | Bandera que indica si se ha completado la información necesaria para facturar en producción.
**pending_steps** | array of objects | Lista de pasos que se necesitan completar para que esta organización pueda emitir facturas válidas en producción (modo Live).
**pending_steps[].type** | string | Clave humanamente legible para distinguir el paso que se requiere completar. Puede tener los valores: "legal", "logo" o "certificate".
**pending_steps[].description** | string | Texto que describe el paso que se requiere completar y que puedes usar para mostrárselo al usuario.
**legal** | object | Datos fiscales de la empresa.
**legal.name** | string | Nombre comercial de la organización.
**legal.legal_name** | string | Nombre Fiscal o Razón Social de la organización.
**legal.tax_id** | string | RFC de la organización.
**legal.website** | string | Sitio web de la organización que se incluirá como enlace en el correo que se le envía al cliente con su factura adjunta.
**legal.phone** | string | Teléfono de la organización que aparecerá en la factura impresa (PDF).
**legal.address** | object | Domicilio fiscal.
**legal.address.street** | string | Calle
**legal.address.exterior** | string | Número exterior
**legal.address.interior** | string | Número interior
**legal.address.neighborhood** | string | Colonia
**legal.address.zip** | string | Código postal
**legal.address.city** | string | Ciudad
**legal.address.municipality** | string | Municipio o Delegación
**legal.address.state** | string | Estado o Provincia
**legal.address.country** | string | País
**customization** | object | Datos de personalización
**customization.has_logo** | boolean | Indica si la organización ya ha subido su logotipo
**customization.color** | string | Color en representación Hexadecimal RGB de 6 caracteres.
**customization.pdf_extra** | object | Configura qué campos opcionales se queiren mostrar en el PDF. El SAT no obliga a mostrar estos campos, pero pueden activarse según la preferencia de la organización.
**customization.pdf_extra.codes** | boolean | Mostrar códigos de catálogos del SAT junto a sus descripciones. Ejemplo: "KGM Kilogramo".
**customization.pdf_extra.product_key** | boolean | Configura qué campos opcionales se queiren mostrar en el PDF. El SAT no obliga a mostrar estos campos, pero pueden activarse según la preferencia de la organización.
**certificate** | object | Información sobre el Certificado de Sello Digital (CSD).
**certificate.has_certificate** | boolean | Indica si la organización ya ha subido su Certificado de Sello Digital (CSD).
**certificate.updated_at** | object | Fecha de la última vez en que el certificado fue subido o reemplazado, en formato ISO8601 (UTC String).
**certificate.expires_at** | string | Fecha en que expira el certificado en formato ISO8601 (UTC String).

### Crear Organización

> <h4 class="toc-ignore">Definición</h4>
> `POST /v1/organizations`
> <br/>
> <small><strong>`application/json`</strong></small>

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
      "name": "Skynet"
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organization = await facturapi.organizations.create({
  name: 'Skynet'
});
// remember to save the organization.id in your databases
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var organization = await facturapi.Organization.CreateAsync(new Dictionary<string, object>
{
  ["name"] = "Skynet"
});
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->create(array(
    "name" => "Skynet"
));
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5a2a307be93a2f00129ea035",
  "created_at": "2017-05-05T20:55:33.468Z",
  "is_production_ready": false,
  "pending_steps": [{
    "type": "legal",
    "description": "Introduce tus datos fiscales"
  },{
    "type": "logo",
    "description": "Sube tu logotipo"
  }, {
    "type": "certificate",
    "description": "Sube tu Certificado de Sello Digital (CSD)"
  }],
  "legal": {
    "name": "Skynet",
    "legal_name": "",
    "tax_id": "",
    "tax_system": "",
    "website": "",
    "phone": "",
    "address": {
      "street":"",
      "exterior": "",
      "interior": "",
      "zip": "",
      "neighborhood": "",
      "city": "",
      "municipality": "",
      "state": "",
      "country": ""
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
  }
}
```

Crea una nueva Organización

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**name**<br><small>requerido</small> | string | none | Nombre comercial de la organización.

### Actualizar Datos Fiscales

> <h4 class="toc-ignore">Definición</h4>
> `PUT /v1/organizations/{ORGANIZATION_ID}/legal`
> <br/>
> <small><strong>`application/json`</strong></small>

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/5a2a307be93a2f00129ea035/legal \
  -X PUT \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:" \
  -H "Content-Type: application/json" \
  -d '{
        "name": "Skynet",
        "legal_name": "Skynet S.A. de C.V.",
        "tax_id": "SKY850208W40",
        "tax_system": "601",
        "website": "www.sky.net",
        "phone": "555-555-5555",
        "address": {
          "exterior": "1414",
          "interior": "12",
          "zip": "44940",
          "neighborhood": "Villa Toscana",
          "city": "Guadalajara",
          "municipality": "Guadalajara",
          "state": "Jalisco",
          "country": "México"
        }
    }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const organization = await facturapi.organizations.updateLegal(
  '5a2a307be93a2f00129ea035',
  {
    name: 'Skynet',
    legal_name: 'Skynet S.A. de C.V.',
    tax_id: 'SKY850208W40',
    tax_system: Facturapi.TaxSystem.GENERAL_LEY_DE_PERSONAS_MORALES,
    website: 'www.sky.net',
    phone: '555-555-5555',
    address: {
      exterior: '1414',
      interior: '12',
      zip: '44940',
      neighborhood: 'Villa Toscana',
      city: 'Guadalajara',
      municipality: 'Guadalajara',
      state: 'Jalisco',
      country: 'México'
    }
  }
);
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var organization = await facturapi.Organization.UpdateLegalAsync(
  "5a2a307be93a2f00129ea035",
  new Dictionary<string, object>
  {
    ["name"] = "Skynet",
    ["legal_name"] = "Skynet S.A. de C.V.",
    ["tax_id"] = "SKY850208W40",
    ["tax_system"] = "601",
    ["website"] = "www.sky.net",
    ["phone"] = "555-555-5555",
    ["address"] = new Dictionary<string, object>
    {
      ["exterior"] = "1414",
      ["interior"] = "12",
      ["zip"] = "44940",
      ["neighborhood"] = "Villa Toscana",
      ["city"] = "Guadalajara",
      ["municipality"] = "Guadalajara",
      ["state"] = "Jalisco",
      ["country"] = "México"
    }
  }
);
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->updateLegal(
  "5a2a307be93a2f00129ea035", array(
    "name" => "Skynet",
    "legal_name" => "Skynet S.A. de C.V.",
    "tax_id" => "SKY850208W40",
    "tax_system" => "SKY850208W40",
    "website" => "www.sky.net",
    "phone" => "555-555-5555",
    "address" => array(
      "exterior" => "1414",
      "interior" => "12",
      "zip" => "44940",
      "neighborhood" => "Villa Toscana",
      "city" => "Guadalajara",
      "municipality" => "Guadalajara",
      "state" => "Jalisco",
      "country" => "México"
    )
  )
);
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
  }
}
```

Actualiza los datos fiscales de la organización.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
**name**<br><small>requerido</small> | string | none | Nombre comercial de la organización.
**legal_name**<br><small>requerido</small> | string | none | Nombre Fiscal o Razón Social de la organización.
**tax_system**<br><small>requerido</small> | string | none | Código del Régimen Fiscal, del catálogo del SAT.
**website**<br><small>opcional</small> | string | "" | Sitio web de la organización que se incluirá como enlace en el correo que se le envía al cliente con su factura adjunta.
**phone**<br><small>opcional</small> | string | "" | Teléfono de la organización que aparecerá en la factura impresa (PDF).
**address**<br><small>requerido</small> | object | none | Domicilio fiscal.
**address.zip**<br><small>requerido</small> | string | none | Código postal
**address.street**<br><small>requerido</small> | string | none | Calle
**address.exterior**<br><small>requerido</small> | string | none | Número exterior
**address.interior**<br><small>opcional</small> | string | "" | Número interior
**address.neighborhood**<br><small>opcional</small> | string | "" | Colonia
**address.city**<br><small>opcional</small> | string | "" | Ciudad
**address.municipality**<br><small>opcional</small> | string | "" | Municipio o Delegación
**address.state**<br><small>opcional</small> | string | "" | Estado o Provincia

#### Código de Régimen Fiscal

Código | Descripción
:-----:| -----------
"601" |	General de Ley Personas Morales
"603" |	Personas Morales con Fines no Lucrativos
"605" |	Sueldos y Salarios e Ingresos Asimilados a Salarios
"606" |	Arrendamiento
"608" |	Demás ingresos
"609" |	Consolidación
"610" |	Residentes en el Extranjero sin Establecimiento Permanente en México
"611" |	Ingresos por Dividendos (socios y accionistas)
"612" |	Personas Físicas con Actividades Empresariales y Profesionales
"614" |	Ingresos por intereses
"616" |	Sin obligaciones fiscales
"620" |	Sociedades Cooperativas de Producción que optan por diferir sus ingresos
"621" |	Régimen de Incorporación Fiscal
"622" |	Actividades Agrícolas, Ganaderas, Silvícolas y Pesqueras
"623" |	Opcional para Grupos de Sociedades
"624" |	Coordinados
"628" |	Hidrocarburos
"607" |	Régimen de Enajenación o Adquisición de Bienes
"629" |	De los Regímenes Fiscales Preferentes y de las Empresas Multinacionales
"630" |	Enajenación de acciones en bolsa de valores
"615" |	Régimen de los ingresos por obtención de premios