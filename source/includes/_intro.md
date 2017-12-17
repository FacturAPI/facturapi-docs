# Guía de uso

## Introducción

### ¿Quién debería usar Facturapi?

Crear una factura electrónica en México es un proceso mucho más complicado
de lo que nos gustaría. Cualquier empresa, sin importar el tamaño, está
obligada a utilizar un software para generar facturas válidas.

El SAT nos proporciona una herramienta gratuita de generación de facturas, la cual resulta
muy útil para empresas pequeñas con poco volumen de facturación, que se pueden dar el tiempo de
capturar, una a una, cada factura que les soliciten sus clientes.

Pero existe <strong>otro tipo de empresa</strong>, que tiene el potencial de <strong>escalar a
miles o millones de clientes</strong>, que cada día registra múltiples operaciones y requiere
que la emisión y el envío de sus facturas se realice de forma automática.

La API de Facturapi es la manera más rápida y fácil para que los programadores puedan automatizar
la emisión y el envío de facturas electrónicas (CFDI) en las empresas que aceptan pagos online.

### ¿Por qué usar Facturapi?

Todas las facturas electrónicas, sin importar si se capturaron de manera manual o automatizada,
necesitan enviarse a un servicio web encargado de añadir el timbre fiscal para que puedan tener
validez ante el SAT.

Tradicionalmente, estos servicios esperan que se les envíe la factura ya formada y lista para
posteriormente agregar el timbre. Esto significa que transfieren al programador de tu empresa
la responsabilidad de conocer a la perfección cómo acomodar los datos en un archivo de cierta
estructura; estudiar y analizar la documentación técnica del SAT, invertir tiempo en desarrollar
el código para su implementación y, muy importante, ser cuidadoso con el cálculo de impuestos.

Por si fuera poco, estas especificaciones cambian año con año, por lo que el programador debe leer
todas las nuevas publicaciones del SAT y realizar los cambios necesarios en el sistema, teniendo
cuidado de que los nuevos cambios no provoquen errores en lo que ya estaba funcionando. Todo este
proceso puede tomar desde un par de semanas hasta meses de trabajo.

En Facturapi simplificamos todo este proceso. Lo único que debes enviar a nuestro servicio es la
información que quieres que contenga la factura. Facturapi se encarga de calcular los impuestos,
crear el XML conforme a la versión más reciente del CFDI, timbrarlo, generar el PDF con el
logotipo y los colores de tu empresa y enviar la factura electrónica a tu cliente final.
