import SettingsHeader from '@components/SettingsHeader';
import Sidebar from '@components/Sidebar';
import { useEffect } from 'react';

const Settings = () => {
  useEffect(() => {
    document.title = 'Settings';
  }, []);
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 p-6'>
        <SettingsHeader />
        <div className='relative w-full overflow-hidden bg-white p-8'>
          <div className='relative w-full'>
            <h1 className='mb-3 font-sans text-[20px] font-semibold text-black'>My Account</h1>
            <div className='mb-6 flex items-center'>
              <img
                alt='John Doe'
                className='h-12 w-12 rounded-full'
                height={48}
                src='./src/images/john-doe.jpg'
                width={48}
              />
            </div>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-3'>
                <div>
                  <label className='mb-1 block font-sans text-[16px]' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-[14px] focus:ring-1 focus:ring-orange-500 focus:outline-none'
                    id='email'
                    type='email'
                    defaultValue='johndoe@gmail.com'
                  />
                </div>
                <div>
                  <label className='mb-1 block font-sans text-[16px]' htmlFor='username'>
                    Username
                  </label>
                  <input
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-[14px] focus:ring-1 focus:ring-orange-500 focus:outline-none'
                    id='username'
                    type='text'
                    defaultValue='John Doe'
                  />
                </div>
                <div>
                  <label className='mb-1 block font-sans text-[16px]' htmlFor='role'>
                    Role
                  </label>
                  <input
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-[14px] focus:ring-1 focus:ring-orange-500 focus:outline-none'
                    id='role'
                    type='text'
                    defaultValue='Admin'
                  />
                </div>
                <div>
                  <label className='mb-1 block font-sans text-[16px]' htmlFor='status'>
                    Status
                  </label>
                  <input
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-[14px] focus:ring-1 focus:ring-orange-500 focus:outline-none'
                    id='status'
                    type='text'
                    defaultValue='Active'
                  />
                </div>
                <div>
                  <label className='mb-1 block font-sans text-[16px]' htmlFor='language'>
                    Language
                  </label>
                  <select
                    className='w-full rounded-md border border-gray-300 px-3 py-2 text-[14px] focus:ring-1 focus:ring-orange-500 focus:outline-none'
                    id='language'
                  >
                    <option>English</option>
                    <option>Indonesia</option>
                  </select>
                </div>
              </div>
              <div>
                <div className='my-6 w-full border-b border-gray-200' />
                <h2 className='mt-6 mb-2 text-[20px] font-semibold'>Password</h2>
                <label className='mb-1 block font-sans text-[16px]' htmlFor='password'>
                  Password
                </label>
                <input
                  className='w-full rounded-md border border-gray-300 px-3 py-2 text-[14px] focus:ring-1 focus:ring-orange-500 focus:outline-none'
                  id='password'
                  type='password'
                  defaultValue='*********'
                />
              </div>
              <button
                className='mt-4 rounded-md bg-orange-600 px-3 py-2 font-sans text-[16px] text-white'
                type='button'
              >
                Edit
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
