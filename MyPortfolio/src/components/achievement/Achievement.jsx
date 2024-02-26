import React from "react";
import { achieveCard } from "../../utils/contants/Contant";
import AchieveCard from "./AchievementCard";
import { useSelector } from "react-redux";

const Achievement = () => {
  const isDarkMode = useSelector((state) => state.theme.darkMode);
  return (
    <div
      className={`container mx-auto py-12 px-4 ${
        isDarkMode && "text-textColor"
      }`}
    >
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
