import React from "react";
//import { oppdragsListe } from "../Valgboks/Valgboks";


const ListItem = (props) => {
    
    const {oppdragsliste} = props;
    console.log(oppdragsliste);
    if (oppdragsliste.length > 0) {
        return (
            <tbody>
            {oppdragsliste.map((oppgave, i) => (
                <tr key={oppdragsliste.id}>
                <td>
                    <input id={oppgave[i]} type="checkbox" />
                </td>
                <td>{oppgave.oppgave}</td>
                <td>{oppgave.ansvar}</td>
            </tr>
            )    
            )}
            </tbody>
            );
    } else {
        return <tbody></tbody>;
    }
    
}

export default ListItem;