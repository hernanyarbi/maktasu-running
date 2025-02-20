import Image from "next/image";
import { SubTitle } from "../ui/Typography/SubTitle";

export const FooterSection = () => {
  return (
    <section className="bg-secondary flex flex-col items-center py-10 px-4 text-white gap-8">
      <div className="grid md:grid-cols-2 max-w-4xl">
        <div className="flex flex-col gap-4">
          <SubTitle>¡Inscríbete Ahora!</SubTitle>
          <p className="text-lg md:text-xl">
            Para participar, hacé la inscripción con los datos de los chicos y
            la autorización firmada por los papás.
            <br />
            <br /> Recordá venir con ropa cómoda y, si es posible, zapatillas
            deportivas.
            <br />
            <br />
            ¡No te lo pierdas y sumate a esta experiencia atlética!
          </p>
          <button
            className="bg-transparent hover:bg-accent-1 border-2 border-accent-1 
          text-accent-1 hover:text-[#121212] text-lg font-semibold 
          w-fit py-4 px-3 rounded-2xl"
          >
            Hablar con la profe
          </button>
        </div>
        <div className="relative">
          <Image
            src="/images/Miktasu group.jpeg"
            alt="Grupo de la escuela de atletismo"
            fill
            className="size-44 object-cover rounded-xl "
          />
        </div>
      </div>
    </section>
  );
};
