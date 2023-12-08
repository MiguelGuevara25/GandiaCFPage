import { blogDetails } from "@/data/sidebarPageContainerTwo";
import Link from "next/link";
import { Col, Image, Row } from "react-bootstrap";

const { imagePrueba, date, admin, title, text1, text2, text3 } = blogDetails;

const BlogDetails = () => {
  return (
    <div className="blog-details">
      <div className="post-details">
        <div className="inner-box">
          {/* <span>Imagen de 770x444</span> */}
          <div
            className="image-box"
            // style={{ width: "770px", height: "400px" }}
          >
            <Link href="/blog-single">
              <a>
                <Image src={imagePrueba.src} alt="" />
              </a>
            </Link>
          </div>

          <div className="lower-box">
            <div className="post-meta">
              <ul className="clearfix">
                <li>
                  <span className="far fa-clock"></span> {date}
                </li>

                <li>
                  <span className="far fa-user-circle"></span> {admin}
                </li>
                {/* <li>
                  <span className="far fa-comments"></span> {comments.length}{" "}
                  Comments
                </li> */}
              </ul>
            </div>
            <h4>{title}</h4>
            <div className="text">
              <p>{text1}</p>
              <p>{text2}</p>
              {text3 && <p>{text3}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
