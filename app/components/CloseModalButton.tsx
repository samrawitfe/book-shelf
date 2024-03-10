"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CloseModalButton = () => {
  const router = useRouter();

  const handleCloseModal = () => {
    router.back();
  };
  return (
    <button
      onClick={handleCloseModal}
      className="text-black"
      aria-label="Close modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default CloseModalButton;
