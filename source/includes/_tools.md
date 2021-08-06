## Herramientas

### Validar RFC

> <h4 class="toc-ignore">Definición</h4>

```text
GET https://www.facturapi.io/v1/tools/tax_id_validation
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/tools/tax_id_validation?tax_id=BBA830831LJ2 \
  -H "Authorization: Bearer sk_test_API_KEY" 
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const customer = await facturapi.tools.validateTaxId('BBA830831LJ2');
```

```csharp
var customer = await facturapi.Tools.ValidateTaxIdAsync("BBA830831LJ2");
```

```php
<?php
$facturapi = new Facturapi( "sk_test_API_KEY" );

$customer = $facturapi->Tools->validateTaxId("BBA830831LJ2");
```

Consulta el estado de un RFC en 3 listas distintas:

- **Registro de RFCs del SAT**. Indica que el RFC es correcto y está dado de alta ante el SAT como contribuyente, por lo tanto, el RFC está autorizado para recibir facturas (ser receptor de CFDI).
- **LCO**. Lista de Contribuyentes Obligados. Indica que el RFC registró uno o más Certificados de Sello Digital y por lo tanto está autorizado para emitir facturas (ser emisor de CFDI).
- **EFOS***. Empresas que Facturan Operaciones Simuladas. Al aparecer en esta lista, el RFC es o fue sospechoso de incurrir en simulación de operaciones fiscales (empresas factureras).

La respuesta (detallada más abajo) incluye los resultados de las 3 validaciones. En cada uno de estos objetos se incluye la propiedad booleana `is_valid`, que Facturapi resuelve interpretando cada respuesta. Un valor de `true` para esta propiedad indica que el RFC no tiene asuntos por resolver y está libre de problemas; y lo contrario para `false`. Adicionalmente puedes consultar la propiedad `data` para ver los valores en bruto de la consulta al SAT.

<aside class="notice">
  El SAT puede tardar de 24 a 72 horas para actualizar sus listas, por lo tanto recomendamos esperar dicho intervalo de tiempo después de haberte dado de alta en el SAT para aparecer en el Registro de RFC; o después de haber generado tu Certificado de Sello Digital (CSD) para aparecer en la LCO.
</aside>

#### Argumentos (URL query)

