import React from "react";
import heroImage from "/assets/heroImage.png";
import { IoMdLock } from "react-icons/io";
export default function MainPage() {
  return (
    <div
      className="sm:hidden sm:invisible md:visible md:flex sm:ml-0 md:ml-40 sm:h-2 md:h-screen w-4/5 items-center justify-center sm:overflow-hidden"
      id="mainPage"
    >
      <div className="w-1/2">
        <img src={heroImage} alt="" />
        <div className="flex justify-center">
          <div className="text-center w-3/5">
            <h2 className="text-4xl font-normal">Pocket Notes</h2>
            <p>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </div>
      </div>
      <p className="bottom-9 md:fixed sm:hidden md:flex items-center sm:invisible md:visible">
        <IoMdLock className="sm:invisible" />
        end-to-end encrypted
      </p>
    </div>
  );
}
