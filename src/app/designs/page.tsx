"use client"

import { ParallaxScroll } from '../components/ui/parallax-scroll';
import styles from '../styles/Home.module.css';

const Design = () => {
  const images = [
    '/wall_paint_two.png',
    '/wall_paint_three.png',
    '/wall_paint_four.png',
    '/wall_paint_five.png',
    '/wall_paint_six.png',
    '/wal_paint_seven.png',
    '/wall_paint_eight.png',
    '/wall_paint_nine.png',
  ];

  const house_images = [
    '/house_paint1.png',
    '/house_paint2.png',
    '/house_paint3.png',
    '/house_paint2.png'
  ];

  return (
    <div className='flex flex-col bg-black text-white text-center'>
      <h1 className='mt-8'>Wall Painting</h1>
      <div className={styles.scrollWrapper}>
        <ParallaxScroll className={styles.element} images={images} />
      </div>
      <h1 className='mt-5'>House Painting</h1>
      <div className={`mb-5 ${styles.scrollWrapper}`}>
        <ParallaxScroll className={styles.element} images={house_images} />
      </div>
    </div>
  );
}

export default Design;
