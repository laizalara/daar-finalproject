import { useState } from "react";
import './styles.css'

export const BookSearch = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };
  
  const handleClickBookSearch=()=>{
      setQuery(inputValue.toLocaleLowerCase());
  };
  return (
    <div className="containerBookSearch">
      <input className="inputBookSearch" onChange={handleInputValue}/>
      <button onClick={handleClickBookSearch}>Search book</button>
    </div>
  );
};
