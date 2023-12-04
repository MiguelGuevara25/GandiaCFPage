import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import PortfolioDetailsVideo from "@/components/PortfolioDetails/PortfolioDetailsVideo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SliderEight from "@/components/SliderSection/SliderEight";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import VideoModal from "@/components/VideoModal/VideoModal";
import VideoOne from "@/components/VideoSection/VideoOne";
import VideoSeven from "@/components/VideoSection/VideoSeven";
import VideoSix from "@/components/VideoSection/VideoSix";
import LogoArsenal from "@/images/logoArsenal.png";
import LogoGandia from "@/images/logoGandia.png";
import Image from "next/image";
import React from "react";
import { Table } from "react-bootstrap";

const PagePrueba = () => {
  return (
    <Layout>
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <SliderEight />
      <FunFactSeven />

      <div className="d-flex gap-5">
        <div
          className="w-50 text-black px-5 pb-5"
          style={{ backgroundColor: "#016FC4", borderRadius: "15px" }}
        >
          <div>
            <p className="text-center fs-3" style={{ margin: "0" }}>
              Partidos Previos
            </p>
            <div style={{ backgroundColor: "#4E99D0", borderRadius: "15px" }}>
              <div className="d-flex flex-column align-items-center">
                <span>La Liga</span>
                <div className="d-flex align-items-center gap-4">
                  <div style={{ width: "50px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <span className="fs-2">3-1</span>
                  <div style={{ width: "50px" }}>
                    <Image src={LogoGandia} alt="Logo Arsenal" />
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column align-items-center">
                <span>Champions League</span>
                <div className="d-flex align-items-center gap-4">
                  <div style={{ width: "50px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <span className="fs-2">3-1</span>
                  <div style={{ width: "50px" }}>
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
                <div className="d-flex align-items-center gap-4">
                  <div style={{ width: "50px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                  <div className="d-flex flex-column align-items-center">
                    <span className="fs-5">Nov 14</span>
                    <span className="fs-5">16:00</span>
                  </div>
                  <div style={{ width: "50px" }}>
                    <Image src={LogoArsenal} alt="Logo Arsenal" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="w-50 text-black px-5"
          style={{ backgroundColor: "#0F3B7C", borderRadius: "15px" }}
        >
          <div>
            <p className="text-center fs-3" style={{ margin: "0" }}>
              La Liga 2025-2026
            </p>

            <Table borderless className="text-white">
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
      </div>

      <SponsorsSection />

      <PortfolioDetailsVideo />
    </Layout>
  );
};

export default PagePrueba;
