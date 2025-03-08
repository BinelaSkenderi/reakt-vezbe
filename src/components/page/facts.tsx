import useFetchData from '../../utils/hooks/useFetchData';
import './Facts.css';  


interface useFetchData {
  fact: null;
  error: null;
}

function Facts() {
    const {fact, error} =useFetchData("Fact");




// const [number, setNumber]=useState(0); //vrednost, funkcija koj amenja vrednost
// const [name, setName] = useState("");
// const referenbcanaElement = useRef(null);


// function povecajBroj( ){
//   referenbcanaElement.current.focus();//da udje u input/curent refencuje trenutni referenc
//   setNumber(number + 1); 
// }

// function promeniIme(ev){
//   setName(ev.target.value); //na svaku promenu texta promeni varjablu ime
// }


  // window.scrollTo({ 
  //   behavior: "smooth", 
  //   top: referenbcanaElement.current.offsetTop,
  // });//da baca odma na dole

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
