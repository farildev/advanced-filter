import { LuSearch } from "react-icons/lu";
import Recommended from "@/components/Recommended";

const Content = ({result, handleInputChange , query, handleClick}) => {
  return (
    <div className="w-[80%] absolute top-0 right-0 p-8">
        <div className="flex p-2 items-center justify-between border border-gray-200/20 w-1/2 rounded-md">
            <input onChange={handleInputChange} value={query} className="text-sm p-2 outline-none border-none bg-transparent text-white" type="text" placeholder="Search any product..." />
            <button className="p-2"><LuSearch /></button>
        </div>
        <div className="mt-10">
            <Recommended handleClick={handleClick} />
        </div>
        <div className="grid grid-cols-3 mt-10 gap-5">{result}</div>
    </div>
  )
}

export default Content