/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

type FeatureItem = {
  title: string;
  image: string;
  description: React.ReactNode;
  linkTo?: string;
  linkText?: string;
};

const getFeatureList = (baseUrl: string): FeatureItem[] => [
  {
    title: translate({
      id: "home.intro.title",
      message: 'Introducción',
    }),
    image: `${baseUrl}img/home/book.svg`,
    linkText: translate({
      id: "home.intro.linkText",
      message: "Comenzar",
    }),
    linkTo: '/docs/intro',
    description: translate({
      id: "home.intro.description",
      message: "Si es tu primera vez integrando Facturapi, te recomendamos empezar por aquí.",
    }),
  },
  {
    title: translate({
      id: "home.quickstart.title",
      message: "Inicio Rápido",
    }),
    image: `${baseUrl}img/home/rocket.svg`,
    linkText: translate({
      id: "home.quickstart.linkText",
      message: "Ver ejemplos",
    }),
    linkTo: '/docs/guides/invoices/ingreso',
    description: translate({
      id: "home.quickstart.description",
      message: 'Consulta ejemplos de los casos de uso más comunes para darte una idea general sobre cómo integrar Facturapi.',
    }),
  },
  {
    title: translate({
      id: "home.api.title",
      message: "Referencia API",
    }),
    image: `${baseUrl}img/home/api.svg`,
    linkText: translate({
      id: "home.api.linkText",
      message: "Ver referencia",
    }),
    linkTo: '/api',
    description: translate({
      id: "home.api.description",
      message: "Consulta todos los métodos disponibles en la API de Facturapi, así como todos los posibles valores que puedes enviar.",
    }),
  },
];

function Feature({ title, image, description, linkTo, linkText }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.feature}>
        <div className="text--center">
          <img className={styles.featureSvg} alt={title} src={image} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
          {linkTo && linkText && (
            <Link to={linkTo}>
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {getFeatureList(siteConfig.baseUrl).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
