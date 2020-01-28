import "./welcome.css";

import React from "react";
import routerConfig from "../../router/main";
import { withRouter } from "react-router-dom";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childComplete: false
    };
  }

  componentDidMount() {
    const { location } = this.props;

    let Component = {};

    routerConfig.forEach(router => {
      if (router.path === location.pathname) {
        window.scrollTo(0, 0);
        Component = router.component;
      }
    });

    const viewportHeight = document.documentElement.clientHeight;
    const container = document.querySelector(".mc-welcom-container");
    if (container) container.style.height = `${viewportHeight}px`;

    this.setState({ component: Component, childComplete: true });
  }

  UNSAFE_componentWillUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    const { component: Component } = this.state;
    return !this.state.childComplete ? (
      <div>
        <div
          type="spin"
          color="#dedede"
          style={{
            width: "1.2rem",
            height: "1.2rem",
            margin: "66% auto"
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "12%",
            left: "35%",
            margin: "68% auto",
            fontSize: ".32rem"
          }}
        >
          正在努力加载...
        </span>
      </div>
    ) : (
      <Component {...this.props} />
    );
  }
}

export default withRouter(Welcome);
