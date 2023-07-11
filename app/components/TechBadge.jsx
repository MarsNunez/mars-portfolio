const TechBadge = ({ name }) => {
  return (
    <div className="bg-white text-[#262526] border border-[#2cec8c] shadow-lg w-fit rounded-full px-2 py-1 text-sm">
      <p>{name}</p>
    </div>
  );
};

export default TechBadge;
