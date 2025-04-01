# Paso 2 - Crea una Organización en Facturapi


En Facturapi, puedes crear varias organizaciones según tus necesidades, pero es importante elegir solo **una** para integrarla con Stripe. Asegúrate de configurarla correctamente antes de continuar.

### Pasos para crear una nueva organización

1. **Accede al Dashboard de Facturapi**  
   Inicia sesión en [Facturapi](https://dashboard.facturapi.io).

2. **Abre el menú de organizaciones**  
   En la parte superior izquierda del dashboard, haz clic en el menú desplegable.

3. **Crea una nueva organización**  
   Haz clic en **"+ Crear nueva organización"**.

4. **Elige el nombre comercial**  
   Asigna un nombre comercial a tu organización.

### Configuración fiscal de la organización

Para emitir **CFDI timbrados ante el SAT**, es necesario completar la configuración fiscal. Esto puede realizarse después de la creación, pero debe completarse antes de generar CFDI válidos.

1. **Registra la información fiscal**  
   Ve a [Configuración de Datos Fiscales](https://dashboard.facturapi.io/settings/legal)
   Introduce los datos de la organización, asegurándote de que sean **válidos y coincidan con los registros del SAT**.


2. **Sube tu certificado CSD** *(opcional por ahora)*  
   Aunque no es obligatorio de inmediato, deberás [Subir tu certificado CSD](https://dashboard.facturapi.io/settings/certs) más adelante para timbrar CFDI correctamente. Una vez agregado, el **RFC se extraerá de tu certificado y asignará automáticamente a tu organziación**.

> ⚠️ **Importante:** Sin un CSD válido, solo podrás generar comprobantes en modo de prueba. Para facturación real ante el SAT, asegúrate de completar este paso.

---

Cuando hayas completado estos pasos, tu organización estará lista para su integración con Stripe y la emisión de CFDI.
