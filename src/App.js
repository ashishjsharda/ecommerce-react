import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" component={HomePage} />
            <Route path="/products" component={ProductPage} />
            <Route path="/cart" component={CartPage} />
          </Routes>
          <Footer />
        </div>
      </Router>
  );
};

export default App;
