---
sidebar_position: 7
---

# Complements

Currently, FacturAPI supports the issuance of all types of CFDI as well as all
SAT add-ons or complements. You can see how to create different types of CFDI
documents in the [Create Invoice](/api#tag/invoice/operation/createInvoice) and
[Create Retention](/api#tag/retention/operation/createRetention) references.

:::note
You can insert any complement by adding the corresponding XML in the
"complements" node of your CFDI.
:::

Below you will find an example of how to insert an add-on to an invoice, in this
case, it is a Traslado (Transfer) CFDI with a Carta Porte complement:

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
        "data": "<cartaporte20:CartaPorte Version=\"2.0\" TranspInternac=\"No\" TotalDistRec=\"69.80\">  <cartaporte20:Ubicaciones>    <cartaporte20:Ubicacion TipoUbicacion=\"Origen\" RFCRemitenteDestinatario=\"ABC010101A19\" NombreRemitenteDestinatario=\"GASERA NACIONAL S.A. DE C.V.\" FechaHoraSalidaLlegada=\"2023-09-05T07:38:36\">      <cartaporte20:Domicilio Calle=\"Av. Francisco I. Madero\" NumeroExterior=\"304\" Colonia=\"1630\" Localidad=\"07\" Municipio=\"020\" Estado=\"GUA\" Pais=\"MEX\" CodigoPostal=\"37494\"/>    </cartaporte20:Ubicacion>    <cartaporte20:Ubicacion TipoUbicacion=\"Destino\" RFCRemitenteDestinatario=\"ABC010101A19\" NombreRemitenteDestinatario=\"GASERA NACIONAL S.A. DE C.V.\" FechaHoraSalidaLlegada=\"2023-09-05T23:59:00\" DistanciaRecorrida=\"69.80\">      <cartaporte20:Domicilio Calle=\"Los Robledos\" NumeroExterior=\"114\" Colonia=\"0366\" Localidad=\"06\" Municipio=\"017\" Estado=\"GUA\" Pais=\"MEX\" CodigoPostal=\"36503\"/>    </cartaporte20:Ubicacion>  </cartaporte20:Ubicaciones>  <cartaporte20:Mercancias PesoBrutoTotal=\"1297.92\" UnidadPeso=\"KGM\" NumTotalMercancias=\"1\">    <cartaporte20:Mercancia BienesTransp=\"15111510\" Descripcion=\"GAS LP CARBURACION\" Cantidad=\"2250.00\" ClaveUnidad=\"LTR\" Unidad=\"LITROS\" MaterialPeligroso=\"Sí\" CveMaterialPeligroso=\"1075\" Embalaje=\"Z01\" DescripEmbalaje=\"No aplica\" PesoEnKg=\"1297.92\" ValorMercancia=\"22339.2000\" Moneda=\"MXN\"/>    <cartaporte20:Autotransporte PermSCT=\"TPAF09\" NumPermisoSCT=\"000000\">      <cartaporte20:IdentificacionVehicular ConfigVehicular=\"C2\" PlacaVM=\"HB2712P\" AnioModeloVM=\"2018\"/>      <cartaporte20:Seguros AseguraRespCivil=\"SEGURIMEX SEGUROS\" PolizaRespCivil=\"3-693750-71\" AseguraMedAmbiente=\"HDK SEGUROS\" PolizaMedAmbiente=\"10782483\"/>    </cartaporte20:Autotransporte>  </cartaporte20:Mercancias>  <cartaporte20:FiguraTransporte>    <cartaporte20:TiposFigura TipoFigura=\"01\" RFCFigura=\"PERE120817836\" NombreFigura=\"PEREZ RENTERIA EUSEBIO ADOLFO\" NumLicencia=\"BT5648\"/>  </cartaporte20:FiguraTransporte></cartaporte20:CartaPorte>"
      }
    ],
    "pdf_custom_section": "<h3>Complemento Carta Porte</h3><br><table><thead><th>Transporte Internacional</th><th>Tipo de Transporte Internacional</th><th>Vía de Transporte Internacional</th><th>País de Origen o Destino</th><th>Total distancia recorrida</th></tr></thead><tbody><tr><td>No</td><td></td><td></td><td></td><td></td></tr></tbody></table><br><br><table><thead><tr><th>Detalle del Transporte</th></tr><tr><th>Permiso SCT</th><th>Número de Permiso SCT</th><th>Configuración Vehicular / Tipo de remolque</th><th>Placa</th><th>Año</th></tr></thead><tbody><tr><td>TPAF09 - Transporte privado de carga.</td><td>000000</td><td>C2 - Camión Unitario (2 llantas en el eje delantero y 4 llantas en el eje trasero)</td><td>HB2712P</td><td>2018</td></tr></tbody></table><br><table><thead><tr><th>Aseguradora responsabilidad civil</th><th>Póliza responsabilidad civil</th><th>Aseguradora medio ambiente</th><th>Póliza medio ambiente</th><th>Aseguradora carga</th><th>Póliza carga</th><th>Prima seguro</th></tr></thead><tbody><tr><td>SEGURIMEX SEGUROS</td><td>3-693750-71</td><td>HDK SEGUROS</td><td>10782483</td><td></td><td></td><td></td></tr></tbody></table><br><br><table><thead><tr><th>Origen / Destino</th></tr><tr><th></th><th>RFC</th><th>Nombre</th><th>Fecha de Salida o Llegada</th><th>Domicilio</th><th>Distancia Recorrida</th></tr></thead><tbody><tr><td>Origen</td><td>ABC123456789</td><td>Gasera Nacional S.A. DE C.V.</td><td>2023-09-05T07:38:36</td><td>Av. Francisco I. Madero No. 304, Central de Abastos, C.P. 37494, León de los Aldama, Guanajuato, México</td><td></td></tr><tr><td>Destino</td><td>ABC123456789</td><td>Gasera Nacional S.A. DE C.V.</td><td>2023-09-05T23:59:00</td><td>Los Robledos No. 14, Zona Centro, 36503, IRAPUATO, IRAPUATO, GUA</td><td>69.80</td></tr></tbody></table><br><br><table><thead><tr><th>Figuras de Trasporte</th></tr><tr><th></th><th>RFC</th><th>Nombre</th><th>Licencia</th><th>Domicilio</th></tr></thead><tbody><tr><td>01 - Operador</td><td>PERE120817836</td><td>PEREZ RENTERIA EUSEBIO ADOLFO</td><td>BT5648</td><td>HIDALGO 314, 37260, León, León</td></tr></tbody></table><br><br><table><thead><tr><th>Mercancía</th></tr><tr><th>Cantidad</th><th>Unidad</th><th>Clave Producto/Servicio</th><th>Tipo Material Peligroso</th><th>Embalaje</th><th>Peso Kg</th><th>Valor Mercancía</th></tr></thead><tbody><tr><td>2250.00</td><td>LTR - LITROS</td><td>15111510 - Gas licuado de petróleo</td><td>1075 - GASES LICUADOS DEL PETROLEO</td><td>Z01 - No aplica</td><td>1297.92</td><td>22339.2000</td></tr></tbody></table>"
}
```

:::tip
When inserting a complement, we will add it to the XML at the time of stamping; since the SAT does not require that the information of all the complements be printed on the PDF, it will only appear in the XML. If you need certain information from the complement to be added to the PDF, you can use the `pdf_custom_section` field.
:::
