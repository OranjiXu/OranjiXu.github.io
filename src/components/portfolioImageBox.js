import React from 'react';
import { Modal, Popover, Tag, Image, Skeleton } from "antd";

class ImageBox extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { visible: false };
  // }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const PopoverContent = this.props.tag.map((item, id) => {
      return (
        <Tag key={id} color="orange">{item}</Tag>
      );
    });
    return (
      <>
        <Popover
          placement="topLeft"
          title={this.props.title}
          content={PopoverContent}
          arrowPointAtCenter
        >
          <Image
            width={96}
            src={this.props.img}
            preview={false}
            placeholder={<Skeleton.Image active />}
            onClick={this.showModal}
          />
          <Tag color="default">{this.props.date}</Tag>
        </Popover>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={1000}
        >
          {this.props.content}
        </Modal>
      </>
    );
  }
}

export default ImageBox;
