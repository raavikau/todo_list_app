import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
    const [inputText, setInput] = useState("");
    const [todoitems, setItems] = useState([]);

    function handleChange(event){
        const inputevent = event.target.value;
        setInput(inputevent);
    }

    function addItem(){
        setItems((previousitem) => {
            return [ ...previousitem, inputText];
        });
        setInput("");
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
      <input type="text" onChange={handleChange} value={inputText}/>
      <button onClick={addItem}>
        <span>Add</span>
      </button>
    </div>
      <div>
        <ul>
            {todoitems.map((item) => 
            <ToDoItem text={item}/>
             )}
        </ul>
      </div>
    </div>
  );
}

export default App;
