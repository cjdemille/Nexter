import GalleryImg from "./GalleryImg";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

export default function Gallery() {
  return (
    <section className="gallery">
      {array.map((num) => (
        <GalleryImg num={num} key={num} />
      ))}
    </section>
  );
}
