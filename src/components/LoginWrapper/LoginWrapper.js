import context from "@/context/context";
import { loginWrapper } from "@/data/loginWrapper";
import Link from "next/link";
import Router from "next/router";
import { useContext, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const { bg, logo, logoTitle, year, author, forgotText } = loginWrapper;

const LoginWrapper = () => {
  const { login } = useContext(context);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(user.email, user.password);
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login-wrapper">
      <div
        className="login-bg"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
      <div className="login-content">
        <div className="login-content__inner">
          <div className="logo-box">
            <div className="logo text-center">
              <Link href="/">
                <a title={logoTitle}>
                  <Image
                    src={logo.src}
                    width={134}
                    id="dLogo"
                    className="main-logo"
                    alt={logoTitle}
                    title={logoTitle}
                  />
                </a>
              </Link>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={12}>
                <input
                  name="email"
                  type="text"
                  placeholder="Correo Electrónico *"
                  required
                  onChange={handleChange}
                />
              </Col>

              <Col md={12}>
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña *"
                  required
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <button type="submit" className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">Ingresar</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginWrapper;
