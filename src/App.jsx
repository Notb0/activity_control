import React from "react";
import { Routes, Route} from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './hoc/AuthProvider';
import { Notfoundpage } from './pages/Notfoundpage';
import { Home } from './pages/Home';
import { Timer } from "./pages/Timer";
import { Clock } from './pages/Clock';
import { ToDo } from './pages/ToDo';
import './App.css';

  
function App() {

  return (
    <AuthProvider>
        <div className='provider'>
          <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Home/>} />
              <Route path="/clock" element={<Clock />} />
              <Route path="/timer" element={<Timer />} />
              <Route path="/todo" element={<ToDo />} />
            </Route>
              <Route path="*" element={<Notfoundpage />} />
          </Routes></div>
      </AuthProvider>
  )
}

export default App