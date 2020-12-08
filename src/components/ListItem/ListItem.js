import React from "react";
import "./listItem.css";
import ButtonX from "../ButtonX/ButtonX";

const ListItem = props => {

    const handleKeyDownInput = e => {
        let id = e.target.id;
        let input = document.getElementById(id);

        if (e.key === "Enter") {
            !input.checked ? input.checked = true : input.checked = false;
            
            if (input.checked) {
                { props.func(e) };
            }
        } 
    }

    return (
        <li className={ props.oppgave.className } id={ props.id }>
            <input 
                onKeyDown={ handleKeyDownInput } 
                onClick={props.func} 
                className="inpList" 
                id={ "inp" + props.id } 
                type="checkbox" />

            <p>{ props.oppgave.oppgave }</p>
            <p>{ props.oppgave.ansvar }</p>
            <p>{ props.oppgave.frist }</p>
            <ButtonX  tabIndex="0" func={ props.delete }/>
        </li>
    )
}

export default ListItem;