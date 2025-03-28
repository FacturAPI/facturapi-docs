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