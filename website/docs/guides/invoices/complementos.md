---
sidebar_position: 7
---

# Complementos

Actualmente, FacturAPI soporta la emisión de todos los tipos de CFDI que existen así como todos los complementos del SAT. Puedes ver cómo cear los diferentes tipos de comprobantes en la referencia de [Crear Factura](/api#tag/invoice/operation/createInvoice) y [Crear Retención](/api#tag/retention/operation/createRetention)

:::note

Puedes insertar cualquier complemento agregando el XML correspondiente en el nodo “complements” de tus CFDI.

:::

A continuación encontrarás un ejemplo de cómo insertar un complemento a una factura, en este caso se trata de un CFDI de traslado con complemento Carta Porte:

```
{
    "type": "T",
    "customer": {
      "legal_name": "GASERA NACIONAL",
      "tax_id": "ABC010101A19",
      "tax_system": "601",
      "address": {
        "country": "MEX",
        "zip": "06123"
      }
    },
    "items": [
      {
        "quantity": 2496,
        "product": {
          "description": "Gas licuado de petróleo",
          "product_key": "15111510",
          "unit_key": "LTR",
          "unit_name": "Litro",
          "price": 0,
          "taxes": []
        }
      }
    ],
    "complements": [
      {
        "type": "carta_porte",
        "data": {
          "IdCCP": "CCC9CADE-7CC8-4E99-BA0A-0C229FC248E5",
          "TranspInternac": "Sí",
          "EntradaSalidaMerc": "Entrada",
          "PaisOrigenDestino": "MEX",
          "ViaEntradaSalida": "04",
          "TotalDistRec": 233,
          "RegistroISTMO": "Sí",
          "UbicacionPoloOrigen": "04",
          "UbicacionPoloDestino": "06",
          "RegimenesAduaneros": {
            "RegimenAduaneroCCP": [
              {
                "RegimenAduanero": "IMD"
              }
            ]
          },
          "Ubicaciones": [
            {
              "TipoUbicacion": "Origen",
              "RFCRemitenteDestinatario": "LAVM8805193FA",
              "NombreRemitenteDestinatario": "GRUPO GM TRANSPORT  S.A. DE C.V. DE R.L.",
              "NumEstacion": "Q0736",
              "NombreEstacion": "SANTO NINO",
              "FechaHoraSalidaLlegada": "2021-11-03T06:15:23",
              "TipoEstacion": "01",
              "Domicilio": {
                "Calle": "241 SEVILLA AVE",
                "NumeroExterior": "123",
                "NumeroInterior": "123",
                "Colonia": "0552",
                "Localidad": "07",
                "Municipio": "030",
                "Estado": "SON",
                "Pais": "MEX",
                "CodigoPostal": "83214"
              }
            },
            {
              "TipoUbicacion": "Destino",
              "RFCRemitenteDestinatario": "LAVM8805193FA",
              "NombreRemitenteDestinatario": "WH MANAGEMENT MEXICO",
              "NumEstacion": "TI032",
              "NombreEstacion": "NAVOLATO",
              "FechaHoraSalidaLlegada": "2021-11-03T06:15:23",
              "DistanciaRecorrida": 100,
              "TipoEstacion": "03",
              "Domicilio": {
                "Calle": "LA ESCONDIDA",
                "Colonia": "1741",
                "Localidad": "02",
                "Municipio": "002",
                "Estado": "BCN",
                "Pais": "MEX",
                "CodigoPostal": "21325"
              }
            },
            {
              "TipoUbicacion": "Destino",
              "RFCRemitenteDestinatario": "LAVM8805193FA",
              "NombreRemitenteDestinatario": "WH MANAGEMENT MEXICO",
              "NumEstacion": "S0165",
              "NombreEstacion": "HUAMANTLA",
              "FechaHoraSalidaLlegada": "2021-11-03T06:15:23",
              "DistanciaRecorrida": 50,
              "TipoEstacion": "03",
              "Domicilio": {
                "Calle": "LA ESCONDIDA",
                "Colonia": "1741",
                "Localidad": "02",
                "Municipio": "002",
                "Estado": "BCN",
                "Pais": "MEX",
                "CodigoPostal": "21325"
              }
            },
            {
              "TipoUbicacion": "Destino",
              "RFCRemitenteDestinatario": "LAVM8805193FA",
              "NombreRemitenteDestinatario": "WH MANAGEMENT MEXICO",
              "NumEstacion": "S0165",
              "NombreEstacion": "HUAMANTLA",
              "FechaHoraSalidaLlegada": "2021-11-03T06:15:23",
              "DistanciaRecorrida": 50,
              "TipoEstacion": "03",
              "Domicilio": {
                "Calle": "LA ESCONDIDA",
                "Colonia": "1741",
                "Localidad": "02",
                "Municipio": "002",
                "Estado": "BCN",
                "Pais": "MEX",
                "CodigoPostal": "21325"
              }
            },
            {
              "TipoUbicacion": "Destino",
              "RFCRemitenteDestinatario": "LAVM8805193FA",
              "NombreRemitenteDestinatario": "WH MANAGEMENT MEXICO",
              "NumEstacion": "Q0708",
              "NombreEstacion": "TEMORIS",
              "FechaHoraSalidaLlegada": "2021-11-03T06:15:23",
              "DistanciaRecorrida": 30,
              "TipoEstacion": "03",
              "Domicilio": {
                "Calle": "LA ESCONDIDA",
                "Colonia": "1741",
                "Localidad": "02",
                "Municipio": "002",
                "Estado": "BCN",
                "Pais": "MEX",
                "CodigoPostal": "21325"
              }
            },
            {
              "TipoUbicacion": "Destino",
              "RFCRemitenteDestinatario": "LAVM8805193FA",
              "NombreRemitenteDestinatario": "WH MANAGEMENT MEXICO",
              "NumEstacion": "A0830",
              "NombreEstacion": "CEDRO",
              "FechaHoraSalidaLlegada": "2021-11-03T06:15:23",
              "DistanciaRecorrida": 3,
              "TipoEstacion": "03",
              "Domicilio": {
                "Calle": "LA ESCONDIDA",
                "Colonia": "1741",
                "Localidad": "02",
                "Municipio": "002",
                "Estado": "BCN",
                "Pais": "MEX",
                "CodigoPostal": "21325"
              }
            }
          ],
          "Mercancias": {
            "PesoBrutoTotal": 16200,
            "UnidadPeso": "X44",
            "PesoNetoTotal": 7000,
            "NumTotalMercancias": 2,
            "CargoPorTasacion": 2100.00,
            "Mercancia": [
              {
                "BienesTransp": "25101505",
                "Descripcion": "Minivan roja",
                "Cantidad": 1.003,
                "ClaveUnidad": "XVN",
                "Unidad": "Vehiculo",
                "PesoEnKg": 16000,
                "ValorMercancia": 900000.00,
                "Moneda": "MXN",
                "FraccionArancelaria": "0102399900",
                "TipoMateria": "04",
                "DocumentacionAduanera": [
                  {
                    "TipoDocumento": "01",
                    "NumPedimento": "23  01  3173  3999999",
                    "RFCImpo": "PPD101129EA3"
                  }
                ]
              },
              {
                "BienesTransp": "25101505",
                "Descripcion": "Minivan roja",
                "Cantidad": 1.003,
                "ClaveUnidad": "XVN",
                "Unidad": "Vehiculo",
                "PesoEnKg": 200,
                "ValorMercancia": 900000.00,
                "Moneda": "MXN",
                "FraccionArancelaria": "0102399900",
                "TipoMateria": "04",
                "DocumentacionAduanera": [
                  {
                    "TipoDocumento": "01",
                    "NumPedimento": "23  01  3173  3999999",
                    "RFCImpo": "PPD101129EA3"
                  }
                ],
                "GuiasIdentificacion": [
                  {
                    "NumeroGuiaIdentificacion": "ABC232uewqj",
                    "DescripGuiaIdentificacion": "Guia 1",
                    "PesoGuiaIdentificacion": 254435
                  },
                  {
                    "NumeroGuiaIdentificacion": "347308lkuh",
                    "DescripGuiaIdentificacion": "Guia 2",
                    "PesoGuiaIdentificacion": 654645
                  }
                ]
              }
            ],
            "TransporteFerroviario": {
              "TipoDeServicio": "TS01",
              "TipoDeTrafico": "TT02",
              "NombreAseg": "Qualitas Ferroviarias Inventado SA DE CV",
              "NumPolizaSeguro": "123456789012345678901234567890",
              "DerechosDePaso": [
                {
                  "TipoDerechoDePaso": "CDP001",
                  "KilometrajePagado": 123.45
                },
                {
                  "TipoDerechoDePaso": "CDP001",
                  "KilometrajePagado": 123.45
                }
              ],
              "Carro": [
                {
                  "TipoCarro": "TC06",
                  "MatriculaCarro": "ABC123",
                  "GuiaCarro": "123456789012345",
                  "ToneladasNetasCarro": 3
                },
                {
                  "TipoCarro": "TC06",
                  "MatriculaCarro": "ABC123",
                  "GuiaCarro": "123456789012345",
                  "ToneladasNetasCarro": 3
                },
                {
                  "TipoCarro": "TC06",
                  "MatriculaCarro": "ABC123",
                  "GuiaCarro": "123456789012345",
                  "ToneladasNetasCarro": 1
                }
              ]
            }
          },
          "FiguraTransporte": [
            {
              "TipoFigura": "01",
              "RFCFigura": "LAVM8805193FA",
              "NumLicencia": "1BC45C96A73",
              "NombreFigura": "EXTRA TRAYECTO OPERADOR",
              "Domicilio": {
                "Calle": "LA ESCONDIDA",
                "Colonia": "1741",
                "Localidad": "02",
                "Municipio": "002",
                "Estado": "BCN",
                "Pais": "MEX",
                "CodigoPostal": "21325"
              }
            }
          ]
        }
      }
    ]
}
```

:::tip
Al insertar un complemento, nosotros lo agregaremos al xml en el momento del timbrado; debido a que el SAT no requiere que la información de todos los complementos se imprima en el pdf, solo aparecerá en el xml. Si requieres que determinada información del complemento se agregue al pdf, puedes utilizar pdf_custom_section.
:::
