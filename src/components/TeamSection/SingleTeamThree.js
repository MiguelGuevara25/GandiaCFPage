import { Col, Image } from "react-bootstrap";

const SingleTeamThree = ({ jugador }) => {
  return (
    <Col md={6} lg={6}>
      <div className="team-card-three">
        <div className="team-card-three__inner">
          <div className="team-card-three__image">
            <Image
              src={`http://localhost:1337${jugador.attributes.foto.data.attributes.url}`}
              alt=""
            />
          </div>
          <div className="team-card-three__content">
            <h5 className="team-card-three__name">
              {jugador.attributes.nombre}
            </h5>
            <div className="team-card-three__designation">
              {jugador.attributes.posicion}
            </div>
          </div>
          <div className="team-card-three__hover">
            <h5 className="team-card-three__name">
              {jugador.attributes.nombre}
            </h5>
            <div className="team-card-three__designation">
              {jugador.attributes.posicion}
            </div>

            <ul className="team-card-three__social clearfix m-0 list-unstyled">
              {jugador.attributes.instagram !== null && (
                <li>
                  <a
                    href={`https://www.instagram.com/${jugador.attributes.instagram}/`}
                    target="_blank"
                  >
                    <span className="fab fa-instagram"></span>
                  </a>
                </li>
              )}

              {jugador.attributes.twitter !== null && (
                <li>
                  <a
                    href={`https://twitter.com/${jugador.attributes.twitter}`}
                    target="_blank"
                  >
                    <span className="fab fa-twitter"></span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleTeamThree;