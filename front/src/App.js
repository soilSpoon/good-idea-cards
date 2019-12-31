import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import api from "./api";
import Posts from "./components/Posts";
import AppLayout from "./container/AppLayout";

import { Spin, Alert } from "antd";

export default class App extends Component {
  state = {
    isLoading: true,
    results: []
  };

  getData = async () => {
    const data = await api.getAllPosts();
    this.setState({ results: data.data, isLoading: false });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    const { results, isLoading } = this.state;
    return (
      <>
        <HashRouter>
          <AppLayout>
            {isLoading ? (
              <Spin tip="Loading...">
                <Alert
                  message="데이터를 불러오는 중"
                  description="시간이 오래걸린다면 F5를 눌러 새로고침해주세요."
                  type="info"
                />
              </Spin>
            ) : (
              <div className="posts">
                {results.map(item => (
                  <Posts
                    id={item.id}
                    author={item.author}
                    content={item.content}
                    key={item.id}
                  />
                ))}
              </div>
            )}
          </AppLayout>
        </HashRouter>
      </>
    );
  }
}
