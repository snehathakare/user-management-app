import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';
import GroupDetails from './pages/GroupDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/users" element={<UserDetails />} />
          <Route path="/groups" element={<GroupDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
