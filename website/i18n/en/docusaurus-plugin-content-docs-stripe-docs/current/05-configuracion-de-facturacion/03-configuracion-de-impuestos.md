# Tax Configuration

## **Tax Handling in the Facturapi App for Stripe**  
Taxes are handled differently depending on the type of payment in **Stripe**.

### **1️⃣ Individual Payments Without an Invoice in Stripe**  
- **Stripe does not manage taxes for one-time payments.**  
- In these cases, the **default taxes** configured in the Facturapi App settings will be used.  
- The payment amount will be considered as the **price including taxes**.

### **2️⃣ Invoices in Stripe**  
When converting a **Stripe invoice** into a **Facturapi invoice**, the **default taxes will NOT be used**. Instead, taxes will be taken directly from the **invoice items** in Stripe.

- **Taxes will be mapped according to their name in Stripe**:  
  - `"IEPS"` → **IEPS**  
  - `"ISR"` → **ISR**  
  - `"IVA Exento"` → **Exempt VAT**  
  - **Any other name** → **VAT**  
  - **If the invoice item has no taxes, no taxes will be added to the Facturapi invoice.**  

📌 **Note:**  
- If the payment **does not have an invoice in Stripe**, the default taxes will be applied.  
- If the payment **comes from a Stripe invoice**, the taxes defined in the invoice will be used.  
- Tax mapping is based on the **tax name** in Stripe.