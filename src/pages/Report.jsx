import ReportHeader from '@components/ReportHeader';
import Sidebar from '@components/Sidebar';
import { AnimatePresence, motion } from 'framer-motion';
import { Edit } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Report = () => {
  const initialData = Array(100)
    .fill(null)
    .map((_, index) => ({
      date: '2024-10-01',
      roomName: index % 2 === 0 ? 'Aster Room' : 'Daisy Room',
      roomType: index % 3 === 0 ? 'Small' : index % 2 === 0 ? 'Medium' : 'Large',
      status: index % 3 === 0 ? 'Booked' : index % 2 === 0 ? 'Cancel' : 'Paid',
      capacity: index % 2 === 0 ? 10 : 20,
      pricePerHour: index % 2 === 0 ? 100000 : 200000,
      duration: index % 2 === 0 ? 2 : 4,
      totalParticipants: index % 2 === 0 ? 8 : 15,
      customerName: index % 2 === 0 ? 'Angela Thomas' : 'John Doe',
      phoneNumber: index % 2 === 0 ? '085123456789' : '081987654321',
      company: index % 2 === 0 ? 'PT Maju Jaya' : 'PT Sejahtera',
      snacks: [
        {
          category: 'Lunch',
          package: 'Packages Lunch 1 - Rp 20.000/box',
          quantity: index % 2 === 0 ? 8 : 15,
          pricePerBox: 20000,
        },
      ],
    }));

  const [data, setData] = useState(initialData);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [roomType, setRoomType] = useState('');
  const [status, setStatus] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSlideOpen, setIsSlideOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalType, setModalType] = useState(null); // "paid" | "cancel"

  const statusColors = {
    Paid: 'bg-green-500',
    Booked: 'bg-yellow-500',
    Cancel: 'bg-red-500',
  };

  useEffect(() => {
    const filteredData = initialData.filter((item) => {
      const matchDate =
        (!startDate || item.date >= startDate) && (!endDate || item.date <= endDate);
      const matchRoomType = !roomType || item.roomType === roomType;
      const matchStatus = !status || item.status === status;
      return matchDate && matchRoomType && matchStatus;
    });
    setData(filteredData);
    setCurrentPage(1);
  }, [startDate, endDate, roomType, status]);

  const handleEdit = (item) => {
    setSelectedItem(item);
    setIsSlideOpen(true);
  };

  const calculateTotal = (item) => {
    const roomCost = item.pricePerHour * item.duration;
    const snackCost = item.snacks.reduce(
      (total, snack) => total + snack.pricePerBox * snack.quantity,
      0
    );
    return roomCost + snackCost;
  };

  const DetailItem = ({ label, value }) => (
    <div className='flex justify-between border-b border-gray-200 pb-2'>
      <span className='font-medium text-gray-600'>{label}</span>
      <span className='text-gray-800'>{value}</span>
    </div>
  );

  // Pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleConfirmAction = () => {
    if (modalType === 'paid') {
      toast.success('Reservation marked as paid.');
    } else if (modalType === 'cancel') {
      toast.success('Reservation has been cancelled.');
    }

    setModalType(null);
    setIsSlideOpen(false);
  };

  return (
    <>
      <div className='flex min-h-screen bg-gray-100'>
        <Sidebar />

        <main className='flex-1 p-6'>
          <ReportHeader />

          <section className='flex-1 overflow-auto p-3'>
            {/* Filter Section */}
            <div className='rounded bg-white p-5'>
              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>Start Date</label>
                  <input
                    type='date'
                    className='mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none'
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>End Date</label>
                  <input
                    type='date'
                    className='mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none'
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>Room Type</label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className='mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none'
                  >
                    <option value=''>All Types</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                  </select>
                </div>
                <div>
                  <label className='text-sm font-semibold text-gray-600'>Status</label>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className='mt-1 w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none'
                  >
                    <option value=''>All Statuses</option>
                    <option value='Paid'>Paid</option>
                    <option value='Booked'>Booked</option>
                    <option value='Cancel'>Cancel</option>
                  </select>
                </div>
              </div>

              {/* Table */}
              <div className='mt-10 max-h-[650px] overflow-auto rounded-lg border border-gray-200 shadow-sm'>
                <table className='min-w-full divide-y divide-gray-200 text-left text-sm'>
                  <thead className='bg-gray-100 font-semibold text-gray-700'>
                    <tr>
                      <th className='px-4 py-3 whitespace-nowrap'>Date</th>
                      <th className='px-4 py-3 whitespace-nowrap'>Room Name</th>
                      <th className='px-4 py-3 whitespace-nowrap'>Room Type</th>
                      <th className='px-4 py-3 whitespace-nowrap'>Status</th>
                      <th className='px-4 py-3 whitespace-nowrap'>Action</th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-100 text-gray-600'>
                    {paginatedData.length > 0 ? (
                      paginatedData.map((item, index) => (
                        <tr
                          key={index}
                          className='cursor-pointer transition duration-200 hover:bg-gray-50'
                        >
                          <td className='px-4 py-3 whitespace-nowrap'>{item.date}</td>
                          <td className='px-4 py-3 whitespace-nowrap'>{item.roomName}</td>
                          <td className='px-4 py-3 whitespace-nowrap'>{item.roomType}</td>
                          <td className='px-4 py-3 whitespace-nowrap'>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${statusColors[item.status] || 'bg-gray-500'}`}
                            >
                              {item.status}
                            </span>
                          </td>
                          <td className='px-4 py-3 whitespace-nowrap'>
                            <button
                              onClick={() => handleEdit(item)}
                              aria-label='Edit reservation'
                              className='text-orange-500 hover:text-orange-600 focus:outline-none'
                            >
                              <Edit size={18} />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className='py-6 text-center text-gray-400'>
                          No data found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls - Bottom */}
              <div className='mt-4 flex flex-col items-center justify-between space-y-3 sm:flex-row sm:space-y-0'>
                <div className='flex items-center space-x-2'>
                  <label className='text-sm font-medium'>Show</label>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    className='w-18 rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-red-400 focus:outline-none'
                  >
                    <option value={30}>30</option>
                    <option value={50}>50</option>
                    <option value={70}>70</option>
                  </select>
                  <span className='text-sm text-gray-600'>entries</span>
                </div>

                <div className='flex items-center space-x-2'>
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    className='rounded bg-gray-200 px-3 py-1 hover:bg-gray-300 disabled:opacity-50'
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>
                  <span className='text-sm font-medium'>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    className='rounded bg-gray-200 px-3 py-1 hover:bg-gray-300 disabled:opacity-50'
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </section>

          {isSlideOpen && (
            <div
              className='fixed inset-0 z-30 bg-black opacity-25'
              onClick={() => setIsSlideOpen(false)}
            ></div>
          )}

          {/* Slide Panel */}
          <AnimatePresence>
            {isSlideOpen && selectedItem && (
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className='fixed top-0 right-0 bottom-0 z-40 w-96 overflow-auto bg-white shadow-lg'
              >
                <div className='flex h-full flex-col p-6'>
                  <button
                    onClick={() => setIsSlideOpen(false)}
                    className='mb-4 self-end rounded bg-gray-200 px-3 py-1 hover:bg-gray-300'
                  >
                    Close
                  </button>

                  <h2 className='mb-4 border-b border-gray-300 pb-2 text-xl font-semibold'>
                    Detail Reservation
                  </h2>

                  <DetailItem label='Date' value={selectedItem.date} />
                  <DetailItem label='Room Name' value={selectedItem.roomName} />
                  <DetailItem label='Room Type' value={selectedItem.roomType} />
                  <DetailItem label='Status' value={selectedItem.status} />
                  <DetailItem label='Capacity' value={selectedItem.capacity} />
                  <DetailItem
                    label='Price Per Hour'
                    value={`Rp ${selectedItem.pricePerHour.toLocaleString()}`}
                  />
                  <DetailItem label='Duration (hours)' value={selectedItem.duration} />
                  <DetailItem label='Total Participants' value={selectedItem.totalParticipants} />
                  <DetailItem label='Customer Name' value={selectedItem.customerName} />
                  <DetailItem label='Phone Number' value={selectedItem.phoneNumber} />
                  <DetailItem label='Company' value={selectedItem.company} />

                  <div className='mt-4 border-t border-gray-300 pt-4'>
                    <h3 className='mb-2 text-lg font-semibold'>Snack Packages</h3>
                    {selectedItem.snacks.map((snack, idx) => (
                      <div key={idx} className='mb-3'>
                        <div className='font-medium'>{snack.category}</div>
                        <div className='text-sm text-gray-700'>{snack.package}</div>
                        <div className='text-sm'>
                          Quantity: <span className='font-semibold'>{snack.quantity}</span>
                        </div>
                        <div className='text-sm'>
                          Price per Box: Rp {snack.pricePerBox.toLocaleString()}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className='mt-auto space-y-2 border-t border-gray-300 pt-4'>
                    <div className='flex justify-between text-lg font-semibold'>
                      <span>Total Cost:</span>
                      <span>Rp {calculateTotal(selectedItem).toLocaleString()}</span>
                    </div>

                    <div className='mt-4 flex gap-2'>
                      <button
                        className='flex-1 rounded bg-green-500 py-2 text-white hover:bg-green-600'
                        onClick={() => setModalType('paid')}
                      >
                        Paid
                      </button>
                      <button
                        className='flex-1 rounded bg-red-500 py-2 text-white hover:bg-red-600'
                        onClick={() => setModalType('cancel')}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal Konfirmasi */}
          <AnimatePresence>
            {modalType && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className='relative w-[90%] max-w-md rounded-lg bg-white p-6 shadow-lg'
                >
                  {/* Tombol X di kanan atas modal */}
                  <button
                    className='absolute top-3 right-3 text-gray-500 hover:text-gray-800'
                    onClick={() => setModalType(null)}
                  >
                    ×
                  </button>

                  <h2 className='mb-4 text-lg font-semibold'>Confirmation</h2>
                  <p className='mb-6'>
                    Are you sure you want to{' '}
                    <strong>{modalType === 'paid' ? 'mark as paid' : 'cancel'}</strong> this
                    reservation?
                  </p>

                  <div className='flex justify-end gap-3'>
                    <button
                      className='rounded bg-gray-200 px-4 py-2 hover:bg-gray-300'
                      onClick={() => setModalType(null)}
                    >
                      Cancel
                    </button>
                    <button
                      className={`rounded px-4 py-2 text-white ${
                        modalType === 'paid'
                          ? 'bg-green-500 hover:bg-green-600'
                          : 'bg-red-500 hover:bg-red-600'
                      }`}
                      onClick={handleConfirmAction}
                    >
                      OK
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </>
  );
};

export default Report;
