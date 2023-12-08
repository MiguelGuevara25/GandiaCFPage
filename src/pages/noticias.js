import PageBanner from "@/components/BannerSection/PageBanner";
import NewsSection from "@/components/NewsSection/NewsSection";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import MainFooter from "@/components/MainFooter/MainFooter";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderOne from "@/components/Header/HeaderOne";
import Layout from "@/components/Layout/Layout";

const PageNoticias = () => {
  return (
    <Layout pageTitle="Noticias">
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Noticias" />
      <NewsSection showTitle={false} />
      <MainFooter />
    </Layout>
  );
};

export default PageNoticias;
