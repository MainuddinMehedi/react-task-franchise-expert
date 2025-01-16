import { Link, NavLink } from "react-router-dom";
import { assets } from "../constants/importImages";
import { useState } from "react";

const Navbar = () => {
  // const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState("Why Franchising?");

  const menuItems = [
    "Why Franchising?",
    "Our Story",
    "Our Process",
    "Franchise Brands",
    "Contact Us",
    "FAQs",
  ];

  return (
    <div className="flex justify-between items-center mt-5">
      <Link to="/">
        <img className="w-[208] h-[37]" src={assets.logo} alt="" />
      </Link>

      <div className="flex justify-center items-center space-x-8 py-4">
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            className="relative cursor-pointer"
          >
            <span
              className={`text-sm font-medium text-[16px] ${
                active === item ? "text-[#244D4D]" : "text-[#515151]"
              }`}
            >
              {item}
            </span>
            {active === item && (
              <div
                className={`absolute left-0 right-0 bottom-[-9px] transition-all duration-300 ease-in-out ${
                  active === item ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="h-0.5 bg-[#244D4D] w-3/4"></div>
                <div className="h-0.5 bg-[#244D4D] w-2/4 mt-1"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button className="w-[190px] h-[48px] rounded-lg bg-[#244D4D] text-white">
        Get Started Today
      </button>
    </div>
  );
};

export default Navbar;

{
  /* <ul className="flex gap-7">
  <NavLink to={"/#why-franchise"}>
    <p>why Franchising?</p>
    <hr className="w-3/4 border-none h-[1.6px] mb-1 bg-gray-700 hidden" />
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
  </NavLink>
  <NavLink to={"/#our-story"}>
    <p>Our Story</p>
    <hr className="w-3/4 border-none h-[1.6px] mb-1 bg-gray-700 hidden" />
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
  </NavLink>
  <NavLink to={"/#our-process"}>
    <p>Our Process</p>
    <hr className="w-3/4 border-none h-[1.6px] mb-1 bg-gray-700 hidden" />
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
  </NavLink>
  <NavLink to={"#franchise-brands"}>
    <p>Franchise Brands</p>
    <hr className="w-3/4 border-none h-[1.6px] mb-1 bg-gray-700 hidden" />
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
  </NavLink>
  <NavLink to={"#contact-us"}>
    <p>Contact Us</p>
    <hr className="w-3/4 border-none h-[1.6px] mb-1 bg-gray-700 hidden" />
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
  </NavLink>
  <NavLink to={"#FAQs"}>
    <p>FAQs</p>
    <hr className="w-3/4 border-none h-[1.6px] mb-1 bg-gray-700 hidden" />
    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
  </NavLink>
</ul>; */
}
