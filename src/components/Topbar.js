"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Topbar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="topContainer">
        <img src="./icon.png" alt="icon" width={100} height={500}/>
        <div className="flex flex-col justify-center">
          <p className="topHead">Your daily goal almost done</p>
          <p className="topText">4 of 5 completed</p>
          <ProgressBar
            completed={60}
            height="5px"
            width="90%"
            baseBgColor="#E1EAF2"
            bgColor="#FFFFFF"
            customLabel={60}
            labelAlignment="outside"
            labelSize="10px"
            customLabelStyles={{ marginTop: "12px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
