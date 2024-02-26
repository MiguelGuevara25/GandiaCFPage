import { aboutNine } from "@/data/aboutSection";
import React, { Fragment } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const { image, icon, title, titleHighlight, text, lists } = aboutNine;

const AboutNine = () => {
  const [datosNoticias, setDatosNoticias] = useState([]);

  const getNoticias = async () => {
    const url = "http://localhost:1337/api/noticias?populate=*";
    const res = await axios.get(url);
    const data = await res.data;
    setDatosNoticias(data.data);
  };

  useEffect(() => {
    getNoticias();
  }, []);

  return (
    <section className="about-nine">
      {datosNoticias.map((e) => {
        return (
          <div key={e.id} className="auto-container">
            {e.attributes.destacada && (
              <Row>
                <Col lg={6} className="animated fadeInLeft">
                  <div className="about-nine__image">
                    <Image
                      src={`http://localhost:1337${e.attributes.imagen.data.attributes.url}`}
                      alt="Awesome Image"
                      width={650}
                    />
                  </div>
                </Col>

                <Col lg={6}>
                  <div className="about-nine__content">
                    {/* <div className="about-nine__icon">
                <i className={icon}></i>
              </div> */}
                    <h3 className="about-nine__title">
                      {e.attributes.titulo.split(" ").map((t, i) => (
                        <Fragment key={i}>
                          {t === titleHighlight ? <span>{t}</span> : t}{" "}
                        </Fragment>
                      ))}
                    </h3>
                    {/* <p className="about-nine__summery">{text}</p> */}
                    <ul className="list-unstyled about-nine__list">
                      {/* {lists.map((text, i) => (
                        <li key={i}>
                          <i className="flaticon-check"></i>
                          {text}
                        </li>
                      ))} */}
                      <li className="descriptionEmergencies">
                        {e.attributes.descripcion}
                      </li>
                    </ul>

                    <Link href={`/noticia/${e.attributes.url}`}>
                      <a className="about-nine__btn thm-btn__seven">
                        Seguir Leyendo
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default AboutNine;
