---
sidebar_position: 1
---

# Introducción

## ¿Qué es Facturapi?

Facturapi es la primera REST API de facturación electrónica en México que rediseña y simplifica el proceso de emitir CFDIs válidos, enviados al SAT y a tus clientes, o a los clientes de tus clientes.

Es ideal para tu aplicación si buscas un servicio flexible y escalable para facturar a los miles de usuarios que diariamente lo solicitan en tu sitio, con inversión mínima en tiempo de implementación.

## Características soportadas

- **CFDI versión 4.0** (vigente desde Enero de 2022).
- **CFDI versión 3.3** (soportada hasta el último día de Abril de 2022).
- Todos los tipos de facturas (CFDI):
  - **Ingreso** (la normal)
  - **Egreso** (conocida como Nota de Crédito)
  - **Pago** (conocida como Complemento de Pago)
  - **Nómina** (conocida como Recibo de Nómina)
  - **Traslado** (incluyendo el complemento Carta Porte)
- Inserta cualquier **complemento** y/o **addenda**.
- **Comprobante de Retención**. Incluyendo el complemento de Plataformas Tenológicas.
- **Cancelación** de comprobantes.
- **MultiRFC**. Registra múltiples organizaciones bajo una misma cuenta y emitie facturas usando distintos RFCs.
- **Autofactura**. Emite recibos digitales que puedes enviar a tus clientes para que completen los datos de su factura por si mismos en un portal con tu branding.

## ¿Facturapi es un PAC?

No, pero Facturapi usa **PACs autorizados por el SAT** para timbrar tu factura y darle validez fiscal.

## Conceptos importantes

Te recomendamos familiarizarte con los siguientes conceptos para navegar esta documentación con facilidad.

### Recursos

Estos son los recorsos disponibles en La API de Facturapi:

Pertenecientes a cada organización:

- **Clientes**
- **Productos**
- **Facturas**
- **Recibos**
- **Retenciones**

Pertenecientes a la cuenta del usuario:

- **Organizaciones**

La API cuenta con métodos que te permiten crear, consultar y realizar operaciones sobre dichos recursos.

### Roles

Esiten 2 roles distintos con los que puedes identificarte en la API:

- **Organización**. Identificarte como **organización** te permite emitir facturas usando la
  información fiscal previamente configurada para la organización, así como crear, consular y
  realizar operaciones sobre recursos que le pertenezcan. Para identificarte con este rol,
  deberás utilizar la **Test Secret Key** o la **Live Secret Key** de la organización,
  dependiendo del **ambiente** que quieras utilizar.
- **Usuario**. Identificarte como usuario te permite crear y administrar
  organizaciones que pertenecerán a tu cuenta de usuario. Para identificarte con este
  rol, deberás utilizar la **User Secret Key** de tu cuenta.

### Ambientes

Facturapi cuenta con 2 ambientes independientes y únicos por cada organización.

- **Ambiente Test**. Úsala durante la etapa de desarrollo. Las facturas que crees en este
  ambiente no serán enviadas al SAT, y por lo tanto no tendrán validez fiscal. Para usar este
  ambiente deberás utilizar la **Test Secret Key** de la organización que desees identificar
  durante el proceso de autenticación.
- **Ambiente Live**. Úsala al operar en producción. Las facturas que crees en este ambiente
  se enviarán al SAT y tendrán validez fiscal. Para usar este ambiente deberás utilizar la
  **Test Secret Key** de la organización que desees identificar durante el proceso de
  autenticación.

Los recursos creados por una organización en un ambiente son inaccesibles para otras organizaciones, o para la misma
organización en diferents ambientes.

**Nota:** No requieres pagar una suscripción para usar la API en ambiente Test.

### Llaves secretas

Sirven para identificar a una organización o a una cuenta de usuario al llamar a la API de Facturapi.

Existen 3 tipos de llaves secretas, cada una con una función específica:

- **Test Secret Key**: Identifica a la organización en ambiente Test para crear y administrar recursos (clientes, facturas, etc). Es única por organización.
- **Live Secret Key**: Identifica a una Organización en ambiente Live para crear y administrar recursos (clientes, facturas, etc). Es única por organización.
- **User Secret Key**: Identifica a tu cuenta para crear y confiigurar organizaciones. Es única por cuenta.

Las llaves secretas se utilizan durante el proceso de [autenticación](/docs/authenticate).

Para obtener tus llaves secretas, crea una cuenta gratuita en Facturapi visitando:

<a href="https://www.facturapi.io/register?utm_source=facturapi-docs&utm_medium=GithubPages" target="_blank">https://www.facturapi.io/register</a>
