import React from "react";
import AchievementCard from "./AchievementCard";
import { achieveCard } from "../../utils/contants/Contant";
import AchieveCard from "./AchievementCard";
// import { achieveCard } from "../../utils/constant/Constant";

const Achievement = () => {
  return (
    <div className={`container mx-auto py-12 px-4`}>
      <h2 className={`text-3xl font-bold text-center mb-8  `}>Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achieveCard.map((item) => (
          <AchieveCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Achievement;
