"use client";
import React, { useState ,useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Usercart from "./usercart";
import User1 from '../images/profile1.jpg';
import User2 from '../images/profile2.jpg';
import User3 from '../images/profile4.jpg';
import {AiOutlinePlus} from 'react-icons/ai';
export default function AnalyticsPage(Atr) {
  console.log(User1)


  const [Chartop, setChartop] = useState({
    
    options: {
      height: 350,
      
      chart: {
        type: 'radialBar',

      },
      
      plotOptions: {
        
        
        radialBar: {
          track:{
            background:""
          },


          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 5,
              fontSize: "18px",
            },
        },
      },
      
      labels: ['Cricket'],
      
    },
          
          
  }       
  });
  const isDark = document.querySelector('html').classList.contains('dark')
  useEffect(() => {
    
    if (document.querySelector('html').classList.contains('dark')) {
      
      setChartop({
        options: {
          height: 350,
          
          chart: {
            type: 'radialBar',
    
          },
          
          plotOptions: {
            
            
            radialBar: {
              track:{
                background:"rgb(55, 65, 81)"
              },
    
    
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 5,
                  fontSize: "18px",
                },
            },
          },
          
          labels: ['Cricket'],
          
        },
              
              
      }     
      })
      /* Chartop.options.plotOptions.radialBar.track.background='rgb(31, 41, 55)' */
    }else{
      setChartop({
        options: {
          height: 350,
          
          chart: {
            type: 'radialBar',
    
          },
          
          plotOptions: {
            
            
            radialBar: {
              track:{
                background:"rgb(209, 213, 219)"
              },
    
    
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  offsetY: 5,
                  fontSize: "18px",
                },
            },
          },
          
          labels: ['Cricket'],
          
        },
              
              
      }     
      })
      
    }
    
  }, [isDark]);
  

  const [resentOrders, setResentOrders] = useState(true);
  
  function resentordersMore() {
    const resentordersElement = document.querySelector("ul.childs");
    const resentordersShowMoreBtnElement = document.querySelector("span.showMoreBtn");
    setResentOrders(!resentOrders)
    if (resentOrders) {
      resentordersElement.classList.add('opened')
      resentordersShowMoreBtnElement.innerHTML= 'Show Less'
    }else{
      resentordersElement.classList.remove('opened')
      resentordersShowMoreBtnElement.innerHTML= 'Show All'
    }
  }
  return (
    <div className={Atr.className}>
      <div className="quicklook flex flex-col 2xl:flex-row mb-5 text-gray-700 justify-center items-center">
        <div className="saleQ bg-white basis-1/3 rounded-3xl px-5 flex drop-shadow-xl w-full 2xl:w-max justify-between dark:bg-gray-800 dark:text-gray-100">
          <div className="info basis-1/2 flex flex-col  lg: align-middle justify-center ">
            <span className="text text-xl font-bold">Total Sale:</span>
            <span className="number text-2xl font-bold">53$</span>
          </div>
          <ReactApexChart
            stork="none"
            options={Chartop.options}
            series={[40]}
            
            type="radialBar"
            className="radialBar"
            width={"200"}
            height={"200"}
          />
        </div>

        <div className="siteVQ bg-white basis-1/3  my-5 2xl:mx-5 2xl:my-0  w-full 2xl:w-max  rounded-3xl  px-5 dark:bg-gray-800 justify-between dark:text-gray-100 flex  drop-shadow-xl">
          <div className="info basis-1/2 flex flex-col align-middle justify-center">
            <span className="text text-xl font-bold">Site Visit:</span>
            <span className="number text-2xl font-bold">625</span>
          </div>
          <ReactApexChart
            options={Chartop.options}
            series={[30]}
            type="radialBar"
            className="radialBar"
            width={"200"}
            height={"200"}
          />
        </div>

        <div className="searchQ bg-white basis-1/3  rounded-3xl  w-full 2xl:w-max  px-5 flex drop-shadow-xl justify-between dark:bg-gray-800 dark:text-gray-100">
          <div className="info basis-1/2 flex flex-col align-middle justify-center">
            <span className="text text-xl font-bold">Searches:</span>
            <span className="number text-2xl font-bold">56</span>
          </div>
          <ReactApexChart
            options={Chartop.options}
            series={[10]}
            type="radialBar"
            className="radialBar"
            width={"200"}
            height={"200"}
            
          />
        </div>
      </div>
      <div className="newUsers mb-5">
        <span className="head text-xl font-extrabold text-gray-700 dark:text-gray-300 pointer-events-none">
          New Users
        </span>
        <div className="users bg-white dark:bg-gray-800 dark:text-gray-200 rounded-3xl my-5 flex justify-evenly drop-shadow-xl">
          <div className="tablerow flex h-fit flex-col lg:flex-row basis-1/2 justify-evenly items-center">
            <Usercart image={User1.src} name="Amir" time="12 Min Ago" />
            <Usercart image={User2.src} name="zahra" time="28 Min Ago" />
          </div>
          <div className="tablerow flex-col lg:flex-row flex h-fit  basis-1/2 justify-evenly items-center">
            <Usercart image={User3.src} name="emma watson" time="recently" />
          <div className="ShowMore text-center w-fit p-5 basis-2/5 flex flex-col justify-center items-center cursor-pointer">
            
            <AiOutlinePlus className="w-28 h-28 image rounded-full text-gray-600 dark:text-gray-200" /> 
              <span className="text-2xl font-bold block mt-2 text-gray-700 dark:text-gray-200 ">More</span>
              <span className="text-sm font-medium block  text-gray-700 dark:text-gray-200 "></span>
            </div>
          </div>


        </div>
      </div>
      <div className="resentOrders mb-5">
        <span className="head text-xl font-extrabold text-gray-700 pointer-events-none dark:text-gray-300">
          Resent Orders
        </span>
        <div className="p-5 bg-white dark:bg-gray-800 rounded-3xl my-5  flex  flex-col drop-shadow-xl ">
          <ul className="headers flex h-fit text-center font-bold text-gray-500 dark:text-gray-100 pointer-events-none">
            <li className="basis-1/5">Course Name</li>
            <li className="basis-1/5">Course Number</li>
            <li className="basis-1/5">Payment</li>
            <li className="basis-1/5">Status</li>
            <li className="basis-1/5"></li>
          </ul>
          <ul className="childs grid grid-flow-row w-full text-center   text-gray-500 divide-y dark:text-gray-200  ">
              <li className="pt-5 child">
                <ul className="flex  text-center">
                  <li className="courseName basis-1/5  pointer-events-none">JavaScript Tutorial</li>
                  <li className="courseNumber basis-1/5 pointer-events-none">85743</li>
                  <li className="payment basis-1/5 pointer-events-none">Due</li>
                  <li className="status basis-1/5 text-yellow-600 pointer-events-none">Pending</li>
                  <li className="detail basis-1/5 cursor-pointer text-blue-600 hover:text-blue-900">Details</li>
                </ul>
              </li>
              <li className="pt-5 child">
                <ul className="flex  text-center">
                  <li className="courseName basis-1/5  pointer-events-none">Css Full Course</li>
                  <li className="courseNumber basis-1/5 pointer-events-none">97245</li>
                  <li className="payment basis-1/5 pointer-events-none">Refunded</li>
                  <li className="status basis-1/5 text-red-600 pointer-events-none">Decliend</li>
                  <li className="detail basis-1/5 cursor-pointer text-blue-600 hover:text-blue-900">Details</li>
                </ul>
              </li>
              <li className="pt-5 child">
                <ul className="flex  text-center">
                  <li className="courseName basis-1/5  pointer-events-none">Flex-Box Tutorial</li>
                  <li className="courseNumber basis-1/5 pointer-events-none">36452</li>
                  <li className="payment basis-1/5 pointer-events-none">Paid</li>
                  <li className="status basis-1/5 text-green-600 pointer-events-none">Active</li>
                  <li className="detail basis-1/5 cursor-pointer text-blue-600 hover:text-blue-900">Details</li>
                </ul>
              </li>
              <li className="pt-5 child">
                <ul className="flex  text-center">
                  <li className="courseName basis-1/5  pointer-events-none">Reactjs Tutorial</li>
                  <li className="courseNumber basis-1/5 pointer-events-none">15324</li>
                  <li className="payment basis-1/5 pointer-events-none">Paid</li>
                  <li className="status basis-1/5 text-green-600 pointer-events-none">Active</li>
                  <li className="detail basis-1/5 cursor-pointer text-blue-600 hover:text-blue-900">Details</li>
                </ul>
              </li>
              <li className="pt-5 child">
                <ul className="flex  text-center">
                  <li className="courseName basis-1/5  pointer-events-none">Nextjs Tutorial</li>
                  <li className="courseNumber basis-1/5 pointer-events-none">25642</li>
                  <li className="payment basis-1/5 pointer-events-none">Due</li>
                  <li className="status basis-1/5 text-yellow-600 pointer-events-none">Pending</li>
                  <li className="detail basis-1/5 cursor-pointer text-blue-600 hover:text-blue-900">Details</li>
                </ul>
              </li>
          </ul>
          <span className="showMoreBtn text-center absolute top-full right-1/2 translate-x-1/2 translate-y-5 text-blue-600 cursor-pointer " onClick={resentordersMore}>
            Show All
          </span>
        </div>
      </div>
    </div>
  );
}
