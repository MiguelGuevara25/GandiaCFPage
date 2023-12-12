import { funFactSeven } from "@/data/funFacts";
import React from "react";
import { Col, Row } from "react-bootstrap";
import VisibilityCountUp from "../VisibilityCountUp/VisibilityCountUp";
import LogoArsenal from "@/images/logoArsenal.png";
import LogoGandia from "@/images/logoGandia.png";
import Image from "next/image";

const FunFactSeven = () => {
  return (
    <section className="funfact-seven">
      <div className="auto-container">
        <div className="sec-title-seven text-center">
          <h2 className="sec-title-seven__title">Estadio Santiago Bernabéu</h2>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div style={{ width: "100px" }}>
            <Image src={LogoArsenal} alt="Logo Arsenal" />
          </div>

          <Row className="">
            {funFactSeven.map(({ id, count, text }) => {
              return (
                <Col key={id} lg={3} md={6}>
                  <div className="funfact-seven__item">
                    <h4 style={{ margin: "0" }}>{count}</h4>
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
