/* eslint-disable react/prop-types */
// import React from 'react'
import { motion } from "framer-motion";
import { textAnimation } from "../utils/animationUtil";
import { state } from "../store";
import { useSnapshot } from "valtio";

const Home = ({ text }) => {
  const snap = useSnapshot(state);
  return (
    <motion.div
      {...textAnimation(snap.direction)}
      // exit={textAnimation(snap.direction)["initial"]}
      className="nike text-white absolute w-full h-full flex flex-col p-10 sm:p-[10vh] xl:p-40 pt-20 xl:pt-20 z-5 pointer-events-none "
    >
      <p className="text-center sm:text-left font-black align-center xl:leading-[12rem] sm:leading-[10rem] leading-[8rem] xl:text-[12rem] sm:text-[10rem] text-[6rem]">
        {/* JUST <br /> WEAR IT */}
        {text}
      </p>
      {/* {snap.index === 2 && (
        <p className=" absolute text-center z-2 sm:text-left font-oleo text-orange-400 align-center xl:leading-[6rem] sm:leading-[4rem] leading-[2rem] xl:text-[6rem] sm:text-[4rem] text-[2rem]">
          Yesterday <br /> you said <br />
          Tomorrow
        </p>
      )} */}
      <div className="flex justify-center sm:justify-start ">
        <svg
          // className="absolute scale-50 left-[-60vw] xl:left-[-100px] sm:left-[-20vw] bottom-0"
          // className="scale-50 left-[-60vw] xl:left-0 sm:left-[-20vw]"
          version="1.1"
          id="nike"
          x="0px"
          y="0px"
          width="50%"
          // width="1024px"
          // height="400px"
          viewBox="0 0 1024 400"
          enableBackground="new 0 0 1024 400"
        >
          <path
            id="mark"
            fillRule="evenodd"
            clipRule="evenodd"
            fill="lime"
            d="M160.684,36.327c-3.142,6.473-6.375,12.904-9.409,19.426
	c-11.073,23.814-19.095,48.419-21.26,74.859c-4.189,51.19,28.502,89.282,79.68,92.835c32.628,2.268,63.833-4.656,94.927-13.041
	c166.16-44.81,332.329-89.589,498.498-134.375c46.072-12.417,92.147-24.83,138.229-37.212c3.069-0.824,6.204-1.394,9.307-2.08
	c0.252,0.72,0.506,1.44,0.76,2.16c-1.862,1.012-3.66,2.178-5.6,3.013c-93.637,40.292-187.291,80.552-280.935,120.828
	c-127.402,54.799-254.787,109.643-382.21,164.394c-38.225,16.426-77.223,30.454-118.894,35.153
	c-25.403,2.868-50.64,2.351-74.716-7.723c-40.365-16.892-61.924-56.993-56.604-104.224c3.447-30.575,13.896-58.874,28.433-85.599
	c25.636-47.131,60.621-87.333,96.15-127.055c0.676-0.755,1.469-1.405,2.208-2.104C159.725,35.831,160.204,36.079,160.684,36.327z"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Home;
