import { forwardRef } from "react";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import logo from "../Assets/ferox-transparent.png";

const Sidebar = ({ showNav }) => {
  return (
    <div
      className={
        showNav
          ? "fixed w-56 h-full bg-[#CDF1B0] transition-all  duration-300  "
          : "hidden "
      }
    >
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img className="w-32 h-auto" alt="/" src={logo} />
        </picture>
      </div>
      <div className="flex flex-col">
        <div className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center">
          <div className="mr-2">
            <HomeIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Home</p>
          </div>
        </div>

        <div className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center">
          <div className="mr-2">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Account</p>
          </div>
        </div>

        <div className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center">
          <div className="mr-2">
            <CreditCardIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Billing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
