import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import MyCart from './pages/MyCart';
import NewRoom from './pages/NewRoom';
import NotFound from './pages/NotFound';
import RoomDetail from './pages/RoomDetail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/rooms', element: <AllRooms /> },
      {
        path: '/rooms/new',
        element: (
          <ProtectedRoute requireAdmin={true}>
            <NewRoom />
          </ProtectedRoute>
        ),
      },
      {
        path: '/rooms/:id',
        element: <RoomDetail />,
      },
      {
        path: '/carts',
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
    ],
  },
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
