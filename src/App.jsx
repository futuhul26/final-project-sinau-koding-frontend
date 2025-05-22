import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import DashboardAdmin from './pages/DashboardAdmin';
import Login from './pages/Login';
import Register from './pages/Register';
import Report from './pages/Report';
import ReservationSchedule from './pages/ReservationSchedule';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordEmail from './pages/ResetPasswordEmail';
import RoomReservation from './pages/RoomReservation';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/calendar' element={<ReservationSchedule />} />
        <Route path='/dashboard' element={<DashboardAdmin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/report' element={<Report />} />
        <Route path='/reset-password-email' element={<ResetPasswordEmail />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/room-reservation' element={<RoomReservation />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </Router>
  );
};

export default App;
