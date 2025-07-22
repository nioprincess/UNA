import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'
import axios from 'axios'

const SigninForm: React.FC = () => {
    const [loading, setLoading] = useState(false); 
  const route = useRouter()

    const onFinish = async (values: any) => {
      setLoading(true)
    try {
      const response = await axios.post('/api/signin', values)

      const data = await response?.data

      if (response.status === 200) {
        console.log('====================================');
        console.log(response);
        console.log('====================================');
        toast.success('Sign-in successful!')
        route.push('/admin')
      } else {
        toast.error(data.error || 'Sign-in failed!')
      }
    } catch (error) {
      toast.error('Something went wrong!')
    } finally {
      setLoading(false) 
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <Form
          name="signin"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full"
              loading={loading}
            >
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SigninForm
