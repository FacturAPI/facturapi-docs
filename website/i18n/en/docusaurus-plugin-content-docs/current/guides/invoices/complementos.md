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
        "data": "<cartaporte31:CartaPorte Version=\"3.1\" IdCCP=\"CCCa01c6-61bf-4058-b874-c285dad794fe\" TranspInternac=\"Sí\" EntradaSalidaMerc=\"Salida\" PaisOrigenDestino=\"USA\" ViaEntradaSalida=\"01\" TotalDistRec=\"160.0\"><cartaporte31:Ubicaciones><cartaporte31:Ubicacion TipoUbicacion=\"Origen\" IDUbicacion=\"OR000000\" RFCRemitenteDestinatario=\"XEXX010101000\" NumRegIdTrib=\"01010101\" NombreRemitenteDestinatario=\"INTERNATIONAL CUSTOMER\" FechaHoraSalidaLlegada=\"2024-12-17T05:00:00\"><cartaporte31:Domicilio Calle=\"Carretera Dolores Hidalgo A San Luis De La Paz\" NumeroExterior=\"SINNUMERO\" Municipio=\"014\" Estado=\"GUA\" Pais=\"USA\" CodigoPostal=\"N/A\" /></cartaporte31:Ubicacion><cartaporte31:Ubicacion DistanciaRecorrida=\"160.0\" TipoUbicacion=\"Destino\" IDUbicacion=\"DE000001\" RFCRemitenteDestinatario=\"XEXX010101000\" NumRegIdTrib=\"01010101\" NombreRemitenteDestinatario=\"INTERNATIONAL CUSTOMER\" FechaHoraSalidaLlegada=\"2024-12-18T09:00:00\"><cartaporte31:Domicilio Calle=\"1400 W Hi Line Rd\" Municipio=\"015\" Estado=\"SLP\" Pais=\"USA\" CodigoPostal=\"N/A\" /></cartaporte31:Ubicacion></cartaporte31:Ubicaciones><cartaporte31:Mercancias PesoBrutoTotal=\"1.0\" UnidadPeso=\"XBX\" NumTotalMercancias=\"1\"><cartaporte31:Mercancia BienesTransp=\"52161512\" Descripcion=\"Altoparlantes\" Cantidad=\"1\" ClaveUnidad=\"H87\" PesoEnKg=\"1.0\"></cartaporte31:Mercancia><cartaporte31:Autotransporte PermSCT=\"TPXX00\" NumPermisoSCT=\"Permiso no contemplado en el catálogo\"><cartaporte31:IdentificacionVehicular ConfigVehicular=\"VL\" PesoBrutoVehicular=\"1\" PlacaVM=\"PLC7766\" AnioModeloVM=\"2021\" /><cartaporte31:Seguros AseguraRespCivil=\"No Cuenta\" PolizaRespCivil=\"No Cuenta\" /></cartaporte31:Autotransporte></cartaporte31:Mercancias><cartaporte31:FiguraTransporte><cartaporte31:TiposFigura TipoFigura=\"01\" NombreFigura=\"DUNDLER LUNA\" RFCFigura=\"XEXX010101000\" NumLicencia=\"DSADSADSA\" /></cartaporte31:FiguraTransporte></cartaporte31:CartaPorte>"
      }
    ]
}
```

:::tip
When inserting a complement, we will add it to the XML at the time of stamping; since the SAT does not require that the information of all the complements be printed on the PDF, it will only appear in the XML. If you need certain information from the complement to be added to the PDF, you can use the `pdf_custom_section` field.
:::
