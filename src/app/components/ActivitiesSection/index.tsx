import React from "react";
import { ActivityCard } from "./ActivityCard";
import { SubTitle } from "@/app/ui/Typography/SubTitle";
import imageActivity from "../../../../public/images/Lanzando una pelota.png";
const activities = [
  {
    title: "Entrada en calor",
    description:
      "Se inicia con movilidad articular y la entrada en calor. Son importantes para evitar la fatiga y lesiones de los niños en las actividades.",
    image: "/images/Lanzando una pelota.png",
  },
  {
    title: "Estado Físico",
    description:
      "Mejoramos las capacidades físicas coordinativas y condicionales en cada uno de los niños que asisten a la escuela.",
    image: imageActivity,
  },
  {
    title: "Torneos",
    description:
      "Mejoramiento técnico de las actividades (Correr, salto en largo, etc.) en la que se van a desempeñar para los torneos mensuales.",
    image: imageActivity,
  },
];
export const ActivitiesSection = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10 px-4 gap-10 w-screen">
      <SubTitle>Actividades que realizan los chicos</SubTitle>
      <div className=" flex flex-col md:flex-row gap-4">
        {activities.map((activity) => (
          <ActivityCard key={activity.title} {...activity} />
        ))}
      </div>
    </section>
  );
};
