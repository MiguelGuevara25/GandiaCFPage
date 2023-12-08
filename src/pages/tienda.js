import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import ProductosTiendaGandia from "@/components/componentsGandia/ProductosTiendaGandia";
import React from "react";

const PageTienda = () => {
  return (
    <Layout pageTitle="Tienda">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Tienda" />
      <ProductosTiendaGandia />
      <MainFooter />
    </Layout>
  );
};

export default PageTienda;
