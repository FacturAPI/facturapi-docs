### Obtener Api Keys

> <h4 class="toc-ignore">Definición</h4>
> `GET /v1/organizations/{ORGANIZATION_ID}/apikeys`

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/organizations/5a2a307be93a2f00129ea035/apikeys \
  -u "sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP:"
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP');
const apiKeys = await facturapi.organizations.getApiKeys('5a2a307be93a2f00129ea035');
```

```csharp
var facturapi = new FacturapiClient("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
var apiKeys = await facturapi.Organization.GetApiKeysAsync("5a2a307be93a2f00129ea035");
```

```php
<?php
$facturapi = new Facturapi("sk_user_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP");
$organization = $facturapi->Organizations->getApiKeys("5a2a307be93a2f00129ea035");
```


> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "live_key": "sk_live_m7YOM1G5dqbAga41Z90gJL29WxB4zvX8",
  "test_key": "sk_test_Pj7R6e9Gw3O8ByGJ05Ezjmd0ZAXno4QV"
}
```

Obtiene el objeto Organización.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**id**<br><small>requerido</small> | string | none | Identificador de la organización.
