import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function LineContent({
  title,
  subtitle,
  description,
  descriptionBis,
  number,
  link,
  images,
}) {
  return (
    <>
      <div className="wrapper-altern">
        <div className="text-container-projet">
          {/* react/node/svelte/sveltekit */}
          <h3> {subtitle}</h3>
          <h2 className="l-txt">{title}</h2>
          <p className="small-txt">{description}</p>
          {descriptionBis ? (
            <>
              <br />
              <p className="small-txt">{descriptionBis}</p>
            </>
          ) : null}
          {link ? (
            <div className="container-link">
              <a className="btn2" href={link} target="_blank">
                Voir le site
              </a>
            </div>
          ) : null}
        </div>
        <div className="container-slider">
          <Splide
            id={`splide${number}`}
            className="splide"
            aria-label="My Favorite Images"
            options={{
              type: "loop",
              updateOnMove: true,
              perPage: 1,
            }}
          >
            {images.map((img, index) => (
              <SplideSlide key={index}>
                <img src={img} />
              </SplideSlide>
            ))}
          </Splide>
          {link ? (
            <div className="container-link-mobile">
              <a className="btn2" href={link} target="_blank">
                Voir le site
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
