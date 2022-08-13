import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Admin from './components/Home/Admin';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import Header from './components/Shared/Header';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={
          <RequireAuth>
            <Admin />
          </RequireAuth>
        } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
