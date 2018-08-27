### Complemento de Comercio Exterior

Este complemento puede incluirse en comprobantes de tipo **Ingreso**, **Egreso** y **Traslado** (disponible próximamente).

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```javascript
const Facturapi = require('facturapi')
const facturapi = new Facturapi('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  customer: '58e93bd8e86eb318b0197456',
  items: [{
    quantity: 2,
    product: '58e93bd8e86eb318b0197454'
  }],
  payment_form: Facturapi.PaymentForm.DINERO_ELECTRONICO,
  foreign_trade: {
    transfer_motive: ''
  }
})
```

#### Argumentos

Esta tabla sólamente aborda los argumentos del objeto `foreign_trade`. Para ver el resto de los argumentos de
creación de factura, consulta la sección del tipo de comprobante que quieres crear.

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**exchange**<br><small>requerido</small> | decimal | none | Tipo de cambio de USD a MXN. Número de pesos mexicanos que equivalen a un dólar de Estados Unidos.
**goods**<br><small>requerido</small> | array of objects | none | Información sobre las mercancías exportadas.
**goods[].sku**<br><small>requerido</small> | string | none | Número de parte o clave interna del producto, asignada por la empresa.
**goods[].tariff_code**<br><small>consicional</small> | string | none | Clave de la fracción arancelaria que corresponde a la descripción de la mercancía. Es obligatorio si la mercancía es un producto físico (no un servicio). En caso contrario, este atributo es obligatorio. Puedes consultarla en nuestro [Catálogo de Fracción Arancelaria](https://www.facturapi.io/dashboard/catalogs/tariff)
**goods[].quantity**<br><small>opcional</small> | decimal | 1 | Cantidad de la mercancía expresada en la unidad de medida.
**goods[].unit_price**<br><small>opcional</small> | decimal | none | Precio unitario en dólares americanos (USD).
**goods[].details**<br><small>requerido</small> | array of objects | none | Descripciones específicas de la mercancía.
**goods[].details.brand**<br><small>requerido</small> | string | none | Marca.
**goods[].details.model**<br><small>opcional</small> | string | none | Modelo.
**goods[].details.submodel**<br><small>opcional</small> | string | none | Submodelo.
**goods[].details.serial_number**<br><small>opcional</small> | string | none | Número de serie.
**issuer**<br><small>condicional</small> | object | none | Requerido sólo en caso de que debas incluir alguno de los campos de este objeto.
**issuer.curp**<br><small>condicional</small> | object | none | Requerido si la organización que emite la factura es persona física. CURP: Clave Única del Registro de Población.
**transfer_motive**<br><small>condicional</small> | string | none | Requerido sólo cuando el comprobante es de tipo **Traslado**. Clave del [Catálogo de Motivos de Traslado](https://www.facturapi.io/dashboard/catalogs/transfer_motive).
**origin_certificate**<br><small>opcional</small> | string | none |  Folio del certificado de origen o folio fiscal de la factura con la que se pagó la expedición del certificado de origen.
**exporter_number**<br><small>opcional</small> | string | none | Número de exportador confiable.
**incoterm**<br><small>opcional</small> | string | none | Clave del INCOTERM aplicable a la factura. Del [Catálogo INCOTERM](https://www.facturapi.io/dashboard/catalogs/transfer_motive)
**notes**<br><small>opcional</small> | string | none | Observaciones. Texto para ingresar alguna información adicional.
**exporter_number**<br><small>opcional</small> | string | none | Número de exportador confiable.
**owners**<br><small>opcional</small> | array of objects | none | Información del o los propietarios de la mercancía trasladada.
**owners[].tax_id**<br><small>opcional</small> | string | none | Número de identificación o registro fiscal del país del propietario.
**owners[].country**<br><small>opcional</small> | string | none | Clave del país del propietario, del [Catálogo de Países](https://www.facturapi.io/dashboard/catalogs/countries).
**receiver**<br><small>condicional</small> | object | none | Se incluye en caso de que el receptor del comprobante sea diferente a la organización emisora.
**receiver.address**<br><small>requerido</small> | object | none | Domicilio fiscal del receptor.
**receiver.address.street**<br><small>requerido</small> | string | none | Calle
**receiver.address.exterior**<br><small>opcional</small> | string | none | Número exterior
**receiver.address.interior**<br><small>opcional</small> | string | none | Número interior
**receiver.address.neighborhood**<br><small>opcional</small> | string | none | Colonia. Si el país es México, introduce la clave de la colonia, la cual puedes consultar en nuestro [Catálogo de Códigos Postales](https://www.facturapi.io/dashboard/catalogs/zip)
**receiver.address.zip**<br><small>requerido</small> | string | none | Código postal.
**receiver.address.city**<br><small>opcional</small> | string | none | Ciudad. Si el país es México, este campo se llenará automáticamente con la clave del catálogo correspondiente.
**receiver.address.municipality**<br><small>opcional</small> | string | none | Municipio o Delegación. Si el país es México, este campo se llenará automáticamente con la clave del catálogo correspondiente.
**receiver.address.state**<br><small>condicional</small> | string | none | Estado o Provincia. Si el país es México, este campo se llenará automáticamente con la clave del catálogo correspondiente. Si el país es Estados Unidos o Canadá, se debe registrar la clave del [Catálogo de Estados](https://www.facturapi.io/dashboard/catalogs/states). En cualquier otro caso, se debe introducir el nombre del estado.
**receiver.address.country**<br><small>opcional</small> | string | "MEX" | Clave de País según el [Catálogo de Países](https://www.facturapi.io/dashboard/catalogs/countries)
**addressees**<br><small>condicional</small> | array of objects | none | Información del o los destinatarios. Se incluye en caso de que el destinatario de la mercancía sea diferente al receptor del comprobante, o cuando se trate de alguna sucursal.
**addressees[].tax_id**<br><small>opcional</small> | string | none | Número de identificación o registro fiscal del país del destinatario.
**addressees[].name**<br><small>opcional</small> | string | none | Nombre completo o razón social del destinatario de la mercancía exportada.
**addressees[].address**<br><small>requerido</small> | object | none | Domicilio fiscal del destinatario.
**addressees[].address.street**<br><small>requerido</small> | string | none | Calle
**addressees[].address.exterior**<br><small>opcional</small> | string | none | Número exterior
**addressees[].address.interior**<br><small>opcional</small> | string | none | Número interior
**addressees[].address.neighborhood**<br><small>opcional</small> | string | none | Colonia. Si el país es México, introduce la clave de la colonia, la cual puedes consultar en nuestro [Catálogo de Códigos Postales](https://www.facturapi.io/dashboard/catalogs/zip). En caso contrario, introduce el nombre de la colonia en texto libre.
**addressees[].address.zip**<br><small>requerido</small> | string | none | Código postal.
**addressees[].address.city**<br><small>opcional</small> | string | none | Ciudad. Si el país es México, este campo se llenará automáticamente con la clave del catálogo correspondiente. En caso contrario, introduce el nombre de la ciudad en texto libre.
**addressees[].address.municipality**<br><small>opcional</small> | string | none | Municipio o Delegación. Si el país es México, este campo se llenará automáticamente con la clave del catálogo correspondiente. En caso contrario, introduce el nombre del municipio en texto libre.
**addressees[].address.state**<br><small>condicional</small> | string | none | Estado o Provincia. Si el país es México, este campo se llenará automáticamente con la clave del catálogo correspondiente. Si el país es Estados Unidos o Canadá, se debe registrar la clave del [Catálogo de Estados](https://www.facturapi.io/dashboard/catalogs/states). En cualquier otro caso, se debe introducir el nombre del estado.
**addressees[].address.country**<br><small>opcional</small> | string | "MEX" | Clave de País según el [Catálogo de Países](https://www.facturapi.io/dashboard/catalogs/countries)