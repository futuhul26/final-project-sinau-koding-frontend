const statusColor = {
  'Done': 'bg-gray-100 text-gray-700',
  'In Progress': 'bg-green-100 text-green-600',
  'Up coming': 'bg-orange-100 text-orange-600',
};

const ReservationCard = ({ title, time, status }) => {
  return (
    <div className='relative rounded border-l-4 border-orange-500 bg-orange-50 p-2'>
      <div className='font-semibold'>{title}</div>
      <div className='text-xs text-gray-600'>{time}</div>
      <div
        className={`absolute top-2 right-2 rounded-full px-2 py-0.5 text-xs ${statusColor[status]}`}
      >
        {status}
      </div>
    </div>
  );
};

export default ReservationCard;
