import React from 'react';
import { Form, Select, Input, Button, Radio, Modal } from 'antd';
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
  state={
    visible: false,
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleOk(e, this.props.form)
    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     console.log('Received values of form: ', values);
    //   }
    // });
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
      <div>
        {/* <Button type="primary" onClick={this.showModal}>{this.props.buttonText}</Button> */}
        <Modal
          title={this.props.buttonText}
          visible={this.props.visible}
          onOk={this.handleSubmit}
          onCancel={this.props.handleCancel}
        >
          <Form>
            <FormItem
              label="Relationship"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 8 }}
            >
              {getFieldDecorator('relation', {
                rules: [{ required: true, message: 'Please input your note!' }],
              })(
                <Select defaultValue="parent" style={{ width: 120 }} >
                  <Option value="parent">parent</Option>
                  <Option value="sibling">sibling</Option>
                  <Option value="children">children</Option>
                  <Option value="spouse">spouse</Option>
                </Select>
              )}
            </FormItem>
            <FormItem
              label="Name"
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
          </Form>
        </Modal>
      </div>
      
    );
  }
}

export default Form.create()(Node);
