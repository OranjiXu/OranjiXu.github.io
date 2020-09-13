import React from 'react';
import Profile from "./profile";
import { Affix } from "antd";

class Sider extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0,
      width: 0,
    };
    window.addEventListener("resize", this.update);
  }
  componentDidMount() {
    this.update();
  }
  update = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };
  render() {
    if (this.state.width < 765) {
      return (
        <>
          <Profile />
        </>
      );
    } else {
      return (
        <>
          <Affix offsetTop={20}>
            <Profile />
          </Affix>
        </>
      );
    }
  }
}

export default Sider;
