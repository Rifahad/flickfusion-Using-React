import { Form, Input } from "antd";
import validationSchema from "../Utility/Validation";
import Btn from "../Components/Button.jsx";

const Signup = () => {
  const [form] = Form.useForm();

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[51.375rem] h-[51.375rem] bg-[url('src/assets/Banner/banner7.jpg')] bg-cover bg-opacity-10 rounded-full flex flex-col gap-5 items-center justify-center">
        <Form form={form} name="form1">
          <Form.Item
            name="firstName"
            label="First Name"
            rules={[{ validator: validationSchema.fields.firstName }]}
          >
            <Input placeholder="Please input your first name" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rules={[{ validator: validationSchema.fields.lastName }]}
          >
            <Input placeholder="Please input your last name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ validator: validationSchema.fields.email }]}
          >
            <Input placeholder="Please input your email" />
          </Form.Item>
          <Form.Item
            name="Password"
            label="Password"
            rules={[{ validator: validationSchema.fields.Password }]}
          >
            <Input.Password placeholder="Please input your password" />
          </Form.Item>
          <Form.Item>
            <Btn type="primary" htmlType="submit">
              Submit
            </Btn>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
