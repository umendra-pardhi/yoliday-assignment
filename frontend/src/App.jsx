import { useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';
import Inputs from './components/Inputs';
import Profile from './components/Profile';

function App() {
  return (
    <RouterProvider router={router} />
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      
        <Main />

    ),
  },
  {
    path: "*",
    element: (
      
        <><h1>Not found</h1></>

    ),
  },
  {
    path: "/dashboard",
    element: (

       <div className="flex w-full h-screen bg-[#F5F5F5]">

        <Sidebar />
        <Dashboard />
        </div>
    ),
  },
  {
    path: "/portfolio",
    element: (
      <Main />
    ),
  },
  {
    path: "/inputs",
    element: (
      <div className="flex w-full h-screen bg-[#F5F5F5]">
        <Sidebar />
      <Inputs/>
      </div>
    )
  },
  {
    path: "/profile",
    element: (
      <div className="flex w-full h-screen bg-[#F5F5F5]">
       <Sidebar />
      <Profile/>
      </div>
    ),
  },

]);

export default App;
