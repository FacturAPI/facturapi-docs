### Crear Factura de Pago

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices \
  -H "Authorization: Bearer sk_test_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
        "type": "P",
        "customer": "58e93bd8e  86eb318b0197456",
        "payments": [{
          "payment_form": "06",
          "related": [{
            "uuid": "UUID_de_factura_relacionada",
            "installment": 1,
            "last_balance": 1000,
            "amount": 100
          }]
        }]
      }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  type: facturapi.InvoiceType.PAGO,
  customer: customer.id,
  payments: [{
    payment_form: facturapi.PaymentForm.DINERO_ELECTRONICO,
    related: [{
      uuid: 'UUID_de_factura_relacionada',
      installment: 1,
      last_balance: 1000,
      amount: 100
    }]
  }]
});
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["type"] = Facturapi.InvoiceType.PAGO,
  ["customer"] = customer.Id,
  ["payments"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {
      ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
      ["related"] = new Dictionary<string, object>[]
      {
        new Dictionary<string, object>
        {
          ["uuid"] = "UUID_de_factura_relacionada",
          ["installment"] = 1,
          ["last_balance"] = 1000,
          ["amount"] = 100
        }
      }
    }
  }
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$invoice = array(
  "type" => \Facturapi\InvoiceType::PAGO,
  "customer" => "YOUR_CUSTOMER_ID",
  "payments" => array(
    array(
      "payment_form" => \Facturapi\PaymentForm::EFECTIVO,
      "related" => array(
        array(
          "uuid" => "UUID_de_factura_relacionada",
          "installment" => 1,
          "last_balance" => 1000,
          "amount" => 100
        )
      )
    )
  )
);

