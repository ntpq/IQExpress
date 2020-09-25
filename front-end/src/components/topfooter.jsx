import React from "react";
import { Row, Col } from "antd";
import "./topfooter.css";
import {
  DownOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
function TopFooter() {
  const header = "Shopping";
  const data = ["Marketing payment", "Delivery option", "Buyer Protection"];
  return (
    <Row className="top-footer">
      <Col span={15}>
        <Row>
          <Col span={6}>
            <divc className="list-header">{header}</divc>
            <ul>
              {data.map((list) => (
                <li className="list-item">{list}</li>
              ))}
            </ul>
          </Col>
          <Col span={6}>
            <divc className="list-header">{header}</divc>
            <ul>
              {data.map((list) => (
                <li className="list-item">{list}</li>
              ))}
            </ul>
          </Col>
          <Col span={6}>
            <divc className="list-header">{header}</divc>
            <ul>
              {data.map((list) => (
                <li className="list-item">{list}</li>
              ))}
            </ul>
          </Col>
          <Col span={6}>
            <div>
              Browse by Category <DownOutlined />
            </div>
            <div>
              IQ Group <DownOutlined />
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={9}>
        <Row>
          <Col span={12}></Col>
          <Col span={12}>
            <div className="lang-container">
              <img
                className="lang-logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/US_flag_large_51_stars.png/800px-US_flag_large_51_stars.png"
              />
              <span>
                English / USD <DownOutlined />
              </span>
            </div>
            <p>Partnerships</p>
            <p>Affiliate program</p>
            <div className="container-social">
              <ul>
                <li>
                  <FacebookOutlined />
                </li>
                <li>
                  <InstagramOutlined />
                </li>
                <li>
                  <YoutubeOutlined />
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default TopFooter;
