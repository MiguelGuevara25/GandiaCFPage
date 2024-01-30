import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import moment from "moment";
import "moment/locale/es";
import axios from "axios";

const FunFactSeven = () => {
  const [proximoPartido, setProximoPartido] = useState([]);
  const [tiempoRestante, setTiempoRestante] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getProximoPartido = async () => {
    const url =
      "https://v3.football.api-sports.io/fixtures?team=20265&season=2023";
    const res = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "07a555363c588371003efcd5428ab5ab",
      },
    });

    const data = await res.data;
    setProximoPartido(data.response);

    return data;
  };

  const apiPosicion3 = async () => {
    const data = await getProximoPartido();
    // TODO: Fijarse que hacer si no hay datos
    console.log("apiPosicion3", data.response);
    localStorage.setItem("tablaProximoPartido", JSON.stringify(data.response));
  };

  useEffect(() => {
    const datosProximoPartido = localStorage.getItem("tablaProximoPartido");

    console.log("getting datosProximoPartido", tiempoRestante);

    if (!datosProximoPartido) {
      apiPosicion3();
    }

    // if (tiempoRestante.days === 0 && tiempoRestante.hours === 0 && tiempoRestante.minutes === 0 && tiempoRestante.seconds === 0) {
    //   apiPosicion3();
    // }

    if (datosProximoPartido) {
      setProximoPartido(JSON.parse(datosProximoPartido));
    }
  }, []);

  useEffect(() => {
    const intervalIds = proximoPartido
      .filter((partido) => partido.fixture.status.short === "NS")
      .slice(0, 1)
      .map((partido) => {
        return setInterval(() => {
          const now = moment();
          const targetDate = moment(partido.fixture.date);
          const duration = moment.duration(targetDate.diff(now));

          setTiempoRestante({
            days: duration.days() < 0 ? 0 : duration.days(),
            hours: duration.hours() < 0 ? 0 : duration.hours(),
            minutes: duration.minutes() < 0 ? 0 : duration.minutes(),
            seconds: duration.seconds() < 0 ? 0 : duration.seconds(),
          });
        }, 1000);
      });

    return () => {
      intervalIds.forEach((intervalId) => clearInterval(intervalId));
    };
  }, [proximoPartido]);

  const caca = "120%";

  return (
    <div>
      {proximoPartido
        .filter((e) => e.fixture.status.short === "NS")
        .slice(0, 1)
        .map((e, id) => {
          return (
            <section key={id} className="funfact-seven">
              <div className="auto-container">
                <div className="sec-title-seven text-center">
                  <h2 className="sec-title-seven__title">
                    Estadio
                    <br />
                    {/* <span>{estadioProximo}</span> */}
                    <span>{e.fixture.venue.name}</span>
                  </h2>
                </div>
                <div
                  className={`d-flex justify-content-between align-items-
        isMobile ? "flex-column" : "flex-row"
      }`}
                >
                  <div>
                    <Image
                      alt="Gandia Logo"
                      src={e.teams.home.logo}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <Row>
                    <Col xs={6} md={6} lg={3}>
                      <div className="funfact-seven__item">
                        <h3 className="funfact-seven__title count-box">
                          {tiempoRestante.days}
                        </h3>
                        <p className="funfact-seven__text">Días</p>
                      </div>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                      <div className="funfact-seven__item">
                        <h3 className="funfact-seven__title count-box">
                          {tiempoRestante.hours}
                        </h3>
                        <p className="funfact-seven__text">Horas</p>
                      </div>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                      <div className="funfact-seven__item">
                        <h3 className="funfact-seven__title count-box">
                          {tiempoRestante.minutes}
                        </h3>
                        <p className="funfact-seven__text">Minutos</p>
                      </div>
                    </Col>
                    <Col xs={6} md={6} lg={3}>
                      <div className="funfact-seven__item">
                        <h3 className="funfact-seven__title count-box">
                          {tiempoRestante.seconds}
                        </h3>
                        <p className="funfact-seven__text">Segundos</p>
                      </div>
                    </Col>
                  </Row>

                  <div>
                    <Image
                      alt="Logo local"
                      src={e.teams.away.logo}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default FunFactSeven;
