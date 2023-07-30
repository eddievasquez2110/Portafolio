
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './Pages/Inicio'
import Page404 from './Pages/Page404'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import './Assets/css/Header.css'
import './Assets/css/Footer.css'
import DetalleProyecto from "./Pages/DetalleProyecto";
import Proyectos from "./Pages/Proyectos";

function App() {

  return (
    <>
    <Router>
    <Header />
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/proyectos/:id' element={<DetalleProyecto />} />
        <Route path='*' element={<Page404 />} />
    </Routes>
    <Footer />
    </Router>
    <div className="estrellas">
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
      <div className="estrella"></div>
    </div>
    </>
  )
}

export default App
