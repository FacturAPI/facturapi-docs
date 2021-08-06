### Subir Certificado (CSD)

> <h4 class="toc-ignore">Definición</h4>
> `PUT /v1/organizations/{ORGANIZATION_ID}/certificate`
> <br/>
> <small><strong>`multipart/form-data`</strong></small>

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/5a2a307be93a2f00129ea035/certificate \
  -X PUT \
  -H "Authorization: Bearer sk_user_API_KEY" \
  -H "Content-Type: mutipart/form-data" \
  -F 'cer=@/path/to/your/CSD.cer' \
  -F 'key=@/path/to/your/CSD.key' \
  -F 'password=CONTRASEÑA_DEL_CERTIFICADO'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_user_API_KEY');
const fs = require('fs');
const cerFile = fs.createReadStream('/path/to/your/CSD.cer');
const keyFile = fs.createReadStream('/path/to/your/CSD.key');
const organization = await facturapi.organizations.uploadCertificate(
  '5a2a307be93a2f00129ea035',
  cerFile,
  keyFile,
  'CONTRASEÑA_DEL_CERTIFICADO'
);
```

```csharp
var facturapi = new FacturapiClient("sk_user_API_KEY");
var cerFileStream = File.OpenRead(@"C:\path\to\your\CSD.cer");
var keyFileStream = File.OpenRead(@"C:\path\to\your\CSD.key");
var organization = await facturapi.Organization.UploadCertificateAsync(
  "5a2a307be93a2f00129ea035",
  cerFileStream,
  keyFileStream,
  "CONTRASEÑA_DEL_CERTIFICADO"
);
// Guarda el organization.Id para asociarlo con tu propia base de datos
```

```php
<?php
$facturapi = new Facturapi( "sk_user_API_KEY" );
$organization = $facturapi->Organizations->uploadCertificate("5a2a307be93a2f00129ea035", array(
  "cerFile" => "/path/to/CSD.cer",
  "keyFile" => "/path/to/CSD.key",
  "password" => "mYp455w0rD1553cUr3!"
));
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
  "certificate": {
    "expires_at": "2019-04-14T00:00:00.000Z",
    "updated_at": "2018-02-08T21:12:45.369Z",
    "has_certificate": true
  },
  "receipts": {
    "invoicing_period": "month",
    "duration_days": 14,
    "next_folio_number": 100
  }
}
```

Sube los archivos del Certificado de Sello Digital (CSD) proporcionado por el SAT.
Esta llamada también debe usarse para reemplazar los certificados existentes en caso de solicitar nuevos.

Al actualizar tus certificados se leerá el RFC y asignará automáticamente a `legal.tax_id`.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
**cerFile**<br><small>requerido</small> | binario o stream | none | Archivo binario o stream (dependiendo del lenguaje en que se implemente) de extensión `.cer` del CSD.
**keyFile**<br><small>requerido</small> | binario o stream | none | Archivo binario o stream (dependiendo del lenguaje en que se implemente) de extensión `.key` del CSD.
**password**<br><small>requerido</small> | string | none | Contraseña del certificado.
