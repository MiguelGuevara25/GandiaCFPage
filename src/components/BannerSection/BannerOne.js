import { bannerOne } from "@/data/bannerSection";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import SlideItemOne from "./SlideItemOne";
import axios from "axios";

const TinySlider = dynamic(() => import("@/components/TinySlider/TinySlider"), {
  ssr: false,
});

const settings = {
  container: ".my-slider-11",
  loop: true,
  lazyload: true,
  nav: false,
  mouseDrag: true,
  items: 1,
  autoplay: true,
  autoHeight: true,
  controls: true,
  controlsContainer: ".tns-controls",
  gutter: 0,
  autoplayButton: false,
  autoplayButtonOutput: false,
};

const { dayRange, timeRange, socials, banners } = bannerOne;

const BannerOne = () => {
  const listRef = useRef(null);

  // const [imagesSlider, setImagesSlider] = useState([]);

  // const getImagesSliderPrincipal = async () => {
  //   const url = `https://admin.clubdefutbolgandia.com/api/fotos-slider-principal?populate=*`;
  //   const res = await axios.get(url);
  //   const { data } = await res.data;
  //   setImagesSlider(data.attributes.images.data);
  // };

  // useEffect(() => {
  //   getImagesSliderPrincipal();
  // }, []);

  return (
    <section className="banner-section banner-one">
      <div className="left-based-text">
        <div className="base-inner">
          <div className="hours">
            <ul className="clearfix">
              <li>
                <span>{dayRange}</span>
              </li>
              <li>
                <span>{timeRange}</span>
              </li>
            </ul>
          </div>
          {/* <div className="social-links">
            <ul className="clearfix">
              {socials.map(({ id, href, title }) => (
                <li key={id}>
                  <a href={href}>
                    <span>{title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
      <div className="banner-carousel">
        <TinySlider options={settings} ref={listRef}>
          {banners.map((slide) => (
            <SlideItemOne key={slide.id} slide={slide} ref={listRef} />
          ))}

          {/* {imagesSlider.map((e) => (
            <SlideItemOne key={e.id} slide={e.attributes} ref={listRef} />
          ))} */}
        </TinySlider>
        <div className="tns-controls">
          <button className="tns-prev">
            <span className="icon fa fa-angle-left"></span>
          </button>
          <button className="tns-next">
            <span className="icon fa fa-angle-right"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerOne;
