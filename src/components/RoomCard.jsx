import { AnimatePresence, motion } from 'framer-motion';
import { CircleDollarSign, Edit, Search, Trash, User } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

import Image from '../images/aster-room.jpg';
import RoomForm from './RoomForm';

const initialRooms = Array.from({ length: 12 }, (_, index) => ({
  id: index + 1,
  name: 'Aster Room',
  capacity: '10',
  price: '500000',
  type: ['Small', 'Medium', 'Large'][index % 3],
  image: Image,
}));

const RoomsCard = () => {
  const [rooms, setRooms] = useState(initialRooms);
  const [showModal, setShowModal] = useState(false);
  const [roomToDelete, setRoomToDelete] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedCapacity, setSelectedCapacity] = useState('');

  const handleDelete = () => {
    if (roomToDelete) {
      setRooms((prev) => prev.filter((room) => room.id !== roomToDelete.id));
      toast.success('Room successfully deleted');
      setShowModal(false);
      setRoomToDelete(null);
    }
  };

  const handleOpenModal = (room) => {
    setRoomToDelete(room);
    setShowModal(true);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleCapacityChange = (e) => {
    setSelectedCapacity(e.target.value);
  };

  const filterByCapacity = (room) => {
    const people = parseInt(room.capacity);
    switch (selectedCapacity) {
      case 'less10':
        return people < 10;
      case '11-50':
        return people >= 11 && people <= 50;
      case '51-100':
        return people >= 51 && people <= 100;
      default:
        return true;
    }
  };

  const filteredRooms = rooms.filter((room) => {
    const matchName = room.name.toLowerCase().includes(searchQuery);
    const matchType = selectedType ? room.type === selectedType : true;
    const matchCapacity = filterByCapacity(room);
    return matchName && matchType && matchCapacity;
  });

  const handleAddNewRoom = () => {
    setEditingRoom(null);
    setShowForm(true);
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setShowForm(true);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingRoom(null);
  };

  const handleSubmitRoom = (data) => {
    if (editingRoom) {
      // Update room
      setRooms((prev) => prev.map((r) => (r.id === editingRoom.id ? { ...r, ...data } : r)));
      toast.success('Room updated successfully');
    } else {
      // Add room
      const newRoom = {
        ...data,
        id: rooms.length + 1,
        image: Image,
      };
      setRooms((prev) => [...prev, newRoom]);
      toast.success('Room updated successfully');
    }

    setShowForm(false);
    setEditingRoom(null);
  };

  return (
    <div className='h-[90%] rounded bg-white p-6'>
      {/* Form Add/Edit Room */}

      {showForm && (
        <div
          className='fixed inset-0 z-30 bg-black opacity-25'
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <AnimatePresence>
        {showForm && (
          <motion.div
            key='room-form'
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className='fixed top-0 right-0 bottom-0 z-40 w-96 overflow-auto bg-white shadow-lg'
          >
            <RoomForm
              onSubmit={handleSubmitRoom}
              onCancel={handleCancelForm}
              initialData={editingRoom}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search & Filters */}
      <div className='mb-6 flex flex-wrap items-center gap-4'>
        <input
          type='text'
          placeholder='Enter the keyword here...'
          value={searchQuery}
          onChange={handleSearchChange}
          className='min-w-[200px] flex-1 rounded-md border border-gray-300 px-4 py-2'
        />
        <select
          value={selectedType}
          onChange={handleTypeChange}
          className='min-w-[150px] rounded-md border border-gray-300 px-4 py-2'
        >
          <option value=''>Room Type</option>
          <option value='Small'>Small</option>
          <option value='Medium'>Medium</option>
          <option value='Large'>Large</option>
        </select>
        <select
          value={selectedCapacity}
          onChange={handleCapacityChange}
          className='min-w-[150px] rounded-md border border-gray-300 px-4 py-2'
        >
          <option value=''>Capacity</option>
          <option value='less10'>Kurang Dari 10</option>
          <option value='11-50'>11-50</option>
          <option value='51-100'>51-100</option>
        </select>
        <button className='flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-white'>
          <Search />
          Search
        </button>
        <button
          onClick={handleAddNewRoom}
          className='ml-auto rounded-md bg-[#FF5C00] px-4 py-2 text-white'
        >
          + Add New Room
        </button>
      </div>

      {/* Room Grid */}
      <div className='h-185 overflow-y-auto p-4'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {filteredRooms.length > 0 ? (
            filteredRooms.map((room) => (
              <div
                key={room.id}
                className='group relative overflow-hidden rounded-xl border border-gray-200 shadow-sm'
              >
                <div className='relative'>
                  <img src={room.image} alt={room.name} className='h-40 w-full object-cover' />
                  <div className='absolute top-2 right-2 flex gap-2'>
                    <button
                      onClick={() => handleOpenModal(room)}
                      className='rounded-full bg-white p-1 shadow'
                    >
                      <Trash className='text-red-500' />
                    </button>
                    <button
                      onClick={() => handleEditRoom(room)}
                      className='rounded-full bg-white p-1 shadow'
                    >
                      <Edit className='text-orange-500' />
                    </button>
                  </div>
                  <div className='absolute right-2 bottom-2 rounded-full bg-orange-500 px-2 py-1 text-xs text-white shadow'>
                    {room.type}
                  </div>
                </div>

                <div className='p-4'>
                  <h3 className='mb-2 text-lg font-semibold text-gray-800'>{room.name}</h3>
                  <div className='flex items-center justify-between space-x-4 text-sm'>
                    <div className='flex items-center space-x-1'>
                      <User className='text-orange-600' />
                      <span className='font-medium text-neutral-800'>{room.capacity} people</span>
                    </div>
                    <div className='flex items-center space-x-1'>
                      <CircleDollarSign className='text-orange-600' />
                      <span>
                        <span className='font-medium text-neutral-800'>Rp {room.price}/hours</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='col-span-full text-center text-gray-500'>No rooms found.</p>
          )}
        </div>
      </div>

      <AnimatePresence>
        {showModal && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
            <motion.div
              className='w-full max-w-md rounded bg-white p-6 shadow-lg'
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <h2 className='mb-4 text-xl font-semibold'>Delete Room</h2>
              <p className='mb-6'>
                Are you sure you want to delete <strong>&quot;{roomToDelete?.name}&quot;</strong>?
              </p>
              <div className='flex justify-end gap-3'>
                <button
                  className='rounded bg-gray-200 px-4 py-2 hover:bg-gray-300'
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className='rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RoomsCard;
