import {useState, useEffect} from 'react';
import axios from "axios";
import Home from "./Home";
import { sassFalse } from 'sass';



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

    {!isLoading && houses.length && houses.map((home) => (
      <Home
      key={home._id}
      img={home.img}
      name={home.name}
      location={home.location}
      rooms={home.rooms}
      size={home.size}
      price={home.price}
      isFav={home.favorited}

    />
    ))}

     
      {/* <Home
        img="img/house-1.jpeg"
        name="Beautify Family House"
        location="USA"
        rooms={5}
        size={5}
        price={1200000}
      />

      <Home
        img="img/house-2.jpeg"
        name="Modern Glass Villa"
        location="Canada"
        rooms={6}
        size={450}
        price={2750000}
      />

      <Home
        img="img/house-3.jpeg"
        name="Cozy Country House"
        location="UK"
        rooms={4}
        size={250}
        price={850000}
      />

      <Home
        img="img/house-4.jpeg"
        name="Large Rustic Villa"
        location="Portugal"
        rooms={6}
        size={480}
        price={1950000}
      />

      <Home
        img="img/house-5.jpeg"
        name="Majestic Palace"
        location="Germany"
        rooms={18}
        size={4230}
        price={9500000}
      />
      
      <Home
        img="img/house-6.jpeg"
        name="Modern Family Apartment"
        location="Italy"
        rooms={3}
        size={180}
        price={300000}
      /> */}
    </section>
  );
}
