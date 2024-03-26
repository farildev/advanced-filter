import { LuSearch } from "react-icons/lu";
import data from "@/db/data";
import Recommended from "@/components/Recommended";

const Content = () => {
  return (
    <div className="w-[80%] absolute top-0 right-0 p-8">
        <div className="flex p-2 items-center justify-between border border-gray-200/20 w-1/2 rounded-md">
            <input className="text-sm p-2 outline-none border-none bg-transparent text-white" type="text" placeholder="Search any product..." />
            <button className="p-2"><LuSearch /></button>
        </div>
        <div className="mt-10">
            <Recommended />
        </div>
        <div className="grid grid-cols-3 mt-10 gap-5">
            {
                data.map((item) => (
                    <div key={Math.random()} className="p-5 rounded-md border border-gray-300/20">
                        <div className="w-full h-[250px]">
                            <img className="w-full h-full object-cover object-center" src={item.img} alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-xl font-medium">{item.title}</h2>
                            <span className="text-xl font-semibold inline-block mt-5 bg-yellow-500 text-black p-2 rounded-md">{item.newPrice}$</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Content