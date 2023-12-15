import PageBanner from "@/components/BannerSection/PageBanner";
import CartPage from "@/components/CartPage/CartPage";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PageCarritoCompras = () => {
  return (
    <Layout pageTitle="Carrito de compras">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Carrito de compras" />
      <CartPage />
      <MainFooterTwo />
    </Layout>
  );
};

export default PageCarritoCompras;
