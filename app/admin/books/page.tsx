import HomePage from "@/app/components/HomePage";
import React from "react";

const AdminHomePage = async () => {
  return <HomePage isAdmin={true} />;
};

export default AdminHomePage;
