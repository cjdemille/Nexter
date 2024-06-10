import { useState } from "react";

export default function Home({ img, name, location, rooms, size, price }) {
  const [fav, setFav] = useState(false);

  const handleHeartClick = () => {
    setFav((curr) => !curr);
  };
  return (
    <div className="home">
      <img src={img} alt={name} className="home__img" />
      <svg
        className={!fav ? "home__like home__like--empty" : "home__like"}
        onClick={handleHeartClick}
      >
        <use xlinkHref="img/sprite.svg#icon-heart-full"></use>
      </svg>
      <h5 className="home__name">{name}</h5>
      <div className="home__location">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-map-pin"></use>
        </svg>
        <p>{location}</p>
      </div>
      <div className="home__rooms">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-profile-male"></use>
        </svg>
        <p>
          {rooms} {rooms > 1 ? "rooms" : "room"}
        </p>
      </div>
      <div className="home__area">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-expand"></use>
        </svg>
        <p>
          {size} m <sup>2</sup>
        </p>
      </div>
      <div className="home__price">
        <svg className="home__like">
          <use xlinkHref="img/sprite.svg#icon-key"></use>
        </svg>
        <p>${price}</p>
      </div>
      <button className="btn home__btn">Contact Realtor</button>
    </div>
  );
}
