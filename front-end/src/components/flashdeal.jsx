import React from "react";
import { Card } from "antd";
import "./flashdeal.css";
const { Meta } = Card;
function Flashdeal() {
  return (
    <div className="flash-deal-card">
      <Card
        style={{ borderStyle: "none" }}
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1521499892833-773a6c6fd0b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        }
      >
        <Meta title="Europe Street beat" />
        <div className="price-container">
          <p style={{ textAlign: "left" }} className="price">
            $ 27.82
            <span style={{ float: "right" }} className="original-price">
              $ 59.19
            </span>
          </p>
        </div>
        <div className="bar-container">
          <div className="skills" style={{ width: "90%" }} />
        </div>
        <div className="stock-container">
          <p style={{ textAlign: "left" }} className="available">
            Available : 999
            <span style={{ float: "right" }} className="sold">
              Sold : 235
            </span>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default Flashdeal;
