import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Navigation from './components/navigation/Navigation.component'
import Footer from './components/footer/footer.component';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation/>
      <App />
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
