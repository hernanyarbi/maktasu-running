import Image from "next/image";
import React, { FC } from "react";

interface ActivityCardProps {
  title: string;
  description: string;
  image: string;
}

export const ActivityCard: FC<ActivityCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="grid grid-cols-2 p-3">
      <div>
        <Image />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
