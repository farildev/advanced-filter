import Content from "@/views/Content";
import Sidebar from "@/layouts/Sidebar";
import {useState} from "react";
import data from "./db/data";
import Card from "./components/Card";
const App = () => {
  const [query, setQuery] = useState("");
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

  const filteredItems = data.filter(
    (item) => item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(data,selected,query){
    let filteredProducts = data;

    if(query){
      filteredProducts = filteredItems
    }

    if(selected){
      filteredProducts = filteredProducts.filter(({category,color,company,newPrice,title}) =>
        category === selected || 
        color === selected ||
        company === selected ||
        newPrice === selected ||
        title === selected 
      );
    }
    return filteredProducts.map(({img,title,start,reviews,prevPrice,newPrice}) =>(
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star = {start}
        reviews ={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }

  const result = filteredData(data,selectedCategory,query)
  
  return (
    <div className="flex justify-between">
      <Sidebar handleChange={handleChange} />
      <Content result={result} query={query} handleClick={handleClick} handleInputChange={handleInputChange} />
    </div>
  )
}

export default App