import context from "@/context/context";
import { loginWrapper } from "@/data/loginWrapper";
import Link from "next/link";
import Router from "next/router";
import { useContext, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const { bg, logo, logoTitle, year, author, inputs, forgotText } = loginWrapper;

const LoginWrapper = ({ register = false, forgot = false }) => {
  const { login } = useContext(context);

  const newInputs = inputs.slice(
    register ? 0 : 1,
    register ? undefined : forgot ? 2 : 3
  );

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
              {newInputs.map(({ name, type, placeholder, required }) => (
                <Col key={name} md={12}>
                  <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                    onChange={handleChange}
                  />
                </Col>
              ))}
            </Row>
            {/* {!register && (
              <p className="text-right">
                {forgot ? (
                  <TextSplit text={forgotText} />
                ) : (
                  <Link href="/forgot-password">Forgot your password?</Link>
                )}
              </p>
            )} */}
            <button type="submit" className="theme-btn btn-style-one">
              <i className="btn-curve"></i>
              <span className="btn-title">
                {register
                  ? "Regístrate Ahora"
                  : forgot
                  ? "Reset Password"
                  : "Ingresar"}
              </span>
            </button>
          </form>
          <p className="signup-link">
            {register ? "¿Ya eres socio?" : "¿Quieres ser socio?"}{" "}
            <Link href={register ? "/login" : "/register"}>
              {register ? "Ingresa" : "Registrate"}
            </Link>
          </p>
          <p className="copyright-text">
            © copyright {year} by {author}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginWrapper;
