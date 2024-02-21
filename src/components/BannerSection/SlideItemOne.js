import Link from "next/link";
import React, { forwardRef } from "react";
import TextSplit from "../Reuseable/TextSplit";

const SlideItemOne = ({ slide }, ref) => {
  if (!slide) {
    console.error("La propiedad 'slide' no está definida.");
    return null; // O puedes renderizar un mensaje de error aquí
  }

  if (!slide.url) {
    console.error("La propiedad 'url' de 'slide' no está definida.");
    return null; // O puedes renderizar un mensaje de error aquí
  }

  const urlIMG = `https://admin.clubdefutbolgandia.com${slide.url}`;

  return (
    <div ref={ref} style={{ userSelect: "none" }} className="slide-item">
      <div
        className="image-layer"
        style={{
          backgroundImage: `url(${urlIMG})`,
        }}
      ></div>

      {/* <div className="left-top-line"></div> */}
      {/* <div className="right-bottom-curve"></div> */}
      <div className="right-top-curve"></div>
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <div className="sub-title">CF Gandia</div>
              <h1>
                <TextSplit text="El club de la ciutat" />
              </h1>
              {/* <div className="link-box">
                <Link href="/tienda">
                  <a className="theme-btn btn-style-one">
                    <i className="btn-curve"></i>
                    <span className="btn-title">Compra tus entradas</span>
                  </a>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(SlideItemOne);
