/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { message, Form, Input, Button, Select } from "antd";
import { connect } from "react-redux";
import { userAdd } from "../../store/user/action";
import "./_user.scss";

const { Option } = Select;

class user_add extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
    loading: false
  };

  /**
   * 提交表单
   * @param {null}
   * @returns {void}
   */
  handleSubmit = e => {
    e.preventDefault();
    const { validateFields } = this.props.form;
    const { _userAdd } = this.props;
    validateFields((err, values) => {
      if (!err) {
        _userAdd(values).then(data => {
          if (data) {
            if (data.status) {
              message.success(data.message);
            }
          }
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 16 },
        sm: { span: 8 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 24,
          offset: 7
        }
      }
    };

    return (
      <div className="user_add_box">
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="用户名" hasFeedback>
            {getFieldDecorator("name", {
              rules: [
                {
                  required: true,
                  message: "请输入用户名"
                }
              ]
            })(<Input placeholder="请输入用户名" />)}
          </Form.Item>
          <Form.Item label="用户账号" hasFeedback>
            {getFieldDecorator("username", {
              rules: [
                {
                  required: true,
                  message: "请输入用户账号",
                  min: 5
                }
              ]
            })(<Input placeholder="请输入用户账号" />)}
          </Form.Item>
          <Form.Item label="用户密码" hasFeedback>
            {getFieldDecorator("password", {
              rules: [
                {
                  required: true,
                  message: "请输入用户密码",
                  min: 6
                }
              ]
            })(<Input.Password placeholder="请输入用户密码" />)}
          </Form.Item>
          <Form.Item label="用户等级" hasFeedback>
            {getFieldDecorator("auth", {
              rules: [{ required: true, message: "请选择用户级别" }]
            })(
              <Select placeholder="请选择用户级别">
                <Option value="1">管理员</Option>
                <Option value="0">普通用户</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              loading={this.state.loading}
            >
              用户新增
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

// redux拿到token并挂载到App的props上面
const mapStateToProps = state => {
  return {};
};

// redux拿到dispatch
let mapDispatchToProps = dispatch => ({
  _userAdd: params => dispatch(userAdd(params))
});

export default Form.create()(
  connect(mapStateToProps, mapDispatchToProps)(user_add)
);
