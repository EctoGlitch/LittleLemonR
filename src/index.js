import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import Header from './Core Comps/Header';

//pages
import Home from './Core Comps/Home'
import About from './Core Comps/About';
import Menu from './Core Comps/Menu';
import Reservations from './Core Comps/Reservations';
import Order_Online from './Core Comps/Order_Online';
import Login from './Core Comps/Login';
import Cart from './Core Comps/Cart';
import Not_Found from './Core Comps/Not_Found';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Not_Found />,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/menu',
        element: <Menu/>
      },
      {
        path: '/reservations',
        element: <Reservations/>
      },
      {
        path: '/order-online',
        element: <Order_Online/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/cart',
        element: <Cart/>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
