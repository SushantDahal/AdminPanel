import React, { useState } from "react";

const Addproduct = ({ showNav, setShowNav }) => {
  const [click, setClick] = useState(true);
  function handleClick() {
    setClick(!click);
  }
  return (
    <div
      className={`  h-15 bg-[#ebe7ee] min-w-[200px] flex w-full h-full pt-20 transition-all  duration-300 ${
        showNav ? "pl-56 " : ""
      }`}
    >
      <div className="pl-4 md:pl-16  w-full">
        <h1 className="text-2xl font-bold uppercase text-black ">
          Add for product
        </h1>
        <small className="text-gray-500 text-[14px]">
          order placed across your store
        </small>
        <div className="grid md:grid-cols-3 gap-8 mr-10 my-4 cursor-pointer">
          <div className="bg-white col-span-2 rounded-md">
            <div>
              <h2 className="py-4 text-gray-500 px-2 text-xl ">
                Product Inforamation
              </h2>

              <div className="flex flex-col mx-2 ">
                <label className="text-gray-500  text-[12px] font-bold">
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Product title"
                  className="pl-4  mr-10 my-2 py-2 rounded-md border-[gray] border-2 "
                />
                <label className="text-gray-500 my-2  text-[12px]text-xs font-bold">
                  DESCRIPTION <span className="text-gray-300">(Required)</span>
                </label>
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="10"
                  className="border-2 px-4 mb-4 max-w-[500px] h-[200px] border-[gray]  rounded-md"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md max-h-[320px]">
            <h2 className="py-4 text-gray-500 px-2 text-xl ">Pricing</h2>
            <div className="flex flex-col mx-2">
              <label className="text-gray-500  text-[12px] font-bold">
                BASE PRICE
              </label>
              <input
                type="text"
                placeholder="Price"
                className="pl-4  mr-10 my-2 py-2 rounded-md border-[gray] border-2 "
              />
              <label className="text-gray-500 text-[12px] font-bold mt-3">
                DISCOUNTED PRICE
              </label>
              <input
                type="text"
                placeholder="Discounted Price"
                className="pl-4  mr-10 my-2 py-2 rounded-md border-[gray] border-2 "
              />
              <hr className="my-4 w-[90%] mx-auto " />

              <div className="flex justify-between" onClick={handleClick}>
                <div>
                  <h1 className="font-bold mx-2">In Stock</h1>
                </div>
                <div
                  className={
                    click
                      ? "bg-[#e07575] w-14 h-7 rounded-full"
                      : "bg-[#a0bce0] w-14 h-7 rounded-full"
                  }
                >
                  <div
                    className={
                      click
                        ? "bg-white w-5 rounded-full absolute m-1 duration-200 h-5 "
                        : "bg-[#e07575] w-5 rounded-full  m-1  h-5 ml-8 duration-200"
                    }
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addproduct;
