import Realtor from "./Realtor";

export default function Realtors() {
  return (
    <section className="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      <section className="realtors__list">
        <Realtor img="img/realtor-1.jpeg" name="Erik Feinman" sold="245" />
        <Realtor img="img/realtor-2.jpeg" name="Kim Brown" sold="212" />
        <Realtor img="img/realtor-3.jpeg" name="Toby Ramsey" sold="198" />
      </section>
    </section>
  );
}
