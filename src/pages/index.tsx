import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import addons from '@site/addons.json';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function AddonCards() {
  return (
    <section className={styles.cards}>
      <div className="container">
        <div className={styles.cardGrid}>
          {addons.map((addon) => (
            <div key={addon.id} className={styles.card}>
              <Link to={`/${addon.id}/`} className={styles.cardBody}>
                <Heading as="h2" className={styles.cardTitle}>
                  {addon.label}
                </Heading>
                <p className={styles.cardText}>{addon.description}</p>
                <span className={styles.cardLink}>Handbuch öffnen →</span>
              </Link>
              {/* Fester Link: zeigt immer auf die neueste veröffentlichte Version */}
              <a
                href={addon.download}
                className={styles.cardDownload}
                title="Aktuelle Version herunterladen (fester Link)">
                ↓ Aktuelle Version{addon.version ? ` (${addon.version})` : ''} herunterladen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Dokumentation"
      description="Handbücher für die donamic i-doit Add-ons">
      <HomepageHeader />
      <main>
        <AddonCards />
      </main>
    </Layout>
  );
}
