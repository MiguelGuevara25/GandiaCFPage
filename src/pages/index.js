import AboutNine from "@/components/AboutSection/AboutNine";
import AboutSection from "@/components/AboutSection/AboutSection";
import BannerOne from "@/components/BannerSection/BannerOne";
import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import LogoGandia2 from "@/images/logoGandia2.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsSectionTwo from "@/components/NewsSection/NewsSectionTwo";
import moment from "moment";
import "moment/locale/es";

const PagePrueba = () => {
  const [isMobile, setIsMobile] = useState(false);
  // const [tablaPos, setTablaPos] = useState([]);
  const [partidosPrevios, setPartidosPrevios] = useState([]);
  const [segundoProximoPartido, setSegundoProximoPartido] = useState([]);
  const [otraPrueba, setOtraPrueba] = useState([]);

  const getPartidosPrevios = async () => {
    const url = "http://localhost:1337/api/partidos-previos?populate=*";
    const res = await axios.get(url);
    const { data } = res.data;
    setPartidosPrevios(data);
  };

  const getSegundoProximoPartido = async () => {
    const url = "http://localhost:1337/api/segundo-proximo-partidos?populate=*";
    const res = await axios.get(url);
    const { data } = res.data;
    setSegundoProximoPartido(data);
  };

  useEffect(() => {
    getPartidosPrevios();
    getSegundoProximoPartido();
  }, []);

  const obtenerDatosDesdeCache = () => {
    try {
      const datosEnCache = localStorage.getItem("datos");
      return datosEnCache ? JSON.parse(datosEnCache) : null;
    } catch (error) {
      console.error(
        "Error al parsear datos desde el almacenamiento local",
        error
      );
      return null;
    }
  };

  const apiPosicion = async () => {
    const url =
      "https://v1.baseball.api-sports.io/standings?league=1&season=2020";
    const res = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v1.baseball.api-sports.io",
        "x-rapidapi-key": "ff89fd22923c986952308b5e637eab2d",
      },
    });
    const data = await res.data;
    setOtraPrueba(data.response[0]);
    localStorage.setItem("datos", JSON.stringify(data.response[0]));
    // setTablaPos(data.response[0]?.league.standings[0]);
  };

  useEffect(() => {
    const datosEnCache = obtenerDatosDesdeCache();

    if (datosEnCache) {
      setOtraPrueba(datosEnCache);
    } else {
      apiPosicion();
    }

    const intervalo = setInterval(() => {
      apiPosicion();
    }, 900000); // 15 minutos

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   apiPosicion();
  // }, []);

  // const tablaPosicion = tablaPos?.slice(5, 10);

  return (
    <Layout pageTitle="CF Gandía">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <BannerOne />
      <AboutNine />
      <AboutSection />
      <FunFactSeven />

      <div
        className={`d-flex justify-content-center gap-5 ${
          isMobile ? "flex-column" : ""
        }`}
      >
        <div
          className={`text-black px-5 pb-5`}
          style={{
            backgroundColor: "#0F3B7C",
            borderRadius: "15px",
            width: `${isMobile ? "100%" : "30%"}`,
          }}
        >
          <div>
            <p className="text-center fs-3 text-white" style={{ margin: "0" }}>
              Partidos Previos
            </p>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
              }}
              className="py-2"
            >
              {partidosPrevios.map((datos) => {
                return (
                  <div
                    key={datos.id}
                    className="d-flex flex-column align-items-center mb-3"
                  >
                    <span style={{ fontSize: "25px", marginBottom: "10px" }}>
                      {datos.attributes.torneo}
                    </span>
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "50px" }}
                    >
                      <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                        <img
                          src={`http://localhost:1337${datos.attributes.logoLocal.data.attributes.url}`}
                          alt="Logo Arsenal"
                        />
                      </div>
                      <span className="fs-2">
                        {datos.attributes.resultadoLocal}-
                        {datos.attributes.resultadoVisita}
                      </span>
                      <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                        <img
                          src={`http://localhost:1337${datos.attributes.logoVisita.data.attributes.url}`}
                          alt="Logo Gandia"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-center fs-3 text-white" style={{ margin: "0" }}>
              Próximo partido
            </p>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                paddingBottom: "10px",
              }}
            >
              {segundoProximoPartido.map((datos) => {
                const fechaOriginal = datos.attributes.fechaPartido;
                const horaOriginal = datos.attributes.fechaPartido;
                const fechaFormateada = moment(fechaOriginal).format("MMM DD");
                const horaFormateada = moment(horaOriginal).format("HH:mm");

                return (
                  <div
                    key={datos.id}
                    className="d-flex flex-column align-items-center"
                  >
                    <span style={{ fontSize: "25px", margin: "10px" }}>
                      {datos.attributes.torneo}
                    </span>
                    <div
                      className="d-flex align-items-center"
                      style={{ gap: "38px" }}
                    >
                      <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                        <img
                          src={`http://localhost:1337${datos.attributes.logoLocal.data.attributes.url}`}
                          alt="Logo Arsenal"
                        />
                      </div>
                      <div className="d-flex flex-column align-items-center">
                        <span className="fs-5 text-capitalize">
                          {fechaFormateada}
                        </span>
                        <span className="fs-5">{horaFormateada}</span>
                      </div>
                      <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                        <img
                          src={`http://localhost:1337${datos.attributes.logoVisita.data.attributes.url}`}
                          alt="Logo Arsenal"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className={`text-white px-4 py-4 position-relative`}
          style={{
            backgroundColor: "#0F3B7C",
            borderRadius: "15px",
            width: `${isMobile ? "100%" : "50%"}`,
          }}
        >
          <p className="text-center fs-3" style={{ margin: "0" }}>
            La Liga 2025-2026
          </p>

          <div
            className="w-25 position-absolute"
            style={{ right: "20px", bottom: "10px" }}
          >
            <Image src={LogoGandia2} style={{ opacity: "0.5" }} />
          </div>

          <table
            className="scrollable-table-container"
            style={{
              borderCollapse: "separate",
              borderSpacing: `${isMobile ? "32px" : "40px"}`,
              width: "100%",
              fontSize: `${isMobile ? "14px" : "25px"}`,
              position: "relative",
              display: `${isMobile ? "block" : "table"}`,
              overflowX: "scroll",
            }}
          >
            <thead>
              <tr style={{ fontWeight: "400", fontSize: "20px" }}>
                <th>Pos</th>
                <th>Equipo</th>
                <th>J</th>
                <th>G</th>
                <th>Puntos</th>
              </tr>
            </thead>

            <tbody>
              {otraPrueba?.slice(5, 10).map((e, id) => {
                return (
                  <tr key={id}>
                    <td>{e.position}</td>
                    <td>{e.team.name}</td>
                    <td>{e.games.played}</td>
                    <td>{e.games.win.total}</td>
                    <td>{e.points.for}</td>
                  </tr>
                );
              })}

              {/* {tablaPosicion?.map((datos) => {
                return (
                  <tr>
                    <td>{datos.rank}</td>
                    <td>{datos.team.name}</td>
                    <td>{datos.all.played}</td>
                    <td>{datos.all.win}</td>
                    <td>{datos.points}</td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>

      <SponsorsSection />

      {/* <PortfolioDetailsVideo /> */}
      <NewsSectionTwo />
      {/* <MainFooter /> */}
      <MainFooterTwo />
    </Layout>
  );
};

export default PagePrueba;
