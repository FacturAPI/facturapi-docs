## Inicio rápido

### Instalación

```shell
cURL no requiere de instalar un cliente adicional
```

```javascript
npm install --save facturapi
```

```csharp
Install-Package Facturapi
```

Empieza por incluir el cliente de Facturapi en las dependencias de tu proyecto. Selecciona tu
lenguaje de programación de las pestañas para ver el comando de instalación.

### Autenticación

> Para autenticarte deberás incluir tu llave privada en el uso de la librería

```shell
# Solo tienes que autenticarte con tu llave privada en cada peticion.
curl https://www.facturapi.io/v1/
  -u "sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx"
```

```javascript
// Instancia el módulo de Facturapi usando tu llave secreta
const facturapi = require('facturapi')('sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx');
```

```csharp
// Coloca este código en el inicio de tu aplicación
Facturapi.Settings.ApiKey = "sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx";
```

> Asegurate de remplazar nuestra llave de ejemplo `sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx` con tu propia llave secreta.

Facturapi usa llaves privadas para permitir el acceso a nuestra API. Puedes obtener tu llave privada en la sección **Configuración &rarr; Api Keys**, en tu panel de control de [Facturapi](https://www.facturapi.io).
Nuestra API espera que la llave este incluida en cada una de las peticiones.

<aside class="notice">
Asegurate de remplazar nuestra llave de ejemplo `sk_test_8bGBLe64A72yX87KPxML9yDa5rK9WEmx` con tu propia llave API.
</aside>