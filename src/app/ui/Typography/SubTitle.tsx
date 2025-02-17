import { titles } from "@/config/font";
import React, { FC, ReactNode } from "react";
interface SubTitleProps {
  children: ReactNode;
}
export const SubTitle: FC<SubTitleProps> = ({ children }) => {
  return (
    <h2
      className={`${titles.className} text-2xl text-center md:text-start lg:text-4xl font-semibold`}
    >
      {children}
    </h2>
  );
};
