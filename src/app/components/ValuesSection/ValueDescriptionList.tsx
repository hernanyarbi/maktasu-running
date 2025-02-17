import React from "react";
import { ValueDescription } from "./ValueDescription";

export const ValueDescriptionList = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 lg:max-w-4xl">
      <ValueDescription icon="🥇">
        La <span className="font-semibold">Escuela de Atletismo Maktasu</span>{" "}
        surge para ofrecer a los niños del barrio una alternativa a deportes
        tradicionales.
      </ValueDescription>
      <ValueDescription icon="🥈">
        El <span className="font-semibold">atletismo</span> es un deporte
        completo con disciplinas como:{" "}
        <span className="font-semibold">
          lanzamiento de pelota; carreras; relevos; vallas; y saltos.
        </span>
      </ValueDescription>
      <ValueDescription icon="🥉">
        Fomentamos el desarrollo integral, la{" "}
        <span className="font-semibold">
          disciplina y el trabajo en equipo.
        </span>
      </ValueDescription>
    </div>
  );
};
