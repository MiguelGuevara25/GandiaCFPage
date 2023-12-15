import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import BannerTecnicos from "@/components/componentsGandia/BannerTecnicos";
import TechnicalTeam from "@/components/componentsGandia/TechnicalTeam";
import React from "react";

const PageTecnicos = () => {
  return (
    <Layout pageTitle="Equipo Técnico">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <BannerTecnicos title="Equipo Técnico" />
      <TechnicalTeam items={2} />
      <MainFooterTwo />
    </Layout>
  );
};

export default PageTecnicos;
