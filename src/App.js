import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Header } from './components';
import { CreatProduct } from './components';
import { AnimatePresence } from 'framer-motion'
import Login from './pages/Login';
import Register from './pages/Registration';
import Cart from './pages/Cart';

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">

        <main>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/creatProduct' element={<CreatProduct />} />
            <Route path='/productDetails' element={<ProductDetails />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
