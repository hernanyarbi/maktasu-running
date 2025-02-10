import React, { FC, SVGProps } from "react";

export const ArrowDownIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M18.07 14.43L12 20.5l-6.07-6.07M12 3.5v16.83"
      ></path>
    </svg>
  );
};
