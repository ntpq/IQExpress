import React from "react";
import { Row, Col } from "antd";
import "./shop.css";
function Shop() {
  const shopName = "Fruit Official Shop";
  const detail = "Fresh fruit every day.";
  const logo =
    "https://i.pinimg.com/originals/e6/fa/1b/e6fa1b0838f53bbd83ce7046fba14053.png";
  let item = [];
  item[0] =
    "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80";
  item[1] =
    "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
  item[2] =
    "https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
  item[3] =
    "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
  return (
    <div className="shop">
      <Row>
        <Col span={17} className="container-big">
          <div
            className="picture-big"
            style={{ backgroundImage: `url(${item[0]})` }}
          ></div>
        </Col>
        <Col span={7} className="container-small">
          <div
            className="picture-small"
            style={{ backgroundImage: `url(${item[1]})` }}
          ></div>
          <div
            className="picture-small middle"
            style={{ backgroundImage: `url(${item[2]})` }}
          ></div>
          <div
            className="picture-small"
            style={{ backgroundImage: `url(${item[3]})` }}
          ></div>
        </Col>
      </Row>
      <Row className="shop-bottom">
        <Col span={3} className="container-logo">
          <div
            className="shop-logo"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </Col>
        <Col span={18} className="container-name-shop">
          <div className="shop-name">{shopName}</div>
          <div className="detail">{detail}</div>
        </Col>
        <Col span={3} className="store">
          To the store
        </Col>
      </Row>
    </div>
  );
}

export default Shop;
