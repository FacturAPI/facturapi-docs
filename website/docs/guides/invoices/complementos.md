---
sidebar_position: 7
---

# Complementos

Actualmente, FacturAPI soporta la emisión de todos los tipos de CFDI que existen así como todos los complementos del SAT. Puedes ver cómo cear los diferentes tipos de comprobantes en la referencia de [Crear Factura](/api#operation/createInvoice) y [Crear Retención](/api#operation/createRetention)

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
        "type": "custom",
        "data": "<cartaporte31:CartaPorte Version=\"3.1\" IdCCP=\"CCCa01c6-61bf-4058-b874-c285dad794fe\" TranspInternac=\"Sí\" EntradaSalidaMerc=\"Salida\" PaisOrigenDestino=\"USA\" ViaEntradaSalida=\"01\" TotalDistRec=\"160.0\"><cartaporte31:Ubicaciones><cartaporte31:Ubicacion TipoUbicacion=\"Origen\" IDUbicacion=\"OR000000\" RFCRemitenteDestinatario=\"XEXX010101000\" NumRegIdTrib=\"01010101\" NombreRemitenteDestinatario=\"INTERNATIONAL CUSTOMER\" FechaHoraSalidaLlegada=\"2024-12-17T05:00:00\"><cartaporte31:Domicilio Calle=\"Carretera Dolores Hidalgo A San Luis De La Paz\" NumeroExterior=\"SINNUMERO\" Municipio=\"014\" Estado=\"GUA\" Pais=\"USA\" CodigoPostal=\"N/A\" /></cartaporte31:Ubicacion><cartaporte31:Ubicacion DistanciaRecorrida=\"160.0\" TipoUbicacion=\"Destino\" IDUbicacion=\"DE000001\" RFCRemitenteDestinatario=\"XEXX010101000\" NumRegIdTrib=\"01010101\" NombreRemitenteDestinatario=\"INTERNATIONAL CUSTOMER\" FechaHoraSalidaLlegada=\"2024-12-18T09:00:00\"><cartaporte31:Domicilio Calle=\"1400 W Hi Line Rd\" Municipio=\"015\" Estado=\"SLP\" Pais=\"USA\" CodigoPostal=\"N/A\" /></cartaporte31:Ubicacion></cartaporte31:Ubicaciones><cartaporte31:Mercancias PesoBrutoTotal=\"1.0\" UnidadPeso=\"XBX\" NumTotalMercancias=\"1\"><cartaporte31:Mercancia BienesTransp=\"52161512\" Descripcion=\"Altoparlantes\" Cantidad=\"1\" ClaveUnidad=\"H87\" PesoEnKg=\"1.0\"></cartaporte31:Mercancia><cartaporte31:Autotransporte PermSCT=\"TPXX00\" NumPermisoSCT=\"Permiso no contemplado en el catálogo\"><cartaporte31:IdentificacionVehicular ConfigVehicular=\"VL\" PesoBrutoVehicular=\"1\" PlacaVM=\"JHY7766\" AnioModeloVM=\"2021\" /><cartaporte31:Seguros AseguraRespCivil=\"No Cuenta\" PolizaRespCivil=\"No Cuenta\" /></cartaporte31:Autotransporte></cartaporte31:Mercancias><cartaporte31:FiguraTransporte><cartaporte31:TiposFigura TipoFigura=\"01\" NombreFigura=\"DUNDLER LUNA\" RFCFigura=\"XEXX010101000\" NumLicencia=\"DSADSADSA\" /></cartaporte31:FiguraTransporte></cartaporte31:CartaPorte>"
      }
    ],
    "pdf_custom_section": "<h3>Complemento Carta Porte</h3><br><table><thead><th>Transporte Internacional</th><th>Tipo de Transporte Internacional</th><th>Vía de Transporte Internacional</th><th>País de Origen o Destino</th><th>Total distancia recorrida</th></tr></thead><tbody><tr><td>No</td><td></td><td></td><td></td><td></td></tr></tbody></table><br><br><table><thead><tr><th>Detalle del Transporte</th></tr><tr><th>Permiso SCT</th><th>Número de Permiso SCT</th><th>Configuración Vehicular / Tipo de remolque</th><th>Placa</th><th>Año</th></tr></thead><tbody><tr><td>TPAF09 - Transporte privado de carga.</td><td>000000</td><td>C2 - Camión Unitario (2 llantas en el eje delantero y 4 llantas en el eje trasero)</td><td>HB2712P</td><td>2018</td></tr></tbody></table><br><table><thead><tr><th>Aseguradora responsabilidad civil</th><th>Póliza responsabilidad civil</th><th>Aseguradora medio ambiente</th><th>Póliza medio ambiente</th><th>Aseguradora carga</th><th>Póliza carga</th><th>Prima seguro</th></tr></thead><tbody><tr><td>SEGURIMEX SEGUROS</td><td>3-693750-71</td><td>HDK SEGUROS</td><td>10782483</td><td></td><td></td><td></td></tr></tbody></table><br><br><table><thead><tr><th>Origen / Destino</th></tr><tr><th></th><th>RFC</th><th>Nombre</th><th>Fecha de Salida o Llegada</th><th>Domicilio</th><th>Distancia Recorrida</th></tr></thead><tbody><tr><td>Origen</td><td>ABC123456789</td><td>Gasera Nacional S.A. DE C.V.</td><td>2023-09-05T07:38:36</td><td>Av. Francisco I. Madero No. 304, Central de Abastos, C.P. 37494, León de los Aldama, Guanajuato, México</td><td></td></tr><tr><td>Destino</td><td>ABC123456789</td><td>Gasera Nacional S.A. DE C.V.</td><td>2023-09-05T23:59:00</td><td>Los Robledos No. 14, Zona Centro, 36503, IRAPUATO, IRAPUATO, GUA</td><td>69.80</td></tr></tbody></table><br><br><table><thead><tr><th>Figuras de Trasporte</th></tr><tr><th></th><th>RFC</th><th>Nombre</th><th>Licencia</th><th>Domicilio</th></tr></thead><tbody><tr><td>01 - Operador</td><td>PERE120817836</td><td>PEREZ RENTERIA EUSEBIO ADOLFO</td><td>BT5648</td><td>HIDALGO 314, 37260, León, León</td></tr></tbody></table><br><br><table><thead><tr><th>Mercancía</th></tr><tr><th>Cantidad</th><th>Unidad</th><th>Clave Producto/Servicio</th><th>Tipo Material Peligroso</th><th>Embalaje</th><th>Peso Kg</th><th>Valor Mercancía</th></tr></thead><tbody><tr><td>2250.00</td><td>LTR - LITROS</td><td>15111510 - Gas licuado de petróleo</td><td>1075 - GASES LICUADOS DEL PETROLEO</td><td>Z01 - No aplica</td><td>1297.92</td><td>22339.2000</td></tr></tbody></table>"
}
```

:::tip
Al insertar un complemento, nosotros lo agregaremos al xml en el momento del timbrado; debido a que el SAT no requiere que la información de todos los complementos se imprima en el pdf, solo aparecerá en el xml. Si requieres que determinada información del complemento se agregue al pdf, puedes utilizar pdf_custom_section.
:::
