import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './Components/Auth';
import ViewProducts from './Components/ViewProducts';
import AddToBag from './Components/AddToBag';
import PlaceOrder from './Components/PlaceOrder';
import Address from './Components/Address';
import {store} from './Components/Redux/store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
const allRoutes = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: 'login',
    element: <Auth/>
  },
  {
    path: 'view-products',
    element: <ViewProducts/>
  },
  {
    path: 'view-products/:id',
    element: <AddToBag/>
  },
  {
    path: 'place-order',
    element: <PlaceOrder/>
  },
  {
    path: 'address-details',
    element: <Address/>
  } 
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={allRoutes}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
