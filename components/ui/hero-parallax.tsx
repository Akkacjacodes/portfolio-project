"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// TypeScript Interfaces
interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface HeroParallaxProps {
  products: Product[];
}

interface ProductCardProps {
  product: Product;
  translate: MotionValue<number>;
}

const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

export const HeroParallax: React.FC<HeroParallaxProps> = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <ProductRow products={firstRow} translate={translateX} reverse />
        <ProductRow products={secondRow} translate={translateXReverse} />
        <ProductRow products={thirdRow} translate={translateX} reverse />
      </motion.div>
    </div>
  );
};

const Header: React.FC = () => (
  <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
    <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
      The Ultimate <br /> development studio
    </h1>
    <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
      We build beautiful products with the latest technologies and frameworks.
      We are a team of passionate developers and designers that love to build
      amazing products.
    </p>
  </div>
);

const ProductRow: React.FC<{ products: Product[]; translate: MotionValue<number>; reverse?: boolean }> = ({ products, translate, reverse }) => (
  <motion.div className={`flex ${reverse ? 'flex-row-reverse space-x-reverse' : 'flex-row'} mb-20 space-x-20`}>
    {products.map((product) => (
      <ProductCard product={product} translate={translate} key={product.title} />
    ))}
  </motion.div>
);

const ProductCard: React.FC<ProductCardProps> = ({ product, translate }) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    key={product.title}
    className="group/product h-96 w-[30rem] relative flex-shrink-0"
  >
    <Link href={product.link} className="block group-hover/product:shadow-2xl">
      <Image
        src={product.thumbnail}
        height={600}
        width={600}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </Link>
    <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      {product.title}
    </h2>
  </motion.div>
);

export default HeroParallax;
