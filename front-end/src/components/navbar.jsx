import React from "react";
import {
  MenuOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Layout, Row, Col } from "antd";
import "./navbar.css";
function navbar() {
  const { Header } = Layout;
  return (
    <Header>
      <Row>
        <Col span={5}>
          <MenuOutlined />
          <span style={{ marginLeft: "1vw" }}>Categories</span>
        </Col>
        <Col span={5}>Serach</Col>
        <Col span={10}>IQExpress</Col>
        <Col span={1}>USD</Col>
        <Col span={1}>
          <HeartOutlined />
        </Col>
        <Col span={1}>
          <UserOutlined />
        </Col>
        <Col span={1}>
          <ShoppingOutlined />
        </Col>
      </Row>
    </Header>
  );
}

export default navbar;
