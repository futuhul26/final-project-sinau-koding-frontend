import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <header className='mb-6 flex items-center justify-between'>
      <h1 className='text-lg font-semibold text-neutral-800'>Room Reservation</h1>
      <div className='flex items-center space-x-4'>
        <div className='flex items-center space-x-2'>
          <img
            src='./src/images/john-doe.jpg'
            alt='John Doe'
            className='h-8 w-8 rounded-full object-cover'
            width={32}
            height={32}
          />
          <div className='text-left'>
            <p className='text-sm leading-none font-semibold text-neutral-800'>John Doe</p>
            <p className='text-xs leading-none text-neutral-400'>User</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          aria-label='Logout'
          className='text-red-500 transition hover:text-red-600'
        >
          <LogOut />
        </button>
      </div>
    </header>
  );
};

export default Header;
