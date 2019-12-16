//App.js
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { Layout } from "antd";
import { connect } from "react-redux";
import Routers from "./main";
import Login from "../view/login";
import Header from "../component/header/index";
import Sider from "../component/sider/index";
// 404页面
import NotFound from "../view/404";
const { Content } = Layout;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let token = this.props.token;
    console.log(token);
    return (
      <Router>
        {token ? (
          <Layout className="admin-root">
            <Header></Header>
            <Layout>
              <Sider></Sider>
              <Content>
                <Switch>
                  {Routers.map((item, index) => {
                    return (
                      <Route
                        key={index}
                        path={item.path}
                        exact
                        render={props =>
                          !item.auth ? (
                            <item.component {...props} />
                          ) : token ? (
                            <item.component {...props} />
                          ) : (
                            <Redirect
                              to={{
                                pathname: "/login",
                                state: { from: props.location }
                              }}
                            />
                          )
                        }
                      />
                    );
                  })}
                  <Route component={NotFound} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        ) : (
          <Route component={Login} exact path="/login" />
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
