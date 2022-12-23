import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'
import Noticias from './Seccion2/Noticias';
import Navbar from './components/Navbar/Navbar'
import Archivo from './Seccion3/Archivo'
import {Banner}  from './components/Header/Greeting';
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <BrowserRouter>
  <Navbar />
  <Banner />
    <Routes>
      <Route index element={<App />} />
      <Route path='noticias' element={<Noticias />} />
      <Route path='archivo' element={<Archivo />} />
    </Routes>
    <Footer />
</BrowserRouter>,
  document.getElementById('root')
);
