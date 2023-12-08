import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import BannerTecnicos from "@/components/componentsGandia/BannerTecnicos";
import TechnicalTeam from "@/components/componentsGandia/TechnicalTeam";
import React from "react";

const PageTecnicos = () => {
  return (
    <Layout pageTitle="Equipo Técnico">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <BannerTecnicos title="Equipo Técnico" />
      <TechnicalTeam items={2} />
    </Layout>
  );
};

export default PageTecnicos;
