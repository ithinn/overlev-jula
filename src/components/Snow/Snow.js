import React from "react";
import "./snow.css";
import Snowfall from "react-snowfall"
import ReactAudioPlayer from "react-audio-player";
import deilig from "./deilig-er-jorden.mp3";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IconContext } from "react-icons/lib";


const Snow = props => {

    const handleExitKeyDown = e => {
        if (e.key === "Enter" || e.key === "Escape") {
            { props.showSnow() };
        }
    }
   
    return (
        <IconContext.Provider
            value={{ style: {width: "3em", height: "3em" }}}>

        <div className={ props.isSnow ? "snowwrapper" : null }>
            { props.isSnow ? <ReactAudioPlayer src={ deilig } autoPlay controls/> : null }
            
            { props.isSnow ? <IoIosCloseCircleOutline 
                id="remove" 
                tabIndex="0"   
                onClick={ props.showSnow }
                onKeyDown={ handleExitKeyDown } /> : null }
            
            { props.isSnow ? <Snowfall /> : null }
        </div>

    </IconContext.Provider>
    )
}

export default Snow;