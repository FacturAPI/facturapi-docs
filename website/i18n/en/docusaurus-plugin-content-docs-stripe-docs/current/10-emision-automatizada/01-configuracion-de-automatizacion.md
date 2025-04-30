# Automatic CFDI Issuance

### 🔑 How to access the app settings

Once the Facturapi app is installed, follow these steps to access its configuration:

1. Open your [Stripe Dashboard](https://dashboard.stripe.com/)
2. Click the **Facturapi** icon in the top right corner
3. Click the **three-dot menu** `⋮`
4. Select **"View App settings"**

---

### ⚙️ Enable automation

The app allows you to automatically generate CFDIs based on common events like new invoices, payments, credit notes, and refunds.

When enabled, the following automatic actions can be configured:

- **Send CFDIs by email when generated**  
  Automatically sends an email to the customer with the CFDI attached as soon as it's issued.

- **Send a link to edit tax information to new customers**  
  If a customer has no tax information registered, a link will be sent automatically so they can complete it before the CFDI is generated.

- **Send a link to edit tax information with errors**  
  If any of the required fields —RFC, Postal Code, Tax Regime, or Business Name— have errors, the customer will receive a link to correct them before the CFDI is issued.

- **Generate pending CFDIs for the month when editing tax information**  
  When a customer updates their tax information, the app can automatically issue all CFDIs that were pending for the current month.

- **Generate CFDIs for unpaid invoices**  
  For unpaid invoices, the app automatically issues a type I CFDI (income) with payment method PPD (payment in installments or deferred). When the payment is received, a type P CFDI (payment receipt) is issued automatically.
