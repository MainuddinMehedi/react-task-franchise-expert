import { useState } from "react";
import { assets } from "../constants/importImages";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
    },
    {
      id: 2,
      text: "“I'm curious about the names you've given to your Obsidian vaults. Do you keep it simple, like Notes, or go creative with something.”",
      name: "Chris Thomas",
      location: "CEO of Red Button",
    },
    {
      id: 3,
      text: "“Hey, I've been working as prompt engineer and am sharing my approach to help anyone get started (so some of those might be obvious).”",
      name: "chai chang",
      location: "CEO of Redon",
    },
    {
      id: 4,
      text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante of the following tasks a ante of the following.”",
      name: "chang chi",
      location: "CEO of LUis Buitton",
    },
    {
      id: 5,
      text: "“You can break down larger tasks into smaller pieces to see how model behaves at each step. Eg. “write a blog post about X” could consist.”",
      name: "Justin Trudo",
      location: "CEO of CANADA",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  console.log(activeTestimonial);
  console.log(transitioning);

  const handleNext = () => {
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, 500);

    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    console.log(activeTestimonial);
  };

  const handlePrev = () => {
    setTransitioning(true);
    setTimeout(() => {
      setTransitioning(false);
    }, 500);

    setActiveTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    console.log(activeTestimonial);
  };

  const handleCardClick = () => {
    setActiveTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    console.log(activeTestimonial);
  };

  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div className="border h-[370px] w-full flex justify-between">
          {/* left side */}
          <div className="border w-[40%] py-12 pr-9 space-y-6">
            <p className="text-[#5E6282] font-['Poppins'] font-semibold text-lg">
              TESTIMONIALS
            </p>
            <h1 className="text-5xl font-bold text-[#244D4D] font-['Volkhob'] leading-[60px]">
              What people say about Us.
            </h1>
          </div>

          {/* right side */}
          <div className="w-[60%] border flex justify-between px-5 py-">
            <div className="relative">
              {/* first slide */}
              <div
                className={`h-[245px] w-[404px] border bg-white relative p-9 m-9 shadow-lg rounded-lg z-40 transform transition-all duration-500 ease-in-out ${
                  transitioning
                    ? " opacity-80 scale-90 translate-y-[5rem] translate-x-[60px] -z-50"
                    : "opacity-100 scale-100"
                }`}
              >
                <div>
                  <img
                    src={assets.testimony_profile}
                    className="absolute -left-8 -top-8 z-50"
                  />
                </div>
                <p className="font-medium text-base font-['Poppins'] text-[#5E6282] mb-7">
                  {testimonials[activeTestimonial].text}
                </p>
                <h3 className="text-lg font-semibold font-['Poppins'] text-[#5E6282]">
                  {testimonials[activeTestimonial].name}
                </h3>
                <p className="font-normal text-sm font-['Poppins'] text-[#5E6282]">
                  {testimonials[activeTestimonial].location}
                </p>
              </div>

              {/* second slide */}
              <div
                onClick={handleCardClick}
                className={`h-[245px] w-[404px] border p-9 m-9 absolute top-[90px] left-[52px] rounded-lg opacity-80 cursor-pointer transform transition-all duration-500 ease-in-out ${
                  transitioning
                    ? " opacity-100 -translate-y-[5rem] -translate-x-[60px] scale-100 "
                    : " opacity-80 scale-95 translate-y-0 translate-x-0"
                }`}
              >
                <div>
                  <img
                    src={assets.testimony_profile}
                    className="absolute -left-8 -top-8 z-50"
                  />
                </div>
                <p className="font-medium text-base font-['Poppins'] text-[#5E6282] mb-7">
                  {activeTestimonial === testimonials.length - 1
                    ? testimonials[0].text
                    : testimonials[activeTestimonial + 1].text}
                </p>
                <h3 className="text-lg font-semibold font-['Poppins'] text-[#5E6282]">
                  {activeTestimonial === testimonials.length - 1
                    ? testimonials[0].name
                    : testimonials[activeTestimonial + 1].name}
                </h3>
                <p className="font-normal text-sm font-['Poppins'] text-[#5E6282]">
                  {activeTestimonial === testimonials.length - 1
                    ? testimonials[0].location
                    : testimonials[activeTestimonial + 1].location}
                </p>
              </div>
            </div>

            {/* Custom Buttons */}
            <div className="">
              <div className="flex flex-col gap-12 mt-40 ml-3">
                <button
                  onClick={handlePrev}
                  className="text-2xl cursor-pointer w-6 rounded"
                >
                  <img src={assets.testimony_up_arrow} alt="" />
                </button>
                <button
                  onClick={handleNext}
                  className="text-2xl cursor-pointer w-6 rounded"
                >
                  <img src={assets.testimony_down_arrow} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
