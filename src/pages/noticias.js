import PageBanner from "@/components/BannerSection/PageBanner";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";

const PageNoticias = () => {
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

export default PageNoticias;
