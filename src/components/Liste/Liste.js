import React from "react";
import ListItem from "../ListItem/ListItem";
import "./liste.css";

const Liste = (props) => {

    const listeNavn = props.navn;
    const isLoadedGaver = props.isLoadedGaver 
    const isLoadedPraktisk = props.isLoadedPraktisk;
    //console.log(props.isLoaded);
    const oppgaveliste = props.oppgaveliste;
    //console.log(oppgaveliste);
    
    //console.log(props.oppgaveliste);

   

    const OPPGAVER_ITEMS_GAVER = props.oppgaveliste.map((item, index) => {
    if (item.className === "gaveliste") {
    return (
      <ListItem key={item.id} oppgave={item} func={() => checkStatusHandler(index)} id={index}/>
    );}
    })
    
    const OPPGAVER_ITEMS_PRAKTISK = props.oppgaveliste.map((item, index) => {
    if (item.className === "praktiskliste") {
    return (
      <ListItem key={item.id} oppgave={item} func={() => checkStatusHandler(index)} id={index}/>
    );}
    })

    const checkStatusHandler = (index) => {
        // const KOPI_AV_TASKS = [...tasks];
        // KOPI_AV_TASKS.splice(index, 1);
        // setTasks(KOPI_AV_TASKS)
        const listeItem = document.getElementById(index);
        const id= "#inp" + index
        const checkbox = document.querySelector(id);
        checkbox.checked ? listeItem.style.opacity = "0.5" : listeItem.style.opacity = "1";
    
      }

      const duErFlink = () => {
          
      }

    return (
        
        <article className="list-container" id={listeNavn}>
            {props.isLoaded ?
            
                <div className="quote-container">
                    <i className="pin"></i>
                    <div className="note yellow">
                        <h2 onClick={duErFlink()} className="list-heading">{listeNavn}</h2>
                        <ul className="list">
                        {listeNavn === "Gaver" ? OPPGAVER_ITEMS_GAVER : OPPGAVER_ITEMS_PRAKTISK}
                        </ul>
    
                    </div>
                </div> 
             : null}
        </article>
    )
}

export default Liste;

 //<button onClick={props.func}>sorter</button>