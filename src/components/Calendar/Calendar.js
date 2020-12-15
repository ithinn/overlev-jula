import React from "react";
import "./calendar.css";
import Dot from "../Dot/Dot";


const Calendar = props => {

    const december = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    //Lister ut en div for hvert item i desember
    //Går gjennom lista med oppgaver og oppretter en Dot-component inne i diven hvis fristen for oppgaven stemmer overens med index til diven. 
    const daysInDec = december.map((item, index) => 
    
        <div 
            key={ "day" + index } 
            className="december-day" 
            id={ "d" + index }>

                <p className="date"> { item } </p>

                <div className="dot-container">
                    
                    {props.taskList.map((dot, i) => {
                        const deadline = dot.frist;

                        //legger til 0 foran index mellom 0-9, slik at det stemmer overens med formatet på "splitDeadline"
                        const dateFormat = index < 10 ? "0" + index : index;
     
                        //deler deadline i to arrayer, den første med dag (f.eks 15), den andre med måned (f.eks 12)
                        const splitDeadline = deadline.split("/", 2);     
                        
                        //definerer dotens klassenavn basert på hvilken liste den ligger i
                        const dotClass = dot.className === "buy-list" ? "buy-dot" : "do-dot";
                        
                        //Oppretter Dot
                        if (splitDeadline[0] == dateFormat) {
                            return <Dot 
                                        key={ "dot" + i } 
                                        dotInfo={ dot } 
                                        className={ dotClass } 
                                        deadlineId={ dot.frist } />
                        }

                    })}
                </div>
        </div>)
   
          
    return (
        <article id="cal_container">
           
            <h2>Desember</h2>
            <div id="cal_mnd">
                { daysInDec }    
            </div>
            
        </article>
    )
}

export default Calendar;