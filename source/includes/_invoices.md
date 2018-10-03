## Facturas

### Objeto Factura

```json
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-01-01T14:00:08.000Z",
  "livemode": false,
  "status": "valid",
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
  "items": [{
    "quantity": 2,
    "discount": 0,
    "product": {
      "id": "58e93bd8e86eb318b0197454",
      "description": "Gafas de sol Ray-Ban"
    }
  }]
}
```

Argumento | Tipo | Descripción
---------:|:----:| -----------
**id** | string | Identificador de la factura.
**created_at** | date | Fecha de creación en formato ISO8601 (UTC String).
**livemode** | boolean | `true`: fue creado en modo producción, `false`: fue creado en modo pruebas
**status** | string | Estado actual de la factura. Posibles valores: `"valid"` si la factura fue emitida correctamente; `"canceled"` si fue cancelada.
**customer** | object | Información básica del cliente al que se le realiza la factura.
**customer.id** | string | Identificador del cliente.
**customer.legal_name** | string | Nombre Fiscal o Razón Social del cliente.
**customer.tax_id** | string | RFC del cliente.
**total** | decimal | Monto total facturado.
**uuid** | string | Folio fiscal de la factura emitido por el SAT.
**folio_number** | integer | Número de folio autoincremental para control interno y sin validez fiscal.
**series** | string | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**payment_form** | string | Código que representa la forma de pago, según el catálogo del SAT.
**items** | array | Arreglo de conceptos facturados.
**items[].quantity** | integer | Cantidad de unidades del concepto facturado.
**items[].discount** | decimal | Monto total de descuento aplicado a este concepto.
**items[].product** | object | Información básica del producto del concepto facturado.
**items[].product.id** | string | Identificador del producto.
**items[].product.unit_name** | string | Unidad de medida del producto.
**items[].product.description** | string | Descripción del producto.
**currency** | string | Código de la moneda usada, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange** | decimal | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.

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
const facturapi = new Facturap('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  customer: '58e93bd8e86eb318b0197456',
  items: [{
    quantity: 2,
    product: '58e93bd8e86eb318b0197454'
  }],
  payment_form: facturapi.PaymentForm.DINERO_ELECTRONICO,
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
  }
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
  ["folio_number"] = 914,
  ["series"] = "A"
});

```

```php
<?php
$facturapi = new Facturapi( FACTURAPI_KEY );

$invoice = array(
  "customer" => "YOUR_CUSTOMER_ID",
  "items" => array(
    array(
      "quantity" => 1, // Optional. Defaults to 1.
      "product" => "YOUR_PRODUCT_ID" // You can also pass a product object instead
    ),
    array(
      "quantity" => 2,
        "product" => array(
        "description" => "Guitarra",
        "product_key" => "01234567",
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
  "status": "active",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 345.6,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
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
**customer**<br><small>requerido</small> | string | none | Identificador del cliente a facturar
**items**<br><small>requerido</small> | array | none | Arreglo de objetoes que representan los productos y las cantidades de éstos a incluir en la factura.
**items[].product**<br><small>requerido</small> | string or object | none | Producto a facturar. <br/>`string`: Identificador del producto previamente registrado en Facturapi. <br/>`object`: Objeto con la información del producto (acepta los mismos elementos detallados en la sección [Crear Producto](#crear-producto)), el cual sólo se usará para generar la factura y no se guardará en tu catálogo de productos.
**items[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad de unidades del producto.
**items[].discount**<br><small>opcional</small> | decimal | 0 | Monto del descuento total a aplicar a este concepto.
**payment_form**<br><small>requerido</small> | string | none | Código de la forma de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**payment_method**<br><small>opcional</small> | string | "PUE" (Pago en una sola exhibición) | Código del método de pago según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**use**<br><small>opcional</small> | string | "G01" (Adquisición de mercancías) | Código de Uso CFDI según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización. Si se envía un valor, este nuevo valor se usará para designar el siguiente número de folio de la organización.
**series**<br><small>opcional</small> | string | "" | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**currency**<br><small>opcional</small> | string | "MXN" | Código de la moneda, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange**<br><small>opcional</small> | decimal | 1.0 | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.
**conditions**<br><small>opcional</small> | string | none | Condiciones de pago.
**foreign_trade**<br><small>opcional</small> | object | none | Objeto con información para incluir el Complemento de Comercio Exterior. Para ver la estructura de este objeto visita la sección de [Complemento de Pago](#complemento-de-comercio-exterior)

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
"PUE" | Pago en una sola exhibición
"PPD" | Pago en parcialidades o diferido

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
