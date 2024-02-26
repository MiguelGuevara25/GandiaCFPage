import { useState, useEffect } from "react";
import { Col, Row, Image } from "react-bootstrap";
import moment from "moment";
import "moment/locale/es";
import axios from "axios";

const FunFactSeven = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [estadio, setEstadio] = useState("");
  const [logoLocal, setLogoLocal] = useState("");
  const [logoVisita, setLogoVisita] = useState("");
  const [horaPartido, setHoraPartido] = useState("");
  const [tiempoRestante, setTiempoRestante] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getProximoPartido = async () => {
    const url =
      "http://localhost:1337/api/proximo-partido?populate=*";
    const { data } = await axios.get(url);
    setEstadio(data.data.attributes.estadio);
    setLogoLocal(data.data.attributes.logoLocal.data.attributes.url);
    setLogoVisita(data.data.attributes.logoVisita.data.attributes.url);
    setHoraPartido(data.data.attributes.fechaPartido);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getProximoPartido();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const ahora = moment();
      const fechaPartido = moment(horaPartido);

      if (fechaPartido.isAfter(ahora)) {
        const diff = fechaPartido.diff(ahora);
        const duration = moment.duration(diff);
        const days = Math.floor(duration.asDays());
        const hours = duration.hours();
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        setTiempoRestante({ days, hours, minutes, seconds });
      } else {
        setTiempoRestante({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [horaPartido]);

  return (
    <div>
      <section className="funfact-seven">
        <div className="auto-container">
          <div className="sec-title-seven text-center">
            <h2 className="sec-title-seven__title">
              Estadio
              <br />
              <span>{estadio}</span>
            </h2>
          </div>
          <div
            className={`d-flex justify-content-between align-items-center
      ${isMobile ? "flex-column" : "flex-row"}`}
          >
            <Image
              alt="Gandia Logo"
              src={`http://localhost:1337${logoLocal}`}
              width={"110px"}
              height={"135px"}
            />

            <Row className="">
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

            <Image
              alt="Logo local"
              src={`http://localhost:1337${logoVisita}`}
              width={"110px"}
              height={"135px"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunFactSeven;
