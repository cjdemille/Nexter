import Realtor from "./Realtor";
import axios from "axios";
import {useState, useEffect} from 'react';

export default function Realtors() {
  const [realtors, setRealtors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() =>{
    const fetchRealtors = async () => {
      try{
        setIsLoading(true);
        const res = await fetch('/api/realtors', {mode:"cors"});
        if(!res.ok) throw new Error("Oh no! I couldn't find the realtors");
        const data = await res.json(); 
        if(data.Response === 'False') throw new Error('nothing found'); 
        setRealtors(data)
      }catch(err){
        console.log(err.message);
      } finally{
        setIsLoading(false)
      }
    }
    fetchRealtors();
  }, [])


  return (
    <section className="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      <section className="realtors__list">

        {!isLoading && realtors.length && realtors.map((realtor)=><Realtor key={realtor.id} realtor={realtor}/> )}
       
      </section>
    </section>
  );
}
