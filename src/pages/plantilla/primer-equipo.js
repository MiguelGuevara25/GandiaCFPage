import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooter from "@/components/MainFooter/MainFooter";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import TeamThree from "@/components/TeamSection/TeamThree";
import DefenseTeam from "@/components/componentsGandia/DefenseTeam";
import MidfielderTeam from "@/components/componentsGandia/MidfielderTeam";
import StrikerTeam from "@/components/componentsGandia/StrikerTeam";
import { useEffect, useState } from "react";
import axios from "axios";

const PagePlantilla = () => {
  const [jugadores, setJugadores] = useState([]);

  const getPlantilla = async () => {
    const url = "http://localhost:1337/api/jugadores?populate=*";
    const res = await axios.get(url);
    const { data } = await res.data;
    setJugadores(data);
  };

  useEffect(() => {
    getPlantilla();
  }, []);

  return (
    <Layout pageTitle="Plantilla">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Plantilla" />
      <TeamThree jugadores={jugadores} />
      <DefenseTeam jugadores={jugadores} />
      <MidfielderTeam jugadores={jugadores} />
      <StrikerTeam jugadores={jugadores} />
      <MainFooterTwo />
    </Layout>
  );
};

export default PagePlantilla;
