"use client"

import Head from 'next/head';
import styles from './styles/Home.module.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [curtainVisible, setCurtainVisible] = useState(true);
  const [remove, setRemove] = useState(false);
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
      setRemove(true)
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
        {!remove && (
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
        {remove && (
          <>
            <div className={styles.brandNameNavigation}>
              <div className={styles.container}>
                <div className={styles.spinner}>
                  <div className={styles.spinner_animation}>
                    <div className={styles.c}>
                      <svg width="1197" height="1023" viewBox="0 0 1197 1023" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M218.558 540.34C169.588 428.627 116.228 317.969 114.642 193.464C113.886 134.099 122.448 69.5468 165.502 25.5143C230.698 -41.1627 285.514 49.2966 321.011 100.159C378.004 181.819 445 278.508 558.848 268.108C636.782 260.989 710.666 218.484 784.977 196.391C818.782 186.341 870.664 164.931 907.188 174.437C967.848 190.225 920.646 295.92 925.118 336.166C935.423 428.915 1066.71 444.411 1135.88 470.819C1202.75 496.351 1215.94 546.596 1159.3 598.519C1097.99 654.717 1018.68 616.849 947.072 640.232C823.713 680.512 833.423 791.775 831.081 895.998C830.021 943.161 805.354 990.602 761.193 1010.89C678.088 1049.08 587.052 969.879 538.358 912.464C511.252 880.503 486.011 844.207 447.248 825.379C400.158 802.507 345.646 804.348 294.666 803.791C232.343 803.109 170.311 801.19 108.787 790.252C81.0832 785.327 30.4361 780.602 10.7253 756.223C-25.2631 711.711 58.3258 619.318 88.2968 594.494C136.596 554.489 192.649 515.9 244.903 481.064" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className={styles.m}>
                      <svg width="1197" height="1023" viewBox="0 0 1197 1023" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M218.558 540.34C169.588 428.627 116.228 317.969 114.642 193.464C113.886 134.099 122.448 69.5468 165.502 25.5143C230.698 -41.1627 285.514 49.2966 321.011 100.159C378.004 181.819 445 278.508 558.848 268.108C636.782 260.989 710.666 218.484 784.977 196.391C818.782 186.341 870.664 164.931 907.188 174.437C967.848 190.225 920.646 295.92 925.118 336.166C935.423 428.915 1066.71 444.411 1135.88 470.819C1202.75 496.351 1215.94 546.596 1159.3 598.519C1097.99 654.717 1018.68 616.849 947.072 640.232C823.713 680.512 833.423 791.775 831.081 895.998C830.021 943.161 805.354 990.602 761.193 1010.89C678.088 1049.08 587.052 969.879 538.358 912.464C511.252 880.503 486.011 844.207 447.248 825.379C400.158 802.507 345.646 804.348 294.666 803.791C232.343 803.109 170.311 801.19 108.787 790.252C81.0832 785.327 30.4361 780.602 10.7253 756.223C-25.2631 711.711 58.3258 619.318 88.2968 594.494C136.596 554.489 192.649 515.9 244.903 481.064" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className={styles.y}>
                      <svg width="1197" height="1023" viewBox="0 0 1197 1023" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M218.558 540.34C169.588 428.627 116.228 317.969 114.642 193.464C113.886 134.099 122.448 69.5468 165.502 25.5143C230.698 -41.1627 285.514 49.2966 321.011 100.159C378.004 181.819 445 278.508 558.848 268.108C636.782 260.989 710.666 218.484 784.977 196.391C818.782 186.341 870.664 164.931 907.188 174.437C967.848 190.225 920.646 295.92 925.118 336.166C935.423 428.915 1066.71 444.411 1135.88 470.819C1202.75 496.351 1215.94 546.596 1159.3 598.519C1097.99 654.717 1018.68 616.849 947.072 640.232C823.713 680.512 833.423 791.775 831.081 895.998C830.021 943.161 805.354 990.602 761.193 1010.89C678.088 1049.08 587.052 969.879 538.358 912.464C511.252 880.503 486.011 844.207 447.248 825.379C400.158 802.507 345.646 804.348 294.666 803.791C232.343 803.109 170.311 801.19 108.787 790.252C81.0832 785.327 30.4361 780.602 10.7253 756.223C-25.2631 711.711 58.3258 619.318 88.2968 594.494C136.596 554.489 192.649 515.9 244.903 481.064" stroke="white" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className={styles.blur_text}>Lovyaune Aakhaa</p>
              </div>
              <div className={styles.bottomNav}>
                <ul className={styles.navList}>
                  <li className={styles.navItem}><Link href="/works">Our Works</Link></li>
                  <li className={styles.navItem}><Link href="/designs">Designs</Link></li>
                  <li className={styles.navItem}><Link href="/products">Products</Link></li>
                  <li className={styles.navItem}><Link href="/about">About Us</Link></li>
                </ul>
              </div>
              <div className={`flex flex-center pr-5 flex-wrap justify-center p-2 ${styles.fixed_bottom}`}>
                <svg className={`text-white ${styles.width_height}`} width="30" height="30" viewBox="0 0 373 240" xmlns="http://www.w3.org/2000/svg">
                  <path className={styles.signature2} d="M173.237 122.823C179.014 102.373 224.315 -3.23633 166.095 16.1703C139.13 25.1584 120.172 54.94 108.801 79.3368C97.43 103.732 92.6732 130.809 79.9154 154.565C71.9603 169.378 58.4854 194.772 38.9683 196.941C26.4994 198.326 15.3596 194.461 13.8921 180.276C11.5276 157.419 22.9162 138.934 43.2534 129.013C96.8307 102.878 101.46 194.322 144.669 202.178C187.74 210.009 220.423 169.618 241.482 138.377C255.92 116.958 333.764 -7.32144 355.594 70.449C369.881 121.345 344.643 173.044 344.643 223.763C344.643 235.439 340.305 200.681 336.073 189.799C321.873 153.283 300.488 139.118 264.654 125.68" stroke="white" strokeWidth="26" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
