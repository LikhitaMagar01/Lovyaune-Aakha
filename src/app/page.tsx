"use client"

import Head from 'next/head';
import styles from './styles/Home.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [curtainVisible, setCurtainVisible] = useState(true);
  const [remove, setRemove] = useState(true);
  const [disappear, setDisappear] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisappear(true)
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setRemove(false)
    }, 6000);
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
        {remove && (
          <>
            <div className={`${styles.position_rainbow} ${disappear ? styles.disappear : ''}`}>
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
            <ul className={styles.ul}>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>A</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>K</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>A</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>L&nbsp;</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>B</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>A</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>H</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>A</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>D</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>U</li>
              <li className={`${styles.li} ${disappear ? styles.disappear : ''}`}>R</li>
            </ul>
          </>
        )}
        {!remove && (
          <>
            <div className={styles.brandNameNavigation}>
              {/* <div className={`${styles.flex} ${styles.justify_content_center} ${styles.padding}`}>
                <svg className={styles.width_height} width="395" height="312" viewBox="0 0 395 312" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.signature2} d="M105.068 112.017C84.4857 129.755 60.0902 154.234 30.6329 154.234C21.1049 154.234 12.8165 146.218 14.2858 136.3C18.6363 106.934 95.2457 120.918 113.321 120.588C154.305 119.838 204.653 102.546 230.449 68.6896C238.623 57.9605 256.637 21.3966 246.637 6.95147C233.741 -11.6761 195.996 48.7109 192.358 55.1992C165.877 102.436 144.883 153.219 120.304 201.53C106.925 227.827 74.1989 323.038 27.9349 304.532C-17.6835 286.285 9.25157 229.345 34.9181 207.561C71.6559 176.38 94.1463 208.601 106.179 244.699C117.546 278.801 120.077 314.495 165.378 307.865C185.919 304.859 201.736 289.151 214.419 273.901C250.762 230.203 272.877 176.097 299.963 126.619C311.913 104.791 322.948 80.2605 339.323 61.2302C345.294 54.2919 359.865 36.4227 370.748 38.376C401.285 43.8569 389.718 129.982 387.73 148.044C382.503 195.523 377.062 246.54 359.321 291.359C358.237 294.098 354.774 302.995 353.449 295.486C349.211 271.473 348.591 246.371 341.387 222.955C332.129 192.869 312.056 167.2 281.87 155.821C215.543 130.819 150.042 150.781 85.0704 166.296" stroke="white" />
                </svg>
              </div> */}
              <div className={styles.container}>
                <p className={styles.blur_text}>Lovyaune Aakhaa</p>
            </div>
              <div className={styles.bottomNav}>
                <ul className={styles.navList}>
                  <li className={styles.navItem}><Link href="/our-works">Our Works</Link></li>
                  <li className={styles.navItem}><Link href="/designs">Designs</Link></li>
                  <li className={styles.navItem}><Link href="/products">Products</Link></li>
                  <li className={styles.navItem}><Link href="/about-us">About Us</Link></li>
                </ul>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
