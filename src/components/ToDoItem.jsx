import React, { useState } from "react";

function ToDoItem(props) {
    const [isMouseClick, styleChange] = useState(false);

    function onMouseClick() {
        return styleChange( !isMouseClick );
    }
    
    return <div onClick = {() => {
            props.doneItem(props.id)
        }}>
        {/* <li onClick={onMouseClick} style = {{textDecoration : isMouseClick && "line-through"}}> */}
        <li>
            {props.text}
        </li>
    </div>
}

export default ToDoItem;
