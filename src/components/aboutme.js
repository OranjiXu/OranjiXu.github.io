import React from 'react';
import { Row, Col, Space, Skeleton, Typography, Timeline } from "antd";
const { Paragraph, Text } = Typography;

function Profile() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Space>
        <Skeleton.Button size={"default"} shape={"default"} />
        <Skeleton.Button size={"default"} shape={"default"} />
        <Skeleton.Button size={"default"} shape={"default"} />
        <Skeleton.Button size={"default"} shape={"default"} />
      </Space>
      <Row>
        <Col xs={24} md={20}>
          <Space direction="vertical">
            <Paragraph>
              　　我是許智翔，就學期間曾經有視覺設計師實習經驗，而在首份工作擔任軟體工程師，我認為好的程式同時需要好的設計來呈現，兩者是相輔相成的，在不同領域的工作經驗中，我能夠保有熱情與求知慾，學會獨立思考，並且分析、解決問題。
            </Paragraph>
            <Paragraph>　　我致力於嘗試與進階不同的web技術：</Paragraph>
            <Timeline>
              <Timeline.Item>
                <Typography>
                  <Text underline>在學期間</Text>
                  自主學習過XAMPP技術、並修習JAVA程式設計、物件導向程式設計、資料庫管理等課程奠定程式基礎。
                </Typography>
              </Timeline.Item>
              <Timeline.Item>
                <Typography>
                  <Text underline>視覺設計師實習期間</Text>
                  ，為配合公司動漫設計風格，我增進CSS能力，並開始使用Library加強網頁的互動性與特效。
                </Typography>
              </Timeline.Item>
              <Timeline.Item>
                <Typography>
                  <Text underline>軟體工程師期間</Text>
                  ，集合往年累積的PHP、HTML能力，令我在職場如魚得水，但我不以此為限，在接觸Node.js後，學習了前端自動化建構技術與Vue.js，並導入至公司專案使用。
                </Typography>
              </Timeline.Item>
            </Timeline>
            {/* <Typography>
              　　我致力於嘗試與進階不同的web技術：在學期間自主學習過XAMPP技術、並修習JAVA程式設計、物件導向程式設計、資料庫管理等課程奠定程式基礎；視覺設計師實習期間，為配合公司動漫設計風格，我增進CSS能力，並開始使用Library加強網頁的互動性與特效；軟體工程師期間，集合往年累積的PHP、HTML能力，令我在職場如魚得水，但我不以此為限，在接觸Node.js後，學習了前端自動化建構技術與Vue.js，並導入至公司專案使用。
            </Typography> */}
            <Typography>
              　　我喜歡團隊合作氣氛，樂於溝通與討論，在兩年多的軟體工程師工作經驗中，能夠與同事協調、合作處理突發狀況，因為對前後端都有基礎知識，在團隊合作及溝通上很有幫助，良好的溝通表達能力讓公司指派我擔任前端專案的管理者，負責規劃前端專案並與UI設計師及後端工程師配合執行。
            </Typography>
          </Space>
        </Col>
      </Row>
    </Space>
  );
}

export default Profile;
