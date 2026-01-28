# Configuración de Impuestos

## **Manejo de Impuestos en la App de Facturapi para Stripe**
Los impuestos se manejan de manera diferente dependiendo del tipo de pago en **Stripe**.

### **1️⃣ Pagos individuales sin una factura en Stripe**
- **Stripe no maneja impuestos en pagos únicos.**
- Para estos casos, se usarán los **impuestos predeterminados** configurados en la configuración de la App de Facturapi.
- El monto del pago se considerará el **precio con impuestos incluidos**.

### **2️⃣ Facturas en Stripe**
Cuando se convierte una **factura de Stripe** en una **factura de Facturapi**, **NO** se usarán los impuestos predeterminados, sino que se tomarán directamente de los **items de la factura** en Stripe.

- **Los impuestos se mapearán según su nombre en Stripe**:
  - `"IVA"` → **IVA** 
  - `"IEPS"` → **IEPS**
  - `"IVA Exento"` → **IVA Exento**
  - **Cualquier otro nombre** → **IVA**
  - **Si el item de la factura no tiene impuestos, no se agregarán impuestos en la factura de Facturapi**.

📌 **Nota:**  
- Si el pago **no tiene una factura en Stripe**, se aplicarán los impuestos predeterminados.  
- Si el pago **proviene de una factura de Stripe**, se respetarán los impuestos definidos en la factura.  
- El mapeo de impuestos se basa en el **nombre del impuesto** en Stripe.
