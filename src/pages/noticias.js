import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import NewsSection from "@/components/NewsSection/NewsSection";
import SearchPopup from "@/components/SearchPopup/SearchPopup";

const PageNoticias = () => {
  return (
    <Layout>
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
