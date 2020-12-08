import React from "react";
import "./kalender.css";
import Dot from "../Dot/Dot";


const Kalender = props => {

    const DESEMBER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    //Lister ut en div for hvert item i DESEMBER
    //Går gjennom lista med oppgaver og oppretter en Dot-component inne i diven hvis fristen for oppgaven stemmer overens med index til diven. 
    const DAGLISTE = DESEMBER.map((item, index) => 
    
        <div 
            key={ "dag" + index } 
            className="desemberdag" 
            id={ "d" + index }>

                <span className="dato"> { item } </span>

                <div className="dot-container">
                    
                    {props.oppgaveliste.map((dot, i) => {
                        const frist = dot.frist;

                        //legger til 0 foran index mellom 0-9, slik at det stemmer overens med formatet på "littfrist"
                        const datoformat = index < 10 ? "0" + index : index;
                        //deler frist i to arrayer, den første med dag (f.eks 15), den andre med måned (f.eks 12)
                        const littfrist = frist.split("/", 2);     
                        
                        //Oppretter Dot
                        if (littfrist[0] == datoformat) {
                            return <Dot 
                                        key={ "dot" + i } 
                                        altOmDot={ dot } 
                                        className={ dot.className === "gaveliste" ? "gavedot" : "praktiskdot" } 
                                        fristid={ dot.frist } />
                        }

                    })}

                </div>
        </div>)
   
          

    return (
        <article id="kal_container">
           
            <h2>Desember</h2>
            <div id="kal_mnd">
                { DAGLISTE }    
            </div>
            
        </article>
    )
}

export default Kalender;