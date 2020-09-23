import React from "react";
import { Row, Col } from "antd";
import "./discountsmall.css";
const importAll = (r) => {
  return r.keys().map(r);
};
const images = importAll(
  require.context("../picture/discount/sm", false, /\.(png|jpe?g|svg)$/)
);
function DiscountSmall() {
  const item = [
    { name: "Smartphones", img: images[0] },
    { name: "Portable equipment", img: images[1] },
    { name: "Sport shoes", img: images[2] },
    { name: "Appliances", img: images[3] },
    { name: "Women's clothing", img: images[4] },
    { name: "Men's clothing", img: images[5] },
    { name: "Tools", img: images[6] },
    { name: "Computer", img: images[7] },
  ];
  return (
    <Row className="discount-sm" justify="space-between" gutter={16}>
      {item.map((data) => {
        return (
          <Col span={3} className="card gutter-row">
            <div className="img-area">
              <img src={data.img} alt="" />
            </div>
            <div className="name-card">{data.name}</div>
          </Col>
        );
      })}
    </Row>
  );
}

export default DiscountSmall;
