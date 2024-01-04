import AboutNine from "@/components/AboutSection/AboutNine";
import AboutSection from "@/components/AboutSection/AboutSection";
import BannerOne from "@/components/BannerSection/BannerOne";
import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderEight from "@/components/Header/HeaderEight";
import HeaderOne from "@/components/Header/HeaderOne";
import HeaderTwo from "@/components/Header/HeaderTwo";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import PortfolioDetailsVideo from "@/components/PortfolioDetails/PortfolioDetailsVideo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SliderEight from "@/components/SliderSection/SliderEight";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import LogoArsenal from "@/images/logoArsenal.png";
import LogoGandia from "@/images/logoGandia.png";
import LogoGandia2 from "@/images/logoGandia2.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import NewsSectionTwo from "@/components/NewsSection/NewsSectionTwo";

const PagePrueba = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tablaPos, setTablaPos] = useState([]);

  const apiPosicion = async () => {
    const url =
      "https://v3.football.api-sports.io/standings?league=444&season=2023";
    const res = await axios.get(url, {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "ff89fd22923c986952308b5e637eab2d",
      },
    });
    const data = await res.data;
    setTablaPos(data.response[0]?.league.standings[0]);
  };

  // const apiPruebaotravez = async () => {
  //   const url =
  //     "https://v3.football.api-sports.io/standings?league=444&season=2023";
  //   const res = await axios.get(url, {
  //     headers: {
  //       "x-rapidapi-host": "v3.football.api-sports.io",
  //       "x-rapidapi-key": "ff89fd22923c986952308b5e637eab2d",
  //     },
  //   });

  //   const data = await res.data;

  //   console.log(data);
  // };

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

  useEffect(() => {
    apiPosicion();
    // apiPruebaotravez();
  }, []);

  const tablaPosicion = tablaPos?.slice(5, 10);

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
              <div className="d-flex flex-column align-items-center mb-3">
                <span style={{ fontSize: "25px", marginBottom: "10px" }}>
                  La Liga
                </span>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "50px" }}
                >
                  <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <span className="fs-2">3-1</span>
                  <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                    <Image src={LogoGandia} alt="Logo Gandia" />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center">
                <span style={{ fontSize: "25px", marginBottom: "10px" }}>
                  Champions League
                </span>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "50px" }}
                >
                  <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <span className="fs-2">3-1</span>
                  <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                </div>
              </div>
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
              <div className="d-flex flex-column align-items-center">
                <span style={{ fontSize: "25px", margin: "10px" }}>
                  La Liga
                </span>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "38px" }}
                >
                  <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <span className="fs-5">Nov 14</span>
                    <span className="fs-5">16:00</span>
                  </div>
                  <div style={{ width: `${isMobile ? "40px" : "60px"}` }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                </div>
              </div>
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
              {tablaPosicion?.map((datos) => {
                return (
                  <tr>
                    <td>{datos.rank}</td>
                    <td>{datos.team.name}</td>
                    <td>{datos.all.played}</td>
                    <td>{datos.all.win}</td>
                    <td>{datos.points}</td>
                  </tr>
                );
              })}
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
