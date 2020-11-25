import React from "react";
import { oppdragsListe } from "../Valgboks/Valgboks";
import ListItem from "../ListItem/ListItem"
import { Valgboks } from "../Valgboks/Valgboks";
import {inpValue} from "../Valgboks/Valgboks"; 

const Tabell = (props) => {
    const { oppdragsliste } = props;
    console.log(oppdragsliste);
    return (
        <table>
            <thead>
                <tr>
                    <th>Gjort?</th>
                    <th>Hvem?</th>
                    <th>Hva?</th>
                </tr>
            </thead>
            
            <ListItem oppdragsliste={oppdragsListe}/>
            
        </table>


    );
}

export default Tabell;