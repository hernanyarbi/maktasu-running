import { SubTitle } from "@/app/ui/Typography/SubTitle";
import React from "react";
import { ValueDescriptionList } from "./ValueDescriptionList";

export const ValuesSection = () => {
  return (
    <section className="bg-secondary flex flex-col items-center py-10 px-4 text-white gap-8">
      <SubTitle>Valores y Propósito</SubTitle>
      <ValueDescriptionList/>
    </section>
  );
};
