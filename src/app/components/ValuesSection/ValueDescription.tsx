import React, { FC, ReactNode } from "react";

interface ValueDescriptionProps {
  children: ReactNode;
  icon: ReactNode;
}

export const ValueDescription: FC<ValueDescriptionProps> = ({
  icon,
  children,
}) => {
  return (
    <div className="flex md:flex-col justify-start items-center w-full max-w-xs md:max-w-[50px]: gap-2">
      <p className="text-xl md:text-4xl ">{icon}</p> 
      <p className="md:text-center md:text-lg lg:text-xl">{children}</p>
    </div>
  );
};
