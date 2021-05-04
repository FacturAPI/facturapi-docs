## Facturas

### Objeto Factura

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-01-01T14:00:08.000Z",
  "livemode": false,
  "status": "valid",
  "cancellation_status": "none",
  "verification_url": "https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=45BEC0CA-5F1E-491E-9417-698EA48C382A&re=AAA010101AAA&rr=ABCD111111CBA&tt=345.600000&fe=bWApPw==",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 10944.82,
  "uuid": "39c85a3f-275b-4341-b259-e8971d9f8a94",
  "folio_number": 914,
  "series": "A",
  "payment_form": "06",
  "related": [], 
  "currency": "MXN",
  "exchange": 1,
  "items": [{
    "quantity": 2,
    "discount": 0,
    "product": {
      "id": "58e93bd8e86eb318b0197454",
      "description": "Gafas de sol Ray-Ban",
      "price": 5472.41
    }
  }],
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
**id** | string | Identificador de la factura.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**livemode** | boolean | `true`: fue creado en modo producción, `false`: fue creado en modo pruebas
**status** | string | Estado actual de la factura. Posibles valores: `"valid"` si la factura fue emitida correctamente; `"canceled"` si fue cancelada.
**cancellation_status** | string | Estado actual de la solicitud de cancelación, en caso de haberla realizado. Puedes ver los posibles valores y leer más al respecto en la sección de [Cancelar Factura](#cancelar-factura).
**verification_url** | string | Dirección URL para verificar el estado del CFDI en el portal del SAT. Este link es el mismo que aparece en el código QR en el PDF de la factura.
**cancellation_receipt** | string | Si el comprobante fue cancelado, este campo contiene el acuse de recibo de cancelación en formato XML.
**type** | string | Tipo de comprobante. Puede tener los valores `I`: Ingreso, `P`: Pago, `E`: Egreso, `N`: Nómina, `T`: Traslado.
**customer** | object | Información básica del cliente al que se le realiza la factura.
**customer.id** | string | Identificador del cliente.
**customer.legal_name** | string | Nombre Fiscal o Razón Social del cliente.
**customer.tax_id** | string | RFC del cliente.
**total** | decimal | Monto total facturado.
**uuid** | string | Folio fiscal de la factura, asignado por el SAT.
**folio_number** | integer | Número de folio autoincremental para control interno y sin validez fiscal.
**series** | string | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**external_id** | string | Identificador opcional que puedes usar para relacionar esta factura con tus registros para después buscar por este número.
**payment_form** | string | Código que representa la forma de pago, según el catálogo del SAT.
**items** | array of objects | Arreglo de conceptos facturados.
**items[].quantity** | integer | Cantidad de unidades del concepto facturado.
**items[].discount** | decimal | Monto total de descuento aplicado a este concepto.
**items[].product** | object | Información básica del producto del concepto facturado.
**items[].product.id** | string | Identificador del producto.
**items[].product.unit_name** | string | Unidad de medida del producto.
**items[].product.description** | string | Descripción del producto.
**related** | array of strings | UUIDs de los CFDIs relacionados.
**relation** | string | Clave de relación del catálogo del SAT.
**currency** | string | Código de la moneda usada, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange** | decimal | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.
**pdf_custom_section** | string | En caso de que necesites incluir más información en el PDF, este campo te permite insertar código HTML con tu propio contenido.
**addenda** | string | Código XML con la Addenda que se necesite agregar a la factura.
**complements** | array of objects | Arreglo de complementos a incluir en la factura.
**complements[].type** | string | Tipo de complemento.
**complements[].data** | string or object | <ul><li>`string`: Si el tipo de complemento es `custom`, este campo contiene el código XML del complemento tal cual se inserta en el XML.</li><li>`object`: Si se trata de un complemento soportado por Facturapi, este objeto incluye los datos del complemento.</li</ul>
**namespaces** | array of objects | Namespaces a insertar en el documento XML.
**namespaces[].prefix** | string | Prefijo o nombre del namespace.
**namespaces[].uri** | string | Dirección URL asociada al namespace.
**namespaces[].schema_location** | string | Dirección URL del esquema de validación XSD.
**stamp** | object | Información sobre el timbre fiscal digital agregado por el PAC.
**stamp.signature** | string | Sello digital del comprobante fiscal.
**stamp.date** | date | Fecha de timbrado en formato ISO8601 (UTC String).
**stamp.sat_cert_number** | string | Número de serie del certificado del SAT usado para timbrar.
**stamp.sat_signature** | string | Sello digital del timbre fiscal digital.

### Crear Factura de Ingreso

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
    "customer": "58e93bd8e86eb318b0197456",
    "items": [{
      "quantity": 2,
      "product": "58e93bd8e86eb318b0197454"
    }],
    "payment_form": "06",
    "folio_number": 914,
    "series": "A"
  }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  customer: '58e93bd8e86eb318b0197456',
  items: [{
    quantity: 2,
    product: '58e93bd8e86eb318b0197454'
  }],
  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO,
  folio_number: 914,
  series: 'A'
});
// Rememmber to handle possible error throwing
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["customer"] = "58e93bd8e86eb318b0197456",
  ["items"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {
      ["quantity"] = 2,
      ["product"] = "58e93bd8e86eb318b0197454"
    }
  },
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
  ["folio_number"] = 914,
  ["series"] = "A"
});

