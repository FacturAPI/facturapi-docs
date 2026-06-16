# Desfase de un centavo en CFDI

Al generar un **CFDI en Facturapi** a partir de un **invoice o payment en Stripe**, es posible notar una diferencia de **un centavo** en los montos. Esto puede generar dudas sobre la precisión de los cálculos y la correcta emisión del CFDI.

### **¿Por qué ocurre esta variación?**

Facturapi, al igual que el **SAT**, realiza los cálculos utilizando **seis decimales** para garantizar la mayor precisión posible en la determinación de impuestos y totales. Sin embargo, Stripe puede no estar aplicando la misma cantidad de decimales en los productos o servicios registrados en la plataforma.

### **¿Cómo solucionar esta diferencia?**

Si los montos del **invoice** o **payment** presentan un desfase de **un centavo** respecto al **CFDI generado**, se recomienda revisar lo siguiente:

1. **Verificar la configuración de los productos en Stripe**
   - Asegurarse de que los precios unitarios se registren con **máximo seis decimales**.
   - Si se usan más de seis decimales, los cálculos pueden variar y provocar diferencias de un centavo en el CFDI.

2. **Revisar la lógica de redondeo en Stripe**
   - Stripe podría estar redondeando montos a menos de seis decimales antes de generar el total, lo que genera la discrepancia.

3. **Comparar los cálculos con la metodología del SAT**
   - Facturapi sigue los lineamientos del **SAT**, por lo que se recomienda hacer una prueba manual con seis decimales para validar los cálculos.

📌 **Nota importante:** Aunque el **SAT** permite una variación de hasta un centavo debido al redondeo en los cálculos, es recomendable ajustar la configuración de Stripe para minimizar estas discrepancias.

---

# La app aparece desconectada o Stripe pide volver a conectarla

Si la **Stripe App de Facturapi** aparece desconectada o Stripe te solicita volver a conectarla, normalmente no significa que hayas perdido tu configuración fiscal en Facturapi.

### **¿Por qué puede ocurrir?**

La conexión de la app se mantiene activa mientras sigas usando la app dentro de Stripe. Si pasa un periodo largo sin uso, Stripe puede pedirte que la vuelvas a conectar.

### **¿Cómo resolverlo?**

1. **Abre la Stripe App de Facturapi** dentro de tu dashboard de Stripe.
2. **Vuelve a conectar o reinstalar la app** si Stripe lo solicita.
3. **Selecciona nuevamente tu organización** en Facturapi para restablecer el vínculo con Stripe.

### **¿Se pierde la configuración?**

No necesariamente. En la mayoría de los casos, la reconexión solo restablece el vínculo entre Stripe y Facturapi. Tu configuración fiscal, certificados y preferencias de facturación permanecen en Facturapi.

---

# Instalé la app en un sandbox y no aparece en live o en test mode

Esto es **esperado**. En Stripe, los entornos **live**, **test mode** y cada **sandbox** se administran por separado.

### **¿Qué significa esto?**

- Instalar la app en **live** no la instala automáticamente en **test mode**.
- Instalar la app en **test mode** no la instala automáticamente en un **sandbox**.
- Instalar la app en un **sandbox** no la instala automáticamente en **live**, en **test mode** ni en otros **sandboxes**.

### **¿Cómo resolverlo?**

1. Entra al entorno de Stripe donde realmente quieres usar la app.
2. Instala o abre ahí la **Stripe App de Facturapi**.
3. Si Stripe te lo solicita, vuelve a conectar la app y selecciona nuevamente tu organización.

### **¿A qué entorno de Facturapi apunta cada instalación?**

- **Stripe live** apunta a **Facturapi live**.
- **Stripe test mode** apunta a **Facturapi test**.
- **Stripe sandbox** apunta a **Facturapi test**.

### **¿Se comparten los clientes entre sandboxes?**

Sí, pueden compartirse si los sandboxes están conectados a la **misma organización** de Facturapi.

- La **instalación** de la app y la **configuración de Stripe** sí son independientes por sandbox.
- Pero los datos de Facturapi para **Stripe test mode** y **Stripe sandbox** viven en **Facturapi test**.
- Eso significa que los clientes y demás datos de prueba pueden verse entre sandboxes cuando usan la misma organización en Facturapi.

---

# Stripe pide reconectar la app en un sandbox

Si Stripe te pide reconectar la app dentro de un **sandbox**, normalmente solo significa que esa instalación específica necesita restablecer el vínculo con Facturapi.

### **Importante**

La reconexión dentro de un sandbox **no reconecta automáticamente** la instalación de:

- **Stripe live**
- **Stripe test mode**
- otros **sandboxes**

### **¿Qué hacer?**

1. Abre la app dentro del sandbox donde apareció el aviso.
2. Vuelve a conectar o reinstalar la app si Stripe lo solicita.
3. Selecciona nuevamente tu organización en Facturapi.

Tu configuración fiscal en Facturapi no se pierde por este proceso; solo se restablece el vínculo de esa instalación concreta. Si ese sandbox usa la misma organización de Facturapi en `test` que otros sandboxes, seguirá compartiendo los mismos datos de prueba con ellos.
