# One-Cent Discrepancy in CFDI

When generating a **CFDI in Facturapi** from an **invoice or payment in Stripe**, you may notice a **one-cent difference** in the amounts. This can raise concerns about calculation accuracy and proper CFDI issuance.

### **Why Does This Variation Occur?**

Facturapi, like the **SAT**, performs calculations using **six decimal places** to ensure the highest possible accuracy in determining taxes and totals. However, Stripe may not be applying the same number of decimal places to the products or services registered on its platform.

### **How to Resolve This Difference?**

If the amounts in the **invoice** or **payment** show a **one-cent discrepancy** compared to the **generated CFDI**, it is recommended to check the following:

1. **Check the configuration of products in Stripe**
   - Ensure that unit prices are recorded with **a maximum of six decimal places**.
   - If more than six decimal places are used, calculations may vary and cause a one-cent difference in the CFDI.

2. **Review Stripe’s rounding logic**
   - Stripe may be rounding amounts to fewer than six decimal places before generating the total, leading to discrepancies.

3. **Compare calculations with the SAT methodology**
   - Facturapi follows the **SAT** guidelines, so performing a manual test using six decimal places is recommended to validate calculations.

📌 **Important Note:** Although the **SAT** allows for a variation of up to one cent due to rounding in calculations, it is advisable to adjust Stripe's configuration to minimize these discrepancies.

---

# The app appears disconnected or Stripe asks you to reconnect it

If the **Facturapi Stripe App** appears disconnected or Stripe asks you to reconnect it, this usually does not mean you lost your tax configuration in Facturapi.

### **Why Can This Happen?**

The app connection stays active as long as you continue using the app inside Stripe. If the app goes unused for a long period, Stripe may ask you to reconnect it.

### **How Do You Fix It?**

1. **Open the Facturapi Stripe App** inside your Stripe dashboard.
2. **Reconnect or reinstall the app** if Stripe asks you to do so.
3. **Select your organization again** in Facturapi to restore the link with Stripe.

### **Will My Configuration Be Lost?**

Not necessarily. In most cases, reconnecting only restores the link between Stripe and Facturapi. Your tax configuration, certificates, and invoicing preferences remain in Facturapi.
