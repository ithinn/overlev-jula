import React from "react";
import "./chooseTask.css";


const ChooseTask = props => {

    const handleKeyDown = e => {

        let buyRadio = document.getElementById("buyRadio");
        let doRadio = document.getElementById("doRadio");
      
        if (e.key === "Enter") {
          !e.target.checked && e.target.id === "doRadio" ? doRadio.checked = true : doRadio.checked = false;
          !e.target.checked && e.target.id === "buyRadio" ? buyRadio.checked = true : buyRadio.checked = false;
        }
    }

    return (
        <div className="choose-box">
            <div className="text-inp">
                <label htmlFor="what_inp">Hva skal gjøres? </label>
                <input id="what_inp" type="text" placeholder="Skriv inn oppgave"/>
            </div>

            <div className="text-inp">
                <label htmlFor="who_inp">Hvem skal gjøre det? </label>
                <input id="who_inp" type="text" placeholder="Skriv inn ansvar"/>
            </div>

            <div className="text-inp">
                <label htmlFor="when_inp">Når må det være gjort? </label>
                <input id="when_inp" type="date" placeholder="Skriv inn frist"/>
            </div>
            
            <div id="radio_wrap">
                <h2>Velg liste:</h2>
                
                <div id="chr_balls_wrap">
                    <div className="ball_wrapper">
                        <div className="string"></div>
                        <div className="ring"></div>
                        <div className="button"></div>
                        <div className="ball"> 
                            <input onKeyDown={ handleKeyDown } name="balls" id="buyRadio" type="radio" />
                            <label id="radio_lab_buy" htmlFor="buyRadio">Gaver</label>
                        </div>
                    </div>
                    

                    <div className="ball_wrapper">
                        <div className="string"></div>
                        <div className="ring"></div>
                        <div className="button"></div>
                        <div className="ball"> 
                            <input onKeyDown={ handleKeyDown } name="balls" id="doRadio" type="radio"/>
                            <label id="radio_lab_do" htmlFor="doRadio">Praktisk</label>
                        </div>
                    </div>       
                </div>
            </div>

            <button id="add_task_btn" onClick={ props.func } >Legg til</button>
            
        </div>
    )

}

export default ChooseTask;