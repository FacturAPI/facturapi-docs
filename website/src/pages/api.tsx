import React, {useMemo} from 'react';
import ApiDoc from '@theme/ApiDoc';
import useSpecData from '@theme/useSpecData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { translate } from '@docusaurus/Translate';

function CustomPage() {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const specData = useSpecData(`api-${locale}`);
  const displaySpecData = useMemo(() => {
    const spec = structuredClone(specData.spec);
    // Presentation labels do not change the downloadable API contract.
    spec.components.schemas.InvoiceCustomerInput.oneOf = [
      {
        ...spec.components.schemas.CustomerCreateInput,
        title: locale === 'es' ? 'Datos del cliente' : 'Customer details',
        anyOf: spec.components.schemas.CustomerCreateInput.anyOf.map(
          (variant: object, index: number) => ({
            ...variant,
            title: (locale === 'es'
              ? ['Nacional', 'Extranjero', 'Público en general']
              : ['Mexican customer', 'Foreign customer', 'General public'])[index],
          }),
        ),
      },
      {
        ...spec.components.schemas.InvoiceCustomerInput.oneOf[1],
        title: locale === 'es' ? 'Cliente registrado' : 'Registered customer',
      },
    ];
    spec.components.schemas.InvoiceCommonInput.allOf[0].properties.customer = {
      ...spec.components.schemas.InvoiceCustomerInput,
      description: locale === 'es'
        ? 'Datos del cliente o ID de un cliente registrado.'
        : 'Customer details or the ID of a registered customer.',
    };
    spec.components.schemas.InvoiceDraftCommonInput.allOf[1].properties.customer = {
      ...spec.components.schemas.InvoiceCommonInput.allOf[0].properties.customer,
      oneOf: [
        ...spec.components.schemas.InvoiceCustomerInput.oneOf,
        {
          type: 'null',
          title: locale === 'es' ? 'Sin cliente' : 'No customer',
        },
      ],
    };
    // Native oneOf tabs keep the viewing mode separate from request fields.
    spec.components.schemas.InvoiceCreateInput.oneOf =
      spec.components.schemas.InvoiceCreateInput.oneOf.map(
        (invoiceType: {oneOf: {title: string}[]}) => ({
          ...invoiceType,
          oneOf: invoiceType.oneOf.map((variant) => ({
            ...variant,
            title: variant.title === 'draft'
              ? (locale === 'es' ? 'Borrador' : 'Draft')
              : (locale === 'es' ? 'Timbrar' : 'Issue'),
          })),
        }),
      );
    for (const [name, schema] of Object.entries<{allOf?: {properties?: {type?: {description: string}}}[]; properties?: {type?: {description: string}}}>(spec.components.schemas)) {
      if (!name.startsWith('Invoice') || !name.endsWith('Input')) continue;
      for (const part of [schema, ...(schema.allOf || [])]) {
        if (part.properties?.type) {
          part.properties.type.description = locale === 'es'
            ? 'Código del tipo de factura seleccionado arriba. Selecciona otro tipo para consultar sus campos y código correspondiente.'
            : 'Code for the invoice type selected above. Select another type to see its fields and corresponding code.';
        }
      }
    }
    return {...specData, spec};
  }, [specData, locale]);
  return (
    <ApiDoc
      layoutProps={{
        title: translate({
          id: 'api.title',
          message: 'Documentación de Facturapi | Referencia API',
        }),
        description: translate({
          id: 'api.description',
          message: 'Referencia técnica de la API de Facturapi. Información detallada sobre los endpoints, parámetros, respuestas y ejemplos de uso.',
        }),
      }}
      specProps={displaySpecData}
    />
  );
}

export default CustomPage;
