# Discount Handling

When generating invoices through the Facturapi app for Stripe, discounts are handled as follows:

- **If a discount has a matching product_id / price_id in the invoice, it will be applied as a discount on that item.**  
- **If no match is found, a separate "Egreso" invoice will be created for the remaining discounts.**