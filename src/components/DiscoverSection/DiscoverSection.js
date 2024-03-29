import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const DiscoverSection = ({ ShowTitle = true }) => {
  const [datosNoticias, setDatosNoticias] = useState([]);
  const { pathname } = useRouter();

  const getNoticias = async () => {
    let url;

    if (pathname === "/noticias/femenino") {
      url =
        "https://admin.clubdefutbolgandia.com/api/noticias-femeninos?populate=*";
    } else if (pathname === "/noticias/academia") {
      url =
        "https://admin.clubdefutbolgandia.com/api/noticias-academias?populate=*";
    } else {
      url =
        "https://admin.clubdefutbolgandia.com/api/noticias?populate=*";
    }

    const res = await axios.get(url);
    const data = await res.data;
    setDatosNoticias(data.data.reverse());
  };

  useEffect(() => {
    getNoticias();
  }, []);

  const linkNoticias = (url) => {
    if (pathname === "/noticias/femenino") {
      return `/noticia-femenino/${url}`;
    } else if (pathname === "/noticias/academia") {
      return `/noticia-academia/${url}`;
    } else {
      return `/noticia/${url}`;
    }
  };

  return (
    <section className="discover-section">
      <div className="auto-container">
        <Row className="clearfix">
          {datosNoticias?.map((datos) => {
            const { titulo, imagen, url } = datos.attributes;
            const urlIMG = `https://admin.clubdefutbolgandia.com${imagen.data?.attributes.url}`;

            return (
              <Col
                key={datos.id}
                lg={6}
                md={12}
                sm={12}
                className="discover-block"
              >
                <div className="inner-box">
                  <div
                    className="image-box"
                    style={{
                      height: "360px",
                      width: "540px",
                      borderRadius: "10px",
                    }}
                  >
                    <Image
                      src={urlIMG}
                      alt={`Imagen de la noticias ${titulo}`}
                    />
                  </div>

                  <div className="cap-box animated fadeInUp">
                    <div className="cap-inner">
                      <h5>{titulo}</h5>
                      <div className="more-link">
                        <Link href={linkNoticias(url)}>
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
      </div>
    </section>
  );
};

export default DiscoverSection;
