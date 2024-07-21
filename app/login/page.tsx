'use client'
import { signIn } from 'next-auth/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IFormInput {
  username: string
  password: string
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      username: data.username,
      password: data.password,
    })

    if (result?.ok) {
      // handle successful login, for example redirect to admin page
      window.location.href = '/admin'
    } else {
      // handle login error, for example show an error message
      console.error('Login failed')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-sm">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            {...register('username')}
            className={`shadow appearance-none border ${
              errors.username ? 'border-red-500' : ''
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
            id="username"
            type="text"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">
              {errors.username.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            {...register('password')}
            className={`shadow appearance-none border ${
              errors.password ? 'border-red-500' : ''
            } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
            id="password"
            type="password"
            placeholder="******************"
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">
              {errors.password.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
