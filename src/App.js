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
import UpdateGroup from './components/Groups/UpdateGroup';
import ShowUser from './components/Users/ShowUser';
import UpdateUser from './components/Users/UpdateUser';
import ShowGroup from './components/Groups/ShowGroup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/users" element={<UserDetails />} />
          <Route path="/users/:id" element={<ShowUser />} />
          <Route path="/users/new" element={<ShowUser />} />
          <Route path="/users/edit/:id" element={<UpdateUser />} />
          <Route path="/groups" element={<GroupDetails />} />
          <Route path="/groups/:id" element={<ShowGroup />} />
          <Route path="/groups/new" element={<ShowGroup />} />
          <Route path="/groups/edit/:id" element={<UpdateGroup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
