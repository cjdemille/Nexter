import { useState } from "react";
import axios from 'axios';

export default function Home({house }) {
  const [fav, setFav] = useState(house.favorited);

  const handleToggleHeartClick = async(house) => {
    const isFavorited = !fav; 
    const updateData = {...house, favorited: isFavorited};
    const updateUrl=`/api/houses/${house._id}`;

    axios.put(updateUrl, updateData).then(setFav((curr) => !curr))
  };
 
  return (
    <div className="home">
      <img src={house.img} alt={house.name} className="home__img" />
      <svg
        className={!fav ? "home__like home__like--empty" : "home__like"}
        onClick={()=> handleToggleHeartClick(house)}
      >
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 className="home__name">{house.name}</h5>
      <div className="home__location">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>{house.location}</p>
      </div>
      <div className="home__rooms">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>
          {house.rooms} {house.rooms > 1 ? "rooms" : "room"}
        </p>
      </div>
      <div className="home__area">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>
          {house.size} m <sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>${house.price}</p>
      </div>
      <button className="btn home__btn">Contact Realtor</button>
    </div>
  );
}
