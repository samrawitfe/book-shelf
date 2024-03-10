import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className: string;
}
const MainContainer = ({ children, className }: Props) => {
  return (
    <div>
      <div className={`container mx-auto px-4 py-8 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
