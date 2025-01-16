import "./slider.css";
// import Swiper core and required modules
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { assets } from "../constants/importImages";
import { Rating } from "@mui/material";
// import "swiper/swiper-bundle.css";

const Hero = () => {
  return (
    <div className="mt-10 mb-5 flex items-center">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        direction="vertical"
        slidesPerView={1}
        className="h-[550px] w-full !flex"
      >
        <SwiperSlide>
          <div className="flex h-[95%] relative">
            {/* <div className="w-[70%] h-80 border z-20 bg-red-900 relative">hello</div> */}
            <div className="absolute space-y-5 top-1/2 pl-0 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 p-9 pr-17 rounded-md shadow-lg w-[40%]">
              <h1 className="text-5xl font-bold leading-[1.2]">
                <span className="text-[#244D4D]">Franchise </span>
                <span className="text-[#6C6C6C]">
                  Growth and Support Services
                </span>
              </h1>
              <p className="text-gray-600">
                Franchise Growth and Support Services provides comprehensive
                assistance for aspiring and established franchise owners.
              </p>
              <button className="bg-[#244D4D] text-white w-[268px] h-[54px] rounded">
                Book Your Free 1:1 Consultation
              </button>
            </div>

            {/* right side */}
            <div
              className={`bg-hero bg-no-repeat bg-cover h-full w-[75%] ml-auto`}
            >
              <div className="absolute top-3/4 right-[56%] z-40 ">
                <img src={assets.dots} className="h-[105px]" />
              </div>

              <div className="absolute bottom-[65px] right-32 bg-white shadow-md rounded-md p-4 z-30 h-28 w-48">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-[1.6rem] font-bold text-black">4.9</div>
                  <div className="text-gray-600 ">
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#244D4D", // Change filled star color
                        },
                        "& .MuiRating-iconHover": {
                          color: "#244D4D", // Change hover color
                        },
                        "& .MuiRating-icon": {
                          fontSize: "19px", // Set the size of the stars
                          mt: "7px",
                        },
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex relative ">
                    <img
                      src={assets.hero_profile_1}
                      className="h-14 w-14 rounded-full absolute "
                    />
                    <img
                      src={assets.hero_profile_2}
                      className="h-14 w-14 rounded-full absolute left-4"
                    />
                    <img
                      src={assets.hero_profile_3}
                      className="h-14 w-14 rounded-full absolute left-10"
                    />
                    <img
                      src={assets.hero_profile_4}
                      className="h-14 w-14 rounded-full absolute left-16"
                    />
                    <img
                      src={assets.hero_profile_5}
                      className="h-14 w-14 rounded-full absolute left-[75px]"
                    />
                  </div>
                </div>
              </div>

              <div className="font-['Noto Serif'] tracking-wide text-[#717171] absolute bottom-0 mb-4 left-[60%]">
                Expand, Diversify, and Safeguard Your Portfolio
              </div>

              <div className="bg-[#244D4D] text-5xl px-9 py-5 text-white font-thin absolute -right-6 -bottom-4">
                ↓
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex h-[95%] relative">
            {/* <div className="w-[70%] h-80 border z-20 bg-red-900 relative">hello</div> */}
            <div className="absolute top-1/2 pl-0 transform -translate-y-1/2 z-10 bg-white bg-opacity-90 p-9 pr-17 rounded-md shadow-lg w-[40%]">
              <h1 className="text-5xl font-bold mb-4">
                <span className="text-[#244D4D]">Franchise </span>
                <span className="text-[#6C6C6C]">
                  Growth and Support Services
                </span>
              </h1>
              <p className="text-gray-600 mb-4">
                Franchise Growth and Support Services provides comprehensive
                assistance for aspiring and established franchise owners.
              </p>
              <button className="bg-[#244D4D] text-white w-[268px] h-[54px] rounded">
                Book Your Free 1:1 Consultation
              </button>
            </div>

            {/* right side */}
            <div
              className={`bg-hero bg-no-repeat bg-cover h-full w-[75%] ml-auto`}
            >
              <div className="absolute top-3/4 right-[56%] z-40 ">
                <img src={assets.dots} className="h-[105px]" />
              </div>

              <div className="absolute bottom-[65px] right-32 bg-white shadow-md rounded-md p-4 z-30 h-28 w-48">
                <div className="flex items-center justify-center gap-2">
                  <div className="text-[1.6rem] font-bold text-black">4.9</div>
                  <div className="text-gray-600 ">
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.5}
                      precision={0.5}
                      readOnly
                      sx={{
                        "& .MuiRating-iconFilled": {
                          color: "#244D4D", // Change filled star color
                        },
                        "& .MuiRating-iconHover": {
                          color: "#244D4D", // Change hover color
                        },
                        "& .MuiRating-icon": {
                          fontSize: "19px", // Set the size of the stars
                          mt: "7px",
                        },
                      }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex relative ">
                    <img
                      src={assets.hero_profile_1}
                      className="h-14 w-14 rounded-full absolute "
                    />
                    <img
                      src={assets.hero_profile_2}
                      className="h-14 w-14 rounded-full absolute left-4"
                    />
                    <img
                      src={assets.hero_profile_3}
                      className="h-14 w-14 rounded-full absolute left-10"
                    />
                    <img
                      src={assets.hero_profile_4}
                      className="h-14 w-14 rounded-full absolute left-16"
                    />
                    <img
                      src={assets.hero_profile_5}
                      className="h-14 w-14 rounded-full absolute left-[75px]"
                    />
                  </div>
                </div>
              </div>

              <div className="font-['Noto Serif'] tracking-wide text-[#717171] absolute bottom-0 mb-4 left-[60%]">
                Expand, Diversify, and Safeguard Your Portfolio
              </div>

              <div className="bg-[#244D4D] text-5xl px-9 py-5 text-white font-thin absolute -right-6 -bottom-4">
                ↓
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Custom Buttons */}
        <div className="w-[128px]">
          <div className="flex flex-col gap-4 mt-32 ml-9">
            <button className="custom-next scale- text-2xl cursor-pointer bg-[#244D4D] text-white w-6 rounded">
              ↓
            </button>
            <button className="custom-prev scale- text-2xl cursor-pointer bg-[#244D4D] text-white w-6 rounded">
              ↑
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
