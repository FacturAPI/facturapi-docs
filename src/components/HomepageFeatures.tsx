/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  linkTo?: string;
  linkText?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Introducción',
    image: '/img/home/book.svg',
    linkText: 'Comenzar',
    linkTo: '/docs/started/introduction',
    description: (
      <>
        Si es tu primera vez integrando Facturapi, te recomendamos empezar por aquí.
      </>
    ),
  },
  {
    title: 'Inicio Rápido',
    image: '/img/home/rocket.svg',
    linkText: 'Ver ejemplos',
    linkTo: '/docs/started/invoices',
    description: (
      <>
        Consulta ejemplos simples de los casos de uso más comunes para darte una idea
        general sobre cómo integrar Facturapi.
      </>
    ),
  },
  {
    title: 'Referencia API',
    image: '/img/home/api.svg',
    linkText: 'Ver referencia',
    linkTo: '/api',
    description: (
      <>
        Consulta todos los métodos disponibles en la API de Facturapi, así como todos los posibles valores que puedes enviar.
      </>
    ),
  },
];

function Feature({title, image, description, linkTo, linkText}: FeatureItem) {
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
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
