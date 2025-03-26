import React, { useState } from "react";

function ToDoItem(props) {
    const [isMouseClick, styleChange] = useState(false);

    function onMouseClick() {
        return styleChange(! isMouseClick);
    }
    
    return <div>
        <li onClick={onMouseClick} style = {{textDecoration : isMouseClick && "line-through"}}>
            {props.text}
        </li>
    </div>
}

export default ToDoItem;