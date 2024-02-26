import { Image } from "react-bootstrap";

const SingleNewsTwo = ({ video }) => {
  const { enlace, imagen } = video.attributes;

  return (
    <>
      <section className="portfolio-details-video">
        <div className="auto-container">
          <div className="portfolio-details-video__thumbnail">
            <Image
              src={`http://localhost:1337${imagen.data[0].attributes.url}`}
              alt="video"
            />
            <div className="vid-link">
              <a href={enlace} target="_blank" className="lightbox-image" rel="noreferrer">
                <div className="icon">
                  <span className="flaticon-play-button-1"></span>
                  <i className="ripple"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNewsTwo;
