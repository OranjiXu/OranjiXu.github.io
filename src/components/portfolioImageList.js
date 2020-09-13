import React from 'react';
import { Modal,  Tag, Image, Skeleton, List, Avatar } from "antd";

class ImageList extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { visible: false };
  // }

  state = { modalTitle:"",modalContent:"",visible: false };

  showModal = (item) => {
    this.setState({
      modalTitle:item.title,
      modalContent:item.content,
      visible: true,
    });
  };

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <List
          bordered
          itemLayout="vertical"
          size="large"
          dataSource={this.props.dataSource}
          renderItem={(item, id) => (
            <>
              <List.Item
                key={id}
                actions={[
                  <Tag color="default">{item.date}</Tag>,
                  item.tag.map((item, id) => (
                    <Tag key={id} color="orange">
                      {item}
                    </Tag>
                  )),
                ]}
                extra={
                  <Image
                    width={272}
                    src={item.img}
                    preview={false}
                    placeholder={<Skeleton.Image active />}
                  />
                }
                onClick={(e) => this.showModal(item)}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.subtitle}
                />
                {item.description}
              </List.Item>
            </>
          )}
        />
        <Modal
          title={this.state.modalTitle}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}
          width={1000}
        >
          {this.state.modalContent}
        </Modal>
      </>
    );
  }
}

export default ImageList;
