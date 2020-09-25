import React from "react";
import { Card, Rate } from "antd";
import "./recommend.css";
const { Meta } = Card;
function RecommendCard() {
  return (
    <div className="recommend-card">
      <Card
        style={{ borderStyle: "none" }}
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1589455719452-1ac812ae7a0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          />
        }
      >
        <span className="shop-name">fantacy technology</span>
        <Meta title="Europe Street beat" />

        <span className="score">
          4.6
          <Rate
            disabled
            defaultValue={4.6}
            style={{ color: "red", fontSize: "70%" }}
          />
        </span>

        <p className="price">$ 25.50</p>
      </Card>
    </div>
  );
}

export default RecommendCard;
