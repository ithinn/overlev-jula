import React from "react";
import "./valgboks.css";


const Valgboks = (props) => {

    return (
        <div className="valgboks">
            <div className="text-inp">
            <label htmlFor="oppdrag_inp">Hva skal gjøres? </label>
            <input id="oppdrag_inp" type="text" placeholder="Skriv inn oppgave"/>
            </div>

            <div className="text-inp">
            <label htmlFor="ansvar_inp">Hvem skal gjøre det? </label>
            <input id="ansvar_inp" type="text" placeholder="Skriv inn ansvar"/>
            </div>

            <div className="text-inp">
            <label htmlFor="frist_inp">Når må det være gjort? </label>
            <input id="frist_inp" type="date" value="2020.12.24" placeholder="Skriv inn frist"/>
            </div>
            
            <div id="radiovalg">
                <span>Velg liste:</span>
                
                <div id="radio1">
                <label id="radio_lab_gave"htmlFor="gave_radio">Gaver</label>
                <input name="valg" id="gave_radio" type="radio" />
                </div>
                
                <div id="radio2">
                <label id="radio_lab_praktisk"htmlFor="praktisk_radio">Praktisk</label>
                <input name="valg" id="praktisk_radio" type="radio"/>
                </div>
            </div>

            <button id="legg_til_btn" onClick={props.func}>Legg til</button>
            
        </div>
    )

}

export default Valgboks;