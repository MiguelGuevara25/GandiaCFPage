import { Row } from "react-bootstrap";
import SingleTeamThree from "./SingleTeamThree";

const TeamThree = ({ className = "", showTitle = true, jugadores }) => {
  return (
    <section className={`team-three ${className}`}>
      <div className="auto-container">
        {showTitle && (
          <div className="sec-title centered">
            <h2>Porteros</h2>
          </div>
        )}

        <Row>
          {jugadores?.map((jugador) => {
            if (jugador.attributes.seccion === "Porteros") {
              return <SingleTeamThree key={jugador.id} jugador={jugador} />;
            }
          })}
        </Row>
      </div>
    </section>
  );
};

export default TeamThree;
