# Introducción

Facturapi es la primera REST API de facturación electrónica mexicana que rediseña y simplifica el proceso programar CFDIs válidos, enviados al SAT y a tus clientes, o a los clientes de tus clientes.

Es ideal para tu aplicación si lo que buscas es un servicio flexible y escalable para facturar a los miles de usuarios diarios que lo solicitan en tu sitio, con inversión mínima en tiempo de implementación.

Actualmente soportamos:

- CFDI versión 3.3 (la más reciente)
- Tipos de factura:
  - Ingreso (la normal)
  - Egreso (nota de crédito)
  - Pago (comprobante o complemento de pago).
- Cancelaciones con el nuevo esquema de Noviembre 2018

### ¿Facturapi es un PAC?

No, pero Facturapi usa PACs autorizados por el SAT para timbrar tu factura y darle validez fiscal.

### ¿Por qué creamos Facturapi?

Todas las facturas electrónicas, sin importar si se capturaron de manera manual o automatizada,
necesitan enviarse a un servicio web encargado de añadir el **timbre fiscal** para que puedan tener
validez ante el SAT.

Tradicionalmente, estos servicios esperan que se les envíe la estructura XML de la factura ya formada y lista, para ellos **agregar el timbre**. Esto significa que transfieren al programador la responsabilidad de especializarse muy bien en la estructura del archivo, estudiar y analizar la documentación técnica del SAT, invertir tiempo en desarrollar el código para su implementación y ser cuidadoso con el cálculo de impuestos.

Estas especificaciones **pueden cambiar de un año a otro**, por lo que el programador debe leer
todas las nuevas publicaciones del SAT y realizar los cambios necesarios en el sistema, teniendo
cuidado de que los nuevos cambios no provoquen errores en lo que ya estaba funcionando. Todo este
proceso puede tomar desde un par de semanas hasta meses de trabajo.

En Facturapi simplificamos todo este proceso. Lo único que debes enviar a nuestro servicio es la
información que quieres que contenga la factura. **Facturapi se encarga de calcular los impuestos,
crear el XML conforme a la versión más reciente del CFDI (3.3), timbrarlo, generar el PDF con el
logotipo y los colores de tu empresa y enviar la factura electrónica a tu cliente final.**

Queremos simplificar la facturación electrónica para todos los involucrados:

- El programador realiza la implementación en muy poco tiempo y no tiene que aprender nada nuevo.
- La empresa paga sólamente por las facturas que emite, no por las que tiene derecho a emitir.
- Tu cliente final recibe su factura en su correo electrónico instantáneamente.
