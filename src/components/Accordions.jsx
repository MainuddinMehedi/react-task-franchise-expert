import { useState } from "react";

const Accordions = ({ item, isActive, toggleExpand }) => {
  //   const [active, setActive] = useState(false);

  //   const toggleExpand = () => {
  //     setActive((prev) => !prev);
  //     console.log(active);
  //   };

  return (
    <div
      key={item.id}
      className={`border p-7 rounded-2xl shadow-lg bg-white ${
        isActive ? "row-span-2" : null
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-[22px] text-[#170F49]">{item.name}</h3>
        <div>
          <button
            onClick={toggleExpand}
            className={`h-9 w-9 rounded-lg bg-[#244D4D] ${
              isActive ? "block" : "hidden"
            }`}
          >
            -
          </button>
          <button
            onClick={toggleExpand}
            className={`w-9 h-9 rounded-lg bg-[#F7F7FF] ${
              isActive ? "hidden" : "block"
            }`}
          >
            +
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className={`text-[#6F6C90] text-base ${
            isActive ? "mt-3 block" : "hidden"
          }`}
        >
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default Accordions;
