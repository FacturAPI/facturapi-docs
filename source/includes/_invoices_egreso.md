### Crear Factura de Egreso

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
        "type": "E",
        "customer": "58e93bd8e86eb318b0197456",
        "payment_form": "06",
        "relation": "03",
        "related": ["UUID_de_factura_relacionada"],
        "product": {
          "description": "Devolución de Impresora HP G3700",
          "price": 499.50
        }
      }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturap('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  type: facturapi.InvoiceType.EGRESO,
  customer: customer.id,
  payment_form: acturapi.PaymentForm.DINERO_ELECTRONICO,
  relation: facturapi.InvoiceRelation.DEVOLUCION,
  related: ['UUID_de_factura_relacionada'],
  product: {
    description: 'Devolución de Impresora HP G3700',
    price: 499.50
  }
});
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["type"] = Facturapi.InvoiceType.EGRESO,
  ["customer"] = customer.Id,
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
  ["relation"] = Facturapi.InvoiceRelation.DEVOLUCION,
  ["related"] = new string[] { "UUID_de_factura_relacionada" },
  ["product"] = new Dictionary<string, object>
  {
    ["description"] = "Devolución de Impresora HP G3700",
    ["price"] = 499.50
  }
});
```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$invoice = array(
  "type" => \Facturapi\InvoiceType::EGRESO,
  "customer" => "YOUR_CUSTOMER_ID",
  "payment_form" => \Facturapi\PaymentForm::EFECTIVO,
  "relation" => \Facturapi\InvoiceRelation::DEVOLUCION,
  "related" => "UUID_de_factura_relacionada",
  "product" => array(
    "description" => "Devolución de Impresora HP G3700",
    "price" => 499.50
  )
);

$new_invoice = $facturapi->Invoices->create( $invoice );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "type": "E",
  "livemode": false,
  "status": "valid",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 499.50,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 1,
      "discount": 0,
      "product": {
        "description": "Devolución de Impresora HP G3700"
      }
    }
  ],
  "related": ["D26CDE56-F5BB-11E7-8C3F-9A214CF093AE"]
}
```

Crea una nueva Factura de tipo **Comprobante de Egreso**, también conocida como **Nota de Crédito**.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**type**<br><small>requerido</small> | string | none | Tipo de comprobante. Este valor define qué tipo de factura se va a emitir, por lo que debe tener el valor "E", o la constante `InvoiceType.EGRESO`.
**customer**<br><small>requerido</small> | string | none | Identificador del cliente a facturar.
**payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla antes mostrada, o utilizar las constantes incluídas en nuestras librerías `PaymentForm`.
**related**<br><small>requerido</small> | array of strings | none | Arreglo con uno o más folios fiscales (UUID) de las facturas relacionadas.
**relation**<br><small>opcional</small> | string | "01" (Nota de crédito) | Código de relación entre facturas según el catálogo del SAT. Puedes ver los códigos en la tabla mostrada más abajo, o utilizar las constantes incluidas en nuestras librerías `InvoiceRelation`.
**product**<br><small>requerido</small> | object | none | Objeto con detalles del concepto a facturar. Los comprobantes de egreso permiten un sólo concepto.
**product.description**<br><small>requerido</small> | string | none | Resumen de la operación en una sola descripción. Deben mencionarse cada uno de los productos que contempla el descuento, devolución o bonificación aplicada y que contienen las facturas relacionadas. Si el egreso está basado en un pocentaje (como al aplicar un 30% de descuento), dicho porcentaje debe incluirse en la descripción junto al nombre del producto que corresponda.
**product.price**<br><small>requerido</small> | decimal | none | Suma total de la cantidad devuelta, descontada o bonificada.
**product.[...]**<br><small>opcional</small> | various | various | Puedes usar las demás propiedades de [Crear Producto](#crear-producto), con la diferencia de que las no mencionadas en esta sección son opcionales y adquirirán el valor recomendado para el comprobante de Egreso.
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización. Si se envía un valor, este nuevo valor se usará para designar el siguiente número de folio de la organización.
**series**<br><small>opcional</small> | string | "" | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**currency**<br><small>opcional</small> | string | "MXN" | Código de la moneda, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange**<br><small>opcional</small> | decimal | 1.0 | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.

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
