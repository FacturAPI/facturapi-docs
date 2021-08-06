
## Retenciones

CFDI que ampara retenciones e información de pagos.

### Objeto Retención

```json
{
  "id": "6062d9fb226600001cd22f71",
  "created_at": "2021-03-30T07:57:47.616Z",
  "livemode": true,
  "status": "valid",
  "type": "Retención",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Dunder Mifflin S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "uuid": "495e8506-9dc1-4a91-b6ef-d4e5ee27bcc6",
  "folio_int": "R123",
  "fecha_exp": "2021-03-30T07:57:47.616Z",
  "cve_retenc": "26",
  "periodo": {
    "mes_ini": 2,
    "mes_fin": 11,
    "ejerc": 2020
  },
  "totales": {
    "monto_tot_operacion": 244.654321,
    "monto_tot_grav": 99.530865,
    "monto_tot_exent": 145.123456,
    "monto_tot_ret": 40,
    "imp_retenidos": [
      {
        "base_ret": 250,
        "impuesto": "01",
        "monto_ret": 40,
        "pago_provisional": false
      }
    ]
  },
  "stamp": {
    "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",
    "date": "2021-03-30T00:57:48",
    "sat_cert_number": "20001000000300022323",
    "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="
  }
}
```

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id** | string | Identificador de la retención.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**livemode** | boolean | `true`: fue creado en modo Live, `false`: fue creado en modo Test
**status** | string | Estado actual de la retención. Posibles valores: `"valid"` si la retención fue emitida correctamente; `"canceled"` si fue cancelada.
**verification_url** | string | Dirección URL para verificar el estado del CFDI en el portal del SAT. Este link es el mismo que aparece en el código QR en el PDF de la retención.
**cancellation_receipt** | string | Si el comprobante fue cancelado, este campo contiene el acuse de recibo de cancelación en formato XML.
**type** | string | Tipo de comprobante. Las retenciones siempre tendrán el valor "`Retención`".
**customer** | object | Información básica del receptor de la retención.
**customer.id** | string | Identificador del cliente.
**customer.legal_name** | string | Nombre Fiscal o Razón Social del cliente.
**customer.tax_id** | string | RFC del cliente.
**external_id** | string | Identificador opcional que puedes usar para relacionar esta retención con tus registros para después buscar por este número.
**uuid** | string | Folio fiscal de la retención, asignado por el SAT.
**fecha_exp** | date | Fecha de expedición del comprobante en formato ISO8601 (UTC String).
**cve_retenc** | string | Clave de la retención o información de pagos de acuerdo al catálogo del SAT.
**desc_retenc** | string | Si la clave de la retención es "25" (Otro tipo de retenciones), este campo se usa para registrar la descripción de la retención.
**folio_int** | string | Identificador alfanumérico para control interno de la empresa y sin relevancia fiscal.
**periodo** | object | Información sobre el periodo de la retención.
**periodo.mes_ini** | int | Mes inicial del periodo de la retención. Mes expresado en números del 1 al 12.
**periodo.mes_fin** | int | Mes final del periodo de la retención. Mes expresado en números del 1 al 12.
**periodo.ejerc** | int | Año o ejercicio fiscal en que se realizó la retención.
**totales** | object | Información sobre el total de retenciones efectuadas en el periodo correspondiente.
**totales.monto_tot_operacion** | decimal | Monto total de la operación, con precisión de hasta 6 decimales.
**totales.monto_tot_grav** | decimal | Monto total gravado.
**totales.monto_tot_exent** | decimal | Monto total exento.
**totales.monto_tot_ret** | decimal | Suma de los montos de impuestos retenidos.
**totales.imp_retenidos** | array of objects | Colección de impuestos retenidos.
**totales.imp_retenidos[].base_ret** | decimal | Base del impuesto retenido.
**totales.imp_retenidos[].impuesto** | string | Clave del tipo de impuesto retenido, del catálogo del SAT.
**totales.imp_retenidos[].monto_ret** | decimal | Importe del impuesto retenido.
**totales.imp_retenidos[].pago_provisional** | boolean | `true`: Pago provisional, `false`: Pago definitivo.
**pdf_custom_section** | string | En caso de que necesites incluir más información en el PDF, este campo te permite insertar código HTML con tu propio contenido.
**addenda** | string | Código XML con la Addenda que se necesite agregar a la retención.
**complements** | array of objects | Arreglo de complementos a incluir en la retención.
**complements[].type** | string | Tipo de complemento.
**complements[].data** | string or object | <ul><li>`string`: Si el tipo de complemento es `custom`, este campo contiene el código XML del complemento tal cual se inserta en el XML.</li><li>`object`: Si se trata de un complemento soportado por Facturapi, este objeto incluye los datos del complemento.</li</ul>
**namespaces** | array of objects | Namespaces a insertar en el documento XML, en caso de haber utilizado addendas o complementos.
**namespaces[].prefix** | string | Prefijo o nombre del namespace.
**namespaces[].uri** | string | Dirección URL asociada al namespace.
**namespaces[].schema_location** | string | Dirección URL del esquema de validación XSD.
**stamp** | object | Información sobre el timbre fiscal digital agregado por el PAC.
**stamp.signature** | string | Sello digital del comprobante fiscal.
**stamp.date** | date | Fecha de timbrado en formato ISO8601 (UTC String).
**stamp.sat_cert_number** | string | Número de serie del certificado del SAT usado para timbrar.
**stamp.sat_signature** | string | Sello digital del timbre fiscal digital.

