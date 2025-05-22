import React, { useState, useEffect } from 'react';

const RoomForm = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    capacity: '',
    price: '',
    type: 'Small',
    photo: null,
  });

  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name || '',
        capacity: initialData.capacity || '',
        price: initialData.price || '',
        type: initialData.type || 'Small',
        photo: null,
      });
      if (initialData.photoUrl) {
        setPreview(initialData.photoUrl);
      }
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.capacity || !formData.price) return;
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='fixed top-0 right-0 z-50 flex h-full min-h-screen w-96 flex-col justify-between overflow-y-auto bg-white p-6 shadow-lg'
    >
      {/* Konten Form */}
      <div>
        <h2 className='mb-6 text-2xl font-bold text-gray-800'>
          {initialData ? 'Edit Room' : 'Add New Room'}
        </h2>

        <div className='mb-6'>
          <label className='mb-2 block font-medium text-gray-700'>Room Photo</label>
          <input
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className='w-full rounded border border-gray-300 p-2'
          />
          {preview && (
            <img
              src={preview}
              alt='Preview'
              className='mt-3 h-40 w-full rounded border object-contain'
            />
          )}
        </div>

        <div className='mb-4'>
          <label className='mb-1 block font-medium text-gray-700'>Room Name</label>
          <input
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
          />
        </div>

        <div className='mb-4'>
          <label className='mb-1 block font-medium text-gray-700'>Capacity</label>
          <input
            name='capacity'
            value={formData.capacity}
            onChange={handleChange}
            className='w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
          />
        </div>

        <div className='mb-4'>
          <label className='mb-1 block font-medium text-gray-700'>Price</label>
          <input
            name='price'
            value={formData.price}
            onChange={handleChange}
            className='w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
          />
        </div>

        <div className='mb-6'>
          <label className='mb-1 block font-medium text-gray-700'>Type</label>
          <select
            name='type'
            value={formData.type}
            onChange={handleChange}
            className='w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none'
          >
            <option value='Small'>Small</option>
            <option value='Medium'>Medium</option>
            <option value='Large'>Large</option>
          </select>
        </div>
      </div>

      {/* Tombol */}
      <div className='mt-auto flex justify-end gap-3 border-t border-gray-200 pt-6'>
        <button
          type='button'
          onClick={onCancel}
          className='rounded border border-gray-400 px-4 py-2 text-gray-700 transition hover:bg-gray-100'
        >
          Cancel
        </button>
        <button
          type='submit'
          className='rounded bg-orange-500 px-4 py-2 text-white transition hover:bg-orange-600'
        >
          {initialData ? 'Update' : 'Add'}
        </button>
      </div>
    </form>
  );
};

export default RoomForm;
