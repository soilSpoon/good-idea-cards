import React, { Component } from "react";

import { Layout } from "antd";
import "antd/dist/antd.css";
import "../css/appLayout.css";

const { Content, Footer, Header } = Layout;

export default class AppLayout extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Header style={{ backgroundColor: "inherit" }}></Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: 280
          }}
        >
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/CaesiumY/good-idea-cards"
          >
            Good Idea Cards ©2020 Created by Caesiumy
          </a>
        </Footer>
      </Layout>
    );
  }
}
