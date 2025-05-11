import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordEmail from './pages/ResetPasswordEmail';
import RoomReservation from './pages/RoomReservation';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset-password-email' element={<ResetPasswordEmail />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/room-reservation' element={<RoomReservation />} />
      </Routes>
    </Router>
  );
};

export default App;
