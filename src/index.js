import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import Sider from "./components/sider";
import AnchorMenu from "./components/anchor";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import WorkExperience from "./components/workexperience";
import Portfolio from "./components/portfolio";
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";
import { Row, Col, Space, BackTop, Typography, Divider } from "antd";
import Box from "@material-ui/core/Box";
const { Title } = Typography;

ReactDOM.render(
  <>
    <BackTop />
    <Box bgcolor="grey.200" p={3} style={{ minHeight: "100vh" }}>
      <Box borderRadius={32} bgcolor="grey.50" p={2}>
        <Row gutter={32}>
          <Col xs={24} md={6}>
            <Sider />
          </Col>
          <Col xs={24} md={18}>
            <Space direction="vertical" style={{ width: "100%" }}>
              <AnchorMenu />
              <Title id="about">ABOUT</Title>
              <AboutMe />
              <Divider />
              <Title id="skills">SKILLS</Title>
              <Skills />
              <Divider />
              <Title id="experience">WORK EXPERIENCE</Title>
              <WorkExperience />
              <Divider />
              <Title id="portfolio">PORTFOLIO</Title>
              <Portfolio />
              <Divider />
            </Space>
          </Col>
        </Row>
      </Box>
    </Box>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
