import teamSection from "@/data/teamSection";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTeamThree from "./SingleTeamThree";

const { title, teams } = teamSection;

const TeamThree = ({
  className = "",
  showTitle = true,
  items = 4,
  datosPorteros,
}) => {
  return (
    <section className={`team-three ${className}`}>
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>{title}</h2>
          </div>
        )}
        <Row>
          {datosPorteros.attributes?.jugadores_primer_equipos.data.map(
            (team) => {
              return <SingleTeamThree key={team.id} team={team} />;
            }
          )}
        </Row>
      </div>
    </section>
  );
};

export default TeamThree;
