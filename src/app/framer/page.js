'use client';
import styles from '../page.module.scss';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
    floating6, 
    floating7, 
    floating8
} from '../../data';

export default function Home() {
  // Create motion values for cumulative position
  const positionX = useMotionValue(0);
  const positionY = useMotionValue(0);

  // Create spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 150 };
  
  // Create transformed values for each plane
  const plane1X = useSpring(positionX, springConfig);
  const plane1Y = useSpring(positionY, springConfig);
  
  const plane2X = useTransform(plane1X, (latest) => latest * 0.5);
  const plane2Y = useTransform(plane1Y, (latest) => latest * 0.5);
  
  const plane3X = useTransform(plane1X, (latest) => latest * 0.25);
  const plane3Y = useTransform(plane1Y, (latest) => latest * 0.25);

  const handleMouseMove = (event) => {
    // Update position by adding the movement (scaled down)
    const speed = 0.05;
    positionX.set(positionX.get() + event.movementX * speed);
    positionY.set(positionY.get() + event.movementY * speed);
  };

  return (
    <main onMouseMove={handleMouseMove} className={styles.main}>
      <motion.div 
        className={styles.plane}
        style={{ 
          x: plane1X,
          y: plane1Y,
        }}
      >
        <Image 
          src={floating1}
          alt="image"
          width={300}
        />
        <Image 
          src={floating2}
          alt="image"
          width={300}
        />
        <Image 
          src={floating7}
          alt="image"
          width={225}
        />
      </motion.div>

      <motion.div 
        className={styles.plane}
        style={{ 
          x: plane2X,
          y: plane2Y,
        }}
      >
        <Image 
          src={floating4}
          alt="image"
          width={250}
        />
        <Image 
          src={floating6}
          alt="image"
          width={200}
        />
        <Image 
          src={floating8}
          alt="image"
          width={225}
        />
      </motion.div>

      <motion.div 
        className={styles.plane}
        style={{ 
          x: plane3X,
          y: plane3Y,
        }}
      >
        <Image 
          src={floating3}
          alt="image"
          width={150}
        />
        <Image 
          src={floating5}
          alt="image"
          width={200}
        />
      </motion.div>

      <div className={styles.title}>
        <h1>Floating Images Gallery</h1>
        <p>Next.js and Framer Motion</p>
      </div>
    </main>
  );
}