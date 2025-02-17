import { titles } from "@/config/font";
import React, { FC } from "react";

interface FeatureCardProps {
  title: string;
  features: string[];
}

export const FeatureCard: FC<FeatureCardProps> = ({ title, features }) => {
  return (
    <div className="p-8 flex flex-col gap-2 bg-secondary-2 rounded-xl max-w-xs lg:max-w-md justify-start items-center">
      <h3 className={`${titles.className} text-2xl text-center md:text-start lg:text-4xl`}>{title}</h3>
      <ul className="flex flex-col gap-4 mt-4">
        {features.map((feature) => (
          <li key={feature} className="text-lg lg:text-xl max-w-xs">✅ {feature}</li>
        ))}
      </ul>
    </div>
  );
};
