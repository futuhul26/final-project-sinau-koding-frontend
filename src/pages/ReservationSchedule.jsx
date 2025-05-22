import AddReservationForm from '@components/ReservationForm';
import ReservationScheduleHeader from '@components/ReservationScheduleHeader';
import RoomColumn from '@components/RoomColumn';
import Sidebar from '@components/Sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

const ReservationSchedule = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [rooms, setRooms] = useState([
    {
      name: 'Aster Room',
      price: 1000,
      reservations: [
        { title: 'PT Maju Jaya', time: '13.00 - 15.00 WIB', status: 'Done' },
        { title: 'Organisasi Muslim Pusat', time: '13.00 - 15.00 WIB', status: 'Up coming' },
      ],
    },
    {
      name: 'Blubell Room',
      price: 1000,
      reservations: [{ title: 'PT XYZ Corp', time: '10.00 - 11.00 WIB', status: 'In Progress' }],
    },
    {
      name: 'Camellia Room',
      price: 1000,
      reservations: [{ title: 'Alisa Company', time: '14.00 - 15.00 WIB', status: 'Up coming' }],
    },
  ]);

  const timeSlots = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}.00`);

  const [formData, setFormData] = useState({
    room: '',
    name: '',
    phone: '',
    company: '',
    date: '',
    startTime: '',
    endTime: '',
    participants: '',
    snack: '',
    addSnack: false,
    note: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddReservation = (data) => {
    // Gunakan data dari form submit
    const { room, company, startTime, endTime } = data;

    if (!room || !company || !startTime || !endTime) {
      alert('Please fill all required fields.');
      return;
    }

    const updatedRooms = rooms.map((r) => {
      if (r.name === room) {
        return {
          ...r,
          reservations: [
            ...r.reservations,
            {
              title: company,
              time: `${startTime} - ${endTime} WIB`,
              status: 'Up coming',
            },
          ],
        };
      }
      return r;
    });

    setRooms(updatedRooms);
    setIsSidebarOpen(false);
    setFormData({
      room: '',
      name: '',
      phone: '',
      company: '',
      date: '',
      startTime: '',
      endTime: '',
      participants: '',
      snack: '',
      addSnack: false,
      note: '',
    });
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      <Sidebar />

      <div className='flex-1 p-6'>
        <ReservationScheduleHeader />

        <div className='p-3'>
          <div className='mb-4 rounded bg-white p-4 shadow'>
            <div className='flex flex-wrap items-center gap-3 md:flex-nowrap'>
              <h2 className='w-full border-r pr-4 text-sm font-medium text-gray-700 md:w-auto md:text-base'>
                {new Date().toLocaleDateString('id-ID', {
                  weekday: 'long',
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </h2>
              <input
                type='date'
                className='w-full flex-1 rounded border px-3 py-2 text-sm md:w-auto'
              />
              <input
                type='date'
                className='w-full flex-1 rounded border px-3 py-2 text-sm md:w-auto'
              />
              <button className='rounded border border-orange-500 px-4 py-2 text-sm text-orange-500 hover:bg-orange-50'>
                Search
              </button>
              <button
                className='rounded bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600'
                onClick={() => setIsSidebarOpen(true)}
              >
                + Add New Reservation
              </button>
            </div>
          </div>

          <div className='scrollbar-thin rounded bg-white p-6 shadow'>
            <div className='h-90 min-w-full overflow-scroll xl:h-180'>
              <div className='flex min-w-[1000px]'>
                <div className='w-[100px]'>
                  <div className='h-[48px]'></div>
                  {timeSlots.map((time, idx) => (
                    <div
                      key={idx}
                      className='flex h-[60px] items-start justify-center pt-2 text-sm text-gray-600'
                    >
                      {time}
                    </div>
                  ))}
                </div>

                {rooms.map((room, index) => (
                  <RoomColumn key={index} room={room} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay Background */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 z-30 bg-black opacity-25'
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key='sidebar'
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed top-0 right-0 bottom-0 z-40 w-96 overflow-auto bg-white shadow-lg'
          >
            <AddReservationForm
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              onSubmit={handleAddReservation}
              rooms={rooms}
              snacks={[
                { name: 'Snack A', price: 10000 },
                { name: 'Snack B', price: 10000 },
              ]}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ReservationSchedule;
