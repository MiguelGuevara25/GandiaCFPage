import { shopPage } from "@/data/shopPage";
import "rc-slider/assets/index.css";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../ShopPage/ProductCard";

const { products } = shopPage;

const ProductosTiendaGandia = () => {
  return (
    <div className="auto-container py-5">
      <Col lg={12}>
        <Row>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Row>
      </Col>
    </div>
  );
};

export default ProductosTiendaGandia;
