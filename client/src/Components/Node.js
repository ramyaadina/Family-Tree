import React from 'react';
import { Form, Select, Input, Button, Radio } from 'antd';
import styled from 'styled-components';

const CustomButton = styled(Button)`
  &&.ant-btn-primary {
    background-color: red;
  }
`;

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

class Node extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
          label="Note"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('note', {
            rules: [{ required: true, message: 'Please input your note!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Gender"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 8 }}
        >
          {getFieldDecorator('gender', {
            rules: [{ required: true, message: 'Please select your gender!' }],
          })(
          <RadioGroup >
            <Radio value='male'>Male</Radio>
            <Radio value='female'>Female</Radio>
            <Radio value='others'>Others</Radio>
          </RadioGroup>
    
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 12, offset: 5 }}
        >
          <CustomButton type="primary" htmlType="submit">
            Submit
          </CustomButton>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(Node);
