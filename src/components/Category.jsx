const Category = ({handleChange}) => {
  return (
    <div className="flex flex-col gap-4">
        <h2 className="text-white font-semibold py-2 border-b border-gray-200/10 w-full">Category</h2>
        <div className="mt-3 flex flex-col gap-3">
              <div><input onChange={handleChange} type="radio" name="test" value="All" /> <span className="text-gray-300 text-sm">All products</span></div>
              <div><input onChange={handleChange} type="radio" name="test" value="sneakers" /> <span className="text-gray-300 text-sm">Sneakers</span></div>
              <div><input onChange={handleChange} type="radio" name="test" value="flats" /> <span className="text-gray-300 text-sm">Flats</span></div>
              <div><input onChange={handleChange} type="radio" name="test" value="sandals" /> <span className="text-gray-300 text-sm">Sandals</span></div>
              <div><input onChange={handleChange} type="radio" name="test" value="heels" /> <span className="text-gray-300 text-sm">Heels</span></div>
        </div>
    </div>
  )
}

export default Category