import React from "react";
import Snowfall from "react-snowfall"
import ReactAudioPlayer from "react-audio-player";
import song from "./deilig-er-jorden.mp3";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IconContext } from "react-icons/lib";
import "./snow.css";


const Snow = props => {
    
    const handleEscape = e => {
        if (e.key === "Escape") {
           props.showSnow();
        }
    }

    const handleExitKeyDown = e => {
        if (e.key === "Enter" || e.key === "Escape") {
            props.showSnow();
        }
    }

    return (
        <IconContext.Provider
            value={{ style: {width: "3em", height: "3em" }}}>

            <div 
                tabIndex="0" 
                onKeyDown={ handleEscape } 
                className={ props.isSnow ? "snowwrapper" : null }>
                    { props.isSnow ? <ReactAudioPlayer src={ song } autoPlay controls/> : null }
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