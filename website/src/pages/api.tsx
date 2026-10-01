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
    // ReDoc needs named discriminator variants to render a status selector.
    // Keep this presentation hint out of the contract: status may be omitted.
    spec.components.schemas.InvoiceCreateInput.oneOf =
      spec.components.schemas.InvoiceCreateInput.oneOf.map(
        (invoiceType: {oneOf: {title: string}[]}, typeIndex: number) => {
          const mapping: Record<string, string> = {};
          return {
            ...invoiceType,
            oneOf: invoiceType.oneOf.map((variant) => {
              const name = `InvoiceCreateDisplay${typeIndex}${variant.title}`;
              spec.components.schemas[name] = variant;
              mapping[variant.title] = `#/components/schemas/${name}`;
              return {$ref: mapping[variant.title]};
            }),
            discriminator: {propertyName: 'status', mapping},
          };
        },
      );
    return {...specData, spec};
  }, [specData]);
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
