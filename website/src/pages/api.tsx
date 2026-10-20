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
    // ReDoc needs named discriminator variants to render a status selector.
    // Keep this presentation hint out of the contract: status may be omitted.
    spec.components.schemas.InvoiceCreateInput.oneOf =
      spec.components.schemas.InvoiceCreateInput.oneOf.map(
        (invoiceType: {oneOf: {allOf: {properties: {status: {const: string}}}[]}[]}, typeIndex: number) => {
          const mapping: Record<string, string> = {};
          return {
            ...invoiceType,
            oneOf: invoiceType.oneOf.map((variant) => {
              const status = variant.allOf.at(-1)!.properties.status.const;
              const name = `InvoiceCreateDisplay${typeIndex}${status}`;
              spec.components.schemas[name] = variant;
              mapping[status] = `#/components/schemas/${name}`;
              return {$ref: mapping[status]};
            }),
            discriminator: {propertyName: 'status', mapping},
          };
        },
      );
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
