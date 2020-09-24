import React, { useState } from "react";
import "./App.css";
import { Layout, Row, Col } from "antd";

/////// import Components
import Navbar from "./components/navbar";
import Slide from "./components/slide";
import Textcard from "./components/textcard";
import DiscountSmall from "./components/discountsmall";
import DiscountBig from "./components/discountbig";
import Topselect from "./components/topselect";
import Shop from "./components/shop";

import Flashdeal from "./components/flashdeal";
const { Content, Footer } = Layout;
function App() {
  return (
    <Layout className="layout">
      <Navbar />
      <Slide />
      <Content>
        <Textcard />
        <DiscountSmall />
        <DiscountBig />
        <Row gutter={8}>
          <Col span={12}>
            <Topselect topic="Top selection" />
          </Col>
          <Col span={12}>
            <Topselect topic="New for you" />
          </Col>
        </Row>
        <p>Shops for you</p>
        <Row>
          <Col span={8}>
            <Shop />
          </Col>
          <Col span={8}>
            <Shop />
          </Col>
          <Col span={8}>
            <Shop />
          </Col>
        </Row>
        <Flashdeal />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
