### Complemento de Comercio Exterior

Este complemento puede incluirse en comprobantes de tipo **Ingreso**, **Egreso** y **Traslado** (disponible próximamente).

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
        "payment_form": "06",
        "items": [{
          "product": {
            "description": "MacBook Pro 15 inch",
            "product_key": "43211508",
            "price": 50000,
            "unit_key": "H87",
            "sku": "7890"
          }
        }],
        "foreign_trade": {
          "exchange": 18.00,
          "incoterm": "DAP",
          "goods": [
            {
              "sku": "7890",
              "tariff_code": "64069001",
              "unit_price_usd": 2777.78
            }
          ],
          "addressees": [
            {
              "address": {
                "street": "Elm St.",
                "zip": "83214"
              }
            }
          ]
        }
      }'
```

```javascript
const Facturapi = require('facturapi')
const facturapi = new Facturapi('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  customer: '58e93bd8e86eb318b0197456',
  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO,
  items: [{
    product: {
      description: 'MacBook Pro 15 inch',
      product_key: '43211508',
      price: 50000,
      unit_key: 'H87',
      sku: '7890'
    }
  }],
  foreign_trade: {
    exchange: 18.00,
    incoterm: 'DAP',
    goods: [
      {
        sku: '7890',
        tariff_code: '64069001',
        unit_price_usd: 2777.78
      }
    ],
    addressees: [
      {
        address: {
          street: 'Elm St.',
          zip: '83214'
        }
      }
    ]
  }
});
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["customer"] = customer.Id,
  ["payment_form"] = Facturapi.PaymentForm.DINERO_ELECTRONICO,
  ["items"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {  
      ["product"] = new Dictionary<string, object>
      {
        ["description"] = "MacBook Pro 15 inch",
        ["product_key"] = "43211508",
        ["price"] = 50000.00,
        ["unit_key"] = "H87",
        ["sku"] = "7890"
      }
    }
  }
  ["foreign_trade"] = new Dictionary<string, object>
  {
    ["exchange"] = 18.00,
    ["incoterm"] = "DAP",
    ["goods"] = new Dictionary<string, object>
    {
      new Dictionary<string, object>
      {
        ["sku"] = "7890",
        ["tariff_code"] = "64069001",
        ["unit_price_usd"] = 2777.78
      }
    },
    ["addressees"] = new Dictionary<string, object>
    {
      new Dictionary<string, object>
      {
        ["address"] = new Dictionary<string, object>
        {
          ["street"] = "Elm St.",
          ["zip"] = "83214"
        }
      }
    ]
  }
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$invoice = array(
  "customer" => "YOUR_CUSTOMER_ID",
  "payment_form" => \Facturapi\PaymentForm::EFECTIVO,
  "items" => array(
    array(
      "product" => array(
        "description" => "MacBook Pro 15 inch",
        "product_key" => "43211508",
        "price" => 50000.00,
        "unit_key" => "H87",
        "sku" => "7890"
      )
    )
  ),
  "foreign_trade" => array(
    "exchange" => 18.00,
    "incoterm" => "DAP",
    "goods" => array(
      array(
        "sku" => "7890",
        "tariff_code" => "64069001",
        "unit_price_usd" => 2777.78
      )
    ),
    "addressees" => array(
      array(
        "address" => array(
          "street" => "Elm St.",
          "zip" => "83214"
        )
      )
    )
  )
);

