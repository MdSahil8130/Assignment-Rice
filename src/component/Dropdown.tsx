import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
interface DropdownProps {
    title: string;
  }

  const Dropdown: React.FC<DropdownProps> = ({ title })=> {
  return (
    <div className="bg-slate-100 hover:bg-[#00B49D] hover:text-white  p-3 mt-3 rounded-full">
      <button className="w-full ">
        <div className="flex justify-between gap-28">
          <p>{title}</p>
          <ArrowDropDownIcon />
        </div>
      </button>
    </div>
  );
};

export default Dropdown;