### Crear Retención

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/retentions
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/retentions \
  -H "Authorization: Bearer sk_test_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
        "customer": "58e93bd8e86eb318b0197456",
        "cve_retenc": "26",
        "periodo": {
          "mes_ini": 1,
          "mes_fin": 12,
          "ejerc": 2020
        },
        "totales": {
          "monto_tot_operacion": 244.654321,
          "monto_tot_exent": 145.123456,
          "imp_retenidos": [
            {
              "monto_ret": 40,
              "base_ret": 250
            }
          ]
        }
      }'
```

```javascript
const facturapi = new Facturapi('sk_test_API_KEY');
const retention = await facturapi.retentions.create({
  customer: '58e93bd8e86eb318b0197456',
  cve_retenc: '26',
  periodo: {
    mes_ini: 1,
    mes_fin: 12,
    ejerc: 2020
  },
  totales: {
    monto_tot_operacion: 244.654321,
    monto_tot_exent: 145.123456,
    imp_retenidos: [
      {
        monto_ret: 40,
        base_ret: 250
      }
    ]
  }
});
// save the retention.id in your database
```

```csharp
var facturapi = new FacturapiClient("sk_test_API_KEY");
var retention = await facturapi.Retention.CreateAsync(new Dictionary<string, object>
{
  ["customer"] = "58e93bd8e86eb318b0197456",
  ["cve_retenc"] = "26",
  ["periodo"] = new Dictionary<string, object>
  {
    ["mes_ini"] = 1,
    ["mes_fin"] = 12,
    ["ejerc"] = 2020
  },
  ["totales"] = new Dictionary<string, object>
  {
    ["monto_tot_operacion"] = 244.654321,
    ["monto_tot_exent"] = 145.123456,
    ["imp_retenidos"] = new Dictionary<string, object>[]
    {
      new Dictionary<string, object>
      {
        ["]
        ["monto_ret"] = 40,
        ["base_ret"] = 250
      }
    }
  }
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$retentionData = array(
  "customer" => "58e93bd8e86eb318b0197456",
  "cve_retenc" => "26",
  "periodo" => array(
    "mes_ini" => 1,
    "mes_fin" => 12,
    "ejerc" => 2020
  ),
  "totales" => array(
    "monto_tot_operacion" => 244.654321,
    "monto_tot_exent" => 145.123456,
    "imp_retenidos" => array(
      array(
        "impuesto" => "ISR",
        "monto_ret" => 40,
        "base_ret" => 250
      )
    )
  )
);

$retention = $facturapi->Retentions->create( $retentionData );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "6062d9fb226600001cd22f71",
  "created_at": "2021-03-30T07:57:47.616Z",
  "livemode": true,
  "status": "valid",
  "type": "Retención",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Dunder Mifflin S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "uuid": "495e8506-9dc1-4a91-b6ef-d4e5ee27bcc6",
  "folio_int": "R123",
  "fecha_exp": "2021-03-30T07:57:47.616Z",
  "cve_retenc": "26",
  "periodo": {
    "mes_ini": 2,
    "mes_fin": 11,
    "ejerc": 2020
  },
  "totales": {
    "monto_tot_operacion": 244.654321,
    "monto_tot_grav": 99.530865,
    "monto_tot_exent": 145.123456,
    "monto_tot_ret": 40,
    "imp_retenidos": [
      {
        "base_ret": 250,
        "impuesto": "01",
        "monto_ret": 40,
        "pago_provisional": false
      }
    ]
  },
  "stamp": {
    "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",
    "date": "2021-03-30T00:57:48",
    "sat_cert_number": "20001000000300022323",
    "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="
  }
}
```

Crea una nueva Retención.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**customer**<br><small>requerido</small> | string or object | none | Cliente receptor de la retención. <br/>`string`: Id del cliente previamente registrado en Facturapi. <br/>`object`: Objeto con la información del cliente, el cual se guardará en tu lista de clientes.. Acepta los mismos argumentos detallados en la sección [Crear cliente](#crear-cliente).
**cve_retenc**<br><small>requerido</small> | string | none | Clave de la retención o información de pagos de acuerdo al catálogo del SAT. Puedes consultar las claves en la tabla de abajo.
**desc_retenc**<br><small>opcional</small> | string | none | Si la clave de la retención es "25" (Otro tipo de retenciones), este campo se usa para registrar la descripción de la retención.
**fecha_exp**<br><small>opcional</small> | date | none | Fecha de expedición del comprobante en formato ISO8601 (UTC String).
**folio_int**<br><small>opcional</small> | string | none | Identificador alfanumérico para control interno de la empresa y sin relevancia fiscal.
**external_id**<br><small>opcional</small> | string | none | Identificador opcional que puedes usar para relacionar esta retención con tus registros y poder hacer búsquedas usando este identificador. Facturapi <strong>no</strong> valida que este campo sea único.
**periodo**<br><small>requerido</small> | object | none | Información sobre el periodo de la retención.
**periodo.mes_ini**<br><small>requerido</small> | int | none | Mes inicial del periodo de la retención. Mes expresado en números del 1 al 12.
**periodo.mes_fin**<br><small>requerido</small> | int | none | Mes final del periodo de la retención. Mes expresado en números del 1 al 12.
**periodo.ejerc**<br><small>requerido</small> | int | none | Año o ejercicio fiscal en que se realizó la retención.
**totales**<br><small>requerido</small> | object | none | Información sobre el total de retenciones efectuadas en el periodo correspondiente.
**totales.monto_tot_operacion**<br><small>requerido</small> | decimal | none | Monto total de la operación, con precisión de hasta 6 decimales.
**totales.monto_tot_exent**<br><small>requerido</small> | decimal | none | Monto total exento, con precisión de hasta 6 decimales.
**totales.imp_retenidos**<br><small>requerido</small> | array of objects | none | Colección de impuestos retenidos.
**totales.imp_retenidos[].base_ret**<br><small>opcional</small> | decimal | none | Base del impuesto retenido.
**totales.imp_retenidos[].monto_ret**<br><small>requerido</small> | decimal | none | Importe del impuesto retenido.
**totales.imp_retenidos[].impuesto**<br><small>opcional</small> | string | none | Tipo de impuesto. Puede tener los valores `"IVA"` o `"ISR"`.
**totales.imp_retenidos[].pago_provisional**<br><small>opcional</small> | boolean | false | `true`: Pago provisional, `false`: Pago definitivo.
**pdf_custom_section**<br><small>opcional</small> | string | none | En caso de que necesites incluir más información en el PDF, este campo te permite enviar código HTML con tu propio contenido. Por seguridad, el código que puedes enviar está limitado a las siguientes etiquetas: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `p`, `span`, `small`, `br`, `b`, `i`, `ul`, `ol`, `li`, `strong`, `table`, `thead`, `tbody`, `tfoot`, `tr`, `th` y `td`. No se permiten atributos ni estilos.
**addenda**<br><small>opcional</small> | string | none | Código XML con la Addenda que se necesite agregar a la retención.
**complements**<br><small>opcional</small> | array of strings | none | Arreglo de complementos a incluir en la retención. Cada elemento del arreglo debe contener el código XML de tu complemento tal cual como quieres que se inserte en el XML. Debe contener sólamente un nodo XML raíz por complemento.
**namespaces**<br><small>opcional</small> | array of objects | none | Si icluiste uno de los argumentos `addenda`, `complements`, o `items[].complement` y éstos incluyen un namespace especial, debes enviar la información necesaria para incluir estos namespaces en el XML de la retención.
**namespaces[].prefix**<br><small>opcional</small> | string | none | Prefijo o nombre del namespace. Ejemplo: "iedu".
**namespaces[].uri**<br><small>codicional</small> | string | none | Dirección URL asociada al namespace. Ejemplo: "http://www.sat.gob.mx/iedu". Requerido si se incluye `namespaces[].prefix`.
**namespaces[].schema_location**<br><small>opcional</small> | string | none | Dirección URL del esquema de validación XSD. Ejemplo: "http://www.sat.gob.mx/sitio_interet/cfd/iedu/iedu.xsd".

#### Clave de retención

"01" | Servicios profesionales.
"02" | Regalías por derechos de autor.
"03" | Autotransporte terrestre de carga.
"04" | Servicios prestados por comisionistas.
"05" | Arrendamiento.
"06" | Enajenación de acciones.
"07" | Enajenación de bienes objeto de la LIEPS, a través de mediadores, agentes, representantes, corredores, consignatarios o distribuidores.
"08" | Enajenación de bienes inmuebles consignada en escritura pública.
"09" | Enajenación de otros bienes, no consignada en escritura pública.
"10" | Adquisición de desperdicios industriales.
"11" | Adquisición de bienes consignada en escritura pública.
"12" | Adquisición de otros bienes, no consignada en escritura pública.
"13" | Otros retiros de AFORE.
"14" | Dividendos o utilidades distribuidas.
"15" | Remanente distribuible.
"16" | Intereses.
"17" | Arrendamiento en fideicomiso.
"18" | Pagos realizados a favor de residentes en el extranjero.
"19" | Enajenación de acciones u operaciones en bolsa de valores.
"20" | Obtención de premios.
"21" | Fideicomisos que no realizan actividades empresariales.
"22" | Planes personales de retiro.
"23" | Intereses reales deducibles por créditos hipotecarios.
"24" | Operaciones Financieras Derivadas de Capital.
"25" | Otro tipo de retenciones.
"26" | Servicios mediante Plataformas Tecnológicas 

### Lista de Retenciones

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/retentions
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/retentions \
  -H "Authorization: Bearer sk_test_API_KEY" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const searchResult = await facturapi.retentions.list();
// searchResult.data contains the result array
```

```csharp
var searchResult = await facturapi.Retention.ListAsync();
// searchResult.Data is an array of Retentions
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$searchResult = $facturapi->Retentions->all();
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "page": 1,
  "total_pages": 1,
  "total_results": 1,
  "data": [
    {
      "id": "6062d9fb226600001cd22f71",
      "created_at": "2021-03-30T07:57:47.616Z",
      "livemode": true,
      "status": "valid",
      "type": "Retención",
      "customer": {
        "id": "58e93bd8e86eb318b0197456",
        "legal_name": "Dunder Mifflin S.A. de C.V.",
        "tax_id": "MESB900314R87"
      },
      "uuid": "495e8506-9dc1-4a91-b6ef-d4e5ee27bcc6",
      "folio_int": "R123",
      "fecha_exp": "2021-03-30T07:57:47.616Z",
      "cve_retenc": "26",
      "periodo": {
        "mes_ini": 2,
        "mes_fin": 11,
        "ejerc": 2020
      },
      "totales": {
        "monto_tot_operacion": 244.654321,
        "monto_tot_grav": 99.530865,
        "monto_tot_exent": 145.123456,
        "monto_tot_ret": 40,
        "imp_retenidos": [
          {
            "base_ret": 250,
            "impuesto": "01",
            "monto_ret": 40,
            "pago_provisional": false
          }
        ]
      },
      "stamp": {
        "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",
        "date": "2021-03-30T00:57:48",
        "sat_cert_number": "20001000000300022323",
        "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="
      }
    }
  ]
}
```

Obtiene la lista de Retenciones registradas en la organización

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**q**<br><small>opcional</small> | string | "" | Consulta. Texto a buscar en el nombre fiscal del cliente o su RFC.
**customer**<br><small>opcional</small> | string | "" | Identificador del cliente. Útil para obtener las retenciones emitidas a un sólo cliente.
**date**<br><small>opcional</small> | object | none | Objeto con atributos que representan el rango de fechas solicitado.
**date.gt**<br><small>opcional</small> | string or date | none | Regresa retenciones cuya fecha de creación es posterior a esta fecha.
**date.gte**<br><small>opcional</small> | string or date | none | Regresa retenciones cuya fecha de creación es posterior o igual a esta fecha.
**date.lt**<br><small>opcional</small> | string or date | none | Regresa retenciones cuya fecha de creación es anterior a esta fecha.
**date.lte**<br><small>opcional</small> | string or date | none | Regresa retenciones cuya fecha de creación es anterior o igual a esta fecha.
**limit**<br><small>opcional</small> | integer | 50 | Número del 1 al 50 que representa la cantidad máxima de resultados a regresar con motivos de paginación.
**page**<br><small>opcional</small> | integer | 1 | Página de resultados a regresar, empezando desde la página 1.

### Obtener una Retención

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/retentions/{RETENTION_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71 \
  -H "Authorization: Bearer sk_test_API_KEY" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const retention = await facturapi.retentions.retrieve('6062d9fb226600001cd22f71');
```

```csharp
var retention = await facturapi.Retention.RetrieveAsync("6062d9fb226600001cd22f71");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$retention = $facturapi->Retentions->retrieve( "6062d9fb226600001cd22f71" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "6062d9fb226600001cd22f71",
  "created_at": "2021-03-30T07:57:47.616Z",
  "livemode": true,
  "status": "valid",
  "type": "Retención",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Dunder Mifflin S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "uuid": "495e8506-9dc1-4a91-b6ef-d4e5ee27bcc6",
  "folio_int": "R123",
  "fecha_exp": "2021-03-30T07:57:47.616Z",
  "cve_retenc": "26",
  "periodo": {
    "mes_ini": 2,
    "mes_fin": 11,
    "ejerc": 2020
  },
  "totales": {
    "monto_tot_operacion": 244.654321,
    "monto_tot_grav": 99.530865,
    "monto_tot_exent": 145.123456,
    "monto_tot_ret": 40,
    "imp_retenidos": [
      {
        "base_ret": 250,
        "impuesto": "01",
        "monto_ret": 40,
        "pago_provisional": false
      }
    ]
  },
  "stamp": {
    "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",
    "date": "2021-03-30T00:57:48",
    "sat_cert_number": "20001000000300022323",
    "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="
  }
}
```

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la retención

### Descargar Retención

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/retentions/{id}/zip
GET https://www.facturapi.io/v1/retentions/{id}/pdf
GET https://www.facturapi.io/v1/retentions/{id}/xml
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
## Descargar PDF y XML comprimidos en archivo ZIP
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71/zip \
  -H "Authorization: Bearer sk_test_API_KEY"

## Descargar sólo el PDF
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71/pdf \
  -H "Authorization: Bearer sk_test_API_KEY"

## Descargar sólo el XML
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71/xml \
  -H "Authorization: Bearer sk_test_API_KEY"
```

```javascript
const fs = require('fs');
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');

// Descargar PDF y XML comprimidos en archivo ZIP
const zipStream = await facturapi.retentions.downloadZip('6062d9fb226600001cd22f71');
const file = fs.createWriteStream('./retention.zip');
zipStream.pipe(file);

// Descargar sólo el PDF
const pdfStream = await facturapi.retentions.downloadPdf('6062d9fb226600001cd22f71');
const file = fs.createWriteStream('./retention.pdf');
pdfStream.pipe(file);

// Descargar sólo el XML
const xmlStream = await facturapi.retentions.downloadXml('6062d9fb226600001cd22f71');
const file = fs.createWriteStream('./retention.xml');
xmlStream.pipe(file);
```

```csharp
// Descargar PDF y XML comprimidos en archivo ZIP
var zipStream = await facturapi.Retention.DownloadZipAsync("6062d9fb226600001cd22f71");
// Descargar sólo el XML
var xmlStream = await facturapi.Retention.DownloadXmlAsync("6062d9fb226600001cd22f71");
// Descargar sólo el PDF
var pdfStream = await facturapi.Retention.DownloadPdfAsync("6062d9fb226600001cd22f71");

// Para guardar la descarga en un archivo
var file = new System.IO.FileStream("C:\\route\\to\\save\\retention.zip", FileMode.Create);
zipStream.CopyTo(file);
file.Close();
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

// buffer containing the PDF and XML as a ZIP file
$zip = $facturapi->Retentions->download_zip("6062d9fb226600001cd22f71")

// buffer containing the PDF file
$pdf = $facturapi->Retentions->download_pdf("6062d9fb226600001cd22f71")

// buffer containing the XML file
$xml = $facturapi->Retentions->download_xml("6062d9fb226600001cd22f71")
```

Descarga tu retención en PDF, XML o ambos en un archivo comprimido ZIP.

#### Argumentos

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la retención.

### Enviar Factura por email

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/retentions/{id}/email
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
# Enviar al correo electrónico del cliente
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71/email \
  -H "Authorization: Bearer sk_test_API_KEY"
  -X POST

# Enviar a otro correo electrónico
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71/email \
  -H "Authorization: Bearer sk_test_API_KEY"
  -X POST
  -H "Content-Type: application/json" \
  -d '{
        "email": "another_email@example.com"
      }'

# Enviar a más de un correo electrónico
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71/email \
  -H "Authorization: Bearer sk_test_API_KEY"
  -X POST
  -H "Content-Type: application/json" \
  -d '{
        "email": [
          "first@email.com",
          "second@email.com"
        ]
      }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
// Enviar al correo del cliente
await facturapi.retentions.sendByEmail('6062d9fb226600001cd22f71');
// Enviar a otro correo
await facturapi.retentions.sendByEmail(
  '6062d9fb226600001cd22f71',
  { email: 'otro@correo.com' }
);
// Enviar a más de un correo (máx. 10)
await facturapi.retentions.sendByEmail(
  '6062d9fb226600001cd22f71',
  { 
    email: [
      'primer@correo.com',
      'segundo@correo.com'
    ]
  }
);
```

```csharp
// Enviar al correo del cliente
await facturapi.Retention.SendByEmailAsync("6062d9fb226600001cd22f71");
// Enviar a otro correo
await facturapi.Retention.SendByEmailAsync(
  "6062d9fb226600001cd22f71",
  new Dictionary<string, object>
  {
    ["email"] = "otro@correo.com"
  }
);
// Enviar a más de un correo
await facturapi.Retention.SendByEmailAsync(
  "6062d9fb226600001cd22f71",
  new Dictionary<string, object>
  {
    ["email"] = new String[]
    {
      "primer@correo.com",
      "segundo@correo.com"
    }
  }
);
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );
// Enviar al correo del cliente
$facturapi->Retentions->send_by_email("6062d9fb226600001cd22f71");
// Enviar a otro correo
$facturapi->Retentions->send_by_email(
  "6062d9fb226600001cd22f71",
  "otro@correo.com"
);
// Enviar a más de un correo (máx 10)
$facturapi->Retentions->send_by_email(
  "6062d9fb226600001cd22f71",
  array(
    "primer@correo.com",
    "segundo@correo.com"
  )
);
```

Envía un correo electrónico al email de tu cliente, con los archivos XML y PDF adjuntos al mensaje.

#### Argumentos en la URL

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la retención.

#### Argumentos en el cuerpo de la llamada
Argumento | Tipo | Descripción
---------:|:----:| -----------
**email**<br><small>opcional</small> | string or array of strings | Dirección de correo electrónico a enviar la retención. Si no se envía este parámetro, la retención será enviada al correo que el cliente tenga registrado. Puede enviarse un sólo string con el correo deseado o un array con una lista de correos (máximo 10).

### Cancelar Retención

> <h4 class="toc-ignore">Definición</h4>

```text
DELETE https://www.facturapi.io/v1/retentions/{RETENTION_ID}
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/retentions/6062d9fb226600001cd22f71 \
  -X DELETE \
  -H "Authorization: Bearer sk_test_API_KEY" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const canceledRetention = await facturapi.retentions.cancel('6062d9fb226600001cd22f71');
