import bg from "@/images/main-slider/pruebafotoGania.jpg";

const BannerTecnicos = ({ title = "" }) => {
  return (
    <section className="page-banner">
      <div
        className="image-layer"
        style={{ backgroundImage: `url(${bg.src})` }}
      ></div>
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
