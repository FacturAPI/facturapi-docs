import React from "react";
import ApiDoc from "@theme/ApiDoc";
import useSpecData from "@theme/useSpecData";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { translate } from "@docusaurus/Translate";

const presentationOptions = { sortRequiredPropsFirst: false };

function CustomPage() {
  const { i18n } = useDocusaurusContext();
  const specData = useSpecData(`api-${i18n.currentLocale}`);
  return (
    <ApiDoc
      layoutProps={{
        title: translate({
          id: "api.title",
          message: "Documentación de Facturapi | Referencia API",
        }),
        description: translate({
          id: "api.description",
          message:
            "Referencia técnica de la API de Facturapi. Información detallada sobre los endpoints, parámetros, respuestas y ejemplos de uso.",
        }),
      }}
      specProps={{ ...specData, optionsOverrides: presentationOptions }}
    />
  );
}

export default CustomPage;
