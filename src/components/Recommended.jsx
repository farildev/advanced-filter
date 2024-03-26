const Recommended = ({handleClick}) => {
  return (
    <div className="flex gap-x-3 text-gray-300">
        <button onClick={handleClick} className="text-sm p-2 border border-gray-200/30 rounded-md" value="">All</button>
        <button onClick={handleClick} className="text-sm p-2 border border-gray-200/30 rounded-md" value="Nike">Nike</button>
        <button onClick={handleClick} className="text-sm p-2 border border-gray-200/30 rounded-md" value="Adidas">Adidas</button>
        <button onClick={handleClick} className="text-sm p-2 border border-gray-200/30 rounded-md" value="Puma">Puma</button>
        <button onClick={handleClick} className="text-sm p-2 border border-gray-200/30 rounded-md" value="Vans">Vans</button>
    </div>
  )
}

export default Recommended