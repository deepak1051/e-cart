
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './app.css';
import 'react-toastify/dist/ReactToastify.css';
import SingleProduct from './pages/SingleProduct';
import CartProducts from './pages/CartProducts';
import AllProducts from './pages/AllProducts';
import Header from './components/Header';
import Footer from './components/Footer';
import FrontPage from './pages/FrontPage';


const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />

      <Routes>
        <Route element={<FrontPage />} path='/' />
        <Route element={<CartProducts />} path='/cart' />
        <Route element={<SingleProduct />} path='/products/:id' />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
