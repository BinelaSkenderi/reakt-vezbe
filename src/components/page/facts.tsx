import { useState, useEffect, useRef, use  } from 'react';
import axios from 'axios';
import './Facts.css';  

function Facts() {
  const instance = axios.create({
    baseURL: 'https://catfact.ninja',
    
  });

// const [number, setNumber]=useState(0); //vrednost, funkcija koj amenja vrednost
// const [name, setName] = useState("");
// const referenbcanaElement = useRef(null);

const [fact, setFact] = useState(null);
const [error, setError]= useState(null);

// function povecajBroj( ){
//   referenbcanaElement.current.focus();//da udje u input/curent refencuje trenutni referenc
//   setNumber(number + 1); 
// }

// function promeniIme(ev){
//   setName(ev.target.value); //na svaku promenu texta promeni varjablu ime
// }

async function getFact() {
  try {
    const response = await instance.get('/fact');
    
    if(response.data){
      setFact(response.data.fact)
      setError(null);
    }
    
  } catch (error) {
    if(error){
      setError(error.message);
      setFact(null);
    }
  }
}

useEffect (() => {
  // window.scrollTo({ 
  //   behavior: "smooth", 
  //   top: referenbcanaElement.current.offsetTop,
  // });//da baca odma na dole
  getFact();
}, []);

// if(fact){
//   return fact
// }
//  else {
//   return "loading..."
//  }


  return (
  <div className='facts-container'>
  {/* <button onClick={povecajBroj}>Klikni me bre!</button>
  <input ref={referenbcanaElement}
   type="text" value={name} onChange={promeniIme}/>{""}
   <br /> */}
  {/* {fact ? fact : "loading... " }  */}
  {fact && <p className='facts-text'>{fact}</p>}
  {error && <p className='facts-error'>{error}</p>}
  {!fact && !error && <p>Loading...</p>}
  </div>
  );
};

export default Facts;
