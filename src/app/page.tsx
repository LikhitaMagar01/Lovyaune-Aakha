"use client"

import Head from 'next/head';
import styles from './styles/Home.module.css';
import { useEffect, useState } from 'react';


export default function Home() {
  const [curtainVisible, setCurtainVisible] = useState(true);
  const [rainbowVisible, setRainbowVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainVisible(false);
      setRainbowVisible(true)
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Professional House Painting Services & Online Paint Shop</title>
        <meta name="description" content="Professional house painting services including wall painting and all-purpose painting. Shop online for high-quality paints and painting supplies." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="house painting, wall painting, all-purpose painting, online paint shop, painting supplies, professional painting services" />
        <meta name="author" content="Lovyaune Aakhaa" />
        <meta property="og:title" content="Professional House Painting Services & Online Paint Shop" />
        <meta property="og:description" content="Professional house painting services including wall painting and all-purpose painting. Shop online for high-quality paints and painting supplies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lovyauneaakhaa.com" />
        <meta property="og:image" content="https://lovyauneaakhaa.com/og-image.jpg" />
      </Head>

      {curtainVisible && (
        <>
          <div id="curtain-top"></div>
          <div id="curtain-bottom"></div>
        </>
      )}
      <main className={styles.main}>
        {rainbowVisible && (
          <div className={styles.position_rainbow}>
            <div className={styles.app_loader}>
              <div className={styles.global_loader_container}>
                <div className={styles.global_loader}>
                  <div className={styles.ring}></div>
                  <div className={styles.ring}></div>
                  <div className={styles.ring}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <ul className={styles.ul}>
          <li className={styles.li}>A</li>
          <li className={styles.li}>K</li>
          <li className={styles.li}>A</li>
          <li className={styles.li}>L&nbsp;</li>
          &nbsp;
          <li className={styles.li}>B</li>
          <li className={styles.li}>A</li>
          <li className={styles.li}>H</li>
          <li className={styles.li}>A</li>
          <li className={styles.li}>D</li>
          <li className={styles.li}>U</li>
          <li className={styles.li}>R</li>
        </ul>
      </main>
    </div>
  );
}
