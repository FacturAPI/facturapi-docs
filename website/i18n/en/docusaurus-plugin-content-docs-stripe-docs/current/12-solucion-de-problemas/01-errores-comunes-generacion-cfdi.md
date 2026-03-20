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

---

# I installed the app in a sandbox and it does not appear in live or test mode

This is **expected**. In Stripe, **live**, **test mode**, and each **sandbox** are managed separately.

### **What does this mean?**

- Installing the app in **live** does not automatically install it in **test mode**.
- Installing the app in **test mode** does not automatically install it in a **sandbox**.
- Installing the app in a **sandbox** does not automatically install it in **live**, **test mode**, or other **sandboxes**.

### **How do you fix it?**

1. Open the Stripe environment where you actually want to use the app.
2. Install or open the **Facturapi Stripe App** there.
3. If Stripe asks you to, reconnect the app and select your organization again.

### **Which Facturapi environment does each installation use?**

- **Stripe live** points to **Facturapi live**.
- **Stripe test mode** points to **Facturapi test**.
- **Stripe sandbox** points to **Facturapi test**.

---

# Stripe asks me to reconnect the app in a sandbox

If Stripe asks you to reconnect the app inside a **sandbox**, it usually only means that specific installation needs to restore the link with Facturapi.

### **Important**

Reconnecting inside a sandbox does **not automatically reconnect** the installation in:

- **Stripe live**
- **Stripe test mode**
- other **sandboxes**

### **What should you do?**

1. Open the app inside the sandbox where the warning appeared.
2. Reconnect or reinstall the app if Stripe asks you to.
3. Select your organization again in Facturapi.

Your tax configuration in Facturapi is not lost during this process; only the link for that specific installation is restored.
