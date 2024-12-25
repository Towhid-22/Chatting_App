import React from "react";
import Sidebar from "./Sidebar";
import { Button } from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";

const Friends = () => {
  return (
    <div className="flex gap-[3rem]">
      <Sidebar />
      <div className="shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] h-screen w-full mt-[2rem] mr-[3rem] rounded-lg p-8">
        <h2 className="font-semibold text-[36px] mb-10">Friends</h2>
        <div className="grid">
          <div className="mt-4">
            <div className="flex items-center justify-between w-[350px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] p-4 rounded-lg">
              <div className="flex items-center mb-2 gap-3">
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div>
                  <h3 className="text-[20px] font-semibold">John Doe</h3>
                  <p className="text-[14px] text-[#4D4D4D]">Hello</p>
                </div>
              </div>
              <div>
                <Button className="bg-blue-700 text-[14px] font-semibold">
                  Add
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between w-[350px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] p-4 rounded-lg">
              <div className="flex items-center mb-2 gap-3">
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div>
                  <h3 className="text-[20px] font-semibold">Wilhelmine</h3>
                  <p className="text-[14px] text-[#4D4D4D]">Hello</p>
                </div>
              </div>
              <div>
                <Button className="bg-blue-700 text-[14px] font-semibold">
                  Add
                  {/* <FaPlus className="w-5 h-5"/> */}
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between w-[350px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] p-4 rounded-lg">
              <div className="flex items-center mb-2 gap-3">
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div>
                  <h3 className="text-[20px] font-semibold">Smith</h3>
                  <p className="text-[14px] text-[#4D4D4D]">Hi</p>
                </div>
              </div>
              <div>
                <Button className="bg-blue-700 text-[14px] font-semibold">
                  Add
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between w-[350px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] p-4 rounded-lg">
              <div className="flex items-center mb-2 gap-3">
                <img
                  src="https://docs.material-tailwind.com/img/face-2.jpg"
                  alt="avatar"
                  class="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
                />
                <div>
                  <h3 className="text-[20px] font-semibold">Will Jack</h3>
                  <p className="text-[14px] text-[#4D4D4D]">Hello</p>
                </div>
              </div>
              <div>
                <Button className="bg-blue-700 text-[14px] font-semibold">
                  Add
                  {/* <FaPlus className="w-5 h-5"/> */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
