import React, { useState } from "react";
import "./App.css";
import { Layout } from "antd";

/////// import Components
import Navbar from "./components/navbar";
import Slide from "./components/slide";
import Textcard from "./components/textcard";
import DiscountSmall from "./components/discountsmall";
import DiscountBig from "./components/discountbig";
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
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
