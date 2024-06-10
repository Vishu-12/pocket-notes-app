import React from "react";
import heroImage from "/assets/heroImage.png";
import { IoMdLock } from "react-icons/io";
export default function MainPage() {
  return (
    <div
      className="flex ml-40 h-screen w-4/5 items-center justify-center"
      // style={{
      //   marginLeft: "20%",
      //   height: "100vh",
      //   width: "80%",
      //   alignItems: "center",
      //   display: "flex",
      //   justifyContent: "center",
      // }}
    >
      <div style={{ width: "50%" }}>
        <img src={heroImage} alt="" />
        <div className="flex justify-center">
          <div
            className="text-center w-3/5"
            // style={{ textAlign: "center", width: "80%" }}
          >
            <h2
              className="text-4xl font-normal"
              // style={{ fontSize: "2.5rem", fontWeight: "400" }}
            >
              Pocket Notes
            </h2>
            <p>
              Send and receive messages without keeping your phone online. Use
              Pocket Notes on up to 4 linked devices and 1 mobile phone
            </p>
          </div>
        </div>
      </div>
      <p className="bottom-9 fixed flex items-center">
        <IoMdLock />
        end-to-end encrypted
      </p>
    </div>
  );
}
