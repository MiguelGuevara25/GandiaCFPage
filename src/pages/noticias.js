import PageBanner from "@/components/BannerSection/PageBanner";
import NewsSection from "@/components/NewsSection/NewsSection";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";
import DiscoverSection from "@/components/DiscoverSection/DiscoverSection";

const PageNoticias = () => {
  return (
    <Layout pageTitle="Noticias">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Noticias" />
      {/* <NewsSection showTitle={false} /> */}
      <DiscoverSection />
      <MainFooter />
    </Layout>
  );
};

export default PageNoticias;
