const Badge = ({ name, icon }) => (
  <div className="border border-[#454545] text-[#b7b7b7] text-xs w-fit rounded-2xl px-2 py-1">
    <p className="uppercase flex gap-1">
      <span className="text-sm">{icon}</span>
      {name}
    </p>
  </div>
);

export default Badge;
