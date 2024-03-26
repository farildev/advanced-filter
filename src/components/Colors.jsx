const Colors = ({handleChange}) => {
    return (
      <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold py-2 border-b border-gray-200/10 w-full">Colors</h2>
          <div className="mt-3 flex flex-col gap-3">
              <div><input onChange={handleChange} type="radio" name="All" value="" /> <span className="text-gray-300 text-sm">All prices</span></div>
              <div><input onChange={handleChange} type="radio" name="All" value="black" /> <span className="text-gray-300 text-sm">Black</span></div>
              <div><input onChange={handleChange} type="radio" name="All" value="blue" /> <span className="text-gray-300 text-sm">Blue</span></div>
              <div><input onChange={handleChange} type="radio" name="All" value="red" /> <span className="text-gray-300 text-sm">Red</span></div>
              <div><input onChange={handleChange} type="radio" name="All" value="green" /> <span className="text-gray-300 text-sm">Green</span></div>
              <div><input onChange={handleChange} type="radio" name="All" value="white" /> <span className="text-gray-300 text-sm">White</span></div>
          </div>
      </div>
    )
  }
  
  export default Colors