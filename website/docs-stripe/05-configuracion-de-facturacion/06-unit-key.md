# Clave de Unidad Predeterminada

## **¿Qué es la Clave de Unidad Predeterminada?**
La clave de unidad predeterminada define la unidad de medida que se usará en los CFDI generados si no se especifica una unidad en la factura o pago.

## **Cómo funciona**
- Si no se proporciona una unidad en el pago o factura en Stripe, se usará la clave de unidad configurada en la configuración de la App de Facturapi.
- Esta clave puede modificarse según el tipo de productos o servicios que maneje la empresa.

## **Casos de uso**
- Útil para empresas que facturan servicios y no necesitan especificar una unidad diferente en cada CFDI.
