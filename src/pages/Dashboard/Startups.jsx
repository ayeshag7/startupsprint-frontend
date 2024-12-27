import React from "react";
import StartupCard from "../../components/Startup/StartupCard";
import placeholderimg from "../../assets/placeholder-startup.jpg";

function Startups() {
  return (
    <div className="flex flex-col items-center gap-y-8 justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <StartupCard
        image={placeholderimg}
        name="InnovateX"
        description="A hub for groundbreaking ideas and innovation, driving the future forward."
        members={12}
        valuation={50}
        investments={20}
      />
    </div>
  );
}

export default Startups;
