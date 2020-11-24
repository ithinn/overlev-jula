import React from "react";
import "./valgboks.css";
//import ListeTag from "./ListeTag/ListeTag";

class Valgboks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {oppgaveValue: "", ansvarValue: ""}
        this.inpValue = this.inpValue.bind(this);
    }

    inpValue() {
        let nyOppgave = document.getElementById("oppgave_inp").value;
        let nyAnsvar = document.getElementById("ansvar_inp").value;
        this.setState({oppgaveValue: nyOppgave, ansvarValue: nyAnsvar})
        console.log(nyOppgave);
        console.log(nyAnsvar);
    }

    render() {
        return (
            <article className="valgboks">
                <h2>Legg til ny oppgave</h2>
                <input 
                type="text"
                placeholder="Oppgave"
                id="oppgave_inp"
                value={this.state.newValue}
                />
                
                <input 
                type="text"
                placeholder="Ansvar"
                id="ansvar_inp"
                value={this.state.newValue}
                />

                <button
                type="submit"
                id="legg_til_Btn"
                onClick={this.inpValue}
                >Legg til i liste</button>


            </article>
        )
    }
}

export default Valgboks;