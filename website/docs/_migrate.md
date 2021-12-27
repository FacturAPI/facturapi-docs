---
sidebar_position: 5
draft: true
---

# Migrar de v1 a v2

## Nuevos campos requeridos al crear clientes:

- `tax_system`
- `address.zip`

## Nuevos campos requeridos al crear productos:

- `objeto_imp`

## Nuevos campos requeridos al crear facturas:

## Documentos relacionados en facturas

- Ahora una factura puede tener más de un tipo de relación con otros documentos,
  por lo que el modelo de documentos relacionados cambia de la siguiente manera:

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
        "relation": "01",
        "documents": ["81DA4E74-4924-4934-8129-497498E076A0"]
      }
    ]
  }
  ```

## Facturas de Egreso (Notas de Crédito)

- Se elimina el atributo `products` y en su lugar se introduce el arreglo `items`.

## Configuración de recibos de una organización

- En el objeto `Organization`, La propiedad `receipts.invoice_period` fue renombrado
a `receipts.periodicity`.

## Factura global

Al crear una factura global, ahora es requerido enviar información adicional.

### Usando el método [Crear Factura Global ](/api/#operation/createGlobalInvoice)

- Nuevo atributo `periodicity`. Es opcional porque de omitirse se tomará de la
  configuración de recibos de la organización, pero es importante asegurarse de
  que uno de estos valores sea el que quieres que salga en la factura.
- El rango de fechas que se forma de los atributos `from` y `to` debe coincidir
  con el periodo definido por medio del atributo `periodicity`.

### Usando el método [Crear Factura](/api/#operation/crateInvoice)

- Por medio del nuevo atributo `global`, que es un objeto con los atributos `periodicity`, `months` y `year`.

## Acuse de recibo de cancelación

- Anteriormente, era posible obtener el acuse de cancelación de una factura cancelada por medio de la
  propiedad `cancellation_receipt` del objeto `Invoice`. Ahora la manera de obtener el acuse de cancelación es
  mediante el método [Obtener Acuse de Cancelación](/api/#operation/getCancellationReceipt).