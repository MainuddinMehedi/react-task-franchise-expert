import { useState } from "react";
import { assets } from "../constants/importImages";

const Try = () => {
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
      name: "Chai Chang",
      location: "CEO of Redon",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return; // Prevent spamming the button
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
      setIsTransitioning(false);
    }, 500); // Duration of the transition
  };

  const handlePrev = () => {
    if (isTransitioning) return; // Prevent spamming the button
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTestimonial((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setIsTransitioning(false);
    }, 500); // Duration of the transition
  };

  return (
    <div className="flex justify-center">
      <div className="w-10/12">
        <div className="border h-[370px] w-full flex justify-between">
          {/* Left side */}
          <div className="border w-[40%] py-12 pr-9">
            <p className="text-[#5E6282]">TESTIMONIAL</p>
            <h1 className="text-5xl font-bold text-[#244D4D] font-['Volkhob']">
              What people say about Us.
            </h1>
          </div>

          {/* Right side */}
          <div className="w-[60%] border flex justify-between px-5">
            <div className="relative overflow-hidden h-[250px] w-[404px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 bg-white p-9 shadow-lg rounded-lg transform transition-all duration-500 ease-in-out ${
                    index === activeTestimonial
                      ? "opacity-100 scale-100 translate-x-0 z-20"
                      : "opacity-0 scale-90 translate-x-12 z-10"
                  }`}
                >
                  <div>
                    <img
                      src={assets.testimony_profile}
                      className="absolute -left-8 -top-8 z-50"
                      alt="Profile"
                    />
                  </div>
                  <p className="font-medium text-base font-['Poppins'] text-[#5E6282] mb-7">
                    {testimonial.text}
                  </p>
                  <h3 className="text-lg font-semibold font-['Poppins'] text-[#5E6282]">
                    {testimonial.name}
                  </h3>
                  <p className="font-normal text-sm font-['Poppins'] text-[#5E6282]">
                    {testimonial.location}
                  </p>
                </div>
              ))}
            </div>

            {/* Custom Buttons */}
            <div>
              <div className="flex flex-col gap-12 mt-32 ml-3">
                <button
                  onClick={handlePrev}
                  className="text-2xl cursor-pointer bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex justify-center items-center"
                >
                  <img src={assets.testimony_up_arrow} alt="Up" />
                </button>
                <button
                  onClick={handleNext}
                  className="text-2xl cursor-pointer bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex justify-center items-center"
                >
                  <img src={assets.testimony_down_arrow} alt="Down" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Try;

// import { useState } from "react";
// import { assets } from "../constants/importImages";

// const Try = () => {
//   const testimonials = [
//     {
//       id: 1,
//       text: "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
//       name: "Mike Taylor",
//       location: "Lahore, Pakistan",
//     },
//     {
//       id: 2,
//       text: "“I'm curious about the names you've given to your Obsidian vaults. Do you keep it simple, like Notes, or go creative with something.”",
//       name: "Chris Thomas",
//       location: "CEO of Red Button",
//     },
//     {
//       id: 3,
//       text: "“Hey, I've been working as prompt engineer and am sharing my approach to help anyone get started (so some of those might be obvious).”",
//       name: "chai chang",
//       location: "CEO of Redon",
//     },
//     {
//       id: 4,
//       text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante of the following tasks a ante of the following.”",
//       name: "chang chi",
//       location: "CEO of LUis Buitton",
//     },
//     {
//       id: 5,
//       text: "“You can break down larger tasks into smaller pieces to see how model behaves at each step. Eg. “write a blog post about X” could consist.”",
//       name: "Justin Trudo",
//       location: "CEO of US",
//     },
//   ];

//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const handleNext = () => {
//     setActiveTestimonial((prev) =>
//       prev === testimonials.length - 1 ? 0 : prev + 1
//     );
//   };

//   const handlePrev = () => {
//     setActiveTestimonial((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="flex justify-center">
//       <div className="w-10/12">
//         <div className="border h-[370px] w-full flex justify-between">
//           {/* Left side */}
//           <div className="border w-[40%] py-12 pr-9">
//             <p className="text-[#5E6282]">TESTIMONIAL</p>
//             <h1 className="text-5xl font-bold text-[#244D4D] font-['Volkhob']">
//               What people say about Us.
//             </h1>
//           </div>

//           {/* Right side */}
//           <div className="w-[60%] border flex justify-between px-5 py-">
//             <div className="relative overflow-hidden h-[250px]">
//               {/* Current testimonial */}
//               <div
//                 className={`h-[245px] w-[404px] border bg-white absolute p-9 shadow-lg rounded-lg z-20 transform transition-all duration-500 ease-in-out ${
//                   activeTestimonial % 2 === 0
//                     ? "opacity-100 scale-100 translate-x-0"
//                     : "opacity-0 -translate-x-12"
//                 }`}
//               >
//                 <div>
//                   <img
//                     src={assets.testimony_profile}
//                     className="absolute -left-8 -top-8 z-50"
//                   />
//                 </div>
//                 <p className="font-medium text-base font-['Poppins'] text-[#5E6282] mb-7">
//                   {testimonials[activeTestimonial].text}
//                 </p>
//                 <h3 className="text-lg font-semibold font-['Poppins'] text-[#5E6282]">
//                   {testimonials[activeTestimonial].name}
//                 </h3>
//                 <p className="font-normal text-sm font-['Poppins'] text-[#5E6282]">
//                   {testimonials[activeTestimonial].location}
//                 </p>
//               </div>

//               {/* Next testimonial */}
//               <div
//                 className={`h-[245px] w-[404px] border bg-gray-100 absolute p-9 shadow-md rounded-lg z-10 transform transition-all duration-500 ease-in-out ${
//                   activeTestimonial % 2 === 0
//                     ? "opacity-0 translate-x-12 scale-90"
//                     : "opacity-100 scale-100 translate-x-0"
//                 }`}
//               >
//                 <div>
//                   <img
//                     src={assets.testimony_profile}
//                     className="absolute -left-8 -top-8 z-50"
//                   />
//                 </div>
//                 <p className="font-medium text-base font-['Poppins'] text-[#5E6282] mb-7">
//                   {
//                     testimonials[(activeTestimonial + 1) % testimonials.length]
//                       .text
//                   }
//                 </p>
//                 <h3 className="text-lg font-semibold font-['Poppins'] text-[#5E6282]">
//                   {
//                     testimonials[(activeTestimonial + 1) % testimonials.length]
//                       .name
//                   }
//                 </h3>
//                 <p className="font-normal text-sm font-['Poppins'] text-[#5E6282]">
//                   {
//                     testimonials[(activeTestimonial + 1) % testimonials.length]
//                       .location
//                   }
//                 </p>
//               </div>
//             </div>

//             {/* Custom Buttons */}
//             <div>
//               <div className="flex flex-col gap-12 mt-32 ml-3">
//                 <button
//                   onClick={handlePrev}
//                   className="scale- text-2xl cursor-pointer bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex justify-center items-center"
//                 >
//                   <img src={assets.testimony_up_arrow} alt="Up" />
//                 </button>
//                 <button
//                   onClick={handleNext}
//                   className="scale- text-2xl cursor-pointer bg-gray-200 text-gray-600 w-6 h-6 rounded-full flex justify-center items-center"
//                 >
//                   <img src={assets.testimony_down_arrow} alt="Down" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Try;
