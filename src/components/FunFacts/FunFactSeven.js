import React from "react";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const FunFactSeven = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [estadioProximo, setEstadioProximo] = useState("");
  const [fechaPartido, setFechaPartido] = useState("");
  const [logoLocal, setLogoLocal] = useState("");
  const [logoVisita, setLogoVisita] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getProximoPartido = async () => {
    const url = "http://localhost:1337/api/proximo-partido?populate=*";
    const res = await axios.get(url);
    const { attributes } = await res.data.data;

    setEstadioProximo(attributes.estadio);
    setFechaPartido(attributes.fechaPartido);
    setLogoLocal(
      `http://localhost:1337${attributes.logoLocal.data.attributes.url}`
    );
    setLogoVisita(
      `http://localhost:1337${attributes.logoVisita.data.attributes.url}`
    );
  };

  useEffect(() => {
    getProximoPartido();
  }, []);

  //Hasta aquí

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const targetDate = moment(fechaPartido); // Establece la fecha objetivo

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));

      if (duration.asSeconds() <= 0) {
        // Si la diferencia es negativa o cero, detener la cuenta regresiva
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeRemaining({
          days: duration.days(),
          hours: duration.hours(),
          minutes: duration.minutes(),
          seconds: duration.seconds(),
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <section className="funfact-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
            Estadio
            <br />
            <span>{estadioProximo}</span>
          </h2>
        </div>

        <div
          className={`d-flex justify-content-between align-items-center ${
            isMobile ? "flex-column" : "flex-row"
          }`}
        >
          <div style={{ width: "120px" }}>
            <img src={logoLocal} />
          </div>

          <Row>
            <Col xs={6} md={6} lg={3}>
              <div className="funfact-seven__item">
                <h3 className="funfact-seven__title count-box">
                  {timeRemaining.days}
                </h3>
                <p className="funfact-seven__text">Días</p>
              </div>
            </Col>

            <Col xs={6} md={6} lg={3}>
              <div className="funfact-seven__item">
                <h3 className="funfact-seven__title count-box">
                  {timeRemaining.hours}
                </h3>
                <p className="funfact-seven__text">Horas</p>
              </div>
            </Col>

            <Col xs={6} md={6} lg={3}>
              <div className="funfact-seven__item">
                <h3 className="funfact-seven__title count-box">
                  {timeRemaining.minutes}
                </h3>
                <p className="funfact-seven__text">Minutos</p>
              </div>
            </Col>

            <Col xs={6} md={6} lg={3}>
              <div className="funfact-seven__item">
                <h3 className="funfact-seven__title count-box">
                  {timeRemaining.seconds}
                </h3>
                <p className="funfact-seven__text">Segundos</p>
              </div>
            </Col>
          </Row>

          <div style={{ width: "100px" }}>
            <img src={logoVisita} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSeven;
