import React from "react";

const MapBox = () => {
  return (
    <div className="map-box">
      <iframe
        className="map-iframe"
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6203.979065949439!2d-0.173611!3d38.969907!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzjCsDU4JzExLjciTiAwwrAxMCcyNS4wIlc!5e0!3m2!1ses-419!2sus!4v1701739644656!5m2!1ses-419!2sus"
        style={{ border: 0 }}
        aria-hidden={false}
        tabIndex={0}
      ></iframe>
    </div>
  );
};

export default MapBox;
