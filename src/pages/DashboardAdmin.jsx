import DashboardHeader from '@components/DashboardHeaderAdmin';
import Sidebar from '@components/Sidebar';
import React from 'react';

const rooms = [
  { name: 'Aster Room', omzet: 'Rp 2.000.000', usage: '80%' },
  { name: 'Bluebell Room', omzet: 'Rp 2.000.000', usage: '80%' },
  { name: 'Camellia Room', omzet: 'Rp 2.000.000', usage: '80%' },
  { name: 'Camellia Room', omzet: 'Rp 2.000.000', usage: '80%' },
];

const RoomCard = ({ name, omzet, usage }) => (
  <div className='item-center flex justify-between rounded-md bg-white p-4 shadow-sm'>
    <div>
      <p className='mb-1 text-[28px] font-semibold text-gray-600'>{name}</p>
      <p className='mb-1 text-[14px] text-gray-400'>Percentage of Usage</p>
      <p className='mb-1 text-[24px] font-semibold'>{usage}</p>
      <p className='mb-1 text-[14px] text-gray-400'>Omzet</p>
      <p className='mb-1 text-[24px] font-semibold'>{omzet}</p>
    </div>
    <svg width='80' height='80' viewBox='0 0 36 36'>
      <path
        fill='none'
        stroke='#F36B0A'
        strokeWidth='4'
        strokeDasharray='80, 100'
        d='M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831'
      />
    </svg>
  </div>
);

const DashboardAdmin = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar />

      <main className='flex-1 p-6'>
        <DashboardHeader />
        {/* Filters */}

        <div className='space-y-6 p-3'>
          <div className='mb-4 rounded bg-white p-4 shadow'>
            <div className='flex flex-wrap items-center gap-3 md:flex-nowrap'>
              <div className='flex-1'>
                <label htmlFor='start-date' className='mb-1 block text-[16px] text-gray-500'>
                  Start Date
                </label>
                <div className='relative'>
                  <input
                    type='date'
                    id='start-date'
                    className='w-full rounded border border-gray-200 p-2'
                    placeholder='Select date'
                  />
                  <i className='far fa-calendar-alt pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-300' />
                </div>
              </div>
              <div className='flex-1'>
                <label htmlFor='end-date' className='mb-1 block text-[16px] text-gray-500'>
                  End Date
                </label>
                <div className='relative'>
                  <input
                    type='date'
                    id='end-date'
                    className='w-full rounded border border-gray-200 p-2'
                    placeholder='Select date'
                  />
                  <i className='far fa-calendar-alt pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-300' />
                </div>
              </div>
              <button
                type='submit'
                className='mt-6 w-30 rounded-lg bg-orange-500 py-2 font-semibold text-white transition duration-200 hover:bg-orange-600 sm:self-auto'
              >
                Search
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className='h-185 overflow-y-auto p-4'>
            <div className='mb-6 grid grid-cols-4 gap-4'>
              <div className='rounded bg-white p-4 shadow'>
                <div className='text-gray-500'>Total Omzet</div>
                <div className='text-[36px] font-bold'>Rp 8.000.000</div>
              </div>
              <div className='rounded bg-white p-4 shadow'>
                <div className='text-gray-500'>Total Reservation</div>
                <div className='text-[36px] font-bold'>100</div>
              </div>
              <div className='rounded bg-white p-4 shadow'>
                <div className='text-gray-500'>Total Visitor</div>
                <div className='text-[36px] font-bold'>500</div>
              </div>
              <div className='rounded bg-white p-4 shadow'>
                <div className='text-gray-500'>Total Rooms</div>
                <div className='text-[36px] font-bold'>12</div>
              </div>
            </div>

            {/* Room Cards */}
            <div className='grid grid-cols-4 gap-4'>
              {Array(3)
                .fill(rooms)
                .flat()
                .map((room, index) => (
                  <RoomCard key={index} {...room} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;
