import RoomCard from '@components/RoomCard';
import RoomListHeader from '@components/RoomListHeader';
import Sidebar from '@components/Sidebar';

const RoomList = () => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <div className='flex-1 p-6'>
        <RoomListHeader />
        <main className='p-3'>
          <RoomCard />
        </main>
      </div>
    </div>
  );
};

export default RoomList;
