import backgroundImage from '@images/meeting-room.jpg';

const ResetPassword = () => {
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className='mb-7'>
            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>
              Confirm Password
            </label>
            <div className='relative'>
              <input
                type='password'
                id='confirmPassword'
                placeholder='Confirm Password'
                className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:ring-2 focus:ring-orange-400 focus:outline-none'
                required
              />
              {/* Icon Mata */}
              <div className='absolute inset-y-0 right-3 flex cursor-pointer items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                  />
                </svg>
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
