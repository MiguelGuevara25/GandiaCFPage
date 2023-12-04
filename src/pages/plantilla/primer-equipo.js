import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import TeamThree from "@/components/TeamSection/TeamThree";
import DefenseTeam from "@/components/componentsGandia/DefenseTeam";
import MidfielderTeam from "@/components/componentsGandia/MidfielderTeam";
import StrikerTeam from "@/components/componentsGandia/StrikerTeam";

const PagePlantilla = () => {
  return (
    <Layout>
      <HeaderOne />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Plantilla" />
      <TeamThree items={2} />
      <DefenseTeam items={5} />
      <MidfielderTeam />
      <StrikerTeam items={6} />
      <MainFooter />
    </Layout>
  );
};

export default PagePlantilla;
