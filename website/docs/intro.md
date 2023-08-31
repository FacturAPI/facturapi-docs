---
sidebar_position: 1
---

# Introducción

El servicio web de Facturapi te permite interactuar con comprobantes fiscales digitales (CFDI) de una manera simple, fácil de entender y menos costosa de mantener.

Aspiramos a ser una alternativa moderna frente a los PCCFDI (Proveedor de certificación de Comprobante Fiscal Digital por Internet, antes PAC) tradicionales, que requieren de una gran cantidad de tiempo y experiencia para implementarse.

Nuestro objetivo es brindar una experiencia de desarrollo simple, y a la vez poderosa, capaz de cubrir todos los casos de uso, de escalar con tu crecimiento y de cumplir con los principales estándares de seguridad.

Facturapi usa **PCCFDI (antes PAC) autorizados por el SAT** para timbrar tus facturas y darles validez fiscal.

## ¿Cómo integro mi servicio a Facturapi?

Facturapi es un servicio web que se comunica con tu sistema a través de una API RESTful. Esto significa que puedes usar cualquier lenguaje de programación para integrar tu servicio a Facturapi.

Las llamadas a la API de Facturapi se realizan desde tu servidor, por lo que no es necesario que tu cliente tenga una conexión directa con Facturapi.

[![Facturapi](/img/tutorial/facturapi-integration-diagram.jpeg)](https://www.facturapi.io)

## Cómo empezar

Lo único que necesitas para empezar a usar Facturapi es una cuenta de usuario y una API Key.

1. [Crea una cuenta](https://www.facturapi.io/register) en Facturapi.
2. [Obtén tu API Key](https://dashboard.facturapi.io/integration/apikeys).
3. [Instala el SDK](/docs/getting-started/install/) de tu lenguaje de programación favorito.
4. Empieza por [un ejemplo](/docs/guides/invoices/ingreso/).
5. Consulta la [referencia completa de la API](/api/).

## Características soportadas por Facturapi

- **E-receipts**. Emite [recibos digitales facturables](/docs/guides/receipts/) por cada venta que realices.
  - **Factura global**. Emite una sola factura por todos los e-receipts que no se facturaron durante un periodo.
  - **Autofactura** Proporciona un portal para que tus clientes completen los datos de su factura por si mismos.
- **Factura electrónica**.
  - **CFDI versión 4.0** (vigente desde Enero de 2022).
  - ~~**CFDI versión 3.3**~~ (descontinuada en Marzo de 2023).
  - Todos los tipos de comprobantes (CFDI):
    - **Ingreso** (Factura)
    - **Egreso** (Nota de crédito)
    - **Pago** (Complemento de pago)
    - **Nómina** (Recibo de nómina)
    - **Traslado** (Traslado de mercancía)
  - Inserta cualquier **complemento** y/o **addenda**.
    - Acreditamiento de IEPS
    - Instituciones Educativas
    - Aerolíneas
    - Certificado de destrucción
    - Comercio Exterior
    - Divisas
    - Consumo de combustibles
    - Donatarias
    - Estado de cuenta combustible
    - Gastos en hidrocarburos
    - INE
    - Leyendas fiscales
    - Notarios públicos
    - Obras de arte
    - Impuestos locales
    - Pago en especie
    - PF integrante coordinado
    - Renovación y sustitución de vehículos
    - Detallista
    - Servicio parcial de construcción
    - SPEI Tercero
    - Por cuenta de terceros
    - Turista pasajero extranjero
    - Vales de despensa
    - Vehículo usado
    - Venta de vehículos
    - Ingresos en hidrocarburos
    - Registro Fiscal
    - Nómina
    - Pagos
    - Carta Porte
- **Comprobante de Retención**. (Incluyendo el complemento de Plataformas Tecnológicas).
- **Cancelaciones**.
- **Multi RFC**. Registra múltiples organizaciones bajo una misma cuenta y emite facturas usando distintos RFC.
