import PageBanner from "@/components/BannerSection/PageBanner";
import HeaderOne from "@/components/Header/HeaderOne";
import MobileMenu from "@/components/Header/MobileMenu";
import Layout from "@/components/Layout/Layout";
import MainFooterTwo from "@/components/MainFooter/MainFooterTwo";
import SidebarPageContainer from "@/components/SidebarPageContainer/SidebarPageContainer";
import BlogDetails from "@/components/SidebarPageContainerTwo/BlogDetails";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const Post = () => {
  const [datosBlog, setDatosBlog] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getBlog = async (urlData) => {
    const url = `http://localhost:1337/api/noticias?filters[url]=${urlData}&populate=*`;

    const res = await axios.get(url);
    const data = await res.data;
    setDatosBlog(data.data);
  };

  useEffect(() => {
    getBlog(id);
  }, [id]);

  return (
    <Layout
      pageTitle={`${
        datosBlog[0] ? datosBlog[0]?.attributes.titulo : "Noticias"
      }`}
    >
      <HeaderOne />
      <MobileMenu />
      <PageBanner
        title={`${datosBlog[0] ? datosBlog[0]?.attributes.titulo : "Noticias"}`}
      />
      {datosBlog.map((datos) => {
        return (
          <div key={datos.id} className="sidebar-page-container">
            <div className="auto-container">
              <Row className="clearfix">
                <Col className="content-side">
                  <BlogDetails datosBlog={datosBlog} />
                </Col>
              </Row>
            </div>
          </div>
        );
      })}
      <MainFooterTwo />
    </Layout>
  );
};

export default Post;
