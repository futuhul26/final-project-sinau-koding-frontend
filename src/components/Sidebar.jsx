import {
  ArrowLeft,
  ArrowRight,
  Building,
  Calendar,
  ClipboardList,
  LayoutDashboard,
  Settings,
} from 'lucide-react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const toggleSidebar = () => setIsExpanded(!isExpanded);
  return (
    <aside
      className={`flex flex-col overflow-hidden border-r border-gray-200 py-6 transition-all duration-300 ${
        isExpanded ? 'w-72 px-4' : 'w-16 items-center'
      }`}
    >
      <div
        className={`flex ${isExpanded ? 'justify-between' : 'flex-col items-center'} w-full px-4`}
      >
        <div className='flex items-center space-x-4'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-semibold text-white'>
            E
          </div>
          {isExpanded && (
            <span className='flex text-[20px] font-bold text-neutral-600'>E-Meeting</span>
          )}
        </div>
        {isExpanded && (
          <button
            onClick={toggleSidebar}
            className='mt-2 ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-orange-300 text-orange-500 transition hover:bg-orange-50'
          >
            <ArrowLeft />
          </button>
        )}
      </div>
      {/* Tombol panah di bawah saat collapsed */}
      {!isExpanded && (
        <button
          onClick={toggleSidebar}
          className='mt-2 flex h-10 w-10 items-center justify-center rounded-full border border-orange-300 text-orange-500 transition hover:bg-orange-50'
        >
          <ArrowRight />
        </button>
      )}
      {/* Menu items */}
      <div className='my-6 w-full border-b border-gray-200' />
      <nav className='flex flex-col gap-4'>
        <SidebarItem
          to='/dashboard'
          icon={<LayoutDashboard size={25} />}
          label='Dashboard'
          isExpanded={isExpanded}
        />
        <SidebarItem
          to='/calendar'
          icon={<Calendar size={25} />}
          label='Reservation Schedule'
          isExpanded={isExpanded}
        />
        <SidebarItem
          to='/room-list'
          icon={<Building size={25} />}
          label='Rooms'
          isExpanded={isExpanded}
        />
        <SidebarItem
          to='/report'
          icon={<ClipboardList size={25} />}
          label='Report'
          isExpanded={isExpanded}
        />
        <SidebarItem
          to='/settings'
          icon={<Settings size={25} />}
          label='Settings'
          isExpanded={isExpanded}
        />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ to, icon, label, isExpanded }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative flex items-center gap-4 rounded-md px-3 py-2 text-lg font-medium text-neutral-400 no-underline transition hover:bg-orange-50 hover:text-orange-500 ${
        isExpanded ? 'justify-start' : 'justify-center'
      } ${isActive ? 'text-orange-500' : ''}`
    }
  >
    {({ isActive }) => (
      <>
        {isActive && (
          <span className='absolute top-1/2 right-0 h-[30px] w-[3px] -translate-y-1/2 rounded-full bg-orange-500'></span>
        )}
        {icon}
        {isExpanded && <span>{label}</span>}
      </>
    )}
  </NavLink>
);

export default Sidebar;
