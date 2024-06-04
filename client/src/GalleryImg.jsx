export default function GalleryImg({ num }) {
  return (
    <figure className={`gallery__item gallery__item--${num}`}>
      <img
        src={`img/gal-${num}.jpeg`}
        alt={`Gallery image ${num}`}
        className="gallery__img"
      />
    </figure>
  );
}
