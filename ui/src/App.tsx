import { Component } from 'react';
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WomenPage from './pages/Women';
import Men from './pages/Men';
import Kids from './pages/Kids';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path="/category/women" element={<WomenPage />} />
          <Route path="/category/men" element={<Men />} />
          <Route path="/category/kids" element={<Kids />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
