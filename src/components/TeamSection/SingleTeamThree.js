import { Col, Image } from "react-bootstrap";

const SingleTeamThree = ({ jugador }) => {
  // const { image, name, designation, socials } = team;

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
            {/* <ul className="team-card-three__social clearfix m-0 list-unstyled">
              {socials?.map(({ id, icon, href }) => (
                <li key={id}>
                  <a href={href}>
                    <span className={icon}></span>
                  </a>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleTeamThree;
