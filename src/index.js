import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css';
import App from './App.js';
import Scoreboard from './Scoreboard.js';
import { Locations, Help } from './App.js'
import Location from './Location.js'
import AnimalImage from './RandomDog';

// import reportWebVitals from './reportWebVitals';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'locations',
    element: <Locations/>,

    children: [
      {
        path: ':locationPath',
        element: <Location />
      },
      {
        index: true,
        element: <AnimalImage />
      }
    ]
  },
  {
    path: 'scoreboard',
    element: <Scoreboard />
  },
  {
    path: 'help',
    element: <Help />
  },

])   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
