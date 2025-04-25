import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInput] = useState("");
    
    function handleChange(event){
        const inputevent = event.target.value;
        setInput(inputevent);
    }

    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText} />
            <button onClick={() => {
                props.onClickAdd(inputText);
                setInput("");
            }}>
                <span>Add</span>
            </button>
        </div>
    ) 
}

export default InputArea;
