"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Carousel = ({
  data,
}: {
  data: {
    image: string;
  }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 });
  const carouselRef = useRef(null);

  useEffect(() => {
    const elem = carouselRef.current as unknown as HTMLDivElement;
    const { width, height } = elem.getBoundingClientRect();
    if (carouselRef.current) {
      setCarouselSize({ width, height });
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8">
      <h1 className="text-center text-4xl my-4 underline text-gray-800">
        Latest Blogs
      </h1>
      <div className="w-full h-60 rounded-md overflow-hidden relative">
        <div
          ref={carouselRef}
          style={{
            transform: `translateX(-${currentIndex * (100 / 4)}%)`,
          }}
          className="w-full h-full absolute flex transition-transform duration-300 gap-4"
        >
          {data.concat(data.slice(0, 4)).map((v, i) => (
            <div
              key={i}
              className="relative shrink-0 w-1/4 h-full"
              style={{
                minWidth: `${100 / 4}%`,
              }}
            >
              <Image
                className="pointer-events-none rounded-md shadow-2xl"
                alt={`carousel-image-${i}`}
                fill
                src={v.image || "https://random.imagecdn.app/500/500"}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-3">
        <button onClick={prevSlide} className="border px-4 py-2 font-bold">
          {"<"}
        </button>
        <button onClick={nextSlide} className="border px-4 py-2 font-bold">
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
