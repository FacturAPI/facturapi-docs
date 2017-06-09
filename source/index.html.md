---
title: Facturapi - Documentación Oficial cURL Node.js Ruby .NET

language_tabs:
  - shell: cURL
  - ruby: Ruby
  - python: Python
  - javascript: Node.js

toc_footers:
  - <a href='https://www.facturapi.io'>Obten tu llave privada</a>
  - <a href='https://www.facturapi.io'>Facturapi</a>

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

Facturapi usa llaves privadas para permitir el acceso a nuestra API. Puedes obtener tu llave privada en la sección **Configuración 🡲 Api Keys**, en tu panel de control de [Facturapi](https://www.facturapi.io).
Nuestra API espera que la llave este incluida en cada una de las peticiones.

<aside class="notice">
Asegurate de remplazar nuestra llave de ejemplo `sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx` con tu propia llave API.
</aside>