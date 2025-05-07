import backgroundImage from '@images/meeting-room.jpg';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const ResetPassword = () => {
  // State untuk menentukan apakah password ditampilkan atau tidak
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Fungsi toggle untuk mengubah nilai showPassword
  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    setShowConfirmPassword((prev) => !prev);
  };
  return (
    <div
      className='flex min-h-screen items-center justify-center bg-cover bg-fixed bg-center'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='mx-4 w-full max-w-md rounded-lg bg-white p-10 shadow-xl md:w-1/2 lg:w-1/3'>
        {/* Logo & Title */}
        <div className='mb-6 flex items-center justify-center'>
          <div className='mr-2 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white'>
            E
          </div>
          <h1 className='text-xl font-semibold text-orange-500'>E-Meeting</h1>
        </div>
        <h2 className='mb-2 text-center text-2xl font-semibold'>Reset Password</h2>
        <p className='mb-6 text-center text-sm text-gray-600'>
          Please enter your new password and confirm
        </p>
        {/* Form */}
        <form>
          <div className='mb-4'>
            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>
              Password
            </label>
            {/* Input password dengan fitur show/hide menggunakan icon */}
            <div className='relative'>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
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
          <div className='mb-7'>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
              Confirm Password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? 'text' : 'password'}
                id='confirmPassword'
                placeholder='Confirm Password'
                className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:ring-2 focus:ring-orange-400 focus:outline-none'
                required
              />
              {/* Icon Mata */}
              <div className='absolute inset-y-0 right-3 flex cursor-pointer items-center'>
                {showConfirmPassword ? (
                  <EyeOff className='h-5 w-5 text-gray-500' /> // Jika password terlihat, tampilkan icon "eye off"
                ) : (
                  <Eye className='h-5 w-5 text-gray-500' /> // Jika password tersembunyi, tampilkan icon "eye"
                )}
              </div>
            </div>
          </div>
          <button
            type='submit'
            className='w-full rounded-lg bg-orange-500 py-2 font-semibold text-white transition duration-200 hover:bg-orange-600'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
