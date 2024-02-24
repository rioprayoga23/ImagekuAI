import { UserButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default HomePage;
