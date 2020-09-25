import React, { useState } from "react";
import "./App.css";
import { Layout, Row, Col } from "antd";

/////// import Components
import Navbar from "./components/navbar";
import Slide from "./components/slide";
import TextCard from "./components/textcard";
import DiscountSmall from "./components/discountsmall";
import DiscountBig from "./components/discountbig";
import TopSelect from "./components/topselect";
import Shop from "./components/shop";

import FlashDeal from "./components/flashdeal";
import RecommendCard from "./components/recommend";
import BadgeCard from "./components/badge";
import TopFooter from "./components/topfooter";
import Payment from "./components/payment";
import BottomFooter from "./components/bottomfooter";
const { Content, Footer } = Layout;
function App() {
  return (
    <Layout className="layout">
      <Navbar />
      <Slide />
      <Content>
        <TextCard />
        <DiscountSmall />
        <DiscountBig />
        <Row gutter={8}>
          <Col span={12}>
            <TopSelect topic="Top selection" />
          </Col>
          <Col span={12}>
            <TopSelect topic="New for you" />
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
        <div>Flash deal</div>
        <Row justify="space-between">
          <Col span={4}>
            <FlashDeal />
          </Col>
          <Col span={4}>
            <FlashDeal />
          </Col>
          <Col span={4}>
            <FlashDeal />
          </Col>
          <Col span={4}>
            <FlashDeal />
          </Col>
          <Col span={4}>
            <FlashDeal />
          </Col>
        </Row>
        <div>Recommended</div>
        <Row justify="space-between">
          <Col span={4}>
            <RecommendCard />
          </Col>
          <Col span={4}>
            <RecommendCard />
          </Col>
          <Col span={4}>
            <RecommendCard />
          </Col>
          <Col span={4}>
            <RecommendCard />
          </Col>
          <Col span={4}>
            <RecommendCard />
          </Col>
        </Row>
        <Row justify={"space-between"}>
          <Col span={4}>
            <BadgeCard />
          </Col>
          <Col span={4}>
            <BadgeCard />
          </Col>
          <Col span={4}>
            <BadgeCard />
          </Col>
          <Col span={4}>
            <BadgeCard />
          </Col>
          <Col span={4}>
            <BadgeCard />
          </Col>
        </Row>
      </Content>
      <Footer>
        <TopFooter />
        <Payment />
        <BottomFooter />
      </Footer>
    </Layout>
  );
}

export default App;
