# Invoice

## Generación de CFDI desde Invoices en Stripe

En la App de Facturapi, puedes generar diferentes tipos de **CFDI** a partir de un **invoice de Stripe**. Dependiendo del estado y el propósito de la factura, se pueden generar los siguientes documentos:

✅ **CFDI de Ingreso PUE**  
✅ **CFDI de Ingreso PPD**  
✅ **CFDI de Egreso (Nota de crédito)**  

---

## **CFDI de Ingreso PUE**  
Esta factura se generará cuando un **invoice de Stripe tenga un total positivo** (mayor a $0 MXN).  

### **Pasos para generar un CFDI de Ingreso PUE:**  
1. **Ingresar al detalle de cualquier invoice en Stripe.**  
2. **Abrir el panel de la App de Facturapi en Stripe.**  
3. **Hacer clic en "Generar CFDI".**  

---

## **CFDI de Ingreso PPD**  
Esta factura se generará cuando un **invoice de Stripe esté abierto y esperando un pago**.  

### **Pasos para generar un CFDI de Ingreso PPD:**  
1. **Ingresar al detalle de cualquier invoice en Stripe.**  
2. **Abrir el panel de la App de Facturapi en Stripe.**  
3. **Hacer clic en "Generar CFDI".**  

📌 **Nota:** Cuando se reciba el pago, se podrá acceder al **Payment en Stripe** para generar el **CFDI de pago correspondiente**.

---

## **CFDI de Egreso (Nota de crédito)**  
Esta factura se generará cuando un **invoice de Stripe tenga ítems positivos y también negativos**.  
El **CFDI de egreso** ampara descuentos, devoluciones y bonificaciones.  

📌 **En este caso, se generará:**  
- Un **CFDI tipo I** por el monto total.  
- Un **CFDI tipo E (egreso)** por el monto negativo.  

### **Pasos para generar un CFDI de Ingreso con un CFDI de Egreso:**  
1. **Ingresar al detalle de cualquier invoice en Stripe.**  
2. **Abrir el panel de la App de Facturapi en Stripe.**  
3. **Hacer clic en "Generar CFDI".**  

---