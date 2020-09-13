import React from 'react';
import { Space, Skeleton } from "antd";


function Profile() {
  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      <Skeleton.Image />
      <Space>
        <Skeleton.Button size={"default"} shape={"default"} />
        <Skeleton.Button size={"default"} shape={"default"} />
      </Space>
      <Skeleton paragraph={{ rows: 8, width: "100%" }} />
    </Space>
  );
}

export default Profile;
