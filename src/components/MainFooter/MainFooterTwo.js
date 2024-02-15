import { mainFooter } from "@/data/mainFooter";
import Link from "next/link";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const {
  about,
  year,
  author,
  logo,
  socials,
  links,
  address,
  phone,
  email,
  newses,
} = mainFooter;

const MainFooterTwo = () => {
  return (
    <footer className="main-footer__three">
      <div className="auto-container">
        <Row>
          <Col md={6} lg={4}>
            <div className="footer-widget">
              <h3>CF Gandía</h3>
              <p>#ElClubDeLaCiutat</p>
              <Link href="/socio">
                <a className="theme-btn btn-style-three">Conviérte en socio</a>
              </Link>
            </div>
          </Col>
          <Col md={6} lg={4}>
            <div className="footer-widget">
              <h3>Explorar</h3>
              <ul className="list-unstyled footer-widget__links">
                {links.map(({ id, href, title }) => (
                  <li key={id}>
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          {/* <Col md={6} lg={3}>
            <div className="footer-widget">
              <h3>News</h3>
              <ul className="post-list">
                {newses.map(({ id, title, image, date }) => (
                  <li key={id}>
                    <Image
                      src={
                        require(`@/images/update-1-12-2020/resources/${image}`)
                          .default.src
                      }
                      width={68}
                      height={70}
                      alt=""
                    />
                    <div className="content">
                      <p>{date}</p>
                      <h4>
                        <Link href="/blog-single">{title}</Link>
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Col> */}
          <Col md={6} lg={4}>
            <div className="footer-widget">
              <h3>Contacto</h3>
              <ul className="list-unstyled contact-list">
                <li>
                  <span className="icon flaticon-call"></span>
                  <a href={`tel:${phone.split(" ").join("")}`}>{phone}</a>
                </li>

                <li>
                  <span className="icon flaticon-email-2"></span>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>

                <li className="address">
                  <span className="icon flaticon-pin-1"></span>
                  <TextSplit text={address} />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
      <div className="bottom-footer">
        <div className="auto-container">
          <div className="left-content">
            <Link href="/index-main">
              <a>
                <Image src={logo.src} width={70} height={34} alt="" />
              </a>
            </Link>
            <p>
              © copyright {year} by {author}
            </p>
          </div>
          <ul className="list-unstyled social-links">
            {socials.map(({ id, icon, href }) => (
              <li key={id}>
                <a href={href}>
                  <span className={icon}></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default MainFooterTwo;
