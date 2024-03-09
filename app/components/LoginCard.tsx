import React, { ReactNode } from "react";

interface Props {
  imageUrl: string;
  children: ReactNode;
}

const LoginCard = ({ imageUrl, children }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 glass">
        <figure className="pt-6">
          <img src={imageUrl} alt="Logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title self-center">Welcome to BookShelf</h2>
          {/* <p>Please select the view that best matches your role</p> */}
          <div className="card-actions justify-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
