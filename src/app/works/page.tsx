"use client"
import Link from 'next/link';
import { useRef } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const initialWorks = [
  { image: '/wall_paint_two.png', alt: 'Work 1' },
  { image: '/wall_paint_two.png', alt: 'Work 2' },
  { image: '/wall_paint_two.png', alt: 'Work 3' },
  { image: '/wall_paint_two.png', alt: 'Work 4' },
  { image: '/wall_paint_two.png', alt: 'Work 5' },
  { image: '/wall_paint_two.png', alt: 'Work 6' },
  { image: '/wall_paint_two.png', alt: 'Work 7' },
  { image: '/wall_paint_three.png', alt: 'Work 8' },
  { image: '/wall_paint_three.png', alt: 'Work 9' },
  { image: '/wall_paint_three.png', alt: 'Work 10' },
  { image: '/wall_paint_three.png', alt: 'Work 11' },
  { image: '/wall_paint_three.png', alt: 'Work 12' },
  { image: '/wall_paint_three.png', alt: 'Work 13' },
  { image: '/wall_paint_four.png', alt: 'Work 14' },
  { image: '/wall_paint_four.png', alt: 'Work 15' },
  { image: '/wall_paint_four.png', alt: 'Work 16' },
  { image: '/wall_paint_four.png', alt: 'Work 17' },
  { image: '/wall_paint_four.png', alt: 'Work 18' },
  { image: '/wall_paint_four.png', alt: 'Work 19' },
  { image: '/wall_paint_five.png', alt: 'Work 20' },
  { image: '/wall_paint_five.png', alt: 'Work 21' },
  { image: '/wall_paint_five.png', alt: 'Work 22' },
  { image: '/wall_paint_five.png', alt: 'Work 23' },
  { image: '/wall_paint_six.png', alt: 'Work 24' },
  { image: '/wall_paint_six.png', alt: 'Work 25' },
  { image: '/wall_paint_six.png', alt: 'Work 26' },
  { image: '/wall_paint_six.png', alt: 'Work 27' },
  { image: '/wall_paint_six.png', alt: 'Work 28' },
  { image: '/wal_paint_seven.png', alt: 'Work 29' },
  { image: '/wal_paint_seven.png', alt: 'Work 30' },
  { image: '/wal_paint_seven.png', alt: 'Work 31' },
  { image: '/wal_paint_seven.png', alt: 'Work 32' },
  { image: '/wal_paint_seven.png', alt: 'Work 33' },
  { image: '/wall_paint_eight.png', alt: 'Work 34' },
  { image: '/wall_paint_eight.png', alt: 'Work 35' },
  { image: '/wall_paint_eight.png', alt: 'Work 36' },
  { image: '/wall_paint_eight.png', alt: 'Work 37' },
  { image: '/wall_paint_nine.png', alt: 'Work 38' },
  { image: '/wall_paint_nine.png', alt: 'Work 39' },
  { image: '/wall_paint_nine.png', alt: 'Work 40' },
  { image: '/wall_paint_nine.png', alt: 'Work 41' },
];

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


const getRandomSize = () => {
  const width = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
  const height = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
  return { width, height };
};

const Works = () => {
  const works = shuffleArray(initialWorks).map((work, index) => ({
    id: index + 1,
    ...work,
    size: getRandomSize(),
  }));

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'up' | 'down') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'up' ? -200 : 200;
      scrollRef.current.scrollBy({
        top: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <h1 className="text-4xl font-bold text-center my-8 text-white">Our Works</h1>
      <div
        ref={scrollRef}
        className="h-[calc(100vh-4rem)] overflow-y-auto scrollbar-hide"
      >
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {works.map((work) => (
            <div key={work.id} className="flex justify-center">
              <img
                src={work.image}
                alt={work.alt}
                className="object-cover rounded-lg transition duration-500 ease-in-out grayscale hover:grayscale-0"
                style={{ width: `${work.size.width}px`, height: `${work.size.height}px` }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="fixed bottom-4 left-4 flex flex-col space-y-2">
        <button
          onClick={() => scroll('up')}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaArrowUp />
        </button>
        <button
          onClick={() => scroll('down')}
          className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        >
          <FaArrowDown />
        </button>
      </div>
      <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-lg">
        <ul className="flex flex-col space-y-2">
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
  );
};

export default Works;