$new_invoice = $facturapi->Invoices->create( $invoice );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "type": "P",
  "livemode": false,
  "status": "valid",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Dunder Mifflin S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 0,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "use": "P01",
  "payments": [{
    "payment_form": "06",
    "related": [{
      "uuid": "D26CDE56-F5BB-11E7-8C3F-9A214CF093AE",
      "installment": 1,
      "last_balance": 1000,
      "amount": 100
    }]
  }],
  "items": [{
    "quantity": 1,
    "discount": 0,
    "product": {
      "description": "Pago"
    }
  }]
}
```

Crea una nueva Factura de tipo **Comprobante de Recepción de Pagos**.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**type**<br><small>requerido</small> | string | none | Tipo de comprobante. Este valor define qué tipo de factura se va a emitir, por lo que debe tener el valor "P", o la constante `InvoiceType.PAGO`.
**customer**<br><small>requerido</small> | string | none | Identificador del cliente a facturar.
**payments**<br><small>requerido</small></br> | array of objects | none | Arreglo de los pagos a incluir en este comprobante. Lo más común es incluir un sólo pago. Un caso en el que se debe de agregar más de uno es cuando el pago se realiza con 2 formas de pago distintas; por ejemplo, cuando se paga una parte con tarjeta y otra en efectivo.
**payments[].payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla antes mostrada, o utilizar las constantes incluídas en nuestras librerías `PaymentForm`.
**payments[].currency**<br><small>opcional</small> | string | "MXN" | Código de la moneda, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**payments[].exchange**<br><small>opcional</small> | decimal | 1.0 | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.
**payments[].date**<br><small>opcional</small> | date | Fecha actual | Fecha en que se recibió el pago. Sólo es necesario incluirla si el pago se efectuó en una fecha anterior a la emisión de este comprobante. No se permiten fechas futuras. Se recomienda enviar en formato UTC.
**payments[].related**<br><small>requerido</small> | array of objects | none | Arreglo que incluye un elemento por cada comprobante de ingreso relacionado a este pago. Lo más común es que el pago esté relacionado a un sólo comprobante de ingreso. Un caso en el que se agrega más de un elemento es cuando se recibe (por ejemplo) un sólo depósito que ampara el pago de 2 facturas relacionadas. En lugar de expedir un comprobante de recepción de pago por cada factura, debes expedir sólo uno relacionando los 2 comprobantes.
**payments[].related[].uuid**<br><small>requerido</small> | string | none | Folio fiscal ó UUID del comprobante de ingreso relacionado.
**payments[].related[].amount**<br><small>requerido</small> | decimal | none | Cantidad del pago correspondiente al comprobante relacionado, usando el método de pago indicado en este elemento del arreglo de pagos. Este valor debe ser expresado en la moneda definida en `payments[].currency`.
**payments[].related[].installment**<br><small>requerido</small> | integer | none | Número de parcialidad que representa este pago para la factura relacionada.
**payments[].related[].last_balance**<br><small>requerido</small> | decimal | none | Cantidad que estaba pendiente por pagar antes de recibir este pago. Este valor se expresa en la moneda definida en `payments[].related[].currency`.
**payments[].related[].currency**<br><small>opcional</small> | string | "MXN" | Si la moneda utilizada en la factura relacionada no es moneda nacional (MXN), debe especificarse su valor acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**payments[].related[].exchange**<br><small>condicional</small> | decimal | none | Obligatorio cuando la moneda del documento relacionado es distinta a la moneda de pago. Tipo de cambio entre las dos monedas al momento del pago. Ejemplo: El documento relacionado se registra en USD, mientras que el monto de pago en MXN, este atributo debería registrarse como 0.45 USD/MXN.
**payments[].related[].folio_number**<br><small>opcional</small> | integer | no se incluye | Número de folio asignado por la empresa para control interno.
**payments[].related[].series**<br><small>opcional</small> | string | "" | Serie. De 1 a 25 caracteres designados por la empresa para control interno.
**date**<br><small>opcional</small> | date | now | Fecha de expedición del comprobante en formato ISO8601 (UTC String).
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización. Si se envía un valor, este nuevo valor se usará para designar el siguiente número de folio de la organización.
**series**<br><small>opcional</small> | string | "" | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**related**<br><small>opcional</small> | array of strings | none | Arreglo con los folios fiscales (UUID) de facturas relacionadas, en caso de haberlos.
**relation**<br><small>condicional</small> | string | none | Clave de relación del catálogo del SAT (que puedes consultar en las tablas de abajo). Es requerido cuando se envíe el argumento `related`.
**external_id**<br><small>opcional</small> | string | none | Identificador opcional que puedes usar para relacionar esta factura con tus registros y poder hacer búsquedas usando este identificador. Facturapi <strong>no</strong> valida que este campo sea único.
**pdf_custom_section**<br><small>opcional</small> | string | none | En caso de que necesites incluir más información en el PDF, este campo te permite enviar código HTML con tu propio contenido. Por seguridad, el código que puedes enviar está limitado a las siguientes etiquetas: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `p`, `span`, `small`, `br`, `b`, `i`, `ul`, `ol`, `li`, `strong`, `table`, `thead`, `tbody`, `tfoot`, `tr`, `th` y `td`. No se permiten atributos ni estilos.
**addenda**<br><small>opcional</small> | string | none | Código XML con la Addenda que se necesite agregar a la factura.
**complements**<br><small>opcional</small> | array of objects | none | Arreglo de complementos a incluir en la factura. Puedes incluir cualquier complemento en la factura si tu mismo construyes el nodo XML del complemento y usas el tipo `custom`. No olvides que es necesario agregar el prefijo y las URLs necesarias usando el argumento `namespaces`. También recuerda agregar la información del complemento al PDF usando el argumento `pdf_custom_section`.
**complements[].type**<br><small>requerido</small> | string | none | String que representa el tipo de complemento. Si construyes tu mismo el XML de tu complemento, puedes usar el valor `custom` en este campo y pasar tu complemento en el siguiente argumento `data`. El único otro valor soportado hasta ahora es `nomina`.
**complements[].data**<br><small>requerido</small> | string or object | none | <ul><li>`string`: En caso de que el tipo de complemento sea `custom`, este argumento debe contener el código XML de tu complemento tal cual como quieres que se inserte en el XML. Debe contener sólamente un nodo XML raíz.</li><li>`object`: En caso de que se trate de un complemento soportado por Facturapi, en este objeto deberás incluir los datos del complemento.</li</ul>
**namespaces**<br><small>opcional</small> | array of objects | none | Si icluiste uno de los argumentos `addenda`, `complements`, o `items[].complement` y éstos incluyen un namespace especial, debes enviar la información necesaria para incluir estos namespaces en el XML de la factura.
**namespaces[].prefix**<br><small>opcional</small> | string | none | Prefijo o nombre del namespace. Ejemplo: "iedu".
**namespaces[].uri**<br><small>codicional</small> | string | none | Dirección URL asociada al namespace. Ejemplo: "http://www.sat.gob.mx/iedu". Requerido si se incluye `namespaces[].prefix`.
**namespaces[].schema_location**<br><small>opcional</small> | string | none | Dirección URL del esquema de validación XSD. Ejemplo: "http://www.sat.gob.mx/sitio_interet/cfd/iedu/iedu.xsd".

#### Opciones avanzadas (opcionales)

Argumento | Tipo | Descripción
---------:|:----:| -----------
**payments[].numOperacion**<br> | string | Número de cheque, de autorización, de referencia, clave de rastreo SPEI, línea de captura o algún número de referencia que permita identificar la operación correspondiente al pago efectuado.
**payments[].rfcEmisorCtaOrd**<br> | string | RFC de la entidad emisora de la cuenta de origen, es decir, la operadora, banco, institución financiera, emisor de monedero electrónico, etc.
**payments[].nomBancoOrdExt**<br> | string | Nombre del banco ordenante.
**payments[].ctaOrdenante**<br> | string | Número de cuenta con la que se realizó el pago.
**payments[].rfcEmisorCtaBen**<br> | string | RFC de la entidad de la cuenta operadora destino, es decir, la operadora, banco, institución financiera, emisor de monedero electrónico, etc.
**payments[].ctaBeneficiario**<br> | string | Número de cuenta donde se recibió el pago.
**payments[].tipoCadPago**<br> | string | Clave del tipo de cadena de pago que genera la entidad receptora del pago. Si existe este campo, es obligatorio registrar los campos certPago, cadPago y selloPago.
**payments[].certPago**<br> | string | Certificado que corresponde al pago, como una cadena de texto en formato base 64.
**payments[].cadPago**<br> | string | Cadena original del comprobante de pago generado por la entidad emisora de la cuenta beneficiaria.
**payments[].selloPago**<br> | string | Sello digital que se asocie al pago expresado como una cadena de texto en formato base 64
