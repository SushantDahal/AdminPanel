import {
  Bars3CenterLeftIcon,
  PencilIcon,
  ChevronDownIcon,
  CreditCardIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

const Topbar = ({ showNav, setShowNav }) => {
  return (
    <div
      className={`fixed w-full  py-2 h-15 bg-white flex justify-between items-center transition-all  duration-300 ${
        showNav ? "pl-[13rem] " : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3CenterLeftIcon
          className="h-10 w-8 text-gray-700 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
      <div className="flex gap-3 px-10 mr-6">
        <ChevronDownIcon className="h-6 text-gray-700 cursor-pointer" />

        <CreditCardIcon className="h-6 text-gray-700 cursor-pointer" />
        <Cog8ToothIcon className="h-6  text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};
export default Topbar;
