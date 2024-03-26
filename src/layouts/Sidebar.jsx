import Category from "@/components/Category"
import Colors from "@/components/Colors"
import Price from "@/components/Price"

const Sidebar = ({handleChange}) => {
  return (
    <aside className="w-[20%] flex flex-col fixed top-0 left-0 h-screen p-8 border-r border-gray-200/10">
        <div className="text-xl font-semibold"><span className="text-yellow-500">Ad</span>vanced.</div>
        <div className="mt-5 flex flex-col gap-5">
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
        </div>
    </aside>
  )
}

export default Sidebar