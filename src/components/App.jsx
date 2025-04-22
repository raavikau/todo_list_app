import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
    const [inputText, setInput] = useState("");
    const [todoitems, setItems] = useState([]);

    function handleChange(event){
        const inputevent = event.target.value;
        setInput(inputevent);
    }

    function addItem() {
        setItems((previousitem) => {
            return [ ...previousitem, inputText];
        });
        setInput("");
    }

    function deleteItem(id) {
        setItems((previousitem) => {
            return previousitem.filter((item, index) => {
                return index !== id
            });
        });
    }
    
  return (
    <div className="container">
        <div className="heading">
            <h1>To-Do List</h1>
        </div>
        <div>
            <ul>
                {todoitems.map((item, index) => 
                <ToDoItem 
                key={index}
                id={index}
                text={item}
                doneItem={deleteItem}
                />
                )}
            </ul>
        </div>
    </div>
  );
}

export default App;
