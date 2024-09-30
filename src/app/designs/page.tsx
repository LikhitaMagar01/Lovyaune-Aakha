"use client"

import { ParallaxScroll } from '../components/ui/parallax-scroll';
import styles from '../styles/Home.module.css';
import Link from 'next/link'; // Ensure to import Link

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
    <div className='relative flex flex-col bg-black text-white text-center'>
      <h1 className='mt-8'>Wall Painting</h1>
      <div className={styles.scrollWrapper}>
        <ParallaxScroll className={styles.element} images={images} />
      </div>
      <h1 className='mt-5'>House Painting</h1>
      <div className={`mb-5 ${styles.scrollWrapper}`}>
        <ParallaxScroll className={styles.element} images={house_images} />
      </div>

      {/* Links in the bottom right corner */}
      <div className="absolute bottom-[148px] right-0 mr-4">
        <div className="inline-block bg-white p-4 shadow-lg rounded-lg">
          <ul className="flex flex-col space-y-2 text-black">
            <li className="navItem">
              <Link href="/works">Our Works</Link>
            </li>
            <li className="navItem">
              <Link href="/designs">Designs</Link>
            </li>
            <li className="navItem">
              <Link href="/products">Products</Link>
            </li>
            <li className="navItem">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Design;
