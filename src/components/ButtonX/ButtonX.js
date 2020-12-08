import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io"

const ButtonX = props => {

    const handleKeyDownRemove = e => {
        if (e.key === "Enter") {
            { props.func(e) }
        }
    }

    return (
        <IoIosCloseCircleOutline 
            onKeyDown={ handleKeyDownRemove } 
            tabIndex="0" 
            onClick={ props.func }/>
    )
}

export default ButtonX;