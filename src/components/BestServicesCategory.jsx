import { assets } from "../constants/importImages";

const BestServicesCategory = () => {
  return (
    <div className="space-y-12">
      <div className="text-center mt-20 space-y-2">
        <p className="text-[#5E6282] font-semibold text-lg font-['Poppins']">
          CATEGORY
        </p>
        <h1 className="font-bold text-5xl font-['Volkhob'] text-[#14183E]">
          We Offer Best Services
        </h1>
      </div>

      <div className="relative flex justify-between">
        <div className="w-[27%] h-[440px] rounded-[55px] px-8 py-3 text-center bg-white hover:shadow-lg transition-shadow group">
          <div className="space-y-4">
            <div className="flex justify-center">
              <img src={assets.honesty_photo} className="w-[171px] h-[162px]" />
            </div>
            <h1 className="text-[#1E1D4C] font-semibold text-3xl">Honesty</h1>
            <p className="text-[#5E6282] font-medium text-xl leading-8">
              We prioritize authenticity and follow a transparent, non-pushy
              approach.
            </p>
            <div
              className="absolute -left-[59px] -bottom-[46px] h-[155px] w-[155px] -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                backgroundImage: `url('${assets.advocacy_color_block}')`,
              }}
            ></div>
          </div>
        </div>
        <div className="w-[27%] h-[440px] rounded-[55px] px-8 py-3 text-center bg-white hover:shadow-lg transition-shadow group">
          <div className="space-y-4 bg-white">
            <div className="flex justify-center">
              <img src={assets.advocacy} className="w-[171px] h-[162px]" />
            </div>
            <h1 className="text-[#1E1D4C] font-semibold text-3xl">Advocacy</h1>
            <p className="text-[#5E6282] font-medium text-xl leading-8">
              Our advocacy extends to both individuals seeking franchise
              opportunities and franchises looking for the right candidates.
            </p>
          </div>
          <div
            className="absolute left-[31%] -bottom-[46px] h-[155px] w-[155px] -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `url('${assets.advocacy_color_block}')`,
            }}
          ></div>
        </div>

        <div className="w-[27%] h-[440px] rounded-[55px] px-8 py-3 text-center bg-white hover:shadow-lg transition-shadow group">
          <div className="space-y-4 bg-white">
            <div className="flex justify-center">
              <img src={assets.availability} className="w-[171px] h-[162px]" />
            </div>
            <h1 className="text-[#1E1D4C] font-semibold text-3xl">
              Availability
            </h1>
            <p className="text-[#5E6282] font-medium text-xl leading-8">
              Our unwavering commitment is to always be there when you need us.
            </p>
          </div>
          <div
            className="absolute right-[19%] -bottom-[46px] h-[155px] w-[155px] -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              backgroundImage: `url('${assets.advocacy_color_block}')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BestServicesCategory;
