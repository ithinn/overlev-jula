import React, { useState } from "react";
import ChooseTask from "./components/ChooseTask/ChooseTask";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Calendar from "./components/Calendar/Calendar";
import Snow from "./components/Snow/Snow"
import NavLinks from "./components/NavLinks/NavLinks"
import Task from "./components/Task/Task"
import { 
  BrowserRouter as Router,
  Route,
  Switch } from "react-router-dom";
import './App.css';


const App = () => {

  //--------------------------------------------------------------------
  //STATE
  //--------------------------------------------------------------------

  const [tasks, setTasks] = useState([]);
  const [isTasksBuy, setisTasksBuy] = useState(false)
  const [isTasksDo, setisTasksDo] = useState(false)
  const [snow, setSnow] = useState(false);
  

  //---------------------------------------------------------------------
  //LEGGE TIL TASKS
  //---------------------------------------------------------------------  

  const handleAddTask = () => {
    let copy = [...tasks];

    let whatInp = document.getElementById("what_inp");
    let whoInp = document.getElementById("who_inp");
    let whenInp = document.getElementById("when_inp");
    let buyRadio = document.getElementById("buyRadio");
    let doRadio = document.getElementById("doRadio");
    let className = "";

    //Utdeler klassenavn til ny oppgave basert på om bruker vil legge det til i "Gaver" eller "Praktisk". 
    //Endrer state for isTasks
    //Lager feilmelding hvis ingen av listene er valgt
    if (buyRadio.checked) {
      className="buy-list"
      setisTasksBuy(true)

    } else if (doRadio.checked) {
      className="do-list"
      setisTasksDo(true)

    } else if (!doRadio.checked && !buyRadio.checked) {
      alert("Du må velge hvilken liste du vil legge oppgaven i.");
    }

    //Oppretter ny oppgave og tildeler properties basert på inputfeltenes values. 
    const myTask = new Task(whatInp.value, whoInp.value, whenInp.value, className );

    copy.push(myTask);

    setTasks(copy);
  }

  
  //----------------------------------------------------
  //FJERNE OPPGAVE FRA TASKS 
  //----------------------------------------------------
  
  const handleDeleteItemClick = e => {
   
    //Fjerner oppgaven fra tasks og listevisningen
    const copy = [...tasks];
    let listItemIndex = e.target.parentNode.id.substring(4);

    copy.splice(listItemIndex, 1);
    setTasks(copy);

    //Oppretter midlertidige lister basert på klassenavn
    const buyTemp = [];
    const doTemp = [];

    copy.forEach(el => {
      if(el.className === "buy-list") {
        buyTemp.push(el)
      } else {
        doTemp.push(el);
      }
    })

    //Sjekker om listene er tomme, og endrer isTasks hvis de er det
    if(buyTemp.length === 0) {
      setisTasksBuy(false)
    } 
    
    if (doTemp.length === 0) {
      setisTasksDo(false);
    }

    //Setter i gang snø og julemusikk hvis det ikke ligger noe i noen av listene. 
    if(buyTemp.length === 0 && doTemp.length === 0) {
      setSnow(true)
    }
  }


  //---------------------------------------------------------------------------------------------------------------
  //MARKER OPPGAVER SOM ER UTFØRT
  //Endrer style på listItems når checkboxene er sjekka, og setter igang snø og musikk hvis alle inputs er checked
  //---------------------------------------------------------------------------------------------------------------

  const handleCheckStatusClick = e => {

    //Henter ut det ListItemet checkboxen hører til
    let listItem_id = e.target.parentNode.id;
    const listItem = document.getElementById(listItem_id);

    //Henter ut en liste med alle checkboxer, og gjør den om til et array
    const inpList = document.querySelectorAll(".inpList");
    const inpArray = Array.from(inpList);

    //Sjekker om alle checkboxene er sjekket, og setter i såfall i gang snø og musikk etter tre sekunder
    let isChecked = el => el.checked;

    if (inpArray.every(isChecked)) {
      setTimeout(function() { 
      setSnow(true);
      }, 1000);

    }

    //Legger til checkedOut-class når input er sjekka
    listItem.classList.toggle("checkedOut");
  }


  //----------------------------------------------------------------------
  //SNØFALL OG JULEMUSIKK
  //----------------------------------------------------------------------

  const handleSnowClick = () => {
    setSnow(false);
  }


  return (
    <Router>
      <div className="App">

        <header>
          <Snow isSnow={ snow } showSnow={ () => handleSnowClick() } />
          <Header/>
        </header>

        <main>
          <ChooseTask func={ () => handleAddTask() } />
          
          <Switch>
            <Route exact path="/">
              <div id="list_wrap">
                <List 
                taskList={ tasks } 
                title="Gaver" 
                isTasks={ isTasksBuy } 
                delete={ handleDeleteItemClick } 
                checkStatus={ handleCheckStatusClick }/>
                
                <List 
                taskList={ tasks } 
                title="Praktisk" 
                isTasks={ isTasksDo } 
                delete={ handleDeleteItemClick } 
                checkStatus={ handleCheckStatusClick }/>
              </div>
            </Route>

            <Route path="/calendar">
                <Calendar taskList={ tasks }/> 
            </Route>
            
          </Switch>

          <NavLinks />
        </main>
      </div>
    </Router>
  );
}

export default App;


