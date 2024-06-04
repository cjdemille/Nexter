export default function Feature({ iconLink, heading, text }) {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use xlinkHref={iconLink}></use>
      </svg>
      <h4 className="heading-4 heading-4--dark">{heading}</h4>
      <p className="feature__text">{text}</p>
    </div>
  );
}