```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$invoice = array(
  "customer" => "58e93bd8e86eb318b0197456",
  "items" => array(
    array(
      "quantity" => 1, // Optional. Defaults to 1.
      "product" => "58e93bd8e86eb318b0197454" // You can also pass a product object instead
    ),
    array(
      "quantity" => 2,
      "product" => array(
        "description" => "Guitarra",
        "product_key" => "0601313247",
        "price" => 420.69,
        "sku" => "ABC4567"
      )
    ) // Add as many products as you want to include in your invoice
  ),
  "payment_form" => \Facturapi\PaymentForm::EFECTIVO,
  "folio_number" => "581",
  "series" => "F"
);

$new_invoice = $facturapi->Invoices->create( $invoice );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "livemode": false,
  "status": "valid",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "payment_form": "06",
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "folio_number": 914,
  "series": "A",
  "related": [], 
  "currency": "MXN",
  "exchange": 1,
  "items": [
    {
      "quantity": 2,
      "discount": 0,
      "product": {
        "id": "58e93bd8e86eb318b0197454",
        "description": "Guitarra"
      }
    }
  ]
}
```

Crea una nueva Factura de tipo **Comprobante de Ingreso** (la más común).

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**customer**<br><small>requerido</small> | string or object | none | Cliente receptor de la factura. <br/>`string`: Id del cliente previamente registrado en Facturapi. <br/>`object`: Objeto con la información del cliente, el cual se guardará en tu lista de clientes.. Acepta los mismos argumentos detallados en la sección [Crear cliente](#crear-cliente).
**items**<br><small>requerido</small> | array | none | Arreglo de conceptos a incluir en la factura.
**items[].product**<br><small>requerido</small> | string or object | none | Producto a facturar. <br/>`string`: Identificador del producto previamente registrado en Facturapi. <br/>`object`: Objeto con la información del producto, el cual sólo se usará para generar la factura y no se guardará en tu catálogo de productos. Acepta los mismos argumentos detallados en la sección [Crear Producto](#crear-producto)
**items[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad de unidades del producto.
**items[].discount**<br><small>opcional</small> | decimal | 0 | Monto del descuento total a aplicar a este concepto.
**items[].customs_keys**<br><small>opcional</small> | array of strings | none | Arreglo para incluir uno o más números de pedimento asociados a este concepto.
**items[].complement**<br><small>opcional</small> | string | none | Código XML de tu complemento. Recuerda que debes añadir el prefijo y las URLs usando el argumento `namespaces`.
**items[].parts**<br><small>opcional</small> | array of objects | empty array | En caso de que el concepto cuente con partes.
**items[].parts[].description**<br><small>requerido</small> | string | none | Descripción del producto o servicio.
**items[].parts[].product_key**<br><small>requerido</small> | string | none | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**items[].parts[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad.
**items[].parts[].sku**<br><small>opcional</small> | string | none | Identificador de uso interno designado por la empresa. Puede tener cualquier valor..
**items[].parts[].unit_price**<br><small>opcional</small> | decimal | none | Precio unitario.
**items[].parts[].unit_name**<br><small>opcional</small> | string | none | Nombre de la unidad de medida que expresa la cantidad.
**items[].parts[].customs_keys**<br><small>opcional</small> | array of strings | none | Arreglo para incluir uno o más números de pedimento asociados a esta parte.
**items[].property_tax_account**<br><small>opcional</small> | string | none | Número de cuenta predial.
**payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**payment_method**<br><small>opcional</small> | string | "PUE" (Pago en una sola exhibición) | Código del método de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**date**<br><small>opcional</small> | date | now | Fecha de expedición del comprobante en formato ISO8601 (UTC String).
**use**<br><small>opcional</small> | string | "G01" (Adquisición de mercancías) | Código de Uso CFDI según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización.
**series**<br><small>opcional</small> | string | none | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**external_id**<br><small>opcional</small> | string | Identificador opcional que puedes usar para relacionar esta factura con tus registros y poder hacer búsquedas usando este identificador. Facturapi <strong>no</strong> valida que este campo sea único.
**currency**<br><small>opcional</small> | string | "MXN" | Código de la moneda, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange**<br><small>opcional</small> | decimal | 1.0 | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.
**conditions**<br><small>opcional</small> | string | none | Condiciones de pago.
**related**<br><small>opcional</small> | array of strings | none | Arreglo con los folios fiscales (UUID) de facturas relacionadas, en caso de haberlos.
**relation**<br><small>condicional</small> | string | none | Clave de relación del catálogo del SAT (que puedes consultar en las tablas de abajo). Es requerido cuando se envíe el argumento `related`.
**pdf_custom_section**<br><small>opcional</small> | string | none | En caso de que necesites incluir más información en el PDF, este campo te permite enviar código HTML con tu propio contenido. Por seguridad, el código que puedes enviar está limitado a las siguientes etiquetas: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `p`, `span`, `small`, `br`, `b`, `i`, `ul`, `ol`, `li`, `strong`, `table`, `thead`, `tbody`, `tfoot`, `tr`, `th` y `td`. No se permiten atributos ni estilos.
**addenda**<br><small>opcional</small> | string | none | Código XML con la Addenda que se necesite agregar a la factura.
**complements**<br><small>opcional</small> | array of objects | none | Arreglo de complementos a incluir en la factura. Puedes incluir cualquier complemento en la factura si tú mismo construyes el nodo XML del complemento y usas el tipo `custom`. No olvides que es necesario agregar el prefijo y las URLs necesarias usando el argumento `namespaces`. También recuerda agregar la información del complemento al PDF usando el argumento `pdf_custom_section`.
**complements[].type**<br><small>requerido</small> | string | none | String que representa el tipo de complemento. Si construyes tú mismo el XML de tu complemento, puedes usar el valor `custom` en este campo y pasar tu complemento en el siguiente argumento `data`. El único otro valor soportado hasta ahora es `nomina`.
**complements[].data**<br><small>requerido</small> | string or object | none | <ul><li>`string`: En caso de que el tipo de complemento sea `custom`, este argumento debe contener el código XML de tu complemento tal cual como quieres que se inserte en el XML. Debe contener sólamente un nodo XML raíz.</li><li>`object`: En caso de que se trate de un complemento soportado por Facturapi, en este objeto deberás incluir los datos del complemento.</li</ul>
**namespaces**<br><small>opcional</small> | array of objects | none | Si icluiste uno de los argumentos `addenda`, `complements`, o `items[].complement` y éstos incluyen un namespace especial, debes enviar la información necesaria para incluir estos namespaces en el XML de la factura.
**namespaces[].prefix**<br><small>opcional</small> | string | none | Prefijo o nombre del namespace. Ejemplo: "iedu".
**namespaces[].uri**<br><small>codicional</small> | string | none | Dirección URL asociada al namespace. Ejemplo: "http://www.sat.gob.mx/iedu". Requerido si se incluye `namespaces[].prefix`.
**namespaces[].schema_location**<br><small>opcional</small> | string | none | Dirección URL del esquema de validación XSD. Ejemplo: "http://www.sat.gob.mx/sitio_interet/cfd/iedu/iedu.xsd".

#### Formas de pago

Código | Descripción
:-----:| -----------
"01" | Efectivo
"02" | Cheque nominativo
"03" | Transferencia electrónica de fondos
"04" | Tarjeta de crédito
"05" | Monedero electrónico
"06" | Dinero electrónico
"08" | Vales de despensa
"12" | Dación en pago
"13" | Pago por subrogación
"14" | Pago por consignación
"15" | Condonación
"17" | Compensación
"23" | Novación
"24" | Confusión
"25" | Remisión de deuda
"26" | Prescripción o caducidad
"27" | A satisfacción del acreedor
"28" | Tarjeta de débito
"29" | Tarjeta de servicios
"30" | Aplicación de anticipos
"31" | Intermediario pagos
"99" | Por definir

#### Métodos de pago

Código | Descripción
:-----:| -----------
"PUE" | Pago en una sola exhibición (de contado).
"PPD" | Pago en parcialidades o diferido (total o parcialmente a crédito). Requiere expedir un comprobante de pago cuando se reciba un pago subsecuente.

#### Uso CFDI

Código | Descripción
:-----:| -----------
"G01" |	Adquisición de mercancias.
"G02" |	Devoluciones, descuentos o bonificaciones.
"G03" |	Gastos en general.
"I01" |	Construcciones.
"I02" |	Mobilario y equipo de oficina por inversiones.
"I03" |	Equipo de transporte.
"I04" |	Equipo de computo y accesorios.
"I05" |	Dados, troqueles, moldes, matrices y herramental.
"I06" |	Comunicaciones telefónicas.
"I07" |	Comunicaciones satelitales.
"I08" |	Otra maquinaria y equipo.
"D01" |	Honorarios médicos, dentales y gastos hospitalarios.
"D02" |	Gastos médicos por incapacidad o discapacidad.
"D03" |	Gastos funerales.
"D04" |	Donativos.
"D05" |	Intereses reales efectivamente pagados por créditos hipotecarios (casa habitación).
"D06" |	Aportaciones voluntarias al SAR.
"D07" |	Primas por seguros de gastos médicos.
"D08" |	Gastos de transportación escolar obligatoria.
"D09" |	Depósitos en cuentas para el ahorro, primas que tengan como base planes de pensiones.
"D10" |	Pagos por servicios educativos (colegiaturas).
"P01" |	Por definir.

#### Relación entre facturas

Código | Descripción
:-----:| -----------
"01" | Nota de crédito de los documentos relacionados
"02" | Nota de débito de los documentos relacionados
"03" | Devolución de mercancía sobre facturas o traslados previos
"04" | Sustitución de los CFDI previos
"05" | Traslados de mercancias facturados previamente
"06" | Factura generada por los traslados previos
"07" | CFDI por aplicación de anticipo
"08" | Factura generada por pagos en parcialidades
"09" | Factura generada por pagos diferidos
