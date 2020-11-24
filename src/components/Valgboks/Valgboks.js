import React from "react";
import "./valgboks.css";
//import ListeTag from "./ListeTag/ListeTag";

class Valgboks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: ""}
        this.inpValue = this.inpValue.bind(this);
    }

    inpValue() {
        let newValue = document.getElementById("oppgave_inp").value;
        this.setState({value: newValue})
        console.log(newValue)

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