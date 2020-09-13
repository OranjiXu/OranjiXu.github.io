import React from 'react';
import { Skeleton,  Typography } from "antd";
import ImageList from "./portfolioImageList";
import w6t from "../assets/img/w6-t.jpg";

const { Title, Text } = Typography;

function Portfolio2018to2020() {
  const portfolio2020Data = [
    {
      title: "網頁作品：單頁式形象網站",
      img: w6t,
      subtitle: "#動畫特效 #gulp #Animate.css #SASS",
      description: "單頁式形象網站設計。",
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          使用Vue.js介接YouTube Data
          API打造頻道管理網站，讓使用者將自己訂閱的頻道分類群組化，方便追蹤。
        </>
      ),
      tag: ["gulp", "Animate.css", "SASS"],
      date: "2020 summer",
      link: "https://oranjixu.github.io/youtube_channel_manager/",
    },
  ];
  return (
      <ImageList dataSource={portfolio2020Data} />
  );
}

export default Portfolio2018to2020;
