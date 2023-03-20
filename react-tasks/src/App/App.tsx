import './App.css';
import React from 'react';
import Header from './../components/Header/Header';
import AboutUs from '../pages/About/About';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './../pages/NotFound/NotFound';
import Home from './../pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate to={'/404'} />} />
        </Routes>
      </div>
    );
  }
}

export default App;

