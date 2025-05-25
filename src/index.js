import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter =createBrowserRouter([{
  errorElement:<ErrorPage/>,
  path:"/",
  element:<App/>,
  children:[
{
  path:"/",
  element:<LoginPage/>
},
{
  path:"/apiregister903248756894934250",
  element:<RegisterPage/>
},
{
  path:"/home7823462138473454fgfg",
  element:<HomePage/>
}
  ]
}])
root.render(
  <React.StrictMode>
<RouterProvider router={myRouter} />
  </React.StrictMode>
);
