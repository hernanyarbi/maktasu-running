import { SubTitle } from "@/app/ui/Typography/SubTitle";
import Image from "next/image";
import React from "react";

export const LocationSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-4 gap-10">
      <SubTitle>Entrenamos en la cancha de la Olla</SubTitle>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="relative w-[320px] lg:w-[450px] h-64 md:h-72">
          <Image
            src="/images/Cancha de la olla.jpg"
            alt="Cancha de la olla"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-[320px] lg:w-[450px] h-fit md:h-72 flex flex-col gap-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3061.033782772754!2d-65.29333396007512!3d-24.164607047019114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0fa8d8084709%3A0xf07d86dd9f255189!2sCANCHA%20%22LA%20OLLA%22!5e0!3m2!1ses-419!2sar!4v1740051986844!5m2!1ses-419!2sar"
            className="w-full h-64 md:h-full rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="text-lg font-semibold">Calle 70 entre C.59 y Av Costanera, B Campo Verde, San Salvador De Jujuy, Argentina</p>
        </div>
      </div>
    </section>
  );
};
