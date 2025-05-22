import ReservationCard from './ReservationCard';

const RoomColumn = ({ room }) => {
  return (
    <div className='w-1/3 border border-gray-200 p-2'>
      <h3 className='border-b border-gray-200 p-2 text-center font-semibold'>{room.name}</h3>
      <div className='mt-4 space-y-3'>
        {room.reservations.map((res, idx) => (
          <ReservationCard key={idx} {...res} />
        ))}
      </div>
    </div>
  );
};

export default RoomColumn;
