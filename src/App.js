import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Home/Admin';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';

function App() {
  return (
    <div>
      <Home />
      <Routes>
        <Route path='/login' element={<Login />} />
        <RequireAuth>
          <Route path='/admin' element={<Admin />} />
        </RequireAuth>
      </Routes>
    </div>
  );
}

export default App;
