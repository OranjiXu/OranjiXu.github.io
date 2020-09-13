import React from 'react';
import { Space, Tag, Divider } from "antd";
import { StarTwoTone } from "@ant-design/icons";

function Skills() {
  return (
    <>
      <Space id="skill-box" direction="vertical" style={{ width: "100%" }}>
        <Divider orientation="left">Frontend Development</Divider>
        <div>
          <h5>basic website development:</h5>
          <Tag icon={<StarTwoTone />} color="red">
            HTML 5
          </Tag>
          <Tag icon={<StarTwoTone />} color="red">
            CSS 3
          </Tag>
          <Tag icon={<StarTwoTone />} color="red">
            JavaScript
          </Tag>
        </div>
        <div>
          <h5>CSS Preprocessors:</h5>
          <Tag icon={<StarTwoTone />} color="red">
            PostCSS-cssnext
          </Tag>
          <Tag color="orange">Less</Tag>
          <Tag color="volcano">Sass/SCSS</Tag>
        </div>
        <div>
          <h5>JavaScript library/framework:</h5>
          <Tag icon={<StarTwoTone />} color="red">
            JQuery
          </Tag>
          <Tag color="volcano">Pug (jade)</Tag>
          <Tag icon={<StarTwoTone />} color="red">
            Vue.js/Nuxt.js
          </Tag>
          <Tag color="orange">React</Tag>
        </div>
        <div>
          <h5>UI framework:</h5>
          <Tag icon={<StarTwoTone />} color="red">
            Bootstrap3/4
          </Tag>
          <Tag icon={<StarTwoTone />} color="red">
            Vuetify.js (for Vue.js)
          </Tag>
          <Tag icon={<StarTwoTone />} color="red">
            Element (for Vue.js)
          </Tag>
          <Tag color="orange">Ant Design (for React)</Tag>
        </div>
        <div>
          <h5>Others:</h5>
          <Tag color="volcano">gulp</Tag>
          <Tag color="orange">webpack</Tag>
          <Tag color="orange">TypeScript</Tag>
        </div>
        <Divider orientation="left">Backend Development</Divider>
        <div>
          <Tag icon={<StarTwoTone />} color="red">
            PHP
          </Tag>
          <Tag color="volcano">MySQL</Tag>
          <Tag color="volcano">pgSQL</Tag>
        </div>
        <Divider orientation="left">Others</Divider>
        <div>
          <Tag color="orange">git</Tag>
          <Tag color="orange">Docker</Tag>
          <Tag color="volcano">digital Art</Tag>
        </div>
      </Space>
    </>
  );
}

export default Skills;
