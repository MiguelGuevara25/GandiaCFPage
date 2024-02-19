import { technicalTeam } from "@/data/teamSection";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Image } from "react-bootstrap";

const { title } = technicalTeam;
const TechnicalTeam = ({ className = "", showTitle = true }) => {
  const [technicalTeam, setTechnicalTeam] = useState([]);

  const getTechnicalTeam = async () => {
    const url =
      "https://admin.clubdefutbolgandia.com/api/cuerpo-tecnicos?populate=*";
    const res = await axios.get(url);
    const { data } = res.data;

    setTechnicalTeam(data);
  };

  useEffect(() => {
    getTechnicalTeam();
  }, []);

  return (
    <section className={`team-three ${className}`}>
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>{title}</h2>
          </div>
        )}
        <Row>
          {technicalTeam.map(({ attributes }) => {
            console.log();
            return (
              <Col md={6} lg={6} key={attributes.id}>
                <div className="team-card-three">
                  <div className="team-card-three__inner">
                    <div className="team-card-three__image">
                      <Image
                        src={`https://admin.clubdefutbolgandia.com${attributes.foto.data.attributes.url}`}
                        alt="HOLA"
                      />
                    </div>
                    <div className="team-card-three__content">
                      <h5 className="team-card-three__name">
                        {attributes.nombre}
                      </h5>
                      <div className="team-card-three__designation">
                        {attributes.puesto}
                      </div>
                    </div>
                    <div className="team-card-three__hover">
                      <h5 className="team-card-three__name">
                        {attributes.nombre}
                      </h5>
                      <div className="team-card-three__designation">
                        {attributes.cargo}
                      </div>
                      <ul className="team-card-three__social clearfix m-0 list-unstyled">
                        <li>
                          <a href={attributes.instagram}>
                            <span className="fab fa-instagram"></span>
                          </a>
                        </li>
                        <li>
                          <a href={attributes.twitter}>
                            <span className="fab fa-twitter"></span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
};

export default TechnicalTeam;
