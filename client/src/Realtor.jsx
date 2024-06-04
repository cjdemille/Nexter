export default function Realtor({ img, name, sold }) {
  return (
    <>
      <img src={img} alt={name} className="realtors__img" />
      <div className="realtors__details">
        <h4 className="heading-4 heading-4--light">{name}</h4>
        <p className="realtors__sold">{sold} houses sold</p>
      </div>
    </>
  );
}
