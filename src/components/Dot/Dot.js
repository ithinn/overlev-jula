import React from "react";
import "./dot.css";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { IconContext } from "react-icons/lib";


const Dot = props => {

    const handleShowInfoClick = e => {
        let targetId = e.target.id.substring(12);
        let dotInfo = document.querySelectorAll(".dot-info");
        
        dotInfo.forEach(el => {
            if (el.id.substring(6) === targetId) {
                el.style.display = "flex";
                el.style.opacity = "1";
            };
        })
    }

    const handleHideInfoClick = e => {
        let targetId = e.target.id.substring(6);
        let dotInfo = document.querySelectorAll(".dot-info");
        
        dotInfo.forEach(el => {
            if (el.id.substring(6) === targetId) {
                el.style.display = "none";
                el.style.opacity = "0";
            };
        })
    }

    const handleInfoKey = e => {
        if (e.key === "Enter") {
            if (e.target.nodeName === "DIV") {
                handleShowInfoClick(e);
            } else {
                handleHideInfoClick(e);
            }
        }       
    }
   
    return (

        <IconContext.Provider
            value={{ style: {width: "2em", height: "2em" }}}>
       
            <div 
                onKeyDown={ handleInfoKey }
                onClick={ handleShowInfoClick } 
                tabIndex="0" 
                className={ props.className } 
                id={ "container" + props.dotInfo.id }>

                <div 
                    className="dot-info" 
                    id={ "dot" + props.dotInfo.id }> 
                    
                        <IoIosCloseCircleOutline 
                            onKeyDown={ handleInfoKey } 
                            onClick={ handleHideInfoClick } 
                            tabIndex="0" 
                            id={ "out" + props.dotInfo.id }/>
                        <p>Oppgave: { props.dotInfo.oppgave }</p>
                        <p>Ansvar: { props.dotInfo.ansvar }</p>   
                </div>
            </div>

        </IconContext.Provider>
    );
}

export default Dot;