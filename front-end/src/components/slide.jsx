import React, { useState } from "react";
import { Carousel } from "antd";
import shortid from "shortid";
import "./slide.css";
const importAll = (r) => {
  return r.keys().map(r);
};
const getId = () => {
  const id = shortid.generate();
  // console.log(id);
  return id;
};
const images = importAll(
  require.context("../picture", false, /\.(png|jpe?g|svg)$/)
);
function Slide() {
  const [itemKey, setItemKey] = useState("");

  let item = [];
  item[0] = {
    noneColorName: "COVID",
    colorName: "Protect",
    detail: "Be aware to COVID-19 by using Mask.",
    img: images[0],
    bgColor: "#c8d7de",
    txtColor: "#00a5e6",
  };
  item[1] = {
    noneColorName: "Kid",
    colorName: "Toy",
    detail: "Your children need it for now.",
    img: images[1],
    bgColor: "#cfe0c2",
    txtColor: "#6b9e47",
  };
  item[2] = {
    noneColorName: "Beauty",
    colorName: "Accessories",
    detail: "Alway take care your beauty with great accessories",
    img: images[2],
    bgColor: "#b2b3af",
    txtColor: "#7a7875",
  };
  item[3] = {
    noneColorName: "Interior",
    colorName: "Design",
    detail: "Don't mess up to 20% off amazing items",
    img: images[3],
    bgColor: "#739ea9",
    txtColor: "#3c7f90",
  };
  return (
    <Carousel
      autoplay
      effect="fade"
      afterChange={() => {
        setItemKey(getId());
      }}
    >
      {item.map((data) => {
        return (
          <div>
            <div
              key={itemKey}
              className="slide-item"
              style={{ background: data.bgColor }}
            >
              <div className="slide-item-text-box">
                <span className="item-name ">{data.noneColorName}</span>
                <span
                  className="item-color-name"
                  style={{ color: data.txtColor }}
                >
                  {data.colorName}
                </span>
                <span className="item-detail">{data.detail}</span>
              </div>
              <img className="item-pic" src={data.img} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Slide;
