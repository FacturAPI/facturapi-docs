# Data Update Link

From a customer's detail view in your Stripe dashboard, you can now click **"Request info"** when the Facturapi panel is open. This will automatically send an email to the customer asking them to fill in their **tax information**, so you can issue a CFDI invoice.

This process can also be automated from the app settings in Stripe:  
👉 [Configure automations](https://dashboard.stripe.com/settings/apps/io.facturapi.stripe-app.internal)

- When a **new customer is created**, the tax info request will be sent automatically.  
- If a **CFDI invoicing error** occurs, the request will be resent automatically as well.
