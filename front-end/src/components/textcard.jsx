import React from "react";
import { Row, Col } from "antd";
import "./textcard.css";
function Textcard() {
  let item = [];
  item[0] = {
    head: "Join to IQExpress",
    detail:
      "Join to IQExpress and get The New User Coupon which can be used in any store.",
    linkDisplay: "Details",
    url: "",
  };
  item[1] = {
    head: "Invite friends",
    detail:
      "For every friend that successfully placed their first order, you'll get a US$5.00 coupon.",
    linkDisplay: "Details",
    url: "",
  };
  item[2] = {
    head: "Download the app",
    detail: "New to IQExpress? Go to our app to receive a new user coupon.",
    linkDisplay: "Download",
    url: "",
  };

  return (
    <Row>
      {item.map((data, key) => {
        return item.length - 1 !== key ? (
          <Col span={8} className="text-card-col border-line">
            <div className="head">{data.head}</div>
            <div className="detail">{data.detail}</div>
            <div className="link">{data.linkDisplay}</div>
          </Col>
        ) : (
          <Col span={8} className="text-card-col ">
            <div className="head">{data.head}</div>
            <div className="detail">{data.detail}</div>
            <div className="link">{data.linkDisplay}</div>
          </Col>
        );
      })}
    </Row>
  );
}

export default Textcard;
