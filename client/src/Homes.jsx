import {useState, useEffect} from 'react';
import axios from "axios";
import Home from "./Home";



export default function Homes() {
  const [houses, setHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function(){
    async function fetchHouses(){
      try{
        setIsLoading(true);
        const res = await fetch('/api/houses', {mode: "cors"} );
        if(!res.ok) throw new Error("Oh no! We couldn't find that data");
        const data = await res.json();
        if(data.Response === "False") throw new Error('nothing found');
        setHouses(data);
      }catch(err){
        console.log(err.message);
      }finally{
        setIsLoading(false);
      }
    }
    fetchHouses()
  }, [])


  return (
    <section className="homes">

    {!isLoading && houses.length && houses.map((house) => (
      <Home house={house} key={house._id}/>
    ))}
    </section>
  );
}
