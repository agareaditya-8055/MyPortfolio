const AchieveCard = ({ title, description }) => {
  return (
    <div className="bg-achieveColor text-customColor rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className={`text-gray-950`}>{description}</p>
    </div>
  );
};
export default AchieveCard;
