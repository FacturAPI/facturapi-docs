# Paso 3 - Instala la App en Stripe

## ¿Cómo instalar la aplicación?

1. **Accede al Stripe App Marketplace**  
   Inicia sesión en tu cuenta de Stripe y dirígete al [Stripe App Marketplace](https://marketplace.stripe.com/apps/facturapi).

2. **Selecciona la aplicación de Facturapi**  
   Dentro del marketplace, busca "Facturapi" o accede directamente a través de [este enlace](https://marketplace.stripe.com/apps/facturapi).

3. **Haz clic en "Instalar"**  
   Sigue las instrucciones en pantalla para completar la instalación. Stripe te pedirá confirmar los permisos necesarios para que Facturapi pueda operar dentro de tu cuenta.

4. **Configura tu integración**  
   Una vez instalada la aplicación, sigue los siguientes pasos dentro de Facturapi para asegurarte de que tu organización está lista para emitir CFDI correctamente.

5. **Selecciona tu organización**  
   En pantalla se te solicitará elegir la organización que quieras conectar con Stripe, asegúrate de elegir la que hayas configurado correctamente o bien si la configuras después, deberá ser la que hayas conectado a Stripe.

## Live, Test mode y Sandboxes

La Stripe App de Facturapi soporta los entornos de **Stripe live**, **Stripe test mode** y también **Stripe sandboxes**.

- **Stripe live** se conecta con **Facturapi live**.
- **Stripe test mode** se conecta con **Facturapi test**.
- **Stripe sandbox** se conecta con **Facturapi test**.

### ¿Qué debes tener en cuenta?

1. **Cada instalación es independiente por entorno**
   - Si instalas la app en live, esa instalación no se comparte automáticamente con test mode ni con tus sandboxes.
   - Si instalas la app en un sandbox, esa instalación solo aplica a ese sandbox.

2. **Cada sandbox se administra por separado**
   - Stripe trata cada sandbox como un entorno aislado.
   - Si tienes varios sandboxes, puedes instalar, reconectar o configurar la app de Facturapi de forma independiente en cada uno.

3. **Es normal volver a seleccionar la organización**
   - Al instalar o reconectar la app en otro entorno de Stripe, Facturapi puede pedirte que vuelvas a seleccionar la organización que quieres vincular.

> ⚠️ **Nota:** Antes de poder emitir CFDI timbrados ante el SAT, asegúrate de haber completado la configuración de tu organización en Facturapi, incluyendo la carga del certificado CSD.

> ℹ️ **Uso y reconexión:** La conexión de la Stripe App de Facturapi se mantiene activa mientras sigas usando la app dentro de Stripe. Si pasa un periodo largo sin uso, Stripe podría solicitar que vuelvas a conectarla. En ese caso, basta con reinstalar o reconectar la app y seleccionar nuevamente tu organización en Facturapi.

> ℹ️ **Importante sobre sandboxes:** Si Stripe te pide reconectar la app dentro de un sandbox, esa reconexión solo aplica a ese sandbox. No reconecta automáticamente tu instalación en live, en test mode normal ni en otros sandboxes.

¡Listo! Ahora tienes la aplicación instalada en Stripe.
