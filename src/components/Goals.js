"use client";
import React from "react";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { IoFootstepsSharp } from "react-icons/io5";
import { GiNightSleep } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { SwipeableButton } from "react-swipeable-button";
const data = [
  {
    title: "Workout for 20 mins",
    icon: GiWeightLiftingUp,
    color: "#9E4CB8",
  },
  {
    title: "Read book for 15 mins",
    icon: FaFire,
    color: "#D15439",
  },
  {
    title: "30 mins walk",
    icon: IoFootstepsSharp,
    color: "#81B47D",
  },
  {
    title: "Sleep at 11 sharp",
    icon: GiNightSleep,
    color: "#63A7A7",
  },
  {
    title: "Drink 3L water",
    icon: IoIosWater,
    color: "#5A92CB",
  },
];

const onSuccess = () => {
  console.log("Successfully Swiped!");
};

const Goals = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        {data.map((item) => {
          return (
            <div className="goalContainer" key={item.title}>
              {/* ICON */}
              <div className="flex items-center justify-start gap-2">
                <div className="icon">
                  <item.icon color={item.color} width={18} height={17} />
                </div>

                {/* Goal Text */}
                <p className="goalText">{item.title}</p>
              </div>

              {/* checkbox */}
              <input
                type="checkbox"
                className="goalInput"
                style={{ accentColor: item.color }}
              />
            </div>
          );
        })}

        <div className="swipe">
          <SwipeableButton
            onSuccess={onSuccess} //callback function
            text="Swipe to track all   > > >" //string
            text_unlocked="YAY" //string
            color="#D15439" //css hex color
          />
        </div>
      </div>
    </>
  );
};

export default Goals;
