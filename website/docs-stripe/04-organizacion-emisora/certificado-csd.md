# Sube tu certificado CSD

## ¿Qué es un CSD y para qué sirve en Facturapi?

El **Certificado de Sello Digital (CSD)** es un archivo emitido por el **Servicio de Administración Tributaria (SAT)** en México. Se utiliza para **firmar digitalmente los CFDI (facturas electrónicas)** y garantizar su autenticidad. En **Facturapi** y su App de Stripe, el CSD es necesario para poder emitir facturas válidas ante el SAT.

## Pasos para subir tu CSD en Facturapi

### 1. Acceder a la configuración de certificados
   - Ingresa a tu **dashboard de Facturapi**.
   - Dirígete a **Configuración** > **Certificados** o accede directamente a: [Configuración de Certificados](https://dashboard.facturapi.io/settings/certs).

### 2. Subir los archivos del CSD
   - Arrastra o selecciona los archivos **.cer** y **.key**.
   - **Recomendación:** Usa nombres cortos para los archivos, con **caracteres alfanuméricos y sin espacios** para evitar problemas de carga.

### 3. Ingresar la contraseña de la llave
   - Escribe la contraseña asociada al archivo **.key**.

### 4. Guardar los cambios
   - Haz clic en **Guardar** para completar la carga de tu CSD.

---

**Nota:** Una vez subido el CSD, Facturapi lo utilizará para firmar y timbrar tus facturas electrónicas conforme a las regulaciones del SAT.