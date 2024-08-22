export default function AboutCard({
  image,
  heading,
  content1,
  content2,
  reverse,
}) {
  return (
    <div
      className={`about__card__container ${
        reverse && "about__card__container__reverse"
      }`}
    >
      <div className="about__card__container__img">
        <img src={image} alt="honda parts now" />
      </div>
      <div className="about__card__content">
        <div className="about__card__content__heading">{heading}</div>
        <div className="about__card__content__text">
          {content1}
          <br />
          <br />
          {content2}
        </div>
      </div>
    </div>
  );
}
