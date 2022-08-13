import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './components/Home/Admin';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RequireAuth from './components/Login/RequireAuth';
import Header from './components/Shared/Header';

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
    </div>
  );
}

export default App;
