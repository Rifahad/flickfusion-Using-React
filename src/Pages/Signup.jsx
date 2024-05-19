import  { useContext } from 'react';
import { Form, Input } from 'antd';
import Btn from '../Components/Button.jsx';
import { UserDetailsContext } from '../Context/UserContext.jsx';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [form] = Form.useForm();
  const { addUser } = useContext(UserDetailsContext);

  const onFinish = (values) => {
    addUser(values);
    form.resetFields();
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-[30.375rem] h-[30.375rem] bg-color-1 bg-opacity-15 shadow-md shadow-color-1 rounded-full flex flex-col gap-5 items-center justify-center">
        <Form form={form} name="form1" onFinish={onFinish} className="text-white">
          <Form.Item
            name="firstName"
            label={<span className="text-white">First Name</span>}
            rules={[{ required: true, message: 'Please input your first name' }]}
          >
            <Input placeholder="Please input your first name" className="bg-transparent shadow-sm shadow-color-1 text-color-1 hover:bg-transparent" />
          </Form.Item>
          <Form.Item
            name="lastName"
            label={<span className="text-white">Last Name</span>}
            rules={[{ required: true, message: 'Please input your last name' }]}
          >
            <Input placeholder="Please input your last name" className="bg-transparent shadow-sm shadow-color-1 text-color-1 hover:bg-transparent" />
          </Form.Item>
          <Form.Item
            name="email"
            label={<span className="text-white">Email</span>}
            rules={[{ required: true, message: 'Please input your email', type: 'email' }]}
          >
            <Input placeholder="Please input your email" className="bg-transparent shadow-sm shadow-color-1 text-color-1 hover:bg-transparent" />
          </Form.Item>
          <Form.Item
            name="password"
            label={<span className="text-white">Password</span>}
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input.Password placeholder="Please input your password" className="bg-transparent shadow-sm shadow-color-1 text-color-1 hover:bg-transparent" />
          </Form.Item>
          <Form.Item className='flex items-center space-x-15'>
            <Btn type="primary" htmlType="submit">
              Submit
            </Btn>
            <Btn href={'/login'}>
              Login Page
            </Btn>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
