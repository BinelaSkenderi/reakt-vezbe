import { useState } from 'react';
import './App.css'

function App() {
const [number, setNumber]=useState(0); //vrednost, funkcija koj amenja vrednost
const [name, setName] = useState("");


function povecajBroj(){
  setNumber(number + 1);
}

function promeniIme(ev){
  setName(ev.target.value); //na svaku promenu texta promeni varjablu ime
}
  return (
  <>
  <button onClick={povecajBroj}>
    Klikni me bre!
  </button>
  <input type="text" value={name} onChange={promeniIme}/><br />
  {number}-{name}
  </>
  );
}

export default App;
