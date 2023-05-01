import './App.css';
import React, { Suspense, lazy } from 'react';
import Header from './../components/Header/Header';
import AboutUs from '../pages/About/About';
import { Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './../pages/NotFound/NotFound';
const Home = lazy(() => import('./../pages/Home/Home'));
import NewCard from './../pages/NewCard/NewCard';
import Spinner from '../components/Spinner/Spinner';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route path="/form" element={<NewCard />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate to={'/404'} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
