import Content from "@/views/Content";
import Sidebar from "@/layouts/Sidebar";
import {useState} from "react";
import data from "./db/data";
const App = () => {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }

  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  const filteredItems = data.filter((item) => item.title.toLowerCase().indexOf(query.toLowerCase()) !== 1);
  return (
    <div className="flex justify-between">
      <Sidebar />
      <Content />
    </div>
  )
}

export default App