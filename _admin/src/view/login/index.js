import "./index.scss";

import React, { Component } from "react";

import { Link } from "react-router-dom";
import LoginForm from "@/component/loginForm";

class Login extends Component {
  succeedCallback = () => {
    this.props.push("/");
  };
  render() {
    return (
      <div className="login_bg">
        <div className="admin-login-container">
          <h1 className="title">管理员登录</h1>
          <LoginForm type="admin" succeedCallback={this.succeedCallback} />
          <div className="footer">
            <Link to="/" style={{ float: "right" }}>
              返回主页 >
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
