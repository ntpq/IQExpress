import React from "react";
import { Row, Col } from "antd";
function BottomFooter() {
  return (
    <Row className="bottom-footer" style={{ padding: "3% 0 0 0" }}>
      <Col span={10}>
        <p style={{ fontSize: "0.8rem" }}>
          IQExpress 2020-2021, All rights reserved
        </p>
      </Col>

      <Col span={14}>
        <ul style={{ listStyle: "none", color: "gray", fontSize: "0.8rem" }}>
          <li>Intellectual Property Protection</li>
          <li>Privacy Policy</li>
          <li>Sitemap</li>
          <li>Term of Use</li>
          <li>User infomation</li>
          <li>Legal</li>
          <li>Enquiry</li>
          <li>Guide</li>
        </ul>
      </Col>
    </Row>
  );
}

export default BottomFooter;
