import React from 'react';
import { Row, Col, Space, Skeleton, Typography } from "antd";
import ImageBox from "./portfolioImageBox";
import w5t from "../assets/img/w5-t.jpg";
import w4t from "../assets/img/w4-t.jpg";
import w3t from "../assets/img/w3-t.jpg";
import w2t from "../assets/img/w2-t.jpg";
import w1t from "../assets/img/w1-t.jpg";
import p1t from "../assets/img/p1-t.jpg";
import s3t from "../assets/img/s3-t.jpg";

const { Title, Text } = Typography;

function PortfolioBefore2018() {
  const portfolio2018Data = [
    {
      title: "網頁作品：仿企業網站版型",
      img: w5t,
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          HTML+CSS+jquery設計的仿企業官網版型，原型來自中鋼官網。
        </>
      ),
      tag: ["html", "css", "jquery", "animate.css"],
      date: "2017 winter",
      link: "https://oranjixu.github.io/Business-Website/",
    },
    {
      title: "網頁作品：音樂網站版型",
      img: w4t,
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          HTML+CSS+Bootstrap設計的音樂自適應網頁設計樣板。
        </>
      ),
      tag: ["html", "css", "Bootstrap"],
      date: "2017 winter",
      link: "https://oranjixu.github.io/Music-Browser-Template/",
    },
    {
      title: "網頁作品：RWD部落格版型",
      img: w3t,
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          手機裝置排版,並使用JQery自製側邊導覽列。
        </>
      ),
      tag: ["html", "css", "JQuery"],
      date: "2017 winter",
      link: "https://oranjixu.github.io/Classic-Blog-Template/",
    },
    {
      title: "網頁作品：Orange's blog",
      img: w2t,
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          裡面放置我的繪圖、程式心得及心情雜談的部落格。
        </>
      ),
      tag: ["html", "css", "javascript"],
      date: "2017 summer",
      link: "https://oranjixu.github.io/blog/",
    },
    {
      title: "網頁作品：Orange-Design X Art",
      img: w1t,
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          放置我各式作品的個人網站，也就是訪客您目前正在瀏覽的網頁之前身。
        </>
      ),
      tag: ["html", "css", "javascript"],
      date: "2017 summer",
      link: "",
    },
    {
      title: "網頁作品：竹田動漫季官方網站",
      img: p1t,
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          此專案是我在智慧菓科技有限公司實習期間，是使用Bootstrap框架架設的響應式網站。除了官網的建置，此外還包含網路報名系統(PHP)的前端美化。
        </>
      ),
      tag: ["html", "css", "javascript", "PHP"],
      date: "2016 winter",
      link: "",
    },
    {
      title: "網頁作品：生態園區簡介",
      img: s3t,
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          多媒體網站課程所設計的網頁作品，我們團隊親自到生態園區拍攝照片，並編排至網頁上，替園區中各種植物作介紹並留下心得，藉此推薦訪客到園區參觀。
        </>
      ),
      tag: ["html", "css", "javascript"],
      date: "2015 summer",
      link: "",
    },
  ];
  return portfolio2018Data.map((item, id) => {
    return (
      <Col key={id} flex="96px">
        <ImageBox
          title={item.title}
          img={item.img}
          content={item.content}
          tag={item.tag}
          date={item.date}
          link={item.link}
        />
      </Col>
    );
  });
}

export default PortfolioBefore2018;
