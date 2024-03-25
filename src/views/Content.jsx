import { useState, useEffect } from "react";
import { LuSearch } from "react-icons/lu";
import axios from "axios";

const Content = () => {
    const [products , setProducts] = useState([]);
    const BASE_URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
        axios.get(BASE_URL)
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
  return (
    <div className="w-[77%] absolute top-0 right-0 p-8">
        <div className="flex p-2 items-center justify-between border border-gray-200/20 w-1/2 rounded-md">
            <input className="text-sm p-2 outline-none border-none bg-transparent text-white" type="text" placeholder="Search any product..." />
            <button className="p-2"><LuSearch /></button>
        </div>
        <div className="grid grid-cols-3 mt-10 gap-5">
            {
                products.map((product) => (
                    <div key={product.id} className="p-5 rounded-md border border-gray-300/20">
                        <div className="w-full max-h-[250px] h-full">
                            <img className="w-full h-full object-cover object-center" src={product.image} alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-xl font-medium">{product.title.substr(0,25)}</h2>
                            <span className="text-xl font-semibold inline-block mt-5 bg-yellow-500 text-black p-2 rounded-md">{product.price.toFixed(0)}$</span>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Content