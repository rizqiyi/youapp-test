import React from "react";
import About from "./partials/About";
import Interest from "./partials/Interest";
import ProfileBanner from "./partials/ProfileBanner";

const Index = () => {
  return (
    <div className="flex gap-6 flex-col">
      <ProfileBanner />
      <About />
      <Interest />
    </div>
  );
};

export default Index;
