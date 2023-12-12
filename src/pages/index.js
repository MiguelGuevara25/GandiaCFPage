import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
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
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <SliderEight />
      <FunFactSeven />

      <div
        className={`d-flex gap-5 ${isMobile ? "flex-column" : ""}`}
        style={{ width: "90%", margin: "0 auto" }}
      >
        <div
          className={`${isMobile ? "w-100" : "w-50"} text-white px-5 pb-5`}
          style={{ backgroundColor: "#016FC4", borderRadius: "15px" }}
        >
          <div>
            <p className="text-center fs-3" style={{ margin: "0" }}>
              Partidos Previos
            </p>

            {/* Cambio de Tamaño de fondo y separación de escudos */}
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
          className={`${isMobile ? "w-100" : "w-50"} text-white px-5 pb-5`}
          style={{ backgroundColor: "#0F3B7C", borderRadius: "15px" }}
        >
          <p className="text-center fs-3" style={{ margin: "0" }}>
            La Liga 2025-2026
          </p>

          <Table borderless>
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
          </Table>
        </div>
      </div>

      <SponsorsSection />

      <PortfolioDetailsVideo />
      <MainFooter />
    </Layout>
  );
};

export default PagePrueba;
