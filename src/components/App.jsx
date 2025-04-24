import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
    const [todoitems, setItems] = useState([]);

    function addItem(inputText) {
        setItems((previousitem) => {
            return [ ...previousitem, inputText];
        });
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
            <InputArea onClickAdd={addItem} />
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
