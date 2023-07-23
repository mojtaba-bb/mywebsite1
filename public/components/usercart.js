import Image from "next/image";
export default function Usercart(params) {
  
    return(
        <div className="usercart text-center w-fit p-5 basis-2/5 flex flex-col justify-center items-center">
            
            <Image src={params.image} className="w-28 h-28 image rounded-full " width={112} height={112} alt="" />
            <span className="text-2xl font-bold block mt-2 text-gray-700  dark:text-gray-200 ">{params.name}</span>
            <span className="text-sm font-medium block  text-gray-700 dark:text-gray-200 ">{params.time}</span>
        </div>
    );
}
