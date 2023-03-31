import React, { useState } from "react";

function DropDown({ name, changeName, droplist }) {
  const [isOpendropdown, setIsopenDropdown] = useState(false);
  return (
    <div
      className="select"
      onClick={()=>setIsopenDropdown(!isOpendropdown)}
      // onMouseEnter={() => {
      //   setIsopenDropdown(!isOpendropdown);
      // }}
      // onMouseLeave={() => {
      //   setIsopenDropdown(!isOpendropdown);
      // }}
    >
      <div className="userSelect">{name} </div>
      {isOpendropdown && (
        <div className="categories">
          {droplist.map((option, idx) => {
            return (
              <div
                key={option + idx}
                onClick={(e) => {
                  changeName(option);
                  setIsopenDropdown(false);
                }}
                className="option"
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDown;
