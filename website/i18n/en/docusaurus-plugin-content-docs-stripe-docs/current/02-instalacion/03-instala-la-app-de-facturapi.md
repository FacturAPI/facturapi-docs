# Step 3 - Install the App in Stripe

## How to Install the Application?

1. **Access the Stripe App Marketplace**  
   Log in to your Stripe account and go to the [Stripe App Marketplace](https://marketplace.stripe.com/apps/facturapi).

2. **Select the Facturapi App**  
   Inside the marketplace, search for "Facturapi" or access it directly through [this link](https://marketplace.stripe.com/apps/facturapi).

3. **Click on "Install"**  
   Follow the on-screen instructions to complete the installation. Stripe will ask you to confirm the necessary permissions for Facturapi to operate within your account.

4. **Set Up Your Integration**  
   Once the app is installed, follow the next steps within Facturapi to ensure your organization is ready to issue CFDI correctly.

5. **Select Your Organization**  
   You will be prompted to choose the organization you want to connect with Stripe. Make sure to select the one you have correctly set up. If you configure it later, ensure it matches the one connected to Stripe.

## Live, Test mode, and Sandboxes

The Facturapi Stripe App supports **Stripe live**, **Stripe test mode**, and **Stripe sandboxes**.

- **Stripe live** connects to **Facturapi live**.
- **Stripe test mode** connects to **Facturapi test**.
- **Stripe sandbox** connects to **Facturapi test**.

### What should you keep in mind?

1. **Each installation is environment-specific**
   - If you install the app in live mode, that installation is not automatically shared with test mode or your sandboxes.
   - If you install the app in a sandbox, that installation only applies to that sandbox.

2. **Each sandbox is managed separately**
   - Stripe treats every sandbox as an isolated environment.
   - If you have multiple sandboxes, you can install, reconnect, or configure the Facturapi app independently in each one.

3. **Facturapi test data can be shared across sandboxes**
   - Even though the Stripe App installation is independent for each sandbox, both **Stripe test mode** and **sandboxes** connect to **Facturapi test**.
   - If you connect multiple sandboxes to the same Facturapi organization, those sandboxes can see and reuse the same customers and other test data for that organization.

4. **It is normal to select your organization again**
   - When you install or reconnect the app in another Stripe environment, Facturapi may ask you to choose the organization you want to link again.

> ⚠️ **Note:** Before you can issue CFDI stamped before SAT, make sure you have completed your organization’s setup in Facturapi, including uploading the CSD certificate.

> ℹ️ **Usage and reconnection:** The Facturapi Stripe App connection stays active as long as you continue using the app inside Stripe. If the app goes unused for a long period, Stripe may ask you to reconnect it. In that case, simply reinstall or reconnect the app and select your organization again in Facturapi.

> ℹ️ **Important for sandboxes:** If Stripe asks you to reconnect the app inside a sandbox, that reconnection only applies to that sandbox. It does not automatically reconnect your live installation, your regular test mode installation, or any other sandbox. However, if those environments use the same Facturapi organization in `test`, they can still share the same test data.

That's it! You now have the application installed in Stripe.
