import { assets } from "../constants/importImages";

const Footer = () => {
  return (
    <div className="flex justify-center bg-[#EFEFEF]">
      <div className="w-10/12">
        <div className="flex justify-between h-[300px] pt-16 bg-[#EFEFEF]">
          <div className="space-y-5 w-[28%]">
            <img src={assets.logo} className="" />
            <p className="font-medium text-sm font-['Poppins'] text-[#5E6282]">
              Book a consultation with us and get a solution instant.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="font-bold text-[21px] text-[#080809] font-['Noto Serif']">
              Company
            </h2>
            <ul className="space-y-3">
              <li className="font-medium text-lg text-[#5E6282]">About</li>
              <li className="font-medium text-lg text-[#5E6282]">Careers</li>
              <li className="font-medium text-lg text-[#5E6282]">Mobile</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-bold text-[21px] text-[#080809] font-['Noto Serif']">
              Contact
            </h2>
            <ul className="space-y-3">
              <li className="font-medium text-lg text-[#5E6282]">Help/FAQ</li>
              <li className="font-medium text-lg text-[#5E6282]">Press</li>
              <li className="font-medium text-lg text-[#5E6282]">Affiliates</li>
            </ul>
          </div>

          <div className="space-y-5">
            <h2 className="font-bold text-[21px] text-[#080809] font-['Noto Serif']">
              More
            </h2>
            <ul className="space-y-3">
              <li className="font-medium text-lg text-[#5E6282]">Here</li>
              <li className="font-medium text-lg text-[#5E6282]">heel</li>
              <li className="font-medium text-lg text-[#5E6282]">donno</li>
            </ul>
          </div>

          <div className="w-[25%] flex flex-col items-center">
            <div className="flex">
              <img src={assets.fb} alt="" />
              <img src={assets.insta} alt="" />
              <img src={assets.x} alt="" />
            </div>
            <p className="font-medium text-lg font-['Poppins'] text-[#5E6282]">
              Discover our app
            </p>
            {/* stores */}
            <div className="flex space-x-3 mt-5">
              <img src={assets.play_store} className="" />
              <img src={assets.app_store} className="" />
            </div>
          </div>
        </div>

        <p className="text-center mb-5 font-medium text-sm text-[#5E6282]">
          All rights reserved@FranchiesExpert
        </p>
      </div>
    </div>
  );
};

export default Footer;
