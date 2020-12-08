import React, { useState } from "react";
import './App.css';
import Valgboks from "./components/Valgboks/Valgboks";
import Moment from "moment";
import Header from "./components/Header/Header";
import Liste from "./components/Liste/Liste";
import Kalender from "./components/Kalender/Kalender";
import { 
  BrowserRouter as Router,
  Route,
  Switch } from "react-router-dom";
import Snow from "./components/Snow/Snow"
import NavLinks from "./components/NavLinks/NavLinks"


const App = () => {

  const [tasks, setTasks] = useState([]);
  const [isTasksGaver, setisTasksGaver] = useState(false)
  const [isTasksPraktisk, setisTasksPraktisk] = useState(false)
  const [snow, setSnow] = useState(false);
  

  //---------------------------------------------------------------------
  //LEGGE TIL TASKS
  //---------------------------------------------------------------------  

  //Oppretter nye objekter i tasks
  class Task {
    constructor(oppgave, ansvar, frist, className) {
      this.oppgave = oppgave;
      this.ansvar = ansvar;
      this.frist = Moment(frist).format("DD/MM");
      this.className = className;
      this.id = "key" + Math.floor(Math.random()*1000);
    }
  }

  //Oppdaterer tasks
  const handleAddTask = () => {
    let COPY = [...tasks];

    let oppdragsInput = document.getElementById("oppdrag_inp");
    let ansvarsInput = document.getElementById("ansvar_inp");
    let fristInput = document.getElementById("frist_inp");
    let gave_radio = document.getElementById("gave_radio");
    let praktisk_radio = document.getElementById("praktisk_radio");
    let className = "";

    //Utdeler klassenavn til ny oppgave basert på om bruker vil legge det til i "Gaver" eller "Praktisk". 
    //Endrer state for isTasks
    if (gave_radio.checked) {
      className="gaveliste"
      setisTasksGaver(true)
    } else if (praktisk_radio.checked) {
      className="praktiskliste"
      setisTasksPraktisk(true)
    }

    //Oppretter ny oppgave og tildeler properties basert på inputfeltenes values. 
    const mittOppdrag = new Task(oppdragsInput.value, ansvarsInput.value, fristInput.value, className );

    COPY.push(mittOppdrag);

    setTasks(COPY);
  }

  
  //----------------------------------------------------
  //FJERNE OPPGAVE FRA TASKS 
  //----------------------------------------------------
  
  const handleDeleteItemClick = e => {
   
    //Fjerner oppgaven fra tasks og listevisningen
    const COPY = [...tasks];
    let li_id = e.target.parentNode.id.substring(4);

    COPY.splice(li_id, 1);
    setTasks(COPY);

    //Oppretter midlertidige lister basert på klassenavn
    const GAVER = [];
    const PRAKTISK = [];

    COPY.forEach(el => {
      if(el.className === "gaveliste") {
        GAVER.push(el)
      } else {
        PRAKTISK.push(el);
      }
    })

    //Sjekker om listene er tomme, og endrer isTasks hvis de er det
    if(GAVER.length === 0) {
      setisTasksGaver(false)
    } 
    
    if (PRAKTISK.length === 0) {
      setisTasksPraktisk(false);
    }

    //Setter i gang snø og julemusikk hvis det ikke ligger noe i noen av listene. 
    if(GAVER.length === 0 && PRAKTISK.length === 0) {
      setSnow(true)
    }
  }


  //---------------------------------------------------------------------------------------------------------------
  //MARKER OPPGAVER SOM ER UTFØRT
  //Endrer style på listItems når checkboxene er sjekka, og setter igang snø og musikk hvis alle inputs er checked
  //---------------------------------------------------------------------------------------------------------------

  const handleCheckStatusClick = e => {

    let inp_id = "inp" + e.target.parentNode.id;
    let listItem_id = e.target.parentNode.id;

    //Henter ut den checkboxen som er klikka på
    const checkbox = document.getElementById(inp_id);

    //Henter ut en liste med alle checkboxer, og gjør den om til et array
    const listeItem = document.getElementById(listItem_id);
    const inpList = document.querySelectorAll(".inpList");
    const inpArray = Array.from(inpList);

    //Sjekker om alle checkboxene er sjekket, og setter i såfall i gang snø og musikk etter tre sekunder
    let isChecked = el => el.checked;

    if (inpArray.every(isChecked)) {
      setTimeout(function() { 
      setSnow(true);
      }, 3000);

    }
    
    //Gir list-itemet som checkboxen hører til ny klasse basert på om checkboxen er sjekka eller ikke
    checkbox.checked ? listeItem.classList.add("checkedOut") : listeItem.classList.add("checkedIn");
    
  }


  //----------------------------------------------------------------------
  //SNØFALL OG JULEMUSIKK
  //----------------------------------------------------------------------

  //Fjerner snø og sang
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
          <Valgboks func={ () => handleAddTask() } />
          
          <Switch>
            <Route exact path="/">
              <div id="list_wrap">
                <Liste 
                oppgaveliste={ tasks } 
                navn="Gaver" 
                isTasks={ isTasksGaver } 
                delete={ handleDeleteItemClick } 
                checkStatus={ handleCheckStatusClick }/>
                
                <Liste 
                oppgaveliste={ tasks } 
                navn="Praktisk" 
                isTasks={ isTasksPraktisk } 
                delete={ handleDeleteItemClick } 
                checkStatus={ handleCheckStatusClick }/>
              </div>
            </Route>

            <Route path="/kalender">
                <Kalender oppgaveliste={ tasks }/> 
            </Route>
            
          </Switch>

          <NavLinks />
        </main>
      </div>
    </Router>
  );
}

export default App;


