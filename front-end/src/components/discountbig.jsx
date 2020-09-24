import React from "react";
import { Row, Col } from "antd";
import "./discountbig.css";
const importAll = (r) => {
  return r.keys().map(r);
};
const images = importAll(
  require.context("../picture/discount/big", false, /\.(png|jpe?g|svg)$/)
);
function DiscountBig() {
  return (
    <Row className="big-discount">
      <Col span={15} className="big-card">
        <Row>
          <Col span={12} className="card-detail">
            <div className="header">
              <h1>Furniture up to -70%</h1>
            </div>

            <div className="detail">
              <p>Grab computer & office items up to 30% off</p>
            </div>
            <div className="link">
              <p>Shop now</p>
            </div>
          </Col>
          <Col span={12} className="card-image">
            <img src={images[0]} />
          </Col>
        </Row>
      </Col>
      <Col span={9}>
        <Row>
          <Col span={24} className="small-card top">
            <Row>
              <Col span={12} className="card-detail">
                <div className="header">
                  <h1>Tank up to -40%</h1>
                </div>

                <div className="link">
                  <p>Shop now</p>
                </div>
              </Col>
              <Col span={12} className="card-image">
                <img src={images[1]} />
              </Col>
            </Row>
          </Col>
          <Col span={24} className="small-card">
            <Row>
              <Col span={12} className="card-detail">
                <div className="header">
                  <h1>Redbull up to -50%</h1>
                </div>
                <div className="link">
                  <p>Shop now</p>
                </div>
              </Col>
              <Col span={12} className="card-image">
                <img src={images[2]} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default DiscountBig;
