import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";
import LogoGandiaLargo from "@/images/logoGandiaLargo.png";
import LogoFrase from "@/images/logoFrase.png";

const {
  year,
  author,
  logo,
  text,
  socials,
  links,
  address,
  phone,
  email,
  textBottom,
} = mainFooter;

const MainFooter = ({ normalPadding = true }) => {
  return (
    <footer className={`main-footer${normalPadding ? " normal-padding" : ""}`}>
      <div className="auto-container">
        <div className="widgets-section">
          <Row className="clearfix">
            <Col xl={3} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget info-widget">
                <div className="widget-content">
                  <h6>Contact</h6>
                  <ul className="contact-info">
                    <li className="address">
                      <span className="icon flaticon-pin-1"></span>{" "}
                      <TextSplit text={address} />
                    </li>
                    <li>
                      <span className="icon flaticon-call"></span>
                      <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                    </li>
                    <li>
                      <span className="icon flaticon-email-2"></span>
                      <a href={`mailto:${email}`}>{email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <Image id="fLogo" src={LogoGandiaLargo.src} alt="" />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={6} md={6} sm={12} className="column">
              <div className="footer-widget logo-widget">
                <div className="widget-content">
                  <div className="logo">
                    <Link href="/">
                      <a>
                        <Image id="fLogo" src={LogoFrase.src} alt="" width={200} />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={3} lg={6} md={6} sm={12} className="column">
              <ul className="social-links clearfix">
                {socials.map(({ id, icon, href }) => (
                  <li key={id}>
                    <a href={href}>
                      <span className={icon}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="inner clearfix">
            <div className="copyright">
              &copy; {author} {year} All Rights Reserved Terms of Use Privacy
              Policy
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
