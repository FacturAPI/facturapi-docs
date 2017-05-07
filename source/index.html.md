---
title: API Reference

language_tabs:
  - shell: cURL
  - ruby: Ruby
  - python: Python
  - javascript: Node.js

toc_footers:
  - <a href='http://facturapi.io/dashboard/settings/apikeys'>Obten tu llave privada</a>
  - <a href='https://www.facturapi.io/register'>FacturAPI</a>

includes:
  - customers
  - products
  - invoices
  - errors

search: false
---

# Introducción

¡Bienvenido a Facturapi! Puedes usar nuestra API para emitir facturas electrónicas válidas de manera automatizada en el lenguaje de tu preferencia.

# Autenticación

> Para autenticarte usa este código:

```shell
# Solo tienes que pasar tu llave privada en cada peticion.
curl https://www.facturapi.io/v1/
  -u "sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx"
```

> Asegurate de remplazar nuestra llave de ejemplo `sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx` con tu propia llave API.

Facturapi usa llaves privadas para permitir el acceso a nuestra API. Puedes revisar tu llave privada en tu [panel de control de facturapi](http://facturapi.io/dashboard/settings/apikeys).
Nuestra API espera que la llave este incluida en cada una de las peticiones.

<aside class="notice">
Asegurate de remplazar nuestra llave de ejemplo `sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx` con tu propia llave API.
</aside>