### Crear Factura de Nómina

> <h4 class="toc-ignore">Definición</h4>

```text
POST https://www.facturapi.io/v1/invoices
```

> <h4 class="toc-ignore">Ejemplo de Petición</h4>

```shell
curl https://www.facturapi.io/v1/invoices \
  -u "sk_test_API_KEY:" \
  -H "Content-Type: application/json" \
  -d '{
        "type": "N",
        "customer": "58e93bd8e86eb318b0197456",
        "folio_number": 1234,
        "complements": [
          {
            "type": "nomina",
            "data": {
              "tipo_nomina": "O",
              "fecha_pago": "2020-03-12T06:00:00.000Z",
              "fecha_inicial_pago": "2020-02-20T06:00:00.000Z",
              "fecha_final_pago": "2020-03-08T06:00:00.000Z",
              "num_dias_pagados": 15,
              "emisor": {
                "registro_patronal": "B5510768108",
                "rfc_patron_origen": "RCBJ031210A11",
                "entidad_sncf": {
                  "origen_recurso": "IM",
                  "monto_recurso_propio": 5000
                }
              },
              "receptor": {
                "curp": "AABL840215MDFSRS01",
                "num_seguridad_social": "123456789",
                "fecha_inicio_rel_laboral": "2017-07-06T06:00:00.000Z",
                "tipo_contrato": "01",
                "sindicalizado": true,
                "tipo_jornada": "01",
                "tipo_regimen": "02",
                "num_empleado": "120",
                "departamento": "Cobranza",
                "puesto": "Velador",
                "riesgo_puesto": "1",
                "periodicidad_pago": "04",
                "clave_ent_fed": "AGU",
                "banco": "002",
                "cuenta_bancaria": "002215911558451272",
                "sub_contratacion": [
                  {
                    "rfc_labora": "RCBJ031210A13",
                    "porcentaje_tiempo": 45
                  }
                ]
              },
              "percepciones": {
                "percepcion": [
                  {
                    "tipo_percepcion": "001",
                    "clave": "00500",
                    "importe_gravado": 28000,
                    "importe_exento": 1301
                  }
                ]
              },
              "deducciones": [
                {
                  "tipo_deduccion": "001",
                  "clave": "00301",
                  "importe": 200
                }
              ]
            }
          }
        ]
      }'
```

```javascript
const Facturapi = require('facturapi');
const facturapi = new Facturapi('sk_test_API_KEY');
const invoice = await facturapi.invoices.create({
  type: facturapi.InvoiceType.NOMINA, // "N"
  customer: customer.id,
  folio_number: 1234,
  complements: [
    {
      type: 'nomina',
      data: {
        tipo_nomina: 'O',
        fecha_pago: '2020-03-12T06:00:00.000Z',
        fecha_inicial_pago: '2020-02-20T06:00:00.000Z',
        fecha_final_pago: '2020-03-08T06:00:00.000Z',
        num_dias_pagados: 15,
        emisor: {
          registro_patronal: 'B5510768108',
          rfc_patron_origen: 'RCBJ031210A11',
          entidad_sncf: {
            origen_recurso: 'IM',
            monto_recurso_propio: 5000
          }
        },
        receptor: {
          curp: 'AABL840215MDFSRS01',
          num_seguridad_social: '123456789',
          fecha_inicio_rel_laboral: '2017-07-06T06:00:00.000Z',
          tipo_contrato: '01',
          sindicalizado: true,
          tipo_jornada: '01',
          tipo_regimen: '02',
          num_empleado: '120',
          departamento: 'Cobranza',
          puesto: 'Velador',
          riesgo_puesto: '1',
          periodicidad_pago: '04',
          clave_ent_fed: 'AGU',
          banco: '002',
          cuenta_bancaria: '002215911558451272',
          sub_contratacion: [
            { rfc_labora: 'RCBJ031210A13', porcentaje_tiempo: 45 }
          ]
        },
        percepciones: {
          percepcion: [
            {
              tipo_percepcion: '001',
              clave: '00500',
              importe_gravado: 28000,
              importe_exento: 1301
            }
          ]
        },
        deducciones: [
          {
            tipo_deduccion: '001',
            clave: '00301',
            importe: 200
          }
        ]
      }
    }
  ]
});
```

```csharp
var invoice = await facturapi.Invoice.CreateAsync(new Dictionary<string, object>
{
  ["type"] = Facturapi.InvoiceType.NOMINA,
  ["customer"] = customer.Id,
  ["folio_number"] = 1234,
  ["complements"] = new Dictionary<string, object>[]
  {
    new Dictionary<string, object>
    {
      ["type"] = "nomina",
      ["data"] = new Dictionary<string, object>
      {
        ["tipo_nomina"] = "O",
        ["fecha_pago"] = "2020-03-12T06:00:00.000Z",
        ["fecha_inicial_pago"] = "2020-02-20T06:00:00.000Z",
        ["fecha_final_pago"] = "2020-03-08T06:00:00.000Z",
        ["num_dias_pagados"] = 15,
        ["emisor"] = new Dictionary<string, object>
        {
          ["registro_patronal"] = "B5510768108",
          ["rfc_patron_origen"] = "RCBJ031210A11",
          ["entidad_sncf"] = new Dictionary<string, object>
          {
            ["origen_recurso"]: 'IM",
            ["monto_recurso_propio"]: 5000
          }
        },
        ["receptor"] = new Dictionary<string, object>
        {
          ["curp"] = "AABL840215MDFSRS01",
          ["num_seguridad_social"] = "123456789",
          ["fecha_inicio_rel_laboral"] = "2017-07-06T06:00:00.000Z",
          ["tipo_contrato"] = "01",
          ["sindicalizado"] = true,
          ["tipo_jornada"] = "01",
          ["tipo_regimen"] = "02",
          ["num_empleado"] = "120",
          ["departamento"] = "Cobranza",
          ["puesto"] = "Velador",
          ["riesgo_puesto"] = "1",
          ["periodicidad_pago"] = "04",
          ["clave_ent_fed"] = "AGU",
          ["banco"] = "002",
          ["cuenta_bancaria"] = "002215911558451272",
          ["sub_contratacion"] = new Dictionary<string, object>[]
          {
            new Dictionary<string, object>
            {
              ["rfc_labora"] = "RCBJ031210A13",
              ["porcentaje_tiempo"] = 45
            }
          }
        },
        ["percepciones"] = new Dictionary<string, object>
        {
          ["percepcion"] = new Dictionary<string, object>[]
          {
            new Dictionary<string, object>
            {
              ["tipo_percepcion"]: "001",
              ["clave"]: "00500",
              ["importe_gravado"]: 28000,
              ["importe_exento"]: 1301
            }
          }
        },
        ["deducciones"]: new Dictionary<string, object>[]
        {
          new Dictionary<string, object>
          {
            ["tipo_deduccion"]: "001",
            ["clave"]: "00301",
            ["importe"]: 200
          }
        }
      }
    }
  }
});
```

