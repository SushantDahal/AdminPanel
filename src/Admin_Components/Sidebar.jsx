import { useState } from "react";
import { HomeIcon, UserIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import logo from "../Assets/ferox-transparent.png";

const Sidebar = ({ showNav, setActiveComponent }) => {
  const [product, setProduct] = useState(true);

  function ProductList() {
    setProduct(!product);
  }

  function handleComponentClick(component) {
    setActiveComponent(component);
  }
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
        <div
          className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center hover:bg-[#e07575]"
          onClick={() => {
            handleComponentClick("home");
          }}
        >
          <div className="mr-2">
            <HomeIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Home</p>
          </div>
        </div>

        <div className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center hover:bg-[#e07575] ">
          <div className="mr-2">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p>Account</p>
          </div>
        </div>

        <div
          onClick={ProductList}
          className="pl-6 pt-3 mx-5 rounded-t-md text-center cursor-pointer flex items-center hover:bg-[#e07575]"
        >
          <div className="mr-2 ">
            <ChevronDownIcon className="h-5 w-5 " />
          </div>
          <div>
            <p>Product</p>
          </div>
        </div>
        <div
          className={`${
            product
              ? "max-h-0 overflow-hidden duration-300"
              : "max-h-[150px] duration-500"
          } bg-white mx-5 rounded-b-md`}
        >
          <ul className="flex flex-col justify-center items-center list-disc cursor-pointer text-[#000000]">
            <li
              className="my-2 hover:borer-[#db4444] bg-[#a0bce0] hover:bg-[#e07575] py-1 px-2 rounded-md text-[15px]"
              onClick={() => {
                handleComponentClick("addProduct");
              }}
            >
              Add Product
            </li>
            <li
              className="my-2 hover:borer-[#db4444] bg-[#a0bce0] hover:bg-[#e07575] py-1 px-2 rounded-md text-[15px]"
              id="productList"
            >
              Product List
            </li>
            <li
              className="my-2 hover:borer-[#db4444] bg-[#a0bce0] hover:bg-[#e07575] py-1 px-2 rounded-md text-[15px]"
              id="CategoryList"
            >
              Category list
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