$new_invoice = $facturapi->Invoices->create( $invoice );
```


#### Argumentos

Esta tabla sólamente aborda los argumentos del objeto `foreign_trade`. Para ver el resto de los argumentos de
creación de factura, consulta la sección del tipo de comprobante que quieres crear.

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**exchange**<br><small>requerido</small> | decimal | none | Tipo de cambio de USD a MXN. Número de pesos mexicanos que equivalen a un dólar de Estados Unidos.
**incoterm**<br><small>requerido</small> | string | none | Clave INCOTERM aplicable a la factura. Del <a href="https://www.facturapi.io/dashboard/catalogs/incoterm" target="_blank">Catálogo INCOTERM</a>
**transfer_motive**<br><small>condicional</small> | string | none | Requerido sólo cuando el comprobante es de tipo **Traslado**. Clave del <a href="https://www.facturapi.io/dashboard/catalogs/transfer-motive" target="_blank">Catálogo de Motivos de Traslado</a>.
**origin_certificate**<br><small>opcional</small> | string | none |  Folio del certificado de origen o folio fiscal de la factura con la que se pagó la expedición del certificado de origen.
**exporter_number**<br><small>opcional</small> | string | none | Número de exportador confiable.
**notes**<br><small>opcional</small> | string | none | Observaciones. Texto para ingresar alguna información adicional.
**goods**<br><small>requerido</small> | array of objects | none | Información sobre las mercancías exportadas.
**goods[].sku**<br><small>requerido</small> | string | none | Número de parte o clave interna del producto, asignada por la empresa. Este valor debe corresponder con uno de los elementos del atributo **items**.
**goods[].unit_price_usd**<br><small>requerido</small> | decimal | none | Precio unitario de la mercancía en dólares americanos (USD).
**goods[].quantity**<br><small>opcional</small> | decimal | 1 | Cantidad de la mercancía expresada en la unidad de medida.
**goods[].tariff_code**<br><small>condicional</small> | string | none | Clave de la fracción arancelaria que corresponde a la descripción de la mercancía. Es obligatorio si la mercancía es un producto físico (no un servicio). De tratarse de un servicio, este campo no se debe enviar. Puedes consultarla en nuestro <a href="https://www.facturapi.io/dashboard/catalogs/tariff" target="_blank">Catálogo de Fracción Arancelaria</a>
**goods[].details**<br><small>opcional</small> | array of objects | none | Información específica sobre la mercancía.
**goods[].details[].brand**<br><small>opcional</small> | string | none | Marca.
**goods[].details[].model**<br><small>opcional</small> | string | none | Modelo.
**goods[].details[].submodel**<br><small>opcional</small> | string | none | Submodelo.
**goods[].details[].serial_number**<br><small>opcional</small> | string | none | Número de serie.
**issuer**<br><small>condicional</small> | object | none | Requerido sólo en caso de que debas incluir alguno de los campos de este objeto.
**issuer.curp**<br><small>condicional</small> | object | none | Requerido si la organización que emite la factura es persona física. CURP: Clave Única del Registro de Población.
**owners**<br><small>opcional</small> | array of objects | none | Información del o los propietarios de la mercancía trasladada.
**owners[].tax_id**<br><small>opcional</small> | string | none | Número de identificación o registro fiscal del país del propietario.
**owners[].country**<br><small>opcional</small> | string | none | Clave del país del propietario, del <a href="https://www.facturapi.io/dashboard/catalogs/countries" target="_blank">Catálogo de Países</a>.
**addressees**<br><small>condicional</small> | array of objects | none | Información del o los destinatarios. Se incluye en caso de que el destinatario de la mercancía sea diferente al receptor del comprobante, o cuando se trate de alguna sucursal.
**addressees[].tax_id**<br><small>opcional</small> | string | none | Número de identificación o registro fiscal del país del destinatario.
**addressees[].name**<br><small>opcional</small> | string | none | Nombre completo o razón social del destinatario de la mercancía exportada.
**addressees[].address**<br><small>requerido</small> | object | none | Domicilio fiscal del destinatario.
**addressees[].address.street**<br><small>requerido</small> | string | none | Calle
**addressees[].address.exterior**<br><small>opcional</small> | string | none | Número exterior
**addressees[].address.interior**<br><small>opcional</small> | string | none | Número interior
**addressees[].address.neighborhood**<br><small>opcional</small> | string | none | Colonia. Si el país es México, introduce la clave de la colonia, la cual puedes consultar en nuestro <a href="https://www.facturapi.io/dashboard/catalogs/zip" target="_blank">Catálogo de Códigos Postales</a>. En caso contrario, introduce el nombre de la colonia en texto libre.
**addressees[].address.zip**<br><small>requerido</small> | string | none | Código postal.
**addressees[].address.city**<br><small>opcional</small> | string | none | Ciudad. Si el país es **MEX**, este campo se llenará automáticamente a partir del código postal con la clave del catálogo correspondiente. En caso contrario, introduce el nombre de la ciudad en texto libre.
**addressees[].address.municipality**<br><small>opcional</small> | string | none | Municipio o Delegación. Si el país es **México**, este campo se llenará automáticamente a partir del código postal con la clave del catálogo correspondiente. En caso contrario, introduce el nombre del municipio en texto libre.
**addressees[].address.state**<br><small>condicional</small> | string | none | Estado o Provincia. Si el país es **México**, este campo se llenará automáticamente a partir del código postal con la clave del catálogo correspondiente. Si el país es **USA** o **CAN**, se debe registrar la clave del <a href="https://www.facturapi.io/dashboard/catalogs/states" target="_blank">Catálogo de Estados</a>. En cualquier otro caso, se debe introducir el nombre del estado.
**addressees[].address.country**<br><small>opcional</small> | string | "MEX" | Clave de País acorde al estándar ISO 3166-1 alpha-3, del <a href="https://www.facturapi.io/dashboard/catalogs/countries" target="_blank">Catálogo de Países</a>.