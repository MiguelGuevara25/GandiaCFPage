import { contactSectionTwo } from "@/data/contactSection";
import React from "react";
import { Col, Row } from "react-bootstrap";

const { title, text, socials } = contactSectionTwo;

const ContactSectionTwo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, name) => (data[name] = value));
    console.log(data);
  };

  return (
    <section className="contact-section contact-two">
      <div className="auto-container">
        <Row>
          <Col lg={4}>
            <div className="contact-two__content">
              <div className="sec-title">
                <h2>Contáctanos</h2>
              </div>
              <p className="contact-two__text">Escribir algo...</p>
              <div className="contact-two__social">
                {socials.map((icon, i) => (
                  <a key={i} href="#" className={icon}></a>
                ))}
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="form-box">
              <div className="default-form">
                <form onSubmit={handleSubmit} id="contact-form">
                  <Row className="clearfix">
                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner">
                        <input
                          type="text"
                          name="username"
                          placeholder="Nombre"
                          required
                        />
                      </div>
                    </Col>

                    <Col lg={6} md={6} sm={12} className="form-group">
                      <div className="field-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </Col>

                    <Col lg={12} md={12} sm={12} className="form-group">
                      <div className="field-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Cargo"
                          required
                        />
                      </div>
                    </Col>

                    <Col lg={12} md={12} sm={12} className="form-group">
                      <div className="field-inner">
                        <textarea
                          name="message"
                          placeholder="Escribe tu mensaje..."
                          required
                        ></textarea>
                      </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className="form-group">
                      <button className="theme-btn btn-style-one">
                        <i className="btn-curve"></i>
                        <span className="btn-title">Send message</span>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactSectionTwo;
