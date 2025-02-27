import { useState, useEffect, useRef, use  } from 'react';
import './App.css'

function App() {
const [number, setNumber]=useState(0); //vrednost, funkcija koj amenja vrednost
const [name, setName] = useState("");
const referenbcanaElement = useRef(null);

function povecajBroj(){
  referenbcanaElement.current.focus();//da udje u input/curent refencuje trenutni referenc
  setNumber(number + 1);
}

function promeniIme(ev){
  setName(ev.target.value); //na svaku promenu texta promeni varjablu ime
}

useEffect (()=>{
  window.scrollTo({ behavior: "smooth", 
    top: referenbcanaElement.current.offsetTop,
  });//da baca odma na dole
}, [])

  return (
  <div>
    {""}
    <div style={{height: "800px"}}></div>
    <div style={{height:"800px"}}>
  <button onClick={povecajBroj}>Klikni me bre!</button>
  <input ref={referenbcanaElement}
   type="text" value={name} onChange={promeniIme}/>{""}
   <br />
  {number}-{name}
  </div>
  </div>
  );
}

export default App;
