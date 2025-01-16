import { useState } from "react";
import { TabSectionData } from "../constants/TabSectionData";
import { assets } from "../constants/importImages";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(TabSectionData[0].name);

  const handleClick = (e) => {
    setActiveTab(e.target.value);
  };

  const filteredItem = TabSectionData.filter((item) => item.name === activeTab);

  return (
    <div className="flex justify-end">
      <div className="w-[91.6%]">
        <div className="flex space-x-16">
          <div className="w-2/5 space-y-5">
            {/* Tab buttons */}
            <div className="flex mb-10 rounded-md">
              <button
                onClick={(e) => handleClick(e)}
                value={TabSectionData[0].name}
                className={`w-[179px] h-[54px] rounded-lg border-none font-semibold ${
                  activeTab === TabSectionData[0].name
                    ? "bg-[#244D4D] text-white"
                    : "bg-[#F5F5F5] text-[#244D4D] rounded-none"
                }`}
              >
                {TabSectionData[0].name}
              </button>
              <button
                onClick={(e) => handleClick(e)}
                value={TabSectionData[1].name}
                className={`w-[179px] h-[54px] rounded-lg border-none font-semibold ${
                  activeTab === TabSectionData[1].name
                    ? "bg-[#244D4D] text-white"
                    : "bg-[#F5F5F5] text-[#244D4D] rounded-none"
                }`}
              >
                {TabSectionData[1].name}
              </button>
              <button
                onClick={(e) => handleClick(e)}
                value={TabSectionData[2].name}
                className={`w-[179px] h-[54px] rounded-lg border-none font-semibold ${
                  activeTab === TabSectionData[2].name
                    ? "bg-[#244D4D] text-white"
                    : "bg-[#F5F5F5] text-[#244D4D] rounded-none"
                }`}
              >
                {TabSectionData[2].name}
              </button>
            </div>

            <hr className="border-[#244D4D]" />

            {/* heading and description section */}
            {filteredItem.map((item) => (
              <div key={item.name}>
                <div className="space-y-6">
                  <h1 className="text-5xl leading-[1.2] font-bold font-['Volkhob']">
                    <span className="text-[#244D4D]">
                      {item.heading.slice(0, 8)}
                    </span>
                    <span className="text-[#6C6C6C]">
                      {item.heading.slice(8)}
                    </span>
                  </h1>
                  <p className="text-[#5F5F64] font-normal">
                    {item.description}
                  </p>
                  <button className="w-[268px] h-[58px] text-white bg-[#244D4D] rounded-lg">
                    {item.btnText}
                  </button>
                </div>
              </div>
            ))}

            {/* pagination */}
            <div className="flex justify-center">
              <div className="flex justify-between w-[70px]">
                <div
                  className={`h-3 w-3 rounded-full ${
                    activeTab === TabSectionData[0].name
                      ? "bg-[#244D4D]"
                      : "bg-[#C7C7C7]"
                  } `}
                ></div>
                <div
                  className={`h-3 w-3 rounded-full ${
                    activeTab === TabSectionData[1].name
                      ? "bg-[#244D4D]"
                      : "bg-[#C7C7C7]"
                  } `}
                ></div>
                <div
                  className={`h-3 w-3 rounded-full ${
                    activeTab === TabSectionData[2].name
                      ? "bg-[#244D4D]"
                      : "bg-[#C7C7C7]"
                  } `}
                ></div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="relative h-[470px] w-[50%]">
            <div className="absolute bottom-[34px] -left-2 z-20">
              <img
                className="w-[610px] h-[450px] object-contain"
                src={assets.tab_photo}
                alt=""
              />
            </div>
            <div
              className="absolute h-[430px] w-[421px] right-0 bottom-0"
              style={{ backgroundImage: `url('${assets.tab_color_block}')` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;
