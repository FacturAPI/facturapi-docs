---
sidebar_position: 2
---

# API Concepts

If this is your first time integrating with the Facturapi API, we recommend familiarizing yourself with the following concepts, which will help you better understand the integration flow.

## Resources

The Facturapi API allows you to create, retrieve, and manage the following resources:

#### Belonging to each organization

- Clients
- Products
- Invoices
- Receipts
- Retentions

#### Belonging to the user's account:

- Organizations

## Roles

There are 2 different roles that you can identify yourself with in the API:

- **Organization**: Identifying yourself as an organization allows you to issue invoices using the previously configured fiscal information for the organization, as well as create, retrieve, and perform operations on resources belonging to it. To identify yourself with this role, you must use the Test Secret Key or the Live Secret Key of the organization, depending on the environment you want to use.
- **User**: Identifying yourself as a user allows you to create and manage organizations that belong to your user account. To identify yourself with this role, you must use the User Secret Key of your account.

## Environments

Facturapi has 2 independent and unique environments for each organization.

- **Test Environment**: Use it during the development stage. The invoices you create in this environment will not be sent to the SAT (Mexican tax authority), and therefore will not have fiscal validity. To use this environment, you must use the Test Secret Key of the organization you want to identify during the authentication process.
- **Live Environment**: Use it when operating in production. The invoices you create in this environment will be sent to the SAT and will have fiscal validity. To use this environment, you must use the Live Secret Key of the organization you want to identify during the authentication process.

The resources created by an organization in one environment are inaccessible to other organizations or to the same organization in different environments.

:::info **You do not need to pay for a subscription to use the API in the Test environment**
You can create and manage resources in the test environment without subscribing. This way, you can familiarize yourself with the API and perform the necessary tests before going into production.
:::

## Secret Keys

They are used to identify an organization or a user account when calling the Facturapi API.

There are 3 types of secret keys, each with a specific function:

- **Test Secret Key**: Identifies the organization in the Test environment to create and manage resources (clients, invoices, etc.). It is unique per organization.
- **Live Secret Key**: Identifies an organization in the Live environment to create and manage resources (clients, invoices, etc.). It is unique per organization.
- **User Secret Key**: Identifies your account to create and configure organizations. It is unique per account.

The secret keys are used during the authentication process.

To obtain your secret keys and create a free account on Facturapi, visit:

<a href="https://www.facturapi.io/register?utm_source=facturapi-docs&utm_medium=GithubPages" target="_blank">https://www.facturapi.io/register</a>


