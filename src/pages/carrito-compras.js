import PageBanner from "@/components/BannerSection/PageBanner";
import CartPage from "@/components/CartPage/CartPage";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PageCarritoCompras = () => {
  return (
    <Layout pageTitle="Carrito de compras">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Carrito de compras" />
      <CartPage />
      <MainFooter />
    </Layout>
  );
};

export default PageCarritoCompras;
