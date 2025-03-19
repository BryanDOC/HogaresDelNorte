"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const images = [
  { src: "/assets/JardinInterior.webp", title: "Jardín Interior" },
  { src: "/assets/Gym.jpg", title: "Piscina" },
  { src: "/assets/Lobby.jpg", title: "Gimnasio" },
  { src: "/assets/Piscina.jpeg", title: "Sala de Juegos" },
  { src: "/assets/SalaDeEntretenimiento.jpg", title: "Terraza" },
  { src: "/assets/SalaDeReuniones.jpg", title: "Lobby" },
  { src: "/assets/Coworking.jpg", title: "Jardín Interior" }
];

export default function SliderAreasComunes() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    if (isMobileOrTablet) {
      return [
        images[(currentIndex - 1 + images.length) % images.length], 
        images[currentIndex], 
        images[(currentIndex + 1) % images.length] 
      ];
    }
    return [
      images[(currentIndex - 2 + images.length) % images.length],
      images[(currentIndex - 1 + images.length) % images.length],
      images[currentIndex],
      images[(currentIndex + 1) % images.length],
      images[(currentIndex + 2) % images.length]
    ];
  };

  return (
    <div className="relative flex flex-col items-center container mx-auto">
      <h2 className="text-3xl font-black text-colorPrimary mb-2 font-Montserrat xl:mb-10">
        Áreas <span className="text-primary2 font-light ">Comunes</span>
      </h2>
      <div className="flex items-center justify-center  gap-4 overflow-hidden h-[400px] md:h-[400px] sm:h-[300px]">
        {getVisibleImages().map((image, index) => {
          const sizes = isMobileOrTablet
            ? ["w-[100px] h-[120px]", "w-[280px] h-[320px]", "w-[100px] h-[120px]"]
            : ["w-[160px] h-[180px]", "w-[196px] h-[222px]", "w-[357px] h-[406px]", "w-[196px] h-[222px]", "w-[160px] h-[180px]"];

          return (
            <motion.img
              key={image.src}
              src={image.src}
              alt={image.title}
              className={`transition-all duration-500 ${sizes[index]}`}
            />
          );
        })}
      </div>
      <motion.button
        className="mt-4 bg-primary2 text-white py-2 px-6 rounded absolute top-[365px] md:top-[360px] sm:top-[260px] xl:top-[435px]"
        whileTap={{ scale: 0.9 }}
      >
        {images[currentIndex].title}
      </motion.button>
      <div className="mt-4 flex gap-6 absolute top-[210px] px-6 md:px-12 xl:px-[60px] justify-between w-full md:top-[220px] sm:top-[180px]">
        <button onClick={prevSlide} className="bg-primary2 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </button>
        <button onClick={nextSlide} className="bg-primary2 p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="white"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}

