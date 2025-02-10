import React from "react";
import { WhatsappIcon } from "../ui/icons/WhatsappIcon";
import { BackgroundImage } from "./BackgroundImage";
import { Title } from "../ui/Typography/Title";
import { ArrowDownIcon } from "../ui/icons/ArrowDownIcon";

export const HeroSection = () => {
  return (
    <section className="p-4 w-full h-screen md:max-h-[450px] lg:max-h-full relative flex flex-col md:flex-row justify-end md:justify-start md:p-10 ">
      <BackgroundImage />

      <div className="flex flex-col gap-4 justify-center items-center md:justify-center md:items-start  md:w-1/2">
        <Title>
          <span className="font-bold">Atletismo en Jujuy </span>
          Pequeños Atletas, Grandes Sueños
        </Title>
        <p className="text-center md:text-start text-lg lg:text-2xl">
          Atletismo para niños en Jujuy, menos pantalla, mas deporte.
        </p>
        <button className="px-4 py-3 rounded-xl bg-secondary text-bold text-lg text-white w-fit flex gap-3 justify-center items-center">
          Hablar con la profe <WhatsappIcon className="size-6" />
        </button>
      </div>
      <div className="absolute hidden lg:flex justify-center items-center p-2 size-10 animate-bounce rounded-full bg-transparent border-2 border-white bottom-10 left-1/2">
        <ArrowDownIcon />
      </div>
    </section>
  );
};
