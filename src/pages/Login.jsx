import backgroundImage from '@images/meeting-room.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div
      className='flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='mx-4 w-full max-w-md rounded-lg bg-white p-10 shadow-lg md:w-1/2 lg:w-1/3'>
        {/* Logo & Title */}
        <div className='mb-6 flex items-center justify-center'>
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white'>
            E
          </div>
          <h1 className='text-xl font-semibold text-orange-500'>E-Meeting</h1>
        </div>

        <h2 className='mb-2 text-center text-2xl font-bold'>Welcome Back!</h2>
        <p className='mb-6 text-center text-sm text-gray-600'>
          Please enter your username and password here!
        </p>

        {/* Form */}
        <form>
          <div className='mb-4'>
            <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
              Username
            </label>
            <input
              type='text'
              id='username'
              placeholder='Username'
              className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
              required
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            <div className='relative'>
              <input
                type='password'
                id='password'
                placeholder='Password'
                className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:ring-2 focus:ring-orange-400 focus:outline-none'
                required
              />
              {/* Icon Mata */}
              <div className='absolute inset-y-0 right-3 flex cursor-pointer items-center'>
                {/* For the eye icon to show password */}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className='mb-4 text-right text-sm'>
            <Link to='/resetpasswordemail' className='text-gray-500 hover:text-orange-500'>
              Forgot Password?
            </Link>
          </div>

          <button
            type='submit'
            className='w-full rounded-lg bg-orange-500 py-2 font-semibold text-white transition duration-200 hover:bg-orange-600'
          >
            Login
          </button>
        </form>

        <p className='mt-1 text-center text-sm text-gray-500'>
          Dont have an account?&nbsp;
          <Link
            to='./register'
            className='font-semibold text-orange-500 no-underline hover:text-orange-600'
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
