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
  const [tablaProxPrev, setTablaProxPrev] = useState([]);
  const [tablaPosicion, setTablaPosicion] = useState([]);

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

  const apiPosicion = async () => {
    const url =
      "https://v3.football.api-sports.io/standings?league=444&season=2023";
    const res = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "07a555363c588371003efcd5428ab5ab",
      },
    });

    const data = await res.data;
    setTablaPosicion(data.response[0].league.standings[0]);
    localStorage.setItem(
      "tablaPosicion",
      JSON.stringify(data.response[0].league.standings[0])
    );
  };

  const apiPosicion2 = async () => {
    const url =
      "https://v3.football.api-sports.io/fixtures?team=20265&season=2023";
    const res = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "07a555363c588371003efcd5428ab5ab",
      },
    });

    const data = await res.data;
    setTablaProxPrev(data.response);
    localStorage.setItem("tablaProxPrev", JSON.stringify(data.response));
  };

  useEffect(() => {
    const datosTablaPosicion = localStorage.getItem("tablaPosicion");
    const datosTablaProxPrev = localStorage.getItem("tablaProxPrev");

    if (datosTablaPosicion) {
      setTablaPosicion(JSON.parse(datosTablaPosicion));
    } else {
      apiPosicion();
    }

    if (datosTablaProxPrev) {
      setTablaProxPrev(JSON.parse(datosTablaProxPrev));
    } else {
      apiPosicion2();
    }

    const intervalo = setInterval(() => {
      apiPosicion();
      apiPosicion2();
    }, 7200000);
    return () => clearInterval(intervalo);
  }, []);

  const elementosConNSoTBD = tablaProxPrev?.filter(
    (e) => e.fixture.status.short === "NS" || e.fixture.status.short === "TBD"
  );

  const segundoElementoConNSoTBD =
    elementosConNSoTBD && elementosConNSoTBD.length > 1
      ? elementosConNSoTBD[1]
      : null;

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
              {
                tablaProxPrev
                  ?.filter((e) => e.fixture.status.short === "FT") // Filtra los elementos que cumplen con la condición
                  .slice(-2)
                  .map((e) => {
                    return (
                      <div
                        key={e.fixture.id}
                        className="d-flex flex-column align-items-center mb-3"
                      >
                        <span
                          style={{ fontSize: "25px", marginBottom: "10px" }}
                        >
                          {e.league.name}
                        </span>
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: "50px" }}
                        >
                          <div
                            style={{ width: `${isMobile ? "40px" : "60px"}` }}
                          >
                            <img
                              src={e.teams.home.logo}
                              alt="Logo Arsenal"
                              style={{ width: "100%" }}
                            />
                          </div>
                          <span className="fs-2">
                            {e.goals.home} - {e.goals.away}
                          </span>
                          <div
                            style={{ width: `${isMobile ? "40px" : "60px"}` }}
                          >
                            <img
                              src={e.teams.away.logo}
                              alt="Logo Gandia"
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  }) // Obtiene los últimos dos elementos después de aplicar el filtro
              }
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
              {segundoElementoConNSoTBD && (
                <div
                  key={segundoElementoConNSoTBD.fixture.id}
                  className="d-flex flex-column align-items-center"
                >
                  <span style={{ fontSize: "25px", margin: "10px" }}>
                    {segundoElementoConNSoTBD.league.name}
                  </span>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "38px" }}
                  >
                    <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                      <img
                        src={segundoElementoConNSoTBD.teams.home.logo}
                        alt={`Logo ${segundoElementoConNSoTBD.teams.home.name}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                      <span className="fs-5 text-capitalize">
                        {moment(segundoElementoConNSoTBD.fixture.date).format(
                          "MMM DD"
                        )}
                      </span>
                      <span className="fs-5">
                        {moment(segundoElementoConNSoTBD.fixture.date).format(
                          "HH:mm"
                        )}
                      </span>
                    </div>
                    <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                      <img
                        src={segundoElementoConNSoTBD.teams.away.logo}
                        alt={`Logo ${segundoElementoConNSoTBD.teams.away.name}`}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              )}
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
              {tablaPosicion?.slice(5, 10).map((e, id) => {
                return (
                  <tr key={id}>
                    <td>{e.rank}</td>
                    <td>{e.team.name}</td>
                    <td>{e.all.played}</td>
                    <td>{e.all.win}</td>
                    <td>{e.points}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <SponsorsSection />
      <NewsSectionTwo />
      <MainFooterTwo />
    </Layout>
  );
};

export default PagePrueba;
