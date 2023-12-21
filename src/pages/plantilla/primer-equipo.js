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
  const [datosPorteros, setDatosPorteros] = useState([]);
  const [datosDefensas, setDatosDefensas] = useState([]);
  const [datosMedios, setDatosMedios] = useState([]);
  const [datosDelanteros, setDatosDelanteros] = useState([]);

  const getPlantilla = async () => {
    const url = "http://localhost:1337/api/jugador-posiciones?populate=*";
    const res = await axios.get(url);
    const data = await res.data;
    setDatosPorteros(data.data[0]);
    setDatosDefensas(data.data[1]);
    setDatosMedios(data.data[1]);
    setDatosDelanteros(data.data[2]);
  };

  useEffect(() => {
    getPlantilla();
  }, []);

  return (
    <Layout pageTitle="Plantilla">
      {/* {console.log("Los porteros", datosPorteros)}
      {console.log("Los defensas", datosDefensas)}
      {console.log("Los medios", datosMedios)}
      {console.log("Los delanteros", datosDelanteros)} */}
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <PageBanner title="Plantilla" />
      <TeamThree items={2} datosPorteros={datosPorteros} />
      <DefenseTeam items={5} />
      <MidfielderTeam />
      <StrikerTeam items={6} />
      <MainFooterTwo />
    </Layout>
  );
};

export default PagePlantilla;
