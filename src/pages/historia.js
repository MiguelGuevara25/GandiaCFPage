import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import HistoryTimeline from "@/components/HistorySection/HistoryTimeline";
import Layout from "@/components/Layout/Layout";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import React from "react";

const PageHistoria = () => {
  return (
    <Layout>
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Historia" />
      <HistoryTimeline />
    </Layout>
  );
};

export default PageHistoria;
