module.exports = function preparePresentation(source, locale) {
  const spec = structuredClone(source);
  // Presentation labels do not change the downloadable API contract.
  spec.components.schemas.InvoiceCustomerInput.oneOf = [
    {
      ...spec.components.schemas.CustomerCreateInput,
      title: locale === "es" ? "Datos del cliente" : "Customer details",
      anyOf: spec.components.schemas.CustomerCreateInput.anyOf.map(
        (variant, index) => ({
          ...variant,
          title: (locale === "es"
            ? ["Nacional", "Extranjero", "Público en general"]
            : ["Mexican customer", "Foreign customer", "General public"])[
            index
          ],
        }),
      ),
    },
    {
      ...spec.components.schemas.InvoiceCustomerInput.oneOf[1],
      title: locale === "es" ? "Cliente registrado" : "Registered customer",
    },
  ];
  spec.components.schemas.InvoiceCommonInput.allOf[0].properties.customer = {
    ...spec.components.schemas.InvoiceCustomerInput,
    description:
      locale === "es"
        ? "Datos del cliente o ID de un cliente registrado."
        : "Customer details or the ID of a registered customer.",
  };
  spec.components.schemas.InvoiceDraftCommonInput.allOf[1].properties.customer =
    {
      ...spec.components.schemas.InvoiceCommonInput.allOf[0].properties
        .customer,
      oneOf: [
        ...spec.components.schemas.InvoiceCustomerInput.oneOf,
        {
          type: "null",
          title: locale === "es" ? "Sin cliente" : "No customer",
        },
      ],
    };
  for (const customer of [
    spec.components.schemas.ReceiptInput.allOf[0].properties.customer,
    spec.components.schemas.ReceiptAssignCustomerInput.properties.customer,
    spec.components.schemas.InvoiceReceiptInput.allOf[0].properties.customer,
    spec.components.schemas.ToInvoiceInput.properties.customer,
    spec.components.schemas.ToInvoicePreviewInput.properties.customer,
    spec.components.schemas.RetentionUpdateInput.properties.customer,
  ]) {
    customer.oneOf = customer.oneOf.map((variant) => {
      if (variant.$ref === "#/components/schemas/CustomerCreateInput") {
        return spec.components.schemas.InvoiceCustomerInput.oneOf[0];
      }
      return {
        ...variant,
        title:
          variant.type === "null"
            ? locale === "es"
              ? "Sin cliente"
              : "No customer"
            : locale === "es"
              ? "Cliente registrado"
              : "Registered customer",
      };
    });
  }
  for (const name of [
    "InvoiceItemInput",
    "InvoiceItemEgresoInput",
    "InvoiceItemTrasladoInput",
  ]) {
    const product = spec.components.schemas[name].properties.product;
    product.description =
      locale === "es"
        ? "Datos del producto o servicio, o ID de un producto registrado."
        : "Product or service details, or the ID of a registered product.";
    product.oneOf = product.oneOf.map((variant) => ({
      ...variant,
      title:
        variant.type === "string"
          ? locale === "es"
            ? "Producto registrado"
            : "Registered product"
          : locale === "es"
            ? "Datos del producto"
            : "Product details",
    }));
  }
  // Native oneOf tabs keep the viewing mode separate from request fields.
  spec.components.schemas.InvoiceCreateInput.oneOf =
    spec.components.schemas.InvoiceCreateInput.oneOf.map((invoiceType) => ({
      ...invoiceType,
      oneOf: invoiceType.oneOf.map((variant) => ({
        ...variant,
        title:
          variant.title === "draft"
            ? locale === "es"
              ? "Borrador"
              : "Draft"
            : locale === "es"
              ? "Timbrar"
              : "Issue",
      })),
    }));
  for (const [name, schema] of Object.entries(spec.components.schemas)) {
    if (!name.startsWith("Invoice") || !name.endsWith("Input")) continue;
    for (const part of [schema, ...(schema.allOf || [])]) {
      if (part.properties?.type) {
        part.properties.type.description =
          locale === "es"
            ? "Código del tipo de factura seleccionado arriba. Selecciona otro tipo para consultar sus campos y código correspondiente."
            : "Code for the invoice type selected above. Select another type to see its fields and corresponding code.";
      }
    }
  }
  function propertyNames(schema) {
    if (schema.$ref) {
      return propertyNames(
        spec.components.schemas[schema.$ref.split("/").pop()],
      );
    }
    return [
      ...Object.keys(schema.properties || {}),
      ...(schema.allOf || []).flatMap(propertyNames),
    ];
  }
  function requiredNames(schema) {
    if (schema.$ref) {
      return requiredNames(
        spec.components.schemas[schema.$ref.split("/").pop()],
      );
    }
    return [
      ...(schema.required || []),
      ...(schema.allOf || []).flatMap(requiredNames),
    ];
  }
  const visited = new Set();
  function orderRequiredProperties(schema) {
    if (!schema || typeof schema !== "object" || visited.has(schema)) return;
    visited.add(schema);
    // Referenced components are ordered separately; preserve reference siblings.
    if (schema.$ref) return;
    for (const child of [
      ...Object.values(schema.properties || {}),
      ...(schema.allOf || []),
      ...(schema.oneOf || []),
      ...(schema.anyOf || []),
      schema.items,
      schema.additionalProperties,
    ])
      orderRequiredProperties(child);
    const required = new Set(schema.required || []);
    if (!schema.properties || !required.size) return;
    schema.properties = Object.fromEntries(
      Object.entries(schema.properties).sort(
        ([a], [b]) => Number(required.has(b)) - Number(required.has(a)),
      ),
    );
  }
  for (const schema of Object.values(spec.components.schemas)) {
    orderRequiredProperties(schema);
  }
  // Customer alternatives compose shared fields and required lists with allOf.
  for (const name of [
    "CustomerNationalCreateInput",
    "CustomerForeignCreateInput",
    "CustomerGenericCreateInput",
  ]) {
    const schema = spec.components.schemas[name];
    const required = new Set(requiredNames(schema));
    schema.properties = Object.fromEntries(
      [...new Set(propertyNames(schema))]
        .sort((a, b) => Number(required.has(b)) - Number(required.has(a)))
        .map((field) => [field, schema.properties?.[field] || {}]),
    );
  }
  const orderedInputs = [
    [
      spec.components.schemas.InvoiceCreateInput.oneOf.flatMap(
        (invoiceType) => invoiceType.oneOf,
      ),
      [
        "customer",
        "items",
        "payment_form",
        "type",
        "status",
        "payment_method",
        "use",
        "currency",
        "exchange",
        "conditions",
        "date",
        "folio_number",
        "series",
        "address",
        "third_party",
        "related_documents",
        "global",
        "export",
        "complements",
        "external_id",
        "idempotency_key",
        "pdf_custom_section",
        "addenda",
        "namespaces",
        "pdf_options",
      ],
    ],
    [
      spec.components.schemas.RetentionInput.oneOf,
      [
        "customer",
        "cve_retenc",
        "periodo",
        "totales",
        "status",
        "fecha_exp",
        "desc_retenc",
        "folio_int",
        "external_id",
        "idempotency_key",
        "complements",
        "pdf_custom_section",
        "addenda",
        "namespaces",
      ],
    ],
  ];
  for (const [variants, order] of orderedInputs) {
    for (const variant of variants) {
      const names = new Set(propertyNames(variant));
      // Empty schemas establish insertion order; allOf keeps every field constraint.
      variant.properties = Object.fromEntries(
        [
          ...order.filter((name) => names.has(name)),
          ...[...names].filter((name) => !order.includes(name)),
        ].map((name) => [name, variant.properties?.[name] || {}]),
      );
    }
  }
  return spec;
};
