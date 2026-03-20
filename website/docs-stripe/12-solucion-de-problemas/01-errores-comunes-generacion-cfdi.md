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
