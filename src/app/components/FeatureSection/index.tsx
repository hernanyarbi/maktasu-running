import { SubTitle } from "@/app/ui/Typography/SubTitle";
import React from "react";
import { FeatureCard } from "./FeatureCard";

const physicalFeatures = [
  "Mejora la salud general y fortalece el corazón.",
  "Combate la obesidad y reduce riesgos de enfermedades.",
  "Fomenta hábitos saludables como el consumo de frutas, verduras y agua.",
];
const emotionalFeatures = [
  "Ayuda a liberar el estrés y a mejorar el estado de ánimo.",
  "Favorece la socialización y fortalece la confianza en sí mismos.",
  "Permite expresar sentimientos y resolver problemas, generando sonrisas al final de cada clase.",
];

export const FeatureSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 gap-10 px-4 w-screen">
      <SubTitle>Beneficios de la Escuela de Atletismo</SubTitle>
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        <FeatureCard title="Físicos" features={physicalFeatures} />
        <FeatureCard title="Emocionales" features={emotionalFeatures} />
      </div>
    </section>
  );
};
