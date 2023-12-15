import { funFactSeven } from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import LogoArsenal from "@/images/logoArsenal.png";
import LogoGandia from "@/images/logoGandia.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";

const FunFactSeven = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <section className="funfact-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">
            Estadio
            <br />
            <span>Santiago Bernabéu</span>
          </h2>
        </div>

        <div
          className={`d-flex justify-content-between align-items-center ${
            isMobile ? "flex-column" : "flex-row"
          }`}
        >
          <div style={{ width: "100px" }}>
            <Image src={LogoArsenal} alt="Logo Arsenal" />
          </div>

          <Row className="">
            {funFactSeven.map(({ id, count, text }) => {
              return (
                // <Col key={id}>
                //   <div
                //     className="funfact-seven__item"
                //     style={{
                //       width: `${isMobile ? "67px" : "150px"}`,
                //       height: `${isMobile ? "67px" : "150px"}`,
                //     }}
                //   >
                //     <h4
                //       style={{
                //         margin: "0",
                //         fontSize: `${isMobile ? "20px" : "40px"}`,
                //       }}
                //     >
                //       {count}
                //     </h4>
                //     <p
                //       className="funfact-seven__text"
                //       style={{
                //         letterSpacing: `${isMobile ? "0px" : "0.2em"}`,
                //       }}
                //     >
                //       {text}
                //     </p>
                //   </div>
                // </Col>
                <Col key={id} xs={6} md={6} lg={3}>
                  <div className="funfact-seven__item">
                    <h3 className="funfact-seven__title count-box">
                      <span className="count-text">
                        <VisibilityCountUp count={count} />
                      </span>
                    </h3>
                    <p className="funfact-seven__text">{text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>

          <div style={{ width: "100px" }}>
            <Image src={LogoGandia} alt="Logo Gandia " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactSeven;
