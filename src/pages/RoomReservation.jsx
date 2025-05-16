import RoomReservationHeader from '@components/RoomReservationHeader';
import Sidebar from '@components/Sidebar';
import { CircleDollarSign, Search, User } from 'lucide-react';
import { useEffect } from 'react';

const RoomReservation = () => {
  useEffect(() => {
    document.title = 'Room Reservation';
  }, []);
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <main className='flex-1 p-6'>
        <RoomReservationHeader />
        <div className='relative w-full overflow-hidden bg-white p-4'>
          <form className='mb-6 flex flex-col space-y-3 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-4'>
            <div className='relative w-full'>
              <Search className='absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-400' />
              <input
                type='text'
                placeholder='Enter the keyword here...'
                className='w-full rounded-md border border-gray-200 py-2 pr-4 pl-10 text-sm placeholder-neutral-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none'
              />
            </div>

            <select
              aria-label='Room Type'
              className='w-xs rounded-md border border-gray-200 px-4 py-2 text-sm text-neutral-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none'
            >
              <option value='' selected>
                Room Type
              </option>
              <option value='small' className='text-neutral-800'>
                Small
              </option>
              <option value='medium' className='text-neutral-800'>
                Medium
              </option>
              <option value='large' className='text-neutral-800'>
                Large
              </option>
            </select>
            <select
              aria-label='Capacity'
              className='w-xs rounded-md border border-gray-200 px-4 py-2 text-sm text-neutral-300 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none'
            >
              <option value='' selected>
                Capacity
              </option>
              <option value='lt10' className='text-neutral-800'>
                {' '}
                &lt; 10 people
              </option>
              <option value='11to50' className='text-neutral-800'>
                11-50 people
              </option>
              <option value='51to100' className='text-neutral-800'>
                51-100 people
              </option>
            </select>
            <button
              type='submit'
              className='rounded-md border border-orange-500 px-4 py-2 text-sm font-semibold text-orange-500 transition hover:bg-orange-50'
            >
              Search
            </button>
            <button
              type='button'
              className='w-md rounded-lg bg-orange-500 py-2 font-semibold text-white transition duration-200 hover:bg-orange-600'
            >
              + Add New Reservation
            </button>
          </form>
          {/* Rooms grid */}
          <section
            aria-label='Rooms list'
            className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          >
            {/* 12 room cards */}

            {/* Room 1 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 2 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 3 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 4 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 5 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 6 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 7 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 8 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 9 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 10 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 11 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Room 12 */}
            <div className='max-w-sm overflow-hidden rounded-2xl border border-gray-200'>
              <div className='relative'>
                <img
                  src='./src/images/aster-room.jpg'
                  alt='Meeting room with a long wooden table, laptops, cups, glasses, and chairs around'
                  className='w-full object-cover'
                  width={600}
                  height={300}
                />
                <div className='absolute top-3 right-3 rounded-full bg-orange-600 px-4 py-1 text-sm font-medium text-white select-none'>
                  Small
                </div>
              </div>
              <div className='p-5'>
                <h2 className='mb-3 text-2xl font-semibold text-black'>Aster Room</h2>
                <div className='flex items-center justify-between space-x-4 text-sm'>
                  <div className='flex items-center space-x-1'>
                    <User className='text-orange-600' />
                    <span className='font-medium text-neutral-800'>10 people</span>
                  </div>
                  <div className='flex items-center space-x-1'>
                    <CircleDollarSign className='text-orange-600' />
                    <span>
                      <span className='font-medium text-neutral-800'>Rp 500.000</span>
                      <span className='text-neutral-500'>/hours</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RoomReservation;
