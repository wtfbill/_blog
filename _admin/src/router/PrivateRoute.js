import { Redirect, Route } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";

class PrivateRoute extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.token
    };
  }

  render() {
    const { props, state } = this;
    const { component: Component, ...rest } = props;
    const { token } = state;
    return (
      <Route
        {...rest}
        render={props =>
          token ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}
// redux拿到token并挂载到App的props上面
const mapStateToProps = state => {
  return { token: state.user.token };
};

export default connect(mapStateToProps)(PrivateRoute);
