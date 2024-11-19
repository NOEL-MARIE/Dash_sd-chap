import { FaDeaf } from "react-icons/fa";
import Marquee from "react-fast-marquee";

export default function NotFound() {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <h1 className=" flex flex-col gap-y-8 text-center text-slate-900 text-4xl my-6">
        <div className="flex flex-row gap-x-10">

         <Marquee speed={50} gradient={true}>
            .....404 PAGE NOT FOUND  <FaDeaf />
        </Marquee>
         
        </div>
      </h1>
    </div>
  );
}
