import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import HistoryTimeline from "@/components/HistorySection/HistoryTimeline";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PageHistoria = () => {
  return (
    <Layout pageTitle="Historia">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Historia" />
      <HistoryTimeline />
      <MainFooterTwo />
    </Layout>
  );
};

export default PageHistoria;
