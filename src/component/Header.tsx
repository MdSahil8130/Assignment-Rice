import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <div className="flex items-center gap-28 f">
      <div>
        <p className="text-left mb-2">PLAN A</p>
        <Dropdown title="Select Provider" />
        <Dropdown title="Select Plan" />
      </div>

      <h1 className="text-5xl">VS</h1>

      <div>
        <p className="text-left mb-2">PLAN B</p>
        <Dropdown title="Select Provider" />
        <Dropdown title="Select Plan" />
      </div>
    </div>
  );
};

export default Header;
