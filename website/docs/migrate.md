---
sidebar_position: 6
---

# Migrar de v1 a v2

## Cambios generales

- La nueva URL de la API es `https://www.facturapi.io/v2`.
- Si usas una de nuestras librerías, asegúrate de actualizar a la última versión mayor para usar el nuevo endpoint.
- Ya no se permite enviar atributos desconocidos, es decir, que no formen parte de la estructura descrita en la documentación. Ahora, si se envía un atributo desconocido, la API devolverá un error.
- El SAT ahora valida, que tanto para el emisor como para el receptor, coincidan exactamente con los datos registrados ante la autoridad como RFC, razón social, régimen y código postal; por lo que deberás revisar los datos del emisor y el receptor antes de enviar la factura.
- Además de esto el nombre de la razón social debe escribirse en mayúsculas, sin acentos, y en caso de persona moral, sin régimen societario (por ejemplo sin S.A. de C.V.)
- Si envías fechas en formato ISO 8601 y no incluyes la zona horaria, ahora la API la interpretará como tu hora local (definida por el código postal de tu organización), en lugar de interpretarla como UTC. Puedes leer más a fondo en [este artículo](https://docs.facturapi.io/docs/advanced/dates/).

## Facturas

### Nuevos campos requeridos al crear clientes:

- `tax_system`
- `address.zip`

### Nuevos campos opcionales al crear productos:

- `taxability`

### Nuevos campos opcionales al crear facturas:

- `items.third_party` 
    _*Opción recomendable para emitir facturas a cuenta de terceros; puede utilizarse para sustituir namespaces y complements._
- `export`
- `global`

### Documentos relacionados en facturas

- Ahora una factura puede tener más de un tipo de relación con otros documentos,
  por lo que la forma de indicar documentos relacionados cambia de la siguiente manera:

  Antes:
  
  ```json
  {
    // ...
    "relation": "01",
    "related": ["81DA4E74-4924-4934-8129-497498E076A0"]
  }
  ```
  
  Ahora:
  
  ```json
  {
    // ...
    "related_documents": [
      {
        "relationship": "01",
        "documents": ["81DA4E74-4924-4934-8129-497498E076A0"]
      }
    ]
  }
  ```

### Facturas de Egreso (Notas de Crédito)

- Se elimina el atributo `products` y en su lugar se introduce el arreglo `items`, igual que en los demás tipos de facturas.

### Factura global

Al crear una factura global, ahora es requerido enviar información adicional:

#### Usando el método [Crear Factura Global ](/api/#operation/createGlobalInvoice)

- Nuevo atributo `periodicity`. Es opcional porque de omitirse se tomará de la
  configuración de recibos de la organización, pero es importante asegurarse de
  que efectivamente tenga el valor que quieres que salga en la factura.
- El rango de fechas que se forma de los atributos `from` y `to` debe coincidir
  con el periodo definido por medio del atributo `periodicity`.

#### Usando el método [Crear Factura](/api/#operation/crateInvoice)

- Nuevo atributo `global`, que es un objeto con los atributos `periodicity`, `months` y `year`.

### Acuse de recibo de cancelación

- Anteriormente, era posible obtener el acuse de cancelación de una factura cancelada por medio de la
  propiedad `cancellation_receipt` del objeto `Invoice`. Ahora la manera de obtener el acuse de cancelación es
  mediante el método [Obtener Acuse de Cancelación](/api/#operation/getCancellationReceipt).

### Comprobante de tipo Pago (recibo electrónico de pagos)

- La información del ocmplemento de Pago ya no se enviará por medio del atributo `payments`, sino que se incluirá como complemento con tipo `pago` en una factura de tipo `P` (Pago).

## Comprobante de Retenciones (e información de pagos)

- Se elimina el atributo `totales.imp_retenidos[].pago_provisional` y en su lugar debe usarse el nuevo atributo `totales.imp_retenidos[].tipo_pago_ret`.

## Organizaciones

### Llaves secretas o Api Keys

- Como medida de seguridad, ya no es posible obtener la llave secreta Live de una organización. Se elimina el método `getApiKeys` y en su lugar se introducen los métodos `getTestApiKey`, `renewTestApiKey` y `renewLiveApiKey`. Los dos últimos pueden ser usados para generar nuevas llaves secretas, sustituyendo a las actuales, y en la respuesta se incluye la nueva llave generada. Para el caso de la llave secreta Live, el momento de su creación será la única
oportunidad para leer el valor.

### Configuración de recibos

- La propiedad `organization.receipts.invoice_period` fue renombrada
a `organization.receipts.periodicity`.
- Se eliminó la propiedad `organization.receipts.ask_address`. Ahora en el portal de autofactura siempre
  se solicita el domicilio fiscal.
