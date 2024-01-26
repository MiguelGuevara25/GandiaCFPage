import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";

const BlogDetails = ({ datosBlog }) => {
  const formatearFecha = (fecha) => {
    const fechaNueva = new Date(fecha);
    const opciones = {
      year: "numeric",
      month: "long",
      day: "2-digit",
    };

    return fechaNueva.toLocaleDateString("es-ES", opciones);
  };

  const { titulo, descripcion, createdAt, imagen } = datosBlog[0].attributes;
  const urlIMG = `https://admin.clubdefutbolgandia.com${imagen.data?.attributes.url}`;

  return (
    <div className="blog-details">
      <div className="post-details">
        <div className="inner-box">
          <div className="image-box">
            <Image src={urlIMG} />
          </div>

          <div className="lower-box">
            <div className="post-meta">
              <ul className="clearfix">
                <li>
                  <span className="far fa-clock"></span>
                  {formatearFecha(createdAt)}
                </li>

                <li>
                  <span className="far fa-user-circle"></span>
                </li>
              </ul>
            </div>

            <h4>{titulo}</h4>
            <div className="text">
              <p>{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
