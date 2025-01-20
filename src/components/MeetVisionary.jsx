import { assets } from "../constants/importImages";

const MeetVisionary = () => {
  return (
    <div className="relative flex space-x-32 mb-7">
      <div className="w-1/4">
        <img
          src={assets.meet_visionary_color_block}
          className="h-[400px] w-[300px] absolute -left-[113px]"
        />
        <img
          src={assets.meet_visionary_photo}
          className="h-[400px] w-[300px] absolute left-[33px]"
        />
      </div>
      <div className="w-3/4 space-y-5">
        <h1 className="font-['Volkhob'] font-bold text-5xl leading-[1.2]">
          <span className="text-[#244D4D]">Meet</span>{" "}
          <span className="text-[#6C6C6C]">the Visionary </span>
        </h1>
        <p className="text-[#5F5F64]">
          “The Franchise Connect” was the catalyst that ignited my journey to
          link people with their next great opportunity. Starting with car sales
          straight out of college and moving into the mortgage sector at
          American Equity Mortgage, I developed my sales skills and work ethic.
          My career took a significant turn when I joined Leader1 Financial,
          where I experienced the profound impact of guiding individuals through
          important life decisions—an approach that became central to my
          mission. Transitioning into franchise consulting was a seamless shift
          for me. I saw clear parallels between my previous experiences and my
          new role, with a focus on helping people make meaningful changes. My
          knack for understanding concerns, listening attentively, and
          delivering thoughtful solutions has been the cornerstone of my success
          in both the mortgage and franchise arenas.
        </p>
        <div className="flex gap-2">
          <button className="h-[57px] w-[300px] bg-[#0077B5] text-white font-semibold text-base rounded-lg">
            LET'S CONNECT ON lINKEDIN
          </button>
          <img src={assets.linkdin_logo} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default MeetVisionary;
