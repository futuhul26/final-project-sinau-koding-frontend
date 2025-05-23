import backgroundImage from '@images/meeting-room.jpg';
import { Eye, EyeOff } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State untuk menentukan apakah password ditampilkan atau tidak
  const [showPassword, setShowPassword] = useState(false);

  // Fungsi toggle untuk mengubah nilai showPassword
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div
      className='flex min-h-screen items-center justify-start bg-cover bg-center pl-16'
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className='relative w-full max-w-md overflow-hidden rounded-lg bg-white p-8 shadow-lg'>
        {/* Logo & Title */}
        <div className='mb-6 flex items-center justify-center'>
          <div className='mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white'>
            E
          </div>
          <h1 className='text-xl font-semibold text-orange-500'>E-Meeting</h1>
        </div>

        <h2 className='mb-2 text-center text-2xl font-bold'>Welcome Back!</h2>
        <p className='mb-6 text-center text-sm text-gray-600'>
          Please enter your username and password here!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
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
            {/* Input password dengan fitur show/hide menggunakan icon */}
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:ring-2 focus:ring-orange-400 focus:outline-none'
                required
              />
              {/* Icon Mata */}
              <div
                className='absolute inset-y-0 right-3 flex cursor-pointer items-center'
                onClick={togglePassword} // Saat diklik, ganti antara tampil dan sembunyikan password
              >
                {showPassword ? (
                  <EyeOff className='h-5 w-5 text-gray-500' /> // Jika password terlihat, tampilkan icon "eye off"
                ) : (
                  <Eye className='h-5 w-5 text-gray-500' /> // Jika password tersembunyi, tampilkan icon "eye"
                )}
              </div>
            </div>
          </div>

          <div className='mb-4 text-right text-sm'>
            <Link to='/reset-password-email' className='text-gray-500 hover:text-orange-500'>
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
