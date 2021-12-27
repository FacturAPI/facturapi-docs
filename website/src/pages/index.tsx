import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className={styles.hero}>
        <h1>Documentación</h1>
        <p>
          Aquí encontrarás guías, tutoriales y la referencia técnica para
          integrar la API de Facturapi con tu aplicación.
        </p>
      </div>
      <div className={styles.overlappedImages}>
        <div className={styles.circleBackground} />
        <div className={styles.showcase} />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
