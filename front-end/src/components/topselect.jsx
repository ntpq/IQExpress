import React from "react";
import { Row, Col } from "antd";
import "./topselect.css";
function Topselect({ topic }) {
  let item = [];
  item[0] = {
    url: "https://cf.shopee.co.th/file/5d876c19273af4bc347d66de2009b04e",
    price: "580.90",
    rate: "471",
  };
  item[1] = {
    url:
      "https://images.unsplash.com/photo-1600692260434-ce1caca9bd2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=948&q=80",
    price: "1.90",
    rate: "292",
  };
  item[2] = {
    url:
      "https://images.unsplash.com/photo-1581191852946-c8b7c9caf935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=940&q=80",
    price: "23.90",
    rate: "41231",
  };
  item[3] = {
    url:
      "https://images.unsplash.com/photo-1570900555854-2ca419a816ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
    price: "1180.90",
    rate: "4563",
  };
  return (
    <div className="top-select">
      <div>
        <p className="topic">
          {topic}
          <span className="view-all">View-all</span>
        </p>
      </div>
      <Row justify="space-between">
        {item.map((data) => {
          return (
            <Col span={6}>
              <div className="item">
                <div className="container-img">
                  <div style={{ backgroundImage: `url(${data.url})` }} />
                </div>
                <div className="price">${data.price}</div>
                <div className="rate">{data.rate} Positive feedback</div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Topselect;
