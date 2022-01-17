import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.container}>
        <h1 className="hero__title" align="left">{siteConfig.title}</h1>
        <p className="hero__subtitle" align="left">{siteConfig.tagline}</p>
        <div>
          <div className={styles.buttonsFloat}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Overview - 5min ⏱️
            </Link>
          </div>
          <div className={styles.buttonsFloat}>
            <Link className="button button--secondary button--lg" to="https://github.com/jzhou59"> GitHub 🌟 </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="This is a static website, deployed in github pages, storing notes of Junjie Zhou.">
      <HomepageHeader />
      {/* <main>
        <HomepageFeatures />
      </main> */}
    </Layout>
  );
}
