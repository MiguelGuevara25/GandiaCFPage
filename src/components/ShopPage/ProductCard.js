import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const ProductCard = ({ product = {} }) => {
  const { image, title, price, stars } = product;

  return (
    <Col sm={12} md={6} lg={4}>
      <div className="product-card">
        <div className="product-card__image">
          <Image
            src={
              require(`@/images/update-26-01-2021/shops/${image}`).default.src
            }
            alt="Product"
          />
          <div className="product-card__buttons">
            <Link href="/carrito-compras">
              <a className="theme-btn btn-style-one">
                <i className="btn-curve"></i>
                <span className="btn-title">Añadir al Carrito</span>
              </a>
            </Link>
            <Link href="/detalle-producto">
              <a className="theme-btn btn-style-two">
                <i className="btn-curve"></i>
                <span className="btn-title">Ver Detalles</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="product-card__content">
          <h3 className="product-card__title">
            <Link href="/detalle-producto">{title}</Link>
          </h3>
          <p className="product-card__price">€{price}</p>
          <div className="product-card__stars">
            {Array.from(Array(stars)).map((_, i) => (
              <i key={i} className="fa fa-star"></i>
            ))}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
