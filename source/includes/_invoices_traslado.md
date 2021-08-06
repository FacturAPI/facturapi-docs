### Crear Factura de Traslado

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
    "type": "T",
    "customer": {
      "legal_name": "Dunder Mifflin S.A. de C.V.",
      "email": "email@example.com",
      "tax_id": "ABCD111111CBA"
    },
    "items": [{
      "quantity": 2,
      "product": {
        "description": "Transporte de Ukeleles",
        "product_key": "78101802"
      }
    }],
    "series": "T"
  }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  customer: {
    legal_name: 'Dunder Mifflin S.A. de C.V.',
    email: 'email@example.com',
    tax_id: 'ABCD111111CBA'
  },
  items: [{
    quantity: 2,
    product: {
      description: 'Transporte de Ukeleles',
      product_key: '78101802'
    }
  }],
  series: 'T'
});
// Rememmber to handle possible error throwing
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["customer"] = new Dictionary<string, object>
  {
    ["legal_name"] = "Dunder Mifflin S.A. de C.V.",
    ["email"] = "email@example.com",
    ["tax_id"] = "ABCD111111CBA"
  },
  ["items"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {
      ["quantity"] = 2,
      ["product"] = new Dictionary<string, object>
      {
        ["description"] = "Transporte de Ukeleles",
        ["product_key"] = "78101802"
      }
    }
  },
  ["folio_number"] = 914,
  ["series"] = "T"
});

```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$invoice = array(
  "customer" => array(
    "legal_name" => "Dunder Mifflin S.A. de C.V.",
    "email" => "email@example.com",
    "tax_id" => "ABCD111111CBA"
  ),
  "items" => array(
    array(
      "quantity" => 2,
      "product" => array(
        "description" => "Transporte de Ukeleles",
        "product_key" => "78101802"
      )
    )
  ),
  "series" => "T"
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
    "legal_name": "Dunder Mifflin S.A. de C.V.",
    "tax_id": "ABCD111111CBA"
  },
  "total": 0,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "folio_number": 915,
  "series": "T",
  "items": [
    {
      "quantity": 2,
      "discount": 0,
      "product": {
        "id": "58e93bd8e86eb318b0197454",
        "description": "Transporte de Ukeleles",
        "product_key": "78101802"
      }
    }
  ]
}
```

