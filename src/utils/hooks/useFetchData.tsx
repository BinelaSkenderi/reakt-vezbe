import axios from "axios";
import { useState, useEffect } from "react";


function useFetchData(url: string) {
    
        const instance = axios.create({
        baseURL: 'https://catfact.ninja',
      });


    const [fact, setFact] = useState(null);
    const [error, setError]= useState(null);


    async function getFact() {
        try {
          const response = await instance.get(url);
          
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
        getFact();
    }, []);

    return {fact, error}
}

export default useFetchData;



// statusi bitni u programiranjue
//200 status - ok,
//400 status - error na frontendu (nesto dobro nesalje),
//401 status - unautoritet (nemamo neki div u headeru, neki sajtovi API traze kljuc dabi mogli da dobijemo date),
//402 status - payment requarier -ovaj error slusi kad iskoci kada istrosimo neke besplatne stvari pa trazzi da se naplati
//403 status - nemamo permicion da pristimo podacima
//4o4 status - not found -stranica nije pronadjena,
//429 status - previse request
//500 status - server error - to je uvek greska kod be