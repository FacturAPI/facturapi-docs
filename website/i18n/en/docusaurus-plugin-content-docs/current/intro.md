---
sidebar_position: 1
---

# Introduction

Facturapi's web service allows you to interact with digital tax receipts (CFDI) in a secure, simple, and low maintainance way.

We aim to be a modern alternative to traditional CFDI providers (PCCFDI or PAC), which require a lot of time and expertise to implement.

Our goal is to provide a simple yet powerful development experience, capable of covering all use cases, scaling with your growth, and complying with security standards.

Facturapi uses **SAT-authorized PCCFDI (formerly PAC)** to stamp your invoices and give them fiscal validity.

## How Facturapi works

Facturapi is a web service that communicates with your system through a RESTful API. This means you can use any programming language to integrate your service with Facturapi.

Calls to the Facturapi API are made from your server, so it is not necessary for your client to have a direct connection to Facturapi.

[![Facturapi](/img/tutorial/facturapi-integration-diagram-en.jpeg)](#)

## Getting started

The only thing you need to start testing Facturapi is a user account and an API Key.

1. [Create an account](https://www.facturapi.io/register) on Facturapi.
2. [Get your API Key](https://dashboard.facturapi.io/integration/apikeys).
3. [Install the SDK](/docs/getting-started/install/) for your preferred programming language.
4. Start with an [example](/docs/guides/invoices/ingreso/).
5. Check the [full API reference](/api/).

## Features supported

- **E-receipts**. Issue [CFDI-ready electronic receipts](/docs/guides/receipts/) por every payment you receive. No customer info required. You can convert them into invoices later if needed.
  - **Self-invoicing**. Let your customers fill in their information themselves and download their invoice for an e-receipt you issued them.
  - **Global invoice**. Issue a single invoice for all e-receipts that were not invoiced during a period.
- **Electronic invoicing (CFDI(**.
  - **CFDI version 4.0** (in effect since January 2022).
  - ~~**CFDI version 3.3**~~ (phased out on March 2023).
  - All types of invoices (CFDI):
    - **Ingreso** (**Income**). Sales income invoices.
    - **Egreso** (**Egress**). Credit notes. Discounts.
    - **Pago** (**Payment**). Payment receipts for non-paid invoices.
    - **Nómina** (**Payroll**). Payroll invoice.
    - **Traslado** (**Transfer**). Goods transfer invoice.
  - Insert any **complement** and/or **addendum**.
    - Acreditamiento de IEPS - IEPS Accreditation
    - Instituciones educativas - Educational Institutions
    - Aerolíneas - Airlines
    - Certificado de destrucción - Destruction Certificate
    - Comercio Exterior - Foreign Trade
    - Divisas - Currency Exchange
    - Consumo de combustibles - Fuel Consumption
    - Donatarias - Charitable Donations
    - Estado de cuenta combustible - Fuel Account Statement
    - Gastos en hidrocarburos - Hydrocarbons Expenses
    - INE (Instituto Nacional Electoral) - National Electoral Institute
    - Leyendas fiscales - Fiscal Legends
    - Notarios públicos - Public Notaries
    - Obras de arte - Artworks
    - Impuestos locales - Local Taxes
    - Pago en especie - Payment in Kind
    - PF integrante coordinado - Coordinated Individual Member
    - Renovación y sustitución de vehículos - Vehicle Renewal and Replacement
    - Detallista - Retailer
    - Servicio parcial de construcción - Partial Construction Service
    - SPEI Tercero - Third Party SPEI (Electronic Funds Transfer)
    - Por cuenta de terceros - On Behalf of Third Parties
    - Turista pasajero extranjero - Foreign Passenger Tourist
    - Vales de despensa - Grocery Vouchers
    - Vehículo usado - Used Vehicle
    - Venta de vehículos - Vehicle Sale
    - Ingresos en hidrocarburos - Hydrocarbons Income
    - Registro Fiscal - Fiscal Registration
    - Nómina - Payroll
    - Pagos - Payments
    - Carta Porte - Consignment note with tax details
- **Retention invoice**. Statement of withholding tax and payments to non-residents.
- **Cancellations**. Cancel invoices and receive notifications of cancellations.
- **Multi RFC**. Register multiple organizations under the same account and issue invoices using different RFCs.
- **Webhooks**. Receive notifications of events related to your invoices.
- **Invoice drafts**. Save invoices as drafts, send them for review, edit and stamp them when ready.
