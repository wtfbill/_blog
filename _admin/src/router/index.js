//App.js

import { Redirect, Route, Router } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import Login from "../view/login";
import PrivateRoute from "./PrivateRoute";
import React from "react";
import Welcome from "../view/welcome/Welcome";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import Header from "../component/header/index";
// import NotFound from "../view/404";
// 404页面
const { Sider, Content } = Layout;

// 过滤不需要验证的路由.
const FilterRouter = (locations, history) => {
  let component = {};
  switch (locations.pathname) {
    case "/login":
      component = router(Login, locations, history);
      break;
    default:
      component = (
        <PrivateRoute
          exact
          path={locations.pathname}
          component={Welcome}
          location={locations}
          key={locations.key}
          {...history}
        />
      );
  }
  function router(routeComponent, locationObj, props) {
    const wrapper = (Component, props) => {
      return () => (
        <div className="_container_box">
          <Component {...props} />
        </div>
      );
    };
    return (
      <Route
        exact
        path={locationObj.pathname}
        component={wrapper(routeComponent, props)}
        location={locationObj}
        key={locationObj.key}
        {...props}
      />
    );
  }
  return component;
};

const history = createBrowserHistory();
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Router history={history}>
        {this.props.token ? (
          <Layout>
            <Sider
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
              style={{ height: "100vh" }}
            ></Sider>

            <Layout>
              <Header style={{ background: "#fff", padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </Header>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 800
                }}
              >
                <Route
                  render={({ location }) => (
                    <div id="mc-animate-container">
                      {FilterRouter(location, history)}
                    </div>
                  )}
                />
              </Content>
            </Layout>
          </Layout>
        ) : (
          <Route
            render={({ location }) => (
              <div id="mc-animate-container">
                {FilterRouter(location, history)}
              </div>
            )}
          />
        )}
      </Router>
    );
  }
}

// redux拿到token并挂载到App的props上面
const mapStateToProps = state => {
  return { token: state.user.token };
};

export default connect(mapStateToProps)(App);
