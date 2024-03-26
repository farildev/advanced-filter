const Card = ({img,title,star,reviews,prevPrice,newPrice}) => {
  return (
    <div key={Math.random()} className="p-5 rounded-md border border-gray-300/20">
                        <div className="w-full h-[250px]">
                            <img className="w-full h-full object-cover object-center" src={img} alt="" />
                        </div>
                        <div className="mt-5">
                            <h2 className="text-xl font-medium">{title}</h2>
                            <div className="flex items-center gap-x-2 mt-2">
                                <del>{prevPrice}</del>
                                <span className="">{newPrice}$</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div>{star} {star} {star} {star}</div>
                            <span>{reviews}</span>
                        </div>
                    </div>
  )
}

export default Card