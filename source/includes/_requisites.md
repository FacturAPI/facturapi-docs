# Requisitos

### Crea una cuenta

Para usar la API de Facturapi primero deberás crear una cuenta gratuita en nuestro sitio:
<a href="https://www.facturapi.io/register" target="_blank">
  https://www.facturapi.io/register
</a>


### Llena tus datos fiscales

Una vez completado tu registro, dirígete a la sección de
<a href="https://www.facturapi.io/dashboard/settings/legal" target="_blank">
  Configuración</a>,
accesible desde en el menú izquierdo.

Deberás llenar los datos fiscales de la organización con la que quieres expedir tus facturas.

<aside class="notice">
  Si requieres expedir facturas desde múltiples organizaciones (distinto RFC emisor), puedes agregar
  tantas organizaciones como necesites haciendo clic en el símbolo de &plus; de la izquierda.
</aside>

### Sube tus Certificados de Sello Digital

Ahora, desde la sección de
<a href="https://www.facturapi.io/dashboard/settings/certs" target="_blank">
  Certificados</a>,
sube tus archivos de Certificado de Sello Digital (CSD) proporcionados por el SAT para poder
emitir facturas electrónicas. Tus CSD se conforman de 2 archivos (.cer y .key) y la contraseña de
la llave.

<aside class="notice">
  Los certificados deberán estar vigentes y corresponder a una empresa real. De lo contrario,
  recibirás un error al momento de querer generar una factura, aún en modo de pruebas.
</aside>

### Sube tu logo

En la sección de
<a href="https://www.facturapi.io/dashboard/settings/customize" target="_blank">
  Personalización
</a>
podrás subir el logotipo de tu empresa para que aparezca en la versión impresa de tu factura
(PDF) y en el correo en el que enviamos la factura a tu cliente.

### Obtén tus API Keys

Por último, desde
<a href="https://www.facturapi.io/dashboard/settings/apikeys" target="_blank">
  Api Keys
</a>
podrás obtener las llaves privadas que sirven para identificar a tu organización al utilizar la
API de Facturapi.

Puedes usar una llave para generar facturas en ambiente de pruebas (Test) y otra para producción
(Live). Sólo las facturas generadas en ambiente de producción son enviadas al SAT y tienen validez fiscal.