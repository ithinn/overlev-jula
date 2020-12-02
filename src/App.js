import React, {useEffect, useState} from "react";
import ListItem from "./components/ListItem/ListItem";
import './App.css';
import Valgboks from "./components/Valgboks/Valgboks";
//import oppgaveliste from "./oppgaveliste";
//import Moment from "moment";
import Header from "./components/Header/Header";
import Liste from "./components/Liste/Liste";

class Task {
  constructor(oppgave, ansvar, frist, className) {
    this.oppgave = oppgave;
    this.ansvar = ansvar;
    this.frist = frist;
    this.className = className;
    this.id = "key" + Math.floor(Math.random()*1000);
  }
}



const App = () => {

  const [tasks, setTasks] = useState([]);
  const [isLoadedGaver, setIsLoadedGaver] = useState(false)
  const [isLoadedPraktisk, setIsLoadedPraktisk] = useState(false)

    
const addTask = () => {
  let COPY_OF_LIST = [...tasks];
  let oppdragsInput = document.getElementById("oppdrag_inp");
  let ansvarsInput = document.getElementById("ansvar_inp");
  let fristInput = document.getElementById("frist_inp");
  let gave_radio = document.getElementById("gave_radio");
  let praktisk_radio = document.getElementById("praktisk_radio");
  let className = "";
  
  if (gave_radio.checked) {
    className="gaveliste"
    setIsLoadedGaver(true)
  } else if (praktisk_radio.checked) {
    className="praktiskliste"
    setIsLoadedPraktisk(true)
  }



  const mittOppdrag = new Task(oppdragsInput.value, ansvarsInput.value, fristInput.value, className );
  
  //let listeSeksjon = gave_radio.checked ? COPY_OF_LIST[0] : COPY_OF_LIST[1]
  
  COPY_OF_LIST.push(mittOppdrag);

  setTasks(COPY_OF_LIST); 

 
  //setDateFormat(date: Moment(fristInput).format("DD-MM-YYYY"));
  //console.log(dateFormat.date);
}

const sortListItems = () => {
  console.log("Den virker");
  
  const compare = (a, b) => {
    const ansvarA = a.ansvar.toUpperCase();
    const ansvarB = b.ansvar.toUpperCase();

    let comparison = 0;
    if (ansvarA > ansvarB) {
      comparison=1;
    } else if (ansvarB < ansvarB) {
      comparison = -1;
    }
    return comparison;
    
  }

  const KOPI = [...tasks];
  console.log(KOPI);
  const SORTERT = KOPI.sort(compare);
  console.log(SORTERT);

}
 
  
  return (
    <div className="App">
      <Header/>
      <Valgboks func={() => addTask()}/>
      <div id="liste_container">
        <Liste oppgaveliste={tasks} navn="Gaver" isLoaded={isLoadedGaver} func={() => sortListItems()}/>
        <Liste oppgaveliste={tasks} navn="Praktisk" isLoaded={isLoadedPraktisk} func={() => sortListItems()}/>
      </div>

      
    </div>
  );
}




export default App;



// <ul>
//           {OPPGAVER_ITEMS}
//         </ul>