/*import "./App.css";
import Login from "./Login";
import UserDashboard from "./UserDashBoard";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  //return <UserDashboard userId={1} />;
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/login" element={<Login />} />
        <Route path="/users/:userid" element={<div>users</div>}>
          
          <Route path="*" element={<div>user *</div>} />
          <Route path="info" element={<div>info</div>} />
          <Route path="todos/:id" element={<div>todos</div>} />
          <Route path="posts/:id" element={<div>posts</div>} />
          <Route path="albums/:id" element={<div>albums</div>} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/

import "./App.css";
import Login from "./Login";
import Users from "./Users";
import Posts from "./Posts";
import Todos from "./Todos";
import Info from "./Info";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



function App() {

  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/users/:id?" element={<Users />}>
          <Route path="info/:id?" element={<Info />} />
          <Route path="todos/:id?" element={<Todos />} />
          <Route path="posts/:id?" element={<Posts />} />
          <Route path="albums/:id?" element={<div>albums</div>} />
        </Route>
      </Routes>
  );
}

export default App;
