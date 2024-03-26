const Price = () => {
    return (
      <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold py-2 border-b border-gray-200/10 w-full">Price</h2>
          <div className="mt-3 flex flex-col gap-3">
              <div><input type="radio" name="All" id="" value="All" /> <span className="text-gray-300 text-sm">Salam</span></div>
              <div><input type="radio" name="All" id="" value="All" /> <span className="text-gray-300 text-sm">Salam</span></div>
              <div><input type="radio" name="All" id="" value="All" /> <span className="text-gray-300 text-sm">Salam</span></div>
              <div><input type="radio" name="All" id="" value="All" /> <span className="text-gray-300 text-sm">Salam</span></div>
          </div>
      </div>
    )
  }
  
  export default Price