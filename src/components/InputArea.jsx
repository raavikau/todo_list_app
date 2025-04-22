import React from "react";

function InputArea() {
    return (
        <div className="form">
            <input type="text" onChange={handleChange} value={inputText}/>
            <button onClick={addItem}>
                <span>Add</span>
            </button>
        </div>
    ) 
}

export default InputArea;