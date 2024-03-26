const Price = ({handleChange}) => {
    return (
      <div className="flex flex-col gap-4">
          <h2 className="text-white font-semibold py-2 border-b border-gray-200/10 w-full">Price</h2>
          <div className="mt-3 flex flex-col gap-3">
              <div><input onChange={handleChange} type="radio" value="" /> <span className="text-gray-300 text-sm">All prices</span></div>
              <div><input onChange={handleChange} type="radio" value="50" /> <span className="text-gray-300 text-sm">$0 - $50</span></div>
              <div><input onChange={handleChange} type="radio" value="100" /> <span className="text-gray-300 text-sm">$50 - $100</span></div>
              <div><input onChange={handleChange} type="radio" value="150" /> <span className="text-gray-300 text-sm">$100 - $150</span></div>
              <div><input onChange={handleChange} type="radio" value="200" /> <span className="text-gray-300 text-sm">Over 150$</span></div>
          </div>
      </div>
    )
  }
  
  export default Price