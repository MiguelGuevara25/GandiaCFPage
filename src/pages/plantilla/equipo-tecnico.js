import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import BannerTecnicos from "@/components/componentsGandia/BannerTecnicos";
import React from "react";

const PageTecnicos = () => {
  return (
    <Layout>
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <BannerTecnicos title="Equipo Técnico" />
    </Layout>
  );
};

export default PageTecnicos;
