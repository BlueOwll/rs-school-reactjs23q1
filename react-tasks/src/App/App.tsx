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
{
  /* <div className="App">
<div>
  <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://reactjs.org" target="_blank" rel="noreferrer">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
  <p>
    Edit <code>src/App.tsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
</div> */
}
