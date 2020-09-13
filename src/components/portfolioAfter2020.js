import React from 'react';
import { Skeleton,  Typography } from "antd";
import ImageList from "./portfolioImageList";
import w6t from "../assets/img/w6-t.jpg";

const { Title, Text } = Typography;

function PortfolioAfter2020() {
  const portfolio2020Data = [
    {
      title: "網頁作品：用React建置我的個人網站",
      img: w6t,
      subtitle: "#React #Create React App #Ant Design",
      description: "用React建置我的個人網站，放上我的個人資訊及作品。",
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          用React建置我的個人網站，放上我的個人資訊及作品。
        </>
      ),
      tag: ["React", "Ant Design"],
      date: "2020 summer",
      link: "https://oranjixu.github.io/youtube_channel_manager/",
    },
    {
      title: "網頁作品：Youtube 頻道訂閱管理器",
      img: w6t,
      subtitle: "#Google Developers #YouTube Data API #Vue.js #Vue CLI",
      description:
        "使用Vue.js介接YouTube Data API打造頻道管理網站，讓使用者將自己訂閱的頻道分類群組化，方便追蹤。",
      content: (
        <>
          <Skeleton.Image />
          <Skeleton.Image />
          使用Vue.js介接YouTube Data
          API打造頻道管理網站，讓使用者將自己訂閱的頻道分類群組化，方便追蹤。
        </>
      ),
      tag: ["YouTube Data API", "Vue.js", "Vue-cli", "element-ui"],
      date: "2020 summer",
      link: "https://oranjixu.github.io/youtube_channel_manager/",
    },
  ];
  return (
      <ImageList dataSource={portfolio2020Data} />
  );
}

export default PortfolioAfter2020;
