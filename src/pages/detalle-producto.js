import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import ProductDescription from "@/components/ProductDetails/ProductDescription";
import ProductDetailsPage from "@/components/ProductDetails/ProductDetailsPage";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PageDetalleProducto = () => {
  return (
    <Layout pageTitle="Detalle de producto">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Detalle" />
      <ProductDetailsPage />
      <ProductDescription />
      <MainFooterTwo />
    </Layout>
  );
};

export default PageDetalleProducto;
