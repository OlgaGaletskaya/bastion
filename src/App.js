import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Header from "./components/Header";
import AppRouter from "./components/AppRouter";
import './style/style.css'
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
