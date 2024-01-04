import Link from "next/link";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import VideoModal from "../VideoModal/VideoModal";

const SingleNewsTwo = ({ news = {} }) => {
  const { image, date, comments, title } = news;
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="portfolio-details-video">
        <div className="auto-container">
          <div className="portfolio-details-video__thumbnail">
            <Image
              src={
                require(`@/images/update-1-12-2020/blog/${image}`).default.src
              }
              alt=""
            />
            <div className="vid-link">
              <a onClick={() => setOpen(true)} className="lightbox-image">
                <div className="icon">
                  <span className="flaticon-play-button-1"></span>
                  <i className="ripple"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <VideoModal isOpen={isOpen} setOpen={setOpen} />
    </>
  );
};

export default SingleNewsTwo;
