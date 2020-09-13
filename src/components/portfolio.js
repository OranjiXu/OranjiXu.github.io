import React from 'react';
import { Row, Col, Space, Skeleton, Timeline, Typography } from "antd";
import PortfolioAfter2020 from "./portfolioAfter2020";
import Portfolio2018to2020 from "./portfolio2018to2020";
import PortfolioBefore2018 from "./portfolioBefore2018";

const { Title, Text } = Typography;

function Profile() {
  return (
    <>
      <Timeline>
        <Timeline.Item>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Title level={5}>2020至今</Title>
            <Text type="secondary">近期作品</Text>
            <Row gutter={[16, 16]}>
              <Col xs={23} md={20}>
                <PortfolioAfter2020 />
              </Col>
            </Row>
          </Space>
        </Timeline.Item>
        <Timeline.Item>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Title level={5}>2018-2020</Title>
            <Text type="secondary">社會新鮮人時期的自學作品</Text>
            <Row gutter={[16, 16]}>
              <Col xs={23} md={20}>
                <Portfolio2018to2020 />
              </Col>
            </Row>
          </Space>
        </Timeline.Item>
        <Timeline.Item>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Title level={5}>2018以前</Title>
            <Text type="secondary">學生時期與在校實習之作品</Text>
            <Row gutter={[16, 16]}>
              <PortfolioBefore2018 />
            </Row>
          </Space>
        </Timeline.Item>
      </Timeline>
    </>
  );
}

export default Profile;
