import PageBanner from "@/components/BannerSection/PageBanner";
import ComingSoonSection from "@/components/ComingSoonSection/ComingSoonSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ProductosTiendaGandia from "@/components/componentsGandia/ProductosTiendaGandia";
import React from "react";

const PageSocio = () => {
  return (
    <Layout pageTitle="Socio">
      <HeaderOne headerStyle="header-style-two" />
      {/* <MobileMenu />
      <SearchPopup />
      <PageBanner title="Tienda" />
      <ProductosTiendaGandia />
      <MainFooterTwo /> */}

      <ComingSoonSection />
    </Layout>
  );
};

export default PageSocio;
