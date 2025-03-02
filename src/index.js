import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Components/Redux/store';
import ViewProducts from './Components/ViewProducts';
import AddToBag from './Components/AddToBag';
import PlaceOrder from './Components/PlaceOrder';
import Address from './Components/Address';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view-products" element={<ViewProducts />} />
          <Route path="/view-products/:id" element={<AddToBag />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/address-details" element={<Address />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
