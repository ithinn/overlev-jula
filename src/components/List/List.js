import React from "react";
import ListItem from "../ListItem/ListItem";
import "./list.css";

const List = props => {

    const listName = props.title;
    
    //Går gjennom tasks (taskList) og oppretter ListItem-componenter basert på hvilket klassenavn oppgaven har
    const tasksBuy = props.taskList.map((item, index) => {
        if (item.className === "buy-list") {
        return (
          <ListItem 
            key={ item.id } 
            oppgave={ item } 
            func={ props.checkStatus } 
            delete={ props.delete } 
            id={ "buy_" + index }/>
        );}
    })
    
    const tasksDo = props.taskList.map((item, index) => {
      if (item.className === "do-list") {
        return (
          <ListItem 
            key={ item.id } 
            oppgave={ item } 
            func={ props.checkStatus } 
            delete={ props.delete } 
            id={ "do__" + index }/>
        );}
    })

    const whichList = listName === "Gaver" ? tasksBuy : listName === "Praktisk" ? tasksDo : null;
    
    return (
      <article aria-label={ listName + "liste" } className="list-container" id={ listName }>
        <div className="post-it-container">
            <i className="pin"></i>
            <div className="post-it">
              <h2 className="list-heading"> { listName } </h2>
                        
              { props.isTasks ?

                <ul id={ listName + "list" } className="list">
                  { whichList }
                </ul>

                : <h3 className="no-tasks">Du har ingen gjøremål</h3> }

            </div>
        </div> 
      </article>
    )
}

export default List;

