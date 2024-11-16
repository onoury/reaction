import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navbar, Footer } from './components/layout';

function App(){
  return (
    <>
      <Navbar />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);