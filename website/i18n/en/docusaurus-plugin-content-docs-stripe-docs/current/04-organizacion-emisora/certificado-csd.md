# Upload Your CSD Certificate

## What is a CSD and What is It Used for in Facturapi?

The **Digital Seal Certificate (CSD)** is a file issued by the **Tax Administration Service (SAT)** in Mexico. It is used to **digitally sign CFDI (electronic invoices)** and ensure their authenticity. In **Facturapi** and its Stripe App, the CSD is required to issue valid invoices before SAT.

## Steps to Upload Your CSD in Facturapi

### 1. Access the Certificate Settings
   - Log in to your **Facturapi dashboard**.
   - Go to **Settings** > **Certificates** or access it directly: [Certificate Settings](https://dashboard.facturapi.io/settings/certs).

### 2. Upload the CSD Files
   - Drag and drop or select the **.cer** and **.key** files.
   - **Recommendation:** Use short filenames with **alphanumeric characters and no spaces** to avoid upload issues.

### 3. Enter the Private Key Password
   - Type the password associated with the **.key** file.

### 4. Save the Changes
   - Click **Save** to complete the CSD upload.

---

**Note:** Once the CSD is uploaded, Facturapi will use it to sign and stamp your electronic invoices in compliance with SAT regulations.