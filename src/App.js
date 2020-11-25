
import './App.css';
import Header from "./components/Header/Header";
import {Valgboks} from "./components/Valgboks/Valgboks";
import Liste from "./components/Liste/Liste";
import Tabell from "./components/Tabell/Tabell";
import {oppdragsListe} from "./components/Valgboks/Valgboks";

function App() {
  
  return (
    <div className="App">
      <Header />
      <Valgboks />
      <Liste navn="Gaver" />
      <Liste navn="Praktisk" />
      <Tabell oppdragsliste={oppdragsListe}/>
    </div>
  );
}

export default App;
