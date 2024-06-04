import Feature from "./Feature";

export default function Features() {
  return (
    <section className="features">
      <Feature
        iconLink="img/sprite.svg#icon-global"
        heading="World's best luxury homes"
        text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio
      necessitatibus pariatur voluptatibus."
      />
      <Feature
        iconLink="img/sprite.svg#icon-trophy"
        heading="Only the best properties"
        text="Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a
        eligendi aut quia."
      />
      <Feature
        iconLink="img/sprite.svg#icon-key"
        heading="New home in one week"
        text="Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit."
      />
      <Feature
        iconLink="img/sprite.svg#icon-presentation"
        heading="Top 1% realtors"
        text="Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio
        necessitatibus pariatur voluptatibus."
      />
      <Feature
        iconLink="img/sprite.svg#icon-lock"
        heading="Secure payments on nexter"
        text="Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
      />
    </section>
  );
}
