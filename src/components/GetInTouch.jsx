import { assets } from "../constants/importImages";

const GetInTouch = () => {
  return (
    <div
      className={`p-10 flex items-center justify-center bg-send_msg_bg max-h-max w-[100%] bg-cover bg-no-repeat bg-center box-border`}
    >
      <div className="flex flex-col items-center w-[68%] p-10 bg-[#F3F3F380]/50 backdrop-blur-lg rounded-[41px]">
        <h1 className="text-[40px] leading-[48px] font-normal text-white mb-4">
          Send us a Message!
        </h1>
        <img src={assets.sent_msg_underline} className="ml-24" />
        <div className="space-y-5 mt-5">
          <div>
            <label htmlFor="name" className="text-white">
              name
            </label>
            <div className="flex gap-4 ">
              <input
                type="text"
                className="w-[315px] h-12 px-4 py-2 outline-none"
                id="name"
                placeholder="First name.."
              />
              <input
                type="text"
                className="w-[315px] h-12 px-4 py-2 outline-none"
                name=""
                id="name"
                placeholder="Last name"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              type="email"
              className="w-[648px] h-12 block px-4 py-2 outline-none"
              name=""
              id="email"
              placeholder="youremail@gmail.com"
            />
          </div>
          <div>
            <label htmlFor="textarea" className="text-white">
              Message
            </label>
            <textarea
              type="textarea"
              className="block w-[648px] px-4 py-2 outline-none"
              rows={4}
              id="textarea"
              placeholder="Write a message here..."
            ></textarea>
          </div>
          <div className="flex flex-col items-end">
            <button className="flex bg-white h-12 w-[200px] gap-4 items-center justify-center">
              <p className="text-base font-semibold text-[#244D4D]">
                Send Message
              </p>
              <img
                src={assets.arrow_right}
                className="w-[24px] h-[24px] mt-1"
              />
            </button>
            <img
              src={assets.sent_msg_curly_arrow}
              className="w-[73px] h-[24px] mt-6 mr-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
