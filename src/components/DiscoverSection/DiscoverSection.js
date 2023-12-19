import discoverSection from "@/data/discoverSection";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import { useEffect, useState } from "react";
import axios from "axios";

// const { title, discovers } = discoverSection;

const DiscoverSection = ({ ShowTitle = true }) => {
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
    <section className="discover-section">
      <div className="auto-container">
        {/* {ShowTitle && (
          <div className="sec-title centered">
            <h2>
              <TextSplit text={title} />
            </h2>
          </div>
        )} */}

        <Row className="clearfix">
          {datosNoticias?.map((datos) => {
            console.log(datos.attributes.url);
            const { titulo, imagen, url } = datos.attributes;
            const urlIMG = `http://localhost:1337${imagen.data?.attributes.url}`;

            return (
              <Col
                key={datos.id}
                lg={6}
                md={12}
                sm={12}
                className="discover-block"
              >
                <div className="inner-box">
                  <div className="image-box">
                    <Image
                      src={urlIMG}
                      alt={`Imagen de la noticias ${titulo}`}
                    />
                  </div>

                  <div className="cap-box animated fadeInUp">
                    <div className="cap-inner">
                      <h5>{titulo}</h5>
                      <div className="more-link">
                        <Link href={`/noticia/${url}`}>
                          <a>
                            <span className="fa fa-angle-right"></span>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        {/* <Row className="clearfix">
          {discovers.map(({ id, image, title }) => (
            <Col key={id} lg={6} md={12} sm={12} className="discover-block">
              <div className="inner-box">
                <div className="image-box">
                  <Image
                    src={require(`@/images/resource/${image}`).default.src}
                    alt=""
                  />
                </div>
                <div className="cap-box animated fadeInUp">
                  <div className="cap-inner">
                    <h5>{title}</h5>
                    <div className="more-link">
                      <Link href="/postSingle">
                        <a>
                          <span className="fa fa-angle-right"></span>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row> */}
      </div>
    </section>
  );
};

export default DiscoverSection;
