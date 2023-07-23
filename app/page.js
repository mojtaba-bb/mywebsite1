"use client";
import React, { useState ,useEffect} from "react";
import Image from "next/image";
import {
  AiFillReconciliation,
  AiOutlineMail,
  AiOutlineSetting,
  AiOutlinePlus,
  AiOutlineLogout,
  AiTwotoneBell,
  AiFillSound,
  AiOutlineMore,
  AiOutlineMenu,
  AiOutlineClose
} from "react-icons/ai";
import profileImage from "../public/images/profile3.png"
import { CiUser } from "react-icons/ci";
import { BiBookContent, BiLineChart, BiSolidMoon } from "react-icons/bi";
import { BsFillSunFill } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";
import { PiWarningOctagonBold } from "react-icons/pi";
import AnalyticsPage from "../public/components/analyticsPage";

export default function Home() {
  const [DarkMode, setDarkMode] = useState(true);
  const [MenuOpened, setMenuOpened] = useState(false);
  useEffect(() => {
    if(MenuOpened){
      document.querySelector('.leftsidebar').classList.remove('closeMenu')
    }else{
      document.querySelector('.leftsidebar').classList.add('closeMenu')
    }
  }, [MenuOpened]);

  function DarkmodeF() {
    setDarkMode(!DarkMode);
    if (DarkMode) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }
  return (
    <div className="bg-indigo-200  flex w-screen h-screen main dark:bg-gray-950">
      <div className="leftsidebar md:w-fit lg:w-full w-60 bg-white dark:bg-gray-800 left-0 dark:md:bg-transparent z-10 md:bg-transparent md:basis-1/6 h-screen drop-shadow-xl flex flex-col md:px-3 pb-3 fixed  md:relative">
        <span className="flex justify-between items-center  basis-1/12 px-5 md:px-0">
          <span className="dark:text-gray-300">LOGO</span>
          <AiOutlineClose className="text-2xl cursor-pointer md:hidden dark:text-gray-300" onClick={()=>{
            setMenuOpened(false);
           
          }}/>
        </span>
        <ul className="bg-white dark:bg-gray-800 dark:text-gray-50  rounded-2xl w-full md:w-max lg:w-full basis-11/12 flex flex-col text-gray-700 font-bold listHoverEffect md:drop-shadow-xl">
          <li className="basis-11/12 overflow-auto">
            <ul className="flex pagesList flex-col overflow-hidden ">
              <li className="flex items-center py-3 list">
                <span className="inline-block h-5 sign  0 "></span>
                <span className=" w-full  flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <AiFillReconciliation className="inline text-2xl" />
                  <span className=" ml-5  md:hidden lg:inline">Dashboard</span>
                </span>
              </li>
              <li className="flex items-center py-3 list">
                <span className="sign inline-block h-5  w-0  "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <CiUser className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">Users</span>
                </span>
              </li>
              <li className="flex items-center py-3 list">
                <span className="sign inline-block h-5    "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <BiBookContent className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">History</span>
                </span>
              </li>
              <li className="flex items-center py-3 list bg-indigo-300 text-indigo-800 dark:bg-gray-600 dark:text-gray-200">
                <span className="w-1 bg-indigo-800 inline-block h-5   dark:bg-gray-200 "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <BiLineChart className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">Analytics</span>
                </span>
              </li>
              <li className="flex items-center py-3 list">
                <span className="inline-block h-5 sign   "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <AiOutlineMail className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">Tickets</span>
                </span>
              </li>
              <li className="flex items-center py-3 list">
                <span className="inline-block h-5  sign  "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <GoChecklist className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">Sale List</span>
                </span>
              </li>
              <li className="flex items-center py-3 list">
                <span className="inline-block h-5  sign  "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <PiWarningOctagonBold className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">Reports</span>
                </span>
              </li>
              <li className="flex items-center py-3 list">
                <span className="inline-block h-5  sign  "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <AiOutlineSetting className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">Settings</span>
                </span>
              </li>
              <li className="flex items-center py-3 list">
                <span className="inline-block h-5  sign "></span>
                <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
                  <AiOutlinePlus className="inline text-2xl" />
                  <span className=" ml-5 md:hidden lg:inline">New Login</span>
                </span>
              </li>
            </ul>
          </li>
          <li className="basis-1/12 flex items-center py-5 list">
            <span className=" w-full flex  items-center mx-3 md:mx-5 lg:ml-5 text">
              <AiOutlineLogout className="inline text-2xl" />
              <span className=" ml-5 md:hidden lg:inline">Logout</span>
            </span>
          </li>
        </ul>
      </div>
      <div className="middel basis-full md:basis-5/6  flex flex-col px-3 pb-3 overflow-x-hidden overscroll-y-auto h-screen">
        <div className="head basis-1/12 flex items-center  justify-between text-2xl font-extrabold text-gray-700 mb-1   dark:text-gray-300">
          <span className="pointer-events-none hidden md:inline">Analytics</span>
          <AiOutlineMenu className="md:hidden text-2xl cursor-pointer md:hidden dark:text-gray-300" onClick={()=>{
            setMenuOpened(true)

          }}/>
          <div className="head flex items-center  flex items-center  text-gray-700 py-2 justify-evenly px-5">
            <ul
              className="nightmode flex text-xl bg-gray-100  dark:bg-gray-700 rounded-xl overflow-hidden mr-10 cursor-pointer"
              onClick={DarkmodeF}
            >
              <li className="p-2 bg-cyan-600 text-white dark:bg-gray-700 dark:text-yellow-200 rounded-xl ">
                <BsFillSunFill />
              </li>
              <li className="p-2 dark:bg-cyan-600 text-blue-800  dark:text-white rounded-xl">
                <BiSolidMoon />
              </li>
            </ul>
            <div className="profile flex align-middle justify-center items-center">
              <div className="name mr-5 hidden md:inline">
                <span className="text text-sm h-fit dark:text-gray-300">
                  Hey,
                  <span className="font-bold pl-1 ">Reza</span>
                </span>

                <div className="role text-xs dark:text-gray-300">admin</div>
              </div>
              <Image
                src={profileImage.src}
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 image rounded-full bg-black "
              />
            </div>
          </div>
        </div>
        <div className="pagesSection basis-11/12 flex ">
          <AnalyticsPage className="rest  flex flex-col basis-full md:basis-4/5 px-3" />
          <div className="remindersS hidden md:inline px-3 basis-1/5">
            <div className="head flex justify-between items-center text-2xl font-bold text-gray-700 dark:text-gray-100">
              <span>Reminder</span>
              <span className="svg bg-white p-2 rounded-full drop-shadow-xl dark:bg-gray-800 dark:text-gray-300">
                <AiTwotoneBell />
              </span>
            </div>
            <div className="riminders mt-5">
              <div className="riminder flex justify-between p-5 bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100  rounded-2xl drop-shadow-xl items-center">
                <span className="info flex items-center">
                  <span className="svg text-2xl p-2 bg-teal-500 rounded-xl text-white  dark:text-gray-800">
                    <AiFillSound />
                  </span>
                  <span className="text flex flex-col ml-3 ">
                    <span className="name ">Workshop</span>
                    <span className="date text-xs">08:00 Am - 12:00 Pm</span>
                  </span>
                </span>
                <span className="btn h-fit">
                  <span className="svg text-2xl rounded-xl text-gray-800 dark:text-gray-100">
                    <AiOutlineMore />
                  </span>
                </span>
              </div>
              <div className="addreminder flex justify-center items-center p-5 bg-white border-dashed cursor-pointer hover:bg-gray-100 dark:hover:bg-slate-900 border-gray-200 border-2 mt-5 text-gray-800 dark:bg-gray-800 dark:text-gray-100  rounded-2xl drop-shadow-xl items-center">
                <span className="text-2xl mr-5">+</span> Add Reminder
              </div>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}
