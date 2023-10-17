import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Addproduct = ({ showNav, setShowNav }) => {
  const [click, setClick] = useState(true);
  function handleClick() {
    setClick(!click);
  }

  // list option on select vendor CATEGORY
  const [Vendor, selectVendor] = useState("");

  const handleVendor = (select) => {
    selectVendor(select);
  };

  // category Option on select vendor
  const [category, categoryOption] = useState(false);
  function Option() {
    categoryOption(!category);
  }

  // Import image
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const handleImageUpload = (e) => {
    const files = e.target.files;
    const urls = [];
    for (const file of files) {
      const url = URL.createObjectURL(file);
      urls.push(url);
    }
    setSelectedImages([...selectedImages, ...files]);
    setImageUrls([...imageUrls, ...urls]);
  };
  // Delete image
  const handleImageDelete = (index) => {
    const updatedImages = [...selectedImages];
    const updatedUrls = [...imageUrls];

    updatedImages.splice(index, 1);
    updatedUrls.splice(index, 1);

    setSelectedImages(updatedImages);
    setImageUrls(updatedUrls);
  };
  // Import thumbnail images
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);

  const handleThumbnailUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedThumbnail(file);
    }
  };

  const handleThumbnailDelete = () => {
    setSelectedThumbnail(null);
  };

  return (
    <div
      className={`  h-[1200px] min-w-[200px] flex w-full  pt-20 transition-all  duration-300 ${
        showNav ? "pl-56 " : ""
      }`}
    >
      <div className="pl-4 md:pl-10 mr-4   w-full ">
        <div className="flex flex-col ">
          <h1 className="text-3xl font-bold uppercase text-black  ">
            Add for product
          </h1>
          <small className="text-gray-500 text-xs">
            order placed across your store
          </small>
        </div>
        <div className="grid lg:grid-cols-3 gap-2 mr-10 my-4 cursor-pointer ">
          <div className="bg-[#CDF1B0] col-span-2 rounded-md mb-5">
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
          {/* Pricing section */}

          <div className="bg-[#CDF1B0] rounded-md max-h-[340px] ">
            <div className="flex lg:grid gap-6">
              <div className="border-gray border-r-2 border-dashed ">
                <h2 className="py-4 text-gray-500 px-2 text-xl ">Pricing</h2>
                <div className="flex flex-col mx-2">
                  <label className="text-gray-500  text-[12px] font-bold">
                    BASE PRICE
                  </label>
                  <input
                    type="text"
                    placeholder="Price"
                    className="pl-4  mr-10 my-2 py-2 rounded-md border-[gray] border-2 min-w-[200px]"
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

                  <div
                    className="flex justify-around py-2"
                    onClick={handleClick}
                  >
                    <div>
                      <h1 className="font-bold mx-2 text-gray-500">In Stock</h1>
                    </div>
                    <div
                      className={
                        click
                          ? "bg-[#00ff66] w-14 h-7 rounded-full"
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
              {/* Organize Section */}
              <div className="bg-[#CDF1B0] h-[170px] rounded-md min-w-[180px]">
                <h2 className="py-4 text-gray-500 px-2 text-xl ">Organize</h2>
                <div className="flex flex-col ">
                  <label className="text-gray-500  text-[12px] font-bold ml-2">
                    CATEGORY
                  </label>
                  <div
                    className="flex justify-between my-2 cursor-pointer  items-center rounded-md border-[gray] border-2 h-10  mr-6 ml-2"
                    onClick={Option}
                  >
                    <input
                      type="text"
                      placeholder="Select Vendor"
                      className="pl-4 outline-none bg-transparent  font-mono"
                      value={Vendor}
                    />
                    <ChevronDownIcon className="w-6 mr-6 text-gray-500" />
                  </div>
                  <div
                    className={
                      category
                        ? "bg-[#a0bce0] px-2 h-[170px] grid duration-300 rounded-b-md"
                        : "h-0 overflow-hidden duration-300"
                    }
                  >
                    <ul className="">
                      <li
                        className=" hover:bg-white py-1 px-2 max-w-[250px]"
                        onClick={() => handleVendor("Household")}
                      >
                        Household
                      </li>
                      <li
                        className=" hover:bg-white py-1 px-2 max-w-[250px]"
                        onClick={() => handleVendor("Management")}
                      >
                        Management
                      </li>
                      <li
                        className=" hover:bg-white py-1 px-2 max-w-[250px]"
                        onClick={() => handleVendor("Electronic")}
                      >
                        Electronic
                      </li>
                      <li
                        className=" hover:bg-white py-1 px-2 max-w-[250px]"
                        onClick={() => handleVendor("Office")}
                      >
                        Office
                      </li>
                      <li
                        className=" hover:bg-white py-1 px-2 max-w-[250px]"
                        onClick={() => handleVendor("Automotive")}
                      >
                        Automotive
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Thumnail section */}
          {/* Add Thumbnail Section */}
          <div className="bg-[#CDF1B0] col-span-2 px-4 py-1 mb-8 pb-5 rounded-md">
            <div className="flex justify-between  px-4 py-2">
              <h1 className="text-gray-500 font-bold">Thumbnail Image</h1>
              <p className="text-[#396ad3]">Add a thumbnail image</p>
            </div>
            <div className="flex items-center justify-center  h-c flex-col border-dashed border-2 border-gray-600 ">
              {selectedThumbnail ? (
                <div className=" bg-white rounded-b-md my-1">
                  <img
                    src={URL.createObjectURL(selectedThumbnail)}
                    alt="Thumbnail Img"
                    style={{ width: "120px", height: "100px" }}
                  />
                  <hr className="my-2 w-[90%] mx-auto " />

                  <button
                    onClick={handleThumbnailDelete}
                    className="text-red-800 cursor-pointer font-bold mx-10 my-2 bg-[#CDF1B0] border-black border-2  w-10"
                  >
                    X
                  </button>
                </div>
              ) : (
                <h1 className="text-xl md:text-2xl font-bold text-gray-500 my-2">
                  Import Thumbnail Image Here
                </h1>
              )}

              <span className="text-gray-500 leading-10 font-semibold">or</span>
              <label className="bg-[#00ff66] px-2 py-1 my-5 rounded-md hover-bg-[#a0bce0]">
                Browse thumbnail image
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleThumbnailUpload}
                />
              </label>
            </div>
          </div>
          {/* Add image Section */}
          <div className="bg-[#CDF1B0]  col-span-2 px-4 py-1 mb-10 pb-5 rounded-md">
            <div className="flex justify-between  px-4 py-2">
              <h1 className="text-gray-500 font-bold">Media</h1>
              <p className="text-[#396ad3]">Add media from URL</p>
            </div>
            <div className="flex items-center justify-center  h-c flex-col border-dashed border-2 border-gray-600">
              {imageUrls.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-5  col-span-5  bg-white">
                  {imageUrls.map((url, index) => (
                    <div key={index} className="m-2">
                      <img
                        src={url}
                        alt={`Uploaded Img ${index + 1}`}
                        style={{ width: "80px", height: "80px" }}
                      />
                      <button
                        onClick={() => handleImageDelete(index)}
                        className="text-red-500 cursor-pointer font-bold mx-10"
                      >
                        X
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <h1 className="text-xl md:text-2xl font-bold text-gray-500 my-4">
                  Drag and drop your images here
                </h1>
              )}

              <span className="text-gray-500 leading-10 font-semibold">or</span>
              <label className="bg-[#00ff66] px-2 py-1 my-5 rounded-md hover:bg-[#a0bce0]">
                Browse images
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleImageUpload}
                  multiple
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Addproduct;
