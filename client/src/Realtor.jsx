export default function Realtor({ realtor }) {
  return (
    <>
      <img src={realtor.img} alt={realtor.name} className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">{realtor.name}</h4>
        <p className="realtors__sold">{realtor.housesSold} houses sold</p>
      </div>
    </>
  );
}
