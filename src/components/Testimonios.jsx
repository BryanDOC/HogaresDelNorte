"use client"



import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cards = [
  { id: 1, title: "“Un futuro seguro con Hogares del Norte”", content: "Cumplí el sueño de la casa propia, asegurando un hogar y un futuro tranquilo para mi hija. ¡Hogares del Norte es confianza y transparencia!", autor: "Bryan Olivares", image: "Testimonio5" },
  { id: 2, title: "“Seguridad y calidad de vida”", content: "Con Hogares del Norte encontré seguridad y calidad de vida. Mi departamento es un lugar de tranquilidad, disfrute familiar y merecido bienestar.", autor: "Isabela Saenz", image: "Testimonio4" },
  { id: 3, title: "“Hogares del Norte, mi depa ideal”", content: "Elegí Hogares del Norte por su solidez, confianza y calidad. Aquí encontré tranquilidad, cercanía a la playa y el lugar ideal para mi casa.", autor: "Cielo Saldarriaga", image: "Testimonio1" },
  { id: 4, title: "“Un futuro seguro con Hogares del Norte”", content: "Cumplí el sueño de la casa propia, asegurando un hogar y un futuro tranquilo para mi hija. ¡Hogares del Norte es confianza y transparencia!", autor: "Bryan Olivares", image: "Testimonio2" },
  { id: 5, title: "“Seguridad y calidad de vida”", content: "Con Hogares del Norte encontré seguridad y calidad de vida. Mi departamento es un lugar de tranquilidad, disfrute familiar y merecido bienestar.", autor: "Isabela Saenz", image: "Testimonio3" }
];

export default function Testimonios() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const goToIndex = (i) => {
    setIndex(i);
  };

  return (
    <div className="relative w-full flex flex-col items-center overflow-hidden xl:px-[80px] my-[100px] px-6 md:px-12 container mx-auto">
      <h2 className="text-3xl text-center font-black text-colorPrimary mb-[80px] font-Montserrat">
        Nuestros clientes nos respaldan
      </h2>

    
      <div className="flex justify-center items-center w-full overflow-hidden">
        <div className={`flex w-full justify-center gap-4 ${isMobile ? "w-[90%]" : "w-full"}`}>
          {cards.slice(index, index + (isMobile ? 1 : 3)).map((card) => (
            <motion.div
              key={card.id}
              className="p-4 bg-cover bg-center h-[500px] md:h-[700px] lg:h-[500px] xl:h-[600px] text-center rounded-lg shadow-lg flex items-end"
              style={{ 
                backgroundImage: `url(/src/assets/${card.image}.webp)`, 
                width: isMobile ? "100%" : "32%"
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <div className="bg-white p-6 rounded-md md:rounded-xl">
                <div className="flex flex-col gap-3">
                  <h3 className="text-[13px] font-bold">{card.title}</h3>
                  <p className="text-[10px]">{card.content}</p>
                </div>
                <p className="text-[10px] font-bold mt-4 text-right">{card.autor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    
      <div className="flex mt-4 space-x-2">
        {cards.slice(0, cards.length - (isMobile ? 0 : 2)).map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full ${index === i ? "bg-primary2" : "bg-primary2 opacity-40"}`}
            onClick={() => goToIndex(i)}
          ></button>
        ))}
      </div>
    </div>
  );
}
