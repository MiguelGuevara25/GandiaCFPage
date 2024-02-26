import bg from "@/images/main-slider/pruebafotoGania.jpg";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BannerTecnicos = ({ title = "" }) => {
  const [photos, setPhotos] = useState([]);
  const url = useRouter();

  const getPhotoSection = async () => {
    const url = `http://localhost:1337/api/fotos-secciones?populate=*`;
    const res = await axios.get(url);
    const { data } = await res.data;
    setPhotos(data);
  };

  useEffect(() => {
    getPhotoSection();
  }, []);

  return (
    <section className="page-banner">
      {photos
        .filter((e) => e.attributes.selectedPage === url.pathname)
        .map((e) => {
          const urlIMG = `http://localhost:1337${e.attributes.image.data.attributes.url}`;
          return (
            <div
              key={e.id}
              className="image-layer"
              // style={{ backgroundImage: `url(${bg.src})` }}
              style={{ backgroundImage: `url(${urlIMG})` }}
            ></div>
          );
        })}
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1>{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerTecnicos;
