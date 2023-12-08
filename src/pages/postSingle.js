import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SidebarPageContainerTwo from "@/components/SidebarPageContainerTwo/SidebarPageContainerTwo";
import React from "react";

const PagePostSingle = () => {
  return (
    <Layout pageTitle="Noticia 1">
      <HeaderOne />
      <MobileMenu />
      <PageBanner title="Noticia 1" />
      <SidebarPageContainerTwo isDetails />
      <MainFooter />
    </Layout>
  );
};

export default PagePostSingle;
