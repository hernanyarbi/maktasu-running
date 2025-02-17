import { titles } from "@/config/font";
import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";

interface ActivityCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export const ActivityCard: FC<ActivityCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 p-3 lg:p-6 w-full md:max-w-[220px] lg:max-w-[300px] bg-secondary text-white rounded-xl gap-3">
      <div className="h-full w-full relative rounded-lg max-w-md  md:h-40 lg:h-48 z-0">
        <Image src={image} fill alt="" className="object-cover rounded-xl z-10" />
      </div>
      <div className="flex flex-col gap-4 lg:min-h-40">
        <h3 className={`${titles.className} text-xl  md:text-2xl font-semibold md:text-start lg:text-2xl`}>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
