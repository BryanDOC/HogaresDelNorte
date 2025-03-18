"use client";

import { Carousel } from "flowbite-react";

export default function CarruselLotes() {
    
  return (
    <div  className="h-[230px] sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel>
        <img src="/src/assets/cancha.webp" alt="..." />
        <img src="/src/assets/parque.webp" alt="..." />
        <img src="/src/assets/parque2.webp" alt="..." />
        <img src="/src/assets/parque3.webp" alt="..." />
        <img src="/src/assets/piscinas.webp" alt="..." />
        <img src="/src/assets/anfiteatro.webp" alt="..." />
      </Carousel>
    </div>
  )
}
