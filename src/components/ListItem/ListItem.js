import React from "react";


const ListItem = (props) => {
    return (
        <li className={props.oppgave.className} id={props.id}>
            <input id={"inp"+props.id} onClick={props.func} type="checkbox" />
            <p>{props.oppgave.oppgave}</p>
            <p>{props.oppgave.ansvar}</p>
            <p>{props.oppgave.frist}</p>
        </li>
    )
}

export default ListItem;