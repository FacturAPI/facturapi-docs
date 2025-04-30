# Configuración de automatización

## 🔑 Cómo acceder a la configuración

Una vez instalada la app de Facturapi, sigue estos pasos para acceder a la configuración:

1. Abre tu [Stripe Dashboard](https://dashboard.stripe.com/)
2. Haz clic en el ícono de **Facturapi** en la parte superior derecha
3. Da clic en los **tres puntos** `⋮`
4. Selecciona **"Ver configuración de la app"**

---

## ⚙️ Activar automatización

La app permite habilitar la automatización para generar CFDIs de forma automática a partir de eventos comunes como nuevas facturas, pagos, notas de crédito y reembolsos.

Al activar esta opción, se habilitan las siguientes acciones automáticas:

- **Enviar CFDIs por correo electrónico al generarse**  
  Envía automáticamente un correo al cliente con el CFDI adjunto tan pronto como se emite.

- **Enviar enlace para editar información fiscal a nuevos clientes**  
  Si un cliente no tiene registrada su información fiscal, se le enviará automáticamente un enlace para completarla antes de emitir el comprobante.

- **Enviar enlace para editar información fiscal con errores**  
  Si alguno de los siguientes datos requeridos por el SAT contiene errores —RFC, Código Postal, Régimen fiscal o Razón Social—, se enviará un enlace al cliente para corregirlos y así permitir la emisión del CFDI.

- **Generar CFDIs pendientes del mes al editar información fiscal**  
  Cuando se actualiza la información fiscal de un cliente, la app puede emitir automáticamente los CFDIs que estaban pendientes durante el mes.

- **Generar CFDIs para facturas no pagadas**  
  En facturas no pagadas, se genera automáticamente un CFDI tipo I (ingreso) con método de pago PPD (Pago en Parcialidades o Diferido), y al registrarse el pago, se emite el CFDI tipo P (complemento de pago).
 
