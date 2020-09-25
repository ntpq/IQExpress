import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./badge.css";
function BadgeCard() {
  return (
    <div className="badge-card">
      <div className="icon">
        <CheckCircleOutlined />
      </div>
      <h2 className="head">Great Value</h2>
      <p className="detail">
        We offer competitive prices on our 100 million plus product range.
      </p>
    </div>
  );
}

export default BadgeCard;
