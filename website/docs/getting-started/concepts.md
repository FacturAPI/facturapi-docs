---
sidebar_position: 2
---

# Conceptos de la API

Si esta es tu primera vez integrando la API de Facturapi, te recomendamos familiarizarte con los siguientes conceptos, los cuales te ayudarán a entender mejor el flujo de integración.

## Recursos

La API de Facturapi te permite crear, consultar y administrar los siguientes recursos:

#### Pertenecientes a cada organización

- Clientes
- Productos
- Facturas
- Recibos
- Retenciones

#### Pertenecientes a la cuenta del usuario:

- Organizaciones

## Roles

Existen 2 roles distintos con los que puedes identificarte en la API:

- **Organización**. Identificarte como **organización** te permite emitir facturas usando la
  información fiscal previamente configurada para la organización, así como crear, consultar y
  realizar operaciones sobre recursos que le pertenezcan. Para identificarte con este rol,
  deberás utilizar la **Test Secret Key** o la **Live Secret Key** de la organización,
  dependiendo del **ambiente** que quieras utilizar.
- **Usuario**. Identificarte como usuario te permite crear y administrar
  organizaciones que pertenecerán a tu cuenta de usuario. Para identificarte con este
  rol, deberás utilizar la **User Secret Key** de tu cuenta.

## Ambientes

Facturapi cuenta con 2 ambientes independientes y únicos por cada organización.

- **Ambiente Test**. Úsalo durante la etapa de desarrollo. Las facturas que crees en este
  ambiente no serán enviadas al SAT, y por lo tanto no tendrán validez fiscal. Para usar este
  ambiente deberás utilizar la **Test Secret Key** de la organización que desees identificar
  durante el proceso de autenticación.
- **Ambiente Live**. Úsalo al operar en producción. Las facturas que crees en este ambiente
  se enviarán al SAT y tendrán validez fiscal. Para usar este ambiente deberás utilizar la
  **Live Secret Key** de la organización que desees identificar durante el proceso de
  autenticación.

Los recursos creados por una organización en un ambiente son inaccesibles para otras organizaciones, o para la misma organización en diferentes ambientes.

**Nota:** No requieres pagar una suscripción para usar la API en ambiente Test.

## Llaves secretas

Sirven para identificar a una organización o a una cuenta de usuario al llamar a la API de Facturapi.

Existen 3 tipos de llaves secretas, cada una con una función específica:

- **Test Secret Key**: Identifica a la organización en ambiente Test para crear y administrar recursos (clientes, facturas, etc.). Es única por organización.
- **Live Secret Key**: Identifica a una Organización en ambiente Live para crear y administrar recursos (clientes, facturas, etc.). Es única por organización.
- **User Secret Key**: Identifica a tu cuenta para crear y configurar organizaciones. Es única por cuenta.

Las llaves secretas se utilizan durante el proceso de [autenticación](/docs/getting-started/authenticate).

Para obtener tus llaves secretas y crear una cuenta gratuita en Facturapi visita:

<a href="https://www.facturapi.io/register?utm_source=facturapi-docs&utm_medium=GithubPages" target="_blank">https://www.facturapi.io/register</a>
