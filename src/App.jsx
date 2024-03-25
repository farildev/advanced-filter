import Content from "@/views/Content";
import Sidebar from "@/layouts/Sidebar";
const App = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App