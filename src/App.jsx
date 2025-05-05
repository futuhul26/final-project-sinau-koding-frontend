import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';
import ResetPasswordEmail from './pages/ResetPasswordEmail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/resetpasswordemail' element={<ResetPasswordEmail />} />
        <Route path='/resetpassword' element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
