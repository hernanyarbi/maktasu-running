import Image from "next/image";
import React from "react";

export const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 w-screen h-screen md:max-h-[450px] lg:max-h-screen -z-10">
      <Image
        src="/images/Corriendo-maraton.png"
        alt={"niño corriendo en una maratón"}
        fill
        className="object-cover object-[65%_35%] md:object-[20%_80%]"
        unoptimized
      />
      <div className="absolute bottom-0 w-screen md:w-2/3 h-2/3 md:h-screen bg-gradient-to-t md:bg-gradient-to-r from-white to-transparent"></div>
    </div>
  );
};
