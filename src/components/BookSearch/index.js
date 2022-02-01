import { useState } from "react";
import './styles.css'
import "../../css/bracket.css";

export const BookSearch = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleClickBookSearch=()=>{
      setQuery(inputValue.toLocaleLowerCase());
  };
  return (
    <div className="containerBookSearch input-group">
      <button disabled className="input-group-text">Input your research </button> 
      <input id="inputBookSearch" className="inputBookSearch form-control" onChange={handleInputValue}/>
      <button className="btn btn-primary" onClick={handleClickBookSearch}>Search book</button>
      <input id="checkboxInput" type="checkbox" className="btn-check"/> 
      <label id="checkboxLabel" className="form-check-label" htmlFor="checkboxInput">Advanced research</label>

    </div>
  );
};
