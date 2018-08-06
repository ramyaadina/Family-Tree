import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import request from "request-promise";

const FormItem = Form.Item;

class RegForm extends React.Component {
    
  sendUserData = async (values) => {
    console.log('Received values of form: ', values);
    console.log("handle submit");
    let options = {
      method: 'POST',
      uri: 'http://localhost:3001/users/register',
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'Origin': 'http://localhost:3000',
        'Access-Control-Request-Method': '*',
      },
      body: {
        Name: values.userName,
        password: values.password,


      },
      json: true,

    }
    console.log("from options.body:,",options.body)
    var value;
    await request(options).then(data => {
      value = data
      console.log("from options",options)
      //this.setState({isLoggedIn:value})

    }).catch(e => console.error(e))
    return value

  }
    
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
          this.sendUserData(values)

        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(RegForm);