```php
<?php
$facturapi = new Facturapi( "sk_test_Ba8RVx6kL45lKzGOOdejxr0yQEopbmDP" );

$invoice = array(
  "type" => \Facturapi\InvoiceType::NOMINA,
  "customer" => "YOUR_CUSTOMER_ID",
  "folio_number" => 1234,
  "complements" => array(
    array(
      "type" => "nomina",
      "data" => array(
        "tipo_nomina" => "O",
        "fecha_pago" => "2020-03-12T06:00:00.000Z",
        "fecha_inicial_pago" => "2020-02-20T06:00:00.000Z",
        "fecha_final_pago" => "2020-03-08T06:00:00.000Z",
        "num_dias_pagados" => 15,
        "emisor" => array(
          "registro_patronal" => "B5510768108",
          "rfc_patron_origen" => "RCBJ031210A11",
          "entidad_sncf" => array(
            "origen_recurso" => "IM",
            "monto_recurso_propio" => 5000
          )
        ),
        "receptor" => array(
          "curp" => "AABL840215MDFSRS01",
          "num_seguridad_social" => "123456789",
          "fecha_inicio_rel_laboral" => "2017-07-06T06:00:00.000Z",
          "tipo_contrato" => "01",
          "sindicalizado" => true,
          "tipo_jornada" => "01",
          "tipo_regimen" => "02",
          "num_empleado" => "120",
          "departamento" => "Cobranza",
          "puesto" => "Velador",
          "riesgo_puesto" => "1",
          "periodicidad_pago" => "04",
          "clave_ent_fed" => "AGU",
          "banco" => "002",
          "cuenta_bancaria" => "002215911558451272",
          "sub_contratacion" => array(
            array(
              "rfc_labora" => "RCBJ031210A13",
              "porcentaje_tiempo" => 45
            )
          )
        ),
        "percepciones" => array(
          "percepcion" => array(
            array(
              "tipo_percepcion" => "001",
              "clave" => "00500",
              "importe_gravado" => 28000,
              "importe_exento" => 1301
            )
          )
        ),
        "deducciones" => array(
          array(
            "tipo_deduccion" => "001",
            "clave" => "00301",
            "importe" => 200
          )
        )
      )
    )
  )
);

$new_invoice = $facturapi->Invoices->create( $invoice );
```

> <h4 class="toc-ignore">Respuesta JSON</h4>

```json
{
  "id": "5e9b5012ef54550204b68315",
  "created_at": "2020-04-18T19:08:02.714Z",
  "livemode": false,
  "verification_url": "https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=34E5B958-94A0-46CB-975B-3D1ECF540E69&re=ROBJ881103B24&rr=GFA971015267&tt=29101.000000&fe=nVsU0A==",
  "status": "valid",
  "type": "N",
  "cancellation_status": "none",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 29101,
  "uuid": "34E5B958-94A0-46CB-975B-3D1ECF540E69",
  "use": "P01",
  "folio_number": 1235,
  "payment_form": "99",
  "payment_method": "PUE",
  "currency": "MXN",
  "exchange": 1,
  "items": [
    {
      "quantity": 1,
      "discount": 200,
      "product": {
        "description": "Pago de nómina",
        "product_key": "84111505",
        "unit_key": "ACT",
        "unit_name": null,
        "price": 29301,
        "tax_included": false,
        "taxes": []
      }
    }
  ],
  "complements": [
    {
      "_id": "5e9b5012ef54550204b68316",
      "type": "nomina",
      "data": {
        "tipo_nomina": "O",
        "fecha_pago": "2020-03-12T06:00:00.000Z",
        "fecha_inicial_pago": "2020-02-20T06:00:00.000Z",
        "fecha_final_pago": "2020-03-08T06:00:00.000Z",
        "num_dias_pagados": 15,
        "emisor": {
          "registro_patronal": "B5510768108",
          "rfc_patron_origen": "RCBJ031210A11",
          "entidad_sncf": {
            "origen_recurso": "IM",
            "monto_recurso_propio": 5000
          }
        },
        "receptor": {
          "curp": "AABL840215MDFSRS01",
          "num_seguridad_social": "123456789",
          "fecha_inicio_rel_laboral": "2017-07-06T06:00:00.000Z",
          "tipo_contrato": "01",
          "sindicalizado": true,
          "tipo_jornada": "01",
          "tipo_regimen": "02",
          "num_empleado": "120",
          "departamento": "Cobranza",
          "puesto": "Velador",
          "riesgo_puesto": "1",
          "periodicidad_pago": "04",
          "clave_ent_fed": "AGU",
          "banco": "002",
          "cuenta_bancaria": "002215911558451272",
          "sub_contratacion": [
            {
              "rfc_labora": "RCBJ031210A13",
              "porcentaje_tiempo": 45
            }
          ],
          "nombre_banco": "BANAMEX"
        },
        "percepciones": {
          "percepcion": [
            {
              "tipo_percepcion": "001",
              "clave": "00500",
              "importe_gravado": 28000,
              "importe_exento": 1301
            }
          ]
        },
        "deducciones": [
          {
            "tipo_deduccion": "001",
            "clave": "00301",
            "importe": 200
          }
        ]
      }
    }
  ]
}
{
  "id": "58e93bd8e86eb318b019743d",
  "created_at": "2017-03-26T01:49:47.372Z",
  "type": "E",
  "livemode": false,
  "status": "valid",
  "customer": {
    "id": "58e93bd8e86eb318b0197456",
    "legal_name": "Bimbo de México S.A. de C.V.",
    "tax_id": "MESB900314R87"
  },
  "total": 499.50,
  "uuid": "45BEC0CA-5F1E-491E-9417-698EA48C382A",
  "items": [
    {
      "quantity": 1,
      "discount": 0,
      "product": {
        "description": "Devolución de Impresora HP G3700"
      }
    }
  ],
  "related": ["D26CDE56-F5BB-11E7-8C3F-9A214CF093AE"]
}
```

