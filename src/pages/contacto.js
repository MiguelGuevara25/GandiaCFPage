import PageBanner from "@/components/BannerSection/PageBanner";
import ContactInfoTwo from "@/components/ContactSection/ContactInfoTwo";
import ContactSectionTwo from "@/components/ContactSection/ContactSectionTwo";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import MapBox from "@/components/MapSection/MapBox";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PageContacto = () => {
  return (
    <Layout pageTitle="Contacto">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Contacto" />
      <ContactSectionTwo />
      <ContactInfoTwo />
      <MapBox />
      <MainFooterTwo />
    </Layout>
  );
};

export default PageContacto;
