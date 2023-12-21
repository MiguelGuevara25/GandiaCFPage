import { Col, Image } from "react-bootstrap";

const SingleTeamThree = ({ team }) => {
  // const { image, name, designation, socials } = team;
  console.log(team);

  return (
    <Col md={6} lg={4}>
      <div className="team-card-three">
        <div className="team-card-three__inner">
          <div className="team-card-three__image">
            {/* <Image
              src={require(`@/images/resource/${image}`).default.src}
              alt=""
            /> */}
          </div>
          <div className="team-card-three__content">
            <h5 className="team-card-three__name">{team.attributes.nombre}</h5>
            <div className="team-card-three__designation">
              {team.attributes.nombre}
            </div>
          </div>
          <div className="team-card-three__hover">
            <h5 className="team-card-three__name">
              {team.attributes.posicion}
            </h5>
            <div className="team-card-three__designation">
              {team.attributes.nombre}
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