Crea una nueva Factura de tipo **Comprobante de Traslado**.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**type**<br><small>requerido</small> | string | none | Tipo de comprobante. Este valor define qué tipo de factura se va a emitir, por lo que debe tener el valor "T", o la constante `InvoiceType.TRASLADO`.
**customer**<br><small>requerido</small> | string or object | none | Cliente receptor de la factura. <br/>`string`: Id del cliente previamente registrado en Facturapi. <br/>`object`: Objeto con la información del cliente, el cual se guardará en tu lista de clientes.. Acepta los mismos argumentos detallados en la sección [Crear cliente](#crear-cliente).
**items**<br><small>requerido</small> | array | none | Arreglo de conceptos a incluir en la factura.
**items[].product**<br><small>requerido</small> | string or object | none | Producto a facturar. <br/>`string`: Identificador del producto previamente registrado en Facturapi. <br/>`object`: Objeto con la información del producto, el cual sólo se usará para generar la factura y no se guardará en tu catálogo de productos. Acepta los mismos argumentos detallados en la sección [Crear Producto](#crear-producto)
**items[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad de unidades del producto.
**items[].customs_keys**<br><small>opcional</small> | array of strings | none | Arreglo para incluir uno o más números de pedimento asociados a este concepto.
**items[].complement**<br><small>opcional</small> | string | none | Código XML de tu complemento. Recuerda que debes añadir el prefijo y las URLs usando el argumento `namespaces`.
**items[].parts**<br><small>opcional</small> | array of objects | empty array | En caso de que el concepto cuente con partes.
**items[].parts[].description**<br><small>requerido</small> | string | none | Descripción del producto o servicio.
**items[].parts[].product_key**<br><small>requerido</small> | string | none | Clave de producto/servicio, del catálogo del SAT. Nosotros te proporcionamos una manera más conveniente de encontrarlo utilizando nuestra <a href="https://www.facturapi.io/dashboard/tools/keys" target="_blank">herramienta de búsqueda de claves</a>.
**items[].parts[].quantity**<br><small>opcional</small> | integer | 1 | Cantidad.
**items[].parts[].sku**<br><small>opcional</small> | string | none | Identificador de uso interno designado por la empresa. Puede tener cualquier valor..
**items[].parts[].unit_name**<br><small>opcional</small> | string | none | Nombre de la unidad de medida que expresa la cantidad.
**items[].parts[].customs_keys**<br><small>opcional</small> | array of strings | none | Arreglo para incluir uno o más números de pedimento asociados a esta parte.
**items[].property_tax_account**<br><small>opcional</small> | string | none | Número de cuenta predial.
**date**<br><small>opcional</small> | date | now | Fecha de expedición del comprobante en formato ISO8601 (UTC String).
**use**<br><small>opcional</small> | string | "G01" (Adquisición de mercancías) | Código de Uso CFDI según el catálogo del SAT. Puedes ver los códigos en la tabla que se muestra más abajo, o utilizar las constantes incluídas en nuestras librerías.
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización.
**series**<br><small>opcional</small> | string | none | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin validez fiscal.
**currency**<br><small>opcional</small> | string | "MXN" | Código de la moneda, acorde al estándar <a href="https://es.wikipedia.org/wiki/ISO_4217" target="_blank">ISO 4217</a>.
**exchange**<br><small>opcional</small> | decimal | 1.0 | Tipo de cambio conforme a la moneda usada. Representa el número de pesos mexicanos que equivalen a una unidad de la divisa señalada en el atributo `currency`.
**related**<br><small>opcional</small> | array of strings | none | Arreglo con los folios fiscales (UUID) de facturas relacionadas, en caso de haberlos.
**relation**<br><small>condicional</small> | string | none | Clave de relación del catálogo del SAT (que puedes consultar en las tablas de abajo). Es requerido cuando se envíe el argumento `related`.
**external_id**<br><small>opcional</small> | string | none | Identificador opcional que puedes usar para relacionar esta factura con tus registros y poder hacer búsquedas usando este identificador. Facturapi <strong>no</strong> valida que este campo sea único.
**pdf_custom_section**<br><small>opcional</small> | string | none | En caso de que necesites incluir más información en el PDF, este campo te permite enviar código HTML con tu propio contenido. Por seguridad, el código que puedes enviar está limitado a las siguientes etiquetas: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `div`, `p`, `span`, `small`, `br`, `b`, `i`, `ul`, `ol`, `li`, `strong`, `table`, `thead`, `tbody`, `tfoot`, `tr`, `th` y `td`. No se permiten atributos ni estilos.
**addenda**<br><small>opcional</small> | string | none | Código XML con la Addenda que se necesite agregar a la factura.
**complements**<br><small>opcional</small> | array of objects | none | Arreglo de complementos a incluir en la factura. Puedes incluir cualquier complemento en la factura si tú mismo construyes el nodo XML del complemento y usas el tipo `custom`. No olvides que es necesario agregar el prefijo y las URLs necesarias usando el argumento `namespaces`. También recuerda agregar la información del complemento al PDF usando el argumento `pdf_custom_section`.
**complements[].type**<br><small>requerido</small> | string | none | String que representa el tipo de complemento. Si construyes tú mismo el XML de tu complemento, puedes usar el valor `custom` en este campo y pasar tu complemento en el siguiente argumento `data`. El único otro valor soportado hasta ahora es `nomina`.
**complements[].data**<br><small>requerido</small> | string or object | none | <ul><li>`string`: En caso de que el tipo de complemento sea `custom`, este argumento debe contener el código XML de tu complemento tal cual como quieres que se inserte en el XML. Debe contener sólamente un nodo XML raíz.</li><li>`object`: En caso de que se trate de un complemento soportado por Facturapi, en este objeto deberás incluir los datos del complemento.</li</ul>
**namespaces**<br><small>opcional</small> | array of objects | none | Si icluiste uno de los argumentos `addenda`, `complements`, o `items[].complement` y éstos incluyen un namespace especial, debes enviar la información necesaria para incluir estos namespaces en el XML de la factura.
**namespaces[].prefix**<br><small>opcional</small> | string | none | Prefijo o nombre del namespace. Ejemplo: "iedu".
**namespaces[].uri**<br><small>codicional</small> | string | none | Dirección URL asociada al namespace. Ejemplo: "http://www.sat.gob.mx/iedu". Requerido si se incluye `namespaces[].prefix`.
**namespaces[].schema_location**<br><small>opcional</small> | string | none | Dirección URL del esquema de validación XSD. Ejemplo: "http://www.sat.gob.mx/sitio_interet/cfd/iedu/iedu.xsd".
