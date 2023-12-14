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
import Image from "next/image";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const PagePrueba = () => {
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
    <Layout pageTitle="CF Gandía">
      <HeaderOne headerStyle="header-style-two" />
      {/* <HeaderEight /> */}
      {/* <HeaderTwo headerStyle="mainmenu-seven" header={7} /> */}
      <MobileMenu />
      <SearchPopup />
      <BannerOne />
      <AboutSection />
      {/* <SliderEight /> */}
      <FunFactSeven />

      {/* <div
        className={`d-flex gap-5 ${isMobile ? "flex-column" : ""}`}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div
          className={`text-white px-5 pb-5`}
          style={{
            backgroundColor: "#016FC4",
            borderRadius: "15px",
            width: `${isMobile ? "100%" : "30%"}`,
          }}
        >
          <div>
            <p className="text-center fs-3" style={{ margin: "0" }}>
              Partidos Previos
            </p>

            <div
              style={{
                backgroundColor: "#4E99D0",
                borderRadius: "15px",
                // height: "250px",
              }}
              className="py-4"
            >
              <div className="d-flex flex-column align-items-center">
                <span>La Liga</span>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "50px" }}
                >
                  <div style={{ width: "40px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <span className="fs-2">3-1</span>
                  <div style={{ width: "50px" }}>
                    <Image src={LogoGandia} alt="Logo Gandia" />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center">
                <span>Champions League</span>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "50px" }}
                >
                  <div style={{ width: "40px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <span className="fs-2">3-1</span>
                  <div style={{ width: "40px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-center fs-3" style={{ margin: "0" }}>
              Próximo partido
            </p>
            <div style={{ backgroundColor: "#4E99D0", borderRadius: "15px" }}>
              <div className="d-flex flex-column align-items-center">
                <span>La Liga</span>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "50px" }}
                >
                  <div style={{ width: "40px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <span className="fs-5">Nov 14</span>
                    <span className="fs-5">16:00</span>
                  </div>
                  <div style={{ width: "40px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-white px-5 pb-5`}
          style={{
            backgroundColor: "#0F3B7C",
            borderRadius: "15px",
            width: `${isMobile ? "100%" : "70%"}`,
          }}
        >
          <p className="text-center fs-3" style={{ margin: "0" }}>
            La Liga 2025-2026
          </p>

          <table
            className="table table-borderless"
            // style={{
            //   borderCollapse: "collapse",
            //   width: "100%",
            //   verticalAlign: "top",
            // }}
          >
            <thead>
              <tr style={{ fontSize: "13px", fontWeight: "400" }}>
                <th>Posición</th>
                <th>Equipo</th>
                <th>Puntos</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>CF Gandia</td>
                <td>34</td>
              </tr>

              <tr>
                <td>2</td>
                <td>FC Barcelona</td>
                <td>30</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Real Madrid</td>
                <td>28</td>
              </tr>

              <tr>
                <td>4</td>
                <td>Atletico Madrid</td>
                <td>26</td>
              </tr>

              <tr>
                <td>5</td>
                <td>Sevilla</td>
                <td>20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}

      <SponsorsSection />

      <PortfolioDetailsVideo />
      {/* <MainFooter /> */}
      <MainFooterTwo />
    </Layout>
  );
};

export default PagePrueba;
