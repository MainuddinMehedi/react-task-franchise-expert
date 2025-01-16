import { useState } from "react";
import { FAQData } from "../constants/FAQData";
import Accordions from "./Accordions";

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleExpand = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div className="space-y-14 bg-[#EFEFEF] px-10 py-5 rounded-[20px]">
          <div className="text-center">
            <p className="text-lg font-semibold font-['Poppins'] text-[#5E6282] mb-3">
              FAQ
            </p>
            <h1 className="font-bold text-5xl font-['Volkhob'] text-[#14183E]">
              Frequently Asked Questions
            </h1>
          </div>

          {/* accordions */}
          <div className="grid grid-cols-2 gap-5">
            {FAQData?.map((item) => (
              <Accordions
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                toggleExpand={() => toggleExpand(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
