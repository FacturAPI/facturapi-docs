# Link de actualización de datos

Desde el detalle de un cliente en tu dashboard de Stripe, ahora puedes hacer clic en **"Request info"** al tener el panel de Facturapi abierto. Esto enviará automáticamente un correo al cliente solicitando que complete sus **datos fiscales**, para que puedas emitirle su factura CFDI.

Este proceso también puede automatizarse desde la configuración de la app en Stripe:  
👉 [Configurar automatizaciones](https://dashboard.stripe.com/settings/apps/io.facturapi.stripe-app.internal)

- Cuando se **crea un nuevo cliente**, se le enviará automáticamente el formulario para llenar sus datos fiscales.  
- Si ocurre un **error de facturación CFDI**, también se reenviará la solicitud de datos fiscales de forma automática.
