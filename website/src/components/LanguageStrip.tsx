import React from 'react';
import styles from './LanguageStrip.module.css';

type LanguageItem = {
  name: string;
  note: string;
  src: string;
  packageHref: string;
  repoHref: string;
};

const languages: LanguageItem[] = [
  {
    name: 'Node.js',
    note: 'NPM',
    src: '/img/languages/nodejs.svg',
    packageHref: 'https://www.npmjs.com/package/facturapi',
    repoHref: 'https://github.com/facturapi/facturapi-node',
  },
  {
    name: 'C#',
    note: 'NuGet',
    src: '/img/languages/csharp.svg',
    packageHref: 'https://www.nuget.org/packages/Facturapi',
    repoHref: 'https://github.com/facturapi/facturapi-net',
  },
  {
    name: 'Java',
    note: 'Maven/Gradle',
    src: '/img/languages/java.svg',
    packageHref: 'https://central.sonatype.com/artifact/io.facturapi/facturapi-java',
    repoHref: 'https://github.com/facturapi/facturapi-java',
  },
  {
    name: 'PHP',
    note: 'Composer',
    src: '/img/languages/php.svg',
    packageHref: 'https://packagist.org/packages/facturapi/facturapi-php',
    repoHref: 'https://github.com/facturapi/facturapi-php',
  },
];

export default function LanguageStrip(): React.ReactElement {
  return (
    <div className={styles.grid} aria-label="Official SDK languages">
      {languages.map((language) => (
        <div key={language.name} className={styles.card}>
          <a
            className={styles.primaryLink}
            href={language.packageHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${language.name} package page`}
          >
            <img className={styles.logo} src={language.src} alt="" aria-hidden="true" />
            <div className={styles.meta}>
              <div className={styles.name}>{language.name}</div>
              <div className={styles.note}>{language.note}</div>
            </div>
          </a>
          <a
            className={styles.githubLink}
            href={language.repoHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${language.name} SDK repository on GitHub`}
            title="GitHub repository"
          >
            <img className={styles.githubIcon} src="/img/languages/github.svg" alt="" aria-hidden="true" />
          </a>
        </div>
      ))}
    </div>
  );
}
