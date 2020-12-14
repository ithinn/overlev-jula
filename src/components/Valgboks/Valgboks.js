import React from "react";
import "./valgboks.css";


const Valgboks = props => {

    const handleKeyDown = e => {

        let gave_radio = document.getElementById("gave_radio");
        let praktisk_radio = document.getElementById("praktisk_radio");
  
        if (e.key === "Enter") {
          !e.target.checked && e.target.id === "praktisk_radio" ? praktisk_radio.checked = true : praktisk_radio.checked = false;
          !e.target.checked && e.target.id === "gave_radio" ? gave_radio.checked = true : gave_radio.checked = false;
        }
      }

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
            <input id="frist_inp" type="date" placeholder="Skriv inn frist"/>
            </div>
            
            <div id="radiovalg">
                <h2>Velg liste:</h2>
                
                <div id="the-wrap">
                    <div className="radio1 ball_wrapper">
                        <div className="string"></div>
                        <div className="ring"></div>
                        <div className="button"></div>
                        <div className="red-ball"> 
                            <input onKeyDown={ handleKeyDown } name="valg" id="gave_radio" type="radio" />
                            <label id="radio_lab_gave"htmlFor="gave_radio">Gaver</label>
                        </div>
                    </div>
                    

                    <div className="radio2 ball_wrapper">
                        <div className="string"></div>
                        <div className="ring"></div>
                        <div className="button"></div>
                        <div className="red-ball"> 
                            <input onKeyDown={ handleKeyDown } name="valg" id="praktisk_radio" type="radio"/>
                            <label id="radio_lab_praktisk" htmlFor="praktisk_radio">Praktisk</label>
                        </div>
                    </div>       
                </div>
            </div>

            <button id="legg_til_btn" onClick={ props.func } >Legg til</button>
            
        </div>
    )

}

export default Valgboks;