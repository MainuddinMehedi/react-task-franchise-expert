import { assets } from "../constants/importImages";

const TrustedCompanies = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 h-[165px] mb-5 bg-[#F4F6F6]">
      <div>
        <p className="text-[18px] font-semibold text-[#244D4D] tracking-widest">TRUSTED BY OVER 1K+ COMPANIES</p>
      </div>
      <div className="flex gap-20">
        <img src={assets.microsoft} className="h-[24px]" />
        <img src={assets.entrepreneur} className="h-[24px]" />
        <img src={assets.fortune} className="h-[19px]" />
        <img src={assets.business_web} className="h-[29px]" />
        <img src={assets.mashable} className="h-[17px]" />
      </div>
    </div>
  );
};

export default TrustedCompanies;