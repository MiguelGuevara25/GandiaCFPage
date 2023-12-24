import PageBanner from "@/components/BannerSection/PageBanner";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PageNoticiasAcademia = () => {
  return (
    <Layout pageTitle="Noticias">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Noticias" />
      <DiscoverSection />
      <MainFooterTwo />
    </Layout>
  );
};

export default PageNoticiasAcademia;
