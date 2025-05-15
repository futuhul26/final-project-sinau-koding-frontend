import backgroundImage from '@images/meeting-room.jpg';
import { useNavigate } from 'react-router-dom';

const ResetPasswordEmail = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reset-password');
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
          Please enter your registered email here!
        </p>
        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              type='text'
              id='email'
              placeholder='Email'
              className='mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
              required
            />
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

export default ResetPasswordEmail;
