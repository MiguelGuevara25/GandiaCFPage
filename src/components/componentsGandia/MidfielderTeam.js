import { midfielderTeam } from "@/data/teamSection";
import React from "react";
import { Col, Row, Image } from "react-bootstrap";

const { title, teams } = midfielderTeam;
const MidfielderTeam = ({ className = "", showTitle = true, items = 4 }) => {
  return (
    <section className={`team-three ${className}`}>
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>{title}</h2>
          </div>
        )}
        <Row>
          {teams
            .slice(0, items)
            .map(({ image, name, designation, socials }) => {
              return (
                <Col md={6} lg={3}>
                  <div className="team-card-three">
                    <div className="team-card-three__inner">
                      <div className="team-card-three__image">
                        <Image
                          src={
                            require(`@/images/resource/${image}`).default.src
                          }
                          alt=""
                        />
                      </div>
                      <div className="team-card-three__content">
                        <h5 className="team-card-three__name">{name}</h5>
                        <div className="team-card-three__designation">
                          {designation}
                        </div>
                      </div>
                      <div className="team-card-three__hover">
                        <h5 className="team-card-three__name">{name}</h5>
                        <div className="team-card-three__designation">
                          {designation}
                        </div>
                        <ul className="team-card-three__social clearfix m-0 list-unstyled">
                          {socials.map(({ id, icon, href }) => (
                            <li key={id}>
                              <a href={href}>
                                <span className={icon}></span>
                              </a>
                            </li>
                          ))}
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

export default MidfielderTeam;
