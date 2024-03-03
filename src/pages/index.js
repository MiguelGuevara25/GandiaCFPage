import AboutNine from "@/components/AboutSection/AboutNine";
import AboutSection from "@/components/AboutSection/AboutSection";
import BannerOne from "@/components/BannerSection/BannerOne";
import FunFactSeven from "@/components/FunFacts/FunFactSeven";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SearchPopup from "@/components/SearchPopup/SearchPopup";
import SponsorsSection from "@/components/SponsorsSection/SponsorsSection";
import LogoGandia2 from "@/images/logoGandia2.png";
import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import NewsSectionTwo from "@/components/NewsSection/NewsSectionTwo";
import moment from "moment";
import "moment/locale/es";
import { get } from "react-scroll/modules/mixins/scroller";

const PagePrueba = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tablaProxPrev, setTablaProxPrev] = useState([]);
  const [tablaPosicion, setTablaPosicion] = useState([]);
  const [logoLocalProx, setLogoLocalProx] = useState("");
  const [logoVisitaProx, setLogoVisitaProx] = useState("");
  const [horaProx, setHoraProx] = useState("");
  const [partidosPrevios, setPartidosPrevios] = useState([]);
  const [tituloLiga, setTituloLiga] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTablaPosicion = async () => {
    const url =
      "https://admin.clubdefutbolgandia.com/api/tabla-posiciones?sort[0]=puntos:desc&sort[1]=diferenciaGol:desc";
    const res = await axios.get(url);
    const { data } = await res.data;

    setTablaPosicion(data);
  };

  const getSegundoPartidoProx = async () => {
    const url = "https://admin.clubdefutbolgandia.com/api/segundo-proximo-partido?populate=*";
    const { data } = await axios.get(url);
    setHoraProx(data.data.attributes.hora);
    setLogoLocalProx(data.data.attributes.logoLocal.data?.attributes.url);
    setLogoVisitaProx(data.data.attributes.logoVisita.data?.attributes.url);
  };

  const getPartidosPrevios = async () => {
    const url = "https://admin.clubdefutbolgandia.com/api/previos-partidos?populate=*";
    const { data } = await axios.get(url);
    setPartidosPrevios(data.data);
  };

  const getTituloTabla = async () => {
    const url = "https://admin.clubdefutbolgandia.com/api/titulo-tabla-liga";
    const res = await axios.get(url);
    const { data } = res.data;
    setTituloLiga(data.attributes.titulo);
  };

  useEffect(() => {
    getSegundoPartidoProx();
    getPartidosPrevios();
    getTablaPosicion();
    getTituloTabla();
  }, []);

  return (
    <Layout pageTitle="CF Gandía">
      <HeaderOne headerStyle="header-style-two" />
      <MobileMenu />
      <SearchPopup />
      <BannerOne />
      <AboutNine />
      <AboutSection />
      <FunFactSeven />

      <div
        className={`d-flex justify-content-center gap-5 ${
          isMobile ? "flex-column" : ""
        }`}
      >
        <div
          className={`text-black px-5 pb-5`}
          style={{
            backgroundColor: "#0F3B7C",
            borderRadius: "15px",
            width: `${isMobile ? "100%" : "30%"}`,
          }}
        >
          <div>
            <p className="text-center fs-3 text-white" style={{ margin: "0" }}>
              Partidos Previos
            </p>

            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
              }}
              className="py-2"
            >
              {partidosPrevios?.map((e) => {
                const urlIMG1 = `https://admin.clubdefutbolgandia.com${e.attributes?.logoLocal.data?.attributes.url}`;

                return (
                  <div
                    key={e.id}
                    className="d-flex flex-column align-items-center mb-3"
                  >
                    <span
                      style={{
                        fontSize: "25px",
                        marginBottom: "10px",
                        textAlign: "center",
                      }}
                    >
                      Tercera División de España
                    </span>

                    <div
                      className="d-flex align-items-center"
                      style={{ gap: `${isMobile ? "36.15px" : "50px"}` }}
                    >
                      <Image
                        src={urlIMG1}
                        alt="Logo Arsenal"
                        width={`${isMobile ? "60px" : "70px"}`}
                        height={`${isMobile ? "80px" : "90px"}`}
                      />

                      <span className="fs-2">
                        {e.attributes.resultadoLocal} -{" "}
                        {e.attributes.resultadoVisita}
                      </span>

                      <Image
                        src={`https://admin.clubdefutbolgandia.com${e.attributes?.logoVisita.data?.attributes.url}`}
                        alt="Logo Gandia"
                        width={`${isMobile ? "60px" : "70px"}`}
                        height={`${isMobile ? "80px" : "90px"}`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-center fs-3 text-white" style={{ margin: "0" }}>
              Próximo partido
            </p>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                paddingBottom: "10px",
              }}
            >
              <div className="d-flex flex-column align-items-center">
                <span
                  style={{
                    fontSize: "25px",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  Tercera División de España
                </span>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: `${isMobile ? "25px" : "45.35px"}` }}
                >
                  <Image
                    alt="Gandia Logo"
                    src={`https://admin.clubdefutbolgandia.com${logoLocalProx}`}
                    width={`${isMobile ? "60px" : "70px"}`}
                    height={`${isMobile ? "80px" : "90px"}`}
                  />

                  <div className="d-flex flex-column align-items-center">
                    <span className="fs-5 text-capitalize">
                      {moment(horaProx).format("MMM DD")}
                    </span>
                    <span className="fs-5">
                      {moment(horaProx).format("HH:mm")}
                    </span>
                  </div>

                  <Image
                    alt="Gandia Logo"
                    src={`https://admin.clubdefutbolgandia.com${logoVisitaProx}`}
                    width={`${isMobile ? "60px" : "70px"}`}
                    height={`${isMobile ? "80px" : "90px"}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`text-white px-4 py-4 position-relative scrollable-table-container`}
          style={{
            backgroundColor: "#0F3B7C",
            borderRadius: "15px",
            width: `${isMobile ? "100%" : "50%"}`,
            height: "637px",
            overflowY: "scroll",
          }}
        >
          <p className="text-center fs-3" style={{ margin: "0" }}>
            {tituloLiga}
          </p>

          {/* <div
            className="w-25 position-absolute"
            style={{ right: "20px", bottom: "10px" }}
          >
            <Image
              src={LogoGandia2}
              alt="Logo"
              width={`${isMobile ? "100%" : "50%"}`}
              height="637px"
              style={{ opacity: "0.5" }}
            />
          </div> */}

          {tablaPosicion ? (
            <table
              className="scrollable-table-container"
              style={{
                borderCollapse: "separate",
                borderSpacing: `${isMobile ? "32px" : "40px"}`,
                width: "100%",
                fontSize: `${isMobile ? "14px" : "25px"}`,
                position: "relative",
                display: `${isMobile ? "block" : "table"}`,
                overflow: "scroll",
              }}
            >
              <thead>
                <tr style={{ fontWeight: "400", fontSize: "25px" }}>
                  <th>POS</th>
                  <th>EQUIPO</th>
                  <th>J</th>
                  <th>DG</th>
                  <th>PUNTOS</th>
                </tr>
              </thead>

              <tbody>
                {tablaPosicion.map((e, pos) => {
                  return (
                    <tr key={e.id}>
                      <td>{pos + 1}</td>
                      <td>{e.attributes.equipo}</td>
                      <td>{e.attributes.partidosJugados}</td>
                      <td>{e.attributes.diferenciaGol}</td>
                      <td>{e.attributes.puntos}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="h-75 d-flex justify-content-center align-items-center">
              <h2 className="text-white">Cargando puntuaciones ...</h2>
            </div>
          )}
        </div>
      </div>

      {/* <SponsorsSection /> */}
      <NewsSectionTwo />
      <MainFooterTwo />
    </Layout>
  );
};

export default PagePrueba;
