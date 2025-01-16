import { assets } from "../constants/importImages";

const InterestedWorking = () => {
  return (
    <div className="">
      <div className="bg-[#244D4D] flex justify-center rounded-br-[238px] h-[470px] w-[100%]">
        <div className="w-10/12 flex justify-between">
          {/* left side */}
          <div className="w-[60%] space-y-7 py-5">
            <h1 className="text-[81px] leading-[95px] text-white font-bold font-['Volkhob']">
              Interest in Working with us?
            </h1>
            <p className="font-semibold text-base text-white ">
              “FranchiesExpert” embodies my dedication to linking individuals
              with their dreams. Anchored in our core values and driven by a
              vision to empower people to become successful business owners, we
              are committed to turning this vision into reality for as many
              people as we can.
            </p>
            <div className="flex justify-between">
              <button className="h-[52px] w-[136px] bg-white text-[#244D4D] flex items-center justify-center gap-3 mt-1">
                <p>Explore</p>
                <img src={assets.interested_working_arrow} className="mt-1" />
              </button>
              <div>
                <img
                  src={assets.interested_working_right_arrow}
                  className="mt-6"
                />
              </div>
            </div>
          </div>

          {/* right side */}
          <div>
            <img
              src={assets.interested_working}
              className="w-[285px] h-[405px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterestedWorking;