Crea un nuevo comprobante de tipo **Nómina**.

#### Argumentos

Argumento | Tipo | Default | Descripción
---------:|:----:|:-------:| -----------
**type**<br><small>requerido</small> | string | none | Tipo de comprobante. Este valor define qué tipo de factura se va a emitir, por lo que debe tener el valor "N", o la constante `InvoiceType.NOMINA`.
**customer**<br><small>requerido</small> | string or object | none | Receptor de la factura. <br/>`string`: Id del cliente previamente registrado en Facturapi. <br/>`object`: Objeto con la información del cliente, el cual se guardará en tu lista de clientes. Acepta los mismos argumentos detallados en la sección [Crear cliente](#crear-cliente).
**folio_number**<br><small>opcional</small> | integer | Autoincremental | Número de folio asignado por la empresa para control interno. Si se omite, se asignará el valor autoincremental de la organización. Si se envía un valor, este nuevo valor se usará para designar el siguiente número de folio de la organización.
**series**<br><small>opcional</small> | string | none | Serie. De 1 a 25 caracteres designados por la empresa para control interno y sin relevancia fiscal.
**date**<br><small>opcional</small> | date | now | Fecha de expedición del comprobante en formato ISO8601 (UTC String).
**complements**<br><small>requerido</small> | array of objects | none | Arreglo para incluir complementos.
**complements[].type**<br><small>requerido</small> | string | none | Tipo de complemento. Para el complemento de Nómina, debe tener el valor "nomina".
**complements[].data**<br><small>requerido</small> | object | none | Objeto con la información del complemento, cuya estructura puedes consultar más abajo.

#### Complemento de Nómina

Argumento | Tipo | Default | Descripción
:---------|:----:|:-------:| -----------
**tipo_nomina**<br><small>opcional</small> | string | "O" | Tipo de nómina. Puede tener los valores "O" (Ordinaria), cuando corresponde a un pago que se realiza de manera habitual, como sueldos; ó "E" (Extraordinaria) para pagos fuera de lo habitual, como liquidaciones, aguinaldos o bonos.
**fecha_pago**<br><small>opcional</small> | string | Fecha actual | Fecha de pago de la nómina al trabajador. Puede enviarse en 2 formatos:<ul><li>`2021-01-01`: Si se envía sólo la fecha, esta será utilizada tal cual en la factura.</li>`2021-01-01T06:00:00.000Z`<li>Si se envía en formato ISO8601 (UTC String), la fecha plasmada en la factura se transforma de acuerdo a la zona horaria de la organización.</li></ul>
**fecha_inicial_pago**<br><small>requerido</small> | date | none | Fecha inicial del periodo de pago. Puede enviarse en 2 formatos:<ul><li>`2021-01-01`: Si se envía sólo la fecha, esta será utilizada tal cual en la factura.</li>`2021-01-01T06:00:00.000Z`<li>Si se envía en formato ISO8601 (UTC String), la fecha plasmada en la factura se transforma de acuerdo a la zona horaria de la organización.</li></ul>
**fecha_final_pago**<br><small>requerido</small> | date | none | Fecha final del periodo de pago. Puede enviarse en 2 formatos:<ul><li>`2021-01-01`: Si se envía sólo la fecha, esta será utilizada tal cual en la factura.</li>`2021-01-01T06:00:00.000Z`<li>Si se envía en formato ISO8601 (UTC String), la fecha plasmada en la factura se transforma de acuerdo a la zona horaria de la organización.</li></ul>
**num_dias_pagados**<br><small>requerido</small> | decimal | none | Número de días pagados. Puede ser entero o fracción.
**emisor**<br><small>opcional</small> | object | none | Información del emisor que no se registra en el objeto Organización.
**emisor.curp**<br><small>condicional</small> | string | none | Requerido cuando el empleador es persona física. CURP del empleador.
**emisor<br/>&nbsp;&nbsp;.registro_patronal**<br><small>opcional</small> | string | none | Clave de registro patronal asignada por la institución de seguridad social al patrón.
**emisor<br/>&nbsp;&nbsp;.rfc_patron_origen**<br><small>opcional</small> | string | none | RFC de la persona que fungió como patrón. Se usa cuando el pago se realiza a través de un tercero.
**emisor<br/>&nbsp;&nbsp;.entidad_sncf**<br><small>opcional</small> | object | none | Información para que las entidades adheridas al Sistema Nacional de Coordinación Fiscal realicen la identificación del origen de los recursos.
**emisor<br/>&nbsp;&nbsp;.entidad_sncf<br/>&nbsp;&nbsp;.origen_recurso**<br><small>requerido</small> | string | none | Clave de origen de recurso. Puede ser "IP" (Ingresos Propios), "IF" (Ingresos Federales) ó "IM" (Ingresos mixtos).
**emisor<br/>&nbsp;&nbsp;.entidad_sncf<br/>&nbsp;&nbsp;.monto_recurso_propio**<br><small>condicional</small> | decimal | none | Requerido cuando el origen del recurso es por ingresos mixtos. Inporte de recursos propios.
**receptor**<br><small>requerido</small> | object | none | Información del trabajador.
**receptor<br/>&nbsp;&nbsp;.curp**<br><small>requerido</small> | object | string | CURP del trabajador.
**receptor<br/>&nbsp;&nbsp;.num_seguridad_social**<br><small>opcional</small> | string | none | Número de seguridad social.
**receptor<br/>&nbsp;&nbsp;.fecha_inicio_rel_laboral**<br><small>opcional</small> | date | none | Fecha de inicio de la relación laboral entre el empleador y el empleado. Puede enviarse en 2 formatos:<ul><li>`2021-01-01`: Si se envía sólo la fecha, esta será utilizada tal cual en la factura.</li>`2021-01-01T06:00:00.000Z`<li>Si se envía en formato ISO8601 (UTC String), la fecha plasmada en la factura se transforma de acuerdo a la zona horaria de la organización.</li></ul>
**receptor<br/>&nbsp;&nbsp;.antiguedad**<br><small>opcional</small> | string or boolean | calculated | Antigüedad del empleado en el formato especificado por el SAT. Si se envía un `string`, se espera que éste contenga la antigüedad en el formato que especifica el SAT. Si se envía el valor booleano `false`, este campo no se incluirá en la factura. Si se envía el valor booleano `true` y `fecha_inicio_rel_laboral` existe, este valor se calculará con la diferencia entre la fecha de inicio de relación laboral y la fecha de pago. El default es `true` si `fecha_inicio_rel_laboral` existe; de otra forma, el default es `false`.
**receptor<br/>&nbsp;&nbsp;.tipo_contrato**<br><small>requerido</small> | string | none | Clave del catálogo del SAT "Tipo de Contrato" que puedes consultar más abajo.
**receptor<br/>&nbsp;&nbsp;.sindicalizado**<br><small>opcional</small> | boolean | false | Indica si el trabajador está asociado a un sindicato.
**receptor<br/>&nbsp;&nbsp;.tipo_jornada**<br><small>opcional</small> | string | none | Clave del catálogo del SAT "Tipo de Jornada" que puedes consultar más de abajo.
**receptor<br/>&nbsp;&nbsp;.tipo_regimen**<br><small>requerido</small> | string | none | Clave del catálogo del SAT "Tipo de Régimen" que puedes consultar más de abajo.
**receptor<br/>&nbsp;&nbsp;.num_empleado**<br><small>requerido</small> | string | none | Número interno de empleado, asignado por el empleador.
**receptor<br/>&nbsp;&nbsp;.departamento**<br><small>opcional</small> | string | none | Nombre del departamento o área a la que pertenece el trabajador.
**receptor<br/>&nbsp;&nbsp;.puesto**<br><small>opcional</small> | string | none | Nombre del puesto asignado al empleado o el nombre de la actividad que realiza.
**receptor<br/>&nbsp;&nbsp;.riesgo_puesto**<br><small>opcional</small> | string | none | Clave del catálogo del SAT "Riesgo del Puesto" que puedes consultar más de abajo.
**receptor<br/>&nbsp;&nbsp;.periodicidad_pago**<br><small>requerido</small> | string | none | Clave del catálogo del SAT "Periodicidad de Pago" que puedes consultar más de abajo.
**receptor<br/>&nbsp;&nbsp;.banco**<br><small>opcional</small> | string | none | Clave del banco de acuerdo al catálogo del SAT "Bancos" que puedes consultar utilizando nuestra [herramienta de búsqueda](https://www.facturapi.io/dashboard/catalogs/bank).
**receptor<br/>&nbsp;&nbsp;.cuenta_bancaria**<br><small>opcional</small> | string | none | Número de cuenta bancaria (11 caracteres) o número de teléfono celular (10 caracteres) o número de tarjeta (15 ó 16 caracteres) o la CLABE (18 caracteres) o número de monedero electrónico donde se realiza el depósito de nómina.
**receptor<br/>&nbsp;&nbsp;.salario_base_cot_apor**<br><small>opcional</small> | decimal | none | Importe de la retribución en efectivo por cuota diaria, gratificaciones, percepciones, alimentación, habitación, primas, comisiones, prestaciones en especie, etc.
**receptor<br/>&nbsp;&nbsp;.salario_diario_integrado**<br><small>opcional</small> | decimal | none | Salario que se integra con los pagos hechos en efectivo por cuota diaria, gratificaciones, percepciones, habitación, primas, comisiones, prestaciones en especie y cualquier otra cantidad o prestación que se entregue al trabajador por su trabajo.
**receptor<br/>&nbsp;&nbsp;.clave_ent_fed**<br><small>requerido</small> | string | none | Clave de la entidad federativa en donde el trabajador prestó sus servicios al empleador, que puedes consultar utilizando nuestra [herramienta de búsqueda](https://www.facturapi.io/dashboard/catalogs/state).
**receptor<br/>&nbsp;&nbsp;.sub_contratacion**<br><small>opcional</small> | array of objects | none | Arreglo de objetos para expresar información sobre la empresa que se beneficia del trabajo del empleado, en casos donde el emisor preste servicios de subcontratación.
**receptor<br/>&nbsp;&nbsp;.sub_contratacion[]<br/>&nbsp;&nbsp;.rfc_labora**<br><small>requerido</small> | string | none | RFC de la persona o empresa que subcontrata, es decir, de la persona o empresa en donde el trabajador prestó directamente sus servicios.
**receptor<br/>&nbsp;&nbsp;.sub_contratacion[]<br/>&nbsp;&nbsp;.porcentaje_tiempo**<br><small>requerido</small> | decimal | none | Porcentaje de tiempo en que el trabajador prestó sus servicios a la persona o empresa que lo subcontrató. Rango permitido 0.001 - 100.000.
**percepciones**<br><small>opcional</small> | object | none | Objeto para indicar las percepciones aplicables.
**percepciones.percepcion**<br><small>requerido</small> | array of objects | none | Objeto para indicar las percepciones aplicables.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.tipo_percepcion**<br><small>requerido</small> | string | none | Clave del catálogo "Tipo de percepción", que puedes consultar más abajo.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.concepto**<br><small>opcional</small> | string | none | Concepto de la percepción. Si no se envía, se utilizará la descripción del catálogo del tipo de percepción.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.clave**<br><small>requerido</small> | string | none | Clave de control interno que asigna el patrón a cada percepción de nómina propia de su contabilidad, de 3 a 15 caracteres.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.importe_gravado**<br><small>requerido</small> | decimal | none | Importe gravado por el concepto indicado en el tipo de percepción.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.importe_exento**<br><small>requerido</small> | decimal | none | Importe exento por el concepto indicado en el tipo de percepción.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.acciones_o_titulos**<br><small>opcional</small> | object | none | Objeto para expresar ingresos por acciones o títulos valor que representan bienes. Es requerido cuando existan ingresos por sueldos derivados de adquisición de acciones o títulos.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.acciones_o_titulos<br/>&nbsp;&nbsp;.valor_mercado**<br><small>requerido</small> | decimal | none | Valor de mercado de las Acciones o Títulos valor al ejercer la opción.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.acciones_o_titulos<br/>&nbsp;&nbsp;.precio_al_otorgarse**<br><small>requerido</small> | decimal | none | Precio establecido al otorgarse la opción de ingresos en acciones o títulos valor.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.horas_extra**<br><small>opcional</small> | array of objects | none | Arreglo de objetos para expresar las horas extra aplicables. Requerido cuando el tipo de percepción es "019" (Horas extras).
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.horas_extra[]<br/>&nbsp;&nbsp;.dias**<br><small>requerido</small> | integer | none | Número de días en que el trabajador laboró horas extra adicionales a su jornada normal de trabajo.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.horas_extra[]<br/>&nbsp;&nbsp;.tipo_horas**<br><small>requerido</small> | string | none | Clave del catálogo "Tipo de Horas", que puedes consultar más abajo.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.horas_extra[]<br/>&nbsp;&nbsp;.horas_extra**<br><small>requerido</small> | integer | none | Número de horas extra trabajadas en el periodo.
**percepciones<br/>&nbsp;&nbsp;.percepcion[]<br/>&nbsp;&nbsp;.horas_extra[]<br/>&nbsp;&nbsp;.importe_pagado**<br><small>requerido</small> | decimal | none | Importe pagado por las horas extra.
**percepciones<br/>&nbsp;&nbsp;.jubilacion_pension_retiro**<br><small>opcional</small> | object | none | Objeto con información detallada de pagos por jubilación, pensiones o haberes de retiro.
**percepciones<br/>&nbsp;&nbsp;.jubilacion_pension_retiro<br/>&nbsp;&nbsp;.total_una_exhibicion**<br><small>opcional</small> | decimal | none | Monto total del pago entregado en una sola exhibición.
**percepciones<br/>&nbsp;&nbsp;.jubilacion_pension_retiro<br/>&nbsp;&nbsp;.total_parcialidad**<br><small>opcional</small> | decimal | none | Monto total del pago entregado en parcialidades.
**percepciones<br/>&nbsp;&nbsp;.jubilacion_pension_retiro<br/>&nbsp;&nbsp;.monto_diario**<br><small>opcional</small> | decimal | none | Monto diario percibido por el trabajador cuando el pago se realiza en parcialidades.
**percepciones<br/>&nbsp;&nbsp;.jubilacion_pension_retiro<br/>&nbsp;&nbsp;.ingreso_acumulable**<br><small>requerido</small> | decimal | none | Ingresos acumulables percibidos por el trabajador.
**percepciones<br/>&nbsp;&nbsp;.jubilacion_pension_retiro<br/>&nbsp;&nbsp;.ingreso_no_acumulable**<br><small>requerido</small> | decimal | none | Ingresos no acumulables percibidos por el trabajador.
**percepciones<br/>&nbsp;&nbsp;.separacion_indemnizacion**<br><small>opcional</small> | object | none | Objeto con información detallada de pagos por separación (despido) o indemnización.
**percepciones<br/>&nbsp;&nbsp;.separacion_indemnizacion<br/>&nbsp;&nbsp;.total_pagado**<br><small>requerido</small> | decimal | none | Monto total pagado por concepto de separación o indemnización.
**percepciones<br/>&nbsp;&nbsp;.separacion_indemnizacion<br/>&nbsp;&nbsp;.num_anos_servicio**<br><small>requerido</small> | integer | none | Años de servicio que laboró el trabajador, redondeado al entero inmediato superior.
**percepciones<br/>&nbsp;&nbsp;.separacion_indemnizacion<br/>&nbsp;&nbsp;.ultimo_sueldo_mens_ord**<br><small>requerido</small> | decimal | none | Último sueldo mensual ordinario percibido por el trabajador.
**percepciones<br/>&nbsp;&nbsp;.separacion_indemnizacion<br/>&nbsp;&nbsp;.ingreso_acumulable**<br><small>requerido</small> | decimal | none | Monto por ingresos acumulables.
**percepciones<br/>&nbsp;&nbsp;.separacion_indemnizacion<br/>&nbsp;&nbsp;.ingreso_no_acumulable**<br><small>requerido</small> | decimal | none | Monto por ingresos no acumulables.
**deducciones**<br><small>opcional</small> | array of objects | none | Arreglo de objetos donde se expresan las deducciones aplicables.
**deducciones[]<br/>&nbsp;&nbsp;.tipo_deduccion**<br><small>requerido</small> | string | none | Clave del catálogo "Tipo de deducción", que puedes consultar más abajo.
**deducciones[]<br/>&nbsp;&nbsp;.concepto**<br><small>opcional</small> | string | none | Concepto de la deducción. Si no se envía, se utilizará la descripción del catálogo del tipo de deducción.
**deducciones[]<br/>&nbsp;&nbsp;.clave**<br><small>requerido</small> | string | none | Clave de control interno que asigna el patrón a cada deducción (descuento) de nómina propia de su contabilidad. De 3 a 15 caracteres.
**deducciones[]<br/>&nbsp;&nbsp;.importe**<br><small>requerido</small> | decimal | none | Importe del concepto de deducción.
**otros_pagos**<br><small>opcional</small> | array of objects | none | Arreglo de objetos para expresar otros pagos aplicables.
**otros_pagos[]<br/>&nbsp;&nbsp;.tipo_otro_pago**<br><small>requerido</small> | string | none | Clave del catálogo "Tipo de Otro Pago", que puedes consultar más abajo.
**otros_pagos[]<br/>&nbsp;&nbsp;.clave**<br><small>requerido</small> | string | none | Clave de otro pago de nómina propia de la contabilidad de cada patrón. De 3 a 15 caracteres.
**otros_pagos[]<br/>&nbsp;&nbsp;.importe**<br><small>requerido</small> | decimal | none | Importe por concepto de otro pago.
**otros_pagos[]<br/>&nbsp;&nbsp;.subsidio_causado**<br><small>opcional</small> | decimal | none | Subsudio causado conforme a la tabla del subsidio para el empleo publicada en el Anexo 8 de la Resolución Miscelánea Fiscal vigente.
**otros_pagos[]<br/>&nbsp;&nbsp;.compensacion_saldos_a_favor**<br><small>opcional</small> | object | none | Objeto con información referente a la compensación de saldos a favor de un trabajador.
**otros_pagos[]<br/>&nbsp;&nbsp;.compensacion_saldos_a_favor<br/>&nbsp;&nbsp;.saldo_a_favor**<br><small>requerido</small> | decimal | none | Monto por saldo a favor determinado por el patrón al trabajador en periodos o ejercicios anteriores.
**otros_pagos[]<br/>&nbsp;&nbsp;.compensacion_saldos_a_favor<br/>&nbsp;&nbsp;.ano**<br><small>requerido</small> | integer | none | Año en que se determinó el saldo a favor del trabajador.
**otros_pagos[]<br/>&nbsp;&nbsp;.compensacion_saldos_a_favor<br/>&nbsp;&nbsp;.remanente_sal_fav**<br><small>requerido</small> | decimal | none | Remanente del saldo a favor del trabajador.
**incapacidades**<br><small>opcional</small> | array of objects | none | Arreglo de objetos con información de incapacidades.
**incapacidades[]<br/>&nbsp;&nbsp;.dias_incapacidad**<br><small>requerido</small> | integer | none | Número de días enteros que el trabajador se incapacitó en el periodo.
**incapacidades[]<br/>&nbsp;&nbsp;.tipo_incapacidad**<br><small>requerido</small> | string | none | Clave del catálogo "Tipo de Incapacidad", que puedes consultar más abajo.
**incapacidades[]<br/>&nbsp;&nbsp;.importe_monetario**<br><small>opcional</small> | decimal | none | Monto del importe monetario de la incapacidad.


#### Tipo de Contrato

Código | Descripción
:-----:| -----------
"01" | Contrato de trabajo por tiempo indeterminado
"02" | Contrato de trabajo para obra determinada
"03" | Contrato de trabajo por tiempo determinado
"04" | Contrato de trabajo por temporada
"05" | Contrato de trabajo sujeto a prueba
"06" | Contrato de trabajo con capacitación inicial
"07" | Modalidad de contratación por pago de hora laborada
"08" | Modalidad de trabajo por comisión laboral
"09" | Modalidades de contratación donde no existe relación de trabajo
"10" | Jubilación, pensión, retiro.
"99" | Otro contrato

#### Tipo de Jornada

Código | Descripción
:-----:| -----------
"01" | Diurna
"02" | Nocturna
"03" | Mixta
"04" | Por hora
"05" | Reducida
"06" | Continuada
"07" | Partida
"08" | Por turnos
"99" | Otra Jornada

#### Tipo de Régimen

Código | Descripción
:-----:| -----------
"02" | Sueldos (Incluye ingresos señalados en la fracción I del artículo 94 de LISR)
"03" | Jubilados
"04" | Pensionados
"05" | Asimilados Miembros Sociedades Cooperativas Produccion
"06" | Asimilados Integrantes Sociedades Asociaciones Civiles
"07" | Asimilados Miembros consejos
"08" | Asimilados comisionistas
"09" | Asimilados Honorarios
"10" | Asimilados acciones
"11" | Asimilados otros
"12" | Jubilados o Pensionados
"13" | Indemnización o Separación
"99" | Otro Regimen

#### Riesgo del Puesto

Código | Descripción
:-----:| -----------
"1" | Clase I
"2" | Clase II
"3" | Clase III
"4" | Clase IV
"5" | Clase V
"99" | No aplica

#### Periodicidad del Pago

Código | Descripción
:-----:| -----------
"01" | Diario
"02" | Semanal
"03" | Catorcenal
"04" | Quincenal
"05" | Mensual
"06" | Bimestral
"07" | Unidad obra
"08" | Comisión
"09" | Precio alzado
"10" | Decenal
"99" | Otra Periodicidad

#### Tipo de Percepción

Código | Descripción
:-----:| -----------
"001" | Sueldos, Salarios  Rayas y Jornales
"002" | Gratificación Anual (Aguinaldo)
"003" | Participación de los Trabajadores en las Utilidades PTU
"004" | Reembolso de Gastos Médicos Dentales y Hospitalarios
"005" | Fondo de Ahorro
"006" | Caja de ahorro
"009" | Contribuciones a Cargo del Trabajador Pagadas por el Patrón
"010" | Premios por puntualidad
"011" | Prima de Seguro de vida
"012" | Seguro de Gastos Médicos Mayores
"013" | Cuotas Sindicales Pagadas por el Patrón
"014" | Subsidios por incapacidad
"015" | Becas para trabajadores y/o hijos
"019" | Horas extra
"020" | Prima dominical
"021" | Prima vacacional
"022" | Prima por antigüedad
"023" | Pagos por separación
"024" | Seguro de retiro
"025" | Indemnizaciones
"026" | Reembolso por funeral
"027" | Cuotas de seguridad social pagadas por el patrón
"028" | Comisiones
"029" | Vales de despensa
"030" | Vales de restaurante
"031" | Vales de gasolina
"032" | Vales de ropa
"033" | Ayuda para renta
"034" | Ayuda para artículos escolares
"035" | Ayuda para anteojos
"036" | Ayuda para transporte
"037" | Ayuda para gastos de funeral
"038" | Otros ingresos por salarios
"039" | Jubilaciones, pensiones o haberes de retiro
"044" | Jubilaciones, pensiones o haberes de retiro en parcialidades
"045" | Ingresos en acciones o títulos valor que representan bienes
"046" | Ingresos asimilados a salarios
"047" | Alimentación diferentes a los establecidos en el Art 94 último párrafo LISR
"048" | Habitación
"049" | Premios por asistencia
"050" | Viáticos
"051" | Pagos por gratificaciones, primas, compensaciones, recompensas u otros en parcialidades
"052" | Pagos por jubilación en parcialidades derivados de una resolución judicial
"053" | Pagos por jubilación en una sola exhibición derivados de la ejecución de una resolución judicial

#### Tipo de Horas

Código | Descripción
:-----:| -----------
"01" | Dobles
"02" | Triples
"03" | Simples

#### Tipo de Deducción

Código | Descripción
:-----:| -----------
"001" | Seguridad social
"002" | ISR
"003" | Aportaciones a retiro, cesantía en edad avanzada y vejez.
"004" | Otros
"005" | Aportaciones a Fondo de vivienda
"006" | Descuento por incapacidad
"007" | Pensión alimenticia
"008" | Renta
"009" | Préstamos provenientes del Fondo Nacional de la Vivienda para los Trabajadores
"010" | Pago por crédito de vivienda
"011" | Pago de abonos INFONACOT
"012" | Anticipo de salarios
"013" | Pagos hechos con exceso al trabajador
"014" | Errores
"015" | Pérdidas
"016" | Averías
"017" | Adquisición de artículos producidos por la empresa o establecimiento
"018" | Cuotas para la constitución y fomento de sociedades cooperativas y de cajas de ahorro
"019" | Cuotas sindicales
"020" | Ausencia (Ausentismo)
"021" | Cuotas obrero patronales
"022" | Impuestos Locales
"023" | Aportaciones voluntarias
"024" | Ajuste en Gratificación Anual (Aguinaldo) Exento
"025" | Ajuste en Gratificación Anual (Aguinaldo) Gravado
"026" | Ajuste en Participación de los Trabajadores en las Utilidades PTU Exento
"027" | Ajuste en Participación de los Trabajadores en las Utilidades PTU Gravado
"028" | Ajuste en Reembolso de Gastos Médicos Dentales y Hospitalarios Exento
"029" | Ajuste en Fondo de ahorro Exento
"030" | Ajuste en Caja de ahorro Exento
"031" | Ajuste en Contribuciones a Cargo del Trabajador Pagadas por el Patrón Exento
"032" | Ajuste en Premios por puntualidad Gravado
"033" | Ajuste en Prima de Seguro de vida Exento
"034" | Ajuste en Seguro de Gastos Médicos Mayores Exento
"035" | Ajuste en Cuotas Sindicales Pagadas por el Patrón Exento
"036" | Ajuste en Subsidios por incapacidad Exento
"037" | Ajuste en Becas para trabajadores y/o hijos Exento
"038" | Ajuste en Horas extra Exento
"039" | Ajuste en Horas extra Gravado
"040" | Ajuste en Prima dominical Exento
"041" | Ajuste en Prima dominical Gravado
"042" | Ajuste en Prima vacacional Exento
"043" | Ajuste en Prima vacacional Gravado
"044" | Ajuste en Prima por antigüedad Exento
"045" | Ajuste en Prima por antigüedad Gravado
"046" | Ajuste en Pagos por separación Exento
"047" | Ajuste en Pagos por separación Gravado
"048" | Ajuste en Seguro de retiro Exento
"049" | Ajuste en Indemnizaciones Exento
"050" | Ajuste en Indemnizaciones Gravado
"051" | Ajuste en Reembolso por funeral Exento
"052" | Ajuste en Cuotas de seguridad social pagadas por el patrón Exento
"053" | Ajuste en Comisiones Gravado
"054" | Ajuste en Vales de despensa Exento
"055" | Ajuste en Vales de restaurante Exento
"056" | Ajuste en Vales de gasolina Exento
"057" | Ajuste en Vales de ropa Exento
"058" | Ajuste en Ayuda para renta Exento
"059" | Ajuste en Ayuda para artículos escolares Exento
"060" | Ajuste en Ayuda para anteojos Exento
"061" | Ajuste en Ayuda para transporte Exento
"062" | Ajuste en Ayuda para gastos de funeral Exento
"063" | Ajuste en Otros ingresos por salarios Exento
"064" | Ajuste en Otros ingresos por salarios Gravado
"065" | Ajuste en Jubilaciones, pensiones o haberes de retiro en una sola exhibición Exento
"066" | Ajuste en Jubilaciones, pensiones o haberes de retiro en una sola exhibición Gravado
"067" | Ajuste en Pagos por separación Acumulable
"068" | Ajuste en Pagos por separación No acumulable
"069" | Ajuste en Jubilaciones, pensiones o haberes de retiro en parcialidades Exento
"070" | Ajuste en Jubilaciones, pensiones o haberes de retiro en parcialidades Gravado
"071" | Ajuste en Subsidio para el empleo (efectivamente entregado al trabajador)
"072" | Ajuste en Ingresos en acciones o títulos valor que representan bienes Exento
"073" | Ajuste en Ingresos en acciones o títulos valor que representan bienes Gravado
"074" | Ajuste en Alimentación Exento
"075" | Ajuste en Alimentación Gravado
"076" | Ajuste en Habitación Exento
"077" | Ajuste en Habitación Gravado
"078" | Ajuste en Premios por asistencia
"079" | Ajuste en Pagos distintos a los listados
"080" | Ajuste en Viáticos gravados
"081" | Ajuste en Viáticos (entregados al trabajador)
"082" | Ajuste en Fondo de ahorro Gravado
"083" | Ajuste en Caja de ahorro Gravado
"084" | Ajuste en Prima de Seguro de vida Gravado
"085" | Ajuste en Seguro de Gastos Médicos Mayores Gravado
"086" | Ajuste en Subsidios por incapacidad Gravado
"087" | Ajuste en Becas para trabajadores y/o hijos Gravado
"088" | Ajuste en Seguro de retiro Gravado
"089" | Ajuste en Vales de despensa Gravado
"090" | Ajuste en Vales de restaurante Gravado
"091" | Ajuste en Vales de gasolina Gravado
"092" | Ajuste en Vales de ropa Gravado
"093" | Ajuste en Ayuda para renta Gravado
"094" | Ajuste en Ayuda para artículos escolares Gravado
"095" | Ajuste en Ayuda para anteojos Gravado
"096" | Ajuste en Ayuda para transporte Gravado
"097" | Ajuste en Ayuda para gastos de funeral Gravado
"098" | Ajuste a ingresos asimilados a salarios gravados
"099" | Ajuste a ingresos por sueldos y salarios gravados
"100" | Ajuste en Viáticos exentos
"101" | ISR Retenido de ejercicio anterior
"102" | Ajuste a pagos por gratificaciones, primas, compensaciones, recompensas u otros
"103" | Ajuste a pagos en parcialidades derivados de una resolución judicial gravados
"104" | Ajuste a pagos en parcialidades derivados de una resolución judicial exentos
"105" | Ajuste a pagos en una sola exhibición derivados de una resolución judicial gravados
"106" | Ajuste a pagos en una sola exhibición derivados de una resolución judicial exentos
"107" | Ajuste al Subsidio Causado

#### Tipo de Otro Pago

Código | Descripción
:-----:| -----------
"001" | Reintegro de ISR pagado en exceso.
"002" | Subsidio para el empleo (efectivamente entregado al trabajador).
"003" | Viáticos (entregados al trabajador).
"004" | Aplicación de saldo a favor por compensación anual.
"005" | Reintegro de ISR retenido en exceso de ejercicio anterior
"006" | Alimentos en bienes (Servicios de comedor y comida).
"007" | ISR ajustado por subsidio.
"008" | Subsidio efectivamente entregado que no correspondía.
"009" | Reembolso de descuentos efectuados para el crédito de vivienda.
"999" | Pagos distintos a los listados.

#### Tipo de Incapacidad

Código | Descripción
:-----:| -----------
"01" | Riesgo de trabajo.
"02" | Enfermedad en general.
"03" | Maternidad.
"04" | Licencia por cuidados médicos de hijos diagnosticados con cáncer.