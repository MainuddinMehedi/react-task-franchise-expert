import { assets } from "../constants/importImages";

const Subscribe = () => {
  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div>
          <div className="h-[407px] relative bg-[#B1B1B1]/35 rounded-tl-[129px] rounded-[20px]">
            {/* bg-items */}
            <div className="absolute -right-7 -top-7 z-30">
              <img src={assets.telegram} alt="" />
            </div>
            <div className="flex justify-end opacity-15 -z-50">
              <img src={assets.subscribe_bg_circles_left} alt="" />
            </div>

            {/* content */}
            <div className="p-20 text-center">
              <div className="absolute top-20 mr-20">
                <h1 className="text-[33px] font-semibold font-['Poppins'] text-[#5E6282]">
                  Subscribe to get information, latest news and other
                  interesting offers about Jadoo
                </h1>
              </div>
              <div className="absolute bottom-[21%] left-[19%] flex gap-4 mr-20">
                <div className="flex items-center bg-white rounded-lg py-2 px-9 gap-2">
                  <img src={assets.email_icon} className="w-[21px] h-[18px]" />
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-[52px] w-[400px] outline-none"
                  />
                </div>
                <button className="h-[68px] w-[180px] bg-[#244D4D] rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>

            {/* left circles */}
            <div className="absolute bottom-0 -z-50">
              <img
                src={assets.subscribe_bg_circles_right}
                className="opacity-15"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
