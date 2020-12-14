import React from "react";
import ListItem from "../ListItem/ListItem";
import "./liste.css";

const Liste = props => {

    const listeNavn = props.navn;
    
    //Går gjennom tasks (oppgaveliste) og oppretter ListItem-componenter basert på hvilket klassenavn oppgaven har
    const OPPGAVER_ITEMS_GAVER = props.oppgaveliste.map((item, index) => {
    if (item.className === "gaveliste") {
      return (
        <ListItem 
          key={ item.id } 
          oppgave={ item } 
          func={ props.checkStatus } 
          delete={ props.delete } 
          id={ "gave" + index }/>
      );}
    })
    
    const OPPGAVER_ITEMS_PRAKTISK = props.oppgaveliste.map((item, index) => {
    if (item.className === "praktiskliste") {
      return (
        <ListItem 
          key={ item.id } 
          oppgave={ item } 
          func={ props.checkStatus } 
          delete={ props.delete } 
          id={ "prak" + index }/>
      );}
    })

    return (
      <article aria-label={ listeNavn + "liste" } className="list-container" id={ listeNavn }>
        <div className="post-it-container">
            <i className="pin"></i>
            <div className="post-it">
              <h2 className="list-heading"> { listeNavn } </h2>
                        
              { props.isTasks ?

                //Hvis isTasks er true legges ListItemene inn i listen
                <ul id={ listeNavn + "liste" } className="list">
                  { listeNavn === "Gaver" ? OPPGAVER_ITEMS_GAVER : listeNavn === "Praktisk" ? OPPGAVER_ITEMS_PRAKTISK : null }
                </ul>

                : <h3 className="ingen">Du har ingen gjøremål</h3> }

            </div>
        </div> 
      </article>
    )
}

export default Liste;

