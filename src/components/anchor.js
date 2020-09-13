import React from 'react';
import { Anchor } from "antd";

const { Link } = Anchor;

class AnchorMenu extends React.Component {
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
      return <></>;
    } else {
      return (
        <>
          <Anchor
            affix={false}
            showInkInFixed={true}
            style={{ position: "fixed", right: "0", paddingRight: "8px" }}
          >
            <Link href="#about" title="ABOUT" />
            <Link href="#skills" title="SKILLS" />
            <Link href="#experience" title="WORK EXPERIENCE" />
            <Link href="#portfolio" title="PORTFOLIO" />
          </Anchor>
        </>
      );
    }
  }
}

export default AnchorMenu;
