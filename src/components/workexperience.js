import React from 'react';
import { Typography, Timeline } from "antd";

const { Title, Paragraph, Text } = Typography;

function WorkExperience() {
  return (
    <>
      <Timeline>
        <Timeline.Item>
          <Typography>
            <Title level={5}>2018/4~2020/8 軟體工程師</Title>
            <Paragraph>
              <Text type="secondary">聚泰網路科技有限公司</Text>
            </Paragraph>
            <Paragraph>
              1.<Text underline>php</Text>、<Text underline>postgresql</Text>
              實作CRUD或<Text underline>DataTable</Text>
              功能，具備XSS攻擊防範之基本知識。
            </Paragraph>
            <Paragraph>
              2.<Text underline>vue.js (vue-cli,Nuxt.js)</Text>
              網站規劃、介接後端api與協助代碼審查
            </Paragraph>
            <Paragraph>
              3.引入<Text underline>gulp</Text>、<Text underline>postcss</Text>
              優化既有網站模板
            </Paragraph>
            <Paragraph>
              4.<Text underline>CSS/Sass/Less</Text>、
              <Text underline>JavaScript(jQuery)</Text>、
              <Text underline>Bootstrap</Text>
              網站設計，並且
              <Text underline>針對mobile web進行優化</Text>。
            </Paragraph>
            <Paragraph>
              5.client端連接<Text underline>WebSocket</Text>{" "}
              並處理接收之訊息至前端頁面面顯示。
            </Paragraph>
          </Typography>
        </Timeline.Item>
        <Timeline.Item>
          <Typography>
            <Title level={5}>2014/12~2017/1 視覺設計師</Title>
            <Paragraph>
              <Text type="secondary">智慧菓科技有限公司</Text>
            </Paragraph>
            <Paragraph>
              1.動漫相關<Text underline>形象網頁設計</Text>
            </Paragraph>
            <Paragraph>
              2.活動攤位報名網站(<Text underline>PHP</Text>、<Text underline>MySQL</Text>)維護
            </Paragraph>
            <Paragraph>
              3.動漫角色
              <Text underline>插畫(Photoshop、CLIP STUDIO PAINT)</Text>
              、印刷文宣品
              <Text underline>設計排版</Text>
            </Paragraph>
            <Paragraph>
              4.2D手機/網頁遊戲<Text underline>向量插圖(Illustrator)</Text>與
              <Text underline>動畫設計</Text>
            </Paragraph>
            <Paragraph>5. Google Play商店、App Store手機遊戲上架</Paragraph>
          </Typography>
        </Timeline.Item>
      </Timeline>
    </>
  );
}

export default WorkExperience;
