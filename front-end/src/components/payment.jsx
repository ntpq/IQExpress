import React from "react";
import { Row, Col } from "antd";
import "./payment.css";
function Payment() {
  const logo = [
    "https://1000logos.net/wp-content/uploads/2020/06/Maestro-Logo.png",

    "https://png4u.com/wp-content/uploads/2020/02/visa_logo_png_transparent.png",

    "https://i.pinimg.com/originals/bd/36/e8/bd36e8a669cb0a6987a16de7f556ce57.png",

    "https://i.pinimg.com/originals/27/68/aa/2768aaf89ef8227b8c125177c939d7f9.png",

    "https://pngimg.com/uploads/paypal/paypal_PNG2.png",

    "https://krungthai.com/dist/resources/images/about-ktb/logo-krungthai.png",
  ];
  return (
    <Row className="payment">
      <Col span={15}>
        <Row justify="space-between">
          {logo.map((data) => {
            return (
              <Col span={2} className="logo-container">
                <img src={data} />
              </Col>
            );
          })}
          <Col span={6} style={{ fontSize: "0.8rem", margin: "auto 0" }}>
            +8 payment methods
          </Col>
        </Row>
      </Col>
      <Col spna={9}></Col>
    </Row>
  );
}

export default Payment;
