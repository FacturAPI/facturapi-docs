# Introducción

### ¿Por qué debería usar Facturapi?

Crear una factura electrónica en México es un proceso complejo. Por esta razón, cualquier empresa,
sin importar el tamaño, necesita utilizar un **software** para generar facturas válidas.

El SAT nos proporciona una herramienta gratuita de generación de facturas, la cual resulta
muy útil para empresas pequeñas con poco volumen de facturación, que se pueden dar el tiempo de
capturar a mano cada factura que les soliciten sus clientes.

Pero existe **otro tipo de empresa**, que tiene el potencial de **escalar a
miles o millones de clientes**, que cada día registra múltiples operaciones y requiere
que la emisión y el envío de sus facturas se realice de forma **automática**.

La API de Facturapi es la manera más rápida y fácil en que los programadores pueden automatizar
la emisión y el envío de facturas electrónicas (CFDI) en las empresas que aceptan pagos online.

### ¿Por qué creamos Facturapi?

Todas las facturas electrónicas, sin importar si se capturaron de manera manual o automatizada,
necesitan enviarse a un servicio web encargado de añadir el **timbre fiscal** para que puedan tener
validez ante el SAT.

Tradicionalmente, estos servicios esperan que se les envíe la factura ya formada y lista para
posteriormente **agregar el timbre**. Esto significa que transfieren al programador de tu empresa
la responsabilidad de conocer muy bien cómo se deben acomodar los datos en la estructura del
archivo, estudiar y analizar la documentación técnica del SAT, invertir tiempo en desarrollar
el código para su implementación y, muy importante, ser cuidadoso con el cálculo de impuestos.

Por si fuera poco, estas especificaciones **cambian cada año**, por lo que el programador debe leer
todas las nuevas publicaciones del SAT y realizar los cambios necesarios en el sistema, teniendo
cuidado de que los nuevos cambios no provoquen errores en lo que ya estaba funcionando. Todo este
proceso puede tomar desde un par de semanas hasta meses de trabajo.

En Facturapi simplificamos todo este proceso. Lo único que debes enviar a nuestro servicio es la
información que quieres que contenga la factura. **Facturapi se encarga de calcular los impuestos,
crear el XML conforme a la versión más reciente del CFDI (3.3), timbrarlo, generar el PDF con el
logotipo y los colores de tu empresa y enviar la factura electrónica a tu cliente final.**

Queremos simplificar la facturación electrónica para todos los involucrados:

- El programador realiza la implementación en muy poco tiempo y no tiene que aprender nada nuevo.
- La empresa paga sólamente por las facturas que emite.
- Tu cliente final recibe su factura en su correo electrónico instantáneamente.