Argumento | Tipo | Descripción
---------:|:----:| -----------
**tax_id**<br><small>requerido</small> | string | RFC a validar

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "registro": {
    "is_valid": true,
    "data": {
      "codigo": "200",
      "fechaLista": "2021-08-03",
      "rfc": "BBA830831LJ2"
    }
  },
  "lco": {
    "is_valid": true,
    "data": {
      "rfc": "BBA830831LJ2",
      "lcoItems": [
        {
          "estatus": "A",
          "fechaFin": "2021-10-16 17:59:17",
          "fechaInicio": "2017-10-16 17:59:17",
          "numCert": "00001000000407813773",
          "validez": "2"
        },
        {
          "estatus": "A",
          "fechaFin": "2024-06-16 20:13:58",
          "fechaInicio": "2020-06-16 20:13:58",
          "numCert": "00001000000504218077",
          "validez": "2"
        },
        {
          "estatus": "A",
          "fechaFin": "2024-08-15 00:52:13",
          "fechaInicio": "2020-08-15 00:52:13",
          "numCert": "00001000000504757239",
          "validez": "2"
        }
      ]
    }
  },
  "efos": {
    "is_valid": true,
    "data": {
      "mensaje": "La consulta para el rfc especificado no devolvió resultados",
      "detalles": []
    }
  }
}
```

El objeto de respuesta se detalla a continuación:

Propiedad | Tipo | Descripción
---------:|:----:| -----------
**registro** | object | Resultado de la validación en el Registro de RFCs del SAT.
**registro.is_valid** | boolean | Indica que el RFC es válido, es decir, que tiene un formato correcto, y que se encuentra dado de alta como contribuyente en el SAT. `true`: el RFC puede recibir facturas. `false`: el RFC no puede recibir facturas.
**registro.data** | object | Objeto con el resultado de la búqueda ante el SAT. Toda la información contenida en este objeto proviene del SAT.
**registro.data.codigo** | string | Código asignado por el SAT para identificar el resultado de la respuesta. Posibles valores:<ul><li>**"200"**: RFC encontrado</li><li>**"101"**: El RFC no existe en la lista de RFC inscritos no cancelados del SAT</li><li>**"102"**: El RFC no cumple con el patrón requerido</li></ul>
**registro.data.mensaje** | string | Disponible sólo cuando `codigo` es distinto a "200". Describe el problema con el RFC.
**registro.data.fechaLista** | date string | Fecha de actualización de la lista. En formato "YYYY-MM-DD".
**registro.data.rfc** | string | Devuelve el RFC consultado, a manera de confirmación.
**lco** | object | Resultado de la validación en la Lista de Contribuyentes Obligados del SAT.
**lco.is_valid** | boolean | Indica si el RFC tiene por lo menos un certificado válido para emitir facturas. `true`: El RFC cuenta con por lo menos un certificado válido. `false`: El RFC no cuenta con certificados válidos para emitir facturas.
**lco.data** | object | Objeto con el resultado de la búqueda ante el SAT. Toda la información contenida en este objeto proviene del SAT.
**lco.data.mensaje** | string | Disponible sólo cuando el RFC no fue encontrado. Describe la razón del problema.
**lco.data.rfc** | string | Devuelve el RFC consultado, a manera de confirmación.
**lco.data.lcoItems** | array of objects | Arreglo con los resultados de la búsqueda en la LCO. Se obtiene un resultado por cada Certificado de Sello Digital que se tenga registrado.
**lco.data.lcoItems[].numCert** | string | Número de serie del Certificado de Sello Digital (CSD).
**lco.data.lcoItems[].estatus** | string | Puede tener los siguientes valores:<ul><li>**"A"**: Activo</li><li>**"C"**: Cancelado</li><li>**"R"**: Revocado</li></ul>
**lco.data.lcoItems[].fechaInicio** | date string | Fecha de inicio de validez del certificado. En formato "YYYY-MM-DD HH:mm:ss"
**lco.data.lcoItems[].fechaFin** | date string | Fecha final de validez del certificado. En formato "YYYY-MM-DD HH:mm:ss"
**lco.data.lcoItems[].validez** | string | Validez de obligaciones. Consulta la tabla más abajo para ver qué implicaciones tienen los distintos valores.
**efos** | object | Resultado de la validación en la lista de Empresas que Facturan Operaciones Simuladas del SAT.
**efos.is_valid** | boolean | Indica si el RFC tiene algún asunto relacionado con esta lista. `true`: El RFC no está en la lista de EFOS o su situación fue apelada y resultó favorable. `false`: El RFC está registrado como "Presunto" o "Definitivo" en la lista de EFOS.
**efos.data** | object |  Objeto con el resultado de la búqueda ante el SAT. Toda la información contenida en este objeto proviene del SAT.
**efos.data.mensaje** | string | Disponible sólo cuando el RFC no fue encontrado en la lista, lo cual es bueno.
**efos.data.fechaLista** | string | Texto que indica la fecha de actualización de la lista.
**efos.data.detalles** | array of objects | Arreglo con los resultados de la búsqueda en la lista de EFOS.
**efos.data.detalles[].rfc** | string | El RFC consultado, a manera de confirmación.
**efos.data.detalles[].razonSocial** | string | Razón social del contribuyente.
**efos.data.detalles[].situacionContribuyente** | string | Texto que indica la situación actual. Consulta la tabla más abajo para ver el detalle de los distintos valores.
**efos.data.detalles[].numFechaPresuncion** | string | Texto con identificador y fecha del reporte de presunción.
**efos.data.detalles[].pubFechaSatPresuntos** | date string | Fecha de publicación de presunción, en formato "DD/MM/YYYY".
**efos.data.detalles[].numGlobalPresuncion** | string | Texto con identificador y fecha de publicación en el listado global de presunción.
**efos.data.detalles[].pubFechaDofPresuntos** | date string | Fecha de publicación en el Diario Oficial de la Federación (DOF), en formato "DD/MM/YYYY".
**efos.data.detalles[].pubSatDefinitivos** | string | Identificador de la publicación de estado "Definitivo".
**efos.data.detalles[].pubDofDefinitivos** | string | Fecha de la publicación de estado "Definitivo" en el DOF, en formato "DD/MM/YYYY".
**efos.data.detalles[].numFechaSentFav** | string | Texto con identificador y fecha de sentencia favorable.
**efos.data.detalles[].pubSatSentFav** | string | Fecha de sentencia favorable, en formato "DD/MM/YYYY".

#### Validez de obligaciones

| Validez | IVA Exento | Tasa 0% | Tasa 8% Fronteriza Norte | Tasa 8% Fronteriza Sur | Tasa 16%
|:-------:|:----------:|:-------:|:------------------------:|:----------------------:|:--------
| "0" <td colspan="5">El contribuyente no está autorizado para emitir facturas</td>
| "1" | Sí | Sí | No | No | Sí
| "2" | Sí | Sí | Sí | No | Sí
| "3" | Sí | Sí | No | Sí | Sí
| "4" | Sí | Sí | Sí | Sí | Sí

#### Situación del contribuyente

| Valor | Explicación
|:-----:|:-----------
| "Previsto" | Vía buzón tributario o notificaciones por estrados, el contribuyente recibe un oficio en el que se establece su situación y se le solicita que demuestre la materialidad de las operaciones facturadas.
| "Presunto" | El contribuyente notificado se considera presunto cuando, en su página web, la autoridad emite sus datos dentro de la relación de los EFOS, es decir, en las listas negras del SAT.
| "Desvirtuado" | En este caso, el contribuyente acusado de operaciones inexistentes ya aportó a la autoridad la documentación e información pertinente para desvirtuar los hechos que llevaron a notificarlo.
| "Definitivo" | En este caso, el EFO no atendió el llamado de la autoridad en el plazo de 15 días, a partir de la última notificación; o bien, no pudo desvirtuar los hechos imputados.
| "Sentencia favorable" | Los contribuyentes EFOS “definitivos” que se inconforman e interponen algún medio de defensa, el cual concluye a su favor, son clasificados en la lista de “sentencia favorable”.
| "EFOS de información suprimida" | En esta categoría, se encuentran los EFOS “presuntos” y “definitivos” que presentaron algún medio de defensa (amparo, juicio de nulidad) y, por lo tanto, un juez ordenó suprimir sus datos de la lista, sin ser eliminados.