```

```csharp
var canceledRetention = await facturapi.Retention.CancelAsync("6062d9fb226600001cd22f71");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$canceledRetention = $facturapi->Retentions->cancel( "6062d9fb226600001cd22f71" );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "6062d9fb226600001cd22f71",
  "created_at": "2021-03-30T07:57:47.616Z",
  "livemode": true,
  "status": "canceled",
  "type": "Retención",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Dunder Mifflin S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "uuid": "495e8506-9dc1-4a91-b6ef-d4e5ee27bcc6",
  "folio_int": "R123",
  "fecha_exp": "2021-03-30T07:57:47.616Z",
  "cve_retenc": "26",
  "periodo": {
    "mes_ini": 2,
    "mes_fin": 11,
    "ejerc": 2020
  },
  "totales": {
    "monto_tot_operacion": 244.654321,
    "monto_tot_grav": 99.530865,
    "monto_tot_exent": 145.123456,
    "monto_tot_ret": 40,
    "imp_retenidos": [
      {
        "base_ret": 250,
        "impuesto": "01",
        "monto_ret": 40,
        "pago_provisional": false
      }
    ]
  },
  "stamp": {
    "signature": "ZGgQ126+lbo6XxVmeM0Kys1rAllqRaDmaK4yW20B3H5AaVShnItBwKATpxqJuGK1qPmLA2r16B8dAb4UFjR27Xc/+SsNPSwRBYRVKI0AB62jx2Z4uxooiVQBY9Bb6czlgzJb+ftgNvnGwSXzI6QZKpuWRe9LmJvACzqTB3ZdC9QoqaVICDNZ9oaT99txu9ahbJu3ftPhlykXi1SxVTBZ7uUTqsBkc6iEjbSTYpE85bsrhbMw4tDODR7o/PS917whChOFUU0sQenm5sJQMenPcKPyS9JoGQPO/a/4wzxJ2RyWCkw72LNFBbJTsPXcXdOZmEJ06Ixc2Iy24Biz8GEbJg==",
    "date": "2021-03-30T00:57:48",
    "sat_cert_number": "20001000000300022323",
    "sat_signature": "AzYwRdHfDp0BCBaTpT87gtAAE3Q="
  }
}
```

#### Argumentos en URL

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id**<br><small>requerido</small> | string | Identificador de la Retención
